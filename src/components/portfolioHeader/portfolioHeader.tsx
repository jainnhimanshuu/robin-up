import Image from "next/image";

interface IPortfolioHeaderProps {
  profilePicture?: string;
}

const PortfolioHeader = (props: IPortfolioHeaderProps) => {
  const { profilePicture } = props;
  return (
    <div>
      {profilePicture && (
        <Image
          src={profilePicture}
          alt="banner"
          width={120}
          height={120}
          className=" rounded-[100%] object-cover h-[120px]"
        />
      )}
    </div>
  );
};

export default PortfolioHeader;
