import Image from 'next/image';
import React from 'react';
import { publicSans } from '@/app/layout';

const Jumbotron = () => {
  return (
    <div className='bg-brand-50'>
      <div className='mx-auto max-w-[1440px] flex flex-row items-center justify-between h-[120px]'>
        <div className='flex flex-row items-center gap-4 w-[1189px]'>
          <div className='size-12'>
            <Image src='/icons/map.svg' alt='' width={48} height={48} />
          </div>
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
          <div className='size-8'>
            <Image src='/icons/arrow-right.svg' alt='' width={32} height={32} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
