"use client";

import { INSTAGRAM_FIELDS } from "@rbu/constants/instagramContants";
import { DATA_STORE_KEYS, DataStore, Logger } from "@rbu/helpers";
import { URLProvider } from "@rbu/providers";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const InstagramCallbackPage = () => {
  const [response, setResponse] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const longLivedToken = searchParams.get("long_lived_token");
  const hash = window.location.hash.substring(1); // Get the hash part after `#`
  const params = new URLSearchParams(hash);
  const accessToken = params.get("access_token");

  Logger.logMessage(
    "InstagramCallbackPage",
    "accessToken",
    accessToken,
    "longeLivedToken",
    longLivedToken
  );

  useEffect(() => {
    if (accessToken) {
      const exchangeAccountData = async () => {
        const accountURL = `${URLProvider.getFBGraphUrl()}/me/accounts?fields=${
          INSTAGRAM_FIELDS.ID
        },${INSTAGRAM_FIELDS.INSTAGRAM_BUSINESS_ACCOUNT},${
          INSTAGRAM_FIELDS.NAME
        },${INSTAGRAM_FIELDS.ACCESS_TOKEN}&access_token=${accessToken}`;

        try {
          const response = await fetch(accountURL, {
            method: "GET",
          });
          const resp = await response.json();

          Logger.logMessage("ACCOUNT DATA", resp);
          const data = resp.data;

          if (data.length > 0) {
            const igAccountData = data[0];
            const igBusinessAccountId =
              igAccountData.instagram_business_account.id;

            const instagramAppId = igBusinessAccountId;

            Logger.logMessage("InstagramAppId", instagramAppId);

            const username = DataStore.getItem(DATA_STORE_KEYS.USERNAME);

            router.push(`/profile/${username}`);
          } else {
            Logger.logMessage("No Instagram Account Connected", data);
            setResponse("No Instagram Account Connected");
          }
        } catch (error) {
          console.error("Error fetching access token or insights:", error);
        }
      };

      exchangeAccountData();
    }
  }, [accessToken]);

  return (
    <>
      {accessToken ? (
        <div>Reading Instagram Analytics...</div>
      ) : (
        <div>Invalid Link, {response}</div>
      )}
    </>
  );
};

export default InstagramCallbackPage;
