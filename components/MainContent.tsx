'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CheckedBadge from './CheckedBadge';
import ProductCard from './ProductCard';
import { selectSpecificData, SORT_ITEMS, url } from '@/contants';
import useFetch from '@/customHooks/useGetData';

const MainContent = () => {
  const [selected, setSelected] = useState<string>('relevance');
  const { data, loading, error, refetch } = useFetch<IProductRes>(
    `${url}?limit=16&sortBy=${selected}&${selectSpecificData}`,
    false
  );

  useEffect(() => {
    refetch();
  }, [selected]);

  return (
    <div className='flex gap-5'>
      <div className='w-[315px] h-max rounded-lg bg-white py-3 flex flex-col gap-1'>
        <p>Filter</p>
      </div>
      <div className='flex-1 flex flex-col gap-5'>
        <div className='flex items-center justify-between mb-2'>
          <p className='text-xl font-semibold text-primary'>
            Danh sách sản phẩm
          </p>
          <div className='flex items-center gap-6'>
            <p className='font-medium'>Sắp xếp theo</p>
            <div className='flex items-center gap-3'>
              {SORT_ITEMS?.map((item, index) => (
                <button
                  key={index}
                  className='rounded-lg bg-white px-4 h-10 flex items-center relative overflow-hidden cursor-pointer'
                  onClick={() => setSelected(item?.key)}
                >
                  <p
                    className={`font-bold text-sm ${
                      selected === item.key ? 'text-brand-500' : 'text-primary'
                    }`}
                  >
                    {item.label}
                  </p>
                  {selected === item.key && <CheckedBadge />}
                </button>
              ))}
            </div>
            <div className='flex items-center justify-center pr-3 h-9 min-w-16 cursor-pointer'>
              <select
                name='sort-price'
                id='sort-price'
                className='font-medium text-sm pl-[9px] pr-2.5 text-primary outline-none appearance-none'
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                <option value=''>Sắp xếp theo giá</option>
                <option value='price&order=asc'>Giá: Thấp → Cao</option>
                <option value='price&order=desc'>Giá: Cao → Thấp</option>
              </select>
              <Image
                src='/icons/chevron-down-black.svg'
                alt=''
                width={14}
                height={14}
              />
            </div>
          </div>
        </div>
        {loading ? (
          <div className='w-full'>
            <Image src={'/icons/loading.svg'} width={25} height={25} alt='' />
          </div>
        ) : error ? (
          <p className='text-red-500 text-center'>
            {error.message || 'Something went wrong!'}
          </p>
        ) : (
          <div className='grid grid-cols-4 gap-5'>
            {data?.products?.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
