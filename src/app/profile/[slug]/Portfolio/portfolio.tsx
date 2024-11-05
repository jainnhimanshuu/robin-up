"use client";

import { Button } from "@nextui-org/react";
import PortfolioBanner from "@rbu/components/portfolioBanner/portfolioBanner";
import { DATA_STORE_KEYS, DataStore } from "@rbu/helpers";
import { Influencer } from "@rbu/types";

interface IPortfolioProps {
  influencerData: Influencer;
  influencerUsername: string;
}

const Portfolio = (props: IPortfolioProps) => {
  const { influencerUsername } = props;

  const handleConnectInstagram = () => {
    DataStore.setItem(DATA_STORE_KEYS.USERNAME, influencerUsername);
    const clientId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
    const redirectUri = process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI;

    const authUrl = `https://www.facebook.com/v20.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=instagram_basic,instagram_manage_insights,pages_show_list&response_type=code`;

    if (typeof window !== "undefined") window.location.href = authUrl;
  };

  return (
    <div>
      <PortfolioBanner />
      <div className="flex flex-col items-start justify-center p-10">
        <h1 className=" text-6xl font-semibold">{influencerUsername}</h1>
        <Button
          radius="sm"
          className="bg-[#E1306C] text-slate-50 h-10 mt-2"
          onClick={handleConnectInstagram}
        >
          Connect Instagram
        </Button>
      </div>
    </div>
  );
};
export default Portfolio;
