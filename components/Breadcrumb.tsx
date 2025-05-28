import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Breadcrumb = () => {
  return (
    <div className='flex gap-4 items-center'>
      <Link href='/' className='text-disabled text-[14px] leading-[22px]'>
        Trang chủ
      </Link>
      <div className='size-2'>
        <Image src='/icons/chevron-right.svg' width={8} height={8} alt='' />
      </div>
      <Link
        href='/'
        className='text-brand-700 font-semibold text-[14px] leading-[22px]'
      >
        Sản phẩm
      </Link>
    </div>
  );
};

export default Breadcrumb;
