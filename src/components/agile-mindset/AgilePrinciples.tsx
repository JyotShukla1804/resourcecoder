"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AgilePrinciples() {
  const principles = [
    {
      num: "1/07",
      title: "Fostering a Culture of Respect",
      desc: "An essential element in business success is the level of mutual respect between teams and clients. It provides a platform for everyone to share their inputs without fear of judgment. In an Agile environment, respecting each other's opinions and expertise is fundamental. When team members feel valued, it translates into their work, driving innovation and excellence.",
      image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "2/07",
      title: "The Power of Coordination and Collaboration",
      desc: "Agile thrives on collaboration. Our teams are structured to work closely with you, acting as an extension of your own organization. This continuous alignment ensures that everyone is on the same page, resulting in fewer misunderstandings and a more cohesive final product.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "3/07",
      title: "Continuous Improvement: The Key to Excellence",
      desc: "One of the core tenets of Agile is the commitment to continuous improvement. We don't just set a plan and blindly follow it; we constantly evaluate our processes and outcomes. Through regular retrospectives, we identify what's working and what isn't, making iterative changes to enhance our performance.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "4/07",
      title: "Learning with the Team reveals Opportunities",
      desc: "An Agile team is a learning team. We encourage our engineers to continually update their skills and stay abreast of the latest technological advancements. This culture of continuous learning benefits your project directly. As our teams learn and grow, they bring fresh perspectives.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "5/07",
      title: "Empowering with True Ownership",
      desc: "We believe that empowerment leads to better results. In our Agile framework, teams are given the autonomy and responsibility to make decisions. This true ownership fosters a deep sense of accountability. When engineers feel that they own the outcome, they are more invested in the project's success.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "6/07",
      title: "Commitment to Delivering Value",
      desc: "Ultimately, Agile is about delivering value. Our primary focus is on producing high-quality, working software that meets your business needs. We prioritize features based on their value, ensuring that the most critical components are developed and delivered first.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "7/07",
      title: "Adaptability in a Fast-Changing Environment",
      desc: "The business landscape is constantly evolving, and your software solutions must keep pace. Our Agile mindset enables us to adapt quickly to changes in market conditions, customer preferences, or business priorities. Instead of being derailed by unexpected shifts, we embrace them.",
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
            Our Agile <span className="text-indigo-600">Principles</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            The core tenets that drive our engineering excellence and ensure we consistently deliver unparalleled value.
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
