import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  Building,
  Package,
  TrendingUp,
  MapPin,
  Users,
  Database,
  Workflow,
  CheckCircle,
  Clock,
} from "lucide-react";

const UpcomingMilestonesSection = () => {
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

  const projects = [
    {
      entities: "KT Eswatini & KT South Africa",
      date: "July 2025",
      scope:
        "SAP implementation with 3rd party warehouse integration, digitizing all warehouse operations.",
      status: "in-progress",
      icon: Package,
      color: "#dc2626",
    },
    {
      entities: "Celebr8 & Eleva8",
      date: "August 2025",
      scope: "SAP implementation rollout.",
      status: "on-track",
      icon: TrendingUp,
      color: "#dc2626",
    },
    {
      entities: "Lush Eswatini & Lush South Africa",
      date: "September 2025",
      scope: "SAP implementation rollout.",
      status: "preparing",
      icon: Building,
      color: "#dc2626",
    },
    {
      entities: "Colgate & Hypo",
      date: "January 2026",
      scope:
        "SAP implementation scheduled; requirement gathering initiated after CT Board approval.",
      status: "planning",
      icon: Users,
      color: "#dc2626",
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
      default:
        return "Unknown";
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-8 md:mb-16"
      id="upcoming-milestones"
    >
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl border border-red-100 overflow-hidden mx-2 sm:mx-0">
        {/* Section Header */}
        <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
              style={{ backgroundColor: "#dc2626" }}
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                Upcoming SAP Implementation Milestones
              </h3>
              <p className="text-red-600 font-medium text-sm sm:text-base">
                Strategic Rollout Timeline
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-0">
          {/* Projects Timeline */}
          <div className="relative mb-8">
            {/* Timeline Line */}
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
                          <h4 className="font-bold text-gray-900 text-lg">
                            {project.entities}
                          </h4>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}
                          >
                            {getStatusText(project.status)}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          {project.scope}
                        </p>
                      </div>

                      {/* Date Badge */}
                      <div className="flex-shrink-0">
                        <div className=" border border-red-200 rounded-lg px-4 py-1">
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

          {/* Key Activities in Progress */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Workflow className="w-6 h-6 text-red-600" />
              Key Activities in Progress
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              {/* KT Eswatini & South Africa */}
              <motion.div
                whileHover={{ y: -3 }}
                className="p-6 bg-white border-2 border-red-200 rounded-2xl"
              >
                <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  KT Eswatini & KT South Africa
                </h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Preparations are underway to integrate SAP with third-party
                  warehouse systems, ensuring a fully digital management of
                  warehouse functions.
                </p>
              </motion.div>

              {/* Celebr8 & Eleva8 */}
              <motion.div
                whileHover={{ y: -3 }}
                className="p-6 bg-white border-2 border-red-200 rounded-2xl"
              >
                <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  Celebr8 & Eleva8
                </h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Project is on track for the scheduled go-live in August 2025,
                  with all preparations proceeding as planned.
                </p>
              </motion.div>

              {/* Lush Entities */}
              <motion.div
                whileHover={{ y: -3 }}
                className="p-6 bg-white border-2 border-red-200 rounded-2xl"
              >
                <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Building className="w-5 h-5 text-red-600" />
                  Lush Eswatini & Lush South Africa
                </h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Teams are preparing for the September rollout to further
                  regional digital integration across operations.
                </p>
              </motion.div>

              {/* Colgate & Hypo */}
              <motion.div
                whileHover={{ y: -3 }}
                className="p-6 bg-white border-2 border-red-200 rounded-2xl"
              >
                <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-red-600" />
                  Colgate & Hypo
                </h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Requirement gathering phase commenced after board approval;
                  implementation targeted for early January 2026.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UpcomingMilestonesSection;
