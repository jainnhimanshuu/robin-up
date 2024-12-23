"use client";

import { DATA_STORE_KEYS } from "@rbu/helpers/dataStore";

import { INSTAGRAM_SCOPE } from "@rbu/constants/instagramContants";
import { DataStore } from "@rbu/helpers/dataStore";
import { Button } from "@nextui-org/react";
import { URLProvider } from "@rbu/providers";

interface IOnboardingProps {
  influencerUsername: string;
}

const Onboarding = (props: IOnboardingProps) => {
  const { influencerUsername } = props;
  // Connect Instagram

  const clientId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
  const redirectUri = process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI;

  const handleConnectInstagramViaFacebook = () => {
    DataStore.setItem(DATA_STORE_KEYS.USERNAME, influencerUsername);

    const authUrl = `${URLProvider.getFBBaseUrl()}/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${
      INSTAGRAM_SCOPE.INSTAGRAM_BASIC
    },${INSTAGRAM_SCOPE.INSTAGRAM_MANAGE_INSIGHTS},${
      INSTAGRAM_SCOPE.PAGES_READ_ENGAGEMENT
    },${
      INSTAGRAM_SCOPE.PAGES_SHOW_LIST
    },email,read_insights,pages_read_user_content,public_profile,pages_manage_engagement,whatsapp_business_management&response_type=code&display=page&config_id=532299436429427`;

    if (typeof window !== "undefined") window.location.href = authUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Onboarding</h1>
      <Button
        radius="sm"
        className="bg-[#E1306C] text-slate-50 h-10 mt-2"
        onClick={handleConnectInstagramViaFacebook}
      >
        Connect Instagram Via Facebook
      </Button>
    </div>
  );
};

export default Onboarding;
