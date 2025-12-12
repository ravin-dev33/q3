import { useState, useEffect, forwardRef } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Settings,
  Database,
  CheckCircle,
  Calendar,
  Building,
  Globe,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Shield,
  FileText,
  BarChart3,
  Clock,
  MapPin,
} from "lucide-react";
import CurrentImplementationUpcomingMilestonesSection from "./sections/CurrentImplementationUpcomingMilestonesSection";
import StrategicImportanceNextStepsSection from "./sections/StrategicImportanceNextStepsSection";

const SAPImplementationSection = forwardRef((_props, sapRef) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
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
    <section
      ref={sapRef}
      id="sap-implementation"
      className="relative py-8 md:py-16 overflow-hidden px-4 md:px-6"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-2 sm:px-4"
      >
        {/* Chapter Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8 md:mb-14 relative"
          id="sap-implementation-header"
        >
          {/* Decorative gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/30 to-transparent blur-3xl -z-10"></div>

          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl mb-10 glass-card-hover shadow-2xl hover:scale-105 transition-transform duration-300 relative overflow-hidden group border-2 border-red-500/30">
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="p-2 bg-red-500/20 rounded-lg border border-red-400/30">
              <Settings className="w-6 h-6 text-red-400" />
            </div>
            <span className="font-black text-white text-base tracking-wider relative z-10">
              CHAPTER 01
            </span>
            <span className="text-white/50">•</span>
            <span className="font-bold text-red-300 text-base tracking-wide relative z-10">
              SAP IMPLEMENTATION
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight mb-6 md:mb-8 px-2">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              SAP IMPLEMENTATION
            </span>
            {" & "}
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent block sm:inline drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
              DIGITAL TRANSFORMATION
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-center px-4 font-medium">
            Our Q3 2025 SAP implementation program delivered significant
            operational improvements and digital capabilities across the
            organization. By executing a series of strategic go-lives, we have
            successfully enhanced warehouse management, streamlined financial
            processes, and established a robust platform for future growth and
            integration.
          </p>
        </motion.div>

        {/* 1. Current Implementation & Upcoming Milestones */}
        <CurrentImplementationUpcomingMilestonesSection />

        {/* 2. Strategic Importance & Next Steps */}
        {/* <StrategicImportanceNextStepsSection /> */}
      </motion.div>
    </section>
  );
});

export default SAPImplementationSection;
