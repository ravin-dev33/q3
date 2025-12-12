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
} from "lucide-react";

const AISafetySection = () => {
  const [expandedSections, setExpandedSections] = useState({
    aiSafety: false,
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
    <motion.div variants={itemVariants} className="mb-20" id="ai-safety">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#1e40af" }}
              >
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Advancing with AI and Smart Devices
                </h3>
                <p className="text-base text-gray-600">
                  Enhanced Safety & Monitoring
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              We are actively integrating cutting-edge AI and smart device
              technologies to elevate safety and operational oversight across
              our fleet operations, ensuring driver well-being and preventing
              incidents through proactive monitoring.
            </p>
          </div>

          {/* Image Column - AI Camera System */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/ai-safety-placeholder.png"
                alt="AI Safety System"
                className="w-full max-w-sm lg:max-w-none object-contain rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white">
                  <Camera className="w-5 h-5" />
                  <span className="text-sm font-medium">AI Camera System</span>
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
                <CountUp end={10} duration={2} />
              </div>
              <p className="text-sm font-medium text-gray-700">
                Trucks Monitored
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Advanced tyre sensor pilot program
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
                <span className="text-sm text-gray-600">AI Camera Systems</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Driver Monitoring</span>
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
                <span className="text-sm text-gray-600">Real-time Alerts</span>
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                <button
                  onClick={() => toggleSection("aiSafety")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#1e40af" }}
                >
                  {expandedSections.aiSafety ? (
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
            {expandedSections.aiSafety && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-5 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* AI Camera Systems */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Camera
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      AI-Powered Camera Systems
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We've deployed AI cameras to detect activities and
                    proactively monitor truck drivers. These intelligent systems
                    are designed to identify risky behaviors, improve driver
                    well-being, and provide critical insights for incident
                    prevention, moving us towards a more secure and responsible
                    fleet operation.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      Activity Detection
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      Driver Monitoring
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      Behavior Analysis
                    </span>
                  </div>
                </div>

                {/* Tyre Sensor Pilot */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Gauge
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Tyre Sensor Pilot Program
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    A pilot program for tyre sensors has been initiated on 10
                    trucks. This technology allows us to precisely track tyre
                    life, monitor pressure and temperature in real-time, and
                    trigger alerts. This proactive approach aims to avoid
                    premature tyre loss, enhance safety, and reduce operational
                    costs associated with tyre management.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                      10 Trucks
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                      Real-time Monitoring
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                      Cost Reduction
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

export default AISafetySection;