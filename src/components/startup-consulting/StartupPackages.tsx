"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Discovery Call",
    price: "Free",
    duration: "30 Minutes",
    description: "A quick pulse check on your startup idea to see if we're a good fit.",
    features: [
      "Initial idea validation",
      "High-level tech feasibility",
      "Basic market fit analysis",
    ],
    popular: false,
    btnText: "Book Now",
    style: "bg-white border-slate-200 text-slate-800",
  },
  {
    name: "MVP Blueprint",
    price: "$999",
    duration: "2-Week Sprint",
    description: "A comprehensive roadmap for building and launching your Minimum Viable Product.",
    features: [
      "Deep-dive market research",
      "Full tech stack recommendation",
      "Step-by-step sprint planning",
      "Resource & budget estimation",
    ],
    popular: true,
    btnText: "Start Blueprint",
    style: "bg-[#4B56D2] border-[#4B56D2] text-white",
  },
  {
    name: "CTO as a Service",
    price: "Custom",
    duration: "Ongoing",
    description: "Long-term technical leadership to guide your team through scaling.",
    features: [
      "Everything in MVP Blueprint",
      "Weekly strategy sessions",
      "Code & architecture reviews",
      "Hiring & team building support",
    ],
    popular: false,
    btnText: "Let's Talk",
    style: "bg-slate-900 border-slate-900 text-white",
  },
];

export function StartupPackages() {
  return (
    <section className="w-full py-24 bg-slate-50 relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
            Consulting Packages
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Choose the level of engagement that fits your startup's current stage and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 border shadow-xl ${pkg.style} ${pkg.popular ? 'md:-translate-y-4 md:scale-105 z-10' : 'z-0'}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : ''}`}>{pkg.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className={`text-4xl font-extrabold ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>{pkg.price}</span>
                  <span className={`text-sm ${pkg.popular ? 'text-indigo-200' : 'text-slate-500'}`}>/ {pkg.duration}</span>
                </div>
                <p className={`text-sm ${pkg.popular ? 'text-indigo-100' : 'text-slate-600'}`}>{pkg.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${pkg.popular ? 'text-indigo-300' : 'text-[#4B56D2]'}`} />
                    <span className={`text-sm font-medium ${pkg.popular ? 'text-white' : 'text-slate-700'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="#interview-section"
                className={`w-full flex items-center justify-center py-4 rounded-xl font-bold transition-all duration-300 group ${
                  pkg.popular 
                    ? 'bg-white text-[#4B56D2] hover:bg-slate-50' 
                    : pkg.name === 'CTO as a Service'
                      ? 'bg-white/10 text-white hover:bg-white/20'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {pkg.btnText}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
