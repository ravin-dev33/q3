import React, { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Target,
  Shield,
  Workflow,
  Globe,
  TrendingUp,
  Award,
  CheckCircle,
  Users,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Settings,
  ArrowRight,
} from "lucide-react";

const StrategicImportanceNextStepsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedSections, setExpandedSections] = useState({
    nexStepShown: false,
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

  const nextSteps = [
    "Monitor each project for timely and quality execution",
    "Ensure adequate change management and training for teams adopting SAP",
    "Leverage learnings from our experience as a template for other implementations",
    "Coordinate with third-party integrators and tax authorities for smooth system interoperability",
  ];

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-8 md:mb-16"
      id="roadmap-next-steps"
    >
      <div className="mx-2 overflow-hidden bg-white border border-red-100 shadow-lg rounded-2xl md:rounded-3xl md:shadow-2xl sm:mx-0">
        {/* Section Header */}
        <div className="px-4 py-4 sm:px-6 md:px-8 sm:py-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg shadow-lg sm:w-12 sm:h-12 sm:rounded-xl"
              style={{ backgroundColor: "#dc2626" }}
            >
              <Target className="w-5 h-5 text-white sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold leading-tight text-gray-900 sm:text-xl md:text-2xl">
                Roadmap & Next Steps
              </h3>
              <p className="text-sm font-medium text-red-600 sm:text-base">
                Strategic Action Plan
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-0">


          {/* Implementation Benefits */}
          <div className="p-4 border border-red-200 bg-gradient-to-br from-red-50/50 to-red-100 rounded-2xl sm:p-6 md:p-8">
            <div className="mb-4 text-center sm:mb-6">
              <h4 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
                SAP Implementation Benefits
              </h4>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
              {/* Efficiency */}
              <div className="p-3 text-center border border-red-200 sm:p-4 bg-white/60 rounded-xl">
                <TrendingUp className="w-6 h-6 mx-auto mb-2 text-red-600 sm:w-8 sm:h-8 sm:mb-3" />
                <h5 className="mb-1 text-sm font-bold text-gray-900 sm:mb-2 sm:text-base">
                  Efficiency
                </h5>
                <p className="text-xs text-gray-700 sm:text-sm">
                  Streamlined operations through automated processes
                </p>
              </div>

              {/* Enhanced Compliance */}
              <div className="p-3 text-center border border-red-200 sm:p-4 bg-white/60 rounded-xl">
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-red-600 sm:w-8 sm:h-8 sm:mb-3" />
                <h5 className="mb-1 text-sm font-bold text-gray-900 sm:mb-2 sm:text-base">
                  Enhanced Compliance & Controls
                </h5>
                <p className="text-xs text-gray-700 sm:text-sm">
                  Automated compliance with regulatory requirements
                </p>
              </div>

              {/* Operational Resilience */}
              <div className="p-3 text-center border border-red-200 sm:p-4 bg-white/60 rounded-xl sm:col-span-2 md:col-span-1">
                <Settings className="w-6 h-6 mx-auto mb-2 text-red-600 sm:w-8 sm:h-8 sm:mb-3" />
                <h5 className="mb-1 text-sm font-bold text-gray-900 sm:mb-2 sm:text-base">
                  Operational Resilience
                </h5>
                <p className="text-xs text-gray-700 sm:text-sm">
                  Integrating robust digital standards across all business units
                </p>
              </div>
            </div>

            <div className="flex justify-center col-span-1 my-5 sm:col-span-2">
              <button
                onClick={() => toggleSection("nexStepShown")}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-300 rounded-full hover:opacity-90"
                style={{ backgroundColor: "#e4002b" }}
              >
                {expandedSections.nexStepShown ? (
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

            {/* Next Steps */}
            <AnimatePresence>
              {expandedSections.nexStepShown && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="my-8">
                    <h4 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-900 sm:text-xl sm:mb-6">
                      <ArrowRight className="w-5 h-5 text-red-600 sm:w-6 sm:h-6" />
                      Next Steps
                    </h4>
                    <div className="p-4 text-white rounded-lg bg-gradient-to-r from-red-500 to-red-600 sm:p-6">
                      <div className="space-y-3 sm:space-y-2">
                        {nextSteps.map((step, index) => (
                          <div
                            key={index}
                            className="flex items-start text-sm sm:text-base"
                          >
                            <ArrowRight className="w-3 h-3 mr-2 text-red-200 flex-shrink-0 mt-0.5" />
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>


                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StrategicImportanceNextStepsSection;
