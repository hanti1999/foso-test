import FeaturedProducts from '@/components/FeaturedProducts';
import MainContent from '@/components/MainContent';
import Breadcrumb from '@/components/Breadcrumb';
import Featured from '@/components/Featured';

export default function Home() {
  return (
    <div className='flex flex-col gap-8 pt-6 2xl:px-[240px] bg-gray-100'>
      <Breadcrumb />
      <FeaturedProducts />
      <MainContent />
      <Featured />
    </div>
  );
}
