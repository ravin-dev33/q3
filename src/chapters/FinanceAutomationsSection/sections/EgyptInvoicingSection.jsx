import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Receipt,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Globe,
  Building,
  Zap,
  Activity,
  TrendingUp,
  FileText,
} from "lucide-react";

const EgyptInvoicingSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    egyptInvoicing: false,
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
    <motion.div variants={itemVariants} className="mb-10" id="egypt-invoicing">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-red-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#e4002b" }}
              >
                <Receipt className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Egypt e-Invoicing
                </h3>
                <p className="text-base text-gray-600">
                  ETA Integration & Tax Compliance
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              Getting our SAP system to talk directly with the Egyptian Tax Authority 
              was a big win for our Egypt operations. Now invoices get processed 
              automatically and tax reports happen in real-time. We're saving an 
              hour every day, and in May alone we handled 603 invoices without 
              missing a single compliance requirement.
            </p>
          </div>

          {/* Image Column - Placeholder for Egypt invoicing illustration */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <img
              src="/invoice.png"
              alt="AI in Manufacturing"
              className="w-full max-w-sm lg:max-w-none object-contain"
            />
          </div>

          {/* Stats Card - Spans full width on smaller screens */}
          <div className="order-3 col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-r from-red-50 to-red-50 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div
                  className="text-3xl font-black mb-2"
                  style={{ color: "#e4002b" }}
                >
                  <CountUp end={603} duration={2} />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Invoices Synced
                </p>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-black mb-2"
                  style={{ color: "#e4002b" }}
                >
                  <CountUp end={1} duration={2} />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Hour Daily Savings
                </p>
              </div>
            </div>
          </div>

          {/* Key Initiatives Preview - Spans full width */}
          <div className="order-4 col-span-1 md:col-span-2 lg:col-span-2 flex items-end justify-center h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">SAP Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">ETA Compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">
                  Real-time Reporting
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">Time Savings</span>
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                <button
                  onClick={() => toggleSection("egyptInvoicing")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#e4002b" }}
                >
                  {expandedSections.egyptInvoicing ? (
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
            {expandedSections.egyptInvoicing && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-5 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* SAP Integration with ETA */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Building
                      className="w-6 h-6"
                      style={{ color: "#e4002b" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      SAP Integration with Egyptian Tax Authority (ETA)
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Implemented comprehensive SAP integration with the Egyptian
                    Tax Authority, enabling streamlined invoice processing and
                    real-time tax reporting. This integration saves 1 hour daily
                    and has successfully synced 603 invoices in May with 100%
                    compliance rate.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Streamlined Processing
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Automated invoice processing workflow
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Real-time Reporting
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Instant tax compliance and reporting
                      </p>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp
                      className="w-6 h-6"
                      style={{ color: "#e4002b" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Integration Performance Metrics
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The system has been working really well since we launched it, 
                    handling everything smoothly and making our daily operations 
                    much more efficient.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Time Savings
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        1 hour saved daily through automation
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Compliance
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        100% automatic ETA compliance
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Efficiency
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Reduced manual processing overhead
                      </p>
                    </div>
                  </div>
                </div>

                {/* May 2024 Statistics */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText
                      className="w-6 h-6"
                      style={{ color: "#e4002b" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      May 2024 Performance Results
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Invoices Synced
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            603
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Success Rate
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            100%
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Processing Time
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            Real-time
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Daily Savings
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            1 hour
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Monthly Savings
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            ~22 hours
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Compliance
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            Automated
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Placeholder for Egypt e-Invoicing illustrations */}
                {/* <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Visual Overview
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-200 rounded-xl p-8 text-center">
                      <div className="w-full h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                        <Building className="w-8 h-8 text-gray-500" />
                      </div>
                      <p className="text-sm text-gray-600">
                        ETA Integration Dashboard - Invoice processing and sync
                        status
                      </p>
                    </div>
                    <div className="bg-gray-200 rounded-xl p-8 text-center">
                      <div className="w-full h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-gray-500" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Tax Compliance Overview - Real-time reporting metrics
                      </p>
                    </div>
                  </div>
                </div> */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default EgyptInvoicingSection;
