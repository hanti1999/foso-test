'use client';
import { Skeleton } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import Icon from './Icon';
import { NAV_ITEMS, SERVICE_ITEMS } from '@/contants';
import useFetch from '@/customHooks/useGetData';

const url = 'https://dummyjson.com/products';

const Header = () => {
  return (
    <div className='h-[253px]'>
      {/* Small one */}
      <div className='h-[28px] bg-gradient-to-r from-[#0D57C6] via-[#37CFFF] to-[#0F5ED6]'>
        <div className='max-w-[1440px] mx-auto flex flex-row items-center justify-between py-1'>
          <div className='flex flex-row items-center gap-2'>
            <Icon icon='sale' size={16} />
            <span className='text-xs font-normal text-secondary-50 align-middle'>
              Nhập mã <b className='text-yellow-500 text-sm'>NEWBIE</b> giảm
              ngay 10% cho lần đầu mua hàng.
            </span>
          </div>
          <div className='flex flex-row gap-6'>
            <div className='flex flex-row items-center gap-2'>
              <Icon icon='phone' size={16} />
              <p className='text-xs font-normal text-secondary-50 align-middle'>
                Hotline:{' '}
                <b className='text-yellow-500 text-sm'>0283 760 7607</b>
              </p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <Icon icon='smartphone' size={16} />
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
                <Icon icon='star' size={18} />
              </button>
              <span className='font-medium'>VI</span>
            </div>
            <div className='flex flex-row items-center gap-2 cursor-pointer relative'>
              <button className='size-9 flex justify-center items-center'>
                <Icon icon='cart' size={28} />
              </button>
              <span className='font-medium'>Giỏ hàng</span>
              <div className='size-6 bg-[#ff5630] absolute flex items-center justify-center -top-3 left-5.5 rounded-full'>
                <p className='text-white text-xs leading-3'>12</p>
              </div>
            </div>
            <div className='flex flex-row items-center gap-2 cursor-pointer'>
              <button className='size-9 flex justify-center items-center'>
                <Icon icon='user' size={30} />
              </button>
              <span className='font-medium'>Tài khoản</span>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar middle content */}
      <div className='max-w-[1440px] mx-auto h-max flex flex-row items-center gap-6'>
        <div className='group relative w-[263.7px] h-[50px] rounded-lg py-3 px-4 bg-[#0155c6] cursor-pointer'>
          <div className='flex flex-row items-center gap-2'>
            <Icon icon='menu' size={18} />
            <div className='flex-1'>
              <span className='font-bold text-white leading-5 align-middle capitalize'>
                Danh mục sản phẩm
              </span>
            </div>
            <Icon icon='chevron-down' size={16} />
          </div>
          <MenuChild />
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
                <Icon icon={item?.icon} size={24} />
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

const MenuChild = () => {
  const [product, setProduct] = useState<IProductRes | null>();
  const [productLoading, setLoading] = useState<boolean>(false);
  const [activeCate, setActiveCate] = useState<string>('');
  const { data: category, loading } = useFetch<string[]>(
    `${url}/category-list`
  );

  const onHover = async (cate: string) => {
    setActiveCate(cate);
    try {
      setLoading(true);
      const res = await fetch(`${url}/category/${cate}?limit=5`);
      const result = await res.json();
      setProduct(result);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category) {
      setActiveCate(category[0]);
    }
  }, [category]);

  useEffect(() => {
    if (category) {
      const getData = async () => {
        try {
          setLoading(true);
          const res = await fetch(`${url}/category/${category[0]}?limit=5`);
          const result = await res.json();
          setProduct(result);
        } catch (err) {
        } finally {
          setLoading(false);
        }
      };
      getData();
    }
  }, [category]);

  return (
    <div className='absolute top-full left-0 h-max w-max hidden group-hover:flex z-50 shadow-2xl'>
      <div className='rounded-bl-xl rounded-tl-xl pb-1 bg-white flex flex-col gap-3'>
        {loading ? (
          <div className='p-2'>
            <Skeleton active style={{ height: 664, width: '100%' }} />
          </div>
        ) : (
          category?.slice(0, 8)?.map((item, index) => (
            <Link
              href={'/'}
              className={`px-4 py-1 ${
                activeCate == item ? 'bg-[#f4f6f8]' : ''
              }`}
              onMouseEnter={() => onHover(item)}
              key={index}
            >
              <div className='py-3 flex gap-3 items-center'>
                <Image
                  src='https://dummyjson.com/image/40'
                  width={40}
                  height={40}
                  alt=''
                />
                <div className='flex justify-between items-center flex-1 gap-2'>
                  <p className='font-semibold text-brand-700'>{item}</p>
                  <Icon icon='chevron-blue' size={14} className='rotate-180' />
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      <div className='rounded-br-xl rounded-tr-xl p-6 flex flex-col gap-6 bg-[#f4f6f8]'>
        <div className='pb-7 grid grid-cols-3 gap-4 border-b border-[#919EAB3D]'>
          <div className='rounded-xl px-4 py-3 bg-white flex items-center gap-4'>
            <Image
              src='https://dummyjson.com/image/40'
              width={40}
              height={40}
              alt=''
            />
            <p className='font-semibold text-primary'>Beauty</p>
          </div>
        </div>
        <div className='w-[1064px]'>
          <div className='flex items-center justify-between mb-6'>
            <p className='text-2xl font-semibold text-primary'>
              Sản phẩm bán chạy
            </p>
            <Link href='/' className='px-3 py-1 flex items-center gap-2'>
              <p className='font-semibold text-brand-500'>Xem tất cả</p>
              <Icon icon='double-arrow-blue' size={20} />
            </Link>
          </div>
          {productLoading ? (
            <Skeleton active style={{ height: '100%', width: '100%' }} />
          ) : (
            <div className='grid grid-cols-5 gap-4'>
              {product?.products?.map((item, index) => (
                <ProductCard key={index} {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
