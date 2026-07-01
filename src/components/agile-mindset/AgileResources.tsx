"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function AgileResources() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Digital Transformation",
      title: "Advancing your ODC in India",
      desc: "Leverage our agile frameworks to establish and scale your Offshore Development Center. We provide the expertise, infrastructure, and top-tier talent needed to accelerate your digital transformation initiatives globally without compromising on quality or control.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/services/offshore-development"
    },
    {
      label: "Agile Product Strategy",
      title: "Building Roadmaps that Resonate",
      desc: "Our strategic product consulting ensures that every feature you build aligns with market needs and business goals. We utilize data-driven insights and rapid prototyping to validate assumptions and craft product strategies that win.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/services/product-strategy"
    },
    {
      label: "Custom Software",
      title: "Engineering Excellence at Scale",
      desc: "We deliver bespoke software solutions tailored to your unique operational challenges. From complex enterprise systems to innovative SaaS platforms, our agile engineering practices ensure robust, scalable, and secure deployments.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/services/custom-software"
    }
  ];

  return (
    <section className="w-full bg-white py-16 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === idx 
                  ? "bg-[#4B56D2] text-white shadow-lg shadow-indigo-200/50" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-100 animate-fade-in-up" key={activeTab}>
          <div className="flex flex-col md:flex-row items-center">
            
            {/* Image */}
            <div className="w-full md:w-1/2 relative h-64 md:h-[400px]">
              <Image 
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-50/50 md:to-slate-50/20" />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                {tabs[activeTab].title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                {tabs[activeTab].desc}
              </p>
              <div className="pt-4">
                <Link 
                  href={tabs[activeTab].link}
                  className="text-[#4B56D2] font-semibold text-sm inline-flex items-center hover:text-indigo-700 transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
