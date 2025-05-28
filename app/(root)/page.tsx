import FeaturedProducts from '@/components/FeaturedProducts';
import MainContent from '@/components/MainContent';
import Breadcrumb from '@/components/Breadcrumb';
import Featured from '@/components/Featured';

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <div className='flex flex-col gap-8 pt-6 max-w-[1440px] mx-auto'>
        <Breadcrumb />
        <FeaturedProducts />
        <MainContent />
        <Featured />
      </div>
    </div>
  );
}
