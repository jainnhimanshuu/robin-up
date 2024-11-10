import { IInstagram } from "@rbu/types/instagram";

export class InfluencerUtils {
  static parseInstagramData(instagramData: IInstagram) {
    const {
      influencerId,
      igUsername,
      instagramAppId,
      instagramAccessToken,
      followersCount,
      mediaCount,
      engagementRate,
      avgLikes,
      avgComments,
      recentPosts,
      impressions,
      reach,
      last30DaysReach,
      totalInteractions,
      instagramProfilePicture,
      engagedAudienceDemographics,
      reachedAudienceDemographics,
      followerAudienceDemographics,
    } = instagramData;

    return {
      influencerId,
      igUsername,
      instagramAppId,
      instagramAccessToken,
      followersCount,
      mediaCount,
      engagementRate,
      avgLikes,
      avgComments,
      recentPosts,
      impressions,
      reach,
      last30DaysReach,
      totalInteractions,
      instagramProfilePicture,
      engagedAudienceDemographics,
      reachedAudienceDemographics,
      followerAudienceDemographics,
    };
  }
}
