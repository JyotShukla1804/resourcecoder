import React from "react";

export function TrustedBy({
  bgColor = "bg-white",
  fadeColor = "from-white"
}: {
  bgColor?: string;
  fadeColor?: string;
} = {}) {
  const renderLogos = () => (
    <>
      {/* 1. Tommy Hilfiger */}
      <div className="w-44 h-20 flex items-center justify-center shrink-0">
        <img src="/logos/tommy-hilfiger.png" alt="Tommy Hilfiger" className="max-h-13 max-w-full object-contain mix-blend-multiply" />
      </div>

      {/* 2. Torrent Power */}
      <div className="w-44 h-20 flex items-center justify-center shrink-0">
        <div className="flex items-center gap-2.5 select-none">
          <div className="w-10 h-10 bg-[#f58220] rounded-md p-1.5 grid grid-cols-3 gap-[2px] items-center justify-center flex-shrink-0">
            <div className="w-2 h-2 bg-[#f58220]" />
            <div className="w-2 h-2 bg-white rounded-xs" />
            <div className="w-2 h-2 bg-[#f58220]" />
            <div className="w-2 h-2 bg-white rounded-xs" />
            <div className="w-2 h-2 bg-[#f58220]" />
            <div className="w-2 h-2 bg-white rounded-xs" />
            <div className="w-2 h-2 bg-[#f58220]" />
            <div className="w-2 h-2 bg-white rounded-xs" />
            <div className="w-2 h-2 bg-[#f58220]" />
          </div>
          <div className="flex flex-col text-left leading-none font-sans font-extrabold">
            <span className="text-[15px] tracking-tight text-slate-800">torrent</span>
            <span className="h-[2px] w-full bg-[#f58220] my-0.5" />
            <span className="text-[11px] tracking-[0.18em] text-slate-400 font-bold">POWER</span>
          </div>
        </div>
      </div>

      {/* 3. Gujarat Tourism */}
      <div className="w-44 h-20 flex items-center justify-center shrink-0">
        <img src="/logos/gujarat-tourism.png" alt="Gujarat Tourism" className="max-h-18 max-w-full object-contain mix-blend-multiply" />
      </div>

      {/* 4. IDFC First Bank */}
      <div className="w-44 h-20 flex items-center justify-center shrink-0">
        <img src="/logos/idfc-first-bank.png" alt="IDFC FIRST Bank" className="max-h-10 max-w-full object-contain mix-blend-multiply" />
      </div>

      {/* 5. Adani Ports & Logistics */}
      <div className="w-44 h-20 flex items-center justify-center shrink-0">
        <img src="/logos/adani.png" alt="Adani Ports & Logistics" className="max-h-16 max-w-full object-contain mix-blend-multiply" />
      </div>

      {/* 6. Lodha */}
      <div className="w-44 h-20 flex items-center justify-center shrink-0">
        <img src="/logos/lodha.png" alt="Lodha" className="max-h-7 max-w-full object-contain mix-blend-multiply" />
      </div>

      {/* 7. Giriraj Jewellers */}
      <div className="w-44 h-20 flex items-center justify-center shrink-0">
        <img src="/logos/giriraj-jewellers.png" alt="Giriraj Jewellers" className="max-h-16 max-w-full object-contain mix-blend-multiply" />
      </div>

      {/* 8. Focal Charge */}
      <div className="w-44 h-20 flex items-center justify-center shrink-0">
        <img src="/logos/focal-charge.png" alt="Focal Charge" className="max-h-15 max-w-full object-contain mix-blend-multiply" />
      </div>

      {/* 9. Deloitte */}
      <div className="w-44 h-20 flex items-center justify-center shrink-0">
        <img src="/logos/deloitte.png" alt="Deloitte" className="max-h-7 max-w-full object-contain mix-blend-multiply" />
      </div>

      {/* 10. Intas */}
      <div className="w-44 h-20 flex items-center justify-center shrink-0">
        <img src="/logos/intas.png" alt="Intas" className="max-h-10 max-w-full object-contain mix-blend-multiply" />
      </div>

      {/* 11. National Kitchenware */}
      <div className="w-44 h-20 flex items-center justify-center shrink-0">
        <img src="/logos/national-kitchenware.png" alt="National Kitchenware" className="max-h-16 max-w-full object-contain mix-blend-multiply" />
      </div>

      {/* 12. IndianOil */}
      <div className="w-44 h-20 flex items-center justify-center shrink-0">
        <img src="/logos/indian-oil.png" alt="IndianOil" className="max-h-16 max-w-full object-contain mix-blend-multiply" />
      </div>
    </>
  );

  return (
    <section className={`w-full py-10 ${bgColor} border-y border-slate-100 mt-20 overflow-hidden relative`}>
      <div className="max-w-7xl mx-auto text-center relative">
        <h3
          className="mb-8"
          style={{
            fontFamily: '"Liberation Sans", sans-serif',
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "1.4px",
            textAlign: "center",
            verticalAlign: "middle",
            textTransform: "uppercase",
            color: "#99A1AF"
          }}
        >
          TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE
        </h3>

        {/* Logos Marquee Container */}
        <div className="w-full overflow-hidden relative py-2">
          {/* Side Fade Overlays */}
          <div className={`absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r ${fadeColor} to-transparent z-10 pointer-events-none`} />
          <div className={`absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l ${fadeColor} to-transparent z-10 pointer-events-none`} />

          {/* Marquee Track */}
          <div className="flex whitespace-nowrap">
            <div className="flex gap-4 md:gap-6 items-center animate-marquee-logos pr-4 md:pr-6">
              {renderLogos()}
            </div>
            <div className="flex gap-4 md:gap-6 items-center animate-marquee-logos pr-4 md:pr-6" aria-hidden="true">
              {renderLogos()}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-logos {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-logos {
          display: flex;
          animation: marquee-logos 30s linear infinite;
        }
      `}} />
    </section>
  );
}
