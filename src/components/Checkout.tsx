import Image, { StaticImageData } from 'next/image';

const Checkout: React.FC<{ logo: StaticImageData; text: string }> = ({ logo, text }) => {
  return (
    <div className="flex flex-col items-center p-2 rounded-md border border-gray-300">
      <Image src={logo} alt={`${text} Logo`} width={64} height={64} />
      <span className="ml-2 text-sm font-semibold">{text}</span>
    </div>
  );
};

export default Checkout;