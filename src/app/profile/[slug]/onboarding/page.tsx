import Onboarding from "@rbu/components/onboarding/onboarding";
import { Logger } from "@rbu/helpers";
import { getInfluencerProfile } from "@rbu/ssr-services/profile";
import { redirect } from "next/navigation";

const OnboardingPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  try {
    const influencer = await getInfluencerProfile(slug);

    if (influencer.influencer.socialMediaAccounts.length > 0) {
      redirect(`/profile/${slug}`);
    }

    return <Onboarding influencerUsername={slug} />;
  } catch (err) {
    Logger.logError("[OnboardingPage]: ", err);

    redirect(`/profile/${slug}`);
  }
};

export default OnboardingPage;
