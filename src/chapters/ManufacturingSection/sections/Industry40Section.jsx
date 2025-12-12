import { useState, useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Database,
  FileText,
  Shield,
  MapPin,
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

const Industry40Section = () => {
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
    <motion.div variants={itemVariants} className="mb-10" id="industry-40">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#1e40af" }}
              >
                <Factory className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">Industry 4.0</h3>
                <p className="text-base text-gray-600">
                  Building Intelligent, Connected Factories
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              As part of our Industry 4.0 roadmap, we're embedding smart
              automation and real-time data integration across core
              manufacturing processes. By connecting IoT devices, sensors, and
              automated systems directly to SAP ERP, we're eliminating manual
              dependencies, enhancing traceability, and enabling more
              responsive, data-driven operations.
            </p>

            <h3 className="text-sm font-semibold text-gray-700 mb-6">
              Industry 4.0 Solutions{" "}
              {[
                "Downtime Tracking",
                "By-Product Data Integration",
                "Robotic Palletiser",
                "Weighing Scale",
              ].map((solution, index) => (
                <motion.span
                  key={solution}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-2 font-bold text-center text-xs text-[#1e40af] mr-2"
                >
                  {solution}
                </motion.span>
              ))}
            </h3>
          </div>

          {/* Image Column - Second Position */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <img
              src="/industry.png"
              alt="Industry 4.0"
              className="w-full max-w-sm lg:max-w-none object-contain"
            />
          </div>

          {/* Stats Card - Spans 2 columns */}
          <div className="order-3 col-span-1 md:col-span-2 lg:col-span-2 rounded-2xl p-3">
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg p-2 flex items-center bg-blue-50">
                <Monitor className="w-8 h-8 text-green-500 mr-4" />
                <p className="text-sm text-gray-600">IoT Integration</p>
              </div>
              <div className="rounded-lg p-2 flex items-center bg-blue-50">
                <Network className="w-8 h-8 text-blue-500 mr-4" />
                <p className="text-sm text-gray-600">Connected Systems</p>
              </div>
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
                  Real-time ERP Data
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">
                  Automated Tracking
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Smart Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">
                  Enhanced Traceability
                </span>
              </div>
            </div>
          </div>

          {/* Key Initiatives - Spans full width */}
          <div className="order-5 col-span-1 md:col-span-2 lg:col-span-4 flex  flex-col gap-8 justify-center h-full">
            {/* Read More Button */}
            <div className="w-full items-center justify-center flex">
              <button
                onClick={() => toggleSection("industry40")}
                className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#1e40af" }}
              >
                {expandedSections.industry40 ? (
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
            {expandedSections.industry40 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-6 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* Downtime Tracking Application */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Monitor className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      1. Downtime Tracking Application
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    This project automates downtime recording across noodle
                    plants using IoT sensors instead of manual logs. The system
                    triggers real-time alerts and creates notifications directly
                    in SAP ERP whenever a machine stops, improving transparency
                    and response time.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Replaces manual downtime logs with IoT-triggered alerts
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Real-time SAP ERP integration
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      Kaduna
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      Ota
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      Ongoing in Portharcourt
                    </span>
                  </div>
                </div>
                {/* Scrap Integration */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Scale className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      2. By-Product Data Integration
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Scrap data is now captured directly from weighing scales and
                    integrated into SAP, ensuring accurate and immediate scrap
                    reporting without manual entry. This boosts operational
                    accuracy and enables better scrap analysis.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Direct data capture from weighing scales
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Real-time scrap entry into SAP ERP
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      Kaduna
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      Ota
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      Initiated for KTNL
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      Ongoing in Portharcourt
                    </span>
                  </div>
                </div>
                {/* Robotic Palletiser Integration */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      3. Robotic Palletiser Integration
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    This initiative enables direct data flow from robotic
                    palletisers into SAP ERP, automating the capture of
                    palletisation details and reducing manual intervention.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Real-time capture of palletising data
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Direct SAP ERP integration
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Enhances automation traceability and accuracy
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      Kaduna Noodles
                    </span>
                  </div>
                </div>
                {/* Weighing Scale Integration */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Gauge className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      4. Weighing Scale Integration
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    A system has been established to capture product weights
                    from production lines. The next phase will fully integrate
                    this data into SAP for seamless production reporting.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Auto-recording of weights on production lines
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Implemented in Ota, PHC, Kaduna, and Ghana
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        ERP integration planned as the next phase
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      Ota
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      PHC
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      Kaduna
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      Ghana
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

export default Industry40Section;
