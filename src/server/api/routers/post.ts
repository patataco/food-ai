import { TRPCError } from '@trpc/server';
import OpenAI from 'openai';
import * as process from 'process';
import { z } from 'zod';

import { DishParams } from '~/models';
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '~/server/api/trpc';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export const aiRouter = createTRPCRouter({
  generateText: protectedProcedure
    .input(DishParams)
    .mutation(async ({ ctx, input }) => {
      const prompt = JSON.stringify(input);

      try {
        const completion: OpenAI.Chat.Completions.ChatCompletion =
          await openai.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
          });
        const generatedText = completion.choices[0]?.message?.content ?? '';

        await ctx.db.recipe.create({
          data: {
            ingredients: prompt,
            recipe: generatedText,
            createdBy: { connect: { id: ctx.session.user.id } },
          },
        });

        return generatedText;
      } catch (e) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'something went wrongs',
        });
      }
    }),
});
export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: 'desc' },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return 'you can now see this secret message!';
  }),
});
