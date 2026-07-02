"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Target, Zap, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Accelerated Growth",
    description: "Bypass common pitfalls and fast-track your startup's growth with battle-tested strategies.",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Identify your ideal customer profile and build a product that solves real pain points.",
  },
  {
    icon: Zap,
    title: "Tech Architecture",
    description: "Design scalable, future-proof technical foundations that can handle massive user growth.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Mitigation",
    description: "Minimize financial and technical risks with expert validation before you invest heavily.",
  },
];

export function WhyChooseConsulting() {
  return (
    <section className="w-full py-24 bg-white relative z-10">
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="badge-primary mb-6 inline-block">WHY CHOOSE US</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
            Why Partner with Our Experts?
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We don't just give advice; we provide actionable roadmaps based on years of experience building and scaling successful tech products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50/50 rounded-[32px] p-8 border border-slate-100 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(75,86,210,0.1)] hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#4B56D2]/10 flex items-center justify-center mb-6 group-hover:bg-[#4B56D2] group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-6 h-6 text-[#4B56D2] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
