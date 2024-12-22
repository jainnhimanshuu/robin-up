import { NextRequest } from "next/server";
import { getResponse } from "@rbu/helpers";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password, username } = body;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password, username, userType: "Influencer" }),
  });

  return getResponse(response);
}
