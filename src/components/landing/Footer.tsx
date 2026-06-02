"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = {
  Home: ["Overview", "Features", "Solutions", "Tutorials"],
  Services: ["AI Strategy", "Consulting", "Analytics", "Automation"],
  "About Us": ["Company", "Careers", "Press", "Partners"],
  Contact: ["Support", "Sales", "Partnership", "FAQ"],
  Pricing: ["Starter", "Growth", "Enterprise", "Custom"],
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref}>
      {/* CTA Block */}
      <section className="relative overflow-hidden">
        <div
          className="relative"
          style={{
            background:
              "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
          }}
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/5 rounded-full translate-y-1/2" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="max-w-xl text-center lg:text-left"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                  We combine human insight with artificial intelligence
                </h2>
                <p className="mt-4 text-white/70 text-base leading-relaxed">
                  Start your transformation journey today and unlock the full
                  potential of AI-driven strategy for your business.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
                  <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1A1A1A] text-white font-semibold rounded-full hover:bg-[#333] transition-colors shadow-lg shadow-black/20">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>

              {/* Decorative image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block flex-shrink-0"
              >
                <div className="relative w-80 h-64">
                  <img
                    src="https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=500&h=400&fit=crop"
                    alt="Flowers"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-black/20"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#4facfe]/30 to-transparent" />
                  {/* Small floating card */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-4 -left-6 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#D9F99D] flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-[#1A1A1A]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#1A1A1A]">
                        Growth Rate
                      </p>
                      <p className="text-[11px] text-[#4facfe] font-bold">
                        +9% YoY
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Logo & Tagline */}
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4facfe] to-[#00f2fe] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-semibold text-white">
                  Aware
                </span>
              </div>
              <p className="text-sm text-white/45 max-w-xs leading-relaxed">
                Digital solutions tailored for your business growth. Building
                smarter futures with AI-powered consulting.
              </p>
              <div className="flex items-center gap-3 mt-6">
                {[
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Facebook, label: "Facebook" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-white/80" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-white mb-4">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/40 hover:text-white/65 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/45">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@aware.ai
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/35">
              Copyright &copy;2026 Aware. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-white/35 hover:text-white/55 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-white/35 hover:text-white/55 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
