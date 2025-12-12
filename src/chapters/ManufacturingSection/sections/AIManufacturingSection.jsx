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

const AIManufacturingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  // State for expandable sections
  const [expandedSections, setExpandedSections] = useState({
    aiManufacturing: false,
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
    <motion.div variants={itemVariants} className="mb-10" id="ai-manufacturing">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#1e40af" }}
              >
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  AI in Manufacturing
                </h3>
                <p className="text-base text-gray-600">
                  Embedding Intelligence Into Operations
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              We are embedding AI into core manufacturing workflows to move from
              reactive to predictive operations and enhance user responsiveness.
              By leveraging predictive models and large language models (LLMs),
              we are unlocking new efficiencies in maintenance, troubleshooting,
              and knowledge access reducing response times, minimizing unplanned
              downtime, and optimizing system support.
            </p>

            <h3 className="text-sm font-semibold text-gray-700 mb-6">
              AI Applications{" "}
              {["Downtime Prediction", "SAP LLM Assistant"].map(
                (application, index) => (
                  <motion.span
                    key={application}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-2 font-bold text-center text-xs text-[#1e40af] mr-2"
                  >
                    {application}
                  </motion.span>
                )
              )}
            </h3>
          </div>

          {/* Image Column - Second Position */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <img
              src="/ai.png"
              alt="AI in Manufacturing"
              className="w-full max-w-sm lg:max-w-none object-contain"
            />
          </div>

          {/* Stats Card - Spans 2 columns */}
          <div className="order-3 col-span-1 md:col-span-2 lg:col-span-2 rounded-2xl">
            {/* Solutions Card - Spans 2 columns */}
            <div className="text-left flex items-end gap-4  bg-blue-50  p-2  px-4 rounded-lg">
              <div className="text-5xl font-black" style={{ color: "#1e40af" }}>
                <CountUp end={2} duration={2} />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-700">
                  AI Solutions
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Predictive maintenance and LLM assistance
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg p-2 flex items-center bg-blue-50">
                <Target className="w-8 h-8 text-green-500 mr-4" />
                <p className="text-sm text-gray-600">Predictive Models</p>
              </div>
              <div className="rounded-lg p-2 flex items-center bg-blue-50">
                <Brain className="w-8 h-8 text-blue-500 mr-4" />
                <p className="text-sm text-gray-600">LLM Integration</p>
              </div>
            </div>
          </div>

          {/* Solutions Card - Spans 2 columns */}
          <div className="order-5 col-span-1 md:col-span-2 lg:col-span-2 rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">
                  Predictive Maintenance
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Automated Support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Resource Planning</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">
                  Enhanced User Experience
                </span>
              </div>
            </div>

            <div className="w-full items-center justify-center flex">
              <button
                onClick={() => toggleSection("aiManufacturing")}
                className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#1e40af" }}
              >
                {expandedSections.aiManufacturing ? (
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
            {expandedSections.aiManufacturing && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-6 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* Downtime Prediction Model */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      1. Downtime Prediction Model
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    An AI-driven model designed to predict equipment downtimes,
                    allowing for proactive maintenance scheduling and reduced
                    reliance on real-time alerts.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Enables structured, preventive maintenance
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Reduces operational disruptions
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Supports resource planning and equipment health
                        monitoring
                      </span>
                    </div>
                  </div>
                </div>

                {/* SAP LLM Assistant */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      2. SAP LLM Assistant
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    A large language model integrated with SAP to manage
                    first-level user queries, automate log raising, and guide
                    users through standard resolutions.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Accelerates resolution of common SAP issues
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Reduces dependency on manual support teams
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Enhances user experience and support efficiency
                      </span>
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

export default AIManufacturingSection;
