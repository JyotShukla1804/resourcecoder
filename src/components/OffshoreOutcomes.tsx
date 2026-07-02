import React from "react";

export function OffshoreOutcomes() {
  const outcomes = [
    {
      title: "Cost Efficiency",
      desc: "Reduce operational and development costs by up to 60% without compromising on code quality or delivery speed.",
      icon: (
        <svg className="w-6 h-6 text-[#4B56D2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Rapid Scaling",
      desc: "Ramp up or down your engineering capacity in weeks, not months. We handle the recruitment, onboarding, and infrastructure.",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Complete Control",
      desc: "Your offshore team acts as a seamless extension of your in-house staff. You retain full control over the process, IP, and roadmap.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Global Talent Access",
      desc: "Break free from local talent shortages. Tap into a curated pool of top-tier developers, architects, and product managers.",
      icon: (
        <svg className="w-6 h-6 text-[#4B56D2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8 relative border-b border-slate-100">
      <div className="max-w-[1358px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              We Guarantee <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-indigo-600">Measurable Outcomes.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
              Our Offshore Development framework is engineered for predictability and high performance. We don't just provide bodies; we deliver dedicated teams that align with your business objectives.
            </p>
            <div className="pt-4">
               <button className="text-sm font-bold text-[#4B56D2] hover:text-[#3d46a8] flex items-center gap-2 group transition-colors">
                 Learn about our methodology 
                 <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </button>
            </div>
          </div>

          {/* Right: Grid of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Ambient background glow for cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#4B56D2]/5 rounded-full blur-[100px] pointer-events-none" />
            
            {outcomes.map((outcome, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:bg-white transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(75,86,210,0.1)] ${idx % 2 === 1 ? 'sm:mt-12' : ''}`}
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 border border-indigo-100/60">
                  {outcome.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{outcome.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{outcome.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
