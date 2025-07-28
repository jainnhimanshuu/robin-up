"use client";

import { Logger } from "@rbu/helpers";
import { Influencer } from "@rbu/types";
import { motion } from "framer-motion";
import {
  Users,
  Heart,
  MessageCircle,
  TrendingUp,
  Instagram,
  Globe,
  Target,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";
import DemographicsChart from "@rbu/components/demographicsChart/demographicsChart";
import StatsCard from "@rbu/components/statsCard/statsCard";

interface IPortfolioProps {
  influencerData: Influencer;
}

const Portfolio = (props: IPortfolioProps) => {
  const { influencerData } = props;
  const influencerUsername = influencerData?.username;
  const instagramData = influencerData?.instagramData;

  Logger.logMessage("[Portfolio]: ", instagramData);

  const engagedAudience =
    influencerData?.instagramData?.engagedAudienceDemographics;
  const reachedAudience =
    influencerData?.instagramData?.reachedAudienceDemographics;
  const followerAudience =
    influencerData?.instagramData?.followerAudienceDemographics;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Format numbers for display
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  // Calculate engagement rate percentage
  const engagementRate = instagramData?.engagementRate
    ? (instagramData.engagementRate * 100).toFixed(2)
    : "0";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-blue-600/10"></div>
        <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] opacity-30'></div>

        <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Image */}
            <motion.div
              className="relative mx-auto mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-white shadow-2xl mx-auto">
                <Image
                  src={
                    influencerData?.profilePicture ||
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  }
                  alt={`${influencerUsername}&apos;s profile`}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <Instagram className="w-6 h-6 text-white" />
              </div>
            </motion.div>

            {/* Name and Bio */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              @{influencerUsername}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {influencerData?.bio ||
                "Digital creator sharing amazing content and connecting with brands worldwide"}
            </motion.p>

            {/* Categories/Tags */}
            {influencerData?.categories &&
              influencerData.categories.length > 0 && (
                <motion.div
                  className="flex flex-wrap justify-center gap-2 mb-8"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {influencerData.categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm"
                    >
                      {category}
                    </span>
                  ))}
                </motion.div>
              )}
          </div>
        </div>
      </motion.section>

      {/* Metrics Section */}
      <motion.section
        className="px-4 py-12 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            variants={itemVariants}
          >
            Analytics & Performance
          </motion.h2>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatsCard
              title="Followers"
              value={formatNumber(instagramData?.followersCount || 0)}
              icon={Users}
              change={12.5}
              colorScheme="purple"
              delay={0.1}
            />

            <StatsCard
              title="Avg. Likes"
              value={formatNumber(instagramData?.avgLikes || 0)}
              icon={Heart}
              change={8.3}
              colorScheme="blue"
              delay={0.2}
            />

            <StatsCard
              title="Avg. Comments"
              value={formatNumber(instagramData?.avgComments || 0)}
              icon={MessageCircle}
              change={15.2}
              colorScheme="green"
              delay={0.3}
            />

            <StatsCard
              title="Engagement Rate"
              value={`${engagementRate}%`}
              icon={TrendingUp}
              change={5.7}
              colorScheme="orange"
              delay={0.4}
            />
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 shadow-lg">
                <CardBody className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Total Posts
                      </h3>
                      <p className="text-2xl font-bold text-purple-600">
                        {instagramData?.mediaCount || 0}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 shadow-lg">
                <CardBody className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Total Reach
                      </h3>
                      <p className="text-2xl font-bold text-blue-600">
                        {formatNumber(instagramData?.impressions?.[0] || 0)}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 shadow-lg">
                <CardBody className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-xl">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Total Interactions
                      </h3>
                      <p className="text-2xl font-bold text-green-600">
                        {formatNumber(
                          instagramData?.totalInteractions?.[0] || 0
                        )}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>

          {/* Demographics Charts */}
          <div className="space-y-8">
            {engagedAudience && (
              <motion.div variants={itemVariants}>
                <DemographicsChart
                  data={engagedAudience}
                  title="Engaged Audience Demographics"
                  colorScheme="purple"
                />
              </motion.div>
            )}

            {reachedAudience && (
              <motion.div variants={itemVariants}>
                <DemographicsChart
                  data={reachedAudience}
                  title="Reached Audience Demographics"
                  colorScheme="blue"
                />
              </motion.div>
            )}

            {followerAudience && (
              <motion.div variants={itemVariants}>
                <DemographicsChart
                  data={followerAudience}
                  title="Follower Audience Demographics"
                  colorScheme="green"
                />
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to collaborate?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s create amazing content together and reach your target
            audience effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Contact for Collaboration
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              View Media Kit
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
