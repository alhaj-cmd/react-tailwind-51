import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const Feature = ({feature}) => {
    return (
        <div>
            <div className='flex items-center'>
            <CheckCircleIcon className='h-4 y-4 text-green-500'></CheckCircleIcon>
            <p className='ml-2'>{feature}</p>

           </div>
        </div>
    );
};

export default Feature;