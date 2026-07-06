"use client";

import React, { useState } from "react";

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
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    techStack: "",
    projectDetails: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
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
            {description || "We make hiring seamless by matching you with the right developer based on your specific requirements. Interview our experts, assess their skills, and start risk-free for 05 days—no commitment, just results!"}
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
                  {/* Name Fields Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block mb-2 text-[#9F9FA9] font-normal text-sm leading-5"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full bg-[#16161a] border border-slate-900 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#4B56D2]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        className="block mb-2 text-[#9F9FA9] font-normal text-sm leading-5"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full bg-[#16161a] border border-slate-900 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#4B56D2]/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      className="block mb-2 text-[#9F9FA9] font-normal text-sm leading-5"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full bg-[#16161a] border border-slate-900 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#4B56D2]/50 transition-colors"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label
                      className="block mb-2 text-[#9F9FA9] font-normal text-sm leading-5"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full bg-[#16161a] border border-slate-900 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#4B56D2]/50 transition-colors"
                    />
                  </div>

                  {/* Tech Stack Select */}
                  <div>
                    <label
                      className="block mb-2 text-[#9F9FA9] font-normal text-sm leading-5"
                    >
                      Select Tech Stack
                    </label>
                    <div className="relative">
                      <select
                        name="techStack"
                        required
                        value={formData.techStack}
                        onChange={handleChange}
                        className="w-full bg-[#16161a] border border-slate-900 rounded-xl px-4 py-3 text-slate-400 text-sm focus:outline-none focus:border-[#4B56D2]/50 appearance-none cursor-pointer transition-colors"
                      >
                        <option value="" disabled>Select Tech Stack</option>
                        <option value="React / Next.js">React / Next.js</option>
                        <option value="Node.js / Python">Node.js / Python</option>
                        <option value="Flutter / React Native">Flutter / React Native</option>
                        <option value="AI / ML / Data">AI / ML / Data Engineering</option>
                        <option value="Unity / Unreal / AR/VR">Unity / Unreal / AR/VR</option>
                        <option value="Full Stack Developers">Full Stack Developers</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Project Details Textarea */}
                  <div>
                    <label
                      className="block mb-2 text-[#9F9FA9] font-normal text-sm leading-5"
                    >
                      Project Details
                    </label>
                    <textarea
                      name="projectDetails"
                      required
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Project Details"
                      className="w-full bg-[#16161a] border border-slate-900 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#4B56D2]/50 h-28 resize-none transition-colors"
                    />
                  </div>

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
