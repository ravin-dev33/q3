import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CheckCircle,
  Users,
  BookOpen,
  Settings,
  Globe,
  Target,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const NextStepsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    {
      icon: CheckCircle,
      title: "Monitor Project Execution",
      description:
        "Monitor each project for timely and quality execution across all implementation phases.",
      priority: "high",
    },
    {
      icon: Users,
      title: "Change Management & Training",
      description:
        "Ensure adequate change management and training for teams adopting SAP systems.",
      priority: "high",
    },
    {
      icon: BookOpen,
      title: "Leverage KTNE Learnings",
      description:
        "Leverage learnings from KTNE's experienasce as a template for other implementations.",
      priority: "medium",
    },
    {
      icon: Globe,
      title: "Third-party Coordination",
      description:
        "Coordinate with third-party integrators and tax authorities to ensure smooth system interoperability.",
      priority: "medium",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-8 md:mb-16"
      id="next-steps"
    >
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl border border-red-100 overflow-hidden mx-2 sm:mx-0">
        {/* Section Header */}
        <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
              style={{ backgroundColor: "#dc2626" }}
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                Next Steps
              </h3>
              <p className="text-red-600 font-medium text-sm sm:text-base">
                Strategic Action Plan
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-0">
          {/* Next Steps List */}
          <div className="relative mb-8">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 w-0.5 h-full bg-red-200"></div>

            <div className="space-y-4">
              {nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline Point */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 bg-white border-4 border-red-200 rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="w-5 h-5 text-red-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pb-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h4 className="font-bold text-gray-900 text-lg">
                            {step.title}
                          </h4>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(step.priority)}`}
                          >
                            {step.priority.toUpperCase()} PRIORITY
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Strategic Roadmap Summary */}
          <div className="bg-gradient-to-br from-red-50/50 to-red-100 rounded-2xl p-8 border border-red-200">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Strategic SAP Implementation Roadmap
              </h4>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Higher Efficiency */}
              <div className="text-center p-4 bg-white/60 rounded-xl border border-red-200">
                <TrendingUp className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h5 className="font-bold text-gray-900 mb-2">
                  Higher Efficiency
                </h5>
                <p className="text-gray-700 text-sm">
                  Streamlined operations through automated processes
                </p>
              </div>

              {/* Enhanced Compliance */}
              <div className="text-center p-4 bg-white/60 rounded-xl border border-red-200">
                <CheckCircle className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h5 className="font-bold text-gray-900 mb-2">
                  Enhanced Compliance
                </h5>
                <p className="text-gray-700 text-sm">
                  Automated compliance with regulatory requirements
                </p>
              </div>

              {/* Operational Resilience */}
              <div className="text-center p-4 bg-white/60 rounded-xl border border-red-200">
                <Settings className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h5 className="font-bold text-gray-900 mb-2">
                  Operational Resilience
                </h5>
                <p className="text-gray-700 text-sm">
                  Modern digital standards across all business units
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NextStepsSection;
