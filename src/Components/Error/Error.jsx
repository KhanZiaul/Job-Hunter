import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    let errors = useRouteError()
    return (
        <div className='flex font-mono flex-col justify-center items-center min-h-[100vh]'>
            <h2 className='text-6xl text-red-500 font-semibold'>{errors.statusText}</h2>
            <h2 className='text-6xl my-5 font-semibold text-red-500'>{errors.status}</h2>
            <p className='text-xl font-bold text-red-600 border-2 border-red-200 rounded-md p-5'>{errors.error.message}</p>

        </div>
    );
};

export default Error;