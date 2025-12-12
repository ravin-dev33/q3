import React, { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp } from "lucide-react";
import Q3SalesSection from "./sections/Q3SalesSection";

const SalesSection = forwardRef((_props, salesRef) => {
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
      ref={salesRef}
      id="sales"
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
          id="sales-header"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 shadow-lg"
            style={{ backgroundColor: "#e4002b" }}
          >
            <TrendingUp className="w-5 h-5 text-white" />
            <span className="font-bold text-white text-xs tracking-wide">
              CHAPTER 07
            </span>
            <span className="text-white/70">•</span>
            <span className="font-semibold text-white text-xs">
              DIGITAL-FIRST SALES INNOVATIONS
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-6">
            DIGITAL-FIRST <span style={{ color: "#e4002b" }}>SALES</span>
          </h2>

          <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed text-justify">
            Q3 2025 Sales achievements across MCPL Nigeria (Salesman Incentive
            application, EPOD compliance dashboard), MCPL Ghana (Omnione apps),
            and Guinness (10+ digital initiatives including EPOD, RGB,
            Distributor Apps, and Omnione platform rollout).
          </p>
        </motion.div>

        {/* Q3 2025 Sales Updates */}
        <Q3SalesSection />
      </motion.div>
    </section>
  );
});

export default SalesSection;
