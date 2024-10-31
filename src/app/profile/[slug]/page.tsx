import { Logger } from "@rbu/helpers";
import { getInfluencerProfile } from "@rbu/ssr-services/profile";

const ProfilePage = async ({ params }: { params: { slug: string } }) => {
  const username = params.slug;

  let data;

  try {
    const response = await getInfluencerProfile(username);

    Logger.logMessage("[Profile]: ", response);
    data = response;
  } catch (err) {
    console.log(err);
  }

  if (!data) {
    return <p>Influencer Not Found</p>;
  } else {
    return (
      <div>
        <h1>{data.influencer.name}</h1>
        <p>{data.influencer.username}</p>
      </div>
    );
  }
};

export default ProfilePage;
