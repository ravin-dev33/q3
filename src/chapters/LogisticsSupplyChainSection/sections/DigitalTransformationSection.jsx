import { useState, useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  BarChart3,
  Database,
  TrendingUp,
  Target,
  Eye,
  Activity,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Zap,
  Monitor,
  Clock,
  Users,
  Settings,
  Globe,
  PieChart,
  LineChart,
} from "lucide-react";

const DigitalTransformationSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    digitalTransformation: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
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
    <motion.div variants={itemVariants} className="mb-20" id="digital-transformation">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#1e40af" }}
              >
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Digital Transformation
                </h3>
                <p className="text-base text-gray-600">
                  Achieving Full Data Visibility
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              Our commitment to digital transformation is delivering
              comprehensive data coverage and actionable insights, ensuring that
              all critical operational data is captured for robust analytics
              and informed decision-making.
            </p>
          </div>

          {/* Image Column - Digital Dashboard */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/digital-dashboard-placeholder.png"
                alt="Digital Dashboard"
                className="w-full max-w-sm lg:max-w-none object-contain rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white">
                  <Database className="w-5 h-5" />
                  <span className="text-sm font-medium">Data Coverage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card - Spans 2 columns */}
          <div className="order-3 col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-6">
            <div className="text-center">
              <div
                className="text-3xl font-black mb-2"
                style={{ color: "#1e40af" }}
              >
                <CountUp end={100} duration={2} suffix="%" />
              </div>
              <p className="text-sm font-medium text-gray-700">
                Digital Data Coverage
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Across all logistics operations
              </p>
            </div>
          </div>

          {/* Key Initiatives Preview - Spans 2 columns */}
          <div className="order-4 col-span-1 md:col-span-2 lg:col-span-2 flex items-end justify-center h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Complete Data Points</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Digital Tools</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Analytics Foundation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Continuous Improvement</span>
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                <button
                  onClick={() => toggleSection("digitalTransformation")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#1e40af" }}
                >
                  {expandedSections.digitalTransformation ? (
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
            {expandedSections.digitalTransformation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-5 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* 100% Digital Coverage */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Database
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      100% Digital Data Point Coverage
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We are proud to announce that we have achieved 100% data
                    point coverage via digital tools across our logistics
                    operations. This milestone ensures that all critical
                    operational data is captured, providing a foundation for
                    robust analytics, informed decision-making, and continuous
                    improvement.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      Complete Coverage
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      Digital Tools
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      Analytics Ready
                    </span>
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

export default DigitalTransformationSection;