import { useState, useEffect, forwardRef } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Database,
  FileText,
  Shield,
  TrendingUp,
  Activity,
  CheckCircle,
  BarChart3,
  Factory,
  Cpu,
  Zap,
  Settings,
  Monitor,
  Target,
  Brain,
  Award,
  Calendar,
  PlayCircle,
  Workflow,
  Users,
  Lock,
  GitBranch,
  Layers,
  Network,
  Eye,
  Gauge,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Scale,
  Server,
  Wrench,
  UserCheck,
  MapPin,
} from "lucide-react";
import Q3ManufacturingSection from "./sections/Q3ManufacturingSection";

const ManufacturingSection = forwardRef((_props, manufacturingRef) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  // State for expandable sections
  const [expandedSections, setExpandedSections] = useState({
    dataSync: false,
    kpiViz: false,
    industry40: false,
    processAutomation: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

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
      ref={manufacturingRef}
      id="manufacturing"
      className="relative py-16 overflow-hidden px-6"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Chapter Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-10"
          id="manufacturing-header"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 glass-card-hover shadow-2xl border-2 border-blue-500/30">
            <Factory className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-white text-xs tracking-wide">
              CHAPTER 04
            </span>
            <span className="text-white/50">•</span>
            <span className="font-semibold text-blue-300 text-xs">
              MANUFACTURING
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            SMART <span className="text-blue-400">MANUFACTURING</span>
          </h2>

          <p className="text-base text-gray-300 max-w-4xl mx-auto leading-relaxed text-justify">
            Manufacturing analytics and digitalization efforts progressed with
            the onboarding of the Lush and Kellogg's entities to the
            Manufacturing Power BI suite. Development of the overall
            Manufacturing Power BI platform is now at 91% completion. Key
            automation initiatives advanced, including the rollout of an
            IIoT-based solution integrating downtime monitoring and co-product
            weighment, alongside the continued implementation of the e-signing
            application.
          </p>
        </motion.div>

        {/* Q3 2025 Manufacturing Updates */}
        <Q3ManufacturingSection />
      </motion.div>
    </section>
  );
});

export default ManufacturingSection;
