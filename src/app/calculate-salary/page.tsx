"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDown, CheckCircle2, ChevronRight, Calculator, HelpCircle, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CTASection } from '@/components/CTASection';

function CustomSelect({ value, options, onChange, label }: { value: string, options: string[], onChange: (val: string) => void, label: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-2 relative" ref={selectRef}>
      <label className="text-sm font-bold text-slate-700 ml-1">{label}</label>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={`w-full bg-slate-50 border ${isOpen ? 'border-[#4B56D2] ring-2 ring-[#4B56D2]/20' : 'border-slate-200'} rounded-2xl py-3.5 px-4 text-left text-[15px] text-slate-900 font-semibold transition-all flex justify-between items-center outline-none hover:border-[#4B56D2]/50`}
      >
        <span className="truncate">{value}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform shrink-0 ${isOpen ? 'rotate-180 text-[#4B56D2]' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden max-h-60 overflow-y-auto"
          >
            {options.map((opt) => (
              <div 
                key={opt} 
                onClick={() => { onChange(opt); setIsOpen(false); }} 
                className={`px-4 py-3 cursor-pointer text-[15px] font-medium transition-colors hover:bg-[#4B56D2] hover:text-white ${value === opt ? 'bg-[#4B56D2] text-white' : 'text-slate-700'}`}
              >
                {opt}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CalculateSalaryPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    // Force scroll to top on mount, using a small timeout to bypass any Next.js scroll restoration quirks
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 50);
    return () => clearTimeout(timer);
  }, []);
  
  const [experience, setExperience] = useState('2-4 years');
  const [techstack, setTechstack] = useState('React.js Developer');
  const [cost, setCost] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [isCalculated, setIsCalculated] = useState(false);

  const getCurrencySymbol = (curr: string) => {
    switch (curr) {
      case 'EURO': return '€';
      case 'AED': return 'AED';
      case 'SGD': return 'S$';
      case 'AUD': return 'A$';
      case 'USD': default: return '$';
    }
  };

  const getExchangeRate = (curr: string) => {
    switch (curr) {
      case 'EURO': return 0.92;
      case 'AED': return 3.67;
      case 'SGD': return 1.34;
      case 'AUD': return 1.52;
      case 'USD': default: return 1;
    }
  };

  const handleCalculate = useCallback(() => {
    // Extract first number from the experience string
    const match = experience.match(/\d+/);
    if (!match) return;
    
    const years = parseInt(match[0], 10);
    
    let baseUsdCost = 0;
    if (years >= 2 && years <= 4) {
      baseUsdCost = 15;
    } else if (years >= 5 && years <= 7) {
      baseUsdCost = 20;
    } else if (years >= 8 && years <= 10) {
      baseUsdCost = 30;
    } else if (years >= 11 && years <= 15) {
      baseUsdCost = 40;
    }

    if (baseUsdCost > 0) {
      const rate = getExchangeRate(currency);
      const finalCost = (baseUsdCost * rate).toFixed(2);
      setCost(finalCost.endsWith('.00') ? finalCost.slice(0, -3) : finalCost);
      setIsCalculated(true);
    }
  }, [experience, currency]);

  useEffect(() => {
    if (isCalculated) {
      handleCalculate();
    }
  }, [currency]); // Only re-run when currency changes, if already calculated

  const faqs = [
    {
      question: "1. How does the salary calculator estimate developer costs?",
      answer: "Our calculator uses current market salary trends, experience levels, technology stacks, and hiring benchmarks across India to provide realistic cost estimates."
    },
    {
      question: "2. Are the salary estimates updated regularly?",
      answer: "Yes. We periodically update the data to reflect changing market conditions, demand for technologies, and industry hiring trends."
    },
    {
      question: "3. Does the calculator include only salary or the total hiring cost?",
      answer: "The calculator primarily estimates the developer's salary. Additional costs such as recruitment, infrastructure, employee benefits, and operational expenses may vary depending on your hiring model."
    },
    {
      question: "4. Can I compare salaries for different technologies and experience levels?",
      answer: "Yes. You can estimate costs based on different roles, technologies, and seniority levels to help you plan your hiring budget more effectively."
    },
    {
      question: "5. Why should I hire developers from India?",
      answer: "India offers access to a large pool of highly skilled software developers at competitive rates, enabling businesses to reduce development costs while maintaining high-quality delivery and faster scalability."
    }
  ];

  const techStackOptions = [
    "React.js Developer", "Next.js Developer", "Angular Developer", "Vue.js Developer", "Frontend Developer", "UI/UX Designer",
    "Node.js Developer", "Python Developer", "Java Developer", ".NET Developer", "PHP / Laravel Developer", "Golang Developer",
    "Full-Stack Developer", "MERN Stack Developer", "MEAN Stack Developer", "JavaScript Developer", "TypeScript Developer",
    "React Native Developer", "Flutter Developer", "iOS Developer", "Android Developer",
    "AI/ML Engineer", "Generative AI / LLM Developer", "AI Integration Developer", "Data Engineer", "Data Scientist", "DevOps Engineer", "Cloud Engineer (AWS / Azure / GCP)",
    "WordPress Developer", "Shopify Developer", "WooCommerce Developer", "QA / Automation Engineer", "Cybersecurity / DevSecOps Engineer", "Blockchain Developer"
  ];

  const experienceOptions = ["2-4 years", "5-7 years", "8-10 years", "11-15 years"];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-[88px] relative z-10">
      
      {/* Hero Banner */}
      <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
        <img 
          src="/workspace-collaborating.png" 
          alt="Calculate Salary" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4B56D2]/80 to-slate-900/80 mix-blend-multiply" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Salary Calculator</h1>
          <p className="text-slate-200 text-[16px] md:text-lg max-w-2xl mx-auto">
            Quickly understand what it costs to hire developers in India. Our salary calculator gives you clear, up-to-date market rates.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1358px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col gap-10 relative z-10">
         
         {/* Calculator (Top Section) */}
         <div className="w-full">
            
            {/* Calculator Card */}
            <div className="bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 p-6 md:p-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#4B56D2]/10 flex items-center justify-center shrink-0">
                  <Calculator className="w-6 h-6 text-[#4B56D2]" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-4 tracking-tight">
                Calculate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-indigo-600">Salary</span>
              </h2>
              <p className="text-slate-500 text-center text-[15px] leading-relaxed mb-10 max-w-lg mx-auto">
                Enter the gross salary to see a full breakdown of mandatory contributions required by local labor laws.
              </p>

              <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12">
                {/* Form Section */}
                <div className="xl:col-span-7 flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <CustomSelect
                      label="Experience Level"
                      value={experience}
                      options={experienceOptions}
                      onChange={(val) => {
                        setExperience(val);
                        setIsCalculated(false);
                      }}
                    />

                    <CustomSelect
                      label="Tech Stack"
                      value={techstack}
                      options={techStackOptions}
                      onChange={setTechstack}
                    />
                  </div>

                  <div className="space-y-3 mt-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Currency</label>
                    <div className="flex flex-wrap gap-3">
                      {['USD', 'EURO', 'AUD', 'SGD', 'AED'].map((c) => (
                        <button
                          key={c}
                          onClick={() => setCurrency(c)}
                          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                            currency === c 
                              ? 'bg-[#4B56D2] text-white shadow-md shadow-[#4B56D2]/30 scale-105' 
                              : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100 hover:text-slate-700'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={handleCalculate}
                    className="btn-ripple mt-4 w-full bg-[#4B56D2] text-white rounded-2xl py-4 font-bold text-lg tracking-wider shadow-md hover:shadow-lg transition-shadow duration-300 select-none"
                  >
                    Calculate Now
                  </button>
                </div>

                {/* Results Section */}
                <div className="xl:col-span-5 flex flex-col justify-center">
                  <div className="bg-[#4B56D2] rounded-[24px] p-6 lg:p-8 flex flex-col relative overflow-hidden shadow-xl shadow-[#4B56D2]/20 h-fit self-center w-full">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-[30px] -mr-10 -mt-10" />
                    
                    <h3 className="text-lg font-medium text-indigo-100 mb-2 relative z-10">Estimated Hourly Rate</h3>
                    
                    <AnimatePresence mode="wait">
                      {isCalculated && cost ? (
                        <motion.div
                          key="result"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="relative z-10"
                        >
                          <div className="flex flex-wrap items-baseline gap-x-2 mb-4">
                            <div className="flex items-baseline gap-x-1.5 whitespace-nowrap">
                              <span className={`${getCurrencySymbol(currency).length > 2 ? 'text-3xl md:text-4xl text-white' : 'text-5xl md:text-5xl text-white'} font-extrabold tracking-tighter`}>
                                {getCurrencySymbol(currency)}
                              </span>
                              <span className="text-5xl md:text-5xl font-extrabold text-white tracking-tighter">
                                {cost}
                              </span>
                            </div>
                            <span className="text-xl text-indigo-200 font-medium whitespace-nowrap">/ hr</span>
                          </div>
                          
                          <div className="space-y-4 pt-6 border-t border-white/20">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-indigo-100">Selected Role</span>
                              <span className="font-semibold text-white">{techstack}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-indigo-100">Experience</span>
                              <span className="font-semibold text-white">{experience}</span>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="empty"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="relative z-10 py-6"
                        >
                          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                            <span className="text-3xl font-bold text-white">{getCurrencySymbol(currency)}</span>
                          </div>
                          <p className="text-indigo-100 font-medium">Fill in the details and click calculate to see your personalized estimate.</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <div className="mt-6 relative z-10">
                      <p className="text-[11px] text-indigo-200 italic leading-tight">
                        * Rates shown are estimates based on average market data. Actual costs may vary depending on specific requirements and currency fluctuations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>

         {/* Lower Section (FAQs and Sidebars) */}
         <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
            {/* Left Column (FAQs) */}
            <div className="flex-1">

            {/* FAQs */}
            <div className="bg-white rounded-[24px] shadow-sm border border-slate-100 p-6 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5 text-slate-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isActive = activeFaq === index;
                  return (
                    <div 
                      key={index} 
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isActive ? 'border-[#4B56D2]/30 shadow-lg shadow-[#4B56D2]/5 bg-white' : 'border-slate-100 bg-slate-50 hover:bg-slate-100/50'}`}
                    >
                      <button 
                        onClick={() => setActiveFaq(isActive ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      >
                        <span className={`font-bold text-lg pr-8 ${isActive ? 'text-[#4B56D2]' : 'text-slate-800'}`}>
                          {faq.question}
                        </span>
                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-[#4B56D2] text-white' : 'bg-white border border-slate-200 text-slate-400'}`}>
                          {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

         </div>

         {/* Right Column (Sidebars) */}
         <div className="w-full lg:w-[380px] flex flex-col gap-6">
            


            {/* EOR Services */}
            <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-slate-700" />
                </div>
                <h3 className="text-[15px] font-bold text-slate-900">Our EOR Services</h3>
              </div>
              <ul className="space-y-3">
                {['Employer of Record (EOR)', 'Payroll & Staffing Services', 'HR & Employee Handbooks', 'Co-working Space'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 text-[14px] hover:text-[#4B56D2] transition-colors cursor-pointer">
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-slate-700" />
                </div>
                <h3 className="text-[15px] font-bold text-slate-900">Download Our Resources</h3>
              </div>
              <ul className="space-y-3">
                {['India Developer Salary Report', 'India Tech Talent Market Snapshot', 'Cost Considerations For Hiring In India'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 text-[14px] hover:text-[#4B56D2] transition-colors cursor-pointer">
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" /> {item}
                  </li>
                ))}
              </ul>
            </div>

         </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
