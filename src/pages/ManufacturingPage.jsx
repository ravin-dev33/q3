import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ManufacturingSection from "../chapters/ManufacturingSection";
import Particles from "../components/Particles";

const ManufacturingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      {/* Particles Background */}
      <Particles className="absolute inset-0 z-0" quantity={50} />

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-24 left-6 z-50"
      >
        <button
          onClick={() => navigate("/")}
          className="glass-card-premium px-6 py-3 rounded-full font-semibold text-white hover:scale-105 transition-transform duration-300 inline-flex items-center gap-3 border-2 border-orange-500/30"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Back to Home</span>
        </button>
      </motion.div>

      {/* Chapter Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 pt-8"
      >
        <ManufacturingSection />
      </motion.div>
    </div>
  );
};

export default ManufacturingPage;
