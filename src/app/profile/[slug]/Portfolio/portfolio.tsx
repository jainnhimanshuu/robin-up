"use client";

import MetricCard from "@rbu/components/metricCard/metricCard";
import { Logger } from "@rbu/helpers";
import { Influencer } from "@rbu/types";
import { ProfileHero } from "@rbu/components/profileHero/profileHero";
import { User } from "lucide-react";
import Demographics from "@rbu/layouts/demographics/demographics";

interface IPortfolioProps {
  influencerData: Influencer;
}

const Portfolio = (props: IPortfolioProps) => {
  const { influencerData } = props;

  const influencerUsername = influencerData?.username;

  const instagramData = influencerData?.instagramData;

  Logger.logMessage("[Portfolio]: ", instagramData);

  const engagedAudience =
    influencerData?.instagramData?.engagedAudienceDemographics;

  const reachedAudience =
    influencerData?.instagramData?.reachedAudienceDemographics;
  const followerAudience =
    influencerData?.instagramData?.followerAudienceDemographics;

  return (
    <div className="flex flex-col items-center justify-center">
      <ProfileHero
        profileImage={influencerData?.profilePicture}
        profileName={influencerUsername}
        profileDescription={influencerData?.bio}
      />

      <div className="flex flex-col gap-4 w-full items-center justify-center animate-fade-up  ">
        <div className="flex gap-4 w-full items-center justify-center  ">
          <MetricCard
            metric={{
              title: "Followers",
              value: instagramData.followersCount,
              change: 100,
              icon: <User />,
              positive: true,
            }}
          />
        </div>
        <Demographics audienceData={engagedAudience} label="Engaged Audience" />
        <Demographics audienceData={reachedAudience} label="Reached Audience" />
        <Demographics
          audienceData={followerAudience}
          label="Followers Audience"
        />
      </div>
    </div>
  );
};
export default Portfolio;
