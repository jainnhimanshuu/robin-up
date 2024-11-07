export interface IGender {
  male: number;
  female: number;
  other: number;
}

export interface ICountry {
  [key: string]: number;
}

export interface IAge {
  [key: string]: number;
}

export interface ICity {
  [key: string]: number;
}

export interface IInstagram {
  influencerId: string;
  igUsername: string;
  instagramAppId: string;
  instagramAccessToken: string;
  followersCount: string;
  mediaCount: number;
  engagementRate: number;
  avgLikes: number;
  avgComments: number;
  recentPosts: string[];
  impressions: number[];
  reach: number[];
  last30DaysReach: number[];
  totalInteractions: number[];
  instagramProfilePicture: string;
  engagedAudienceDemographics: {
    gender: IGender;
    country: ICountry; // Map of country and percentage
    age: IAge; // Map of age range and percentage
    city: ICity; // Map of city and percentage
  };
  reachedAudienceDemographics: {
    gender: IGender;
    country: ICountry;
    age: IAge;
    city: ICity;
  };
  followerAudienceDemographics: {
    gender: IGender;
    country: ICountry;
    age: IAge;
    city: ICity;
  };
}
