import { useState, useEffect, forwardRef } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  GraduationCap,
  Users,
  BookOpen,
  Target,
  TrendingUp,
  Award,
  Brain,
  Cloud,
  BarChart3,
} from "lucide-react";

// Import section components
import TrainingInitiativesSection from "./sections/TrainingInitiativesSection";

const LearningDevelopmentSection = forwardRef((_props, learningRef) => {
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
      ref={learningRef}
      id="learning-development"
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
          className="text-center mb-6 md:mb-10"
          id="learning-development-header"
        >
          <div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 md:mb-8 shadow-lg"
            style={{ backgroundColor: "#1e40af" }}
          >
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="font-bold text-white text-xs sm:text-xs tracking-wide">
              CHAPTER 08
            </span>
            <span className="text-white/70 hidden sm:inline">•</span>
            <span className="font-semibold text-white text-xs sm:text-xs">
              LEARNING & DEVELOPMENT
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-4 md:mb-6 px-2">
            LEARNING & <span style={{ color: "#1e40af" }} className="block sm:inline">DEVELOPMENT</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed text-center sm:text-justify px-4">
            Investing in our talent through strategic training initiatives and 
            continuous professional growth opportunities that drive innovation and excellence.
          </p>
        </motion.div>

        {/* Training Initiatives Section */}
        <TrainingInitiativesSection />
      </motion.div>
    </section>
  );
});

LearningDevelopmentSection.displayName = "LearningDevelopmentSection";

export default LearningDevelopmentSection;