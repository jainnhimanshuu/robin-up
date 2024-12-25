import jwt from "jsonwebtoken";
import { Logger } from "../logger/logger";

export interface DecodedToken {
  username: string;
  id: string;
  email: string;
}

export function verifyToken(token: string): Promise<DecodedToken> {
  return new Promise((resolve, reject) => {
    try {
      Logger.logMessage("Decoded token Start");
      // TODO: get secret from env
      const decoded = jwt.verify(
        token,
        "Xq3ZGqD7TbAeBTvgvsMLiZ9WFZdAom1NAam9Pb6SwW8="
      );

      Logger.logMessage("Decoded token End", decoded);

      // Validate that the decoded token has the required fields
      if (
        typeof decoded === "object" &&
        decoded !== null &&
        "username" in decoded &&
        "id" in decoded &&
        "email" in decoded
      ) {
        resolve(decoded as DecodedToken);
      } else {
        reject(new Error("Token missing required fields"));
      }
    } catch (error) {
      reject(
        new Error(
          `Token verification failed: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        )
      );
    }
  });
}
