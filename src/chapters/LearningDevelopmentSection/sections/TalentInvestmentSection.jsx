import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  Brain,
  Cloud,
  Settings,
  BarChart3,
  Users,
  ChevronDown,
  ChevronUp,
  Award,
  Target,
  TrendingUp,
  BookOpen,
} from "lucide-react";

const TalentInvestmentSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const trainingAreas = [
    {
      icon: Brain,
      title: "AI & Data Capabilities",
      description: "Building critical expertise in artificial intelligence and data science",
      achievements: [
        "15 professionals certified as AI Requirement Specialists (AIRSC) and AI Solution Architects (CAISA)",
        "Microsoft Fabric certifications (DP700) for data analytics foundations",
        "2 team members achieved Machine Learning using Python certification"
      ],
      color: "#8B5CF6",
      bgColor: "from-purple-500 to-indigo-500"
    },
    {
      icon: Cloud,
      title: "Cloud & IT Infrastructure",
      description: "Strengthening cloud administration and security expertise", 
      achievements: [
        "Multiple Azure Cloud certifications achieved (AZ-104, AZ-305, AZ-500, AZ-700)",
        "Advanced security certifications (SC-100, SC-200, CISA)",
        "Robust progress in cloud solution architecture"
      ],
      color: "#06B6D4",
      bgColor: "from-cyan-500 to-blue-500"
    },
    {
      icon: Settings,
      title: "SAP Business Systems",
      description: "Comprehensive training for seamless business operations",
      achievements: [
        "Over 70 participants trained across various SAP modules",
        "Finance (FI) and Controlling (CO) expertise development",
        "Materials Management (MM), Sales & Distribution (SD), and Production Planning (PP) training"
      ],
      color: "#EF4444",
      bgColor: "from-red-500 to-orange-500"
    },
    {
      icon: BarChart3,
      title: "Productivity & Project Management",
      description: "Enhancing efficiency and data-driven decision making",
      achievements: [
        "Over 10 team members completed Microsoft Essentials Training",
        "Project Management Essentials training for key personnel",
        "Power BI Basics learning for enhanced data visualization"
      ],
      color: "#10B981",
      bgColor: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <motion.div
      ref={ref}
      id="talent-investment"
      className="py-8 md:py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Target className="w-4 h-4" />
          Investing in Our Talent
        </motion.div>
        
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Strategic Learning Initiatives
        </motion.h2>
        
        <motion.p
          className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          This quarter, we continued our strong commitment to fostering continuous learning and 
          professional growth across our teams. Our strategic training initiatives are equipping 
          our staff with cutting-edge skills to drive innovation and enhance operational excellence.
        </motion.p>
      </div>

      {/* Training Areas Grid */}
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
        {trainingAreas.map((area, index) => {
          const Icon = area.icon;
          return (
            <motion.div
              key={area.title}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${area.bgColor} p-4 sm:p-6 text-white`}>
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <div className="p-2 sm:p-3 bg-white/20 rounded-lg sm:rounded-xl backdrop-blur-sm flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">{area.title}</h3>
                    <p className="text-white/90 text-xs sm:text-sm">{area.description}</p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6">
                <div className="space-y-2 sm:space-y-3">
                  {area.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-2 sm:gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.7 + index * 0.1 + idx * 0.1, duration: 0.5 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Read More Section */}
      <motion.div
        className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3 sm:gap-0">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Training Impact & Future Outlook</h3>
            </div>
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-lg transition-colors duration-200"
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

          <p className="text-gray-600 mb-4">
            Our comprehensive learning and development programs have successfully enhanced our team's 
            capabilities across critical technology domains and business processes.
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-100">
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <Award className="w-4 h-4 text-purple-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                        <li>• 70+ professionals trained across multiple disciplines</li>
                        <li>• 15+ AI and data analytics certifications achieved</li>
                        <li>• 20+ Azure cloud and security certifications completed</li>
                        <li>• 100% enhancement in digital literacy across teams</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <TrendingUp className="w-4 h-4 text-purple-600" />
                        Strategic Impact
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                        <li>• Enhanced operational efficiency through SAP expertise</li>
                        <li>• Strengthened cloud infrastructure capabilities</li>
                        <li>• Advanced AI and data science competencies</li>
                        <li>• Improved project management and productivity tools usage</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg">
                    <p className="text-xs sm:text-sm text-gray-700 italic">
                      "These strategic training initiatives position our teams for higher efficiency, 
                      innovation, and operational resilience in line with modern digital standards. 
                      Our continued investment in talent development ensures we remain at the forefront 
                      of technological advancement and business excellence."
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TalentInvestmentSection;