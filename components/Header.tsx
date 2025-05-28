import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SearchBar from './SearchBar';
import { NAV_ITEMS, SERVICE_ITEMS } from '@/contants';

const Header = () => {
  return (
    <div className='h-[253px]'>
      {/* Small one */}
      <div className='h-[28px] bg-gradient-to-r from-[#0D57C6] via-[#37CFFF] to-[#0F5ED6]'>
        <div className='max-w-[1440px] mx-auto flex flex-row items-center justify-between py-1'>
          <div className='flex flex-row items-center gap-2'>
            <Image
              alt='sale-icon'
              src='/icons/Sale.png'
              width={16}
              height={16}
            />
            <span className='text-xs font-normal text-secondary-50 align-middle'>
              Nhập mã <b className='text-yellow-500 text-sm'>NEWBIE</b> giảm
              ngay 10% cho lần đầu mua hàng.
            </span>
          </div>
          <div className='flex flex-row gap-6'>
            <div className='flex flex-row items-center gap-2'>
              <Image
                alt=''
                src='/icons/Phone-Rounded.png'
                width={16}
                height={16}
              />
              <p className='text-xs font-normal text-secondary-50 align-middle'>
                Hotline:{' '}
                <b className='text-yellow-500 text-sm'>0283 760 7607</b>
              </p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <Image
                alt=''
                src='/icons/Smartphone.png'
                width={16}
                height={16}
              />
              <p className='text-xs font-normal text-secondary-50 align-middle'>
                Tải ứng dụng
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar middle content */}
      <div className='max-w-[1440px] mx-auto h-[111px] my-6'>
        <div className='flex flex-row items-center gap-12'>
          <Image src='/logo_sunfil1.png' alt='' width={250} height={111} />
          <SearchBar />
          <div className='flex flex-row gap-8 w-max h-max'>
            <div className='flex flex-row items-center gap-2 cursor-pointer'>
              <button className='size-9 bg-[#d80027] rounded-full flex justify-center items-center'>
                <Image src='/icons/star.svg' width={18} height={18} alt='' />
              </button>
              <span className='font-medium'>VI</span>
            </div>
            <div className='flex flex-row items-center gap-2 cursor-pointer relative'>
              <button className='size-9 flex justify-center items-center'>
                <Image src='/icons/cart.svg' width={28} height={28} alt='' />
              </button>
              <span className='font-medium'>Giỏ hàng</span>
              <div className='size-6 bg-[#ff5630] absolute flex items-center justify-center -top-3 left-5.5 rounded-full'>
                <p className='text-white text-xs leading-3'>12</p>
              </div>
            </div>
            <div className='flex flex-row items-center gap-2 cursor-pointer'>
              <button className='size-9 flex justify-center items-center'>
                <Image src='/icons/user.svg' width={30} height={30} alt='' />
              </button>
              <span className='font-medium'>Tài khoản</span>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar middle content */}
      <div className='max-w-[1440px] mx-auto h-max flex flex-row items-center gap-6'>
        <div className='w-[263.7px] h-[50px] rounded-lg py-3 px-4 flex flex-row items-center gap-2 bg-[#0155c6] cursor-pointer'>
          <Image src='/icons/menu.svg' width={18} height={18} alt='menu-icon' />
          <div className='flex-1'>
            <span className='font-bold text-white leading-5 align-middle capitalize'>
              Danh mục sản phẩm
            </span>
          </div>
          <Image
            src='/icons/chevron-down.svg'
            width={16}
            height={16}
            alt='menu-icon'
          />
        </div>
        <div className='flex-1 flex-row flex justify-between items-center'>
          <div className='flex flex-row items-center gap-5'>
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className='leading-6 text-[#1C252E] font-medium'
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className='flex flex-row items-center gap-5'>
            {SERVICE_ITEMS.map((item, index) => (
              <div key={index} className='flex flex-row items-center gap-2'>
                <Image
                  src={item.icon}
                  width={24}
                  height={24}
                  alt={`${item.label}-icon`}
                />
                <span className='font-semibold leading-[120%] tracking-[2%] text-[#1C252E]'>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
