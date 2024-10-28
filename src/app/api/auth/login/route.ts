import { NextRequest } from "next/server";
import { CommonUtils } from "@rbu/helpers";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Email and password are required" }),
        { status: 400 }
      );
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          message: data.message || "Invalid credentials",
          status: response.status,
        }),
        { status: response.status }
      );
    }

    const token = response.headers.get("set-cookie");

    if (!token) {
      return new Response(
        JSON.stringify({ message: "Authentication token not found" }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({
        data,
        message: "Login successful",
      }),
      {
        status: 200,
        headers: {
          "Set-Cookie": token,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";

    return new Response(
      JSON.stringify({
        message: errorMessage,
        error: CommonUtils.isBrowser() ? undefined : error, // Only include error details in non-browser environments
      }),
      { status: 500 }
    );
  }
}
