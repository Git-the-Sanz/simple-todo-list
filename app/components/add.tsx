'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Add = () => {
  const [content, setContent] = useState('');
  const { refresh } = useRouter();

  const addTodo = async () => {
    try {
      const body = { content };
      await fetch(`/api/task`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      setContent('')
      refresh()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex mt-4'>
      <input
        onChange={(e) => setContent(e.target.value)}
        value={content}
        className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker'
        placeholder='Add Todo'
      />
      <button disabled={!content} onClick={() => addTodo()} className='flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal'>
        Add
      </button>
    </div>
  );
};

export default Add;
