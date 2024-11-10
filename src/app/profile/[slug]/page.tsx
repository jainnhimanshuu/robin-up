import { getInfluencerProfile } from "@rbu/ssr-services/profile";
import Portfolio from "./Portfolio/portfolio";

const ProfilePage = async ({ params }: { params: { slug: string } }) => {
  const username = params.slug;

  let data;

  try {
    const response = await getInfluencerProfile(username);

    data = response;
  } catch (err) {
    console.log(err);
  }
  const isInstagramConnected =
    data?.influencer?.socialMediaAccounts?.length > 0;
  if (!data) {
    return <p>Influencer Not Found</p>;
  } else {
    return (
      <Portfolio
        influencerData={data.influencer}
        instagramConnected={isInstagramConnected}
      />
    );
  }
};

export default ProfilePage;
