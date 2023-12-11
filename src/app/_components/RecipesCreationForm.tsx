'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { type DefaultSession } from 'next-auth';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import DishParamsSubmitButton from '~/app/_components/DishParamsSubmitButton';
import ExtraDescriptionInput from '~/app/_components/ExtraDescriptionInput';
import FormErrorMessage from '~/app/_components/FormErrorMessage';
import IngredientsList from '~/app/_components/IngredientsList';
import IngredientsSection from '~/app/_components/IngredientsSection';
import PreferencesSelector from '~/app/_components/PreferencesSelector';
import SeasoningsList from '~/app/_components/SeasoningsList';
import { SubTitle } from '~/app/_components/SubTitle';
import TitleWrapper from '~/app/_components/TitleWrapper';
import TypeOfCuisineSelector from '~/app/_components/TypeOfCuisineSelector';
import BackDrop from '~/app/_components/ui/BackDrop';
import { Form } from '~/app/_components/ui/form';
import { DishParams, type DishParamsType } from '~/models';
import { api } from '~/trpc/react';

const RecipesCreationForm = ({
  session,
}: {
  session: DefaultSession | null;
}) => {
  const { isLoading, mutateAsync } = api.ai.generateText.useMutation();
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const form = useForm<DishParamsType>({
    resolver: zodResolver(DishParams),
    mode: 'onSubmit',
    defaultValues: {
      ingredients: [],
      seasoning: [],
      preferences: [],
      typeOfCuisine: '',
      extraDescription: '',
    },
  });

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);
  const onSubmit = async () => {
    if (!session) {
      setOpen(true);
      return;
    }
    const result = await mutateAsync(form.getValues());
    if (result?.id) {
      router.push(`/recipe/${result.id}`);
    } else {
      console.error('No ID returned from the server.');
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4 px-6">
        <BackDrop isLoading={isLoading} />
        <IngredientsSection>
          <TitleWrapper>
            <SubTitle>재료</SubTitle>
            <FormErrorMessage title="ingredients" />
          </TitleWrapper>
          <IngredientsList />
        </IngredientsSection>
        <IngredientsSection>
          <TitleWrapper>
            <SubTitle>양념</SubTitle>
            <FormErrorMessage title="seasoning" />
          </TitleWrapper>
          <SeasoningsList />
        </IngredientsSection>
        <IngredientsSection>
          <TitleWrapper>
            <SubTitle>요리 종류</SubTitle>
            <FormErrorMessage title="typeOfCuisine" />
          </TitleWrapper>
          <TypeOfCuisineSelector />
        </IngredientsSection>
        <IngredientsSection>
          <TitleWrapper>
            <SubTitle className="pt-2">기호</SubTitle>
            <FormErrorMessage title="preferences" className="pt-2 md:pt-0" />
          </TitleWrapper>
          <PreferencesSelector />
        </IngredientsSection>
        <IngredientsSection>
          <SubTitle className="pt-2">추가 요청사항</SubTitle>
          <ExtraDescriptionInput />
        </IngredientsSection>
        <DishParamsSubmitButton open={open} setOpen={setOpen} />
      </form>
    </Form>
  );
};
export default RecipesCreationForm;
