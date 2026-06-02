"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Brain, Briefcase, BarChart3, ArrowUpRight } from "lucide-react";

const serviceCards = [
  {
    title: "AI Strategy",
    description:
      "Leverage artificial intelligence to drive innovation, streamline operations, and unlock new growth opportunities.",
    icon: <Brain className="w-6 h-6" />,
    hasImage: true,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop",
    color: "bg-[#1A1A1A]",
    textColor: "text-white",
  },
  {
    title: "Business Consulting",
    description:
      "Strategic guidance to optimize processes, enhance efficiency, and position your business for long-term success.",
    icon: <Briefcase className="w-6 h-6" />,
    hasImage: false,
    color: "bg-white",
    textColor: "text-[#1A1A1A]",
  },
  {
    title: "Data & Insights",
    description:
      "Transform raw data into actionable insights with advanced analytics, helping you make informed decisions.",
    icon: <BarChart3 className="w-6 h-6" />,
    hasImage: false,
    color: "bg-white",
    textColor: "text-[#1A1A1A]",
  },
];

const intelligenceCards = [
  {
    title: "Machine Learning",
    description:
      "Custom ML models trained on your data to predict trends and automate decision-making at scale.",
    icon: <Brain className="w-6 h-6" />,
    hasImage: true,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=600&fit=crop",
    color: "bg-[#1A1A1A]",
    textColor: "text-white",
  },
  {
    title: "NLP Solutions",
    description:
      "Natural language processing to extract meaning, sentiment, and insights from text and speech data.",
    icon: <BarChart3 className="w-6 h-6" />,
    hasImage: false,
    color: "bg-white",
    textColor: "text-[#1A1A1A]",
  },
  {
    title: "Computer Vision",
    description:
      "Image and video analysis powered by deep learning for quality control, security, and automation.",
    icon: <Briefcase className="w-6 h-6" />,
    hasImage: false,
    color: "bg-white",
    textColor: "text-[#1A1A1A]",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"services" | "intelligence">(
    "services"
  );

  const cards =
    activeTab === "services" ? serviceCards : intelligenceCards;

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F9FAFB]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold text-[#4facfe] uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-tight">
            Comprehensive consulting and intelligent innovation
          </h2>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-10"
        >
          <div className="bg-[#1A1A1A] rounded-full p-1 flex items-center">
            <button
              onClick={() => setActiveTab("services")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "services"
                  ? "bg-[#D9F99D] text-[#1A1A1A]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab("intelligence")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "intelligence"
                  ? "bg-[#D9F99D] text-[#1A1A1A]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Intelligence
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`${card.color} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}
            >
              {card.hasImage && (
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white/70 text-sm">
                      Featured Service
                    </span>
                  </div>
                </div>
              )}
              <div className="p-6 sm:p-8">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    card.color === "bg-[#1A1A1A]"
                      ? "bg-white/10 text-white"
                      : "bg-[#f0f7ff] text-[#4facfe]"
                  }`}
                >
                  {card.icon}
                </div>
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-xl font-semibold ${card.textColor}`}
                  >
                    {card.title}
                  </h3>
                  <ArrowUpRight
                    className={`w-5 h-5 ${
                      card.color === "bg-[#1A1A1A]"
                        ? "text-white/50"
                        : "text-[#999]"
                    }`}
                  />
                </div>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    card.color === "bg-[#1A1A1A]"
                      ? "text-white/60"
                      : "text-[#666666]"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
