import React from 'react';
import { FEATURED } from '@/contants';
import Icon from './Icon';

const Featured = () => {
  return (
    <div className='py-10 flex gap-8'>
      {FEATURED.map((item, index) => (
        <div
          key={index}
          className='flex items-center gap-4 rounded-xl px-3 py-4 bg-white flex-1 shadow-z8'
        >
          <Icon icon={item?.icon} size={48} />
          <div className='flex flex-col gap-2'>
            <h2 className='leading-[120%] font-bold text-primary'>
              {item.title}
            </h2>
            <p className='text-sm font-medium leading-[150%] text-secondary'>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
