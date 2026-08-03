"use client";

import React, { useState } from "react";
import { supabaseForm } from "@/lib/supabase-form";

export function InterviewForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    techStack: "",
    projectDetails: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabaseForm
        .from('upcoming_leads')
        .insert([
          {
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            mobile: formData.phoneNumber,
            message: `Tech Stack: ${formData.techStack}\nProject Details: ${formData.projectDetails}`,
            source_website: 'resource-coder-hire-team',
          }
        ]);

      if (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit request. Please try again.");
        return;
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div id="interview-section" className="w-full bg-[#4B56D2] relative z-10 overflow-hidden">
      <div className="w-full max-w-[1358px] mx-auto py-16 md:py-20 px-4 sm:px-6 md:px-[55px] relative min-h-[auto] md:min-h-[800px]">
        {/* Dynamic Ambient Background Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Column: Info & Content */}
          <div className="lg:col-span-6 text-left space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Schedule a Developer<br />
                Interview & Get a 05 Day<br />
                Risk-Free Trial 🚀
              </h2>
              <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                We make hiring seamless by matching you with the right developer based on your specific requirements. Interview our experts, assess their skills, and start risk-free for 05 days, no commitment, just results!
              </p>
            </div>

            {/* Success Guaranteed Card */}
            <div className="bg-white/10 border border-white/10 rounded-[28px] p-6 sm:p-8 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                Your Success Is Guaranteed 🚀
              </h3>
              <div className="space-y-3">
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  We accelerate the release of digital products with a streamlined development process, ensuring efficiency, quality, and success.
                </p>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  Our team leverages <strong className="text-white font-semibold">Slack, Jira, and GitHub</strong> for accurate deployment and seamless communication, keeping your project on track at every stage.
                </p>
              </div>
            </div>

            {/* Email Contact Link */}
            <div className="pt-2">
              <a
                href="mailto:sales@kraziocloud.com"
                className="text-white text-sm font-semibold tracking-wide hover:underline hover:text-blue-100 transition-colors"
              >
                sales@kraziocloud.com
              </a>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white rounded-[36px] shadow-2xl p-8 sm:p-10 w-full max-w-[608px]">
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 animate-bounce">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-extrabold text-slate-900">Request Submitted!</h4>
                    <p className="text-slate-500 text-sm max-w-xs mx-auto">
                      Thank you for reaching out. Our tech advisors will get in touch with you shortly.
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
                  <h3 className="text-slate-900 font-extrabold text-xl sm:text-2xl mb-6 text-left">
                    Let's Get Started
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Fields Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>

                    {/* Email Field */}
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                    />

                    {/* Phone Number Field */}
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                    />

                    {/* Tech Stack Select Dropdown */}
                    <div className="relative">
                      <select
                        name="techStack"
                        aria-label="Select Tech Stack"
                        required
                        value={formData.techStack}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-500 text-sm focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer transition-colors"
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

                    {/* Project Details Textarea */}
                    <textarea
                      name="projectDetails"
                      required
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Project Details"
                      className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 h-28 sm:h-32 resize-none transition-colors"
                    />

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn-ripple inline-flex items-center justify-center text-white font-bold text-base tracking-wide transition-shadow duration-300 shadow-md hover:shadow-lg w-full sm:w-[469px] max-w-full h-14 py-4 rounded-full uppercase bg-[#4B56D2] text-center mt-4"
                    >
                      Submit Request
                    </button>
                  </form>
                </>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
