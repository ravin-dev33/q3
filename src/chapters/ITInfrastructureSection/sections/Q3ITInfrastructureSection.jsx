import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Shield,
  Lock,
  Key,
  Mail,
  Cloud,
  Beer,
  Globe,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Server,
  Database,
  Eye,
  FileCheck,
  Zap,
  Workflow,
} from "lucide-react";

const Q3ITInfrastructureSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedSections, setExpandedSections] = useState({
    others: false,
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

  const departments = [
    {
      icon: Globe,
      title: "Azure Security Hardening",
      // subtitle: "Core Systems & Connectivity",
      value: 15,
      suffix: "Applications Secured",
    },
    {
      icon: Lock,
      title: "BitLocker Encryption",
      // subtitle: "Protection & Compliance",
      value: 1058,
      suffix: "Devices Secured",
    },
    {
      icon: Key,
      title: "DLP implemented for 24 sites ",
      // subtitle: "Access Management & Security",
      value: 4300,
      suffix: "+ Computers",
    },
    {
      icon: Mail,
      title: "VAPT",
      // subtitle: "Digital Workflow Solutions",
      value: 22000,
      suffix: "+ Assets",
    },
    // {
    //   icon: Cloud,
    //   title: "Azure Infrastructure",
    //   // subtitle: "Cloud & DevOps Solutions",
    //   value: 60,
    //   suffix: "+ Deployments",
    // },
  ];

  const networkUpdates = [
    {
      title: "Azure security hardening",
      description:
        "To protect our data without compromising mobility, we have implemented full-disk encryption with BitLocker across 1058 devices. This critical security measure ensures that all data remains secure, whether our team is working locally or traveling internationally, effectively neutralizing the risk of a data breach from lost or stolen hardware.",
      status: "Completed",
    },
    {
      title: "Device-level encryption (BitLocker)",
      description:
        "We have successfully hardened our Azure security, moving 14 critical applications behind advanced firewalls. This proactive measure safeguards our shared data and services by bolstering resilience against evolving cyber threats.",
      status: "Enabled",
    },
    {
      title: "Network Modernization Underway",
      description:
        "New Wi-Fi 7 and secure cloud infrastructure deployed in Celebr8 & Elev8, with full infrastructure assessment completed & implementation planned for Q4 to enable secure, high-performance operations.",
      status: "Deployed",
    },
    // {
    //   title: "Cloud networking enhancements",
    //   description:
    //     "Technology: Private endpoints, VNets. Future-proofs cloud adoption, enables secure scaling.",
    //   status: "Implemented",
    // },
    // {
    //   title: "Guinness network refresh",
    //   description:
    //     "Planned. Impact: Unify infrastructure, improve monitoring, reduce downtime, better performance transparency.",
    //   status: "Planned",
    // },
  ];

  const cybersecurityUpdates = [
    {
      title: "Data Loss Prevention (DLP)",
      description:
        "Deployed Data Loss Prevention (DLP) across 4,300+ endpoints at key business units, actively protecting sensitive financial data, ensuring regulatory compliance, and safeguarding customer trust.",
      icon: Shield,
    },
    {
      title: "Vulnerability Assessment and Penetration Test",
      description:
        "Completed a comprehensive Vulnerability Assessment and Penetration Test (VAPT) across our entire digital estate of 22,000+ assets, including 1,500+ computers. This critical initiative identified and remediated security gaps, significantly reducing long-term financial risk and safeguarding our brand reputation.",
      icon: ShieldCheck,
    },
    {
      title: "Security trainings & phishing simulations",
      description:
        "Across sites. Building human firewall, informed workforce can stop threats early.",
      icon: AlertTriangle,
    },
    // {
    //   title: "ISO 27001 maturity assessment",
    //   description:
    //     "Achieved. Global compliance recognition, strengthens investor and partner confidence.",
    //   icon: CheckCircle,
    // },
    // {
    //   title: "Secure Development Lifecycle (SDLC)",
    //   description:
    //     "Launched. Embedding security from start, shifts from defensive to offensive stance.",
    //   icon: Lock,
    // },
    {
      title: "Upcoming initiatives",
      description:
        "NDPA compliance, SOAR platform, expanded rollouts. Meet Nigerian data laws, automate incident responses.",
      icon: Zap,
    },
  ];

  const authenticationUpdates = [
    // {
    //   title: "SSO for SAP GRC PRD in Azure",
    //   description:
    //     "Enabled. Reduces login fatigue and errors, tightens access controls, simplifies security.",
    // },
    // {
    //   title: "Automated backup & daily security checks for AD users",
    //   description:
    //     "Ensures system resilience, fast recovery from account compromises.",
    // },
    {
      title: "SuccessFactors & AD sync (JML automation)",
      description:
        "We have centralized and hardened our digital identity framework by implementing Single Sign-On for critical systems, automating user access for 3,000 employees directly from Successfactor (HR)",
    },
    // {
    //   title: "Windows Hardening Policy",
    //   description:
    //     "Rolled out. Standardized security baseline, reduces weak points.",
    // },
  ];

  const azureUpdates = [
    {
      title: "Terraform for Infrastructure as Code (IaC)",
      description:
        "Introduced. Automates infrastructure building and scaling, enables faster service rollouts without human error.",
      icon: Server,
    },
    {
      title: "Defender log monitoring",
      description:
        "Deployed. Predictive security, identifies threats before they disrupt operations.",
      icon: Eye,
    },
    {
      title: "Azure DevOps",
      description:
        "Repository management adopted. Strengthens collaboration, ensures traceability and auditability.",
      icon: Database,
    },
  ];

  const guinnessUpdates = [
    {
      title: "IT systems restoration",
      description:
        "Context: Post-Benin fire incident. Proved resilience, protected business continuity.",
    },
    {
      title: "Lightning & earthing protection",
      description:
        "Location: Ogba. Installed. Prevents downtime from physical damage, ensures IT services availability.",
    },
    {
      title: "Fibre cuts repair",
      description:
        "Location: Ogba & Benin. Restored mission-critical connectivity, minimized disruption.",
    },
    {
      title: "IT usage policy",
      description:
        "Rolled out. Standardizes digital behaviour, reduces security risks, drives compliance culture.",
    },
    {
      title: "Disaster Recovery (DR) on Orion DB",
      description:
        "Enabled. Guarantees business-critical data accessibility during outages.",
    },
  ];

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="space-y-8"
    >
      {/* Network Section */}
      <div
        id="q3-network"
        className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden"
      >
        <div className="px-6 py-6 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#1e40af" }}
            >
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                IT Infrastructure Overview
              </h3>
              <p className="text-sm text-gray-600">
                Comprehensive Systems & Security
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={
                    inView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.8, opacity: 0 }
                  }
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-white to-blue-50/40 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-100/60 group"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform duration-300"
                    style={{ backgroundColor: "#1e40af" }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex flex-col justify-center">
                    <h4 className="text-lg font-bold text-gray-900">
                      {dept.title}
                    </h4>
                    {/* <p className="text-sm text-gray-600">{dept.subtitle}</p> */}
                    <span className="text-sm font-semibold text-blue-700 mt-1">
                      {inView && (
                        <CountUp
                          end={dept.value}
                          duration={2.5}
                          delay={0.5 + index * 0.1}
                          suffix={` ${dept.suffix}`}
                        />
                      )}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="col-span-1 sm:col-span-2 flex justify-center my-5">
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
          </div>

          <AnimatePresence>
            {expandedSections.others && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Network Updates */}
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "#1e40af" }}
                    >
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Network & Infrastructure
                      </h4>
                      <p className="text-sm text-gray-600">
                        Core Systems & Connectivity
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {networkUpdates.map((update, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-bold text-gray-900">
                              {update.title}
                            </h5>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                              {update.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {update.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cybersecurity Updates */}
                <div className="p-6 bg-white mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "#1e40af" }}
                    >
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Cybersecurity
                      </h4>
                      <p className="text-sm text-gray-600">
                        Protection & Compliance
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {cybersecurityUpdates.map((update, index) => (
                      <div
                        key={index}
                        className="p-4 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <update.icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-bold text-gray-900 mb-2">
                              {update.title}
                            </h5>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {update.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Authentication Updates */}
                <div className="p-6 bg-white mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "#1e40af" }}
                    >
                      <Key className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Authentication & Identity
                      </h4>
                      <p className="text-sm text-gray-600">
                        Access Management & Security
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {authenticationUpdates.map((update, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-gray-900 mb-1">
                            {update.title}
                          </h5>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {update.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office Management */}
                {/* <div className="p-6 bg-white mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "#1e40af" }}
                    >
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Office Management
                      </h4>
                      <p className="text-sm text-gray-600">
                        Digital Workflow Solutions
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <FileCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-gray-900 mb-2">
                          DocuSign consolidation
                        </h5>
                        <p className="text-sm text-gray-700 leading-relaxed mb-3">
                          Consolidated for e-signatures.
                        </p>
                        <p className="text-sm text-blue-700 font-medium">
                          Impact: One global standard, reduces legal risk,
                          improves contract turnaround times.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Azure Updates */}
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "#1e40af" }}
                    >
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Azure Infrastructure
                      </h4>
                      <p className="text-sm text-gray-600">
                        Cloud & DevOps Solutions
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {azureUpdates.map((update, index) => (
                      <div
                        key={index}
                        className="p-4 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <update.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                          <div>
                            <h5 className="font-bold text-gray-900 mb-2">
                              {update.title}
                            </h5>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {update.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Guinness Operations Section */}
      {/* <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
        <div className="px-6 py-6 bg-gradient-to-r from-amber-50 to-yellow-50">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#d97706" }}
            >
              <Beer className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Guinness Operations
              </h3>
              <p className="text-sm text-gray-600">Operational Resilience</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            {guinnessUpdates.map((update, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100"
              >
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">
                    {update.title}
                  </h5>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {update.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </motion.div>
  );
};

export default Q3ITInfrastructureSection;
