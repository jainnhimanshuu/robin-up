"use client";

import { Avatar, Button } from "@nextui-org/react";
import PortfolioHeader from "@rbu/components/portfolioHeader/portfolioHeader";
import { DATA_STORE_KEYS, DataStore, Logger } from "@rbu/helpers";
import { Influencer } from "@rbu/types";
import Tile from "@rbu/components/title/title";
import { URLProvider } from "@rbu/providers";
import { INSTAGRAM_SCOPE } from "@rbu/constants/instagramContants";

interface IPortfolioProps {
  influencerData: Influencer;
  instagramConnected: boolean;
}

const Portfolio = (props: IPortfolioProps) => {
  const { influencerData, instagramConnected } = props;

  const influencerUsername = influencerData?.username;

  const instagramData = influencerData?.instagramData;

  Logger.logMessage("[Portfolio]: ", instagramData);

  const handleConnectInstagram = () => {
    DataStore.setItem(DATA_STORE_KEYS.USERNAME, influencerUsername);
    const clientId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
    const redirectUri = process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI;

    const authUrl = `${URLProvider.getFBBaseUrl()}/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${
      INSTAGRAM_SCOPE.INSTAGRAM_BASIC
    },${INSTAGRAM_SCOPE.INSTAGRAM_MANAGE_INSIGHTS},${
      INSTAGRAM_SCOPE.PAGES_READ_ENGAGEMENT
    },${
      INSTAGRAM_SCOPE.PAGES_SHOW_LIST
    },email,read_insights,pages_read_user_content,public_profile,pages_manage_engagement&response_type=code&display=page`;

    if (typeof window !== "undefined") window.location.href = authUrl;
  };

  return (
    <div>
      <div className="flex flex-col items-start justify-center">
        <div className="flex gap-2 bg-[#f2f2f2] rounded-md w-full p-10">
          <PortfolioHeader profilePicture={influencerData?.profilePicture} />
          <div className="flex flex-col gap-2">
            <h1 className=" text-6xl font-semibold">{influencerUsername}</h1>
            <h2 className=" text-xl ">{influencerData?.bio}</h2>
          </div>
          {!instagramConnected && (
            <Button
              radius="sm"
              className="bg-[#E1306C] text-slate-50 h-10 mt-2"
              onClick={handleConnectInstagram}
            >
              Connect Instagram
            </Button>
          )}
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
