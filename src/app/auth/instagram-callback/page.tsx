"use client";

// import { INSTAGRAM_FIELDS } from "@rbu/constants/instagramContants";
import { Logger } from "@rbu/helpers";
import { URLProvider } from "@rbu/providers";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const InstagramCallbackPage = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [response, setResponse] = useState<string>("");
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  // useEffect(() => {
  //   if (CommonUtils.isBrowser()) {
  //     const hash = window.location.hash.substring(1); // Get the hash part after `#`
  //     const params = new URLSearchParams(hash);
  //     const token = params.get("access_token");

  //     if (token) {
  //       setAccessToken(token);
  //       Logger.logMessage("InstagramCallbackPage", "accessToken", token);
  //     }
  //   }
  // }, []);

  useEffect(() => {
    if (code) {
      const exchangeToken = async () => {
        const clientId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
        const clientSecret = process.env.NEXT_PUBLIC_FACEBOOK_APP_SECRET;
        const redirectUri = process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI;

        // Exchange the authorization code for an access token
        const tokenUrl = `${URLProvider.getFBGraphUrl()}/oauth/access_token?client_id=${clientId}&redirect_uri=${redirectUri}&client_secret=${clientSecret}&code=${code}`;

        try {
          const response = await fetch(tokenUrl, {
            method: "GET",
          });
          const data = await response.json();
          Logger.logMessage("InstagramCallbackPage", "data", data);

          if (data.access_token) {
            // Fetch Instagram Insights with the access token
            const instagramAppToken = data.access_token;

            // Step 1: Get Facebook Page ID
            const pageResponse = await fetch(
              `${URLProvider.getFBGraphUrl()}/me/accounts?access_token=${
                data.access_token
              }`
            );
            const pageData = await pageResponse.json();
            const pageId = pageData.data[0].id;

            // Step 2: Get Instagram Business Account ID
            const igAccountResponse = await fetch(
              `${URLProvider.getFBGraphUrl()}/${pageId}?fields=instagram_business_account&access_token=${
                data.access_token
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
            // await postData(instagramAppId, instagramAppToken);
          }
        } catch (error) {
          console.error("Error fetching access token or insights:", error);
          setResponse("Error fetching access token or insights");
        }
      };

      exchangeToken();
    }
  }, [code]);

  return (
    <>
      {accessToken ? (
        <div>Reading Instagram Analytics...</div>
      ) : (
        <div>Invalid Link, {response}</div>
      )}
      {response && <div>{response}</div>}
    </>
  );
};

export default InstagramCallbackPage;
