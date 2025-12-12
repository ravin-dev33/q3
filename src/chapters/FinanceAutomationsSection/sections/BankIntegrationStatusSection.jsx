import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Banknote,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  PauseCircle,
  Building,
  TrendingUp,
  Activity,
  Award,
  Target,
  BarChart3,
  Users,
  AlertCircle,
  Settings,
  FileText,
} from "lucide-react";

const StatusBadge = ({ status }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case "Live":
        return {
          bg: "bg-red-100",
          text: "text-red-800",
          border: "border-red-200",
          icon: CheckCircle,
        };
      case "In Progress":
        return {
          bg: "bg-blue-100",
          text: "text-blue-800",
          border: "border-blue-200",
          icon: Clock,
        };
      case "On Hold":
        return {
          bg: "bg-yellow-100",
          text: "text-yellow-800",
          border: "border-yellow-200",
          icon: PauseCircle,
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-800",
          border: "border-gray-200",
          icon: AlertCircle,
        };
    }
  };

  const config = getStatusConfig(status);
  const Icon = config.icon;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${config.bg} ${config.text} ${config.border}`}
    >
      <Icon className="w-4 h-4" />
      {status}
    </div>
  );
};

const BankIntegrationStatusSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    bankIntegration: false,
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

  const bankIntegrationData = [
    {
      status: "Live",
      bank: "GT",
      company: "Dufil, Guinness",
      notes: "Integrations fully operational",
    },
    {
      status: "Live",
      bank: "STANBIC",
      company: "MCPL, Guinness",
      notes: "Live",
    },
    {
      status: "Live",
      bank: "FCMB",
      company: "Guinness, MCPL",
      notes: "Live",
    },
    {
      status: "Live",
      bank: "FirstBank",
      company: "Guinness",
      notes: "Live",
    },
    {
      status: "In Progress",
      bank: "RMB",
      company: "Dufil",
      notes: "Awaiting SAP review of MT940 sample data",
    },
    {
      status: "In Progress",
      bank: "STANBIC",
      company: "Dufil",
      notes: "Waiting for live API credentials",
    },
    {
      status: "In Progress",
      bank: "FCMB",
      company: "Dufil",
      notes: "Documents pending from business side",
    },
    {
      status: "In Progress",
      bank: "Standard Chartered",
      company: "Dufil",
      notes: "Profile created in test; waiting for API access confirmation",
    },
    {
      status: "In Progress",
      bank: "Coronation",
      company: "Dufil",
      notes: "Awaiting response on account number addition in API",
    },
    {
      status: "In Progress",
      bank: "Globus Bank",
      company: "Dufil",
      notes: "Waiting for MT940 format from bank",
    },
    {
      status: "In Progress",
      bank: "FirstBank",
      company: "Dufil",
      notes: "Awaiting business input for credentials",
    },
    {
      status: "On Hold",
      bank: "Access Bank",
      company: "Dufil, Guinness, MCPL",
      notes: "Awaiting API details and resolution",
    },
    {
      status: "On Hold",
      bank: "ZenithBank",
      company: "Guinness",
      notes: "Documents shared by bank; business yet to complete",
    },
    {
      status: "On Hold",
      bank: "ZenithBank",
      company: "MCPL",
      notes: "Transaction type flagged; bank informed",
    },
    {
      status: "On Hold",
      bank: "UBA",
      company: "MCPL",
      notes: "SAP entries shared; awaiting feedback from business",
    },
    {
      status: "On Hold",
      bank: "Union Bank",
      company: "MCPL",
      notes: "Credential process initiated; test data validated",
    },
  ];

  const getStatusCounts = () => {
    const counts = {
      Live: 0,
      "In Progress": 0,
      "On Hold": 0,
    };

    bankIntegrationData.forEach((item) => {
      counts[item.status]++;
    });

    return counts;
  };

  const statusCounts = getStatusCounts();

  return (
    <motion.div
      variants={itemVariants}
      className="mb-10"
      id="bank-integration-status"
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-red-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#e4002b" }}
              >
                <Banknote className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Bank Integration Status
                </h3>
                <p className="text-base text-gray-600">
                  Comprehensive Integration Tracking
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              Our comprehensive bank integration strategy is delivering
              significant progress with 4 banks live, 7 in development, and
              systematic approach to resolving pending integrations across all
              business entities including Dufil, Guinness, and MCPL.
            </p>
          </div>

          {/* Image Column - Placeholder for Bank Integration illustration */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <img
              src="/bank.png"
              alt="AI in Manufacturing"
              className="w-full max-w-sm lg:max-w-none object-contain"
            />
          </div>

          {/* Stats Card - Spans full width on smaller screens */}
          <div className="order-3 col-span-1 md:col-span-2 lg:col-span-4 ">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-6 h-6" style={{ color: "#e4002b" }} />
                <h4 className="text-lg font-bold text-gray-900">
                  Integration Status Overview
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-red-700" />
                    <span className="font-medium text-black">
                      Live Banks: {statusCounts.Live}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    GT, STANBIC, FCMB, FirstBank operational
                  </p>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-blue-700" />
                    <span className="font-medium text-black">
                      In Progress: {statusCounts["In Progress"]}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Active development and testing phase
                  </p>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <PauseCircle className="w-4 h-4 text-yellow-700" />
                    <span className="font-medium text-black">
                      On Hold: {statusCounts["On Hold"]}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Awaiting external dependencies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Initiatives Preview - Spans full width */}
          {/* <div className="order-4 col-span-1 md:col-span-2 lg:col-span-4 flex items-end justify-st h-full">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">4 Banks Live</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">7 In Development</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">5 On Hold</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#e4002b" }}
                />
                <span className="text-sm text-gray-600">All Entities</span>
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                <button
                  onClick={() => toggleSection("bankIntegration")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#e4002b" }}
                >
                  {expandedSections.bankIntegration ? (
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
          </div> */}

          {/* Expanded Content */}
          <AnimatePresence>
            {expandedSections.bankIntegration && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-5 space-y-6 col-span-1 md:col-span-2 lg:col-span-4"
              >
                {/* Status Overview */}
                {/* <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3
                      className="w-6 h-6"
                      style={{ color: "#e4002b" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Integration Status Overview
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-red-700" />
                        <span className="font-medium text-black">
                          Live Banks: {statusCounts.Live}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        GT, STANBIC, FCMB, FirstBank operational
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-blue-700" />
                        <span className="font-medium text-black">
                          In Progress: {statusCounts["In Progress"]}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Active development and testing phase
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <PauseCircle className="w-4 h-4 text-yellow-700" />
                        <span className="font-medium text-black">
                          On Hold: {statusCounts["On Hold"]}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Awaiting external dependencies
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* Detailed Integration Table */}
                {/* <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Building
                      className="w-6 h-6"
                      style={{ color: "#e4002b" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Detailed Integration Status
                    </h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-3 font-semibold text-gray-700 text-sm">
                            Status
                          </th>
                          <th className="text-left py-3 px-3 font-semibold text-gray-700 text-sm">
                            Bank
                          </th>
                          <th className="text-left py-3 px-3 font-semibold text-gray-700 text-sm">
                            Company
                          </th>
                          <th className="text-left py-3 px-3 font-semibold text-gray-700 text-sm">
                            Notes
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {bankIntegrationData.map((item, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200"
                          >
                            <td className="py-3 px-3">
                              <StatusBadge status={item.status} />
                            </td>
                            <td className="py-3 px-3">
                              <div className="font-semibold text-gray-900 text-sm">
                                {item.bank}
                              </div>
                            </td>
                            <td className="py-3 px-3">
                              <div className="text-gray-700 text-sm">
                                {item.company}
                              </div>
                            </td>
                            <td className="py-3 px-3">
                              <div className="text-gray-600 text-xs leading-relaxed">
                                {item.notes}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div> */}

                {/* Integration Progress Summary */}
                {/* <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp
                      className="w-6 h-6"
                      style={{ color: "#e4002b" }}
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      Integration Progress Summary
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Total Banks
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            16
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Live Operations
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            4
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Success Rate
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            25%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            In Development
                          </span>
                          <span className="text-lg font-bold text-blue-600">
                            7
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Pending Resolution
                          </span>
                          <span className="text-lg font-bold text-yellow-600">
                            5
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            Completion Target
                          </span>
                          <span className="text-lg font-bold text-red-600">
                            75%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Placeholder for Bank Integration illustrations */}
                {/* <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Visual Overview
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-200 rounded-xl p-8 text-center">
                      <div className="w-full h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                        <BarChart3 className="w-8 h-8 text-gray-500" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Integration Dashboard - Real-time status tracking
                      </p>
                    </div>
                    <div className="bg-gray-200 rounded-xl p-8 text-center">
                      <div className="w-full h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-gray-500" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Progress Timeline - Project milestones and completion
                      </p>
                    </div>
                  </div>
                </div> */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default BankIntegrationStatusSection;
