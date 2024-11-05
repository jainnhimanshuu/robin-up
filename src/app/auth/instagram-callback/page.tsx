"use client";

import { DATA_STORE_KEYS, DataStore, Logger } from "@rbu/helpers";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const InstagramCallbackPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      // Exchange authorization code for access token
      const exchangeToken = async () => {
        const clientId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
        const clientSecret = process.env.NEXT_PUBLIC_FACEBOOK_APP_SECRET;
        const redirectUri = process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI;

        // Exchange the authorization code for an access token
        const tokenUrl = `https://graph.facebook.com/v20.0/oauth/access_token?client_id=${clientId}&redirect_uri=${redirectUri}&client_secret=${clientSecret}&code=${code}`;

        try {
          const response = await fetch(tokenUrl, {
            method: "GET",
          });
          const data = await response.json();

          if (data.access_token) {
            // Fetch Instagram Insights with the access token
            const instagramAppToken = data.access_token;

            // Step 1: Get Facebook Page ID
            const pageResponse = await fetch(
              `https://graph.facebook.com/v20.0/me/accounts?access_token=${data.access_token}`
            );
            const pageData = await pageResponse.json();
            const pageId = pageData.data[0].id;

            // Step 2: Get Instagram Business Account ID
            const igAccountResponse = await fetch(
              `https://graph.facebook.com/v20.0/${pageId}?fields=instagram_business_account&access_token=${data.access_token}`,
              {
                method: "GET",
              }
            );
            const igAccountData = await igAccountResponse.json();
            const igBusinessAccountId =
              igAccountData.instagram_business_account.id;

            const instagramAppId = igBusinessAccountId;
            Logger.logMessage(instagramAppId, instagramAppToken);
            const username = DataStore.getItem(DATA_STORE_KEYS.USERNAME);

            router.push(`/profile/${username}`);
          }
        } catch (error) {
          console.error("Error fetching access token or insights:", error);
        }
      };

      exchangeToken();
    }
  }, [code]);

  return <div>Reading Instagram Analytics...</div>;
};

export default InstagramCallbackPage;
