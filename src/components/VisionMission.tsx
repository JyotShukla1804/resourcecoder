import React from "react";

export function VisionMission() {
  const visionPoints = [
    "Leading digital transformation globally",
    "Empowering businesses with cutting-edge solutions",
    "Creating sustainable technological ecosystems"
  ];

  const missionPoints = [
    "Deliver innovative cloud solutions",
    "Foster digital transformation excellence",
    "Build scalable and secure architectures"
  ];

  return (
    <div className="w-full bg-[#030303] py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden border-t border-slate-950">
      {/* Ambient Dark Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col gap-24 md:gap-32">
        
        {/* Row 1: Vision (Text on Left, Image on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Column */}
          <div className="text-left space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#4B56D2]">
              Our Vision
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Future-Forward<br />Innovation
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              <strong className="text-white font-semibold">Digitizing the World with Innovation</strong> - We envision a future where technology seamlessly integrates with business operations, creating unprecedented opportunities for growth and efficiency.
            </p>
            
            <ul className="space-y-4 pt-2">
              {visionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  <svg className="w-5 h-5 text-[#4B56D2] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-[29/25] rounded-[32px] overflow-hidden border border-slate-900 shadow-2xl">
            <img
              src="/vision-earth.png"
              alt="Our Vision"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

        </div>

        {/* Row 2: Mission (Image on Left, Text on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Column (First on desktop, second on mobile) */}
          <div className="order-last lg:order-first relative w-full aspect-[29/25] rounded-[32px] overflow-hidden border border-slate-900 shadow-2xl">
            <img
              src="/mission-team.png"
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Text Column (First on mobile, second on desktop) */}
          <div className="order-first lg:order-last text-left space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#4B56D2]">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Empowering Success
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              <strong className="text-white font-semibold">Making Businesses Future-Ready</strong> - We empower organizations with custom digital solutions that drive growth, enhance efficiency, and provide competitive advantages in today's evolving landscape.
            </p>
            
            <ul className="space-y-4 pt-2">
              {missionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  <svg className="w-5 h-5 text-[#4B56D2] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
