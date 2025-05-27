'use client';
import Image from 'next/image';
import ProductCard from './ProductCard';
import Banner from './Banner';
import useFetch from '@/customHooks/useGetData';

const FeaturedProducts = () => {
  const { data, loading, error } = useFetch<IProductRes>(
    'https://dummyjson.com/products?limit=5'
  );

  return (
    <div>
      <Banner />
      <div className='bg-brand-600 rounded-bl-xl rounded-br-xl p-12 h-max relative'>
        {loading ? (
          <div className='flex items-center justify-center w-full h-20'>
            <Image src={'/icons/loading.svg'} width={25} height={25} alt='' />
          </div>
        ) : error ? (
          <p className='text-red-500 text-center'>
            {error.message || 'Something went wrong!'}
          </p>
        ) : (
          <>
            <div className='flex gap-5'>
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
