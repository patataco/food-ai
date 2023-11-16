'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { ChatContent, type ChatItem } from '~/app/_components/ChatContent';
import { api } from '~/trpc/react';

/**
 *
 */
export function CreatePost() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [chatItems, setChatItems] = useState<ChatItem[]>([]);
  const [prompt, setPrompt] = useState<string>('');
  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName('');
    },
  });
  console.log(chatItems);
  const generatedTextMutation = api.ai.generateText.useMutation({
    onSuccess: (data) => {
      setChatItems([
        ...chatItems,
        {
          content: data,
        },
      ]);
    },
  });

  const handleUpdate = () => {
    setPrompt('');
    setChatItems([...chatItems, { content: prompt }]);
    console.log(1);
    generatedTextMutation.mutate({
      ingredients: ['양파', '감자', '설탕'],
      typeOfCuisine: '아무거나',
    });
    console.log(2);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate();
        }}
        className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Title"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-black"
        />
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createPost.isLoading}>
          {createPost.isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <ChatContent chatItems={chatItems} />
    </>
  );
}
