import React from 'react';

const Welcome = () => {
    return (
        <div className='h-100 w-full flex items-center justify-center bg-teal-lightest font-sans'>
        <div className='bg-white rounded shadow p-6 m-4 w-full lg:w-3/4'>
          <div className='mb-4'>
            <h1 className='text-lg font-weight:700 text-center'>Welcome! Login to start using your todo list.</h1>
          </div>
        </div>
      </div>
    );
};

export default Welcome;