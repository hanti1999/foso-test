'use client';
import { Empty, Skeleton } from 'antd';
import Image from 'next/image';
import ProductCard from './ProductCard';
import Banner from './Banner';
import { selectSpecificData, url } from '@/contants';
import useFetch from '@/customHooks/useGetData';

const FeaturedProducts = () => {
  const { data, loading, error } = useFetch<IProductRes>(
    `${url}?limit=5&sortBy=reviews&order=desc&${selectSpecificData}`
  );

  return (
    <div>
      <Banner />
      <div className='bg-brand-600 rounded-bl-xl rounded-br-xl p-12 h-max relative'>
        {loading ? (
          <Skeleton active style={{ height: 495.8 }} />
        ) : error ? (
          <Empty />
        ) : (
          <>
            <div className='grid grid-cols-5 gap-5'>
              {data?.products?.map((item, index) => (
                <ProductCard key={index} {...item} />
              ))}
            </div>
            <div>
              <button className='absolute left-[30px] p-2 rounded-full bg-brand-100 top-1/2 cursor-pointer'>
                <div className='size-6 flex items-center justify-center'>
                  <Image
                    src={'/icons/chevron-blue.svg'}
                    alt=''
                    width={24}
                    height={24}
                  />
                </div>
              </button>
              <button className='absolute right-[30px] p-2 rounded-full bg-brand-100 top-1/2 cursor-pointer'>
                <div className='size-6 flex items-center justify-center'>
                  <Image
                    src={'/icons/chevron-blue.svg'}
                    alt=''
                    width={24}
                    height={24}
                    className='rotate-180'
                  />
                </div>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
