import React from "react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white relative z-10 mx-auto flex justify-center">
      {/* Blue Banner Card with exact specs: width/max-w-[1280px], h-[656px], rounded-[64px], padding (pt/pb 100px, pl/pr 128px), opacity: 1, angle: 0deg */}
      <div
        className="rounded-[32px] md:rounded-[64px] w-full max-w-[1280px] min-h-[500px] md:h-[656px] flex flex-col justify-center items-center py-16 px-6 sm:px-12 md:pt-[100px] md:pb-[100px] md:pl-[128px] md:pr-[128px] text-center shadow-[0_20px_50px_rgba(75,86,210,0.15)] relative overflow-hidden transition-all duration-300 transform-none opacity-100"
        style={{ 
          transform: "rotate(0deg)", 
          opacity: 1,
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4B56D2 100%)"
        }}
      >
        {/* Style tag for exact typography and responsiveness */}
        <style>{`
          .cta-headline {
            font-family: "Liberation Sans", sans-serif;
            font-weight: 700;
            font-size: 36px;
            line-height: 100%;
            letter-spacing: -1.8px;
            text-align: center;
            vertical-align: middle;
            opacity: 1;
          }
          .cta-description {
            font-family: "Liberation Sans", sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 0px;
            text-align: center;
            vertical-align: middle;
          }
          .cta-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
            color: #4B56D2;
            transition: all 0.5s ease-in-out;
            width: 100%;
            max-width: 320px;
            height: 56px;
            border-radius: 9999px;
            opacity: 1;
            box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.1);
            text-decoration: none;
          }
          .cta-button:hover {
            box-shadow: 0px 20px 40px -10px rgba(0, 0, 0, 0.2);
          }
          .cta-button-text {
            font-family: "Liberation Sans", sans-serif;
            font-weight: 700;
            font-size: 16px;
            line-height: 1.25;
            letter-spacing: 0px;
            text-align: center;
            vertical-align: middle;
          }
          @media (min-width: 640px) {
            .cta-headline {
              font-size: 56px;
              letter-spacing: -2.8px;
            }
            .cta-description {
              font-size: 16px;
            }
            .cta-button {
              max-width: 380px;
              height: 68px;
            }
            .cta-button-text {
              font-size: 20px;
              line-height: 28px;
            }
          }
          @media (min-width: 1024px) {
            .cta-headline {
              font-size: 72px;
              letter-spacing: -3.6px;
              width: 989px;
              height: 160px;
            }
            .cta-description {
              font-size: 20px;
              line-height: 32.5px;
            }
            .cta-button {
              width: 421.0299987792969px;
              max-width: 421.0299987792969px;
              height: 80px;
              border-radius: 9999px;
              box-shadow: 0px 25px 50px -12px #4B56D233;
            }
            .cta-button-text {
              font-size: 24px;
              line-height: 32px;
            }
          }
        `}</style>

        {/* Soft background light reflections */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        {/* Inner container with exact gap: 40px and custom max-width for 989px headline */}
        <div className="relative z-10 w-full max-w-[989px] mx-auto flex flex-col items-center gap-[40px]">
          {/* Headline */}
          <h2 className="cta-headline text-white">
            Ready to Hire<br />Dedicated Developers?
          </h2>

          {/* Description */}
          <p className="cta-description text-indigo-200/80 max-w-[780px] mx-auto font-normal">
            Hire Dedicated Developer from India at affordable rates and get expected results for your envisioned
            project. Our remote developers are skilled in full-stack development and they quickly satisfy your
            needs beyond expectations.
          </p>

          {/* Button CTA */}
          <div className="flex justify-center">
            <Link
              href="/#interview-section"
              className="cta-button btn-ripple"
              style={{ 
                "--ripple-color-start": "rgba(75, 86, 210, 0.15)",
                "--ripple-color-end": "rgba(75, 86, 210, 0.05)" 
              } as React.CSSProperties}
            >
              <span className="cta-button-text">Start 15 Days Risk-Free Trial</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
