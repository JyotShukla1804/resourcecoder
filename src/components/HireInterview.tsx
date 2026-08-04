"use client";

import React, { useState } from "react";
import { supabaseForm } from "@/lib/supabase-form";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { countries } from "@/lib/countries";

interface HireInterviewProps {
  badge?: string;
  heading?: string;
  description?: string;
  stat1Val?: string;
  stat1Lbl?: string;
  stat2Val?: string;
  stat2Lbl?: string;
  formTitle?: string;
}

export function HireInterview({
  badge,
  heading,
  description,
  stat1Val,
  stat1Lbl,
  stat2Val,
  stat2Lbl,
  formTitle
}: HireInterviewProps = {}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companyWebsite: "",
    linkedinLink: "",
    techStack: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === "IN") || countries[0]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabaseForm
        .from('upcoming_leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            country_code: selectedCountry.dial_code,
            mobile: formData.phoneNumber,
            company_name: formData.companyName,
            company_web: formData.companyWebsite,
            social_url: formData.linkedinLink,
            message: `Tech Stack: ${formData.techStack}\nMessage: ${formData.message}`,
            source_website: 'resource-coder-hire-interview',
          }
        ]);

      if (error) {
        console.error("Error submitting form:", error);
        alert(`Failed to submit request. Reason: ${error.message || error.details || 'Unknown Error'}`);
        return;
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred.");
    }
  };

  const wrapTrialWithGradient = (text: string) => {
    if (!text) return "";
    if (text.includes("bg-gradient-to-r") || text.includes("text-transparent")) {
      return text;
    }
    const pattern = /(05\s*Day[s]?\s*Risk-Free\s*Trial|15\s*Day[s]?\s*Risk-Free\s*Trial|5-Day\s*Risk-Free\s*Trial|15-Day\s*Risk-Free\s*Trial|Risk-Free\s*Trial)/gi;
    return text.replace(pattern, (match) => {
      return `<span class="bg-gradient-to-r from-[#4B56D2] to-[#4B56D2] bg-clip-text text-transparent" style="background-image: linear-gradient(90deg, #4B56D2 0%, #4B56D2 100%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: 'Liberation Sans', sans-serif; font-weight: 700;">${match}</span>`;
    });
  };

  return (
    <div className="w-full bg-black relative z-10 overflow-hidden border-t border-slate-950">
      <section
        id="contact-form"
        className="w-full max-w-[1358px] mx-auto py-16 md:py-[96px] px-4 sm:px-6 md:px-[55px] relative min-h-[auto] md:min-h-[920px] flex items-center"
      >
      {/* Background soft glow decoration */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#4B56D2]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Column - Content & Stats */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center text-left">

          {/* Available now badge */}
          <span
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full mb-8 bg-[#16161a] border border-[#222226] font-normal text-xs uppercase text-white tracking-wide"
          >
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#00C950]"
            />
            <span>{badge || "Available Now"}</span>
          </span>

          {/* Heading */}
          {heading ? (
            <h2 
              className="text-white font-extrabold text-3xl sm:text-4xl md:text-[50px] leading-[1.15] mb-6 tracking-tight"
              dangerouslySetInnerHTML={{ __html: wrapTrialWithGradient(heading) }}
            />
          ) : (
            <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-[50px] leading-[1.15] mb-6 tracking-tight">
              Schedule a Developer Interview & Get a{" "}
              <span
                className="bg-gradient-to-r from-[#4B56D2] to-[#4B56D2] bg-clip-text text-transparent font-bold text-4xl sm:text-5xl md:text-[60px] md:leading-[75px]"
              >
                05 Day Risk-Free Trial
              </span>
              <span
                className="font-bold text-4xl sm:text-5xl md:text-[60px] md:leading-[75px]"
              >
                {" "}🚀
              </span>
            </h2>
          )}

          {/* Paragraph description */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-[530px] font-normal mb-8">
            {description || "We make hiring seamless by matching you with the right developer based on your specific requirements. Interview our experts, assess their skills, and start risk-free for 05 days, no commitment, just results!"}
          </p>

          {/* Thin divider */}
          <div className="w-full border-t border-slate-900 mb-8" />

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 w-full max-w-[480px]">
            {/* Stat 1 */}
            <div>
              <div
                className="font-bold text-4xl leading-10 text-white"
                dangerouslySetInnerHTML={{ __html: stat1Val ? stat1Val.replace(/(hrs|%)/i, '<span style="color: #4B56D2">$1</span>') : '48<span style="color: #4B56D2">hrs</span>' }}
              />
              <p className="text-slate-500 text-xs sm:text-sm mt-1.5 font-medium">
                {stat1Lbl || "Average onboarding time"}
              </p>
            </div>
            {/* Stat 2 */}
            <div>
              <div
                className="font-bold text-4xl leading-10 text-white"
                dangerouslySetInnerHTML={{ __html: stat2Val ? stat2Val.replace(/(hrs|%)/i, '<span style="color: #4B56D2">$1</span>') : '98<span style="color: #4B56D2">%</span>' }}
              />
              <p className="text-slate-500 text-xs sm:text-sm mt-1.5 font-medium">
                {stat2Lbl || "Client retention rate"}
              </p>
            </div>
          </div>

        </div>

        {/* Right Column - Form Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end items-center">
          <div className="bg-[#0e0e11] border border-slate-900 rounded-[32px] p-8 md:p-10 w-full max-w-[580px] shadow-2xl relative">

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 animate-bounce">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-extrabold text-white">Request Submitted!</h4>
                  <p className="text-slate-400 text-sm max-w-xs mx-auto">
                    Thank you for reaching out. Our tech advisors will review your requirements and get in touch with you shortly.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#4B56D2] font-semibold hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h3
                  className="mb-8 font-bold text-2xl leading-8 text-white"
                >
                  {formTitle || "Tell us about your project"}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                    {/* Row 1: Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name *"
                        className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email *"
                        className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>

                    {/* Row 2: Phone and Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex relative">
                        <button
                          type="button"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          className="flex items-center justify-center px-3 bg-slate-50 border border-slate-200/50 border-r-0 rounded-l-xl text-slate-700 text-sm shrink-0 gap-1.5 hover:bg-slate-100 transition-colors focus:outline-none"
                        >
                          <img src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt={`${selectedCountry.name} Flag`} className="w-5 h-3.5 object-cover rounded-sm" />
                          <span>{selectedCountry.dial_code}</span>
                          <ChevronDown className={`w-3.5 h-3.5 text-slate-400 ml-0.5 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {isCountryDropdownOpen && (
                            <>
                              <div className="fixed inset-0 z-40" onClick={() => setIsCountryDropdownOpen(false)} />
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute top-full left-0 mt-2 w-[220px] bg-white border border-slate-100 rounded-xl shadow-xl z-50 overflow-hidden"
                              >
                                <div className="max-h-[200px] overflow-y-auto py-2 scrollbar-thin">
                                  {countries.map((country) => (
                                    <button
                                      key={country.code}
                                      type="button"
                                      onClick={() => {
                                        setSelectedCountry(country);
                                        setIsCountryDropdownOpen(false);
                                      }}
                                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors text-left overflow-hidden"
                                    >
                                      <img src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} alt={country.name} className="w-5 h-3.5 object-cover rounded-sm shrink-0" />
                                      <span className="text-sm font-medium text-slate-700 truncate">{country.name}</span>
                                      <span className="text-xs text-slate-400 ml-auto whitespace-nowrap shrink-0">{country.dial_code}</span>
                                    </button>
                                  ))}
                                </div>
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>

                        <input
                          type="tel"
                          name="phoneNumber"
                          required
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="Phone number *"
                          className="w-full bg-slate-50 border border-slate-200/50 rounded-r-xl px-3 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                        />
                      </div>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>

                    {/* Row 3: Website and LinkedIn */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="url"
                        name="companyWebsite"
                        value={formData.companyWebsite}
                        onChange={handleChange}
                        placeholder="Company Website"
                        className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                      <input
                        type="text"
                        name="linkedinLink"
                        required
                        value={formData.linkedinLink}
                        onChange={handleChange}
                        placeholder="LinkedIn / Instagram Link *"
                        className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>

                    {/* Row 4: Tech Stack */}
                    <div className="relative">
                      <select
                        name="techStack"
                        required
                        value={formData.techStack}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-500/50 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select Tech Stack *</option>
                        <option value="React.js Developer">React.js Developer</option>
                        <option value="Next.js Developer">Next.js Developer</option>
                        <option value="Angular Developer">Angular Developer</option>
                        <option value="Vue.js Developer">Vue.js Developer</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="Node.js Developer">Node.js Developer</option>
                        <option value="Python Developer">Python Developer</option>
                        <option value="Java Developer">Java Developer</option>
                        <option value=".NET Developer">.NET Developer</option>
                        <option value="PHP / Laravel Developer">PHP / Laravel Developer</option>
                        <option value="Golang Developer">Golang Developer</option>
                        <option value="Full-Stack Developer">Full-Stack Developer</option>
                        <option value="MERN Stack Developer">MERN Stack Developer</option>
                        <option value="MEAN Stack Developer">MEAN Stack Developer</option>
                        <option value="JavaScript Developer">JavaScript Developer</option>
                        <option value="TypeScript Developer">TypeScript Developer</option>
                        <option value="React Native Developer">React Native Developer</option>
                        <option value="Flutter Developer">Flutter Developer</option>
                        <option value="iOS Developer">iOS Developer</option>
                        <option value="Android Developer">Android Developer</option>
                        <option value="AI/ML Engineer">AI/ML Engineer</option>
                        <option value="Generative AI / LLM Developer">Generative AI / LLM Developer</option>
                        <option value="AI Integration Developer">AI Integration Developer</option>
                        <option value="Data Engineer">Data Engineer</option>
                        <option value="Data Scientist">Data Scientist</option>
                        <option value="DevOps Engineer">DevOps Engineer</option>
                        <option value="Cloud Engineer (AWS / Azure / GCP)">Cloud Engineer (AWS / Azure / GCP)</option>
                        <option value="WordPress Developer">WordPress Developer</option>
                        <option value="Shopify Developer">Shopify Developer</option>
                        <option value="WooCommerce Developer">WooCommerce Developer</option>
                        <option value="QA / Automation Engineer">QA / Automation Engineer</option>
                        <option value="Cybersecurity / DevSecOps Engineer">Cybersecurity / DevSecOps Engineer</option>
                        <option value="Blockchain Developer">Blockchain Developer</option>
                        <option value="Virtual Reality Development">Virtual Reality Development</option>
                        <option value="Augmented Reality Development">Augmented Reality Development</option>
                        <option value="Mixed Reality Development">Mixed Reality Development</option>
                        <option value="3D Game Modeling">3D Game Modeling</option>
                        <option value="3D Game Development">3D Game Development</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Row 5: Message */}
                    <textarea
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none h-28"
                      placeholder="Message *"
                    />

                    {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-ripple inline-flex items-center justify-center text-white transition-shadow duration-300 shadow-md hover:shadow-lg cursor-pointer mx-auto bg-[#4B56D2] w-full sm:w-[469px] max-w-full h-14 py-4 rounded-full font-bold text-base text-center uppercase mt-4"
                  >
                    Submit Request
                  </button>
                </form>
              </>
            )}

          </div>
        </div>

      </div>
    </section>
  </div>
  );
}
