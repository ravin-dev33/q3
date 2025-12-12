import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import {
  manufacturingSections,
  itInfrastructureSections,
  financeAutomationsSections,
  innovatingWithAISections,
  logisticsSupplyChainSections,
  salesSections,
  sapImplementationSections,
  certificationsAndAchievementsSection,
} from "../../lib/constants";

const Navigation = ({
  scrollToSection,
  activeChapter,
  activeSection,
  scrollProgress,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-expand active chapter
  useEffect(() => {
    if (activeChapter && !expandedChapters[activeChapter]) {
      setExpandedChapters((prev) => ({
        ...prev,
        [activeChapter]: true,
      }));
    }
  }, [activeChapter]);

  const toggleChapter = (chapterId) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const navItems = [
    {
      name: "SAP",
      sectionId: "sap-implementation",
      header: "sap-implementation-header",
      color: "#f59e0b",
      sections: sapImplementationSections,
    },
    {
      name: "IT & Cybersecurity",
      sectionId: "it-infrastructure",
      header: "it-infrastructure-header",
      color: "#1e40af",
      sections: itInfrastructureSections,
    },
    {
      name: "Marketing",
      sectionId: "marketing",
      header: "marketing-header",
      color: "#1e40af",
      sections: innovatingWithAISections,
    },
    {
      name: "Manufacturing",
      sectionId: "manufacturing",
      header: "manufacturing-header",
      color: "#e4002b",
      sections: manufacturingSections,
    },
    {
      name: "Finance",
      sectionId: "finance-automations",
      header: "finance-automations-header",
      color: "#16a34a",
      sections: financeAutomationsSections,
    },
    {
      name: "Supply Chain",
      sectionId: "logistics",
      header: "logistics-header",
      color: "#e4002b",
      sections: logisticsSupplyChainSections,
    },
    {
      name: "Sales",
      sectionId: "sales",
      header: "sales-header",
      color: "#1e3a8a",
      sections: salesSections,
    },
    {
      name: "Certifications & Achievements",
      sectionId: "achievements",
      header: "achievements-header",
      color: "#8a6f1eff",
      sections: certificationsAndAchievementsSection,
    },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-card border-b border-white/10"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-14" : "h-20"
            }`}
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-3"
            >
              <img
                src="/logo.png"
                alt="Tolaram Logo"
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? "w-full h-10" : "w-full h-14"
                }`}
              />
            </motion.div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.header)}
                  className={`transition-colors duration-200 newsletter-body text-sm ${
                    activeChapter === item.sectionId
                      ? "text-red-400 font-semibold"
                      : "text-gray-200 hover:text-red-400"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`text-foreground hover:text-accent transition-all duration-200 focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded ${
                isScrolled ? "p-1.5" : "p-2"
              }`}
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X
                  className={`transition-all duration-300 ${isScrolled ? "w-5 h-5" : "w-6 h-6"}`}
                  aria-hidden="true"
                />
              ) : (
                <Menu
                  className={`transition-all duration-300 ${isScrolled ? "w-5 h-5" : "w-6 h-6"}`}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu - Sliding from Right */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-80 h-screen glass-card border-l border-white/10 z-50"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="p-6 space-y-2">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <div className="newsletter-heading text-lg text-white">
                      Navigation
                    </div>
                    <div className="newsletter-mono text-gray-400 text-xs">
                      TABLE OF CONTENTS
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActiveChapter = activeChapter === item.sectionId;

                    return (
                      <motion.div
                        key={index}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="border border-white/10 rounded-lg overflow-hidden glass-card"
                      >
                        {/* Chapter Header */}
                        <div
                          className={`${isActiveChapter ? "bg-white/10" : "bg-white/5"} transition-all duration-300`}
                        >
                          <button
                            onClick={() => {
                              scrollToSection(item.header);
                              toggleChapter(item.sectionId);
                              setTimeout(() => setIsMobileMenuOpen(false), 300);
                            }}
                            className={`w-full flex items-center justify-between py-4 px-4 text-left transition-colors duration-200 hover:bg-white/5 ${
                              isActiveChapter
                                ? "font-semibold text-white"
                                : "text-gray-300 hover:text-red-400"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: item.color }}
                              />
                              <span className="text-sm font-medium">
                                {item.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="newsletter-mono text-gray-400 text-xs">
                                0{index + 1}
                              </span>
                              {isActiveChapter ? (
                                <ChevronUp className="w-4 h-4 text-gray-400" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                              )}
                            </div>
                          </button>

                          {/* Progress Bar */}
                          {isActiveChapter && (
                            <div className="px-4 pb-3">
                              <div className="w-full bg-white/10 rounded-full h-1">
                                <motion.div
                                  className="h-1 rounded-full transition-all duration-300 shadow-lg"
                                  style={{
                                    backgroundColor: item.color,
                                    width: `${scrollProgress}%`,
                                    boxShadow: `0 0 10px ${item.color}`,
                                  }}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${scrollProgress}%` }}
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Sections */}
                        <AnimatePresence>
                          {isActiveChapter && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden bg-white/5"
                            >
                              <div className="py-2">
                                {item.sections.map((section, sectionIndex) => {
                                  const Icon = section.icon;
                                  const isActiveSection =
                                    activeSection === section.id;

                                  return (
                                    <motion.button
                                      key={section.id}
                                      initial={{ x: 10, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{
                                        delay: sectionIndex * 0.05,
                                        duration: 0.2,
                                      }}
                                      onClick={() => {
                                        scrollToSection(section.id);
                                        setTimeout(
                                          () => setIsMobileMenuOpen(false),
                                          300
                                        );
                                      }}
                                      className={`w-full flex items-center gap-3 py-3 px-6 text-left transition-all duration-200 hover:bg-white/10 ${
                                        isActiveSection
                                          ? "bg-white/15 shadow-sm font-medium"
                                          : "text-gray-300 hover:text-white"
                                      }`}
                                    >
                                      <Icon
                                        className={`w-4 h-4 transition-all duration-200 ${
                                          isActiveSection
                                            ? "opacity-100"
                                            : "opacity-60"
                                        }`}
                                        style={{ color: section.color }}
                                      />
                                      <div className="flex-1">
                                        <div
                                          className={`text-sm ${
                                            isActiveSection
                                              ? "font-medium text-white"
                                              : "text-gray-300"
                                          }`}
                                        >
                                          {section.title}
                                        </div>
                                        <div className="text-xs text-gray-400 mt-1">
                                          {section.subtitle}
                                        </div>
                                      </div>
                                    </motion.button>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Footer Info */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  className="mt-12 pt-6 border-t border-white/10"
                >
                  <div className="newsletter-mono text-gray-400 text-xs mb-2">
                    ISSUE #03 • Q3 2025
                  </div>
                  <div className="newsletter-body text-sm text-gray-300">
                    Tolaram Digitalization Excellence Newsletter
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
