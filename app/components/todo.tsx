'use client';

import { Task } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  data: Task;
}

const Todo = (props: Props) => {
  const {
    data: { completed, content, id },
  } = props;
  const { refresh } = useRouter();

  async function updateTask(id: number): Promise<void> {
    await fetch(`/api/task/${id}`, {
      method: 'PUT',
    });
    refresh();
  }

  async function deleteTask(id: number): Promise<void> {
    await fetch(`/api/task/${id}`, {
      method: 'DELETE',
    });
    refresh();
  }

  const completionStyles = completed ? 'text-green border-green hover:bg-green' : 'text-grey border-grey hover:bg-grey';

  return (
    <div className='flex mb-4 items-center'>
      <p className='w-full text-grey-darkest'>{content}</p>
      <button
        onClick={() => updateTask(id)}
        className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green ${completionStyles}`}
      >
        {completed ? 'Done' : 'Ongoing'}
      </button>
      <button onClick={() => deleteTask(id)} className='flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red'>
        Remove
      </button>
    </div>
  );
};

export default Todo;
