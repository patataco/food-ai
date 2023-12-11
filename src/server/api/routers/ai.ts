import { TRPCError } from '@trpc/server';
import OpenAI from 'openai';
import * as process from 'process';
import { z } from 'zod';

import { DishParams, Recipes } from '~/models';
import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';
import { generatePrompt, getChatParams } from '~/utils';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export const aiRouter = createTRPCRouter({
  generateText: protectedProcedure
    .input(DishParams)
    .mutation(async ({ ctx, input: payload }) => {
      try {
        const prompt = generatePrompt(payload);
        const params = getChatParams(prompt);
        const completion = await openai.chat.completions.create(params);
        const generatedText = completion?.choices[0]?.message?.content ?? '';
        console.log('res', generatedText);
        const parsed = Recipes.safeParse(JSON.parse(generatedText));
        if (parsed.success) {
          const recipes = parsed.data;
          return await ctx.db.recipe.create({
            data: {
              ingredients: JSON.stringify(payload),
              recipes: JSON.stringify(recipes),
              createdBy: { connect: { id: ctx.session.user.id } },
            },
          });
        } else {
          console.log(generatedText);
          console.error(parsed.error);
        }
      } catch (e) {
        console.error(e);
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'something went wrongs',
        });
      }
    }),

  getRecipeById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const { id } = input;
      return await ctx.db.recipe.findUnique({
        where: { id },
      });
    }),

  getRecipesList: protectedProcedure.query(({ ctx }) => {
    return ctx.db.recipe.findMany({
      orderBy: { createdAt: 'desc' },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),
});
