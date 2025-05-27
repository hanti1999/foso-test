import Image from 'next/image';
import React from 'react';
import { LEGAL_ITEMS, SITEMAP_ITEMS } from '@/contants';

const Footer = () => {
  return (
    <div className='relative 2xl:px-[240px] bg-[url(/footer-bg.jpg)] bg-cover bg-center h-[463.67px] '>
      <div className='absolute inset-0 bg-white opacity-65'></div>
      <div className='relative z-10 py-[96px] flex items-start justify-between'>
        <div>
          <h1 className='font-semibold uppercase text-brand-800 text-lg'>
            Viet Hung Auto Production Trading Joint Stock Company
          </h1>
          <br />
          <p className='text-secondary'>
            Tax code: <span className='font-semibold'>0305094228</span>
            <br />
            Address:{' '}
            <span className='font-semibold'>
              13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.
            </span>
            <br />
            Phone number: <span className='font-semibold'>0283 760 7607</span>
            <br />
            Opening hour:{' '}
            <span className='font-semibold'>09:00 - 22:00 from Mon - Fri</span>
          </p>
          <Image
            src='/bo-cong-thuong.png'
            alt=''
            className='mt-8'
            width={200}
            height={75.67}
          />
        </div>
        <div>
          <h2 className='text-brand-800 font-semibold text-2xl mb-8'>
            Sitemap
          </h2>
          <div className='flex flex-col gap-3'>
            {SITEMAP_ITEMS?.map((item, index) => (
              <a key={index} href={item?.href} className='text-secondary'>
                {item?.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-brand-800 font-semibold text-2xl mb-8'>Legal</h2>
          <div className='flex flex-col gap-3'>
            <a href='/' className='font-semibold text-primary'>
              _ Privacy Policy
            </a>
            {LEGAL_ITEMS?.map((item, index) => (
              <a key={index} href={item?.href} className='text-secondary'>
                {item?.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-brand-800 font-semibold text-2xl mb-8'>
            Download App
          </h2>
          <button className='bg-primary w-[230px] h-[64px] rounded-xl flex justify-between px-5'>
            <Image src='/icons/play-store.svg' alt='' width={30} height={30} />
            <div className='h-full flex flex-col items-start justify-center'>
              <p className='text-sm text-white text-left'>Get it On</p>
              <p className='font-semibold text-white'>Google Play Store</p>
            </div>
          </button>
          <button className='bg-brand-500 w-[230px] h-[64px] rounded-xl flex justify-between px-5 mt-3'>
            <Image src='/icons/apple.svg' alt='' width={36} height={36} />
            <div className='h-full flex flex-col items-start justify-center'>
              <p className='text-sm text-white text-left'>Download from</p>
              <p className='font-semibold text-white'>Apple App Store</p>
            </div>
          </button>
          <div className='mt-8 flex justify-end'>
            <div className='flex flex-row items-center gap-2 cursor-pointer'>
              <button className='bg-[#D80027] size-9 rounded-full flex justify-center items-center'>
                <div className='size-4'>
                  <Image src='/icons/star.svg' alt='' width={16} height={16} />
                </div>
              </button>
              <span>VI</span>
              <div>
                <Image
                  src='/icons/chevron-down-black.svg'
                  alt=''
                  width={9.34}
                  height={4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
