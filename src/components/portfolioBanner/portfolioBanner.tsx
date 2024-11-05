import Image from "next/image";

interface IPortfolioBannerProps {
  imgUrl?: string;
}

const PortfolioBanner = (props: IPortfolioBannerProps) => {
  const { imgUrl } = props;
  return (
    <div>
      {imgUrl && <Image src={imgUrl} alt="banner" />}
      {!imgUrl && <div className="bg-[#FBD288] w-full h-10 p-9"></div>}
    </div>
  );
};

export default PortfolioBanner;
