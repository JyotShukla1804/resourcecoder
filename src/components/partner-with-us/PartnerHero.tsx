"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Handshake } from "lucide-react";

export function PartnerHero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We will be in touch soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full relative overflow-hidden flex items-center min-h-[90vh] bg-[#f8f9ff]">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#4B56D2]/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"
        />
        <motion.div
          animate={{ x: [0, -100, 50, 0], y: [0, 100, -50, 0], scale: [1, 0.9, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"
        />
        <motion.div
          animate={{ x: [0, 50, -100, 0], y: [0, -50, 100, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-70"
        />
      </div>

      <div className="absolute inset-0 bg-white/40 backdrop-blur-[60px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-48 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="text-left max-w-2xl relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 shadow-[0_4px_24px_-8px_rgba(75,86,210,0.3)] border border-white backdrop-blur-xl mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4B56D2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4B56D2]"></span>
              </span>
              <span className="text-sm font-bold tracking-[0.15em] text-[#4B56D2] uppercase">Collaboration & Growth</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8"
            >
              Partner With <br />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-2 bg-[#4B56D2]/30 blur-2xl animate-pulse"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-blue-500 animate-gradient-x">
                  ResourceCoders
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-700 text-lg md:text-xl leading-relaxed mb-10 font-medium"
            >
              A successful partnership is more than just an agreement—it's a shared vision. Join forces with us to deliver high-impact digital solutions and scale your operations globally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-4 bg-white/50 backdrop-blur-xl border border-white px-5 py-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#4B56D2]/10 flex items-center justify-center border border-[#4B56D2]/20 shadow-inner">
                  <Handshake className="w-5 h-5 text-[#4B56D2]" />
                </div>
                <span className="text-slate-800 font-bold">Strategic Alliance</span>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", damping: 20 }}
            className="relative w-full rounded-[2rem] bg-white/80 backdrop-blur-2xl border border-white p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(75,86,210,0.15)] perspective-1000"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4B56D2]/10 rounded-full blur-[40px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-[40px] pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold text-slate-900 mb-2 flex items-center gap-3">
                <span className="text-2xl">🤝</span> Partner with Us
              </h3>
              <p className="text-slate-500 mb-8 font-medium">Fill out the form below and let's explore synergies.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-[#4B56D2] focus:ring-2 focus:ring-[#4B56D2]/20 transition-all outline-none text-slate-800"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-[#4B56D2] focus:ring-2 focus:ring-[#4B56D2]/20 transition-all outline-none text-slate-800"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-[#4B56D2] focus:ring-2 focus:ring-[#4B56D2]/20 transition-all outline-none text-slate-800"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-[#4B56D2] focus:ring-2 focus:ring-[#4B56D2]/20 transition-all outline-none text-slate-800 resize-none"
                    placeholder="How can we collaborate?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#4B56D2] to-blue-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-[#4B56D2]/30 transition-all duration-300 flex items-center justify-center gap-2 mt-4 group"
                >
                  Submit Inquiry
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
