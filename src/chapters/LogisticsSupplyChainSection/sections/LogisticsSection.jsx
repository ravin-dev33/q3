import { useState, useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Camera,
  Shield,
  Truck,
  Eye,
  AlertTriangle,
  Activity,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Brain,
  Gauge,
  Target,
  Settings,
  Zap,
  Users,
  Car,
  Clock,
  TrendingUp,
  BarChart3,
  Monitor,
  Database,
} from "lucide-react";

const LogisticsSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    logistics: false,
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
    <motion.div variants={itemVariants} className="mb-10" id="logistics">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#1e40af" }}
              >
                <Truck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Logistics Excellence
                </h3>
                <p className="text-base text-gray-600">
                  AI-Powered Safety & Digital Transformation
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              Optimising logistics operations through cutting-edge AI
              technologies and comprehensive digital transformation initiatives.
              Our integrated approach combines advanced safety monitoring with
              complete data visibility to create smarter, safer, and more
              efficient logistics operations.
            </p>
          </div>

          {/* Image Column - Logistics Dashboard */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <img
              src="/truck.png"
              alt="Logistics Dashboard"
              className="w-full max-w-sm lg:max-w-none object-contain"
            />
          </div>

          {/* Stats Card - Spans 2 columns */}
          <div className="order-3 col-span-1 md:col-span-1 lg:col-span-1 bg-gradient-to-r from-blue-50 to-blue-50 rounded-2xl p-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="text-center">
                <div
                  className="text-3xl font-black mb-2"
                  style={{ color: "#1e40af" }}
                >
                  <CountUp end={10} duration={2} />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  AI-Monitored Trucks
                </p>
              </div>
            </div>
          </div>

          {/* Key Initiatives Preview - Spans 2 columns */}
          <div className="order-4 col-span-1 md:col-span-3 lg:col-span-3 flex items-end justify-center h-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">AI Camera Systems</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Digital Analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Tyre Sensors</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">
                  Real-time Monitoring
                </span>
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-end">
                <button
                  onClick={() => toggleSection("logistics")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#1e40af" }}
                >
                  {expandedSections.logistics ? (
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
            {expandedSections.logistics && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-5 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* AI Safety & Monitoring */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      AI Safety & Monitoring (pilot)
                    </h4>
                  </div>
                  <div className="grid  gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">
                        AI-Powered Camera Systems
                      </h5>
                      <p className="text-gray-700 mb-4">
                        We've deployed AI cameras to detect activities and
                        proactively monitor truck drivers. These intelligent
                        systems identify risky behaviors, improve driver
                        well-being, and provide critical insights for incident
                        prevention.
                      </p>
                      <div className="flex gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          Activity Detection
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                          Driver Monitoring
                        </span>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">
                        Tyre Sensor Pilot Program
                      </h5>
                      <p className="text-gray-700 mb-4">
                        A pilot program for tyre sensors has been initiated on
                        10 trucks. This technology allows us to track tyre life,
                        monitor pressure and temperature in real-time, and
                        trigger alerts to avoid premature tyre loss.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                          10 Trucks
                        </span>
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                          Real-time Monitoring
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Operational Applications */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Operational Applications
                    </h4>
                  </div>
                  <div className="grid gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">
                        Load Planning (Guinness)
                      </h5>
                      <p className="text-gray-700 mb-4">
                        Our new load planning application optimizes cargo
                        distribution, maximizing vehicle utilization, reducing
                        fuel consumption, and ensuring compliance with weight
                        regulations.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          Guinness Live
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                          Optimized
                        </span>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">
                        Exceptions Dashboard
                      </h5>
                      <p className="text-gray-700 mb-4">
                        Implemented for MPL Ghana, providing real-time
                        visibility into operational deviations and anomalies,
                        enabling quick identification and resolution of issues.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                          MPL Ghana
                        </span>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                          Real-time
                        </span>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">
                        Tracking Portal
                      </h5>
                      <p className="text-gray-700 mb-4">
                        Live for Guinness, offering enhanced visibility into
                        shipment movements with real-time tracking information
                        and accurate ETAs for improved transparency.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          Guinness Live
                        </span>
                        <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs">
                          Enhanced Visibility
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Digital Transformation */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Digital Transformation Excellence
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

export default LogisticsSection;
