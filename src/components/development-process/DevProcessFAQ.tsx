"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function DevProcessFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the software development process at Krazio?",
      answer: "Our software development process is rooted in Agile methodologies. It involves comprehensive scoping, continuous iteration, and rigorous QA. We break projects into manageable sprints to ensure transparency, rapid delivery, and seamless adaptation to your feedback."
    },
    {
      question: "How long does a typical software project take?",
      answer: "The timeline depends heavily on the project's complexity and scope. However, by leveraging our Agile framework and CI/CD pipelines, we typically deliver the first functional MVP within 4 to 8 weeks, followed by continuous feature rollouts."
    },
    {
      question: "Will I have direct communication with the developers?",
      answer: "Absolutely. We believe in 100% transparency. You will have direct access to your dedicated team through Slack, email, or daily video standups to ensure complete alignment throughout the development lifecycle."
    },
    {
      question: "What happens if project requirements change midway?",
      answer: "Change is embraced! Our Agile mindset means we prioritize adaptability. During our regular sprint reviews and planning sessions, we can easily pivot and integrate new requirements without derailing the overall progress."
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer: "Yes, our commitment extends far beyond launch. We provide comprehensive support, bug fixes, performance monitoring, and continuous feature updates to ensure your software remains cutting-edge and highly available."
    }
  ];

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#4B56D2] font-bold tracking-wider uppercase text-sm mb-4 block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-[#4B56D2]/30 shadow-lg shadow-[#4B56D2]/5 bg-white' : 'border-slate-100 bg-slate-50 hover:bg-slate-100/50'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold text-lg pr-8 ${openIndex === idx ? 'text-[#4B56D2]' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === idx ? 'bg-[#4B56D2] text-white' : 'bg-white border border-slate-200 text-slate-400'}`}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
