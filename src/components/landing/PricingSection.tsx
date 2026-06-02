"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/month",
    description: "Perfect for small businesses getting started",
    bg: "bg-white",
    featured: false,
    features: [
      { text: "5 projects", included: true },
      { text: "Business process mapping", included: true },
      { text: "Basic analytics", included: true },
      { text: "Email support", included: true },
      { text: "Advanced AI models", included: false },
      { text: "Multi-platform integration", included: false },
    ],
  },
  {
    name: "Growth",
    price: "$8,500",
    period: "/month",
    description: "For growing businesses that need more power",
    bg: "bg-[#D9F99D]",
    featured: true,
    features: [
      { text: "20 projects", included: true },
      { text: "Advanced AI models", included: true },
      { text: "Multi-platform integration", included: true },
      { text: "Priority support", included: true },
      { text: "Custom dashboards", included: true },
      { text: "Dedicated manager", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: "$10,500",
    period: "/month",
    description: "For large organizations with advanced needs",
    bg: "bg-white",
    featured: false,
    features: [
      { text: "Unlimited projects", included: true },
      { text: "Custom AI models", included: true },
      { text: "Full platform integration", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Custom dashboards", included: true },
      { text: "Dedicated manager", included: true },
    ],
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="py-20 sm:py-28 bg-[#F9FAFB]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold text-[#4facfe] uppercase tracking-wider mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-tight">
            Every Stage of Growth
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span
              className={`text-sm font-medium ${
                !isAnnual ? "text-[#1A1A1A]" : "text-[#999]"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                isAnnual ? "bg-[#4facfe]" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
                  isAnnual ? "left-7" : "left-1"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${
                isAnnual ? "text-[#1A1A1A]" : "text-[#999]"
              }`}
            >
              Annual
              <span className="ml-1 text-xs text-[#4facfe] font-semibold">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className={`${plan.bg} rounded-2xl p-6 sm:p-8 border ${
                plan.featured
                  ? "border-[#D9F99D] shadow-lg scale-[1.02]"
                  : "border-gray-100 shadow-sm"
              } flex flex-col transition-all relative`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#1A1A1A] text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-[#1A1A1A]">
                  {plan.name}
                </h3>
                <p className="text-sm text-[#666666] mt-1">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-bold text-[#1A1A1A]">
                    {isAnnual
                      ? `$${Math.round(
                          parseInt(plan.price.replace(/[$,]/g, "")) * 0.8
                        ).toLocaleString()}`
                      : plan.price}
                  </span>
                  <span className="text-sm text-[#666666]">{plan.period}</span>
                </div>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-[#4facfe]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#4facfe]" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-gray-400" />
                      </div>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-[#1A1A1A]"
                          : "text-[#999]"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3.5 rounded-full font-semibold text-sm transition-colors ${
                  plan.featured
                    ? "bg-[#1A1A1A] text-white hover:bg-[#333]"
                    : "bg-[#1A1A1A] text-white hover:bg-[#333]"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
