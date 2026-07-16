import React from "react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white relative z-10 mx-auto flex justify-center">
      {/* Blue Banner Card with exact specs: width/max-w-[1280px], h-[656px], rounded-[64px], padding (pt/pb 100px, pl/pr 128px), opacity: 1, angle: 0deg */}
      <div
        className="bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4B56D2] rounded-[32px] md:rounded-[64px] w-full max-w-[1358px] min-h-[500px] md:h-[656px] flex flex-col justify-center items-center py-16 px-6 sm:px-12 md:pt-[100px] md:pb-[100px] md:pl-[128px] md:pr-[128px] text-center shadow-[0_20px_50px_rgba(75,86,210,0.25)] relative overflow-hidden transition-all duration-300 transform-none opacity-100"
      >
        {/* Soft background light reflections */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

        {/* Inner container with exact gap: 40px and custom max-width for 989px headline */}
        <div className="relative z-10 w-full max-w-[989px] mx-auto flex flex-col items-center gap-8 md:gap-[40px]">
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold leading-[1.15] tracking-tight text-white drop-shadow-sm">
            Ready to Hire<br className="hidden sm:block" /> Dedicated Developers?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-[22px] leading-[1.6] text-indigo-100/90 max-w-[780px] mx-auto font-normal">
            Hire Dedicated Developer from India at affordable rates and get expected results for your envisioned
            project. Our remote developers are skilled in full-stack development and they quickly satisfy your
            needs beyond expectations.
          </p>

          {/* Button CTA */}
          <div className="flex justify-center mt-4">
            <Link
              href="/#interview-section"
              className="btn-ripple bg-white text-[#4B56D2] px-10 py-5 rounded-full font-extrabold text-[18px] tracking-wide shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300"
            >
              Start 15 Days Risk-Free Trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
