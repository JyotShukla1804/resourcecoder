"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, TrendingUp, Building2, Handshake, ShoppingCart, Award } from "lucide-react";

const companies = [
  {
    title: "Startups & Entrepreneurs",
    description: "Helping startups validate ideas, build MVPs, and launch scalable digital products with speed and confidence.",
    icon: Rocket,
    color: "from-orange-400 to-red-500"
  },
  {
    title: "Small & Medium Businesses (SMBs)",
    description: "Empowering growing businesses with custom software, AI solutions, websites, and mobile applications to improve efficiency and accelerate growth.",
    icon: TrendingUp,
    color: "from-[#4B56D2] to-blue-600"
  },
  {
    title: "Enterprises",
    description: "Partnering with enterprises to modernize legacy systems, automate operations, and deliver secure, scalable digital transformation solutions.",
    icon: Building2,
    color: "from-emerald-400 to-teal-600"
  },
  {
    title: "Agencies & Technology Partners",
    description: "Providing white-label development, dedicated teams, and offshore development services to help agencies expand delivery capabilities.",
    icon: Handshake,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Retail & E-Commerce Businesses",
    description: "Building AI-powered commerce platforms, immersive shopping experiences, inventory solutions, and customer engagement technologies.",
    icon: ShoppingCart,
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "Industry Leaders",
    description: "Delivering tailored technology solutions for Healthcare, Real Estate, Manufacturing, Logistics, Education, Banking & Finance, Travel, Entertainment, Restaurants, and many more industries.",
    icon: Award,
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
            Who We Work With
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From startups to global enterprises, Krazio Cloud partners with businesses across industries to deliver innovative, scalable, and future-ready digital solutions.
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
