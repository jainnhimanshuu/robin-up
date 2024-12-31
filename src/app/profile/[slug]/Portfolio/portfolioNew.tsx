"use client";

import MetricCard from "@rbu/components/metricCard/metricCard";
import { Influencer } from "@rbu/types";
import { ProfileHero } from "@rbu/components/profileHero/profileHero";
import { User } from "lucide-react";
import Demographics from "@rbu/layouts/demographics/demographics";
import Image from "next/image";

interface IPortfolioNewProps {
  influencerData: Influencer;
}

const PortfolioNew = (props: IPortfolioNewProps) => {
  const { influencerData } = props;

  const influencerUsername = influencerData?.username;

  const instagramData = influencerData?.instagramData;

  const engagedAudience =
    influencerData?.instagramData?.engagedAudienceDemographics;

  const reachedAudience =
    influencerData?.instagramData?.reachedAudienceDemographics;
  const followerAudience =
    influencerData?.instagramData?.followerAudienceDemographics;

  return (
    <div className="md:p-[112px_112px_200px] bg-slate-100">
      <section className="profile-header rounded-xl bg-white shadow-[0_0_40px_0_rgba(94,92,154,.06)]">
        <figure
          className="profile-header-cover h-20 md:h-52 rounded-t-xl"
          style={{
            background:
              "url('https://odindesignthemes.com/vikinger/img/cover/01.jpg') center center / cover no-repeat",
          }}
        >
          <Image
            src={"https://odindesignthemes.com/vikinger/img/cover/01.jp"}
            width={1080}
            height={720}
            style={{ display: "none" }}
            alt="User Profile Banner"
          />
        </figure>

        <div className="relative flex items-center justify-center bg-white w-full">
          <div className="absolute -to-1/2 rounded-full border-8 border-transparent bg-white h-40 w-40 overflow-hidden">
            <Image
              src={
                influencerData?.profilePicture ??
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              }
              width={160}
              height={160}
              alt="Profile Picture"
            />
          </div>
        </div>
        <div className="relative pt-24 w-full flex flex-col items-center justify-center gap-2">
          <h3 className="font-bold text-2xl text-gray-800">
            {influencerData?.bio ?? "Full Name"}{" "}
            <span className=" text-sm text-gray-400 font-normal">
              (#{influencerUsername})
            </span>
          </h3>
          <p className="text-sm text-gray-950">{influencerData?.bio}</p>
        </div>

        <div className="profile-stats w-full lg:max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-4 pb-4 divide-gray-300 divide-x-small mt-8">
          {/* Followers Count */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl font-bold text-[#3e3f5e]">
              {instagramData.followersCount}
            </p>
            <p className="text-xs font-semibold text-[#adafca]">Followers</p>
          </div>
          {/* Media Count */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl font-bold text-[#3e3f5e]">
              {instagramData.mediaCount}
            </p>
            <p className="text-xs font-semibold text-[#adafca]">Media</p>
          </div>
          {/* avgLikes */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl font-bold text-[#3e3f5e]">
              {instagramData.avgLikes}
            </p>
            <p className="text-xs font-semibold text-[#adafca]">Avg Likes</p>
          </div>
          {/* last30DaysReach */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl font-bold text-[#3e3f5e]">
              {instagramData.last30DaysReach}
            </p>
            <p className="text-xs font-semibold text-[#adafca]">
              30 Days Reach
            </p>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
    </div>
  );
};
export default PortfolioNew;
