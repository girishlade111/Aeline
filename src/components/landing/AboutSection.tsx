"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, TrendingUp, Link2, ArrowUpRight } from "lucide-react";

const stats = [
  {
    value: "11+",
    label: "Years of Experience",
    description: "Delivering world-class consulting services across industries",
    bg: "bg-gradient-to-br from-[#4facfe] to-[#00f2fe]",
    textColor: "text-white",
    icon: <Users className="w-5 h-5" />,
    hasAvatar: true,
  },
  {
    value: "9%",
    label: "Growth Rate",
    description: "Consistent year-over-year growth across all markets",
    bg: "bg-white",
    textColor: "text-[#1A1A1A]",
    icon: <TrendingUp className="w-5 h-5 text-[#4facfe]" />,
    hasAvatar: false,
  },
  {
    value: "33k+",
    label: "Global Connections",
    description: "Partners and clients spanning 50+ countries worldwide",
    bg: "bg-[#D9F99D]",
    textColor: "text-[#1A1A1A]",
    icon: <Link2 className="w-5 h-5" />,
    hasAvatar: false,
    hasButton: true,
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold text-[#4facfe] uppercase tracking-wider mb-4">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-tight">
            A global consulting partner dedicated to building smarter and more
            adaptive
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }}
              className={`${stat.bg} rounded-2xl p-6 sm:p-8 ${stat.textColor} transition-all relative overflow-hidden`}
            >
              {/* Decorative corner element */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 rounded-full -translate-y-12 translate-x-12 ${
                  stat.bg === "bg-white"
                    ? "bg-[#4facfe]/5"
                    : "bg-white/10"
                }`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  {stat.hasAvatar && (
                    <div className="flex -space-x-2">
                      <div className="w-9 h-9 rounded-full bg-white/30 border-2 border-white flex items-center justify-center text-xs font-bold">
                        JD
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/30 border-2 border-white flex items-center justify-center text-xs font-bold">
                        MK
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/30 border-2 border-white flex items-center justify-center text-xs font-bold">
                        +9
                      </div>
                    </div>
                  )}
                  {!stat.hasAvatar && (
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        stat.bg === "bg-white"
                          ? "bg-[#f0f7ff]"
                          : "bg-[#1A1A1A]/10"
                      }`}
                    >
                      {stat.icon}
                    </div>
                  )}
                  <ArrowUpRight
                    className={`w-5 h-5 ${
                      stat.bg === "bg-white"
                        ? "text-gray-300"
                        : "bg-white/20 rounded-full p-1 w-8 h-8"
                    }`}
                  />
                </div>

                <p
                  className={`text-4xl sm:text-5xl font-bold ${
                    stat.bg === "bg-white" ? "gradient-text" : ""
                  }`}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-base font-semibold opacity-90">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm opacity-60">{stat.description}</p>

                {stat.hasButton && (
                  <button className="mt-6 px-6 py-2.5 bg-[#1A1A1A] text-white text-sm font-semibold rounded-full hover:bg-[#333] transition-colors inline-flex items-center gap-2">
                    Connection
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
