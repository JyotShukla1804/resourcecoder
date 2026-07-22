"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Target, Zap, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Innovation Driven Solutions",
    description: "Harness the power of AI, AR/VR/XR, Machine Learning, and custom software to accelerate digital transformation and unlock new business opportunities.",
  },
  {
    icon: Target,
    title: "Scalable Technology",
    description: "We architect secure, high performance, and scalable solutions that evolve with your business and support long term growth.",
  },
  {
    icon: Zap,
    title: "Expert Technology Team",
    description: "Collaborate with experienced developers, designers, AI specialists, and technology consultants dedicated to delivering exceptional digital experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Long Term Partnership",
    description: "From strategy and development to deployment and ongoing support, we work as your trusted technology partner, ensuring continuous innovation and measurable business success.",
  },
];

export function WhyChooseConsulting() {
  return (
    <section className="w-full py-24 bg-white relative z-10">
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="badge-primary mb-6 inline-block">WHY CHOOSE US</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
            Why Choose Krazio Cloud?
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We don't just build software we create innovative, scalable, and future ready digital solutions that empower businesses to grow, innovate, and stay ahead in an ever evolving digital landscape.
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
