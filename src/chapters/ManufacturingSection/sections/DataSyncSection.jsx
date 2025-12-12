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

const DataSyncSection = () => {
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
    <motion.div variants={itemVariants} className="mb-10" id="data-sync">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}

          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#1e40af" }}
              >
                <Database className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">Data Sync</h3>
                <p className="text-base text-gray-600">
                  Streamlining Data Excellence
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              By streamlining data capture and enabling structured access within
              enterprise infrastructure, we're not only improving execution but
              laying the groundwork for stronger analytics, compliance
              readiness, and future automation.
            </p>
          </div>

          {/* Image Column - First Position */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start ">
            <img
              src="/data.png"
              className="w-full max-w-sm lg:max-w-none object-contain"
            />
          </div>

          {/* Stats Card - Spans full width on smaller screens, positioned in text area */}
          <div className="order-3 col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
            <div className="text-center">
              <div
                className="text-5xl font-black mb-2"
                style={{ color: "#1e40af" }}
              >
                <CountUp end={83} duration={2} suffix="%" />
              </div>
              <p className="text-lg font-medium text-gray-700">
                Paperless Operations
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Business data points now recorded digitally for 15 Businesses
              </p>
            </div>
          </div>

          {/* Solutions Card - Spans 2 columns */}
          <div className="order-4 col-span-1 md:col-span-2 lg:col-span-2 rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">
                  DMS Implementation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">
                  E-Signing Application
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">AppSheet Audit</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">
                  Digital Governance
                </span>
              </div>
            </div>

            {/* Read More Button */}
            <div className="w-full items-center justify-center flex mt-6">
              <button
                onClick={() => toggleSection("dataSync")}
                className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#1e40af" }}
              >
                {expandedSections.dataSync ? (
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

          {/* Key Initiatives - Spans full width */}
          {/* <div className="order-5 col-span-1 md:col-span-2 lg:col-span-4 flex  flex-col gap-8 justify-center h-full">
           
          </div> */}

          {/* Expanded Content */}
          <AnimatePresence>
            {expandedSections.dataSync && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-6 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* Paperless Details */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Paperless Operations - 83%
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Data Sync is streamlining data capture across operations by
                    digitizing manual shopfloor records through an ERP-first
                    approach with AppSheet support. With 83% of business data
                    points now recorded digitally, the initiative is enhancing
                    data integrity and operational visibility.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      15 Businesses
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      GPL Rollout
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      Guinness Rollout
                    </span>
                  </div>
                </div>

                {/* DMS Implementation */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      DMS Implementation: Centralizing and Securing Enterprise
                      Data
                    </h4>
                  </div>
                  <p className="text-gray-700  mb-4">
                    The Document Management System (DMS) initiative is
                    establishing a centralized, secure platform for all
                    controlled documents. By enforcing structured, hierarchical
                    access with approval workflows and security protocols, the
                    system lays the foundation for long-term digital data
                    governance and controlled information access across the
                    organization.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      Live in Dufil
                    </span>
                  </div>
                </div>

                {/* E-Signing Application */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      T- Sign : E signing application
                    </h4>
                  </div>
                  <p className="text-gray-700">
                    This initiative digitizes document signing and approval
                    workflows through a secure, in-house solution. By replacing
                    third-party tools, it ensures greater data security,
                    customization, and control over approval processes—aligning
                    with our broader digital governance strategy.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      Live in Dufil
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

export default DataSyncSection;
