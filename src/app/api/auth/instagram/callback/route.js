import axios from "axios";
import { NextResponse } from "next/server";
import qs from "qs";

const CLIENT_ID = process.env.INSTAGRAM_CLIENT_ID;
const CLIENT_SECRET = process.env.INSTAGRAM_CLIENT_SECRET;
const REDIRECT_URI = process.env.INSTAGRAM_REDIRECT_URI;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  try {
    const payload = qs.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: "authorization_code",
      redirect_uri: REDIRECT_URI,
      code: code,
    });

    const tokenResponse = await axios.post(
      "https://api.instagram.com/oauth/access_token",
      payload,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const accessToken = tokenResponse.data.access_token;

    // Fetch user info
    const userInfoResponse = await axios.get(
      `https://graph.instagram.com/me?fields=id,user_id,username,name,account_type,profile_picture_url,followers_count,follows_count,media_count&access_token=${accessToken}`
    );

    const userMediaObjectResponse = await axios.get(
      `https://graph.instagram.com/v21.0/${userInfoResponse.data.user_id}/media?access_token=${accessToken}`
    );

    // Fetch media insights for each media item
    const mediaInsightsPromises = userMediaObjectResponse.data.data.map(
      (mediaItem) =>
        axios
          .get(
            `https://graph.instagram.com/${mediaItem.id}/insights?metric=impressions,shares,comments,plays,likes,saved,replies,video_views,total_interactions,navigation,follows,profile_visits,profile_activity,reach,ig_reels_video_view_total_time,ig_reels_avg_watch_time,clips_replays_count,ig_reels_aggregated_all_plays_count,views,thread_replies,reposts,quotes,peak_concurrent_viewers,thread_shares&access_token=${accessToken}`
          )
          .catch((error) => {
            console.error(
              `Error fetching insights for media item ${mediaItem.id}`
            );
            return null;
          })
    );

    const mediaInsightsResponses = await Promise.all(mediaInsightsPromises);
    let mediaInsights = [];
    if (
      mediaInsightsResponses.filter((insight) => insight !== null).length > 0
    ) {
      mediaInsights = mediaInsightsResponses.map((response) => response.data);
    }

    const output = {
      basic: userInfoResponse.data,
      media: userMediaObjectResponse.data,
      insights: mediaInsights,
    };
    return NextResponse.json(output);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error retrieving access token or user info" },
      { status: 500 }
    );
  }
}
