import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import {
  Settings,
  Users,
  Factory,
  Shield,
  DollarSign,
  Megaphone,
  Truck,
  TrendingUp,
  Award,
  ArrowRight,
} from "lucide-react";
import Particles from "../components/Particles";
import HeroSection from "../chapters/HeroSection";
import HighlightsSection from "../chapters/HighlightsSection";
import KeyAchievementsSection from "../chapters/KeyAchievementsSection";

const Home = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const chapters = [
    {
      id: "sap",
      title: "SAP IMPLEMENTATION",
      subtitle: "Digital Transformation",
      description:
        "Our Q3 2025 SAP implementation program delivered significant operational improvements and digital capabilities across the organization.",
      icon: Settings,
      color: "from-red-500 to-orange-500",
      bgColor: "red",
      path: "/sap",
    },
    {
      id: "gitex",
      title: "GITEX CONFERENCE",
      subtitle: "Special Feature",
      description:
        "Tolaram attended the landmark GITEX conference, held in Abuja and at Lagos's Eko Hotel, engaging with the future of technology.",
      icon: Users,
      color: "from-blue-500 to-indigo-500",
      bgColor: "blue",
      path: "/gitex",
    },
    {
      id: "it",
      title: "IT INFRASTRUCTURE",
      subtitle: "Security & Innovation",
      description:
        "Strengthening our digital foundation with enhanced cybersecurity measures and cutting-edge infrastructure solutions.",
      icon: Shield,
      color: "from-cyan-500 to-blue-500",
      bgColor: "cyan",
      path: "/it-infrastructure",
    },
    {
      id: "marketing",
      title: "MARKETING",
      subtitle: "Digital Progress",
      description:
        "Transforming marketing operations through innovative digital solutions and creative campaigns that drive engagement.",
      icon: Megaphone,
      color: "from-purple-500 to-pink-500",
      bgColor: "purple",
      path: "/marketing",
    },
    {
      id: "manufacturing",
      title: "MANUFACTURING",
      subtitle: "Industry 4.0",
      description:
        "Revolutionizing manufacturing processes with AI-powered solutions and smart automation technologies.",
      icon: Factory,
      color: "from-orange-500 to-red-500",
      bgColor: "orange",
      path: "/manufacturing",
    },
    {
      id: "finance",
      title: "FINANCE AUTOMATIONS",
      subtitle: "Financial Excellence",
      description:
        "Streamlining financial operations with automated solutions and integrated banking systems.",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      bgColor: "green",
      path: "/finance",
    },
    {
      id: "logistics",
      title: "LOGISTICS & SUPPLY CHAIN",
      subtitle: "Operational Excellence",
      description:
        "Optimizing supply chain operations with AI-driven safety solutions and digital transformation initiatives.",
      icon: Truck,
      color: "from-amber-500 to-orange-500",
      bgColor: "amber",
      path: "/logistics",
    },
    {
      id: "sales",
      title: "SALES",
      subtitle: "Digital Innovation",
      description:
        "Enhancing sales workflows with digital innovations and streamlined processes for improved efficiency.",
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500",
      bgColor: "indigo",
      path: "/sales",
    },
    {
      id: "achievements",
      title: "CERTIFICATIONS & ACHIEVEMENTS",
      subtitle: "Excellence Recognition",
      description:
        "Celebrating our team's professional growth and achievements through certifications and recognitions.",
      icon: Award,
      color: "from-yellow-500 to-amber-500",
      bgColor: "yellow",
      path: "/achievements",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Three Stages Section */}
      <section className="relative py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 text-gray-900 dark:text-white"
          >
            THE THREE STAGES OF DIGITAL GROWTH
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digitisation ?",
                description: "Converting analog information into digital format",
              },
              {
                title: "Digitalisation ?",
                description: "Using digital technologies to change business processes",
              },
              {
                title: "Digital Transformation ?",
                description: "Fundamental rethinking of how an organization uses technology",
              },
            ].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                  <span className="w-3 h-3 bg-red-500 rounded-full" />
                  {stage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  {stage.description}
                </p>
                <div className="flex justify-end">
                  <motion.div
                    whileHover={{ scale: 1.1, x: 5 }}
                    className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <KeyAchievementsSection />

      {/* Chapters Grid Section */}
      <section id="chapters" className="relative py-16 px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              EXPLORE OUR CHAPTERS
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Dive into our comprehensive coverage of digital transformation
              across all departments
            </p>
          </motion.div>

          {/* Chapter Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate(chapter.path)}
                className="glass-card-premium p-6 rounded-3xl cursor-pointer group relative overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${chapter.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-${chapter.bgColor}-500/20 flex items-center justify-center mb-6 border border-${chapter.bgColor}-500/30`}
                >
                  <chapter.icon className={`w-8 h-8 text-${chapter.bgColor}-400`} />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-2">
                    <span className={`text-xs font-bold text-${chapter.bgColor}-400 tracking-wider`}>
                      {chapter.subtitle}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {chapter.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {chapter.description}
                  </p>

                  {/* Read More Button */}
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300">
                    <span className="text-sm">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${chapter.color} opacity-10 blur-3xl`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass-card-premium p-12 rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-black text-red-500 mb-2"
                >
                  9
                </motion.div>
                <div className="text-sm text-gray-400 font-medium">
                  Chapters
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-black text-blue-500 mb-2"
                >
                  Q3
                </motion.div>
                <div className="text-sm text-gray-400 font-medium">
                  2025 Edition
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-black text-green-500 mb-2"
                >
                  100+
                </motion.div>
                <div className="text-sm text-gray-400 font-medium">
                  Initiatives
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-black text-purple-500 mb-2"
                >
                  ∞
                </motion.div>
                <div className="text-sm text-gray-400 font-medium">
                  Innovation
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
