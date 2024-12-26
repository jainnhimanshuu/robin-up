"use client";

import { Avatar } from "@nextui-org/react";
import MetricCard from "@rbu/components/metricCard/metricCard";
import { Logger } from "@rbu/helpers";
import { Influencer } from "@rbu/types";
import Tile from "@rbu/components/title/title";
import { ProfileHero } from "@rbu/components/profileHero/profileHero";
import { User } from "lucide-react";

interface IPortfolioProps {
  influencerData: Influencer;
}

const Portfolio = (props: IPortfolioProps) => {
  const { influencerData } = props;

  const influencerUsername = influencerData?.username;

  const instagramData = influencerData?.instagramData;

  Logger.logMessage("[Portfolio]: ", instagramData);

  return (
    <div className="flex flex-col items-center justify-center">
      <ProfileHero
        profileImage={influencerData?.profilePicture}
        profileName={influencerUsername}
        profileDescription={influencerData?.bio}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 animate-fade-up  ">
        <MetricCard
          metric={{
            title: "Followers",
            value: instagramData.followersCount,
            change: 100,
            icon: <User />,
            positive: true,
          }}
        />
        <Tile>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Avatar src={instagramData?.instagramProfilePicture} size="lg" />
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
  );
};
export default Portfolio;
