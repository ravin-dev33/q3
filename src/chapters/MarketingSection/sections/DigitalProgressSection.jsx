import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  BarChart3,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Users,
  Target,
  TrendingUp,
  Package,
  ShoppingCart,
  Award,
  Zap,
  Eye,
  Activity,
  PieChart,
  Layers,
} from "lucide-react";

const DigitalProgressSection = () => {
  const [expandedSections, setExpandedSections] = useState({
    digitalProgress: false,
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

  const brands = [
    "Lush Hair",
    "Munch It",
    "Power Oil",
    "Minimie",
    "Colgate",
    "HTC",
    "Hypo Bleach",
    "Indomie",
    "Go Grains",
    "Kellogg's",
  ];

  const reportingAreas = [
    {
      title: "Sales & Market Performance",
      description:
        "Granular insights on sales targets vs. achievements, SKU performance, and retail audit data",
      icon: TrendingUp,
      color: "#1e40af",
    },
    {
      title: "Marketing & Activation Effectiveness",
      description:
        "Detailed analytics on various sampling campaigns, promotions, and new product awareness initiatives",
      icon: Target,
      color: "#059669",
    },
    {
      title: "Operational Control",
      description:
        "Improved tracking of inventory, item issuance, and in-market assets",
      icon: Package,
      color: "#7c3aed",
    },
  ];

  return (
    <motion.div variants={itemVariants} className="mb-10" id="digital-progress">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-red-200/50">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#e4002b" }}
            >
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black">
                Digital Progress & Enhanced Reporting
              </h3>
              <p className="text-base text-gray-600">
                Advanced Analytics & Data Insights Across 10 Key Brands
              </p>
            </div>
          </div>

          <p className="text-base text-gray-700 leading-relaxed mb-8">
            We've significantly enhanced our digital reporting capabilities,
            delivering deeper data insights across 10 key brands. Our refined
            reports provide critical visibility and empower faster, more
            informed decision-making to optimize efforts and strengthen our
            market position.
          </p>
        </div>

        {/* Key Brands Grid */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
            Enhanced Reporting Coverage
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-3 text-center border border-red-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-sm font-medium text-gray-800">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reporting Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {reportingAreas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-white/60 rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
                  style={{ backgroundColor: "#e4002b" }}
                >
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="text-lg font-bold text-gray-900 mb-2">
                    {area.title}
                  </h5>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DigitalProgressSection;
