import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MessageSquare,
  Sparkles,
  Brain,
  BarChart3,
  Users,
  Trophy,
  Video,
  Mic,
  Target,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Q3MarketingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [expandedSections, setExpandedSections] = useState({
    featuresImage: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
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
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="space-y-8"
    >
      {/* Project 1: Addme Chatbot */}
      <div
        id="q3-addme-chatbot"
        className="bg-white rounded-2xl shadow-lg border border-red-100 overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#e4002b" }}
              >
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Addme Chatbot</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Technology:</span>{" "}
                  Sophisticated AI chatbot
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Brand:</span> Addme
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Persona:</span> "Kitchen Mama"
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-xl">
                <h5 className="font-bold text-gray-900 mb-2">Features:</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Product inquiries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Kitchen and lifestyle hacks</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-red-700 font-medium">
                Impact: Elevates brand from product provider to trusted
                lifestyle partner
              </p>
            </div>
          </div>
          <div className="bg-[#fff6d6] flex items-center justify-center p-6">
            <img
              src="/image4.png"
              alt="Addme Chatbot"
              className="h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Project 2: Colgate BBN Yanga Spotlight */}
      <div
        id="q3-colgate-bbn"
        className="bg-white rounded-2xl shadow-lg border border-red-100 overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="order-2 md:order-1 bg-gray-100 flex items-center justify-center p-6">
            <img
              src="/image7.png"
              alt="Colgate BBN Yanga"
              className="w-full h-full rounded-xl"
            />
          </div>
          <div className="order-1 md:order-2 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#e4002b" }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Colgate BBN Yanga Spotlight
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Campaign:</span> Colgate Yanga
                  Smiles digital campaign
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Integration:</span> Big
                  Brother Naija
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-xl">
                <h5 className="font-bold text-gray-900 mb-2">Features:</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>
                      "Big Brother Voice" engagement on current trends
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Social media interaction on X (Twitter)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Hashtag: #yangawithcolgate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Prize competitions</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-red-700 font-medium">
                Impact: Significant reach and social media interaction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3: Addme to BBN AI Campaign */}
      <div className="bg-white rounded-2xl shadow-lg border border-red-100 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#e4002b" }}
              >
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Addme to BBN AI Campaign
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Campaign:</span> 'Addme to
                  BBN'
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Technology:</span> AI-powered
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Experience:</span> Virtual Big
                  Brother Naija throne sitting
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-xl">
                <h5 className="font-bold text-gray-900 mb-2">Features:</h5>
                <p className="text-sm text-gray-700">
                  Hyper-personalized & shareable content
                </p>
              </div>
              <p className="text-sm text-red-700 font-medium">
                Impact: Significant reach through social media sharing of
                AI-generated videos
              </p>
              <a
                href="https://ai.addmetobbn.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm"
              >
                Visit Campaign Site
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="bg-gray-100 flex items-center justify-center p-6">
            <img
              src="/image6.png"
              alt="Addme to BBN AI"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Project 5: Indomitables Fan Club (IFC) App */}
      <div
        id="q3-ifc-app"
        className="bg-white rounded-2xl shadow-lg border border-red-100 overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="order-2 md:order-1 bg-[#f0ebd8] flex items-center justify-center p-6">
            <img
              src="/image9.png"
              alt="IFC App"
              className="w-[70%] object-cover rounded-xl"
            />
          </div>
          <div className="order-1 md:order-2 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#e4002b" }}
              >
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Indomitables Fan Club (IFC) App
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Occasion:</span> 20th
                  anniversary of Indomie Fans Club
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Status:</span> Launched (MVP
                  version)
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-xl">
                <h5 className="font-bold text-gray-900 mb-2">Features:</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Parent and kid registration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>
                      Redeem unique coupon codes from Indomie wrappers for
                      digital coins
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Leaderboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Win merchandise goods</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-red-700 font-medium">
                Impact: Modernizes loyalty program, deepens community engagement
              </p>
              <div className="flex justify-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.ifc.app&hl=en-US&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity duration-300"
                >
                  <img
                    src="/IFC_QR.png"
                    alt="IFC App"
                    className="w-[40%] mx-auto object-cover rounded-xl"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 9: AI Podcast */}
      <div
        id="q3-ai-podcast"
        className="bg-white rounded-2xl shadow-lg border border-red-100 overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#e4002b" }}
              >
                <Mic className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">AI Podcast</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Distinction:</span> Nigeria's
                  first-ever brand-driven AI podcast
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Brand:</span> Indomie Relish
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Technology:</span> Entirely
                  AI-generated
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-xl">
                <h5 className="font-bold text-gray-900 mb-2">Reception:</h5>
                <p className="text-sm text-gray-700 mb-3">
                  Customers perceive it as authentic and compelling content
                </p>
                <h5 className="font-bold text-gray-900 mb-2">Next Step:</h5>
                <p className="text-sm text-gray-700">
                  Reveal AI nature through healthy debate among Tech Influencers
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex items-center justify-center p-6">
            <img
              src="/image13.png"
              alt="AI Podcast"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Project 4: Sales AI Agent */}
      {/* <div id="q3-sales-ai" className="bg-white rounded-2xl shadow-lg border border-red-100 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: "#e4002b" }}
          >
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Sales AI Agent</h3>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Status:</span> Initiated
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Technology:</span> Sophisticated
              ML model
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Users:</span> Field Executives
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-xl">
            <h5 className="font-bold text-gray-900 mb-2">Features:</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>
                  Predict next-purchase quantities using historical data
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Optimize route plans</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Identify up-sell and cross-sell opportunities</span>
              </li>
            </ul>
          </div>
          <p className="text-sm text-red-700 font-medium">
            Impact: Data-driven insights, optimize sales strategies, maximize
            revenue potential
          </p>
        </div>
      </div> */}

      {/* Project 6: Colgate Project Spotlight */}
      <div
        id="q3-colgate-spotlight"
        className="bg-white rounded-2xl shadow-lg border border-red-100 p-6 md:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: "#e4002b" }}
          >
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            Colgate Project Spotlight (MVP)
          </h3>
        </div>
        <div className="space-y-4 mb-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Technology:</span> An AI-driven
              system for automated validation of in-store placement and display
              compliance
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Scale:</span> 1000+ Outlets in
              Nigeria
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Products:</span> Colgate products
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-xl">
            <h5 className="font-bold text-gray-900 mb-2">Features:</h5>
            <p className="text-sm text-gray-700">
              Real-time Q3'25 compliance status and display metrics through
              AI-powered analysis
            </p>
          </div>
          <p className="text-sm text-red-700 font-medium">
            Impact: Improves transparency and operational oversight on product
            visibility across Nigeria
          </p>
        </div>
      </div>

      {/* Project 7: BTL AI/Data Governance */}
      {/*
      <div className="bg-white rounded-2xl shadow-lg border border-red-100 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: "#e4002b" }}
          >
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            BTL AI/Data Governance
          </h3>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Scope:</span> Comprehensive AI &
              Data Governance study across entire BTL Marketing process
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Focus:</span> Transform into
              data-driven, future-ready organization
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Compliance:</span> Nigerian Data
              Protection Regulation (NDPR) standards
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-xl">
            <p className="text-sm text-gray-700">
              Governance frameworks extending to other marketing domains
            </p>
          </div>
        </div>
      </div>
      */}

      {/* Project 8: AI Video Training */}
      <div className="bg-white rounded-2xl shadow-lg border border-red-100 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: "#e4002b" }}
          >
            <Video className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">AI Video Training</h3>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Workshop:</span> Veo3
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Trainees:</span> Over 100 people
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Focus:</span> Customized and
              high-quality AI prompting structures using hands-on tools
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-xl">
            <h5 className="font-bold text-gray-900 mb-2">Output:</h5>
            <p className="text-sm text-gray-700">
              Over 300 AI commercial videos generated
            </p>
          </div>
          <p className="text-sm text-red-700 font-medium">
            Impact: Enhances internal capacity for rapid and scalable content
            creation, more A/B testing samples at reduced cost and manhours
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Q3MarketingSection;
