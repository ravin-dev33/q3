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
import HighlightsSection from "../chapters/HighlightsSection";

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
      {/* Particles Background */}
      <Particles className="absolute inset-0 z-0" quantity={100} />

      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/hero_bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 inline-block"
          >
            <div className="glass-card-premium p-6 rounded-3xl">
              <img
                src="/logo.png"
                alt="Tolaram Logo"
                className="h-20 w-auto mx-auto"
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              TOLARAM
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
              DIGITALIZATION NEWSLETTER
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto"
          >
            October 2025 Edition
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base sm:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Discover our journey of digital transformation, innovation, and
            excellence across all business verticals. Explore our achievements,
            implementations, and future-ready initiatives.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12"
          >
            <button
              onClick={() => {
                document
                  .getElementById("chapters")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="glass-card-premium px-8 py-4 rounded-full font-bold text-white hover:scale-105 transition-transform duration-300 inline-flex items-center gap-3 border-2 border-red-500/30"
            >
              Explore Chapters
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <HighlightsSection />

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
