import Image from 'next/image';

const Icon = ({
  className,
  size,
  icon,
}: {
  className?: string;
  size: number;
  icon: string;
}) => {
  return (
    <Image
      src={`/icons/${icon}.svg`}
      width={size}
      height={size}
      alt=''
      className={className}
    />
  );
};

export default Icon;
