"use client";

import { DATA_STORE_KEYS, DataStore, Logger } from "@rbu/helpers";
import { URLProvider } from "@rbu/providers";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface FBGraphResponse {
  access_token: string;
}

const InstagramCallbackPage = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [response, setResponse] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  const postData = async (
    instagramAppId: string,
    instagramAppToken: string,
    userAccessToken: string
  ) => {
    const response = await fetch(URLProvider.getFeedAnalyticsUrl(), {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        appId: instagramAppId,
        appToken: instagramAppToken,
        userAccessToken: userAccessToken,
      }),
    });

    const data = await response.json();
    return data;
  };

  useEffect(() => {
    if (code) {
      const exchangeToken = async () => {
        setLoader(true);
        const clientId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
        const clientSecret = process.env.NEXT_PUBLIC_FACEBOOK_APP_SECRET;
        const redirectUri = process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI;

        // Exchange the authorization code for an access token
        const tokenUrl = `${URLProvider.getFBGraphUrl()}/oauth/access_token?client_id=${clientId}&redirect_uri=${redirectUri}&client_secret=${clientSecret}&code=${code}`;

        try {
          const response = await fetch(tokenUrl, {
            method: "GET",
          });
          const tokenData: FBGraphResponse = await response.json();
          Logger.logMessage("InstagramCallbackPage", "data", tokenData);

          if (tokenData.access_token) {
            // Fetch Instagram Insights with the access token
            const instagramAppToken = tokenData.access_token;

            // Step 1: Get Facebook Page ID
            const pageResponse = await fetch(
              `${URLProvider.getFBGraphUrl()}/me/accounts?access_token=${
                tokenData.access_token
              }`
            );
            const pageData = await pageResponse.json();
            const pageId = pageData.data[0].id;

            // Step 2: Get Instagram Business Account ID
            const igAccountResponse = await fetch(
              `${URLProvider.getFBGraphUrl()}/${pageId}?fields=instagram_business_account&access_token=${
                tokenData.access_token
              }`,
              {
                method: "GET",
              }
            );
            const igAccountData = await igAccountResponse.json();
            const igBusinessAccountId =
              igAccountData.instagram_business_account.id;
            console.log("appIdData", igBusinessAccountId);

            const instagramAppId = igBusinessAccountId;
            Logger.logMessage(
              "InstagramCallbackPage",
              "instagramAppId",
              instagramAppId,
              "instagramAppToken",
              instagramAppToken
            );
            setAccessToken(instagramAppToken);
            setResponse(`Success  ${JSON.stringify(igAccountData)}`);
            const userAccessToken = DataStore.getItem(DATA_STORE_KEYS.TOKEN);
            console.log("userAccessToken", userAccessToken);

            const username = DataStore.getItem(DATA_STORE_KEYS.USERNAME);

            const data = await postData(
              instagramAppId,
              instagramAppToken,
              userAccessToken as string
            );
            console.log("data", data);
            if (data.ok) {
              router.push(URLProvider.getProfilePathUrl(username as string));
            }
          }
          setLoader(false);
        } catch (error) {
          console.error("Error fetching access token or insights:", error);
          setLoader(false);
          setResponse("Error fetching access token or insights");
        }
      };

      exchangeToken();
    }
  }, [code, router]);

  return (
    <>
      {loader ? (
        <div>Loading...</div>
      ) : accessToken ? (
        <div>Reading Instagram Analytics...</div>
      ) : (
        <div>Invalid Link, {response}</div>
      )}
      {response && <div>{response}</div>}
    </>
  );
};

export default InstagramCallbackPage;
