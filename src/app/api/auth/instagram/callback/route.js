import axios from "axios";
import { NextResponse } from "next/server";

const CLIENT_ID = process.env.INSTAGRAM_CLIENT_ID;
const CLIENT_SECRET = process.env.INSTAGRAM_CLIENT_SECRET;
const REDIRECT_URI = process.env.INSTAGRAM_REDIRECT_URI;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  try {
    debugger;

    const tokenResponse = await axios.post(
      "https://api.instagram.com/oauth/access_token",
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "authorization_code",
        redirect_uri: REDIRECT_URI,
        code: code,
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // Fetch user info
    const userInfoResponse = await axios.get(
      `https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`
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
