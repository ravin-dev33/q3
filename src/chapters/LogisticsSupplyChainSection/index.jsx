import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Truck,
  Package,
  Shield,
  BarChart3,
  Settings,
  Target,
} from "lucide-react";
import Q3LogisticsSection from "./sections/Q3LogisticsSection";

const LogisticsSupplyChainSection = forwardRef((_props, logisticsRef) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
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
    <section ref={logisticsRef} id="logistics" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Chapter Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-10"
            id="logistics-header"
          >
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 shadow-lg"
              style={{ backgroundColor: "#1e40af" }}
            >
              <Truck className="w-5 h-5 text-white" />
              <span className="font-bold text-white text-xs tracking-wide">
                CHAPTER 06
              </span>
              <span className="text-white/70">•</span>
              <span className="font-semibold text-white text-xs cap">
                LOGISTICS & SUPPLY
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-6">
              <span style={{ color: "#1e40af" }}>SUPPLY CHAIN</span>
            </h2>

            <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed text-justify">
              Q3 2025 Supply Chain Digitalization include introduction of ML
              based forecast algorithms in the forecasting application, STO RPA
              automation, RGB, Stock coverage, SO & Invoice run rate,
              Procurement lead time (PO to GR), and landed cost dashboards.
            </p>
          </motion.div>

          {/* Q3 2025 Logistics Updates */}
          <Q3LogisticsSection />
        </motion.div>
      </div>
    </section>
  );
});

export default LogisticsSupplyChainSection;
