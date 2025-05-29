import React from 'react';
import { publicSans } from '@/app/layout';
import Icon from './Icon';

const Jumbotron = () => {
  return (
    <div className='bg-brand-50'>
      <div className='mx-auto max-w-[1440px] flex flex-row items-center justify-between h-[120px]'>
        <div className='flex flex-row items-center gap-4 w-[1189px]'>
          <Icon icon='map' size={48} />
          <p className='text-primary text-[28px] leading-[32px] font-medium'>
            Xem hệ thống 88 cửa hàng trên toàn quốc
          </p>
        </div>
        <button className='flex flex-row items-center gap-3 bg-white rounded-full py-3 px-6 cursor-pointer'>
          <p
            className={`text-brand-600 text-[24px] font-semibold leading-[24px] ${publicSans.className}`}
          >
            Xem ngay
          </p>
          <Icon icon='arrow-right' size={32} />
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
