'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import CheckedBadge from './CheckedBadge';

const SORT_ITEMS = [
  {
    label: 'Liên quan',
    key: 'relevance',
  },
  {
    label: 'Bán chạy',
    key: 'top-sale',
  },
  {
    label: 'Mới nhất',
    key: 'latest',
  },
  {
    label: 'Nổi bật',
    key: 'featured',
  },
];

const MainContent = () => {
  const [selected, setSelected] = useState<string | null>('relevance');

  return (
    <div className='flex gap-5'>
      <div className='w-[315px] rounded-lg bg-white py-3 flex flex-col gap-1'>
        <p>Filter</p>
      </div>
      <div className='flex-1'>
        <div className='pb-2 flex items-center justify-between'>
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
            <div className='h-9 min-w-16 px-3 flex gap-2 items-center cursor-pointer'>
              <p className='font-medium text-sm text-primary'>
                Giá: Thấp {'->'} Cao
              </p>
              <Image
                src='/icons/chevron-down-black.svg'
                alt=''
                width={14}
                height={14}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
