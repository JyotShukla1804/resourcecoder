import React from "react";
import Link from "next/link";

interface WhyKrazioProps {
  image?: string;
}

export function WhyKrazio({ image }: WhyKrazioProps = {}) {
  const points = [
    { bold: "Dedicated Focus", text: " – 100% commitment to your project, ensuring higher productivity and quality." },
    { text: "Faster resource accessibility to kick-start your project at the earliest." },
    { text: "Fully signed NDA to ensure business confidentiality." },
    { text: "Easy exit policy." },
    { bold: "Cost-Effective", text: " – Save on hiring and operational costs compared to in-house teams." },
    { bold: "Access to Expertise", text: " – Leverage specialized skills in web, mobile, AI, blockchain, and more." },
    { bold: "Flexibility", text: " – Scale your team up or down based on your project's evolving needs." },
    { bold: "Improved Communication", text: " – Direct access to developers ensures clarity and better project outcomes." }
  ];

  return (
    <div className="w-full bg-black relative z-10 overflow-hidden border-t border-slate-950/80">
      <div className="w-full max-w-[1358px] mx-auto py-16 md:py-24 px-4 sm:px-6 md:px-[55px] relative">
        {/* Decorative Ambient Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
        {/* Centered Content Header */}
        <div className="max-w-[1330px] mx-auto text-center mb-16">
          <h2 
            className="text-white mb-6 text-center mx-auto flex flex-col justify-center items-center w-full max-w-[1330px] min-h-[auto] md:min-h-[110px] font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight"
          >
            <span>Why Hiring Dedicated Developers</span>
            <span>from Krazio is the Best Choice?</span>
          </h2>
          <p className="text-slate-400/90 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto font-normal mt-4">
            When it comes to IT resources, hiring dedicated developers from Krazio ensures faster development,<br className="hidden sm:block" />
            expert skills, and cost efficiency. Our developers work exclusively on your project, delivering<br className="hidden sm:block" />
            high-quality solutions with full commitment.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* Left Column: List & CTA */}
          <div className="lg:col-span-6 text-left flex flex-col justify-between h-full space-y-8">
            <ul className="space-y-5">
              {points.map((pt, idx) => (
                <li key={idx} className="text-slate-350 text-slate-300 text-sm sm:text-[15px] leading-relaxed font-normal">
                  {pt.bold ? (
                    <>
                      <strong className="text-white font-extrabold">{pt.bold}</strong>
                      {pt.text}
                    </>
                  ) : (
                    pt.text
                  )}
                </li>
              ))}
            </ul>

            <div className="space-y-6 pt-4">
              <p className="text-white font-bold text-base md:text-lg tracking-wide">
                Supercharge your development process with Krazio’s dedicated IT resources!
              </p>

              <div>
                <Link
                  href="#interview-section"
                  className="btn-ripple inline-flex items-center justify-center bg-[#4B56D2] text-white px-8 py-4 rounded-full font-bold text-xs tracking-widest shadow-lg hover:shadow-xl transition-shadow duration-300 uppercase"
                >
                  Submit your project requirement
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Premium Artwork Image */}
          <div className="lg:col-span-6 flex items-stretch justify-center lg:justify-end">
            <div className="relative w-full max-w-xl min-h-[380px] lg:h-full lg:min-h-full rounded-[40px] overflow-hidden border border-slate-900 shadow-2xl group">
              <img
                src={image || "/why-krazio.jpg"}
                alt="Why Krazio Artwork"
                className={`absolute inset-0 w-full h-full object-cover ${(!image || image === "/why-krazio.jpg") ? "scale-[1.18]" : "scale-100"}`}
              />
              {/* Overlay highlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
