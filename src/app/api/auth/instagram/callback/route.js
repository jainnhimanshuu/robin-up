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
      `https://graph.instagram.com/me?fields=id,username,account_type,media_count,name,profile_picture_url,biography,website,email&access_token=${accessToken}`
    );
    return NextResponse.json(userInfoResponse.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error retrieving access token or user info" },
      { status: 500 }
    );
  }
}
