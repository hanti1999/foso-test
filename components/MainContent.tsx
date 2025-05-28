'use client';
import React, { useEffect, useState } from 'react';
import { Checkbox, Collapse, Select } from 'antd';
import type { CollapseProps } from 'antd';
import Image from 'next/image';
import CheckedBadge from './CheckedBadge';
import ProductCard from './ProductCard';
import { selectSpecificData, SORT_ITEMS, url } from '@/contants';
import useFetch from '@/customHooks/useGetData';
import '@ant-design/v5-patch-for-react-19';

const MainContent = () => {
  const [selected, setSelected] = useState<string>('relevance');
  const { data, loading, error, refetch } = useFetch<IProductRes>(
    `${url}?limit=16&sortBy=${selected}&${selectSpecificData}`,
    false
  );

  useEffect(() => {
    refetch();
  }, [selected]);

  const collapseItem: CollapseProps['items'] = [
    {
      key: 1,
      label: (
        <p className='font-semibold text-xl text-primary'>Danh mục sản phẩm</p>
      ),
      children: (
        <div className='flex flex-col gap-3'>
          <Checkbox>
            <span className='font-medium text-sm text-primary'>Beauty</span>
            <span className='text-sm text-secondary'> (24)</span>
          </Checkbox>
          <Checkbox>
            <span className='font-medium text-sm text-primary'>Fragrances</span>
            <span className='text-sm text-secondary'> (24)</span>
          </Checkbox>
          <Checkbox>
            <span className='font-medium text-sm text-primary'>Furniture</span>
            <span className='text-sm text-secondary'> (24)</span>
          </Checkbox>
        </div>
      ),
    },
    {
      key: 2,
      label: <p className='font-semibold text-xl text-primary'>Khoảng giá</p>,
      children: (
        <div className='flex flex-col gap-2'>
          <div className='rounded-sm border border-gray-200 p-2 cursor-pointer'>
            <p className='text-sm text-center'>Dưới 10 $</p>
          </div>
          <div className='rounded-sm border border-gray-200 p-2 cursor-pointer'>
            <p className='text-sm text-center'>10 $ - 99 $</p>
          </div>
          <div className='rounded-sm border border-gray-200 p-2 cursor-pointer'>
            <p className='text-sm text-center'>100 $ - 500 $</p>
          </div>
        </div>
      ),
    },
    {
      key: 3,
      label: <p className='font-semibold text-xl text-primary'>Thương hiệu</p>,
      children: (
        <div className='flex flex-col gap-3'>
          <Checkbox>
            <span className='font-medium text-sm text-primary'>
              Annibale Colombo
            </span>
            <span className='text-sm text-secondary'> (24)</span>
          </Checkbox>
          <Checkbox>
            <span className='font-medium text-sm text-primary'>Knoll</span>
            <span className='text-sm text-secondary'> (24)</span>
          </Checkbox>
          <Checkbox>
            <span className='font-medium text-sm text-primary'>
              Bath Trends
            </span>
            <span className='text-sm text-secondary'> (24)</span>
          </Checkbox>
        </div>
      ),
    },
  ];

  return (
    <div className='flex gap-5'>
      {/* Filter */}
      <div className='w-[315px] h-max rounded-lg bg-white py-3 flex flex-col gap-1'>
        <div className='p-3 flex items-center gap-3 border-b border-gray-300'>
          <Image src='/icons/filter-icon.svg' width={31} height={31} alt='' />
          <p className='font-bold text-2xl align-middle text-brand-500'>
            Bộ Lọc
          </p>
        </div>
        <div className=' flex flex-col gap-4'>
          <Collapse
            bordered={false}
            defaultActiveKey={1}
            items={collapseItem}
            expandIconPosition='end'
            expandIcon={({ isActive }) => (
              <Image
                src='/icons/chevron-blue.svg'
                width={24}
                height={24}
                alt=''
                className={`${isActive ? '-rotate-90' : 'rotate-90'} mt-3`}
              />
            )}
          />
        </div>
      </div>
      {/* Product list */}
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
            <Select
              variant='borderless'
              onChange={(value: string) => setSelected(value)}
              defaultValue='price'
              style={{
                width: 152,
              }}
              options={[
                { value: 'price', label: 'Sắp Sếp Theo Giá' },
                { value: 'price&order=asc', label: 'Giá: Thấp → Cao' },
                { value: 'price&order=desc', label: 'Giá: Cao → Thấp' },
              ]}
              suffixIcon={
                <Image
                  src='/icons/chevron-down-black.svg'
                  alt=''
                  width={14}
                  height={14}
                />
              }
            />
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
