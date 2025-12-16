import { motion } from "framer-motion";
import { ChevronDown, Calendar, Globe } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById("sap-implementation");
    if (element) {
      const elementPosition = element.offsetTop - 56;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-red-700 pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 py-6 px-4"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span className="text-white/90 text-sm font-medium tracking-wide uppercase">
            Quarterly Digitalization Newsletter • Issue #03 - Q3 2025
          </span>
        </motion.div>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-4 max-w-6xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2"
            >
              Tolaram
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 leading-none"
              style={{
                WebkitTextStroke: "3px white",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 40px rgba(255,255,255,0.3)",
              }}
            >
              DIGITALIZATION
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white"
            >
              NEWSLETTER
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-lg sm:text-xl md:text-2xl text-white/95 font-light max-w-4xl mx-auto mt-8 px-4"
            >
              Discover our journey through enterprise transformation, AI usage,
              adoption, and operational excellence across the organization.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              onClick={scrollToContent}
              className="inline-flex items-center gap-2 mt-8 px-10 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Read Newsletter
              <ChevronDown className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="bg-white/10 backdrop-blur-sm border-t border-white/20 py-6 px-4"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium">www.tolaram.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span className="font-semibold">PUBLISHER:</span>
              <span>Tolaram Group</span>
            </div>
            <div className="font-medium">October 2025 Edition</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
