"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShieldCheck, PenTool, Code2, TestTube, Rocket, Wrench } from "lucide-react";

export function DevProcessSteps() {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      title: "Requirement Gathering",
      icon: Search,
      description: "We begin by understanding your business goals, gathering detailed requirements, and defining the project scope to create a clear roadmap for success."
    },
    {
      title: "Documentation & NDA",
      icon: ShieldCheck,
      description: "We prepare comprehensive project documentation and sign an NDA to ensure complete confidentiality and transparency from day one."
    },
    {
      title: "UI/UX Design & Planning",
      icon: PenTool,
      description: "Our team designs intuitive user experiences and creates a strategic development plan aligned with your business objectives."
    },
    {
      title: "Development",
      icon: Code2,
      description: "Using Agile methodologies and modern technologies, we build secure, scalable, and high-performance digital solutions tailored to your needs."
    },
    {
      title: "Testing & Quality Assurance",
      icon: TestTube,
      description: "Every feature is thoroughly tested to ensure reliability, security, performance, and a seamless user experience before launch."
    },
    {
      title: "Deployment",
      icon: Rocket,
      description: "We deploy your solution with precision, ensuring a smooth transition and successful go-live with minimal disruption."
    },
    {
      title: "Support & Growth",
      icon: Wrench,
      description: "Our partnership continues after launch with ongoing maintenance, performance optimization, feature enhancements, and dedicated technical support to help your business grow."
    }
  ];

  return (
    <section className="w-full relative py-24 bg-[#f8f9ff] overflow-hidden">
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#4B56D2] font-bold tracking-wider uppercase text-sm mb-4 block">Our Development Process</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            From Vision to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-blue-400">Digital Success</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Tabs Menu */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2 relative">
            {/* Connecting line */}
            <div className="absolute left-[28px] top-4 bottom-4 w-0.5 bg-slate-200 z-0 hidden lg:block" />

            {steps.map((step, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`relative z-10 flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left ${isActive ? "bg-white shadow-xl shadow-[#4B56D2]/10 scale-[1.02]" : "hover:bg-white/50"
                    }`}
                >
                  <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-colors duration-300 ${isActive
                    ? "bg-[#4B56D2] shadow-lg shadow-[#4B56D2]/30"
                    : "bg-white shadow-sm border border-slate-200"
                    }`}>
                    <step.icon className={`w-6 h-6 ${isActive ? "text-white" : "text-slate-400"}`} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${isActive ? "text-[#4B56D2]" : "text-slate-600"}`}>
                      {step.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <div className="w-full lg:w-2/3 h-full min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#4B56D2] rounded-[2rem] p-10 lg:p-16 shadow-[0_30px_60px_-15px_rgba(75,86,210,0.4)] border border-[#4B56D2] h-full flex flex-col justify-center relative overflow-hidden group"
              >
                {/* Decorative Glowing Orbs */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-[100px] group-hover:bg-white/20 transition-colors duration-700 pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-[100px] group-hover:bg-white/10 transition-colors duration-700 pointer-events-none" />
                
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-[1.5rem] bg-white/20 backdrop-blur-xl flex items-center justify-center mb-8 border border-white/30 shadow-xl">
                    {React.createElement(steps[activeTab].icon, { className: "w-10 h-10 text-white" })}
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                    {steps[activeTab].title}
                  </h3>
                  
                  <p className="text-xl text-white/90 leading-relaxed max-w-2xl font-light">
                    {steps[activeTab].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
