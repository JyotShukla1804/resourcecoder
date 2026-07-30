import React from "react";

export function TrustedBy({
  bgColor = "bg-white",
  fadeColor = "from-white"
}: {
  bgColor?: string;
  fadeColor?: string;
} = {}) {
  const logos = [
    "Aakash Institutes.svg",
    "Adani.svg",
    "Deloitte.svg",
    "Dream_Bricks.svg",
    "Focal_Charge.svg",
    "G-Crankz.svg",
    "Getco.svg",
    "Giriraj Jewellers.svg",
    "gujarat_tourism.svg",
    "HSBC.svg",
    "IDFC.svg",
    "IGS.svg",
    "Indian_Oil.svg",
    "Intas.svg",
    "kitchen.svg",
    "KPMG.svg",
    "Marko.svg",
    "Nestle.svg",
    "SCWO.svg",
    "Singapore Post.svg",
    "Tommy.svg",
    "Torrent_Power.svg",
    "Unilever.svg",
    "Lodha2.svg",
    "Jaguar.svg",
    "JTC.svg",
    "ONGC.svg"
  ];

  const renderLogos = () => (
    <>
      {logos.map((logo, idx) => (
        <div key={idx} className="shrink-0 w-[140px] md:w-[200px] h-20 flex items-center justify-center px-4 md:px-8">
          <img
            src={`/${logo}`}
            alt={logo.replace('.svg', '').replace(/_/g, ' ')}
            width={200}
            height={80}
            className="max-h-12 md:max-h-16 w-full object-contain mix-blend-multiply"
          />
        </div>
      ))}
    </>
  );

  return (
    <section className={`w-full py-10 ${bgColor} border-y border-slate-100 overflow-hidden relative`}>
      <div className="max-w-[1358px] mx-auto text-center relative">
        <h2
          className="mb-8 font-semibold text-slate-500 text-sm tracking-widest uppercase"
        >
          TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE
        </h2>

        {/* Logos Marquee Container */}
        <div className="w-full overflow-hidden relative py-2">
          {/* Side Fade Overlays */} 
          <div className={`absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r ${fadeColor} to-transparent z-10 pointer-events-none`} />
          <div className={`absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l ${fadeColor} to-transparent z-10 pointer-events-none`} />

          {/* Marquee Track */}
          <div className="flex whitespace-nowrap">
            <div className="flex items-center animate-marquee-logos">
              {renderLogos()}
            </div>
            <div className="flex items-center animate-marquee-logos" aria-hidden="true">
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
          animation: marquee-logos 50s linear infinite;
        }
      `}} />
    </section>
  );
}
