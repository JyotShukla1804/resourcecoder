"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Zap, Users, HeadphonesIcon, Settings } from "lucide-react";

export function PartnerBenefits() {
  const benefits = [
    {
      title: "Accelerated Time to Market",
      description: "Our agile methodologies and ready-to-deploy frameworks ensure your products hit the market faster without compromising quality.",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-100"
    },
    {
      title: "Top-Tier Engineering Talent",
      description: "Gain immediate access to a vetted pool of senior engineers, architects, and designers with deep domain expertise.",
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-100"
    },
    {
      title: "Uncompromising Quality",
      description: "Rigorous QA processes, automated testing, and code reviews guarantee robust, secure, and scalable deliverables.",
      icon: ShieldCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-100"
    },
    {
      title: "Flexible Scaling",
      description: "Ramp up or scale down your dedicated teams on-demand based on your project cycles and budget requirements.",
      icon: TrendingUp,
      color: "text-purple-500",
      bg: "bg-purple-100"
    },
    {
      title: "Dedicated Support",
      description: "Enjoy round-the-clock technical support and a dedicated account manager to ensure smooth operations.",
      icon: HeadphonesIcon,
      color: "text-rose-500",
      bg: "bg-rose-100"
    },
    {
      title: "Customized Solutions",
      description: "We don't believe in one-size-fits-all. Every solution is architected specifically to solve your unique business challenges.",
      icon: Settings,
      color: "text-indigo-500",
      bg: "bg-indigo-100"
    }
  ];

  return (
    <section className="w-full bg-[#f8f9ff] py-24 relative overflow-hidden">
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-left mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            The ResourceCoders Edge. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-blue-500">
              Top-Tier Partner Benefits
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Partnering with us means gaining a strategic advantage. We invest in your success as much as our own, providing the tools, talent, and technology you need to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${benefit.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
