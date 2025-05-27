import Banner from '@/components/Banner';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col gap-8 pt-6 2xl:mx-[240px]'>
      <Breadcrumb />
      <div>
        <Banner />
        <div className='bg-brand-600 rounded-bl-xl rounded-br-xl p-12 h-[591.8px]'>
          <div></div>
          <div className='relative'>
            <div className='absolute p-2 rounded-full bg-brand-100'>
              <div className='size-6 flex items-center justify-center'>
                <Image
                  src={'/icons/chevron-down.svg'}
                  alt=''
                  width={6}
                  height={14}
                  className='rotate-90'
                />
              </div>
            </div>
            {/* <div className='absolute p-2 rounded-full bg-brand-100'>
              <Image
                src={'/icons/chevron-down.svg'}
                alt=''
                width={24}
                height={24}
                className='-rotate-90'
              />
            </div> */}
          </div>
        </div>
      </div>
      <h1>Nội dung</h1>
    </div>
  );
}
