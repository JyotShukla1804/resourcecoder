"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Code2, Rocket, Globe2, Network, Blocks } from "lucide-react";

const companies = [
  {
    title: "Product Startups",
    description: "We help innovative startups build MVPs quickly, scale their engineering teams, and accelerate time-to-market with our agile development approach.",
    icon: Rocket,
    color: "from-orange-400 to-red-500"
  },
  {
    title: "Enterprise Platforms",
    description: "Partnering with large enterprises to modernize legacy systems, build robust scalable platforms, and drive digital transformation initiatives.",
    icon: Building2,
    color: "from-[#4B56D2] to-blue-600"
  },
  {
    title: "Software Agencies",
    description: "Providing white-label development and staff augmentation to help agencies deliver more projects without compromising on quality.",
    icon: Code2,
    color: "from-emerald-400 to-teal-600"
  },
  {
    title: "Media Houses",
    description: "Building high-performance content delivery systems, streaming platforms, and engaging user experiences for digital media brands.",
    icon: Network,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Web Hosts & Infra",
    description: "Developing custom control panels, automation scripts, and infrastructure management tools for hosting providers.",
    icon: Globe2,
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "SaaS Companies",
    description: "End-to-end product development, from multi-tenant architecture design to recurring billing integrations.",
    icon: Blocks,
    color: "from-pink-500 to-rose-600"
  }
];

export function PartnerCompaniesGrid() {
  return (
    <section className="w-full bg-slate-50 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Companies We Partner With
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From agile startups to Fortune 500 enterprises, we tailor our partnership approach to meet your unique business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group transition-all"
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-slate-50 rounded-full blur-3xl group-hover:bg-[#4B56D2]/5 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${company.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-black/10`}>
                  <company.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#4B56D2] transition-colors">
                  {company.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {company.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
