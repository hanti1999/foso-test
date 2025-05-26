import { epilogue, publicSans } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Jumbotron = () => {
  return (
    <div className='w-full h-[120px] bg-brand-50'>
      <div className='2xl:mx-[240px] flex flex-row items-center justify-between h-full'>
        <div className='flex flex-row items-center gap-4 w-[1189px]'>
          <div className='size-12'>
            <Image src='/icons/map.svg' alt='' width={48} height={48} />
          </div>
          <p
            className={`text-primary text-[28px] leading-[32px] font-medium ${epilogue.className}`}
          >
            Xem hệ thống 88 cửa hàng trên toàn quốc
          </p>
        </div>
        <div className='w-max h-max'>
          <button className='flex flex-row items-center gap-3 bg-white rounded-full py-3 px-6'>
            <p
              className={`text-brand-600 text-2xl font-semibold align-middle ${publicSans.className}`}
            >
              Xem ngay
            </p>
            <div className='size-8'>
              <Image
                src='/icons/chevron-right.svg'
                alt=''
                width={32}
                height={32}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
