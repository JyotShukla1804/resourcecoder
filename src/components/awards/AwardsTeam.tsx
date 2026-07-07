"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Code, LineChart } from "lucide-react";

export function AwardsTeam() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "engineers",
      label: "Top-Tier IT Geniuses",
      icon: <Code className="w-5 h-5" />,
      title: "Elite Software Developers",
      description: "At ResourceCoders we bring together the most elite software developers, UI/UX designers, QA experts, and product managers, all with exceptional skills and experience. Whether you need independent IT developers or a fully managed team, we provide access to top-tier IT talent worldwide to drive your project's success.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "leaders",
      label: "Visionary Leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Guidance That Drives Results",
      description: "Our leadership team doesn't just manage; they inspire. With decades of combined experience across Fortune 500 companies and hyper-growth startups, our tech leads and project managers ensure that every line of code aligns perfectly with your overarching business objectives.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "growth",
      label: "Driving Your Development",
      icon: <LineChart className="w-5 h-5" />,
      title: "Engineered for Scale",
      description: "We don't just build software; we build foundations for exponential growth. Our architects specialize in cloud-native infrastructure, microservices, and high-availability systems that seamlessly scale alongside your user base.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-16">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                activeTab === idx 
                  ? "bg-[#4B56D2] text-white shadow-lg shadow-blue-500/30 scale-105" 
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0"
            >
              {/* Image Side */}
              <div className="relative h-[300px] lg:h-[500px] overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply z-10" />
                <img 
                  src={tabs[activeTab].image} 
                  alt={tabs[activeTab].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-16 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                  {tabs[activeTab].title}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed">
                  {tabs[activeTab].description}
                </p>
                <div className="mt-10">
                  <span className="inline-flex items-center justify-center bg-blue-50 text-[#4B56D2] px-6 py-2 rounded-full font-bold text-sm tracking-wide">
                    EXPLORE CAPABILITIES
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
