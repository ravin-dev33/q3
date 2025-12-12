import React, { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  DollarSign,
  CreditCard,
  FileText,
  Building,
  Database,
  TrendingUp,
  CheckCircle,
  Receipt,
  Banknote,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Q3FinanceSection from "./sections/Q3FinanceSection";

const FinanceAutomationsSection = forwardRef((_props, financeRef) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  // State for expandable sections
  const [expandedSections, setExpandedSections] = useState({
    financialOps: false,
    creditExpense: false,
    egyptInvoicing: false,
    vcfAsset: false,
    bankIntegration: false,
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
      ref={financeRef}
      id="finance-automations"
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
          className="text-center mb-12"
          id="finance-automations-header"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 shadow-lg"
            style={{ backgroundColor: "#e4002b" }}
          >
            <DollarSign className="w-5 h-5 text-white" />
            <span className="font-bold text-white text-xs tracking-wide">
              CHAPTER 05
            </span>
            <span className="text-white/70">•</span>
            <span className="font-semibold text-white text-xs">
              FINANCE & AUTOMATIONS
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-6">
            FINANCIAL <span style={{ color: "#e4002b" }}>AUTOMATIONS</span>
          </h2>

          <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed text-center">
            Q3 2025 Finance updates include the Asset Verification Portal for
            Dufil & MCPL, with 2,246 assets verified at MCPL and 1100 assets
            verified through the portal at Dufil, plus successful Bank
            Reconciliation completion for Stanbic, GTB, First Bank, and FCMB.
          </p>
        </motion.div>

        {/* Q3 2025 Finance Updates */}
        <Q3FinanceSection />
      </motion.div>
    </section>
  );
});

export default FinanceAutomationsSection;
