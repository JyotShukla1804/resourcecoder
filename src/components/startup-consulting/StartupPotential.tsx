"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Idea Validation & Market Research",
    description: "Don't build in the dark. We help you validate your startup idea against real market data, analyze competitors, and identify your unique value proposition before writing a single line of code.",
    points: ["Competitor Analysis", "User Persona Mapping", "Value Proposition Canvas"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "MVP Strategy & Planning",
    description: "Scope your Minimum Viable Product to balance speed-to-market with core value delivery. We help you prioritize features, choose the right tech stack, and set a realistic launch timeline.",
    points: ["Feature Prioritization", "Tech Stack Selection", "Go-To-Market Timeline"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Technical Architecture Design",
    description: "Build on a solid foundation. Our experts design scalable, secure, and maintainable cloud architectures tailored to your startup's specific needs and projected growth.",
    points: ["Cloud Infrastructure Setup", "Database Schema Design", "Security & Compliance Audits"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Scaling & Growth Strategy",
    description: "Transition from an MVP to a robust, enterprise-grade platform. We guide you through team scaling, performance optimization, and implementing advanced features like AI or blockchain.",
    points: ["Performance Bottleneck Resolution", "Engineering Team Scaling", "Advanced Tech Integration"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
];

export function StartupPotential() {
  return (
    <section className="w-full py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
            Unlocking Your Startup's <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-blue-500">
              True Potential
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A step-by-step approach to turning your vision into a scalable reality.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? "" : "lg:flex-row-reverse"}`}
              >
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="flex-1 space-y-6"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#4B56D2]/10 text-[#4B56D2] font-bold text-xl mb-2">
                    {index + 1}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-4 pt-2">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#4B56D2] flex-shrink-0" />
                        <span className="text-slate-700 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Image Content */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, rotateY: isEven ? 10 : -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="flex-1 w-full"
                >
                  <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(75,86,210,0.15)] group perspective-1000">
                    <div className="absolute inset-0 bg-[#4B56D2]/10 group-hover:bg-transparent transition-colors z-10 duration-500" />
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
