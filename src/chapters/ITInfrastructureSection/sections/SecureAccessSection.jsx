import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Lock,
  Server,
  Shield,
  Network,
  Globe,
  Monitor,
  Users,
  Key,
  Fingerprint,
  Cloud,
  Router,
  Award,
  MapPin,
  Database,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from "lucide-react";

const SecureAccessSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    secureAccess: false,
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
    <motion.div variants={itemVariants} className="mb-10" id="secure-access">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#1e40af" }}
              >
                <Lock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">Secure Access & Efficiency</h3>
                <p className="text-base text-gray-600">
                  Enhancing Operational Security
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              We're making great strides in optimizing operational efficiency and ensuring 
              seamless, secure access for our teams through Azure Firewall protection for 
              18 VMs, MFA implementation across all sites, and Azure Virtual Desktop 
              deployment for all Egypt users providing secure SAP access.
            </p>
          </div>

          {/* Image Column - First Position */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <div className="w-full max-w-sm lg:max-w-none flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-20 blur-2xl"></div>
                <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50">
                  <div className="text-center">
                    <Server className="w-16 h-16 text-blue-800 mx-auto mb-4" />
                    <div className="text-3xl font-black text-blue-800 mb-2">
                      <CountUp end={18} duration={2} />
                    </div>
                    <p className="text-sm font-medium text-gray-700">VMs Protected</p>
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
                  <CountUp end={100} duration={2} />%
                </div>
                <p className="text-sm font-medium text-gray-700">Sites Coverage</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-2" style={{ color: "#1e40af" }}>
                  <CountUp end={100} duration={2} />%
                </div>
                <p className="text-sm font-medium text-gray-700">Egypt Users</p>
              </div>
            </div>
          </div>

          {/* Key Initiatives Preview - Spans full width */}
          <div className="order-4 col-span-1 md:col-span-2 lg:col-span-2 flex items-end justify-center h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#1e40af" }} />
                <span className="text-sm text-gray-600">Azure Firewall DMZ</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#1e40af" }} />
                <span className="text-sm text-gray-600">MFA Implementation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#1e40af" }} />
                <span className="text-sm text-gray-600">Azure Virtual Desktop</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#1e40af" }} />
                <span className="text-sm text-gray-600">Enhanced Security</span>
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                <button
                  onClick={() => toggleSection("secureAccess")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#1e40af" }}
                >
                  {expandedSections.secureAccess ? (
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
            {expandedSections.secureAccess && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-5 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* Azure Firewall Details */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      Azure Firewall in DMZ
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    A dedicated Azure Firewall has been provisioned and configured in our DMZ 
                    (Demilitarized Zone) subnet. This firewall now acts as the primary 
                    ingress/egress point for our public-facing workloads, covering 18 Virtual 
                    Machines. We've meticulously created custom application and network rule 
                    collections to ensure precise access control, Network Address Translation 
                    (NAT), and advanced threat prevention.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Network className="w-4 h-4 text-blue-800" />
                        <span className="font-medium text-black">Network Rules</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Custom rule collections
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-4 h-4 text-blue-800" />
                        <span className="font-medium text-black">App Rules</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        External-facing services
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Router className="w-4 h-4 text-blue-800" />
                        <span className="font-medium text-black">NAT Rules</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Secure connectivity
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-blue-800" />
                        <span className="font-medium text-black">Threat Prevention</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Advanced protection
                      </p>
                    </div>
                  </div>
                </div>

                {/* MFA Details */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Key className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      Multi-Factor Authentication (MFA) – Azure Point-to-Site VPN
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We have successfully implemented Multi-Factor Authentication (MFA) for Azure 
                    Point-to-Site VPN for all users across all sites. This significantly 
                    strengthens our remote access security, requiring multiple forms of 
                    verification for users to connect to our network, drastically reducing 
                    the risk of unauthorized access through compromised credentials.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Fingerprint className="w-4 h-4 text-slate-700" />
                        <span className="font-medium text-black">Multiple Verification</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Requires multiple forms of authentication
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-slate-700" />
                        <span className="font-medium text-black">Reduced Risk</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Drastically reduces unauthorized access
                      </p>
                    </div>
                  </div>
                </div>

                {/* Azure Virtual Desktop Details */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Monitor className="w-6 h-6" style={{ color: "#1e40af" }} />
                    <h4 className="text-lg font-bold text-gray-900">
                      Azure Virtual Desktop (AVD) for Egypt Users
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    To provide secure and efficient access to SAP, we have successfully deployed 
                    Azure Virtual Desktop (AVD) for all users in Egypt. This solution ensures 
                    reliable, secure access to critical business applications while maintaining 
                    optimal performance and scalability.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Cloud className="w-4 h-4 text-indigo-700" />
                        <span className="font-medium text-black">Cloud-Based</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Scalable virtual desktop infrastructure
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="w-4 h-4 text-indigo-700" />
                        <span className="font-medium text-black">SAP Access</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Secure access to critical applications
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-indigo-700" />
                        <span className="font-medium text-black">Egypt Coverage</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Complete deployment for all users
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

export default SecureAccessSection;