import React from "react";

export function CoreValues() {
  return (
    <div className="w-auto self-stretch -mx-4 sm:-mx-6 lg:-mx-8 bg-transparent pt-32 pb-32 px-6 sm:px-12 md:px-20 relative z-10">
      <div className="max-w-[1358px] mx-auto text-center space-y-16">
        {/* Section Header */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2
            className="text-4xl sm:text-5xl md:text-[56px] text-slate-900 tracking-tighter"
            
          >
            Our Core Values
          </h2>
          <p 
            className="text-base md:text-[18px]"
            
          >
            The principles that guide our work, our culture, and our relationships with clients and partners.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">

          {/* Card 1 */}
          <div className="bg-white rounded-[32px] border-0 p-10 text-left shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] hover:shadow-[0_30px_60px_rgba(8,_112,_184,_0.12)] transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-12 h-12 rounded-[14px] bg-blue-50/50 flex items-center justify-center text-[#4B56D2] mb-6">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
              </svg>
            </div>
            <h3 className="text-slate-900 font-extrabold text-xl mb-3 leading-snug">
              Innovation First
            </h3>
            <p className="text-sm leading-relaxed font-normal text-[#545454]">
              We constantly explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the curve.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[32px] border-0 p-10 text-left shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] hover:shadow-[0_30px_60px_rgba(8,_112,_184,_0.12)] transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-12 h-12 rounded-[14px] bg-blue-50/50 flex items-center justify-center text-[#4B56D2] mb-6">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-slate-900 font-extrabold text-xl mb-3 leading-snug">
              Uncompromising Quality
            </h3>
            <p className="text-sm leading-relaxed font-normal text-[#545454]">
              Excellence is not an act, but a habit. We maintain the highest standards in code quality, design, and project delivery.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[32px] border-0 p-10 text-left shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] hover:shadow-[0_30px_60px_rgba(8,_112,_184,_0.12)] transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-12 h-12 rounded-[14px] bg-blue-50/50 flex items-center justify-center text-[#4B56D2] mb-6">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-slate-900 font-extrabold text-xl mb-3 leading-snug">
              Client-Centricity
            </h3>
            <p className="text-sm leading-relaxed font-normal text-[#545454]">
              Your success is our success. We build strong, transparent partnerships focused on achieving your specific business goals.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
