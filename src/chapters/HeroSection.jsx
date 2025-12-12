import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Zap,
  TrendingUp,
  Shield,
  Cpu,
  ArrowDown,
  Calendar,
  Globe,
  Trophy,
  Users,
} from "lucide-react";

const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const taglines = ["Digitization", "Digitalization", "Digital Transformation"];

  const metrics = [
    {
      value: 4000,
      suffix: " +",
      label: "Network endpoints Protected",
      icon: Zap,
    },
    {
      value: 6,
      suffix: " SAP Go Lives",
      label: "Strategic implementations",
      icon: TrendingUp,
    },
    {
      value: 2,
      suffix: " AI Marketing",
      label: "campaigns launched ",
      icon: Cpu,
    },
    {
      value: 11,
      suffix: " RPA Bots",
      label: "Live across business",
      icon: Shield,
    },
    {
      value: 1500,
      suffix: " +",
      label: "Users trained",
      icon: Users,
    },
    {
      value: 22000,
      suffix: " +",
      label: "Assets protected",
      icon: Shield,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

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
    <section className="relative min-h-screen overflow-hidden burgundy-gradient">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-red-700/15 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-rose-600/20 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 flex items-center min-h-screen">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Newsletter Header */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-10 glass-card-hover shadow-2xl border-2 border-red-500/30">
              <Calendar className="w-5 h-5 text-red-400" />
              <span className="font-bold text-white text-sm tracking-wide">
                QUARTERLY DIGITALIZATION NEWSLETTER
              </span>
              <span className="text-white/50">•</span>
              <span className="font-semibold text-red-300 text-sm">
                ISSUE #03 - Q3 2025
              </span>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Title */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 h-full flex flex-col space-y-4"
            >
              <div className="glass-card-hover flex-1 rounded-3xl p-6 lg:p-10 shadow-2xl border-2 border-white/10 relative overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-500/30 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-600/20 to-transparent rounded-tr-full"></div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 relative">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    TOLARAM
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                    DIGITALIZATION
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    NEWSLETTER
                  </span>
                </h1>

                {/* Animated Tagline */}
                {/* <div className="h-8 flex items-center mb-6">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-black">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentTagline}
                        initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-gradient-to-r bg-clip-text text-transparent"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #e4002b, #b8001f)",
                        }}
                      >
                        {taglines[currentTagline]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div> */}

                <p className="text-base lg:text-xl text-gray-300 leading-relaxed max-w-xl font-medium relative">
                  Discover our journey through enterprise transformation, AI
                  usage, adoption, and operational excellence across the
                  organization.
                </p>
              </div>

              {/* Publisher Info */}
              <div className="rounded-2xl p-5 shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 glass-card-hover border-2 border-red-500/30 red-gradient">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="flex items-end justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-white" />
                    <span className="font-bold text-white text-base tracking-wide">
                      PUBLISHER
                    </span>
                  </div>
                  <div className="text-sm text-white cursor-pointer hover:scale-110 transition-transform">
                    www.tolaram.com
                  </div>
                </div>

                <div className="text-white relative z-10">
                  <div className="flex items-end justify-between mt-1">
                    <div className="font-bold text-base text-white">
                      Tolaram Group
                    </div>
                    <div className="text-sm">October 2025 Edition</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Key Achievements */}
            <motion.div variants={itemVariants} className="h-full">
              {/* Quick Stats */}
              <div className="glass-card-hover rounded-2xl p-6 shadow-2xl border-2 border-white/10 h-full relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-red-500/30 to-transparent rounded-full blur-2xl"></div>

                <h3 className="font-black text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text text-base tracking-wide mb-4 lg:mb-5 relative">
                  KEY ACHIEVEMENTS
                </h3>
                {/* Award Section */}
                <motion.div
                  className="pb-3"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <motion.div
                    className="flex items-center justify-center gap-2 text-white text-sm font-medium glass-card rounded-lg p-3 border border-red-500/30 shadow-lg"
                    whileHover={{ scale: 1.02, y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                    // animate={{
                    //   rotate: [0, -10, 10, -5, 5, 0],
                    //   scale: [1, 1.1, 1],
                    // }}
                    // transition={{
                    //   duration: 2,
                    //   repeat: Infinity,
                    //   repeatDelay: 3,
                    //   ease: "easeInOut",
                    // }}
                    >
                      <Trophy className="w-5 h-5 text-red-600" />
                    </motion.div>
                    <span className="text-center">
                      Nigeria's First Brand driven AI podcast
                      <br />
                      {/* <span className="text-red-600 font-semibold">
                        - Markhack 3.0
                      </span> */}
                    </span>
                  </motion.div>
                </motion.div>

                <div className="grid grid-cols-2 gap-2 pt-1 mb-3">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon;

                    return (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={
                          inView
                            ? { scale: 1, opacity: 1 }
                            : { scale: 0.8, opacity: 0 }
                        }
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                        className="text-center p-3 rounded-xl glass-card-hover hover:scale-105 transition-all duration-300 border border-white/10 group"
                      >
                        <Icon
                          className="w-7 h-7 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 text-red-400"
                        />
                        <div className="font-bold text-base text-white">
                          {metric.value === "SAP" ? (
                            <span className="text-base">SAP S4Hana</span>
                          ) : (
                            <>
                              {inView && (
                                <CountUp
                                  end={metric.value}
                                  duration={2.5}
                                  delay={0.5 + index * 0.1}
                                  suffix={metric.suffix}
                                />
                              )}
                            </>
                          )}
                        </div>
                        <p className="text-xs text-gray-300 leading-tight">
                          {metric.label}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="w-full flex items-center justify-center">
            <motion.button
              whileHover={{
                scale: 1.08,
                y: -4,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => {
                const element = document.getElementById("sap-implementation");
                if (element) {
                  const elementPosition = element.offsetTop - 56;

                  window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth",
                  });
                }
              }}
              className="mt-12 group relative overflow-hidden inline-flex items-center gap-3 px-10 py-4 text-white font-black text-lg rounded-2xl transition-all duration-300 shadow-2xl shadow-red-500/50 hover:shadow-red-500/80 focus:ring-4 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#1a0a0e] red-gradient border-2 border-red-500/30"
              aria-label="Read the full newsletter"
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400 to-rose-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl"></div>

              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <span className="relative z-10">Read Newsletter</span>
              <ArrowDown className="relative z-10 w-6 h-6 group-hover:translate-y-2 transition-transform duration-300" />
            </motion.button>
          </div>
          {/* <motion.div variants={itemVariants} className="text-center mt-10">
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: "#e4002b" }}
              >
                Transform Your Digital Journey
              </h2>
              <p className="text-white/80 mb-6 max-w-3xl mx-auto">
                Explore insights, case studies, and breakthrough innovations
                that are reshaping our industry landscape.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const strategySection =
                    document.getElementById("manufacturing");
                  if (strategySection) {
                    strategySection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-lg hover:opacity-90"
                style={{ backgroundColor: "#e4002b" }}
              >
                <span>Read Full Newsletter</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
