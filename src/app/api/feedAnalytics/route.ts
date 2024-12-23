import { getResponse } from "@rbu/helpers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { appId, appToken, userAccessToken } = await req.json();
  console.log(appId, appToken, userAccessToken);

  const response = await fetch(
    // TODO: add url to the env
    `https://feedinstagramanalytics-442335395250.asia-south2.run.app?appId=${appId}&iAccessToken=${appToken}&userAccessToken=${userAccessToken}`,
    {
      method: "POST",
      credentials: "include",
    }
  );

  return getResponse(response);
}
