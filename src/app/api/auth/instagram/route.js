import { NextResponse } from "next/server";

const CLIENT_ID = process.env.INSTAGRAM_CLIENT_ID;
const REDIRECT_URI = process.env.INSTAGRAM_REDIRECT_URI;

export async function GET() {
  const url = `https://api.instagram.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=instagram_business_basic&response_type=code`;
  return NextResponse.redirect(url);
}
