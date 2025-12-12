import React, { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Shield,
  Server,
  Lock,
  Users,
  Monitor,
  Globe,
  ShieldCheck,
  Database,
  Eye,
  Key,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Q3ITInfrastructureSection from "./sections/Q3ITInfrastructureSection";

const ITInfrastructureSection = forwardRef((_props, itRef) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  // State for expandable sections
  const [expandedSections, setExpandedSections] = useState({
    cybersecurity: false,
    secureAccess: false,
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
      ref={itRef}
      id="it-infrastructure"
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
          id="it-infrastructure-header"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 shadow-lg"
            style={{ backgroundColor: "#1e40af" }}
          >
            <Shield className="w-5 h-5 text-white" />
            <span className="font-bold text-white text-xs tracking-wide">
              CHAPTER 02
            </span>
            <span className="text-white/70">•</span>
            <span className="font-semibold text-white text-xs">
              IT INFRASTRUCTURE & CYBERSECURITY
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-6">
            SECURE <span style={{ color: "#1e40af" }}>INFRASTRUCTURE</span>
          </h2>

          <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed text-justify">
            Q3 2025 delivered foundational IT improvements, driving heightened
            security, resilience, and operational efficiency across network,
            cloud, and identity systems.
          </p>
        </motion.div>

        {/* Q3 2025 IT Infrastructure Updates */}
        <Q3ITInfrastructureSection />
      </motion.div>
    </section>
  );
});

export default ITInfrastructureSection;
