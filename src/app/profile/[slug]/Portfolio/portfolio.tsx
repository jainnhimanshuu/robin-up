"use client";

import { Avatar } from "@nextui-org/react";
import PortfolioHeader from "@rbu/components/portfolioHeader/portfolioHeader";
import { Logger } from "@rbu/helpers";
import { Influencer } from "@rbu/types";
import Tile from "@rbu/components/title/title";

interface IPortfolioProps {
  influencerData: Influencer;
}

const Portfolio = (props: IPortfolioProps) => {
  const { influencerData } = props;

  const influencerUsername = influencerData?.username;

  const instagramData = influencerData?.instagramData;

  Logger.logMessage("[Portfolio]: ", instagramData);

  return (
    <div>
      <div className="flex flex-col items-start justify-center">
        <div className="flex gap-2 bg-[#f2f2f2] rounded-md w-full p-10">
          <PortfolioHeader profilePicture={influencerData?.profilePicture} />
          <div className="flex flex-col gap-2">
            <h1 className=" text-6xl font-semibold">{influencerUsername}</h1>
            <h2 className=" text-xl ">{influencerData?.bio}</h2>
          </div>
        </div>
        <div className="p-10">
          <Tile>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Avatar
                  src={instagramData?.instagramProfilePicture}
                  size="lg"
                />
                <div className="flex flex-col">
                  <h2 className="text-lg text- font-semibold">
                    {instagramData?.igUsername}
                  </h2>
                  <p className="text-slate-400  text-sm">Instagram</p>
                </div>
              </div>
              <div className="border-b border-slate-300"></div>
              <div className="flex  mt-4 items-end gap-2">
                <h1 className="text-3xl font-bold">
                  {instagramData?.followersCount}
                </h1>
                <p className="text-slate-400 text-sm">Followers</p>
              </div>
            </div>
          </Tile>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
