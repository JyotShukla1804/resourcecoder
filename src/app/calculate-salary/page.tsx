"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDown, CheckCircle2, ChevronRight, Calculator, HelpCircle, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CTASection } from '@/components/CTASection';

export default function CalculateSalaryPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  
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
      case 'USD': default: return '$';
    }
  };

  const getExchangeRate = (curr: string) => {
    switch (curr) {
      case 'EURO': return 0.92;
      case 'AED': return 3.67;
      case 'SGD': return 1.34;
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
      question: "What is Gross Salary?",
      answer: "Gross Salary is the total earnings before deductions, tax withholdings. Gross Salary = Net Salary + Personal Income Tax (PIT) + Employee Mandatory Insurance (SHUI) + Trade Union Fund (TUF) + Other Bonuses (if applicable)"
    },
    {
      question: "What is Net Salary?",
      answer: "Net Salary is the actual amount an employee receives after all mandatory deductions."
    },
    {
      question: "Mandatory Contributions (SHI/UI) & Trade Union Fund (TUF)",
      answer: "Mandatory Contributions are the required payments to Vietnam's social security system, by law. Both employees and employers are legally obligated to pay these contributions."
    },
    {
      question: "Minimum Wage Zones (I, II, III, IV)",
      answer: "Vietnam divides into four wage zones (I, II, III, IV). Employers are obligated to pay salaries at or above minimum wage, based on these statutory requirements."
    },
    {
      question: "Are There Any Additional Costs?",
      answer: "Yes, in addition to gross salary and mandatory contributions, employers often incur other costs such as recruitment fees, office space, health insurance, etc."
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
            Quickly understand what it costs to hire developers in Vietnam. Our salary calculator gives you clear, up-to-date market rates.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1358px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
         
         {/* Left Column (Main Content) */}
         <div className="flex-1 flex flex-col gap-10">
            
            {/* Calculator Card */}
            <div className="bg-white rounded-[24px] shadow-sm border border-slate-100 p-6 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#4B56D2]/10 flex items-center justify-center shrink-0">
                  <Calculator className="w-5 h-5 text-[#4B56D2]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Calculate Your Costs</h2>
              </div>
              <p className="text-slate-500 mb-8 text-[15px] leading-relaxed">
                Enter the gross salary to see a full breakdown of mandatory contributions required by local labor laws.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Experience */}
                <div>
                  <label className="block text-[14px] font-bold text-slate-700 mb-2">Experience</label>
                  <div className="relative">
                    <select
                      value={experience}
                      onChange={(e) => {
                        setExperience(e.target.value);
                        setIsCalculated(false);
                      }}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 pr-10 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#4B56D2]/50 focus:border-[#4B56D2] transition-all appearance-none cursor-pointer"
                    >
                      {experienceOptions.map((exp) => (
                        <option key={exp} value={exp}>
                          {exp}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Techstack */}
                <div>
                  <label className="block text-[14px] font-bold text-slate-700 mb-2">Techstack</label>
                  <div className="relative">
                    <select
                      value={techstack}
                      onChange={(e) => setTechstack(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 pr-10 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#4B56D2]/50 focus:border-[#4B56D2] transition-all appearance-none cursor-pointer"
                    >
                      {techStackOptions.map((tech) => (
                        <option key={tech} value={tech}>
                          {tech}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="mb-8">

                {/* Currency */}
                <div>
                  <label className="block text-[14px] font-bold text-slate-700 mb-3">Currency</label>
                  <div className="flex flex-wrap gap-4">
                    {['SGD', 'USD', 'AED', 'EURO'].map((c) => (
                      <label 
                        key={c} 
                        onClick={() => setCurrency(c)}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <div className={`w-5 h-5 rounded-full border-[2px] flex items-center justify-center transition-colors ${currency === c ? 'border-[#4B56D2]' : 'border-slate-300 group-hover:border-[#4B56D2]/50'}`}>
                          {currency === c && <div className="w-2.5 h-2.5 bg-[#4B56D2] rounded-full" />}
                        </div>
                        <span className="text-slate-600 font-medium text-[15px]">{c}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 mt-2">
                <button 
                  onClick={handleCalculate}
                  className="btn-ripple w-full sm:w-auto px-8 py-3.5 bg-[#4B56D2] text-white rounded-xl font-bold text-[15px] shadow-md shadow-[#4B56D2]/20 hover:shadow-lg hover:shadow-[#4B56D2]/30 transition-all"
                >
                  Calculate Costs
                </button>
                {isCalculated && cost && (
                  <div className="w-full sm:w-auto bg-[#4B56D2]/10 text-[#4B56D2] px-6 py-3 rounded-xl font-extrabold text-lg border border-[#4B56D2]/20 whitespace-nowrap shadow-sm text-center sm:text-left">
                    Estimated Cost: {getCurrencySymbol(currency)} {cost}/hr
                  </div>
                )}
              </div>

              <p className="text-slate-400 text-[12px] mt-6 italic">
                Disclaimer: This calculator uses a fixed exchange rate for illustration purposes. Actual costs may vary based on live rates and exact requirements.
              </p>
            </div>

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
            
            {/* Top Scale CTA */}
            <div className="bg-[#0f172a] rounded-[24px] p-8 text-white relative overflow-hidden group shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4B56D2] rounded-full blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-[-20%] left-[-10%] w-40 h-40 bg-teal-500 rounded-full blur-[80px] opacity-20" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold mb-3 tracking-tight">Ready to Scale with Top 5% Talent?</h3>
                <p className="text-slate-300 text-[14px] mb-6">Access 10,000+ pre-vetted candidates ready to start working.</p>
                <Link href="/hire-team" className="inline-flex items-center text-[14px] font-bold text-white hover:text-teal-400 transition-colors">
                  Get Started Today <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Recruitment Services */}
            <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-slate-700" />
                </div>
                <h3 className="text-[15px] font-bold text-slate-900">Our Recruitment Services</h3>
              </div>
              <ul className="space-y-3">
                {['Hire Top Developers', 'Build a Dedicated Tech Team', 'Talent Sourcing & Screening', 'Staff Relocation Service'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 text-[14px] hover:text-[#4B56D2] transition-colors cursor-pointer">
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" /> {item}
                  </li>
                ))}
              </ul>
            </div>

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
                {['Vietnam Developer Salary Report', 'Vietnam Tech Talent Market Snapshot', 'Cost Considerations For Hiring In Vietnam'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 text-[14px] hover:text-[#4B56D2] transition-colors cursor-pointer">
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" /> {item}
                  </li>
                ))}
              </ul>
            </div>

         </div>
      </div>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
