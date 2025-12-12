import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Package,
  TrendingUp,
  BarChart3,
  Target,
  CheckCircle,
  Database,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Q3LogisticsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [expandedSections, setExpandedSections] = useState({
    valueAdditionImpact: false,
    others: false,
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
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="space-y-8"
    >
      {/* Main Container */}
      <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl shadow-lg overflow-hidden">
        <div className="px-6 py-8 bg-gradient-to-r from-blue-600/10 to-indigo-600/10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br from-blue-600 to-blue-700">
              <Package className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Supply Chain Overview
              </h3>
              {/* <p className="text-sm text-gray-600">
                Distribution & Performance Analytics
              </p> */}
            </div>
          </div>
        </div>

        <div className="p-8 space-y-12">
          {/* RGB Dashboard Section */}
          <div className="group">
            <div className="space-y-2">
              <div className="bg-white p-6 mb-12 rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300">
                <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  Forecasting Application – Guinness, Lush Nigeria
                </h5>

                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
                  <li>
                    Uses ML-based Extreme Gradient Boosting algorithm (advanced
                    algorithm in Demand Planning Module in SAP IBP)
                  </li>
                  <li>
                    Forecast closer to actuals (90% for Dry Hair projections –
                    Lush Nigeria)
                  </li>
                  <li>
                    Establishes baseline for forecast accuracy implementation
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 mb-12 rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300">
                <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  STO Automation – MCPL
                </h5>

                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
                  <li>
                    Helps logistics team to upload all STOs in SAP at once with
                    the help of RPA.
                  </li>
                  <li>
                    Streamlines operations and saves time lost to multiple
                    system entry.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 mb-12 rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300">
                <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  RGB – Guinness
                </h5>

                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
                  <li>Provides TAT, PO – GRN status, cost per unit trend</li>
                  <li>
                    RTI Distributor level & RTI based on 4 months (TAT) is in
                    progress
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 mb-12 rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300">
                <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  Stock coverage – Guinness
                </h5>

                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
                  <li>
                    Provides visibility of days forward cover for SOH inventory
                    for RM, PM & FG
                  </li>
                  <li>
                    Helps planners to plan production and procurement
                    efficiently.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 mb-12 rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300">
                <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  KTNL
                </h5>

                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
                  <li>
                    Provides a breakup of cost incurred at various levels of
                    procurement
                  </li>
                  <li>
                    Enhances visibility to the procurement team on costs
                    incurred at PO level.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Q3LogisticsSection;
