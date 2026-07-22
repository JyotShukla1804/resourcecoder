"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Zap, Users, MessageSquare, Handshake } from "lucide-react";

export function PartnerBenefits() {
  const benefits = [
    {
      title: "Future-Ready Innovation",
      description: "Leverage cutting-edge technologies including AI, AR/VR/XR, Machine Learning, and custom software to stay ahead in a rapidly evolving digital landscape.",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-100"
    },
    {
      title: "Expert Technology Team",
      description: "Work with experienced engineers, designers, and technology consultants dedicated to delivering secure, scalable, and high-performance solutions.",
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-100"
    },
    {
      title: "Transparent Collaboration",
      description: "Benefit from clear communication, a dedicated point of contact, regular project updates, and complete visibility throughout the development lifecycle.",
      icon: MessageSquare,
      color: "text-emerald-500",
      bg: "bg-emerald-100"
    },
    {
      title: "Flexible Engagement Models",
      description: "Scale your team with dedicated developers, offshore development centers, or project-based engagement models tailored to your business needs.",
      icon: TrendingUp,
      color: "text-purple-500",
      bg: "bg-purple-100"
    },
    {
      title: "Quality & Security",
      description: "Every solution is built with industry best practices, robust security standards, rigorous testing, and a commitment to delivering enterprise-grade quality.",
      icon: ShieldCheck,
      color: "text-rose-500",
      bg: "bg-rose-100"
    },
    {
      title: "End-to-End Partnership",
      description: "From strategy and design to development, deployment, and ongoing support, we partner with you at every stage to ensure long-term digital success.",
      icon: Handshake,
      color: "text-indigo-500",
      bg: "bg-indigo-100"
    }
  ];

  return (
    <section className="w-full bg-[#f8f9ff] py-24 relative overflow-hidden">
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            The Krazio Cloud Advantage <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-blue-500">
              Why Businesses Choose Us
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Partnering with Krazio Cloud means gaining a trusted technology partner committed to innovation, quality, and long-term success. We combine deep technical expertise with a client-first approach to deliver scalable digital solutions that drive measurable business growth.
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
