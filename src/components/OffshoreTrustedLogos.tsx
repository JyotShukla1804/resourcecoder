import React from "react";

export function OffshoreTrustedLogos() {
  const logos = [
    { name: "TechNova", type: "tech" },
    { name: "GlobalFin", type: "fin" },
    { name: "HealthPlus", type: "health" },
    { name: "EduSmart", type: "edu" },
    { name: "Logisys", type: "log" },
    { name: "RetailPro", type: "ret" },
  ];

  return (
    <section className="w-full bg-slate-50 py-10 border-b border-slate-200 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div className="flex w-fit animate-[scroll_40s_linear_infinite]">
        {/* Double the logos to create a seamless infinite scroll effect */}
        {[...logos, ...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center px-12 lg:px-16 whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <span className="text-xl md:text-2xl font-bold tracking-wider text-slate-800">
              {logo.name}
            </span>
          </div>
        ))}
      </div>

      
    </section>
  );
}
