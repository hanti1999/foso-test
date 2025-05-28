import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({
  title,
  price,
  discountPercentage,
  thumbnail,
}: IProduct) => {
  return (
    <div className='rounded-lg bg-white h-max shadow-card'>
      <Link href={'/'}>
        <div className='w-full relative aspect-square'>
          <Image
            src={thumbnail}
            fill
            sizes='20vw'
            className='rounded-lg absolute aspect-square'
            alt=''
          />
        </div>
        <div className='flex flex-col gap-4 px-6 pb-6 pt-4'>
          <div className='bg-gradient-to-r from-[#FFD666] to-[#FFAB00] px-2.5 py-0.5 rounded-full w-max flex items-center justify-center gap-1.5'>
            <Image src='/icons/freefire.svg' width={16} height={16} alt='' />
            <p className='text-error-darker text-sm font-semibold leading-[150%] align-middle'>
              Giá cực sốc
            </p>
          </div>
          <div className='h-[46px]'>
            <h1 className='line-clamp-2 font-semibold text-primary leading-[23px] text-[16px]'>
              {title}
            </h1>
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-semibold text-error-dark text-[20px] leading-[24px]'>
              {(price - price * (discountPercentage / 100)).toFixed(2)} $
            </span>
            <div className='flex gap-2.5 items-center h-max'>
              <p className='text-[14px] leading-[24px] text-disabled line-through'>
                {price} $
              </p>
              <p className='text-[12px] leading-[22px] text-error-dark font-medium'>
                -{discountPercentage}%
              </p>
            </div>
            <button className='bg-brand-50 rounded-lg px-3 w-full h-[36px] min-w-16 cursor-pointer'>
              <p className='text-brand-600 font-bold text-sm align-middle text-center'>
                Mua ngay
              </p>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
