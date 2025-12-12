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

const GITEXSection = forwardRef((_props, gitexRef) => {
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

  const workshops = [
    "Generative AI Essentials for Business and Technical Decision",
    "AI-Powered Document Intelligence with AWS Bedrock and Agents | Combining OCR, LLMs, and Autonomous AI Workflows",
    "Elevating Cloud Security Posture with Lacework FortiCNAPP",
    "Accelerate Data Science Workflows with Zero Code Changes",
    "Augment Your LLM Using Retrieval Augmented Generation",
  ];

  const photos = [
    {
      src: "/image1.jpg",
      caption: "Delegates at Abuja Summit",
    },
    // {
    //   src: "/image3.jpg",
    //   caption: "Mr. Kavin conversing with the DG of NITDA",
    // },
    // {
    //   src: "/image2.jpg",
    //   caption: "Delegates at Abuja Summit",
    // },
    {
      src: "/image5.jpg",
      caption: "Delegates at GITEX Summit Lagos at Eko Hotel",
    },
  ];

  return (
    <section
      ref={gitexRef}
      id="gitex-conference"
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
          id="gitex-conference-header"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 rounded-full mb-8 glass-card-hover shadow-2xl border-2 border-blue-500/30">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-white text-xs tracking-wide">
              SPECIAL FEATURE
            </span>
            <span className="text-white/50">•</span>
            <span className="font-semibold text-blue-300 text-xs">
              GITEX CONFERENCE
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 md:mb-6 px-2">
            TOLARAM PARTICIPATES IN{" "}
            <span className="text-blue-400 block sm:inline">
              GITEX CONFERENCE
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-4xl mx-auto leading-relaxed text-center px-4">
            On September 3rd and 4th, 2025, Tolaram attended the landmark GITEX
            conference, held in Abuja and at Lagos's Eko Hotel. As the
            first-ever edition in Nigeria and one of the largest tech event in
            Africa's history, GITEX convened industry leaders and innovators.
            The premier event served as a pivotal platform for Tolaram to engage
            with the future of technology alongside key players in the sector.
          </p>
        </motion.div>

        {/* Conference Details */}
        <motion.div variants={itemVariants} className="mb-8 md:mb-12">
          <div className="glass-card-premium overflow-hidden">
            <div className="px-4 sm:px-6 md:px-8 py-6 md:py-8">
              {/* Event Info */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shadow-lg flex-shrink-0 border border-blue-500/30">
                    <Calendar className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">
                      Event Dates
                    </h4>
                    <p className="text-blue-400 font-semibold">
                      3rd and 4th September 2025
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shadow-lg flex-shrink-0 border border-blue-500/30">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">
                      Locations
                    </h4>
                    <p className="text-gray-300">Abuja and Eko Hotel, Lagos</p>
                  </div>
                </div>
              </div>

              {/* Impact Statement */}
              <div className="glass-card p-6 rounded-2xl border border-blue-500/30 mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <Rocket className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-bold text-white">
                    Strategic Impact
                  </h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Our presence at GITEX is a strategic move to accelerate our
                  digital transformation, integrate global innovations, and
                  build partnerships that will redefine our future operations.
                </p>
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-center my-5">
                <button
                  onClick={() => toggleSection("workshopsAttended")}
                  className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90 glass-card border border-blue-500/30 hover:border-blue-400/50"
                >
                  {expandedSections.workshopsAttended ? (
                    <>
                      Show Less
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Read More Details
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Workshops Section */}
              <AnimatePresence>
                {expandedSections.workshopsAttended && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shadow-md border border-blue-500/30">
                        <Lightbulb className="w-5 h-5 text-blue-400" />
                      </div>
                      <h4 className="text-xl font-bold text-white">
                        Workshops Attended
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {workshops.map((workshop, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 glass-card rounded-xl border border-blue-500/20"
                        >
                          <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-400/30">
                            <span className="text-blue-300 font-bold text-sm">
                              {index + 1}
                            </span>
                          </div>
                          <p className="text-gray-300 leading-relaxed text-sm">
                            {workshop}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Organization */}
              {/* <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <h5 className="font-bold text-gray-900">Organized By</h5>
                </div>
                <p className="text-gray-700">
                  TOLARAM Digitalization Team
                </p>
              </div> */}
            </div>
          </div>
        </motion.div>

        {/* Photo Splash Section - Redesigned */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Conference Highlights
            </h3>
            <p className="text-gray-400">Capturing moments from GITEX 2025</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card-premium overflow-hidden group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={photo.src}
                    alt={`GITEX Conference ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 image-overlay-gradient" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <p className="text-sm text-white font-medium leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="pagination-dots">
            <div className="pagination-dot active"></div>
            <div className="pagination-dot"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
});

export default GITEXSection;
