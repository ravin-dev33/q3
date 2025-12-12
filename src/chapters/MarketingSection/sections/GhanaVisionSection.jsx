import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Eye,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Target,
  Star,
  Package,
  BarChart3,
  Zap,
  Settings,
} from "lucide-react";

const GhanaVisionSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    ghanaVision: false,
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
    <motion.div variants={itemVariants} className="mb-10" id="ghana-vision">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-red-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 2 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#e4002b" }}
              >
                <Eye className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Ghana Vision: AI Excellence
                </h3>
                <p className="text-base text-gray-600">
                  Product Visibility Intelligence
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              An MVP AI model has been deployed that autonomously detects carton
              SKUs, quantifies the number of cartons, analyzes arrangement
              patterns, and evaluates visibility using a 1–3 star rating scale.
              It delivers actionable insights for immediate optimization and is
              currently offered to the business at no cost.
            </p>
          </div>

          {/* Placeholder for Ghana Vision illustration */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start md:col-span-1 lg:col-span-2 lg:row-span-3">
            <div className="w-full max-w-sm lg:max-w-none flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl opacity-20 blur-2xl"></div>
                <div className="relative bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-1 border border-red-200/50">
                  <img
                    src="/ghana.png"
                    alt="Show some love"
                    className="h-[25rem] lg:h-[30rem]  max-w-sm lg:max-w-none object-contain  rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Preview - Spans full width */}
          <div className="order-4 col-span-1 md:col-span-2 lg:col-span-2 flex items-end justify-center h-full bg-red-200/30 p-6 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">SKU Detection</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">Carton Counting</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">
                  Arrangement Analysis
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">3-Star Rating</span>
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                <button
                  onClick={() => toggleSection("ghanaVision")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#e4002b" }}
                >
                  {expandedSections.ghanaVision ? (
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
            {expandedSections.ghanaVision && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-4 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* AI Model Capabilities */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      AI Model Capabilities
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-white/70 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Package className="w-4 h-4 text-red-700" />
                          <span className="font-medium text-black">
                            SKU Detection
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Automatically identifies and categorizes carton SKUs
                          on retail shelves
                        </p>
                      </div>
                      <div className="bg-white/70 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart3 className="w-4 h-4 text-red-700" />
                          <span className="font-medium text-black">
                            Quantity Analysis
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Counts the exact number of cartons for inventory
                          tracking
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/70 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Settings className="w-4 h-4 text-red-700" />
                          <span className="font-medium text-black">
                            Arrangement Assessment
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Evaluates the way products are arranged for optimal
                          visibility
                        </p>
                      </div>
                      <div className="bg-white/70 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-red-700" />
                          <span className="font-medium text-black">
                            Rating System
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Provides 1-3 star ratings for product visibility
                          performance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Impact */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      Business Impact & Implementation
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The deployed AI model provides actionable insights directly
                    to the business for immediate improvement in retail
                    performance and product visibility optimization.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Eye className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Optimal Visibility
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Enhanced product placement strategies
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Retail Performance
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Boosted sales through better arrangement
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Immediate Action
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Real-time insights for quick improvements
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default GhanaVisionSection;
