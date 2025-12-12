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
          <div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 md:mb-8 shadow-lg"
            style={{ backgroundColor: "#1e40af" }}
          >
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="font-bold text-white text-xs sm:text-xs tracking-wide">
              SPECIAL FEATURE
            </span>
            <span className="text-white/70 hidden sm:inline">•</span>
            <span className="font-semibold text-white text-xs sm:text-xs">
              GITEX CONFERENCE
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-4 md:mb-6 px-2">
            TOLARAM PARTICIPATES IN{" "}
            <span style={{ color: "#1e40af" }} className="block sm:inline">
              GITEX CONFERENCE
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed text-center px-4">
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
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl border border-blue-100 overflow-hidden">
            <div className="px-4 sm:px-6 md:px-8 py-6 md:py-8">
              {/* Event Info */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                    style={{ backgroundColor: "#1e40af" }}
                  >
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      Event Dates
                    </h4>
                    <p className="text-blue-600 font-semibold">
                      3rd and 4th September 2025
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                    style={{ backgroundColor: "#1e40af" }}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      Locations
                    </h4>
                    <p className="text-gray-700">Abuja and Eko Hotel, Lagos</p>
                  </div>
                </div>
              </div>

              {/* Impact Statement */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200 mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <Rocket className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-bold text-gray-900">
                    Strategic Impact
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our presence at GITEX is a strategic move to accelerate our
                  digital transformation, integrate global innovations, and
                  build partnerships that will redefine our future operations.
                </p>
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-center my-5">
                <button
                  onClick={() => toggleSection("workshopsAttended")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#1e40af" }}
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
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md"
                        style={{ backgroundColor: "#1e40af" }}
                      >
                        <Lightbulb className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Workshops Attended
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {workshops.map((workshop, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100"
                        >
                          <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-800 font-bold text-sm">
                              {index + 1}
                            </span>
                          </div>
                          <p className="text-gray-700 leading-relaxed text-sm">
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

        {/* Photo Splash Section */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Conference Highlights
            </h3>
            <p className="text-gray-600">Capturing moments from GITEX 2025</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={photo.src}
                    alt={`GITEX Conference ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
});

export default GITEXSection;
