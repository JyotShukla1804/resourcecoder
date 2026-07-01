"use client";

import React from "react";

export function AgileValuesCards() {
  return (
    <section className="w-full bg-slate-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Core Values Card */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-[#4B56D2] text-2xl mb-6 group-hover:bg-[#4B56D2] group-hover:text-white transition-colors duration-300">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Core Values
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Our core values encompass a commitment to excellence, continuous learning, and fostering a collaborative environment. We build software that not only works but drives meaningful business growth.
            </p>
          </div>

          {/* What Sets Us Apart Card */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-[#4B56D2] text-2xl mb-6 group-hover:bg-[#4B56D2] group-hover:text-white transition-colors duration-300">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              What Sets Us Apart
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              What sets us apart is our Agile mindset, allowing us to deliver software solutions with unmatched speed, quality, and adaptability. We prioritize your strategic goals in every sprint we execute.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
