import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Package,
  CheckCircle,
  Building,
  CreditCard,
  TrendingUp,
  FileCheck,
} from "lucide-react";

const Q3FinanceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

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
      {/* Main Container */}
      <div className="bg-gradient-to-br from-red-50/50 to-orange-50/50 rounded-2xl shadow-lg overflow-hidden">
        <div className="px-6 py-8 bg-gradient-to-r from-red-600/10 to-orange-600/10">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br from-red-600 to-red-700"
              style={{ backgroundColor: "#e4002b" }}
            >
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Finance Overview
              </h3>
              <p className="text-sm text-gray-600">
                Asset Management & Financial Operations
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-12">
          {/* Asset Verification Section */}
          <div className="group">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#e4002b" }}
              >
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  Asset Verification Portal
                </h4>
                <p className="text-sm text-gray-600">Dufil & MCPL Management</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* MCPL */}
              <div className="bg-white p-6 rounded-2xl border border-red-200 hover:border-red-300 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <Building className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h5 className="text-lg font-bold text-gray-900 mb-2">
                      MCPL
                    </h5>
                  </div>
                </div>
                <div className="grid md:grid-cols-1 gap-4">
                  {/* <div className="flex items-center justify-between p-4 bg-red-50/50 rounded-lg">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">
                        Assets Tagged
                      </p>
                      <p className="text-2xl font-bold text-red-600">2247</p>
                    </div>
                    <FileCheck className="w-8 h-8 text-red-600" />
                  </div> */}
                  <div className="flex items-center justify-between p-3 bg-red-50/50 rounded-lg">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">
                        Assets Verified
                      </p>
                      <p className="text-2xl font-bold text-red-600">2246</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-red-600" />
                  </div>
                </div>
              </div>

              {/* Dufil */}
              <div className="bg-white p-6 rounded-2xl border border-red-200 hover:border-red-300 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <Building className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h5 className="text-lg font-bold text-gray-900 mb-2">
                      Dufil
                    </h5>
                  </div>
                </div>
                <div className="grid md:grid-cols-1 gap-4">
                  {/* <div className="flex items-center justify-between p-4 bg-red-50/50 rounded-lg">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">
                        Assets Tagged
                      </p>
                      <p className="text-2xl font-bold text-red-600">1353</p>
                    </div>
                    <FileCheck className="w-8 h-8 text-red-600" />
                  </div> */}
                  <div className="flex items-center justify-between p-3 bg-red-50/50 rounded-lg">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">
                        Assets Verified
                      </p>
                      <p className="text-2xl font-bold text-red-600">1100</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-red-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bank Reconciliation Section */}
          <div className="group">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#e4002b" }}
              >
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  Bank Reconciliation
                </h4>
                <p className="text-sm text-gray-600">
                  Financial Tracking & Alignment
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {/* Banks List */}
              <div className="bg-white p-6 rounded-2xl border border-red-200 hover:border-red-300 transition-all duration-300">
                <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  Successfully Completed for 15 banks but 5 done in Q3:
                </h5>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <div class="bg-red-50/50 p-3 rounded-lg text-center">
                    <p class="font-semibold text-gray-900 mb-1">Stanbic IBTC</p>
                    <div class="text-xs text-gray-700 space-y-0.5 grid grid-cols-2 gap-2">
                      <p>MCPL</p>
                      <p>GUINNESS</p>
                      <p>DUFIL</p>
                    </div>
                  </div>

                  <div class="bg-red-50/50 p-3 rounded-lg text-center">
                    <p class="font-semibold text-gray-900 mb-1">GT Bank</p>
                    <div class="text-xs text-gray-700 space-y-0.5 grid grid-cols-2 gap-2">
                      <p>GUINNESS</p>
                      <p>DUFIL</p>
                    </div>
                  </div>

                  <div class="bg-red-50/50 p-3 rounded-lg text-center">
                    <p class="font-semibold text-gray-900 mb-1">First Bank</p>

                    <div class="text-xs text-gray-700 space-y-0.5 grid grid-cols-2 gap-2">
                      <p>MCPL</p>
                      <p>GUINNESS</p>
                      <p>LUSH</p>
                      <p>DUFIL</p>
                    </div>
                  </div>

                  <div class="bg-red-50/50 p-3 rounded-lg text-center">
                    <p class="font-semibold text-gray-900 mb-1">FCMB</p>
                    <div class="text-xs text-gray-700 space-y-0.5 grid grid-cols-2 gap-2">
                      <p>GUINNESS</p>
                      <p>DUFIL</p>
                    </div>
                  </div>
                  <div class="bg-red-50/50 p-3 rounded-lg text-center">
                    <p class="font-semibold text-gray-900 mb-1">ACCESS Bank</p>
                    <div class="text-xs text-gray-700 space-y-0.5 grid grid-cols-2 gap-2">
                      <p>LUSH</p>
                    </div>
                  </div>
                  <div class="bg-red-50/50 p-3 rounded-lg text-center">
                    <p class="font-semibold text-gray-900">
                      Standard Bank (SA)
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact */}
              <div className="bg-white p-6 rounded-2xl border border-red-200 hover:border-red-300 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2">
                      Business Impact
                    </h5>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Accurate financial alignment, improved cash flow
                      visibility
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Q3FinanceSection;
