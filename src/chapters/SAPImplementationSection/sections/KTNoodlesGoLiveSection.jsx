import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CheckCircle,
  Calendar,
  TrendingUp,
  Shield,
  BarChart3,
  Clock,
  Target,
  FileText,
  ChevronDown,
  ChevronUp,
  BookOpen,
} from "lucide-react";

const KTNoodlesGoLiveSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isExpanded, setIsExpanded] = useState(false);

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
      className="mb-8 md:mb-16"
      id="kt-noodles-go-live"
    >
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl border border-red-100 overflow-hidden mx-2 sm:mx-0">
        {/* Section Header */}
        <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
              style={{ backgroundColor: "#dc2626" }}
            >
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                KT Noodles South Africa (KTNE): SAP Go Live
              </h3>
              <p className="text-red-600 font-medium text-sm sm:text-base">
                Major Milestone Achievement
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-0">
          {/* Go Live Information */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Go Live Details */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-red-50 rounded-xl sm:rounded-2xl border border-red-200">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                    Go Live Date
                  </h4>
                  <p className="text-red-600 font-semibold text-sm sm:text-base">
                    1st May 2025
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6  rounded-xl sm:rounded-2xl border border-red-200">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm sm:text-base">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                  Achievement
                </h4>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  KTNE achieved a major milestone by successfully going live
                  with its SAP integration, marking a critical step in Egypt's
                  digital tax transformation journey.
                </p>
              </div>
            </div>

            {/* Impact Summary */}
            <div className="space-y-4 sm:space-y-6 h-full">
              <div className="p-4 sm:p-6 bg-white border-2 border-red-200 rounded-xl sm:rounded-2xl  h-full">
                <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                  Digital Transformation Impact
                </h4>
                <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  This transition replaces the manual invoicing upload process
                  with a fully automated SAP system, integrated seamlessly with
                  the Orchida e-Tax Invoice portal.
                </p>
                <div className="flex items-center gap-2 text-sm text-red-600 font-medium">
                  <FileText className="w-4 h-4" />
                  <span>Manual → Automated Process</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary and Read More */}
          <div className="space-y-6">
            {/* Quick Summary */}
            <div className="p-6 bg-red-50 rounded-2xl border border-red-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Key Benefits Summary
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Enhanced compliance with local tax regulations, improved
                efficiency through automation, and real-time data accessibility
                for better decision-making.
              </p>
            </div>

            {/* Read More Section */}
            <motion.div
              className="bg-white rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </motion.button>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid md:grid-cols-1 gap-6">
                        {/* Compliance */}
                        <motion.div
                          // whileHover={{ y: -5, scale: 1.02 }}
                          className="p-6 rounded-2xl border border-red-200"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <Shield className="w-8 h-8 text-red-600" />
                            <h5 className="font-bold text-gray-900">
                              Enhanced Compliance
                            </h5>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Improved compliance with local tax regulations
                            through automated processes and real-time
                            integration with government systems.
                          </p>
                        </motion.div>

                        {/* Efficiency */}
                        <motion.div
                          // whileHover={{ y: -5, scale: 1.02 }}
                          className="p-6  rounded-2xl border border-red-200"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <BarChart3 className="w-8 h-8 text-red-600" />
                            <h5 className="font-bold text-gray-900">
                              Improved Efficiency
                            </h5>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Enhanced accuracy in invoicing and reporting through
                            elimination of manual processes and automated
                            workflows.
                          </p>
                        </motion.div>

                        {/* Data Access */}
                        <motion.div
                          // whileHover={{ y: -5, scale: 1.02 }}
                          className="p-6  rounded-2xl border border-red-200"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <Clock className="w-8 h-8 text-red-600" />
                            <h5 className="font-bold text-gray-900">
                              Real-time Access
                            </h5>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Real-time data accessibility enabling better
                            decision-making, operational insights, and strategic
                            planning capabilities.
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default KTNoodlesGoLiveSection;
