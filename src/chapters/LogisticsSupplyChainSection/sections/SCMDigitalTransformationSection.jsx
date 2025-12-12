import { useState, useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Database,
  Settings,
  Activity,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Target,
  Eye,
  Zap,
  Monitor,
  Package,
  DollarSign,
  Truck,
  FileText,
  Users,
  Clock,
  LineChart,
} from "lucide-react";

const SCMDigitalTransformationSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    scmDigitalTransformation: false,
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
    <motion.div variants={itemVariants} className="mb-20" id="scm-digital-transformation">
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
                  SCM Digital Transformation
                </h3>
                <p className="text-base text-gray-600">
                  Driving Insights and Efficiency
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              Our Supply Chain Management (SCM) function continues to leverage
              digital initiatives to enhance visibility, optimize operations,
              and drive data-driven decision-making through comprehensive
              dashboards and analytical tools.
            </p>
          </div>

          {/* Image Column - SCM Dashboard */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/scm-dashboard-placeholder.png"
                alt="SCM Dashboard"
                className="w-full max-w-sm lg:max-w-none object-contain rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white">
                  <BarChart3 className="w-5 h-5" />
                  <span className="text-sm font-medium">SCM Analytics</span>
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
                <CountUp end={15} duration={2} />
              </div>
              <p className="text-sm font-medium text-gray-700">
                New Dashboards
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Delivered this quarter
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
                <span className="text-sm text-gray-600">Procurement Analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Inventory Visibility</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Sales Dashboards</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Strategic Solutions</span>
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                <button
                  onClick={() => toggleSection("scmDigitalTransformation")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#1e40af" }}
                >
                  {expandedSections.scmDigitalTransformation ? (
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
            {expandedSections.scmDigitalTransformation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-5 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* Q2 Project Highlights */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Q2 Project Highlights: Dashboards & Solutions Delivered
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    This quarter, our teams have made significant progress,
                    delivering a robust suite of analytical tools and automation
                    projects across 15 new dashboards and reports, plus 3
                    strategic solutions and enhancements.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      15 Dashboards
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      3 Solutions
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      Multiple Entities
                    </span>
                  </div>
                </div>

                {/* Procurement Analytics */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Procurement Analytics
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Landing Cost Analysis, Procurement Analysis, and PO to GRN
                    Costing improve cost transparency in procurement by analyzing
                    landed costs, supplier pricing, and GRN accuracy. GRN
                    Reports help track material receipts against POs, ensuring
                    timely posting and strengthening inventory intake controls.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                      Cost Analysis
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      Supplier Pricing
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      GRN Tracking
                    </span>
                  </div>
                </div>

                {/* Inventory Management */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Package
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Inventory Management
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Material Aging and Consolidated Inventory reports improve
                    visibility of stock movement and help identify slow-moving
                    or obsolete inventory. Lifting Plan vs. Actual and SCM
                    Overview Dashboards enhance supply chain execution by
                    tracking planned vs. actual dispatches and end-to-end
                    inventory flow.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      Material Aging
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                      Stock Movement
                    </span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">
                      Dispatch Tracking
                    </span>
                  </div>
                </div>

                {/* Sales & Distribution */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Truck
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Sales & Distribution
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Sales Price per Unit Analysis and Sales Dashboards provide
                    insights into pricing effectiveness, SKU-level performance,
                    and revenue contribution. SO Creation vs. Invoice and SO-STT
                    Reports improve order tracking and sales process alignment
                    across primary and secondary sales channels.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                      Price Analysis
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      SKU Performance
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      Order Tracking
                    </span>
                  </div>
                </div>

                {/* Strategic Solutions */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      3 New Strategic Solutions/Enhancements
                    </h4>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">
                        KTSA School Sampling Application
                      </h5>
                      <p className="text-sm text-gray-600">
                        A dedicated Power App for brand promoters to track
                        school noodle sampling activities with enhanced
                        reporting accuracy.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Container Tracking Portal Integration
                      </h5>
                      <p className="text-sm text-gray-600">
                        GoComet API integration with P2P portal for real-time
                        vessel tracking, live map visibility, and automated
                        alerts.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">
                        SAP S/4HANA Production Planning
                      </h5>
                      <p className="text-sm text-gray-600">
                        Customized SAP transaction code (MC94) that automates
                        production planning by aligning with S&OP forecast.
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

export default SCMDigitalTransformationSection;