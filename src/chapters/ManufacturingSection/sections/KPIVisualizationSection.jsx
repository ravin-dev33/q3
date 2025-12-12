import { useState, useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Database,
  FileText,
  Shield,
  TrendingUp,
  Activity,
  CheckCircle,
  BarChart3,
  Factory,
  Cpu,
  Zap,
  Settings,
  Monitor,
  Target,
  Brain,
  Award,
  Calendar,
  PlayCircle,
  Workflow,
  Users,
  Lock,
  GitBranch,
  Layers,
  Network,
  Eye,
  Gauge,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Scale,
  Server,
  Wrench,
  UserCheck,
} from "lucide-react";

const KPIVisualizationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  // State for expandable sections
  const [expandedSections, setExpandedSections] = useState({
    dataSync: false,
    kpiViz: false,
    industry40: false,
    processAutomation: false,
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
    <motion.div
      variants={itemVariants}
      className="mb-10"
      id="kpi-visualization"
    >
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
                  KPI Visualization
                </h3>
                <p className="text-base text-gray-600">
                  Data-Driven Excellence
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              As part of our focus on data-driven decision-making, we're
              standardizing KPI reporting across the enterprise using Power BI,
              anchored strictly on ERP and curated data sources. This shift is
              designed to drive consistency, eliminate fragmented reporting, and
              build a single source of truth across functions.
            </p>

            <h3 className="text-sm font-semibold text-gray-700 mb-6">
              2025 Onboarded Businesses{" "}
              {["KTNE", "Guinness", "Lush"].map((business, index) => (
                <motion.span
                  key={business}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-2 font-bold text-center text-xs text-[#1e40af] mr-2"
                >
                  {business}
                </motion.span>
              ))}
            </h3>
          </div>

          {/* Image Column - Second Position */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <img
              src="/pannel.png"
              className="w-full max-w-sm lg:max-w-none object-contain"
            />
          </div>

          <div className="order-3 col-span-1 md:col-span-2 lg:col-span-2 rounded-2xl ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-lg p-2 flex items-center bg-blue-50">
                <TrendingUp className="w-8 h-8 text-green-500 mr-4" />
                <p className="text-sm text-gray-600">Real-time Updates</p>
              </div>
              <div className="rounded-lg p-2 flex items-center bg-blue-50">
                <Activity className="w-8 h-8 text-blue-500 mr-4" />
                <p className="text-sm text-gray-600">Live Monitoring</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">
                  Power BI Standardization
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">
                  DAAP Implementation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">
                  New Businesses Onboarded
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">
                  Single Source of Truth
                </span>
              </div>
            </div>
          </div>

          {/* Stats Card - Spans 2 columns */}
          <div className="order-3 col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
            <div className="text-center">
              <div
                className="text-5xl font-black mb-2"
                style={{ color: "#1e40af" }}
              >
                <CountUp end={80} duration={2} suffix="%" />
              </div>
              <p className="text-lg font-medium text-gray-700">
                Metrics Visualized
              </p>
              <p className="text-sm text-gray-600 mt-2">
                From core ERP and curated database sources
              </p>
            </div>
          </div>

          {/* Key Initiatives - Spans full width */}
          <div className="order-5 col-span-1 md:col-span-2 lg:col-span-4 flex flex-col gap-8 items-end justify-center h-full">
            {/* Read More Button */}
            <div className="w-full items-center justify-center flex ">
              <button
                onClick={() => toggleSection("kpiViz")}
                className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#1e40af" }}
              >
                {expandedSections.kpiViz ? (
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

          {/* Expanded Content */}
          <AnimatePresence>
            {expandedSections.kpiViz && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-6 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* 80% Details */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      80% Standardization Achievement
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We are standardizing KPI reporting across factories using
                    Power BI, with 80% of all key metrics now visualized from
                    core ERP and curated database sources. This initiative is
                    reshaping our approach to data—fostering business adoption
                    and deeper insights.
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      2025 Onboarded Businesses:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                        KTNE
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                        Guinness
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                        Lush
                      </span>
                    </div>
                  </div>
                </div>

                {/* DAAP Implementation */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      DAAP Implementation: Optimizing Data Infrastructure for
                      Scalability
                    </h4>
                  </div>
                  <p className="text-gray-700">
                    As part of our shift toward treating data as a product, we
                    are implementing the DAAP (Data-as-a-Product) framework
                    within Fabric. This initiative aims to optimize data loads,
                    improve reliability, and resolve recent capacity outages.
                    Ongoing efforts are focused on creating a scalable,
                    resilient data layer that supports enterprise-wide analytics
                    and operations.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default KPIVisualizationSection;
