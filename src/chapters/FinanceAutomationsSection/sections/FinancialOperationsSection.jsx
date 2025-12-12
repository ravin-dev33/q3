import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Building,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Database,
  Zap,
  Shield,
  Target,
  Settings,
} from "lucide-react";

const FinancialOperationsSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    financialOps: false,
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
    <motion.div
      variants={itemVariants}
      className="mb-10"
      id="financial-operations"
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-red-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#e4002b" }}
              >
                <Building className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Financial Operations
                </h3>
                <p className="text-base text-gray-600">
                  Making Banking & Data Processing Easier
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              We have automated our bank payment and reconciliation processes across 
              four major banks. This automation reduces manual intervention and 
              minimizes processing errors. The PE Console Application provides 
              significant time savings for our DUFIL operations, freeing up 3 hours 
              monthly for higher-value activities.
            </p>
          </div>

          {/* Image Column - First Position */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <img
              src="/banl.png"
              alt="Bank Image"
              className="w-full max-w-sm lg:max-w-none object-contain"
            />
          </div>

          {/* Stats Card - Spans full width on smaller screens */}
          {/* <div className="order-3 col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-r from-red-50 to-red-50 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div
                  className="text-3xl font-black mb-2"
                  style={{ color: "#e4002b" }}
                >
                  <CountUp end={3} duration={2} />
                </div>
                <p className="text-sm font-medium text-gray-700">Banks Live</p>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-black mb-2"
                  style={{ color: "#e4002b" }}
                >
                  <CountUp end={1} duration={2} />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Bank in Progress
                </p>
              </div>
            </div>
          </div> */}

          {/* Key Initiatives Preview - Spans full width */}
          <div className="order-4 col-span-1 md:col-span-2 lg:col-span-4 flex  flex-col md:flex-row items-center justify-start h-full">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">
                  Bank Reconciliation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">PE Console Live</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">
                  Automated Payments
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">
                  Asset Verification
                </span>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-1 flex justify-center mt-6 md:mt-0">
              <button
                onClick={() => toggleSection("financialOps")}
                className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#e4002b" }}
              >
                {expandedSections.financialOps ? (
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
            {expandedSections.financialOps && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-5 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* Bank Reconciliation Details */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp
                      className="w-6 h-6"
                      style={{ color: "#e4002b" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Bank Reconciliation
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We've successfully brought four banks live on our automated
                    reconciliation system, significantly improving accuracy and
                    speed. Work is currently ongoing for another seven banks,
                    bringing us closer to a fully streamlined process.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          4 Banks Live
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Fully operational automated reconciliation
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          7 Banks in Progress
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Implementation and testing underway
                      </p>
                    </div>
                  </div>
                </div>

                {/* Asset Verification Portal */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6" style={{ color: "#e4002b" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      Asset Verification Portal (MCPL)
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Now live for MCPL. This portal makes asset verification 
                    much simpler and helps us keep track of everything we need 
                    for compliance across the company.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Asset Tracking
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Complete asset management
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
                        Automated compliance tracking
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Settings className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Management
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Centralized asset interface
                      </p>
                    </div>
                  </div>
                </div>

                {/* PE Console Application Details */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Database
                      className="w-6 h-6"
                      style={{ color: "#e4002b" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      PE Console Application
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    This application is now live for DUFIL, automating data
                    consolidation and reducing manual work by 3 hours per month.
                    The system streamlines financial data processing and
                    improves operational efficiency across the organization.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Live for DUFIL
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Fully operational and processing data
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          3 Hours Saved
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Monthly time savings per operation
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Data Consolidation
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Automated processing and integration
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6" style={{ color: "#e4002b" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      Automating Bank Payments via SAP F110
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    To enhance efficiency and reduce manual errors, we have
                    enabled automatic bank payment processing in SAP using
                    transaction F110.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          3 Banks Live
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Bank Payments automated via SAP F110
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          1 Bank in Progress
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Bank Payments automation in progress
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

export default FinancialOperationsSection;
