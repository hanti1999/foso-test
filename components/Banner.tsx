import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='relative bg-[url(/banner-bg.png)] bg-cover bg-center h-[500px] rounded-tl-xl rounded-tr-xl overflow-hidden'>
      <div className='bg-linear-to-br from-[#FFF5CC] to-[#FFD666] rounded-tr-full rounded-br-full py-2.5 px-12 absolute top-10'>
        <p className='uppercase font-bold text-2xl tracking-[5%] align-middle text-[#7A0916]'>
          mới cực hot!
        </p>
      </div>
      <div className='absolute top-[136px] left-[42px] flex flex-col gap-5'>
        <h2 className='font-extrabold text-[74px] leading-[100%] uppercase text-white text-stroke text-stroke-indigo-200 text-stroke-fill-indigo-600'>
          Tải app nhận quà
        </h2>
        <p className='text-[#FFD666] text-[32px] font-medium '>
          Tích điểm ngay trên app <b>SUNFIL1</b>
          <br />
          <i>*100K = 10 điểm</i>
        </p>
      </div>
      <Image
        src='/filter.png'
        width={577.77}
        height={456.14}
        alt=''
        className='absolute top-[48.37px] right-[85.41px] z-10'
      />
      <Image
        src='/vecteezy_dynamic-splash-of-liquid-gold.png'
        width={911.14}
        height={515.63}
        alt=''
        className='transform scale-x-[-1] absolute left-[764px] -top-[45px] rotate-[-24deg] z-0'
      />
    </div>
  );
};

export default Banner;
