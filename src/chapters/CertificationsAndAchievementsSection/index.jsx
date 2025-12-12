import React, { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Users,
  Calendar,
  MapPin,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Rocket,
} from "lucide-react";

const CertificationsAndAchievementsSection = forwardRef((_props, gitexRef) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [expandedSections, setExpandedSections] = useState({
    workshopsAttended: false,
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

  const certifications = [
    "Microsoft Azure Solutions Architect",
    "SAP S/4HANA Financial Accounting",
    "AWS Cloud Practitioner",
    "Microsoft Power BI Data Analyst",
    "SAP Business Technology Platform",
  ];

  const photos = [
    {
      src: "/training1.jpg",
      caption: "Online Azure Certification Training Session",
    },
    {
      src: "/training2.jpg",
      caption: "SAP Implementation Workshop",
    },
    {
      src: "/training3.jpg",
      caption: "Cloud Computing Masterclass",
    },
    {
      src: "/training4.jpg",
      caption: "Data Analytics Training Session",
    },
  ];

  return (
    <section
      ref={gitexRef}
      id="achievements"
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
          id="achievements-header"
        >
          <div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 md:mb-8 shadow-lg"
            style={{ backgroundColor: "#1e40af" }}
          >
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="font-bold text-white text-xs sm:text-xs tracking-wide">
              ACHIEVEMENTS
            </span>
            <span className="text-white/70 hidden sm:inline">•</span>
            <span className="font-semibold text-white text-xs sm:text-xs">
              Q3 2025
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-4 md:mb-6 px-2">
            INVESTING IN{" "}
            <span style={{ color: "#1e40af" }} className="block sm:inline">
              PROFESSIONAL GROWTH
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed text-center px-4">
            Our commitment to continuous learning and professional development
            has resulted in significant achievements across various
            technological domains.
          </p>
        </motion.div>

        {/* Achievements Stats */}
        <motion.div variants={itemVariants} className="mb-8 md:mb-12">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl border border-blue-100 overflow-hidden">
            <div className="px-4 sm:px-6 md:px-8 py-6 md:py-8">
              {/* Stats Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                    style={{ backgroundColor: "#1e40af" }}
                  >
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      Certified Professionals
                    </h4>
                    <p className="text-blue-600 font-semibold text-2xl mb-1">
                      5
                    </p>
                    <p className="text-sm text-gray-600">
                      Microsoft & Azure, SAP and Other Fields
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                    style={{ backgroundColor: "#1e40af" }}
                  >
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      Online Training
                    </h4>
                    <p className="text-blue-600 font-semibold text-2xl mb-1">
                      2900+
                    </p>
                    <p className="text-sm text-gray-600">
                      Hours of Virtual Learning
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                    style={{ backgroundColor: "#1e40af" }}
                  >
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      Offline Training
                    </h4>
                    <p className="text-blue-600 font-semibold text-2xl mb-1">
                      175+
                    </p>
                    <p className="text-sm text-gray-600">
                      Hours of In-Person Training
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
});

export default CertificationsAndAchievementsSection;
