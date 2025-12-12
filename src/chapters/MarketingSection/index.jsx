import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  Sparkles,
  Heart,
  Target,
  Settings,
  BarChart3,
} from "lucide-react";
import Q3MarketingSection from "./sections/Q3MarketingSection";

const MarketingSection = forwardRef((_props, marketingRef) => {
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
      ref={marketingRef}
      id="marketing"
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
          id="marketing-header"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 shadow-lg"
            style={{ backgroundColor: "#e4002b" }}
          >
            <TrendingUp className="w-5 h-5 text-white" />
            <span className="font-bold text-white text-xs tracking-wide">
              CHAPTER 03
            </span>
            <span className="text-white/70">•</span>
            <span className="font-semibold text-white text-xs">
              MARKETING & DIGITAL INNOVATION
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-6">
            MARKETING & <span style={{ color: "#e4002b" }}>INNOVATION</span>
          </h2>

          <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed text-justify">
            Q3 2025 showcased groundbreaking AI-powered campaigns and digital
            innovations, including the Addme Chatbot, Colgate BBN Yanga
            campaign. Nigeria's first brand-driven AI podcast, transforming
            customer engagement across all touchpoints.
          </p>
        </motion.div>

        {/* Q3 2025 Marketing Projects */}
        <Q3MarketingSection />
      </motion.div>
    </section>
  );
});

export default MarketingSection;
