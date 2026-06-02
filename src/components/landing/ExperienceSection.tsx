"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plus, Cpu, BarChart3, Smartphone, LayoutDashboard } from "lucide-react";

const experienceCards = [
  {
    title: "Automation & Optimization",
    description:
      "Streamline repetitive tasks and optimize workflows with intelligent automation solutions.",
    icon: <Cpu className="w-5 h-5" />,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop",
  },
  {
    title: "Data Analytics & Insights",
    description:
      "Unlock the power of your data with advanced analytics and real-time reporting.",
    icon: <BarChart3 className="w-5 h-5" />,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop",
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize your operations and customer experiences with end-to-end digital solutions.",
    icon: <Smartphone className="w-5 h-5" />,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=400&fit=crop",
  },
  {
    title: "Experience Intelligence",
    description:
      "Combine human-centered design with AI to create seamless user experiences.",
    icon: <LayoutDashboard className="w-5 h-5" />,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold text-[#4facfe] uppercase tracking-wider mb-4">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-tight">
            Where human insight meets intelligent technology
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experienceCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group cursor-pointer transition-all"
            >
              {/* Plus icon top-right */}
              <div className="relative">
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus className="w-4 h-4 text-[#1A1A1A]" />
                </div>
                <div className="h-52 sm:h-56 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f0f7ff] flex items-center justify-center text-[#4facfe]">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-[#666666] leading-relaxed">
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
