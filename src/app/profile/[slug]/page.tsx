import { getInfluencerProfile } from "@rbu/ssr-services/profile";
import Portfolio from "./Portfolio/portfolio";
import { Logger } from "@rbu/helpers/logger";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import ErrorBoundary from "@rbu/components/errorBoundary/errorBoundary";

// Loading component for better UX
const ProfileLoading = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600 text-lg">Loading amazing profile...</p>
    </div>
  </div>
);



const ProfilePage = async ({ params }: { params: { slug: string } }) => {
  const username = params.slug;

  let data;

  try {
    const response = await getInfluencerProfile(username);

    if (response.status === 404) {
      return (
        <ErrorBoundary message="This influencer profile was not found. They might be private or the username could be incorrect." />
      );
    }

    data = await response.json();

    Logger.logMessage("[ProfilePage]: ", data);
  } catch (err) {
    Logger.logError("[ProfilePage]: ", err);
    return (
      <ErrorBoundary message="Something went wrong while loading this profile. Please try again later." />
    );
  }

  if (data?.influencer?.socialMediaAccounts?.length === 0) {
    // redirect to onboarding
    redirect(`/profile/${username}/onboarding`);
  } else {
    return (
      <Suspense fallback={<ProfileLoading />}>
        <Portfolio influencerData={data.influencer} />
      </Suspense>
    );
  }
};

export default ProfilePage;
