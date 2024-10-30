import { NextRequest } from "next/server";
import { getResponse } from "@rbu/helpers";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username } = body;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/check-username`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    }
  );

  return getResponse(response);
}
