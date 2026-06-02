"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "How AI Strategy is Reshaping Business Growth in 2026",
    category: "AI Strategy",
    readTime: "5 min read",
    date: "Jan 15, 2026",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=350&fit=crop",
  },
  {
    title: "The Future of Human-Machine Collaboration",
    category: "Innovation",
    readTime: "7 min read",
    date: "Jan 10, 2026",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=350&fit=crop",
  },
  {
    title: "Sustainable Growth Through Data-Driven Decisions",
    category: "Growth",
    readTime: "4 min read",
    date: "Jan 5, 2026",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=350&fit=crop",
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-20 sm:py-28 bg-[#F9FAFB]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold text-[#4facfe] uppercase tracking-wider mb-4">
            Blog & Insights
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-tight">
            Latest insights and trends
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group cursor-pointer transition-all"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#1A1A1A]">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-[#1A1A1A]" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-[#999] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[#1A1A1A] leading-snug group-hover:text-[#4facfe] transition-colors">
                  {post.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
