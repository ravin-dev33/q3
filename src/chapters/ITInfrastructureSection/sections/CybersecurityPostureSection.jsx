import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Shield,
  Users,
  Monitor,
  Eye,
  Target,
  Award,
  AlertTriangle,
  ShieldCheck,
  UserCheck,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from "lucide-react";

const CybersecurityPostureSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    cybersecurity: false,
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
    <motion.div variants={itemVariants} className="mb-10" id="cybersecurity-posture">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#1e40af" }}
              >
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">Cybersecurity Posture</h3>
                <p className="text-base text-gray-600">
                  Bolstering Our Digital Defense
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              We've made considerable advancements in safeguarding our data and
              systems through comprehensive DLP awareness training for over 900 users
              and VAPT for over 1,000 assets. This initiative empowers our users
              to be the first line of defense against data loss while strengthening
              our overall security resilience.
            </p>
          </div>

          {/* Image Column - First Position */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <div className="w-full max-w-sm lg:max-w-none flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-20 blur-2xl"></div>
                <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50">
                  <div className="text-center">
                    <Shield className="w-16 h-16 text-blue-800 mx-auto mb-4" />
                    <div className="text-3xl font-black text-blue-800 mb-2">
                      <CountUp end={900} duration={2} />+
                    </div>
                    <p className="text-sm font-medium text-gray-700">Users Trained</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card - Spans full width on smaller screens */}
          <div className="order-3 col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-black mb-2" style={{ color: "#1e40af" }}>
                  <CountUp end={4000} duration={2} separator="," />+
                </div>
                <p className="text-sm font-medium text-gray-700">Endpoints Protected</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-2" style={{ color: "#1e40af" }}>
                  <CountUp end={1000} duration={2} separator="," />+
                </div>
                <p className="text-sm font-medium text-gray-700">Assets Assessed</p>
              </div>
            </div>
          </div>

          {/* Key Initiatives Preview - Spans full width */}
          <div className="order-4 col-span-1 md:col-span-2 lg:col-span-2 flex items-end justify-center h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#1e40af" }} />
                <span className="text-sm text-gray-600">DLP Training Complete</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#1e40af" }} />
                <span className="text-sm text-gray-600">VAPT Assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#1e40af" }} />
                <span className="text-sm text-gray-600">Multi-Entity Coverage</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#1e40af" }} />
                <span className="text-sm text-gray-600">Proactive Security</span>
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                <button
                  onClick={() => toggleSection("cybersecurity")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#1e40af" }}
                >
                  {expandedSections.cybersecurity ? (
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
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {expandedSections.cybersecurity && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-5 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* DLP Training Details */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      Data Loss Prevention (DLP) Awareness & Training
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We've successfully completed comprehensive DLP awareness and training for over
                    900 users across a wide range of our entities, including Guinness, MCPL, Lush,
                    Kellogg's Nigeria, Hypo, ARPN, Dufil, TG Arla, and BHN. Concurrently, DLP has
                    been implemented for over 4,000 endpoints, significantly reducing the risk of
                    sensitive data breaches.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      Guinness
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      MCPL
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      Lush
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      Kellogg's Nigeria
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      Others
                    </span>
                  </div>
                </div>

                {/* VAPT Details */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      Vulnerability Assessment and Penetration Testing (VAPT)
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    To proactively identify and address potential weaknesses, we've completed VAPT
                    for over 1,000 assets. This crucial process simulates real-world attacks,
                    allowing us to discover and remediate vulnerabilities before malicious actors
                    can exploit them, thereby strengthening our overall security resilience.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-slate-700" />
                        <span className="font-medium text-black">Proactive</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Identifies vulnerabilities before exploitation
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-slate-700" />
                        <span className="font-medium text-black">Simulated</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Real-world attack simulation and testing
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-slate-700" />
                        <span className="font-medium text-black">Resilient</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Strengthens overall security posture
                      </p>
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

export default CybersecurityPostureSection;