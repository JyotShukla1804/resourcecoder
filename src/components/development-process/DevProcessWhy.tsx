"use client";

import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, Users, Eye, CheckCircle2, Clock, LifeBuoy, ShieldCheck, MessageSquare } from "lucide-react";

export function DevProcessWhy() {
  const features = [
    { icon: RefreshCw, title: "Agile methodology", desc: "Iterative sprints ensuring continuous improvement." },
    { icon: Users, title: "Dedicated Team & Experts", desc: "Top-tier talent focused entirely on your success." },
    { icon: Eye, title: "100% Transparency", desc: "Full visibility into progress, code, and costs." },
    { icon: CheckCircle2, title: "Bug-free Delivery", desc: "Rigorous QA testing at every development stage." },
    { icon: Clock, title: "Fast Time-to-Market", desc: "Optimized pipelines to launch your product rapidly." },
    { icon: LifeBuoy, title: "End-to-End Support", desc: "Comprehensive maintenance from ideation to post-launch." },
    { icon: ShieldCheck, title: "Strict Adherence to NDA", desc: "Your IP is completely protected and confidential." },
    { icon: MessageSquare, title: "Seamless Communication", desc: "Direct access to your team without bottlenecks." },
  ];

  return (
    <section className="w-full py-24 bg-[#f8f9ff] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4B56D2]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Why should you choose Krazio's Development Process?
          </h2>
          <p className="text-slate-600 text-lg">
            We don't just write code. We partner with you to engineer scalable, world-class products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-[0_20px_40px_rgba(75,86,210,0.08)] hover:border-[#4B56D2]/20 transition-all duration-300 group"
            >
              {/* iOS App Style Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-xl shadow-[#4B56D2]/10 ring-4 ring-slate-50 group-hover:scale-110 transition-transform duration-300 relative">
                <feature.icon className="w-7 h-7 text-[#4B56D2]" strokeWidth={2} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#4B56D2] transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
