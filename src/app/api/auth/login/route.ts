import { NextRequest } from "next/server";
import { getResponse } from "@rbu/helpers";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    }
  );

  return getResponse(response);
}
