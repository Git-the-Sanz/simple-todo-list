import { Task } from '@prisma/client';
import React from 'react';
import Todo from './todo';
import Add from './add';

interface Props {
  feed: Task[];
}

const TaskList = (props: Props) => {
  const { feed } = props;

  return (
    <>
      <div className='h-100 w-full flex items-center justify-center bg-teal-lightest font-sans'>
        <div className='bg-white rounded shadow p-6 m-4 w-full lg:w-3/4'>
          <div className='mb-4'>
            <h1 className='text-lg font-weight: 700'>Todo List</h1>
            <Add />
          </div>
          <div>
            {feed.map((t) => (
              <Todo key={t.id} data={t} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
