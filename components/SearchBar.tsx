import Image from 'next/image';
import React from 'react';

const SearchBar = () => {
  return (
    <form className='h-[64px] border-2 border-[#0373f3] rounded-full p-2 gap-6 flex-1 flex flex-row justify-between'>
      <div className='flex flex-1 ml-3 my-3 items-center'>
        <input
          type='text'
          placeholder='Tìm sản phẩm'
          className='flex-1 outline-none h-[28px]'
        />
        <Image
          src='/icons/camera.svg'
          width={28}
          height={28}
          alt='camera-icon'
          className='cursor-pointer'
        />
      </div>
      <button className='bg-[#0373f3] w-max px-6 py-3 h-[48px] rounded-full flex justify-center items-center cursor-pointer'>
        <Image
          src='/icons/Search.svg'
          width={28}
          height={28}
          alt='search-icon'
        />
      </button>
    </form>
  );
};

export default SearchBar;
