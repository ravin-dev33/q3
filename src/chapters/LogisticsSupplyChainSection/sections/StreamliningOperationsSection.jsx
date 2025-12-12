import { useState, useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Settings,
  Package,
  AlertTriangle,
  MapPin,
  Truck,
  Activity,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Zap,
  Monitor,
  Clock,
  Target,
  BarChart3,
  TrendingUp,
  Eye,
  Navigation,
  Layers,
  Workflow,
} from "lucide-react";

const StreamliningOperationsSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    streamliningOperations: false,
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
    <motion.div variants={itemVariants} className="mb-20" id="streamlining-operations">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#1e40af" }}
              >
                <Settings className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Streamlining Operations
                </h3>
                <p className="text-base text-gray-600">
                  Advanced Applications
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              New applications are being deployed to optimize key logistics
              processes, providing enhanced visibility, streamlined planning,
              and improved operational efficiency across our fleet and
              distribution network.
            </p>
          </div>

          {/* Image Column - Operations Dashboard */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/operations-dashboard-placeholder.png"
                alt="Operations Dashboard"
                className="w-full max-w-sm lg:max-w-none object-contain rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white">
                  <Monitor className="w-5 h-5" />
                  <span className="text-sm font-medium">Operations Control</span>
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
                <CountUp end={3} duration={2} />
              </div>
              <p className="text-sm font-medium text-gray-700">
                New Applications
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Optimizing logistics processes
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
                <span className="text-sm text-gray-600">Load Planning (Guinness)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Exceptions Dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Tracking Portal</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Real-time Visibility</span>
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                <button
                  onClick={() => toggleSection("streamliningOperations")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#1e40af" }}
                >
                  {expandedSections.streamliningOperations ? (
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
            {expandedSections.streamliningOperations && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-5 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* Load Planning Application */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Package
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Load Planning Application (Guinness)
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Our new load planning application is now live for Guinness.
                    This tool optimizes cargo distribution, maximizing vehicle
                    utilization, reducing fuel consumption, and ensuring
                    compliance with weight regulations. It streamlines the
                    planning process, leading to greater efficiency and cost
                    savings.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      Guinness Live
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      Optimized Distribution
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                      Cost Savings
                    </span>
                  </div>
                </div>

                {/* Exceptions Dashboard */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Exceptions Dashboard (MPL Ghana)
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We have implemented an exceptions dashboard for MPL Ghana.
                    This critical tool provides real-time visibility into
                    operational deviations and anomalies, enabling our teams to
                    quickly identify, prioritize, and address issues, minimizing
                    disruptions and improving response times.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                      MPL Ghana
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                      Real-time Alerts
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      Quick Response
                    </span>
                  </div>
                </div>

                {/* Tracking Portal */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Tracking Portal (Guinness)
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    A new tracking portal is live for Guinness, offering
                    enhanced visibility into shipment movements. This portal
                    provides real-time tracking information, enabling better
                    communication with stakeholders, more accurate ETAs, and
                    improved overall transparency throughout the delivery
                    process.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      Guinness Live
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      Real-time Tracking
                    </span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs">
                      Enhanced Visibility
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

export default StreamliningOperationsSection;