import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Heart,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Video,
  Award,
  Users,
  Star,
  Trophy,
  Sparkles,
  Target,
  Globe,
} from "lucide-react";

const ShowSomeLoveCampaignSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    showSomeLove: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="mb-10"
      id="show-some-love-campaign"
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-red-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#e4002b" }}
              >
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  AI Deepfake Campaign
                </h3>
                <p className="text-base text-gray-600">
                  Africa's First AI Celebrity Campaign
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              This groundbreaking initiative marked Africa's first AI-powered
              celebrity video campaign, generating approximately 250,000
              personalized videos. The campaign's innovative approach was
              recognized with the Best Use of AI in FMCG at the Nigeria Martech
              Awards.
            </p>
          </div>

          {/* Image Column - Placeholder for Show Some Love illustration */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start md:col-span-1 lg:col-span-2 lg:row-span-3">
            <div className="w-full max-w-sm lg:max-w-none flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl opacity-20 blur-2xl"></div>
                <div className="relative bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-1 border border-red-200/50">
                  <img
                    src="/love.png"
                    alt="Show some love"
                    className="w-full max-w-sm lg:max-w-none object-contain  rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card - Spans full width on smaller screens */}
          <div className="order-3 col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div
                  className="text-3xl font-black mb-2"
                  style={{ color: "#e4002b" }}
                >
                  <CountUp end={250} duration={2} />
                  K+
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Videos Generated
                </p>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-black mb-2"
                  style={{ color: "#e4002b" }}
                >
                  <CountUp end={1} duration={2} />
                  st
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Africa AI Campaign
                </p>
              </div>
            </div>
          </div>

          {/* Key Initiatives Preview - Spans full width */}
          <div className="order-4 col-span-1 md:col-span-2 lg:col-span-2 flex items-end justify-center h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">
                  Celebrity Campaign
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">Martech Award</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">AI-Powered</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">250K+ Videos</span>
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                <button
                  onClick={() => toggleSection("showSomeLove")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#e4002b" }}
                >
                  {expandedSections.showSomeLove ? (
                    <>
                      Show Less
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Read More Details
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {expandedSections.showSomeLove && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-5 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* Campaign Overview */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Video className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      Campaign Overview
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The "Show Some Love to Mum" campaign represents a
                    groundbreaking achievement in African digital marketing. As
                    the continent's first AI-powered celebrity video campaign,
                    it successfully generated approximately 250,000 personalized
                    videos, setting new standards for consumer engagement and
                    technological innovation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          AI-Powered Technology
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Advanced AI algorithms for personalization
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Celebrity Integration
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Seamless celebrity content personalization
                      </p>
                    </div>
                  </div>
                </div>

                {/* Industry Recognition */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      Industry Recognition
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The campaign's innovative approach was recognized with the
                    prestigious "Best Use of AI in FMCG" award at the Nigeria
                    Martech Awards, underlining our leadership in digital
                    marketing innovation and AI implementation in consumer
                    marketing.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Martech Award
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Best Use of AI in FMCG
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Industry First
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Africa's first AI celebrity campaign
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Innovation Leader
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Digital marketing benchmark
                      </p>
                    </div>
                  </div>
                </div>

                {/* Campaign Impact Metrics */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      Campaign Impact Metrics
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Videos Generated
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            250,000+
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Campaign Type
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            AI-Powered
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Innovation Level
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            First in Africa
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Award Recognition
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            Martech Winner
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Industry Impact
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            Benchmark Set
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Technology
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            AI Celebrity
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Placeholder for Show Some Love Campaign illustrations */}
                {/* <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Visual Overview
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-200 rounded-xl p-8 text-center">
                      <div className="w-full h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                        <Video className="w-8 h-8 text-gray-500" />
                      </div>
                      <p className="text-sm text-gray-600">
                        AI Celebrity Video Generator - Personalized content
                        creation
                      </p>
                    </div>
                    <div className="bg-gray-200 rounded-xl p-8 text-center">
                      <div className="w-full h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                        <Award className="w-8 h-8 text-gray-500" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Martech Award Recognition - Industry leadership showcase
                      </p>
                    </div>
                  </div>
                </div> */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ShowSomeLoveCampaignSection;
