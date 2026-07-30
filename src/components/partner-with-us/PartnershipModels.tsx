"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function PartnershipModels() {
  const models = [
    {
      title: "Become a Channel Partner",
      items: [
        "Earn 20% referral commission on every successful project.",
        "Get paid on MRR (Monthly Recurring Revenue) or ARR (Annual Recurring Revenue) models.",
        "No delivery responsibility, we handle development, support, and project management.",
        "White-label collaboration to protect your brand and client relationships.",
        "Join our network of 50+ global channel partners driving mutual growth."
      ]
    },
    {
      title: "Why Partner with Krazio Cloud?",
      items: [
        "Dedicated team with 10+ years of software development experience.",
        "Access to 100+ vetted developers across multiple technologies.",
        "Fast onboarding and transparent project execution.",
        "Expand your service portfolio without hiring in-house resources.",
        "Dedicated partner success manager to support every opportunity."
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
            Grow your business without increasing your delivery overhead. Whether you're an agency, consultant, IT company, or independent sales professional, partner with Krazio Cloud and earn recurring revenue by referring clients who need dedicated developers and software development services.
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
