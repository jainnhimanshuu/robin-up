import { IInstagram } from "./instagram";

export interface Influencer {
  username: string;
  name?: string;
  bio?: string;
  categories?: string[];
  socialMediaAccounts: string[];
  profilePicture?: string;
  instagramData?: IInstagram;
}
