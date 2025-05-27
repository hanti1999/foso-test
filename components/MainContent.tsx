import React from 'react';

const MainContent = () => {
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
          <div>sort</div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
