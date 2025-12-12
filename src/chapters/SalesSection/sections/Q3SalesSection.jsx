import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  MapPin,
  Package,
  ChevronDown,
  ChevronUp,
  Award,
  CheckCircle,
  Truck,
  Users,
  Smartphone,
} from "lucide-react";

const Q3SalesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [expandedSections, setExpandedSections] = useState({
    others: true, // auto expand for demo; set false if needed
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const mplNigeriaUpdates = [
    {
      title: "EPOD Compliance Report Automation",
      status: "Deployed",
      description:
        "Branch-wise and transport-wise automated reporting on MOVAM Dashboard",
      impact: "Eliminated manual compilation and improved transparency",
      icon: CheckCircle,
    },
    {
      title: "Trip EPOD Dashboard",
      status: "Developed",
      description:
        "Monitor shipment deliveries and FTN statuses for proactive issue resolution",
      impact: "Improved delivery accuracy and customer satisfaction",
      icon: Truck,
    },
    {
      title: "Auto Inventory Addition",
      status: "Launched",
      description:
        "Auto inventory addition linked to EPOD confirmation is now live in Guinness. This provides the advantage of real-time compliance from distributors.",
      impact: "Better coordination between distribution teams and drivers",
      icon: Users,
    },
  ];

  const mplGhanaUpdates = [
    {
      title: "Omnione Distributor App",
      description:
        "Simplified order and transaction management for distributors",
      icon: Smartphone,
    },
    {
      title: "Omnione MOS and Agent App",
      description: "Real-time field activity capture and reporting",
      icon: MapPin,
    },
  ];

  const guinnessUpdates = [
    {
      title: "EPOD",
      description: "Improved delivery tracking and compliance visibility",
      status: "Rolled out",
      icon: Package,
    },
    {
      title: "Distributor Apps",
      description:
        "Unified sales order and ePOD invoice management for distributors",
      status: "Launched",
      icon: Smartphone,
    },
    {
      title: "Streamlined Pallet Ordering",
      status: "Enabled",
      description:
        "MoQ & Pallet-wise order collection is live in Guinness & Ghana. It speeds up ordering, improves stock management, and ensures distributor compliance for greater efficiency",
      impact: "Enhanced motivation and visibility into incentives",
      icon: Award,
    },
  ];

  const renderUpdateList = (updates) => (
    <ul className="space-y-4">
      {updates.map((update, index) => (
        <li
          key={index}
          className="flex items-start gap-3 bg-red-50/50 p-3 rounded-lg"
        >
          {update.icon && (
            <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700 flex-shrink-0">
              <update.icon className="w-4 h-4 text-white" />
            </div>
          )}
          <div className="flex-1">
            <h5 className="font-semibold text-gray-900">{update.title}</h5>
            {/* {update.status && (
              <span className="inline-block mt-1 mb-2 px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                {update.status}
              </span>
            )} */}
            <p className="text-sm text-gray-700 mb-2">{update.description}</p>
            {/* {update.impact && (
              <p className="text-sm text-red-700 font-medium">
                Impact: {update.impact}
              </p>
            )} */}
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="space-y-8"
    >
      <div className="bg-gradient-to-br from-red-50/50 to-rose-50/50 rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8 space-y-8">
          {/* Toggle button */}
          <div className="flex justify-center">
            <button
              onClick={() => toggleSection("others")}
              className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#e4002b" }}
            >
              {expandedSections.others ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  View Q3 Sales Updates <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          <AnimatePresence>
            {expandedSections.others && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* MPL Nigeria */}
                  <div className="bg-white border border-red-200 rounded-2xl p-8 hover:border-red-300 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br from-red-600 to-red-700">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">
                          MPL Nigeria
                        </h4>
                        <p className="text-sm text-gray-600">
                          Digital Sales Transformation
                        </p>
                      </div>
                    </div>
                    {renderUpdateList(mplNigeriaUpdates)}
                  </div>

                  <div className="">
                    {/* MPL Ghana */}
                    <div className="bg-white border border-red-200 rounded-2xl p-8 hover:border-red-300 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br from-red-600 to-red-700">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">
                            MPL Ghana
                          </h4>
                          <p className="text-sm text-gray-600">
                            Mobile Sales Enablement
                          </p>
                        </div>
                      </div>
                      {renderUpdateList(mplGhanaUpdates)}
                    </div>

                    {/* Guinness */}
                    <div className="bg-white border border-red-200 rounded-2xl p-8 hover:border-red-300 transition-all duration-300 mt-4">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br from-red-600 to-red-700">
                          <Package className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">
                            Guinness
                          </h4>
                          <p className="text-sm text-gray-600">
                            Comprehensive Digital Suite
                          </p>
                        </div>
                      </div>
                      {renderUpdateList(guinnessUpdates)}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Q3SalesSection;
