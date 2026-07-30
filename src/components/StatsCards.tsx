import React from "react";

export function StatsCards() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "232+", label: "Projects Delivered" },
    { number: "100+", label: "Global Clients" },
    { number: "100+", label: "Experienced Developers\nunder Management" },
  ];

  return (
    <section className="w-full relative z-20 bg-transparent pointer-events-none">
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative -mt-16 md:-mt-24 pb-12 pointer-events-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 p-8 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-[#4B56D2] mb-3 tracking-tight">
                {stat.number}
              </div>
              <div className="text-slate-800 text-[15px] font-medium leading-snug whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
