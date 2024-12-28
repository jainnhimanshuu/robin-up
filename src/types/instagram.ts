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

export interface IDemographics {
  gender: IGender;
  country: ICountry;
  age: IAge;
  city: ICity;
}

export interface IInstagram {
  influencerId: string;
  igUsername: string;
  instagramAppId: string;
  instagramAccessToken: string;
  followersCount: number;
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
  engagedAudienceDemographics: IDemographics;
  reachedAudienceDemographics: IDemographics;
  followerAudienceDemographics: IDemographics;
}
