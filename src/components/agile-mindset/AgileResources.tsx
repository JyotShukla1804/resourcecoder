"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AgileResources() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Artificial Intelligence",
      title: "Artificial Intelligence",
      desc: "Build intelligent solutions with Generative AI, LLMs, Computer Vision, Machine Learning, NLP, and Data Science.",
      image: "/image%20214.svg",
      link: "https://kraziocloud.vercel.app/services/ai-machine-learning-development/"
    },
    {
      label: "Immersive Technologies",
      title: "Immersive Technologies",
      desc: "Create engaging AR, VR, MR, gamification, and simulation experiences that transform customer engagement and workforce training.",
      image: "/image%202114.svg",
      link: "https://kraziocloud.vercel.app/services/apple-vision-pro-development/"
    },
    {
      label: "Custom Software",
      title: "Custom Software Development",
      desc: "Develop scalable web, mobile, and enterprise applications tailored to your unique business goals.",
      image: "/image%202115.svg",
      link: "https://kraziocloud.vercel.app/services/custom-software-development/"
    },
    {
      label: "Dedicated Teams",
      title: "Dedicated Development Teams",
      desc: "Scale your business with experienced offshore developers and dedicated teams that integrate seamlessly with your organization, delivering flexibility, transparency, and faster project execution.",
      image: "/image%20216.svg",
      link: "https://kraziocloud.vercel.app/services/web-app-developer/"
    }
  ];

  return (
    <section className="w-full bg-slate-50 py-24">
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Innovation in <span className="text-indigo-600">Action</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover how Krazio Cloud leverages AI, immersive technologies, and custom software development to help businesses innovate, scale, and achieve digital excellence across industries.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 p-2 bg-white rounded-full shadow-sm border border-slate-100 max-w-fit mx-auto">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-300 ${
                activeTab === idx ? "text-white" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {activeTab === idx && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-indigo-600 rounded-full shadow-md shadow-indigo-200"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row h-full"
            >
              
              {/* Image */}
              <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[450px]">
                <Image 
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/90 md:to-white" />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center space-y-6 relative z-10 bg-white">
                <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
                  {tabs[activeTab].title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {tabs[activeTab].desc}
                </p>
                <div className="pt-6">
                  <Link 
                    href={tabs[activeTab].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-indigo-600 font-bold text-lg hover:text-indigo-800 transition-colors"
                  >
                    Explore Our Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
