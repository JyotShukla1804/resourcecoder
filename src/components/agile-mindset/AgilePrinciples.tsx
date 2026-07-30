"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AgilePrinciples() {
  const principles = [
    {
      num: "1/07",
      title: "Innovation with Purpose",
      desc: "We believe innovation should solve real business challenges. By combining AI, immersive technologies, and custom software expertise, we create intelligent, scalable solutions that help businesses grow, adapt, and stay ahead in a rapidly evolving digital world.",
      image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "2/07",
      title: "Client-First Approach",
      desc: "Every solution begins with understanding our clients' goals. We build trusted partnerships through transparency, collaboration, and a shared commitment to measurable business success.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "3/07",
      title: "Excellence in Quality",
      desc: "We maintain the highest standards in design, development, testing, and security to deliver reliable, scalable, and enterprise-grade digital solutions.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "4/07",
      title: "Agile Collaboration",
      desc: "Our Agile approach encourages continuous communication, rapid iteration, and flexibility, ensuring faster delivery and better outcomes.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "5/07",
      title: "Continuous Learning",
      desc: "Technology evolves every day, and so do we. We embrace new ideas, emerging technologies, and continuous improvement to deliver future-ready solutions.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "6/07",
      title: "Integrity & Transparency",
      desc: "Honest communication, ethical practices, and complete project visibility form the foundation of every successful partnership we build.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "7/07",
      title: "Long-Term Partnerships",
      desc: "We don't just deliver projects we build lasting relationships by providing ongoing support, innovation, and technology that grows with your business.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="w-full bg-slate-50 py-24">
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Our Core <span className="text-indigo-600">Principles</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            The values that shape how we innovate, collaborate, and deliver exceptional digital solutions. Every project at Krazio Cloud is driven by trust, innovation, quality, and a commitment to creating long-term business value.
          </motion.p>
        </div>

        <div className="flex flex-col space-y-32">
          {principles.map((principle, idx) => {
            // Alternate layout for visual interest (Left Text vs Right Text)
            const isEven = idx % 2 === 0;

            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 group`}
              >
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col space-y-6">
                  <span className="text-2xl font-bold text-slate-400 font-mono tracking-widest uppercase">
                    {principle.num}
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#4B56D2] leading-tight">
                    {principle.title}
                  </h3>
                  
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {principle.desc}
                  </p>
                </div>

                {/* Image Content */}
                <div className="w-full lg:w-1/2">
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 group-hover:shadow-2xl transition-all duration-500">
                    <Image 
                      src={principle.image}
                      alt={principle.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#4B56D2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
