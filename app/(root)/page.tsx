import FeaturedProducts from '@/components/FeaturedProducts';
import Breadcrumb from '@/components/Breadcrumb';
import Featured from '@/components/Featured';
import MainContent from '@/components/MainContent';

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
