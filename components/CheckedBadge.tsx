import React from 'react';
import Image from 'next/image';

const CheckedBadge = () => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 rounded-lg border border-brand-500 '>
      <div className='absolute bg-brand-500 top-0 right-0 size-3 flex items-center justify-center'>
        <Image src='/icons/check.svg' width={8} height={8} alt='' />
      </div>
      <div className='absolute top-0 right-3 w-0 h-0 border-l-12 border-l-transparent border-y-12 border-b-transparent border-t-brand-500'></div>
      <div className='absolute top-3 right-0 w-0 h-0 border-l-12 border-l-transparent border-y-12 border-b-transparent border-t-brand-500'></div>
    </div>
  );
};

export default CheckedBadge;
