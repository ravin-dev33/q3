import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  BarChart3,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Users,
  Target,
  TrendingUp,
  Package,
  ShoppingCart,
  Clock,
  Award,
  Zap,
  Settings,
  Eye,
  Cog,
  Clipboard,
  DollarSign,
  FileText,
  Calendar,
} from "lucide-react";

const ProcessAutomationDigitalizationSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    processAutomationDigitalization: false,
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

  const brands = [
    "Lush Hair",
    "Munch It",
    "Power Oil",
    "Minimie",
    "Colgate",
    "HTC",
    "Hypo Bleach",
    "Indomie",
    "Go Grains",
    "Kellogg's",
  ];

  return (
    <motion.div
      variants={itemVariants}
      className="mb-10"
      id="process-automation-digitalization"
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-red-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Text Content */}
          <div className="order-1 md:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#e4002b" }}
              >
                <div className="flex items-center justify-center">
                  <Cog className="w-6 h-6 text-white" />
                  <BarChart3 className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Process Automation & Digitalization
                </h3>
                <p className="text-base text-gray-600">
                  Digital Solutions & Enhanced Reporting
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Comprehensive digital transformation through two key applications
              (FWM & A&P) and significantly enhanced digital reporting
              capabilities across 10 key brands, delivering deeper insights and
              streamlined operations.
            </p>

            <div className="space-y-4">
              <div className="bg-red-50 rounded-xl p-4 border border-red-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <Clipboard className="w-4 h-4 text-red-700" />
                  <span className="text-sm font-semibold text-red-700">
                    FIELD WORK MANAGEMENT (FWM)
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Complete, real-time tracking and oversight of all Below The
                  Line (BTL) field activities through a dedicated digital
                  application.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-4 border border-red-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-red-700" />
                  <span className="text-sm font-semibold text-red-700">
                    ADVERTISEMENT & PROMOTION (A&P)
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Fully digitalized budgeting and tracking processes for all BTL
                  marketing expenses, enhancing financial control and
                  visibility.
                </p>
              </div>
            </div>
          </div>

          {/* Stats and Features */}
          <div className="order-2 md:order-2 space-y-6">
            {/* Stats Card */}
            {/* <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
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
                <div className="text-center">
                  <div
                    className="text-3xl font-black mb-2"
                    style={{ color: "#e4002b" }}
                  >
                    <CountUp end={10} duration={2} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    Brands Enhanced
                  </p>
                </div>
              </div>
            </div> */}

            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200/50">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-4 h-4 text-red-700" />
                <span className="text-sm font-semibold text-red-700">
                  ENHANCED DIGITAL REPORTING
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Advanced reporting capabilities across 10 key brands enabling
                faster, more informed decision-making with deeper data insights.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Key Features & Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "#e4002b" }}
                  />
                  <span className="text-sm text-gray-600">FWM App</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "#e4002b" }}
                  />
                  <span className="text-sm text-gray-600">A&P App</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "#e4002b" }}
                  />
                  <span className="text-sm text-gray-600">Field Force</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "#e4002b" }}
                  />
                  <span className="text-sm text-gray-600">
                    Sales Performance
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "#e4002b" }}
                  />
                  <span className="text-sm text-gray-600">
                    Marketing Analytics
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "#e4002b" }}
                  />
                  <span className="text-sm text-gray-600">
                    Operational Control
                  </span>
                </div>
              </div>
            </div>

            {/* Read More Button */}
            <div className="flex justify-center">
              <button
                onClick={() => toggleSection("processAutomationDigitalization")}
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#e4002b" }}
              >
                {expandedSections.processAutomationDigitalization ? (
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
            {expandedSections.processAutomationDigitalization && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-3 col-span-1 md:col-span-2 mt-8 space-y-6"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                  {brands.map((brand, index) => (
                    <div
                      key={index}
                      className="bg-red-50 rounded-lg p-2 text-center border border-red-200/50"
                    >
                      <span className="text-xs font-medium text-red-800">
                        {brand}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Implementation Benefits */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp
                      className="w-6 h-6"
                      style={{ color: "#e4002b" }}
                    />
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
                          <Users className="w-4 h-4 text-red-700" />
                          <span className="font-medium text-black">
                            Field Team Efficiency
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Streamlined workflows and improved productivity for
                          field teams across 10 key brands
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/70 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-red-700" />
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
                          <FileText className="w-4 h-4 text-red-700" />
                          <span className="font-medium text-black">
                            Digital Visibility
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Complete digitalization of marketing processes with
                          deeper data insights for informed decision-making
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Implementation */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Cog className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      Technical Implementation & Digital Enhancement
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Both applications have successfully completed their User
                    Acceptance Testing phase and have been delivered to the
                    business for deployment. Additionally, digital reporting
                    capabilities have been significantly enhanced across all key
                    brand operations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Development Phase
                          </span>
                          <span className="text-sm font-bold text-red-600">
                            Completed
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            UAT Status
                          </span>
                          <span className="text-sm font-bold text-red-600">
                            Passed
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Delivery Status
                          </span>
                          <span className="text-sm font-bold text-red-600">
                            Business Ready
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Field Management
                          </span>
                          <span className="text-sm font-bold text-red-600">
                            FWM App
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Finance Solution
                          </span>
                          <span className="text-sm font-bold text-red-600">
                            A&P App
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Enhanced Reporting
                          </span>
                          <span className="text-sm font-bold text-red-600">
                            10 Brands
                          </span>
                        </div>
                      </div>
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

export default ProcessAutomationDigitalizationSection;
