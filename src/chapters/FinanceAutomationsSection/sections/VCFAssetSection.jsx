import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Database,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Shield,
  Target,
  Settings,
  Users,
  Activity,
  TrendingUp,
  Zap,
  FileText,
  Clock,
} from "lucide-react";

const VCFAssetSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    vcfAsset: false,
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
      id="vcf-asset-management"
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
                <Database className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Spent Management
                </h3>
                <p className="text-base text-gray-600">
                  Integrated Solutions & Verification
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              We've successfully launched the DICE Expense Management platform,
              and it's now working smoothly with our corporate cards and SAP
              system. This makes managing employee expenses so much easier—from
              taking photos of receipts to getting reimbursed. Everything just
              flows automatically now.
            </p>
          </div>

          {/* Image Column - Placeholder for VCF/Asset illustration */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <img
              src="/valut.png"
              alt="AI in Manufacturing"
              className="w-full max-w-sm lg:max-w-none object-contain"
            />
          </div>

          {/* Key Initiatives Preview - Spans full width */}
          <div className="order-3 col-span-1 md:col-span-2 lg:col-span-3 flex items-end justify-start h-full">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">
                  Reduced Manual Work – No more spreadsheet-based submissions or
                  manual SAP postings
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">
                  Faster Reimbursements – Quicker approvals and streamlined
                  payments
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">
                  Better Control – Real-time view of T&E (Travel & Expense)
                  spend in SAP
                </span>
              </div>
            </div>
          </div>

          <div className="order-4 col-span-1 md:col-span-1 lg:col-span-1 bg-gradient-to-r from-red-50 to-red-50 rounded-2xl p-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="text-center">
                <div
                  className="text-3xl font-black mb-2"
                  style={{ color: "#e4002b" }}
                >
                  <CountUp end={600} duration={2} />+
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Claims Posted on SAP
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Expense Claim Guinness */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50 mt-6 lg:mt-8 bg-gradient-to-r from-red-50 to-orange-50">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6" style={{ color: "#e4002b" }} />
            <h4 className="text-lg font-bold text-gray-900">
              Expense Claim (Guinness)
            </h4>
          </div>
          <p className="text-gray-700 mb-4">
            This new system has successfully streamlined spends management for
            Guinness, enabling faster approvals and better audit trails within
            SAP. We've processed 1,712 expense requests through this portal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/70 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-red-700" />
                <span className="font-medium text-black">Faster Approvals</span>
              </div>
              <p className="text-xs text-gray-600">Streamlined workflow</p>
            </div>
            <div className="bg-white/70 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-red-700" />
                <span className="font-medium text-black">Audit Trails</span>
              </div>
              <p className="text-xs text-gray-600">Complete tracking</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-red-700" />
                <span className="font-medium text-black">SAP Integration</span>
              </div>
              <p className="text-xs text-gray-600">Seamless system link</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VCFAssetSection;
