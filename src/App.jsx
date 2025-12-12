/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import "./styles/index.css";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/layout/Navigation";
import HeroSection from "./chapters/HeroSection";

import SAPImplementationSection from "./chapters/SAPImplementationSection";
import GITEXSection from "./chapters/GITEXSection";
import ManufacturingSection from "./chapters/ManufacturingSection";
import ITInfrastructureSection from "./chapters/ITInfrastructureSection";
import FinanceAutomationsSection from "./chapters/FinanceAutomationsSection";
import MarketingSection from "./chapters/MarketingSection";
import LogisticsSupplyChainSection from "./chapters/LogisticsSupplyChainSection";
import SalesSection from "./chapters/SalesSection";
import Particles from "./components/Particles";
import CertificationsAndAchievementsSection from "./chapters/CertificationsAndAchievementsSection";

import {
  sapImplementationSections,
  gitexConferenceSections,
  manufacturingSections,
  itInfrastructureSections,
  financeAutomationsSections,
  marketingSections,
  logisticsSupplyChainSections,
  salesSections,
  chapters,
} from "./lib/constants";

import {
  Factory,
  Brain,
  Shield,
  DollarSign,
  Truck,
  TrendingUp,
  Settings,
  Users,
  Award,
} from "lucide-react";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(
    "sap-implementation-header"
  );
  const [activeChapter, setActiveChapter] = useState("sap-implementation");
  const isNavigationScrollRef = useRef(false);
  const navigationTimeoutRef = useRef(null);
  const scrollDisabledRef = useRef(false);

  useEffect(() => {
    let isScrolling = false;
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      const manufacturingSection = document.getElementById("manufacturing");
      const manufacturingHeader = document.getElementById(
        "manufacturing-header"
      );
      const sapImplementationSection =
        document.getElementById("sap-implementation");
      const sapImplementationHeader = document.getElementById(
        "sap-implementation-header"
      );
      const gitexConferenceSection =
        document.getElementById("gitex-conference");
      const gitexConferenceHeader = document.getElementById(
        "gitex-conference-header"
      );
      const itInfrastructureSection =
        document.getElementById("it-infrastructure");
      const itInfrastructureHeader = document.getElementById(
        "it-infrastructure-header"
      );
      const financeAutomationsSection = document.getElementById(
        "finance-automations"
      );
      const financeAutomationsHeader = document.getElementById(
        "finance-automations-header"
      );
      const marketingSection = document.getElementById("marketing");
      const marketingHeader = document.getElementById("marketing-header");
      const logisticsSection = document.getElementById("logistics");
      const logisticsHeader = document.getElementById("logistics-header");
      const salesSection = document.getElementById("sales");
      const salesHeader = document.getElementById("sales-header");
      const viewportHeight = window.innerHeight;

      // Navigation detection
      const isNavigating =
        isNavigationScrollRef.current || window.isNavigationScrolling;

      // Update last scroll position for direction detection
      lastScrollY = currentScrollY;

      // FIXED: Skip section detection during navigation to prevent interference
      if (isNavigating) {
        return;
      }

      // Determine which chapter is currently active
      let currentChapter = "sap-implementation";
      let currentSection = null;

      const sections = [
        { id: "sap-implementation", element: sapImplementationSection },
        { id: "gitex-conference", element: gitexConferenceSection },
        { id: "it-infrastructure", element: itInfrastructureSection },
        { id: "marketing", element: marketingSection },
        { id: "manufacturing", element: manufacturingSection },
        { id: "finance-automations", element: financeAutomationsSection },
        { id: "logistics", element: logisticsSection },
        { id: "sales", element: salesSection },
      ];

      // Find the section that's most prominently visible
      sections.forEach((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();

          if (rect.bottom > 0 && rect.top < viewportHeight) {
            if (rect.top <= viewportHeight * 0.6) {
              currentChapter = section.id;
              currentSection = section.element;
            }
          }
        }
      });

      if (currentSection) {
        // Calculate overall scroll progress through current section
        const rect = currentSection.getBoundingClientRect();
        const sectionHeight = currentSection.offsetHeight;
        const scrolled = Math.max(0, -rect.top);
        const progress = Math.min(
          100,
          (scrolled / (sectionHeight - viewportHeight)) * 100
        );
        setScrollProgress(progress);

        // Update active chapter FIRST
        setActiveChapter(currentChapter);

        // Get sections for the current chapter
        const currentSections = (() => {
          switch (currentChapter) {
            case "sap-implementation":
              return sapImplementationSections;
            case "gitex-conference":
              return gitexConferenceSections;
            case "it-infrastructure":
              return itInfrastructureSections;
            case "marketing":
              return marketingSections;
            case "manufacturing":
              return manufacturingSections;
            case "finance-automations":
              return financeAutomationsSections;
            case "logistics":
              return logisticsSupplyChainSections;
            case "sales":
              return salesSections;
            default:
              return sapImplementationSections;
          }
        })();

        // Find the active subsection based on scroll position
        const sectionElements = currentSections.map((section) => ({
          ...section,
          element: document.getElementById(section.id),
        }));

        let activeSectionId = currentSections[0]?.id || null;
        sectionElements.forEach((section) => {
          if (section.element) {
            const sectionRect = section.element.getBoundingClientRect();
            if (
              sectionRect.top <= viewportHeight * 0.4 &&
              sectionRect.bottom >= viewportHeight * 0.4
            ) {
              activeSectionId = section.id;
            }
          }
        });

        if (activeSectionId) {
          setActiveSection(activeSectionId);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // FIXED: Clear any existing timeout
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }

      // Set navigation flags to prevent auto-scroll interference
      isNavigationScrollRef.current = true;
      window.isNavigationScrolling = true;

      // FIXED: Longer timeout to ensure navigation completes
      navigationTimeoutRef.current = setTimeout(() => {
        isNavigationScrollRef.current = false;
        window.isNavigationScrolling = false;

        setActiveChapter(chapters[sectionId]);
      }, 1500); // Increased from 1500ms to 2000ms

      const offset = 100; // Offset for fixed header
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // FIXED: Longer timeout to ensure navigation completes
      navigationTimeoutRef.current = setTimeout(() => {
        setActiveChapter(chapters[sectionId]);
        setScrollProgress(5);
      }, 1000);

      // console.log("sectionId", sectionId);
    }
  };

  // FIXED: Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  // Create separate refs for each section
  const sapRef = useRef(null);
  const gitexRef = useRef(null);
  const manufacturingRef = useRef(null);
  const itRef = useRef(null);
  const financeRef = useRef(null);
  const aiRef = useRef(null);
  const logisticsRef = useRef(null);
  const salesRef = useRef(null);
  const achievementsRef = useRef(null);

  return (
    <div className="min-h-screen dark-burgundy-gradient relative">
      {/* Animated background patterns with burgundy/red theme */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-600/20 via-red-500/10 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-red-700/15 via-rose-600/10 to-transparent rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-red-900/10 to-transparent rounded-full blur-3xl"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
      {/* Skip link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      {/* Animated Background Elements */}
      <Particles />
      <Navigation
        scrollToSection={scrollToSection}
        activeChapter={activeChapter}
        activeSection={activeSection}
        scrollProgress={scrollProgress}
      />
      <HeroSection />

      {/* Sections with Scrollspy */}
      <div className="container mx-auto p-0 min-h-screen flex px-0 xl:gap-6 noBar">
        {/* Conditional Scrollspy section */}
        <aside
          className="flex-col space-y-2 py-12 w-64 sticky top-8 ml-6 h-dvh overflow-y-auto hidden lg:flex noBar"
          aria-label="Chapter navigation"
          role="navigation"
        >
          {/* SAP Implementation Chapter */}
          <motion.div
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="text-center h-auto w-64"
          >
            <div
              className={`glass-card-hover w-full rounded-2xl border-2 ${
                activeChapter === "sap-implementation"
                  ? "p-6 border-amber-400/50 shadow-2xl shadow-amber-500/30 bg-white/10"
                  : "py-4 px-6 cursor-pointer border-white/10 hover:border-amber-400/30 bg-white/5"
              } flex flex-col transition-all duration-300`}
              onClick={() =>
                activeChapter !== "sap-implementation" &&
                scrollToSection("sap-implementation-header")
              }
            >
              <div
                className={`flex items-center gap-3 ${activeChapter === "sap-implementation" ? "mb-6" : ""} `}
              >
                <div
                  className={`p-2 rounded-lg ${
                    activeChapter === "sap-implementation"
                      ? "bg-amber-500/20"
                      : "bg-gray-700/50"
                  } transition-colors duration-300`}
                >
                  <Settings
                    className={` ${activeChapter === "sap-implementation" ? "w-5 h-5 text-amber-400" : "w-4 h-4 text-gray-400"} transition-colors duration-300`}
                  />
                </div>
                <h3
                  className={` ${activeChapter === "sap-implementation" ? "font-bold text-white" : "font-medium text-gray-300"} text-base text-left transition-colors duration-300`}
                >
                  SAP Implementation
                </h3>
              </div>

              <AnimatePresence>
                {activeChapter === "sap-implementation" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {/* Animated Ruler */}
                    <div className="flex-1 relative min-h-[250px]">
                      {/* Ruler background */}
                      <div className="absolute left-0 top-0 w-1 h-full bg-gray-700/50 rounded-full"></div>

                      {/* Animated progress line with glow */}
                      <motion.div
                        className="absolute left-0 top-0 w-1 rounded-full shadow-lg shadow-amber-500/50"
                        style={{
                          background:
                            "linear-gradient(180deg, #fbbf24 0%, #f59e0b 100%)",
                        }}
                        initial={{ height: 0 }}
                        animate={{ height: `${scrollProgress}%` }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />

                      {/* Navigation Items */}
                      <div className="space-y-3 pl-4 h-full flex-col flex justify-between">
                        {sapImplementationSections.map((section) => {
                          const Icon = section.icon;
                          const isActive = activeSection === section.id;
                          const isMainSection = section.level === 0;

                          return (
                            <motion.button
                              key={section.id}
                              onClick={() => scrollToSection(section.id)}
                              className={`w-full flex items-center gap-3 p-3 py-2 rounded-xl transition-all duration-300 text-left group relative focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                                isActive
                                  ? "bg-gradient-to-r from-amber-500/20 to-orange-500/20 shadow-lg border border-amber-400/30"
                                  : "hover:bg-gray-700/50 border border-transparent"
                              } ${isMainSection ? "mb-2" : ""}`}
                              whileHover={{ x: 6, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              aria-label={`Navigate to ${section.title}`}
                              aria-current={isActive ? "true" : undefined}
                            >
                              {/* Content */}
                              <div className="flex items-center gap-3 flex-1">
                                <Icon
                                  className={`w-4 h-4 transition-all duration-300 ${
                                    isActive
                                      ? "opacity-100 scale-110"
                                      : "opacity-70"
                                  }`}
                                  style={{
                                    color: isActive ? "#fbbf24" : section.color,
                                  }}
                                />
                                <div className="text-left">
                                  <span
                                    className={`font-medium text-sm transition-all duration-300 ${
                                      isActive
                                        ? "text-white font-bold"
                                        : "text-gray-200"
                                    } ${isMainSection ? "text-base font-bold" : ""}`}
                                  >
                                    {section.title}
                                  </span>
                                </div>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* GITEX Conference Chapter */}
          <motion.div
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="text-center h-auto w-64"
          >
            <div
              className={`glass-card-hover w-full rounded-2xl border-2 ${
                activeChapter === "gitex-conference"
                  ? "p-6 border-blue-400/50 shadow-2xl shadow-blue-500/30 bg-white/10"
                  : "py-4 px-6 cursor-pointer border-white/10 hover:border-blue-400/30 bg-white/5"
              } flex flex-col transition-all duration-300`}
              onClick={() =>
                activeChapter !== "gitex-conference" &&
                scrollToSection("gitex-conference-header")
              }
            >
              <div
                className={`flex items-center gap-3 ${activeChapter === "gitex-conference" ? "mb-6" : ""} `}
              >
                <div
                  className={`p-2 rounded-lg ${
                    activeChapter === "gitex-conference"
                      ? "bg-blue-500/20"
                      : "bg-gray-700/50"
                  } transition-colors duration-300`}
                >
                  <Users
                    className={` ${activeChapter === "gitex-conference" ? "w-5 h-5 text-blue-400" : "w-4 h-4 text-gray-400"} transition-colors duration-300`}
                  />
                </div>
                <h3
                  className={` ${activeChapter === "gitex-conference" ? "font-bold text-white" : "font-medium text-gray-300"} text-base text-left transition-colors duration-300`}
                >
                  GITEX Conference
                </h3>
              </div>

              <AnimatePresence>
                {activeChapter === "gitex-conference" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {/* Animated Ruler */}
                    <div className="flex-1 relative min-h-[100px]">
                      {/* Ruler background */}
                      <div className="absolute left-0 top-0 w-1 h-full bg-gray-700/50 rounded-full"></div>

                      {/* Animated progress line with glow */}
                      <motion.div
                        className="absolute left-0 top-0 w-1 rounded-full shadow-lg shadow-blue-500/50"
                        style={{
                          background:
                            "linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)",
                        }}
                        initial={{ height: 0 }}
                        animate={{ height: `${scrollProgress}%` }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />

                      {/* Navigation Items */}
                      <div className="space-y-3 pl-4 h-full flex-col flex justify-between">
                        {gitexConferenceSections.map((section) => {
                          const Icon = section.icon;
                          const isActive = activeSection === section.id;
                          const isMainSection = section.level === 0;

                          return (
                            <motion.button
                              key={section.id}
                              onClick={() => scrollToSection(section.id)}
                              className={`w-full flex items-center gap-3 p-3 py-2 rounded-xl transition-all duration-300 text-left group relative focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                                isActive
                                  ? "bg-gradient-to-r from-blue-500/20 to-blue-600/20 shadow-lg border border-blue-400/30"
                                  : "hover:bg-gray-700/50 border border-transparent"
                              } ${isMainSection ? "mb-2" : ""}`}
                              whileHover={{ x: 6, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              aria-label={`Navigate to ${section.title}`}
                              aria-current={isActive ? "true" : undefined}
                            >
                              {/* Content */}
                              <div className="flex items-center gap-3 flex-1">
                                <Icon
                                  className={`w-4 h-4 transition-all duration-300 ${
                                    isActive
                                      ? "opacity-100 scale-110"
                                      : "opacity-70"
                                  }`}
                                  style={{
                                    color: isActive ? "#60a5fa" : section.color,
                                  }}
                                />
                                <div className="text-left">
                                  <span
                                    className={`font-medium text-sm transition-all duration-300 ${
                                      isActive
                                        ? "text-white font-bold"
                                        : "text-gray-200"
                                    } ${isMainSection ? "text-base font-bold" : ""}`}
                                  >
                                    {section.title}
                                  </span>
                                </div>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* IT Infrastructure Chapter */}
          <motion.div
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="text-center h-auto w-64"
          >
            <div
              className={`glass-card-hover w-full rounded-2xl border-2 ${
                activeChapter === "it-infrastructure"
                  ? "p-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/30 bg-white/10"
                  : "py-4 px-6 cursor-pointer border-white/10 hover:border-cyan-400/30 bg-white/5"
              } flex flex-col transition-all duration-300`}
              onClick={() =>
                activeChapter !== "it-infrastructure" &&
                scrollToSection("it-infrastructure-header")
              }
            >
              <div className={`flex items-center gap-3`}>
                <div
                  className={`p-2 rounded-lg ${
                    activeChapter === "it-infrastructure"
                      ? "bg-cyan-500/20"
                      : "bg-gray-700/50"
                  } transition-colors duration-300`}
                >
                  <Shield
                    className={` ${activeChapter === "it-infrastructure" ? "w-5 h-5 text-cyan-400" : "w-4 h-4 text-gray-400"} transition-colors duration-300`}
                  />
                </div>
                <h3
                  className={` ${activeChapter === "it-infrastructure" ? "font-bold text-white" : "font-medium text-gray-300"} text-base text-left transition-colors duration-300`}
                >
                  IT Infrastructure
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Marketing Chapter */}
          <motion.div
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="text-center h-auto w-64"
          >
            <div
              className={`glass-card-hover w-full rounded-2xl border-2 ${
                activeChapter === "marketing"
                  ? "p-4 border-purple-400/50 shadow-2xl shadow-purple-500/30 bg-white/10"
                  : "py-4 px-6 cursor-pointer border-white/10 hover:border-purple-400/30 bg-white/5"
              } flex flex-col transition-all duration-300`}
              onClick={() =>
                activeChapter !== "marketing" &&
                scrollToSection("marketing-header")
              }
            >
              <div
                className={`flex items-center gap-3 ${activeChapter === "marketing" ? "mb-6" : ""} `}
              >
                <div
                  className={`p-2 rounded-lg ${
                    activeChapter === "marketing"
                      ? "bg-purple-500/20"
                      : "bg-gray-700/50"
                  } transition-colors duration-300`}
                >
                  <Brain
                    className={` ${activeChapter === "marketing" ? "w-5 h-5 text-purple-400" : "w-4 h-4 text-gray-400"} transition-colors duration-300`}
                  />
                </div>
                <h3
                  className={` ${activeChapter === "marketing" ? "font-bold text-white" : "font-medium text-gray-300"} text-base text-left transition-colors duration-300`}
                >
                  Marketing & Innovation
                </h3>
              </div>

              <AnimatePresence>
                {activeChapter === "marketing" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {/* Animated Ruler */}
                    <div className="flex-1 relative min-h-[250px]">
                      {/* Ruler background */}
                      <div className="absolute left-0 top-0 w-1 h-full bg-gray-700/50 rounded-full"></div>

                      {/* Animated progress line with glow */}
                      <motion.div
                        className="absolute left-0 top-0 w-1 rounded-full shadow-lg shadow-purple-500/50"
                        style={{
                          background:
                            "linear-gradient(180deg, #c084fc 0%, #a855f7 100%)",
                        }}
                        initial={{ height: 0 }}
                        animate={{ height: `${scrollProgress}%` }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />

                      {/* Navigation Items */}
                      <div className="space-y-3 pl-4 h-full flex-col flex justify-between">
                        {marketingSections.map((section) => {
                          const Icon = section.icon;
                          const isActive = activeSection === section.id;
                          const isMainSection = section.level === 0;

                          return (
                            <motion.button
                              key={section.id}
                              onClick={() => scrollToSection(section.id)}
                              className={`w-full flex items-center gap-3 p-3 py-2 rounded-xl transition-all duration-300 text-left group relative focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                                isActive
                                  ? "bg-gradient-to-r from-purple-500/20 to-purple-600/20 shadow-lg border border-purple-400/30"
                                  : "hover:bg-gray-700/50 border border-transparent"
                              } ${isMainSection ? "mb-2" : ""}`}
                              whileHover={{ x: 6, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              aria-label={`Navigate to ${section.title}`}
                              aria-current={isActive ? "true" : undefined}
                            >
                              {/* Content */}
                              <div className="flex items-center gap-3 flex-1">
                                <Icon
                                  className={`w-4 h-4 transition-all duration-300 ${
                                    isActive
                                      ? "opacity-100 scale-110"
                                      : "opacity-70"
                                  }`}
                                  style={{
                                    color: isActive ? "#c084fc" : section.color,
                                  }}
                                />
                                <div className="text-left">
                                  <span
                                    className={`font-medium text-sm transition-all duration-300 ${
                                      isActive
                                        ? "text-white font-bold"
                                        : "text-gray-200"
                                    } ${isMainSection ? "text-base font-bold" : ""}`}
                                  >
                                    {section.title}
                                  </span>
                                </div>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Manufacturing Chapter */}
          <motion.div
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="text-center h-auto w-64"
          >
            <div
              className={`glass-card-hover w-full rounded-2xl border-2 ${
                activeChapter === "manufacturing"
                  ? "p-6 border-red-400/50 shadow-2xl shadow-red-500/30 bg-white/10"
                  : "py-4 px-6 cursor-pointer border-white/10 hover:border-red-400/30 bg-white/5"
              } flex flex-col transition-all duration-300`}
              onClick={() => {
                if (activeChapter !== "manufacturing") {
                  scrollToSection("manufacturing-header");
                  // setActiveChapter("manufacturing");
                }
              }}
            >
              <div className={`flex items-center gap-3 `}>
                <div
                  className={`p-2 rounded-lg ${
                    activeChapter === "manufacturing"
                      ? "bg-red-500/20"
                      : "bg-gray-700/50"
                  } transition-colors duration-300`}
                >
                  <Factory
                    className={` ${activeChapter === "manufacturing" ? "w-5 h-5 text-red-400" : "w-4 h-4 text-gray-400"} transition-colors duration-300`}
                  />
                </div>
                <h3
                  className={` ${activeChapter === "manufacturing" ? "font-bold text-white" : "font-medium text-gray-300"} text-base text-left transition-colors duration-300`}
                >
                  Manufacturing
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Finance & Automations Chapter */}
          <motion.div
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            animate={"visible"}
            className="text-center h-auto w-64"
          >
            <div
              className={`glass-card-hover w-full rounded-2xl border-2 ${
                activeChapter === "finance-automations"
                  ? "p-4 border-emerald-400/50 shadow-2xl shadow-emerald-500/30 bg-white/10"
                  : "py-4 px-6 cursor-pointer border-white/10 hover:border-emerald-400/30 bg-white/5"
              } flex flex-col transition-all duration-300`}
              onClick={() =>
                activeChapter !== "finance-automations" &&
                scrollToSection("finance-automations-header")
              }
            >
              <div className={`flex items-center gap-3`}>
                <div
                  className={`p-2 rounded-lg ${
                    activeChapter === "finance-automations"
                      ? "bg-emerald-500/20"
                      : "bg-gray-700/50"
                  } transition-colors duration-300`}
                >
                  <DollarSign
                    className={` ${activeChapter === "finance-automations" ? "w-5 h-5 text-emerald-400" : "w-4 h-4 text-gray-400"} transition-colors duration-300`}
                  />
                </div>
                <h3
                  className={` ${activeChapter === "finance-automations" ? "font-bold text-white" : "font-medium text-gray-300"} text-base text-left transition-colors duration-300`}
                >
                  Finance & Automations
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Logistics & Supply Chain Chapter */}
          <motion.div
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="text-center h-auto w-64"
          >
            <div
              className={`glass-card-hover w-full rounded-2xl border-2 ${
                activeChapter === "logistics"
                  ? "p-4 border-orange-400/50 shadow-2xl shadow-orange-500/30 bg-white/10"
                  : "py-4 px-6 cursor-pointer border-white/10 hover:border-orange-400/30 bg-white/5"
              } flex flex-col transition-all duration-300`}
              onClick={() =>
                activeChapter !== "logistics" &&
                scrollToSection("logistics-header")
              }
            >
              <div className={`flex items-center gap-3`}>
                <div
                  className={`p-2 rounded-lg ${
                    activeChapter === "logistics"
                      ? "bg-orange-500/20"
                      : "bg-gray-700/50"
                  } transition-colors duration-300`}
                >
                  <Truck
                    className={` ${activeChapter === "logistics" ? "w-5 h-5 text-orange-400" : "w-4 h-4 text-gray-400"} transition-colors duration-300`}
                  />
                </div>
                <h3
                  className={` ${activeChapter === "logistics" ? "font-bold text-white" : "font-medium text-gray-300"} text-base text-left transition-colors duration-300`}
                >
                  Supply Chain
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Sales Chapter */}
          <motion.div
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="text-center h-auto w-64"
          >
            <div
              className={`glass-card-hover w-full rounded-2xl border-2 ${
                activeChapter === "sales"
                  ? "p-4 border-indigo-400/50 shadow-2xl shadow-indigo-500/30 bg-white/10"
                  : "py-4 px-6 cursor-pointer border-white/10 hover:border-indigo-400/30 bg-white/5"
              } flex flex-col transition-all duration-300`}
              onClick={() =>
                activeChapter !== "sales" && scrollToSection("sales-header")
              }
            >
              <div className={`flex items-center gap-3`}>
                <div
                  className={`p-2 rounded-lg ${
                    activeChapter === "sales"
                      ? "bg-indigo-500/20"
                      : "bg-gray-700/50"
                  } transition-colors duration-300`}
                >
                  <TrendingUp
                    className={` ${activeChapter === "sales" ? "w-5 h-5 text-indigo-400" : "w-4 h-4 text-gray-400"} transition-colors duration-300`}
                  />
                </div>
                <h3
                  className={` ${activeChapter === "sales" ? "font-bold text-white" : "font-medium text-gray-300"} text-base text-left transition-colors duration-300`}
                >
                  Sales
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Certifications & Achievements */}
          <motion.div
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="text-center h-auto w-64"
          >
            <div
              className={`glass-card-hover w-full rounded-2xl border-2 ${
                activeChapter === "achievements"
                  ? "p-4 border-indigo-400/50 shadow-2xl shadow-indigo-500/30 bg-white/10"
                  : "py-4 px-6 cursor-pointer border-white/10 hover:border-indigo-400/30 bg-white/5"
              } flex flex-col transition-all duration-300`}
              onClick={() =>
                activeChapter !== "achievements" &&
                scrollToSection("achievements-header")
              }
            >
              <div className={`flex items-center gap-3`}>
                <div
                  className={`p-2 rounded-lg ${
                    activeChapter === "achievements"
                      ? "bg-indigo-500/20"
                      : "bg-gray-700/50"
                  } transition-colors duration-300`}
                >
                  <Award
                    className={` ${activeChapter === "achievements" ? "w-5 h-5 text-indigo-400" : "w-4 h-4 text-gray-400"} transition-colors duration-300`}
                  />
                </div>
                <h3
                  className={` ${activeChapter === "achievements" ? "font-bold text-white" : "font-medium text-gray-300"} text-base text-left transition-colors duration-300`}
                >
                  Certifications & Achievements
                </h3>
              </div>
            </div>
          </motion.div>
        </aside>

        <main
          id="main-content"
          className="flex-1 flex flex-col"
          role="main"
          aria-label="Newsletter content"
        >
          <SAPImplementationSection ref={sapRef} />
          <GITEXSection ref={gitexRef} />
          <ITInfrastructureSection ref={itRef} />
          <MarketingSection ref={aiRef} />
          <ManufacturingSection ref={manufacturingRef} />
          <FinanceAutomationsSection ref={financeRef} />
          <LogisticsSupplyChainSection ref={logisticsRef} />
          <SalesSection ref={salesRef} />
          <CertificationsAndAchievementsSection ref={achievementsRef} />
        </main>
      </div>

      <footer className=" hidden bg-gradient-to-br from-gray-100 to-gray-200 border-t border-border/50 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/60" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="newsletter-mono text-accent mb-4 uppercase tracking-wider">
                Newsletter Footer
              </div>
              <h3 className="newsletter-heading text-2xl md:text-3xl text-foreground mb-4">
                Tolaram Digital Excellence
              </h3>
              <p className="newsletter-body text-muted-foreground text-lg max-w-2xl mx-auto text-justify">
                Transforming operations through strategic digital initiatives
                and innovative technology solutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="newsletter-mono text-accent mb-2 text-sm">
                  ISSUE
                </div>
                <div className="newsletter-subheading text-foreground">
                  #02 • Q1 2025
                </div>
              </div>
              <div>
                <div className="newsletter-mono text-accent mb-2 text-sm">
                  PUBLISHER
                </div>
                <div className="newsletter-subheading text-foreground">
                  www.tolaram.com
                </div>
              </div>
              <div>
                <div className="newsletter-mono text-accent mb-2 text-sm">
                  NEXT ISSUE
                </div>
                <div className="newsletter-subheading text-foreground">
                  Q2 2025
                </div>
              </div>
            </div>

            <div className="border-t border-border/30 pt-8">
              <p className="newsletter-body text-muted-foreground text-sm text-justify">
                © 2025 Tolaram Group. All rights reserved. Digital
                Transformation Newsletter • Confidential Business Information
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-red-600/8 rounded-full blur-2xl" />
        <div className="absolute top-10 right-10 w-28 h-28 bg-red-500/6 rounded-full blur-2xl" />
      </footer>
    </div>
  );
}

export default App;
