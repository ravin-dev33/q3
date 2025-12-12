import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  BarChart3,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clipboard,
  DollarSign,
  Zap,
  Settings,
  Eye,
  FileText,
} from "lucide-react";

const BrandRunnerSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    processAutomation: false,
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
      id="process-automation-marketing"
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-red-200/50">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#e4002b" }}
            >
              <Settings className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black">Brand Runner</h3>
              <p className="text-base text-gray-600">
                Digital Applications for Field Management & Finance
              </p>
            </div>
          </div>

          <p className="text-base text-gray-700 leading-relaxed mb-8">
            Brand Runner is our integrated digital platform featuring two key
            applications delivering complete digitalization of field work
            management and advertisement & promotion budgeting processes. Both
            applications UAT have been successfully delivered to the business.
          </p>
        </div>

        {/* Two App Cards - Side by Side on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* FWM App Card */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200/50 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                style={{ backgroundColor: "#e4002b" }}
              >
                <Clipboard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-black">
                  Field Work Management (FWM) App
                </h4>
                <p className="text-sm text-gray-600">Brand Runner</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/60 rounded-lg p-4">
                <div className="flex items-start gap-2 mb-2">
                  <Eye className="w-4 h-4 text-red-700 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-red-700 block">
                      Vision
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      To achieve complete, real-time tracking and oversight of
                      all Below The Line (BTL) field activities through a
                      dedicated digital application.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 rounded-lg p-4">
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-red-700 block">
                      Current Status
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      User Acceptance Testing (UAT) completed and delivered to
                      the business.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white/40 rounded-lg p-4">
                <h5 className="text-sm font-semibold text-gray-800 mb-3">
                  Key Capabilities
                </h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#e4002b" }}
                    ></div>
                    <span className="text-xs text-gray-600">
                      Real-time BTL activity tracking
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#e4002b" }}
                    ></div>
                    <span className="text-xs text-gray-600">
                      Field team oversight
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#e4002b" }}
                    ></div>
                    <span className="text-xs text-gray-600">
                      Digital workflow management
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* A&P App Card */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200/50 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                style={{ backgroundColor: "#e4002b" }}
              >
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-black">
                  Advertisement & Promotion (A&P) App
                </h4>
                <p className="text-sm text-gray-600">Brand Runner</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/60 rounded-lg p-4">
                <div className="flex items-start gap-2 mb-2">
                  <Eye className="w-4 h-4 text-red-700 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-red-700 block">
                      Vision
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      To fully digitalize the budgeting and tracking processes
                      for all Below The Line (BTL) marketing expenses, enhancing
                      financial control and visibility.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 rounded-lg p-4">
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-red-700 block">
                      Current Status
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      User Acceptance Testing (UAT) completed and delivered to
                      the business.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white/40 rounded-lg p-4">
                <h5 className="text-sm font-semibold text-gray-800 mb-3">
                  Key Capabilities
                </h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#e4002b" }}
                    ></div>
                    <span className="text-xs text-gray-600">
                      Real-time budget tracking and contingency analysis
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#e4002b" }}
                    ></div>
                    <span className="text-xs text-gray-600">
                      Cross-departmental budget visibility and control
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#e4002b" }}
                    ></div>
                    <span className="text-xs text-gray-600">
                      Automated approval workflows and version management
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-6 mb-6 border border-red-200/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div
                className="text-3xl font-black mb-2"
                style={{ color: "#e4002b" }}
              >
                <CountUp end={2} duration={2} />
              </div>
              <p className="text-sm font-medium text-gray-700">
                Apps Delivered
              </p>
            </div>
            <div>
              <div
                className="text-3xl font-black mb-2"
                style={{ color: "#e4002b" }}
              >
                100%
              </div>
              <p className="text-sm font-medium text-gray-700">UAT Success</p>
            </div>
            <div>
              <div
                className="text-3xl font-black mb-2"
                style={{ color: "#e4002b" }}
              >
                BTL
              </div>
              <p className="text-sm font-medium text-gray-700">
                Focus Coverage
              </p>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        {/* <div className="flex justify-center">
          <button
            onClick={() => toggleSection("processAutomation")}
            className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: "#e4002b" }}
          >
            {expandedSections.processAutomation ? (
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
        </div> */}

        {/* Expanded Content */}
        {/* <AnimatePresence>
          {expandedSections.processAutomation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 space-y-6"
            >
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6" style={{ color: "#e4002b" }} />
                  <h4 className="text-lg font-bold text-gray-900">
                    Implementation Benefits & Impact
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Real-time Tracking
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Complete oversight of all BTL field activities with
                        instant updates and enhanced reporting capabilities
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-4 h-4 text-blue-700" />
                        <span className="font-medium text-black">
                          Digital Transformation
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Complete digitalization of manual processes improving
                        efficiency and reducing operational overhead
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-4 h-4 text-green-700" />
                        <span className="font-medium text-black">
                          Financial Control
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Enhanced budgeting and expense tracking for marketing
                        activities with comprehensive digital reporting
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-purple-700" />
                        <span className="font-medium text-black">
                          Business Ready
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Both applications successfully passed UAT and are ready
                        for business deployment and full utilization
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-6 h-6" style={{ color: "#1e40af" }} />
                  <h4 className="text-lg font-bold text-gray-900">
                    Technical Implementation Status
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/70 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-800 mb-3">
                      FWM App Status
                    </h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          Development
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          Completed
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          UAT Status
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          Passed
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          Business Delivery
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          Delivered
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-800 mb-3">
                      A&P App Status
                    </h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          Development
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          Completed
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          UAT Status
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          Passed
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          Business Delivery
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          Delivered
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
    </motion.div>
  );
};

export default BrandRunnerSection;
