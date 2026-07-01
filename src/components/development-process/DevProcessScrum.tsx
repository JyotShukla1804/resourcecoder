"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, FileSearch, Presentation, RotateCcw, ArrowRight } from "lucide-react";

export function DevProcessScrum() {
  const steps = [
    {
      title: "Sprint Planning",
      desc: "We define sprint goals, select items from the backlog, and set clear expectations for the upcoming iteration.",
      icon: FileSearch
    },
    {
      title: "Daily Standups",
      desc: "Daily 15-minute meetings to sync progress, identify blockers, and align the team on immediate tasks.",
      icon: Users
    },
    {
      title: "Sprint Review",
      desc: "A demo session where we present the completed work to stakeholders and gather crucial feedback.",
      icon: Presentation
    },
    {
      title: "Retrospective",
      desc: "Reflecting on the sprint to identify what went well and what can be improved for continuous growth.",
      icon: RotateCcw
    }
  ];

  return (
    <section className="w-full relative py-24 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4B56D2]/5 border border-[#4B56D2]/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#4B56D2] animate-pulse"></span>
            <span className="text-sm font-bold tracking-wider text-[#4B56D2] uppercase">Scrum Framework</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Explore How Our Scrum Methodology Shapes Your Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            We utilize Agile Scrum to ensure transparency, predictability, and continuous value delivery throughout your product's lifecycle.
          </motion.p>
        </div>

        {/* Visual Timeline / Flow */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[50%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#4B56D2]/20 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Connector Arrow (Mobile/Tablet only down, Desktop right) */}
                {idx < steps.length - 1 && (
                  <>
                    <div className="hidden lg:flex absolute top-1/2 -right-[2rem] w-8 items-center justify-center -translate-y-1/2 text-[#4B56D2]/40 z-20">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </>
                )}

                <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgba(75,86,210,0.08)] hover:border-[#4B56D2]/20 transition-all duration-300 h-full flex flex-col items-center text-center group-hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4B56D2]/5 to-[#4B56D2]/10 flex items-center justify-center mb-6 ring-1 ring-[#4B56D2]/20 group-hover:bg-[#4B56D2] group-hover:ring-[#4B56D2] transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-[#4B56D2] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
