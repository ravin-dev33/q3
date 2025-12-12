import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* TOLARAM Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card-premium p-6"
          >
            <h3 className="text-white font-bold text-lg mb-4 tracking-wide">
              TOLARAM
            </h3>
            <div className="space-y-3">
              <a
                href="https://www.tolaram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm"
              >
                Tolaram Digitalization Newsletter
              </a>
              <p className="text-gray-400 text-sm">
                www.tolaram.com - October 2025 Edition
              </p>
            </div>
          </motion.div>

          {/* ABOUT Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card-premium p-6"
          >
            <h3 className="text-white font-bold text-lg mb-4 tracking-wide">
              ABOUT
            </h3>
            <div className="space-y-3">
              <a
                href="https://www.tolaram.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm"
              >
                Team
              </a>
              <a
                href="https://www.tolaram.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* FOOTER Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card-premium p-6"
          >
            <h3 className="text-white font-bold text-lg mb-4 tracking-wide">
              FOOTER
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm"
              >
                Terms & Achievements
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>

        {/* Powered By */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm">
            Powered by Tolaram Group
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
