"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Aware completely transformed how we approach data-driven decision making. Their AI strategy helped us increase revenue by 40% in just six months.",
    name: "Sarah Mitchell",
    title: "CEO",
    company: "TechFlow Inc.",
    avatar: "SM",
    rating: 5,
  },
  {
    quote:
      "The team at Aware brought clarity to our digital transformation journey. Their consulting expertise is unmatched in the industry.",
    name: "David Chen",
    title: "CTO",
    company: "Innovate Labs",
    avatar: "DC",
    rating: 5,
  },
  {
    quote:
      "Working with Aware was a game-changer. They helped us implement AI solutions that saved us thousands of hours annually.",
    name: "Lucie Anderson",
    title: "CEO",
    company: "NexGen Solutions",
    avatar: "LA",
    rating: 5,
  },
  {
    quote:
      "Take my insight — the future of consulting is AI-powered, and Aware is leading the charge. Exceptional results every time.",
    name: "Marcus Rivera",
    title: "VP Operations",
    company: "Global Dynamics",
    avatar: "MR",
    rating: 5,
  },
  {
    quote:
      "The insights we gained through Aware's analytics platform have fundamentally changed our strategic planning process.",
    name: "Emily Zhang",
    title: "Director of Strategy",
    company: "Alpha Ventures",
    avatar: "EZ",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () =>
      setCurrent(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      ),
    []
  , []);

  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((current + i) % testimonials.length);
    }
    return indices;
  };

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
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-tight">
            What our clients say
          </h2>
        </motion.div>

        <div className="mt-12 relative">
          {/* Desktop: 3 cards */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {getVisibleIndices().map((index, i) => (
                <motion.div
                  key={`${testimonials[index].name}-${current}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden"
                >
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4facfe]/10 to-transparent rounded-bl-full" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <Quote className="w-8 h-8 text-[#4facfe]/30" />
                      <div className="flex gap-0.5">
                        {Array.from({ length: testimonials[index].rating }).map(
                          (_, j) => (
                            <Star
                              key={j}
                              className="w-3.5 h-3.5 fill-[#D9F99D] text-[#D9F99D]"
                            />
                          )
                        )}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed text-white/80 mb-6">
                      &ldquo;{testimonials[index].quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4facfe] to-[#00f2fe] flex items-center justify-center text-xs font-bold text-white">
                        {testimonials[index].avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">
                          {testimonials[index].name}
                        </p>
                        <p className="text-xs text-white/40">
                          {testimonials[index].title},{" "}
                          {testimonials[index].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile: 1 card */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-${current}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4facfe]/10 to-transparent rounded-bl-full" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <Quote className="w-8 h-8 text-[#4facfe]/30" />
                    <div className="flex gap-0.5">
                      {Array.from({
                        length: testimonials[current].rating,
                      }).map((_, j) => (
                        <Star
                          key={j}
                          className="w-3.5 h-3.5 fill-[#D9F99D] text-[#D9F99D]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-white/80 mb-6">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4facfe] to-[#00f2fe] flex items-center justify-center text-xs font-bold text-white">
                      {testimonials[current].avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">
                        {testimonials[current].name}
                      </p>
                      <p className="text-xs text-white/40">
                        {testimonials[current].title},{" "}
                        {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-[#666]" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-[#4facfe]"
                      : "w-2 bg-gray-200 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-[#666]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
