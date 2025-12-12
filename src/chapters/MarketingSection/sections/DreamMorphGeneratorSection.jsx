import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Sparkles,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Languages,
  Target,
  Users,
  Globe,
  Calendar,
  Zap,
  Star,
  Heart,
  Brain,
} from "lucide-react";

const DreamMorphGeneratorSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    dreamMorph: false,
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
      id="dream-morph-generator"
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-red-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#e4002b" }}
              >
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Dream-Morph AI Generator
                </h3>
                <p className="text-base text-gray-600">
                  AI Career Generator for Children
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              We've launched an AI-powered career generator for children,
              initially in the Hausa language for the Northern region. This
              strategic move brings AI technology to non-English native speakers
              in Nigeria, with a target of reaching 350,000 Hausa users this
              year.
            </p>
          </div>

          {/* Image Column - Placeholder for Show Some Love illustration */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start md:col-span-1 lg:col-span-2 lg:row-span-3">
            <div className="w-full max-w-sm lg:max-w-none flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl opacity-20 blur-2xl"></div>
                <div className="relative bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-1 border border-red-200/50">
                  <img
                    src="/before.png"
                    alt="Show some love"
                    className="h-[20rem] lg:h-[40rem]  max-w-sm lg:max-w-none object-contain  rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Image Column - Placeholder for Show Some Love illustration */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start md:col-span-1 lg:col-span-2 lg:row-span-3">
            <div className="w-full max-w-sm lg:max-w-none flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl opacity-20 blur-2xl"></div>
                <div className="relative bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-1 border border-red-200/50">
                  <img
                    src="/after.png"
                    alt="Show some love"
                    className="lg:h-[40rem]  h-[20rem] max-w-sm lg:max-w-none object-contain  rounded-2xl"
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
                  <CountUp end={350} duration={2} />K
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Target Users
                </p>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-black mb-2"
                  style={{ color: "#e4002b" }}
                >
                  <CountUp end={1} duration={2} />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Language (Hausa)
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
                <span className="text-sm text-gray-600">Hausa Language</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">350K Target</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">Career Generator</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">Inclusive Tech</span>
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                <button
                  onClick={() => toggleSection("dreamMorph")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#e4002b" }}
                >
                  {expandedSections.dreamMorph ? (
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
            {expandedSections.dreamMorph && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-5 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* AI Career Generator Overview */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      AI Career Generator for Children
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The Dream-Morph AI Generator represents a groundbreaking
                    approach to career guidance for children, utilizing advanced
                    AI technology to create personalized career exploration
                    experiences. This innovative tool helps young minds discover
                    their potential career paths in an engaging and culturally
                    relevant manner.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          AI-Powered Technology
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Advanced algorithms for career guidance
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Child-Focused Design
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Engaging and age-appropriate interface
                      </p>
                    </div>
                  </div>
                </div>

                {/* Language Inclusivity Initiative */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Languages
                      className="w-6 h-6"
                      style={{ color: "#e4002b" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Language Inclusivity Initiative
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    By launching initially in the Hausa language, we're making
                    AI technology accessible to non-English native speakers in
                    Nigeria's Northern region. This strategic move demonstrates
                    our commitment to inclusive technological advancement and
                    cultural sensitivity in AI deployment.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Hausa Language
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Northern Nigeria focus
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          350K Target
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Hausa users this year
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Inclusive Tech
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Cultural accessibility
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expansion Plans */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar
                      className="w-6 h-6"
                      style={{ color: "#e4002b" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Expansion Plans & Future Rollout
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Plans are underway to expand this initiative to other parts
                    of Nigeria in English by August, demonstrating our
                    commitment to inclusive technological advancement. This
                    phased rollout approach ensures quality delivery while
                    maximizing impact across diverse Nigerian communities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Initial Launch
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            Hausa
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Target Region
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            Northern Nigeria
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            User Target
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            350,000
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Next Phase
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            English
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Timeline
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            August
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Scope
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            National
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Placeholder for Dream-Morph AI Generator illustrations */}
                {/* <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Visual Overview
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-200 rounded-xl p-8 text-center">
                      <div className="w-full h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                        <Languages className="w-8 h-8 text-gray-500" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Hausa Language Interface - Inclusive AI technology
                      </p>
                    </div>
                    <div className="bg-gray-200 rounded-xl p-8 text-center">
                      <div className="w-full h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                        <Target className="w-8 h-8 text-gray-500" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Career Generation Tool - AI-powered guidance for
                        children
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

export default DreamMorphGeneratorSection;
