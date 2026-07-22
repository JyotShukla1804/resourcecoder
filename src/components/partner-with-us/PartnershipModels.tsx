"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function PartnershipModels() {
  const models = [
    {
      title: "Dedicated Development Team",
      items: [
        "Build your own remote team of experienced developers, designers, and QA engineers.",
        "Work exclusively on your projects as a seamless extension of your in-house team.",
        "Ensure complete transparency, flexibility, and control throughout development."
      ]
    },
    {
      title: "Offshore Development Center (ODC)",
      items: [
        "Establish a scalable offshore development center with Krazio Cloud.",
        "Significantly reduce operational costs without sacrificing quality.",
        "Access world-class technical expertise and seamless collaboration."
      ]
    },
    {
      title: "Project-Based Development",
      items: [
        "Deliver end-to-end custom software, AI, AR/VR/XR, web, and mobile applications.",
        "Ideal for projects ranging from early-stage MVPs to enterprise-scale solutions.",
        "Guaranteed delivery with a clear scope, timeline, and predictable outcomes."
      ]
    },
    {
      title: "Technology Partnership",
      items: [
        "Work with us as your dedicated, long-term technology partner.",
        "Accelerate your digital transformation and modernize legacy systems.",
        "Continuously innovate with secure, scalable solutions tailored to your business."
      ]
    }
  ];

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm mb-4"
          >
            Partnership Models
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Flexible Engagement Models
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the partnership model that best fits your business goals, project requirements, and growth strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {models.map((model, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50/50 rounded-[2rem] p-8 md:p-10 border border-slate-100 hover:border-[#4B56D2]/20 hover:shadow-xl hover:shadow-[#4B56D2]/5 transition-all"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200">
                {model.title}
              </h3>
              <ul className="space-y-5">
                {model.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#4B56D2] shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
