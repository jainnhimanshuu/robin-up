import { getInfluencerProfile } from "@rbu/ssr-services/profile";
import { Logger } from "@rbu/helpers/logger";
import { redirect } from "next/navigation";
import PortfolioNew from "./Portfolio/portfolioNew";

const ProfilePage = async ({ params }: { params: { slug: string } }) => {
  const username = params.slug;

  let data;

  try {
    const response = await getInfluencerProfile(username);

    if (response.status === 404) {
      return <p>Influencer Not Found</p>;
    }

    data = await response.json();

    Logger.logMessage("[ProfilePage]: ", data);
  } catch (err) {
    Logger.logError("[ProfilePage]: ", err);
  }

  if (data?.influencer?.socialMediaAccounts?.length === 0) {
    // redirect to onboarding
    redirect(`/profile/${username}/onboarding`);
  } else {
    return <PortfolioNew influencerData={data.influencer} />;
  }
};

export default ProfilePage;
