"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const logos = [
  { name: "Microsoft", width: 120 },
  { name: "Google", width: 90 },
  { name: "Amazon", width: 100 },
  { name: "Netflix", width: 100 },
  { name: "Spotify", width: 100 },
  { name: "Slack", width: 80 },
  { name: "Stripe", width: 80 },
  { name: "Shopify", width: 100 },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-20 sm:pt-24"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #d8eeff 0%, #e8f4ff 30%, #f5faff 60%, #ffffff 100%)",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#4facfe]/8 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-[#00f2fe]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-[#4facfe]/5 rounded-full blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#4facfe 1px, transparent 1px), linear-gradient(90deg, #4facfe 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating decorative dots */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[15%] w-3 h-3 rounded-full bg-[#4facfe]/30"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-52 left-[10%] w-2 h-2 rounded-full bg-[#00f2fe]/30"
      />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-60 right-[25%] w-4 h-4 rounded-full bg-[#D9F99D]/40"
      />
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-72 left-[20%] w-2.5 h-2.5 rounded-full bg-[#4facfe]/20"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center pt-12 sm:pt-20 pb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-[#4facfe]/20 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#4facfe] animate-pulse" />
            <span className="text-sm font-medium text-[#4facfe]">
              AI-Powered Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1A1A1A] leading-[1.1] max-w-4xl mx-auto"
          >
            Building the future with{" "}
            <span className="gradient-text">AI</span> and strategy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-[#666666] max-w-2xl mx-auto leading-relaxed"
          >
            Digital solutions tailored for your business growth. We combine
            cutting-edge AI with strategic thinking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="flex items-center gap-2.5 px-7 py-3.5 border border-[#1A1A1A]/15 rounded-full text-[#1A1A1A] font-medium hover:bg-white/60 backdrop-blur-sm transition-all group">
              <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={14} className="text-white ml-0.5" />
              </div>
              View demo
            </button>
            <button className="flex items-center gap-2 px-8 py-3.5 bg-[#D9F99D] text-[#1A1A1A] font-semibold rounded-full hover:bg-[#c9f080] hover:shadow-lg hover:shadow-[#D9F99D]/30 transition-all">
              Get Started
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Floating Laptop Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative mt-8 sm:mt-12 pb-8"
        >
          <div className="flex justify-center items-end gap-4 sm:gap-6 lg:gap-8">
            {/* Left Laptop */}
            <motion.div
              initial={{ rotateY: 12, rotateX: -3, opacity: 0 }}
              animate={{ rotateY: 12, rotateX: -3, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              whileHover={{ rotateY: 8, rotateX: -1, y: -8 }}
              className="hidden sm:block w-48 lg:w-64 flex-shrink-0"
            >
              <div className="bg-white rounded-xl shadow-2xl shadow-black/10 overflow-hidden border border-gray-100/80">
                <div className="bg-[#f8f8f8] px-3 py-1.5 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                  <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
                  alt="Dashboard Analytics"
                  className="w-full h-32 lg:h-44 object-cover"
                />
              </div>
              <div className="bg-[#e5e5e5] h-2 rounded-b-lg mx-4" />
              <div className="bg-[#d4d4d4] h-1 mx-8 rounded-b" />
            </motion.div>

            {/* Center Laptop (Main) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              whileHover={{ y: -10 }}
              className="w-72 sm:w-80 lg:w-[420px] flex-shrink-0"
            >
              <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 overflow-hidden border border-gray-100/80">
                <div className="bg-[#f8f8f8] px-4 py-2 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <div className="ml-3 flex-1 bg-white rounded-md px-3 py-0.5">
                    <span className="text-[11px] text-gray-400">
                      aware-dashboard.ai
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                  alt="AI Dashboard"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
              </div>
              <div className="bg-[#e5e5e5] h-3 rounded-b-xl mx-6" />
              <div className="bg-[#d4d4d4] h-1 mx-10 rounded-b" />
            </motion.div>

            {/* Right Laptop */}
            <motion.div
              initial={{ rotateY: -12, rotateX: -3, opacity: 0 }}
              animate={{ rotateY: -12, rotateX: -3, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              whileHover={{ rotateY: -8, rotateX: -1, y: -8 }}
              className="hidden sm:block w-48 lg:w-64 flex-shrink-0"
            >
              <div className="bg-white rounded-xl shadow-2xl shadow-black/10 overflow-hidden border border-gray-100/80">
                <div className="bg-[#f8f8f8] px-3 py-1.5 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                  <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop"
                  alt="Analytics Platform"
                  className="w-full h-32 lg:h-44 object-cover"
                />
              </div>
              <div className="bg-[#e5e5e5] h-2 rounded-b-lg mx-4" />
              <div className="bg-[#d4d4d4] h-1 mx-8 rounded-b" />
            </motion.div>
          </div>
        </motion.div>

        {/* Logo Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 sm:mt-16 pb-16 overflow-hidden"
        >
          <p className="text-center text-sm text-[#999] mb-8 tracking-wider uppercase font-medium">
            Trusted by industry leaders
          </p>
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex animate-slide">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 mx-6 sm:mx-10 flex items-center justify-center"
                  style={{ width: logo.width }}
                >
                  <span className="text-lg sm:text-xl font-bold text-[#c8c8c8] tracking-wide">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
