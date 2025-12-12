import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  CreditCard,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  FileText,
  MapPin,
  Building,
  Clock,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";

const CreditExpenseManagementSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    creditExpense: false,
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
      id="credit-expense-management"
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
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Credit limit portal
                </h3>
                <p className="text-base text-gray-600">
                  Faster Approvals & Better Processing
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              Managing credit limits and expense claims used to be a real
              headache. Now we've got smart portals that handle most of the work
              automatically. Our credit change system has already processed 123
              requests across Egypt and Guinness, while the expense portal has
              taken care of 1,712 claims. People can see exactly where their
              requests stand, and approvals happen much faster.
            </p>
          </div>

          {/* Image Column - Placeholder for Credit/Expense illustration */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <img
              src="/credit.png"
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
                  <CountUp end={123} duration={2} />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Credit Requests
                </p>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-black mb-2"
                  style={{ color: "#e4002b" }}
                >
                  <CountUp end={1712} duration={2} separator="," />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Expense Claims
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
                <span className="text-sm text-gray-600">
                  Egypt Credit Portal
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">Guinness Portals</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">
                  Automated Approvals
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">SAP Integration</span>
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                <button
                  onClick={() => toggleSection("creditExpense")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#e4002b" }}
                >
                  {expandedSections.creditExpense ? (
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
            {expandedSections.creditExpense && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-5 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* Credit Limit Change Portal Egypt */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6" style={{ color: "#e4002b" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      Credit Limit Change Portal (Egypt)
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Our new portal is live and making a real impact. It has
                    automated the approval process for credit limit changes,
                    leading to improved data quality and transparency within
                    SAP. We've already processed 52 requests through this
                    portal.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Automated Approval
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Streamlined process for credit changes
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Data Transparency
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Better visibility within SAP
                      </p>
                    </div>
                  </div>
                </div>

                {/* Credit Limit Change Portal Guinness */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Building
                      className="w-6 h-6"
                      style={{ color: "#e4002b" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Credit Limit Change Portal (Guinness)
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Following the success in Egypt, a similar workflow is now
                    live for Guinness, having already managed 71 requests
                    efficiently through SAP integration.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Proven Success
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Built on Egypt implementation
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Efficient Processing
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Streamlined SAP workflow
                      </p>
                    </div>
                  </div>
                </div>

                {/* Placeholder for Credit & Expense Management illustrations */}
                {/* <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Visual Overview
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-200 rounded-xl p-8 text-center">
                      <div className="w-full h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                        <MapPin className="w-8 h-8 text-gray-500" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Credit Portal Egypt - Automated approval workflow
                      </p>
                    </div>
                    <div className="bg-gray-200 rounded-xl p-8 text-center">
                      <div className="w-full h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                        <Building className="w-8 h-8 text-gray-500" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Guinness Portals - Credit & expense management
                      </p>
                    </div>
                    <div className="bg-gray-200 rounded-xl p-8 text-center">
                      <div className="w-full h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                        <FileText className="w-8 h-8 text-gray-500" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Expense System - Streamlined processing interface
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

export default CreditExpenseManagementSection;
