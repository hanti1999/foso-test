'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';
import Banner from './Banner';

const FeaturedProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=5');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center w-full h-20'>
        <Image src={'/icons/loading.svg'} width={25} height={25} alt='' />
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <div className='bg-brand-600 rounded-bl-xl rounded-br-xl p-12 h-max relative'>
        <div className='flex gap-5'>
          {products?.map((item, index) => (
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
      </div>
    </div>
  );
};

export default FeaturedProducts;
