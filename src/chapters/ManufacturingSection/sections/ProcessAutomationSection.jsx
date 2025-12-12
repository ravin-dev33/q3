import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import {
  Shield,
  CheckCircle,
  Target,
  Award,
  Calendar,
  Workflow,
  ChevronDown,
  ChevronUp,
  UserCheck,
} from "lucide-react";

const ProcessAutomationSection = () => {
  // State for expandable sections
  const [expandedSections, setExpandedSections] = useState({
    processAutomation: false,
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
      variants={itemVariants}
      className="mb-10"
      id="process-automation"
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#1e40af" }}
              >
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Process Automation
                </h3>
                <p className="text-base text-gray-600">
                  Operational Excellence
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              As part of our continued digital evolution, we are automating key
              operational, safety, quality, and HR workflows to reduce manual
              effort, improve compliance, and enhance traceability. These
              initiatives are building a foundation of connected, intelligent
              systems that support faster decision-making.
            </p>

            <h3 className="text-sm font-semibold text-gray-700 mb-6">
              Automation Solutions{" "}
              {["GMP", "Safe Sync", "LIMS", "Renew Edge", "HR Onboarding"].map(
                (solution, index) => (
                  <motion.span
                    key={solution}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-2 font-bold text-center text-xs text-[#1e40af] mr-2"
                  >
                    {solution}
                  </motion.span>
                )
              )}
            </h3>
          </div>

          {/* Image Column - Second Position */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <img
              src="/automation.png"
              alt="Process Automation"
              className="w-full max-w-sm lg:max-w-none object-contain"
            />
          </div>

          {/* Stats Card - Spans 2 columns */}
          <div className="order-3 col-span-1 md:col-span-2 lg:col-span-2 rounded-2xl">
            {/* Solutions Card - Spans 2 columns */}
            {/* <div className="text-left flex items-end gap-4  bg-blue-50  p-2  px-4 rounded-lg">
              <div className="text-5xl font-black" style={{ color: "#1e40af" }}>
                <CountUp end={7} duration={2} />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-700">Days Saved</p>
                <p className="text-sm text-gray-600 mt-1">
                  Via automated report generation
                </p>
              </div>
            </div> */}

            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg p-2 flex items-center bg-blue-50">
                <Shield className="w-8 h-8 text-green-500 mr-4" />
                <p className="text-sm text-gray-600">Compliance</p>
              </div>
              <div className="rounded-lg p-2 flex items-center bg-blue-50">
                <Target className="w-8 h-8 text-blue-500 mr-4" />
                <p className="text-sm text-gray-600">Efficiency</p>
              </div>
            </div>

            <div className="w-full items-center justify-center flex">
              <button
                onClick={() => toggleSection("processAutomation")}
                className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#1e40af" }}
              >
                {expandedSections.processAutomation ? (
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
          </div>

          {/* Solutions Card - Spans 2 columns */}
          <div className="order-5 col-span-1 md:col-span-2 lg:col-span-2 rounded-2xl h-full py-3">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 h-full">
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Digital Workflows</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">
                  Real-time Dashboards
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">
                  Compliance Management
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#1e40af" }}
                />
                <span className="text-sm text-gray-600">Audit Trails</span>
              </div>
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {expandedSections.processAutomation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-7 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* GMP Application */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      1. GMP Application: Automating Compliance Across Plants
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4 text-justify">
                    The GMP platform automates Good Manufacturing Practices
                    documentation across all sites, replacing manual entries
                    with digital planning, tracking, and audit reporting. It
                    supports critical functions like streamlined audit planning,
                    real-time dashboards, non-conformity tracking, and digital
                    archiving.
                  </p>
                  <div className="grid md:grid-cols-1 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        ~7 days saved via automated report generation
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Centralized digital archive of GMP reports
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Real-time dashboards for critical control points
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Improved audit efficiency and closure tracking
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      KTNL
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      Lush
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      CPT
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      Dufil (13 Plants)
                    </span>
                  </div>
                </div>

                {/* Safe Sync */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      2. Safe Sync: All-in-One Safety Management Platform
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Safe Sync digitizes and centralizes all EHS activities,
                    including incident management, audits, inspections, SOPs,
                    training, and monthly reporting. The platform enhances
                    compliance, response time, and safety culture across
                    factories.
                  </p>
                  <div className="grid md:grid-cols-1 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Real-time incident reporting and action assignment
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Centralized repository for SOPs and training materials
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Factory-wise EHS KPI dashboards
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Automated audit and report generation
                      </span>
                    </div>
                  </div>
                </div>

                {/* Renew Edge */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      3. Renew Edge: Certificate & Maintenance Tracker
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    A centralized platform that tracks expiry and renewal of
                    business-critical certificates, audits, and equipment
                    maintenance, ensuring proactive compliance and zero lapses.
                  </p>
                  <div className="grid md:grid-cols-1 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Renewal alerts and compliance reminders
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Tracks both vehicle lisence and operational licenses
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Reduces administrative oversight risk
                      </span>
                    </div>
                  </div>
                </div>

                {/* HR Onboarding Solution */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck
                      className="w-6 h-6"
                      style={{ color: "#1e40af" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      4. HR Onboarding Solution
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    A centralized application to streamline the post-recruitment
                    journey, from offer acceptance to documentation and
                    induction, ensuring a consistent and compliant onboarding
                    experience.
                  </p>
                  <div className="grid md:grid-cols-1 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Unified onboarding dashboard
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Automated document collection and tracking
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: "#1e40af" }}
                      />
                      <span className="text-sm text-gray-600">
                        Clear visibility for HR and business leads
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      Live in Dufil
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      Ongoing in Guinness
                    </span>
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

export default ProcessAutomationSection;
