import { Button } from "@nextui-org/react";
import { Instagram as InstagramIcon } from "lucide-react";
import Image from "next/image";

interface IProfileHeroProps {
  profileImage?: string;
  profileName: string;
  profileDescription?: string;
}

export const ProfileHero = (props: IProfileHeroProps) => {
  const { profileImage, profileName, profileDescription } = props;

  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 animate-fadeDown bg-gradient-to-b from-pink-50 to-white">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-8 ring-4 ring-primary/10 hover:scale-105 transition-transform duration-300 shadow-xl">
        <Image
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          alt="Profile"
          className="w-full h-full object-cover"
          width={112}
          height={112}
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{profileName}</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md text-center animate-fadeUp">
        {profileDescription}
      </p>
      <Button
        className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-white"
        size="md"
      >
        <InstagramIcon className="w-5 h-5" />
        Update Instagram Data
      </Button>
    </section>
  );
};
