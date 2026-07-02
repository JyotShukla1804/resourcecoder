"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need technical knowledge to start?",
    answer: "Not at all. Our consulting services are designed to bridge the gap between your business vision and the technical execution. We will handle the architecture, technology stack decisions, and explain everything in clear, business-focused terms.",
  },
  {
    question: "How long does the consulting process take?",
    answer: "It depends on the complexity of your startup. A standard validation and MVP strategy engagement usually takes 2-4 weeks. For ongoing scaling and technical architecture, we often partner with startups for 3-6 months.",
  },
  {
    question: "Do you also build the product, or just consult?",
    answer: "Both! We provide 1:1 consulting to map out the strategy, but ResourceCoders also has a full team of dedicated developers ready to actually build the product if you choose to continue with us for development.",
  },
  {
    question: "How do you ensure my idea is kept confidential?",
    answer: "We take confidentiality very seriously. We sign a strict Non-Disclosure Agreement (NDA) before we even have our first deep-dive strategy session, ensuring your intellectual property is fully protected.",
  },
];

export function StartupFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-24 bg-white relative z-10">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
            Answers to Common Questions
          </h2>
          <p className="text-slate-500 text-lg">
            Everything you need to know about our 1:1 startup consulting process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#4B56D2] shadow-md' : 'border-slate-200 hover:border-[#4B56D2]/50'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white"
                >
                  <span className={`font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-[#4B56D2]' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isOpen ? 'bg-[#4B56D2] text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
