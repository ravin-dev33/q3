import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FileText,
  BarChart3,
  Clock,
  Scale,
  CheckCircle,
  TrendingUp,
  MapPin,
  ChevronDown,
  ChevronUp,
  Globe,
  Lock,
} from "lucide-react";

const Q3ManufacturingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [expandedSections, setExpandedSections] = useState({
    others: true,
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
      <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
        <div className="px-6 py-8 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br from-blue-600 to-blue-700">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Manufacturing Overview
              </h3>
              <p className="text-sm text-gray-600">
                Digital Transformation & Automation
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-4 w-full">
          {/* Paperless Initiative Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 w-full">
            <div className="group w-full mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Paperless Initiative
                  </h4>
                  <p className="text-sm text-gray-600">
                    Digital Authorization Systems
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2">
                      e-Signing App Version 2.0
                    </h5>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Status:</span>{" "}
                      Successfully rolled out
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <span className="font-semibold">Location:</span> All Dufil
                      entities
                    </p>
                    <p className="text-sm text-blue-700 font-medium">
                      Impact: Strengthens digital authorization processes,
                      faster, more secure, paperless approvals
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Power BI Development Section */}
            <div className="group w-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Power BI Development
                  </h4>
                  <p className="text-sm text-gray-600">Analytics & Insights</p>
                </div>
              </div>
              {/* <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 space-y-4">
                <div className="bg-white p-4 rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h5 className="font-bold text-gray-900 mb-2">
                        Dufil progress
                      </h5>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="w-full bg-blue-100 rounded-full h-3">
                            <div
                              className="bg-gradient-to-r from-blue-600 to-blue-700 h-3 rounded-full"
                              style={{ width: "91%" }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">
                          91%
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Completion status
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 mb-2">
                        Lush & Kellogs
                      </h5>
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-semibold">Location:</span>{" "}
                        Eswatini & South Africa
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Status:</span> SAP PBI
                        onboarded
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Common wrapper for equal height */}
                <div className="flex flex-col h-full">
                  <div className="bg-white p-6 rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between h-full">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-2">
                          Dufil progress
                        </h5>
                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <div className="w-full bg-blue-100 rounded-full h-3">
                              <div
                                className="bg-gradient-to-r from-blue-600 to-blue-700 h-3 rounded-full"
                                style={{ width: "91%" }}
                              ></div>
                            </div>
                          </div>
                          <span className="text-2xl font-bold text-blue-600">
                            91%
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Completion status
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col h-full">
                  <div className="bg-white p-6 rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between h-full">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-gray-900 mb-2">
                          Lush & Kellogg's
                        </h5>
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-semibold">Location:</span>{" "}
                          Eswatini & South Africa
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Status:</span> SAP PBI
                          onboarded
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-span-1 sm:col-span-2 flex justify-center my-5">
            <button
              onClick={() => toggleSection("others")}
              className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#1e40af" }}
            >
              {expandedSections.others ? (
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
          </div> */}

          <AnimatePresence>
            {expandedSections.others && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-2">
                    {[
                      {
                        title: "Downtime Monitoring for Production Efficiency",
                        description:
                          "We are advancing on a key initiative to enhance operational efficiency and reduce track downtime. The application development is finished, with database migration currently in progress for PHC Noodles. For Ghana Noodles, the required hardware has been procured and installation has been initiated.",
                        // status: "In Progress",
                        icon: Globe,
                      },
                      {
                        title: "Weighment Automation for Process Optimization",
                        description:
                          "The IIoT-SAP integration is now complete for PHC Noodles, Pasta, and Snacks, while application development and integration are currently in progress for the Aba, Ghana Noodles, and Ota Seasoning facilities.",
                        // status: "Completed",
                        icon: Lock,
                      },
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={
                            inView
                              ? { scale: 1, opacity: 1 }
                              : { scale: 0.9, opacity: 0 }
                          }
                          transition={{
                            delay: 0.3 + index * 0.1,
                            duration: 0.6,
                          }}
                          className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-blue-200 hover:border-blue-300 hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1 gap-3">
                              <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md"
                                style={{ backgroundColor: "#1e40af" }}
                              >
                                <Icon className="w-7 h-7 text-white" />
                              </div>
                              <h5 className="font-bold text-gray-900">
                                {item.title}
                              </h5>
                              {/* <span
                                className={`px-3 py-1 text-xs font-medium rounded-full ${
                                  item.status === "Completed"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {item.status}
                              </span> */}
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
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

export default Q3ManufacturingSection;
