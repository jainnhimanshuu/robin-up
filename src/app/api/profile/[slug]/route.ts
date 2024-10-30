import { NextRequest } from "next/server";
import { getResponse, Logger } from "@rbu/helpers";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const username = params.slug;
  Logger.logMessage(
    `Fetching profile for ${process.env.NEXT_PUBLIC_API_URL}/influencer/${username}`
  );

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/influencer/${username}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return getResponse(response);
}
