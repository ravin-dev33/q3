import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  GraduationCap,
  Brain,
  Cloud,
  Settings,
  BarChart3,
  Users,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Award,
  Target,
  TrendingUp,
} from "lucide-react";

const TrainingInitiativesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
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

  const stats = [
    {
      label: "Training Participants",
      value: 90,
      suffix: "+",
      color: "#1e40af",
    },
    { label: "AI Certifications", value: 15, suffix: "", color: "#1e40af" },
    { label: "Azure Certifications", value: 20, suffix: "+", color: "#1e40af" },
  ];

  const trainingAreas = [
    {
      icon: Brain,
      title: "AI & Data Capabilities",
      description:
        "Building critical expertise in artificial intelligence and data science",
      achievements: [
        "15 professionals certified as AI Requirement Specialists (AIRSC) and AI Solution Architects (CAISA)",
        "Microsoft Fabric certifications (DP700) for data analytics foundations",
        "2 team members achieved Machine Learning using Python certification",
      ],
      color: "#1e40af",
      bgColor: "from-blue-500 to-indigo-500",
    },
    {
      icon: Cloud,
      title: "Cloud & IT Infrastructure",
      description: "Strengthening cloud administration and security expertise",
      achievements: [
        "Multiple Azure Cloud certifications achieved (AZ-104, AZ-305, AZ-500, AZ-700)",
        "Advanced security certifications (SC-100, SC-200, CISA)",
        "Robust progress in cloud solution architecture",
      ],
      color: "#1e40af",
      bgColor: "from-cyan-500 to-blue-500",
    },
    {
      icon: Settings,
      title: "SAP Business Systems",
      description: "Comprehensive training for seamless business operations",
      achievements: [
        "Over 70 participants trained across various SAP modules",
        "Finance (FI) and Controlling (CO) expertise development",
        "Materials Management (MM), Sales & Distribution (SD), and Production Planning (PP) training",
      ],
      color: "#1e40af",
      bgColor: "from-blue-600 to-indigo-600",
    },
    {
      icon: BarChart3,
      title: "Productivity & Project Management",
      description: "Enhancing efficiency and data-driven decision making",
      achievements: [
        "Over 10 team members completed Microsoft Essentials Training",
        "Project Management Essentials training for key personnel",
        "Power BI Basics learning for enhanced data visualization",
      ],
      color: "#1e40af",
      bgColor: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-8 md:mb-16"
      id="training-initiatives"
    >
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl border border-blue-100 overflow-hidden mx-2 sm:mx-0">
        {/* Section Header */}
        <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
              style={{ backgroundColor: "#1e40af" }}
            >
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                Strategic Training Initiatives
              </h3>
              <p className="text-blue-600 font-medium text-sm sm:text-base">
                Investing in Our Talent
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-0">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-blue-50 rounded-xl p-4 sm:p-6 border border-blue-200"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-center">
                  <div
                    className="text-2xl sm:text-3xl font-bold mb-2"
                    style={{ color: stat.color }}
                  >
                    {inView && (
                      <CountUp
                        end={stat.value}
                        duration={2}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Training Areas Overview */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Key Training Focus Areas
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              {trainingAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    className="p-6 bg-white border-2 border-blue-200 rounded-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                      <div>
                        <h5 className="font-bold text-gray-900 text-lg">
                          {area.title}
                        </h5>
                        <p className="text-blue-600 text-sm font-medium">
                          {area.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {area.achievements.slice(0, 2).map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrainingInitiativesSection;
