import { Logger } from "@rbu/helpers";
import { URLProvider } from "@rbu/providers";

const ProfilePage = async ({ params }: { params: { slug: string } }) => {
  const username = params.slug;

  const url = URLProvider.getProfilePathUrl(username);

  // Logger.logMessage(`Fetching profile for ${username} ${url}`);
  const response = await fetch(`/api/profile/${username}`, { method: "GET" });
  const data = await response.json();

  return (
    <div>
      <h1>{data.influencer.name}</h1>
      <p>{data.influencer.username}</p>
    </div>
  );
};

export default ProfilePage;
