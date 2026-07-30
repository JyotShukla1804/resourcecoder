
"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { Calculator, ChevronDown, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function CustomSelect({ value, options, onChange, label }: { value: string, options: string[], onChange: (val: string) => void, label: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

export const HomeCostCalculator = () => {
  const [experience, setExperience] = useState("2-4 years");
  const [techstack, setTechstack] = useState("React.js Developer");
  const [cost, setCost] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [isCalculated, setIsCalculated] = useState(false);

  const getCurrencySymbol = (curr: string) => {
    switch (curr) {
      case "EUR": return "€";
      case "AUD": return "A$";
      case "AED": return "AED";
      case "SGD": return "S$";
      case "USD": default: return "$";
    }
  };

  const getExchangeRate = (curr: string) => {
    switch (curr) {
      case "EUR": return 0.92;
      case "AUD": return 1.52;
      case "AED": return 3.67;
      case "SGD": return 1.34;
      case "USD": default: return 1;
    }
  };

  const handleCalculate = useCallback(() => {
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
      setCost(finalCost.endsWith(".00") ? finalCost.slice(0, -3) : finalCost);
      setIsCalculated(true);
    }
  }, [experience, currency]);

  useEffect(() => {
    if (isCalculated) {
      handleCalculate();
    }
  }, [currency, isCalculated, handleCalculate]);

  const techStackOptions = [
    "React.js Developer", "Next.js Developer", "Angular Developer", "Vue.js Developer", "Frontend Developer", "UI/UX Designer",
    "Node.js Developer", "Python Developer", "Java Developer", ".NET Developer", "PHP / Laravel Developer", "Golang Developer",
    "Full-Stack Developer", "MERN Stack Developer", "MEAN Stack Developer", "JavaScript Developer", "TypeScript Developer",
    "React Native Developer", "Flutter Developer", "iOS Developer", "Android Developer",
    "AI/ML Engineer", "Generative AI / LLM Developer", "AI Integration Developer", "Data Engineer", "Data Scientist", "DevOps Engineer", "Cloud Engineer",
    "WordPress Developer", "Shopify Developer", "QA / Automation Engineer", "Cybersecurity / DevSecOps", "Blockchain Developer"
  ];

  const experienceOptions = ["2-4 years", "5-7 years", "8-10 years", "11-15 years"];

  return (
    <section className="relative py-24 bg-white overflow-hidden z-10 w-full flex justify-center border-t border-slate-100">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-gradient-to-br from-[#4B56D2]/5 to-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-gradient-to-tr from-teal-500/5 to-[#4B56D2]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 w-full relative z-10 flex flex-col items-center">
        <div className="text-center mb-12 max-w-2xl">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#4B56D2]/10 mb-6 shadow-sm">
            <Calculator className="w-7 h-7 text-[#4B56D2]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Calculate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-indigo-600">Salary</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Get an instant estimate for hiring top-tier talent in India. Transparent pricing, zero hidden fees.
          </p>
        </div>

        <div className="w-full bg-white border border-slate-200 rounded-[32px] p-6 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Form Section */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
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
                  {['USD', 'EUR', 'AUD', 'SGD', 'AED'].map((c) => (
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
            <div className="lg:col-span-5 flex flex-col justify-center">
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
    </section>
  );
};
