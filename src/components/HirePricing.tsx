"use client";

import React from "react";
import Link from "next/link";

interface PricingPlan {
  id?: string;
  name: string;
  price: string;
  unit?: string | null;
  position?: number;
  features: string[];
  badge?: string | null;
  description?: string | null;
  cta_text?: string | null;
  cta_url?: string | null;
  is_featured?: boolean;
}

interface HirePricingProps {
  data?: PricingPlan[];
  bottomCtaText?: string;
  bottomCtaUrl?: string;
}

export function HirePricing({ data, bottomCtaText, bottomCtaUrl }: HirePricingProps = {}) {
  const defaultPlans: PricingPlan[] = [
    {
      name: "Hourly",
      price: "$20",
      unit: "hour",
      badge: "Pay As You Go",
      description: "Perfect for short-term projects or specific tasks. We'll provide a fully signed NDA for your Project's confidentiality.",
      cta_text: "Get Started Hourly",
      is_featured: false,
      features: ["Flexible hours", "Time tracking reports", "Direct communication"]
    },
    {
      name: "Dedicated ReactJS Developer",
      price: "$2880",
      unit: "month",
      badge: "Most Popular",
      description: "When you seek a long-term partnership with a limited budget and in less time, hire our experienced developers monthly.",
      cta_text: "Hire Dedicated Team",
      is_featured: true,
      features: ["160 hours per month", "8 hours a day, 5 days a week", "Dedicated Project Manager", "Daily stand-ups & reporting"]
    },
    {
      name: "Fixed Cost Solution",
      price: "Custom",
      unit: "",
      badge: "Project Based",
      description: "Got a clear scope and requirements? We'll provide a detailed estimation of your project along with time and cost.",
      cta_text: "Get a Quote",
      is_featured: false,
      features: ["Fixed timeline & budget", "Ensure Timely Delivery", "Milestone based payments"]
    }
  ];

  let plans = data && data.length > 0 ? data : defaultPlans;

  // Ensure the featured plan is always in the middle (index 1) for a 3-card layout
  if (plans.length === 3) {
    const plansCopy = [...plans];
    const featuredIndex = plansCopy.findIndex(p => p.is_featured);
    if (featuredIndex !== -1 && featuredIndex !== 1) {
      const featuredPlan = plansCopy.splice(featuredIndex, 1)[0];
      plansCopy.splice(1, 0, featuredPlan);
      plans = plansCopy;
    }
  }

  return (
    <section
      className="relative w-full bg-[#FFFFFF] flex items-center overflow-hidden border-t border-slate-100 min-h-[1185px]"
    >
      <div className="w-full max-w-[1358px] mx-auto py-24 px-6 md:px-[55px] relative z-10 flex flex-col justify-center">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-[#0f172a] font-extrabold text-3xl sm:text-4xl md:text-[50px] leading-[1.15] tracking-tight mb-4">
            Hire Reactjs Developer As Per Your Need
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-semibold tracking-wide uppercase flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            <span>Simple & Transparent Pricing</span>
            <span className="text-slate-200">|</span>
            <span>Fully Signed NDA</span>
            <span className="text-slate-200">|</span>
            <span>Code Security</span>
            <span className="text-slate-200">|</span>
            <span>Easy Exit Policy</span>
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-[1358px] mx-auto w-full mb-16">
          {plans.map((plan, idx) => {
            const isFeatured = plan.is_featured;
            if (isFeatured) {
              return (
                <div 
                  key={idx}
                  className="bg-[#000000] border-t-4 border-t-[#4B56D2] rounded-[32px] p-8 md:p-10 shadow-[0_25px_60px_rgba(21,93,252,0.18)] flex flex-col justify-between items-stretch hover:scale-[1.01] transition-all duration-300 relative"
                >
                  {/* Decorative Glow */}
                  <div
                    className="pointer-events-none absolute top-8 right-8 w-24 h-24 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-700/20 blur-[40px] z-0"
                  />
                  <div className="relative z-10">
                    {plan.badge && (
                      <div className="mb-4">
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full uppercase text-white bg-white/10 border border-white/20 font-bold text-xs leading-4 tracking-wide"
                        >
                          <svg
                            className="w-3 h-3 text-[#4B56D2]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.252.583 1.828l-3.97 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.888a1 1 0 00-1.176 0l-3.97 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.97-2.888c-.777-.576-.378-1.828.583-1.828h4.907a1 1 0 00.95-.69l1.519-4.674z" />
                          </svg>
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <h3
                      className="mb-4 text-white font-bold text-3xl leading-9"
                    >
                      {plan.name}
                    </h3>

                    <div className="flex items-baseline mb-6">
                      <span
                        className={`inline-block text-white font-bold leading-[60px] ${plan.price.length > 6 ? 'text-[40px]' : 'text-[60px]'}`}
                      >
                        {plan.price}
                      </span>
                      {plan.unit && <span className="text-slate-400 text-sm ml-2 font-medium">/ {plan.unit}</span>}
                    </div>

                    {plan.description && (
                      <p className="text-slate-400 text-sm leading-relaxed font-normal mb-8">
                        {plan.description}
                      </p>
                    )}

                    {/* Checklist */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-center gap-3.5">
                          <div className="w-5 h-5 rounded-full bg-[#4B56D2]/10 border border-[#4B56D2]/20 flex items-center justify-center flex-shrink-0 text-[#4B56D2]">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-slate-300 text-sm font-semibold">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={plan.cta_url || "#contact-form"}
                    className="btn-ripple inline-flex items-center justify-center text-white font-bold text-xs tracking-wider py-4 px-6 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-98 uppercase shadow-lg bg-[#4B56D2]"
                  >
                    {plan.cta_text || "Hire Dedicated Team"}
                  </Link>
                </div>
              );
            } else {
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-100 rounded-[32px] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between items-stretch hover:shadow-lg transition-shadow duration-300"
                >
                  <div>
                    {plan.badge && (
                      <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest block mb-2">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="text-[#0f172a] font-extrabold text-2xl mb-4">
                      {plan.name}
                    </h3>

                    <div className="flex items-baseline mb-6">
                      <span className="text-[#0f172a] font-black text-4xl sm:text-5xl">{plan.price}</span>
                      {plan.unit && <span className="text-slate-500 text-sm ml-2 font-medium">/ {plan.unit}</span>}
                    </div>

                    {plan.description && (
                      <p className="text-slate-500 text-sm leading-relaxed font-normal mb-8">
                        {plan.description}
                      </p>
                    )}

                    {/* Checklist */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-center gap-3.5">
                          <div className="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-700">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-slate-650 text-sm font-semibold">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={plan.cta_url || "#contact-form"}
                    className="btn-ripple inline-flex items-center justify-center bg-black text-white font-bold text-xs tracking-wider py-4 px-6 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-98 uppercase"
                  >
                    {plan.cta_text || "Get Started"}
                  </Link>
                </div>
              );
            }
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <Link
            href={bottomCtaUrl || "#contact-form"}
            className="btn-ripple inline-flex items-center justify-center transition-shadow duration-300 shadow-lg hover:shadow-xl bg-[#4B56D2] w-full max-w-[443px] h-[60px] rounded-full px-10 py-4 text-white font-bold text-lg tracking-wide uppercase text-center"
          >
            {bottomCtaText || "Schedule a Developer Interview"}
          </Link>
        </div>

      </div>
    </section>
  );
}
