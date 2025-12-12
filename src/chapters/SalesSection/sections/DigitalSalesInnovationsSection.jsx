import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  TrendingUp,
  Wallet,
  Shield,
  MapPin,
  Smartphone,
  CheckCircle,
  Zap,
  Target,
} from "lucide-react";

const DigitalSalesInnovationsSection = () => {
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

  const innovations = [
    {
      icon: Wallet,
      title: "Secondary Wallet Enhancements",
      description:
        "Designed to improve visibility, monitoring, and turnaround time for payment reconciliation.",
    },
    {
      icon: Shield,
      title: "Sales Contact Validation",
      description:
        "Real-time API integration with SuccessFactors to block unauthorized sales contacts during customer onboarding.",
    },
    {
      icon: MapPin,
      title: "EPoD Phase 2 Implementation",
      description:
        "Geo-fencing controls ensure delivery confirmation only occurs when vehicles enter a defined geo-ring, boosting authenticity and accuracy.",
    },
    {
      icon: Smartphone,
      title: "Primary Wallet Launch – Ghana",
      description:
        "Seamless digital order placement now enabled, streamlining operations for distributors.",
    },
    {
      icon: CheckCircle,
      title: "EPoD Activation for Distributors",
      description:
        "Ensures accurate and validated delivery experiences across the distribution network.",
    },
    {
      icon: TrendingUp,
      title: "Guinness – Full Digital Sales Suite Deployment",
      description:
        "Complete go-live of the Primary App, Primary Wallet, Secondary App, and Secondary Wallet, marking the full activation of our end-to-end digital sales stack.",
    },
  ];

  return (
    <motion.div
      variants={itemVariants}
      className="mb-10"
      id="digital-sales-innovations"
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
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  🚀 Digital-First Sales Innovations
                </h3>
                <p className="text-base text-gray-600">
                  Empowering Sales Ecosystem
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              At Multipro, we're advancing toward a digitally empowered sales
              ecosystem with a focus on transparency, speed, and control.
              Several impactful improvements were rolled out to strengthen order
              management, delivery validation, and financial reconciliation.
              Here's a snapshot of what's new:
            </p>
          </div>

          {/* Image Column - First Position */}
          <div className="order-2 md:order-2 flex h-full justify-center lg:justify-start">
            <img
              src="/sales.png"
              alt="Sales"
              className="w-full max-w-sm lg:max-w-none object-contain"
            />
          </div>

          {/* All Innovations List */}
          <div className="order-3 col-span-1 md:col-span-2 lg:col-span-4 -mt-4">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/50 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6" style={{ color: "#e4002b" }} />
                <h4 className="text-lg font-bold text-gray-900">
                  🔍 Key Innovations
                </h4>
              </div>
              <div className="space-y-5">
                {innovations.map((innovation, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <innovation.icon
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "#e4002b" }}
                    />
                    <div>
                      <span className="font-semibold text-gray-900">
                        {innovation.title}:
                      </span>{" "}
                      <span className="text-gray-700">
                        {innovation.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Card */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200/50">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6" style={{ color: "#e4002b" }} />
                <h4 className="text-lg font-bold text-gray-900">
                  Strategic Impact
                </h4>
              </div>
              <p className="text-gray-700 mb-4">
                These innovations represent a comprehensive approach to sales
                digitalization, focusing on three core pillars:{" "}
                <strong>transparency</strong> in operations,{" "}
                <strong>speed</strong> in processing, and{" "}
                <strong>control</strong> over the entire sales ecosystem. The
                implementation spans order management, delivery validation, and
                financial reconciliation processes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-red-900" />
                    <span className="font-medium text-black">Transparency</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Enhanced visibility across operations
                  </p>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-red-900" />
                    <span className="font-medium text-black">Speed</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Faster processing and turnarounds
                  </p>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-red-900" />
                    <span className="font-medium text-black">Control</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Complete ecosystem management
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

export default DigitalSalesInnovationsSection;
