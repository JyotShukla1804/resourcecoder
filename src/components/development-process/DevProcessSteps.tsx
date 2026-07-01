"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, Target, PenTool, Code2, TestTube, Rocket, Wrench } from "lucide-react";

export function DevProcessSteps() {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      title: "Onboarding",
      icon: LogIn,
      description: "We initiate the partnership by aligning on vision, establishing communication channels, and seamlessly integrating our teams to set a strong foundation."
    },
    {
      title: "Scoping",
      icon: Target,
      description: "Our business analysts work closely with you to define project requirements, map out user journeys, and establish clear technical specifications."
    },
    {
      title: "UI/UX Design",
      icon: PenTool,
      description: "Our design team crafts intuitive, user-centric interfaces focused on maximizing engagement and providing a flawless user experience."
    },
    {
      title: "Development",
      icon: Code2,
      description: "Our engineers build your solution using modern, scalable tech stacks, adhering strictly to clean code practices and Agile sprint cycles."
    },
    {
      title: "Testing",
      icon: TestTube,
      description: "Rigorous QA processes including automated testing, manual testing, and performance profiling ensure a robust, bug-free product."
    },
    {
      title: "Deployment",
      icon: Rocket,
      description: "We handle the seamless transition of your application to production environments, ensuring zero downtime and optimal performance tuning."
    },
    {
      title: "Support & Maintenance",
      icon: Wrench,
      description: "Post-launch, we provide continuous monitoring, updates, and optimization to ensure your software remains cutting-edge and secure."
    }
  ];

  return (
    <section className="w-full relative py-24 bg-[#f8f9ff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#4B56D2] font-bold tracking-wider uppercase text-sm mb-4 block">STEP-BY-STEP</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Our Development Process at Krazio: <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-blue-400">From Idea to Execution</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
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
                  className={`relative z-10 flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left ${
                    isActive ? "bg-white shadow-xl shadow-[#4B56D2]/10 scale-[1.02]" : "hover:bg-white/50"
                  }`}
                >
                  <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                    isActive 
                      ? "bg-gradient-to-br from-[#4B56D2] via-blue-500 to-cyan-400 shadow-lg shadow-[#4B56D2]/30" 
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] p-10 lg:p-16 shadow-2xl border border-slate-100 h-full flex flex-col justify-center relative overflow-hidden group"
              >
                {/* Decorative blob inside card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#4B56D2]/5 rounded-full blur-[80px] group-hover:bg-[#4B56D2]/10 transition-colors duration-500" />
                
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#4B56D2]/10 to-transparent flex items-center justify-center mb-8 ring-1 ring-[#4B56D2]/20">
                  {React.createElement(steps[activeTab].icon, { className: "w-10 h-10 text-[#4B56D2]" })}
                </div>
                
                <h3 className="text-4xl font-extrabold text-slate-900 mb-6">
                  {steps[activeTab].title}
                </h3>
                
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  {steps[activeTab].description}
                </p>
                
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
