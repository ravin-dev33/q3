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
  Database,
  DollarSign,
  FileText,
  Users,
  LineChart,
  PieChart,
} from "lucide-react";

const SupplyChainSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    supplyChain: false,
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
    <motion.div variants={itemVariants} className="mb-10" id="supply-chain">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#1e40af" }}
              >
                <Package className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Supply Chain Innovation
                </h3>
                <p className="text-base text-gray-600">
                  Operational Excellence & Digital Analytics
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              Our supply chain transformation combines advanced operational
              applications with comprehensive digital analytics. We've deployed
              new applications to streamline key processes while implementing
              robust dashboards and analytical tools to drive data-driven
              decision-making across all supply chain functions.
            </p>
          </div>

          {/* Image Column - Supply Chain Dashboard */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <img
              src="/box.png"
              alt="Supply Chain Dashboard"
              className="w-full max-w-sm lg:max-w-none object-contain"
            />
          </div>

          {/* Stats Card - Spans 2 columns */}
          <div className="order-3 col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-r from-blue-50 to-blue-50 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
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
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-black mb-2"
                  style={{ color: "#1e40af" }}
                >
                  <CountUp end={15} duration={2} />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  New Dashboards
                </p>
              </div>
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
                <span className="text-sm text-gray-600">Load Planning</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">
                  Procurement Analytics
                </span>
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
                <span className="text-sm text-gray-600">
                  Strategic Solutions
                </span>
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                <button
                  onClick={() => toggleSection("supplyChain")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#1e40af" }}
                >
                  {expandedSections.supplyChain ? (
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
            {expandedSections.supplyChain && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-5 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* Digital Analytics & Dashboards */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Digital Analytics & Dashboards (15 New Dashboards)
                    </h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">
                        Procurement Analytics
                      </h5>
                      <p className="text-gray-700 mb-4">
                        Landing Cost Analysis, Procurement Analysis, and PO to
                        GRN Costing improve cost transparency. GRN Reports help
                        track material receipts against POs, strengthening
                        inventory controls.
                      </p>
                      <div className="flex gap-2 mb-4">
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                          Cost Analysis
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                          GRN Tracking
                        </span>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">
                        Inventory & Sales
                      </h5>
                      <p className="text-gray-700 mb-4">
                        Material Aging, Consolidated Inventory, and Sales
                        Dashboards provide visibility into stock movement,
                        pricing effectiveness, and SKU-level performance across
                        all channels.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                          Material Aging
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          SKU Performance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategic Solutions */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      3 Strategic Solutions & Enhancements
                    </h4>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">
                        KTSA School Sampling
                      </h5>
                      <p className="text-sm text-gray-600">
                        Dedicated Power App for brand promoters to track school
                        noodle sampling activities.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Container Tracking
                      </h5>
                      <p className="text-sm text-gray-600">
                        GoComet API integration with P2P portal for real-time
                        vessel tracking and automated alerts.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">
                        SAP S/4HANA Planning
                      </h5>
                      <p className="text-sm text-gray-600">
                        Customized SAP transaction (MC94) automating production
                        planning aligned with S&OP forecast.
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

export default SupplyChainSection;
