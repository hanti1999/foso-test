import Image from 'next/image';
import React from 'react';

const SearchBar = () => {
  return (
    <form className='h-[64px] border-2 border-[#0373f3] rounded-full py-1.5 pr-1.5 pl-5 gap-6 flex-1 flex flex-row justify-between'>
      <div className='flex flex-1 my-3 items-center'>
        <input
          type='text'
          placeholder='Tìm sản phẩm'
          className='flex-1 outline-none h-[28px] text-disabled'
        />
        <Image
          src='/icons/camera.svg'
          width={26}
          height={26}
          alt='camera-icon'
          className='cursor-pointer mr-0.5'
        />
      </div>
      <button className='bg-[#0373f3] w-max px-6 py-2.5 h-max rounded-full flex justify-center items-center cursor-pointer'>
        <div className='size-7'>
          <Image
            src='/icons/Search.svg'
            width={26}
            height={26}
            alt='search-icon'
          />
        </div>
      </button>
    </form>
  );
};

export default SearchBar;
