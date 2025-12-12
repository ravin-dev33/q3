import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Target,
  Shield,
  Workflow,
  Globe,
  TrendingUp,
  Award,
  Building,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  BookOpen,
} from "lucide-react";

const StrategicImportanceSection = () => {
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

  const strategicPoints = [
    {
      icon: TrendingUp,
      title: "Phased Digital Transformation",
      description:
        "The phased SAP rollouts reflect a commitment to robust digital transformation across business units and regions.",
      color: "#dc2626",
    },
    {
      icon: Shield,
      title: "Compliance & Automation",
      description:
        "Digital tax compliance, automation of business processes, and consolidation of operations are key benefits realized.",
      color: "#dc2626",
    },
    {
      icon: Globe,
      title: "Government Integration",
      description:
        "Integration with platforms such as the Orchida e-Tax Invoice portal directly supports government modernization initiatives.",
      color: "#dc2626",
    },
    {
      icon: Award,
      title: "Operational Excellence",
      description:
        "Sets benchmarks for operational excellence and establishes best practices across all business units.",
      color: "#dc2626",
    },
  ];

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-8 md:mb-16"
      id="strategic-importance"
    >
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl border border-red-100 overflow-hidden mx-2 sm:mx-0">
        {/* Section Header */}
        <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
              style={{ backgroundColor: "#dc2626" }}
            >
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                Strategic Importance
              </h3>
              <p className="text-red-600 font-medium text-sm sm:text-base">
                Long-term Vision & Impact
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-0">
          {/* Strategic Points Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {strategicPoints.map((point, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 bg-white rounded-2xl border border-red-200"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                    style={{ backgroundColor: point.color }}
                  >
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">
                      {point.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary and Read More */}
          <div className="space-y-6">
            {/* Quick Summary */}
            <div className="p-6 bg-gray-50 rounded-2xl border border-red-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Strategic Impact Overview
              </h4>
              <p className="text-gray-700 leading-relaxed">
                The phased SAP rollouts reflect our commitment to robust digital
                transformation, enabling automated compliance, process
                optimization, and operational excellence across all business
                units.
              </p>
            </div>

            {/* Read More Section */}
            <motion.div
              className="bg-white overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
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
                    <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 border border-red-200">
                      <div className="grid md:grid-cols-3 gap-6">
                        {/* Digital Tax Compliance */}
                        <div className="text-center">
                          <div
                            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                            style={{ backgroundColor: "#dc2626" }}
                          >
                            <Shield className="w-8 h-8 text-white" />
                          </div>
                          <h5 className="font-bold text-gray-900 mb-2">
                            Digital Tax Compliance
                          </h5>
                          <p className="text-gray-700 text-sm">
                            Automated compliance with government tax regulations
                            and reporting requirements, supporting modernization
                            initiatives.
                          </p>
                        </div>

                        {/* Process Automation */}
                        <div className="text-center">
                          <div
                            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                            style={{ backgroundColor: "#dc2626" }}
                          >
                            <Workflow className="w-8 h-8 text-white" />
                          </div>
                          <h5 className="font-bold text-gray-900 mb-2">
                            Process Automation
                          </h5>
                          <p className="text-gray-700 text-sm">
                            Elimination of manual processes and implementation
                            of automated workflows for enhanced efficiency and
                            accuracy.
                          </p>
                        </div>

                        {/* Operations Consolidation */}
                        <div className="text-center">
                          <div
                            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                            style={{ backgroundColor: "#dc2626" }}
                          >
                            <CheckCircle className="w-8 h-8 text-white" />
                          </div>
                          <h5 className="font-bold text-gray-900 mb-2">
                            Operations Consolidation
                          </h5>
                          <p className="text-gray-700 text-sm">
                            Unified systems and standardized processes across
                            all business units, setting benchmarks for
                            operational excellence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StrategicImportanceSection;
