import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  ArrowRight,
  Smartphone,
  CreditCard,
  FileText,
  CheckCircle,
  Users,
  Shield,
  Truck,
  Wallet,
  Workflow,
  Target,
  Zap,
  Clock,
} from "lucide-react";

const SalesWorkflowSection = () => {
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

  const primaryFlow = [
    {
      step: "Order Placement",
      detail: "Powered by the Distributor App",
      icon: Smartphone,
    },
    {
      step: "Order Payments",
      detail: "Seamlessly processed via the Digital Wallet",
      icon: CreditCard,
    },
    {
      step: "Bank Receipt Generation",
      detail: "Automated through BR Automation",
      icon: FileText,
    },
    {
      step: "Invoicing & Supply",
      detail: "Digitally validated with EPOD",
      icon: CheckCircle,
    },
  ];

  const secondaryFlow = [
    {
      step: "Customer Creation",
      detail: "Geo-tagged and coordinated",
      icon: Users,
    },
    {
      step: "Stock Pick & Delivery",
      detail: "Secured using OTP Authentication",
      icon: Shield,
    },
    {
      step: "Route Planning",
      detail: "Scheduled digitally with 3-day/6-day delivery models",
      icon: Truck,
    },
    {
      step: "Payments & Reconciliation",
      detail: "Managed efficiently via the Secondary Wallet",
      icon: Wallet,
    },
  ];

  return (
    <motion.div variants={itemVariants} className="mb-10" id="sales-workflow">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-red-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Text Content - Spans 3 Columns */}
          <div className="order-1 md:order-1 md:col-span-1 lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#e4002b" }}
              >
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  🔄 Optimized Sales Workflow in Action
                </h3>
                <p className="text-base text-gray-600">
                  Streamlined Digital Journey
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              Take a closer look at how our digital tools are shaping a
              streamlined sales journey from customer creation to payment
              reconciliation—removing manual bottlenecks and enhancing
              operational agility.
            </p>
          </div>

          {/* Sales Flows */}
          <div className="order-3 col-span-1 md:col-span-2 lg:col-span-4 space-y-6">
            {/* Primary Sales Flow */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#e4002b" }}
                >
                  <span className="text-white text-sm font-bold">P</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900">
                  🔷 Primary Sales Flow
                </h4>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {primaryFlow.map((step, index) => (
                  <div key={index} className="relative">
                    <div
                      className="bg-white/70 rounded-lg p-4 border-2 border-dashed h-full"
                      style={{ borderColor: "#e4002b40" }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon
                          className="w-6 h-6"
                          style={{ color: "#e4002b" }}
                        />
                        <span className="font-semibold text-gray-800 text-sm">
                          {step.step}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                    {index < primaryFlow.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <div
                          className="w-4 h-4 rounded-full bg-white border-2 flex items-center justify-center"
                          style={{ borderColor: "#e4002b" }}
                        >
                          <ArrowRight
                            className="w-2 h-2"
                            style={{ color: "#e4002b" }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Sales Flow */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#e4002b" }}
                >
                  <span className="text-white text-sm font-bold">S</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900">
                  🔸 Secondary Sales Flow
                </h4>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {secondaryFlow.map((step, index) => (
                  <div key={index} className="relative">
                    <div
                      className="bg-white/70 rounded-lg p-4 border-2 border-dashed h-full"
                      style={{ borderColor: "#e4002b40" }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon
                          className="w-6 h-6"
                          style={{ color: "#e4002b" }}
                        />
                        <span className="font-semibold text-gray-800 text-sm">
                          {step.step}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                    {index < secondaryFlow.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <div
                          className="w-4 h-4 rounded-full bg-white border-2 flex items-center justify-center"
                          style={{ borderColor: "#e4002b" }}
                        >
                          <ArrowRight
                            className="w-2 h-2"
                            style={{ color: "#e4002b" }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Summary */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200/50">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6" style={{ color: "#e4002b" }} />
                <h4 className="text-lg font-bold text-gray-900">
                  Operational Benefits
                </h4>
              </div>
              <p className="text-gray-700 mb-6 text-center font-medium">
                These flows ensure <strong>real-time tracking</strong>,{" "}
                <strong>reduced manual errors</strong>, and{" "}
                <strong>faster turnarounds</strong>, allowing teams to focus
                more on growth and less on administrative tasks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-red-900" />
                    <span className="font-medium text-black">
                      Real-time Tracking
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Live visibility across all sales processes
                  </p>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-red-900" />
                    <span className="font-medium text-black">
                      Reduced Errors
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Automated validation and verification
                  </p>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-red-900" />
                    <span className="font-medium text-black">
                      Faster Turnarounds
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Streamlined processing and delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SalesWorkflowSection;
