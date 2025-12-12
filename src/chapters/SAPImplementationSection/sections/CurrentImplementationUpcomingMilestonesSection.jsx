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
  Building,
  Package,
  Users,
  Database,
  Workflow,
  MapPin,
} from "lucide-react";

const CurrentImplementationUpcomingMilestonesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedSections, setExpandedSections] = useState({
    implementationAchievements: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const [isKTNEExpanded, setIsKTNEExpanded] = useState(false);

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

  const projects = [
    {
      entities: "KT Eswatini & KT South Africa: SAP Go Live",
      date: "4th July 2025",
      scope: "Business transformation with third-party integration.",
      status: "completed",
      icon: TrendingUp,
      color: "#e4002b",
    },
    {
      entities: "Celebr8 & Eleva8",
      date: "4th August 2025",
      scope: "Unified Omnione application implemented.",
      status: "completed",
      icon: TrendingUp,
      color: "#e4002b",
    },
    {
      entities: "Lush Eswatini & Lush South Africa",
      date: "5th September 2025",
      scope: "Fastest SAP implementation.",
      status: "completed",
      icon: Building,
      color: "#e4002b",
    },
    {
      entities: "MPL Ghana",
      date: "10th September 2025",
      scope: "SAP Extended Warehouse Management (EWM).",
      status: "completed",
      icon: Database,
      color: "#e4002b",
    },
    {
      entities: "Guinness",
      date: "Q3 2025",
      scope: "Vendor Invoice Management (VIM) Portal.",
      status: "completed",
      icon: FileText,
      color: "#e4002b",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "in-progress":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "on-track":
        return "bg-green-100 text-green-800 border-green-200";
      case "preparing":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "planning":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "in-progress":
        return "In Progress";
      case "on-track":
        return "On Track";
      case "preparing":
        return "Preparing";
      case "planning":
        return "Planning";
      case "completed":
        return "Completed";
      default:
        return "Unknown";
    }
  };

  const keyActivities = [
    {
      title: "KT Eswatini & KT South Africa",
      description:
        "Preparations underway for SAP integration with third-party warehouse systems",
      icon: MapPin,
    },
    {
      title: "Celebr8 & Eleva8",
      description: "Project on track for August 2025 go-live",
      icon: CheckCircle,
    },
    {
      title: "Lush Eswatini & Lush South Africa",
      description: "Teams preparing for September 2025 rollout",
      icon: Building,
    },
    {
      title: "Colgate & Hypo",
      description: "Requirement gathering phase commenced after board approval",
      icon: Database,
    },
  ];

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-8 md:mb-16"
      id="q3-sap-implementations"
    >
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl border border-red-100 overflow-hidden mx-2 sm:mx-0">
        {/* Section Header */}
        <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
              style={{ backgroundColor: "#e4002b" }}
            >
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                Implementation Milestones
              </h3>
              <p className="text-red-600 font-medium text-sm sm:text-base">
                Current Achievements & Upcoming Projects
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-0">
          {/* KTNE Go Live Section */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-red-500" />
              SAP Key Achievements
            </h4>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6">
              {/* Go Live Details */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center h-[155px] gap-3 sm:gap-4 p-3 sm:p-4 bg-red-50 rounded-xl sm:rounded-2xl border border-red-200">
                  <div className="flex items-center gap-2 border-r border-red-200 pr-4">
                    {/* <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 flex-shrink-0" /> */}
                    <h4 className="text-2xl font-bold text-red-600">6 </h4>
                    <div>
                      <h5 className="font-bold text-gray-900 text-sm sm:text-base">
                        Entities Live
                      </h5>
                      {/* <p className="text-red-600 font-semibold text-sm sm:text-base">
                        4th July 2025
                      </p> */}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pl-4">
                    {/* <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 flex-shrink-0" /> */}
                    <h4 className="text-2xl font-bold text-red-600">5</h4>
                    <div>
                      <h5 className="font-bold text-gray-900 text-sm sm:text-base">
                        Successful Integrations
                      </h5>
                      {/* <p className="text-red-600 font-semibold text-sm sm:text-base">
                        4th July 2025
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Summary */}
              <div className="space-y-4 sm:space-y-6 h-full">
                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-red-200">
                  <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                    Integrations:
                  </h5>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Integration: Payspace, Vodacom, 3PL, host to host bank
                    integrations, & image/PDF to Sales Order creation using
                    Gemini vision AI.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-2 flex justify-center my-5">
            <button
              onClick={() => toggleSection("implementationAchievements")}
              className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#e4002b" }}
            >
              {expandedSections.implementationAchievements ? (
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

          {/* Upcoming Milestones */}
          <AnimatePresence>
            {expandedSections.implementationAchievements && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-red-600" />
                    Q3 2025 SAP Implementation Achievements
                  </h4>

                  {/* Projects Timeline */}
                  <div className="relative mb-8">
                    <div className="absolute left-6 top-0 w-0.5 h-full bg-red-200"></div>

                    <div className="space-y-4">
                      {projects.map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="relative flex items-start gap-6"
                        >
                          {/* Timeline Point */}
                          <div className="relative z-10 flex-shrink-0">
                            <div className="w-12 h-12 bg-white border-4 border-red-200 rounded-full flex items-center justify-center shadow-lg">
                              <project.icon className="w-5 h-5 text-red-600" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0 pb-6">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                  <h5 className="font-bold text-gray-900 text-lg">
                                    {project.entities}
                                  </h5>
                                  <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}
                                  >
                                    {getStatusText(project.status)}
                                  </span>
                                </div>
                                <div className="flex items-start text-sm text-gray-700">
                                  <Clock className="w-3 h-3 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                                  {project.scope}
                                </div>
                              </div>

                              {/* Date Badge */}
                              <div className="flex-shrink-0">
                                <div className="border border-red-200 rounded-lg px-4 py-1">
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-3 h-3 text-red-600" />
                                    <span className="font-medium text-red-600 text-xs sm:text-base">
                                      {project.date}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Key Activities in Progress */}
          {/* <div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
              <Workflow className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              Key Activities in Progress
            </h4>
            <div className="bg-red-50 p-3 sm:p-4 rounded-lg border border-red-200">
              <div className="space-y-3 sm:space-y-2">
                {keyActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-start text-sm text-gray-700"
                  >
                    <div className="flex items-start mb-1 sm:mb-0">
                      <activity.icon className="w-3 h-3 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-gray-900">
                        {activity.title}:
                      </span>
                    </div>
                    <span className="sm:ml-1 pl-5 sm:pl-0">
                      {activity.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default CurrentImplementationUpcomingMilestonesSection;
