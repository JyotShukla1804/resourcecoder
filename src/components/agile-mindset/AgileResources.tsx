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
      label: "Digital Transformation",
      title: "Advancing your ODC in India",
      desc: "Leverage our agile frameworks to establish and scale your Offshore Development Center. We provide the expertise, infrastructure, and top-tier talent needed to accelerate your digital transformation initiatives globally without compromising on quality or control.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/services/offshore-development"
    },
    {
      label: "Agile Product Strategy",
      title: "Building Roadmaps that Resonate",
      desc: "Our strategic product consulting ensures that every feature you build aligns with market needs and business goals. We utilize data-driven insights and rapid prototyping to validate assumptions and craft product strategies that win.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/services/product-strategy"
    },
    {
      label: "Custom Software",
      title: "Engineering Excellence at Scale",
      desc: "We deliver bespoke software solutions tailored to your unique operational challenges. From complex enterprise systems to innovative SaaS platforms, our agile engineering practices ensure robust, scalable, and secure deployments.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/services/custom-software"
    }
  ];

  return (
    <section className="w-full bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Agile in <span className="text-indigo-600">Action</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore how our agile methodologies are applied across our core service offerings to drive remarkable results.
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
                    className="group inline-flex items-center gap-2 text-indigo-600 font-bold text-lg hover:text-indigo-800 transition-colors"
                  >
                    Explore Service
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
