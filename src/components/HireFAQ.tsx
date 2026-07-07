"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id?: string;
  question: string;
  answer: string;
  position?: number;
}

interface HireFAQProps {
  data?: FAQItem[];
}

export const HireFAQ: React.FC<HireFAQProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const defaultFaqData = [
    {
      question: "How can I hire React developer for 15 days Risk free trial?",
      answer: "You can hire React developer from Krazio for a 15-day risk-free trial in 3 easy steps: connect with our experts, share your requirements, and get a vetted developer according to your specific needs. You can evaluate the work done by the hired resource, and after 15 days, if you are unsatisfied, you can cancel without any charges.No upfront commitment is required."
    },
    {
      question: "How much does it cost to hire Reactjs developer?",
      answer: "We have simple and transparent pricing. We let you hire experienced React developers at a rate of per hour with an average experience of 3+ years. However, the cost may vary depending on your query and the expertise of our developer. If you want to hire a team of React developers, we have customized rates for you; please contact us to know more details."
    },
    {
      question: "What are the hiring engagement options available at Krazio?",
      answer: "We provide three types of hiring engagement models: 1. Dedicated Developer (Monthly): 160 Hours a Month. 8 hours a day, 5 days a week. 2. Hourly Basis: We use time-tracking tools like time doctor and Hubstaff. 3. Fixed Based: Share your requirements, and we'll evaluate and provide a detailed estimation of time and cost."
    },
    {
      question: "Do you provide support and maintenance services after deployment?",
      answer: "Yes, we do provide support and maintenance services after successful Reactjs project completion. Our after services include bug fixes, framework upgrade, continuous monitoring, and technical glitch resolution for the enhancements of your Reactjs product."
    },
    {
      question: "What if I am not satisfied with the hired Reactjs developer's work and would like to exit?",
      answer: "We understand that every project requires different skills, so we can provide you with a free replacement to continue our business relationship, and even after that if you are not satisfied, we can terminate the contract with a 2-week notice. The termination invoice shall specify all unpaid work and the remaining work done until the termination date."
    }
  ];

  const faqData = data && data.length > 0
    ? data.map(item => ({
        question: item.question,
        answer: (
          <div 
            className="flex flex-col gap-1.5"
            dangerouslySetInnerHTML={{ __html: item.answer.replace(/\n/g, '<br />') }}
          />
        )
      }))
    : defaultFaqData.map(item => ({
        question: item.question,
        answer: <div>{item.answer}</div>
      }));

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
          {faqData.map((faq, idx) => (
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
};
