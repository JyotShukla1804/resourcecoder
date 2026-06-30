import React from "react";

export function AboutGlobalPresence() {
  const locations = [
    {
      city: "New York, USA",
      role: "Global Headquarters",
    },
    {
      city: "London, UK",
      role: "European Hub",
    },
    {
      city: "Mumbai, India",
      role: "Development Center",
    },
    {
      city: "Dubai, UAE",
      role: "MENA Region Office",
    },
  ];

  return (
    <section
      className="w-full relative z-10 flex flex-col items-center overflow-hidden border-t border-slate-100 bg-[#F8FAFC]"
    >
      <div className="w-full max-w-[1358px] flex flex-col items-center py-24 px-6 md:px-[55px]">
        {/* Title & Subtitle */}
        <div className="text-center max-w-2xl mb-16 space-y-4">
          <h2
            className="text-slate-900 font-bold text-5xl leading-[48px]"
          >
            Our Global Presence
          </h2>
          <p
            className="text-[#545454] font-normal text-lg leading-7 text-center"
          >
            Delivering excellence across borders with our strategically located delivery centers.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 rounded-[24px] p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_10px_35px_rgba(15,23,42,0.06)] hover:scale-[1.02] transition-all duration-300"
            >
              {/* Circular Location Icon Wrapper */}
              <div className="w-16 h-16 rounded-full bg-[#EFF6FF] flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src="/icon-location.png"
                  alt="Location Icon"
                  className="w-full h-full object-contain scale-[1.1]"
                  style={{
                    filter: "hue-rotate(25deg) saturate(1.5)"
                  }}
                />
              </div>

              {/* City & Country Title */}
              <h3
                className="text-slate-900 mb-2 font-bold text-xl leading-7"
              >
                {loc.city}
              </h3>

              {/* Role Subtitle */}
              <p
                className="text-[#545454] font-normal text-sm leading-5"
              >
                {loc.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
