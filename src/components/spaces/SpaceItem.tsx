import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

interface SpaceItemProps {
  title: string;
  highlight: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  includes: string[];
  bestFor: string[];
  pricing?: string;
  reverse?: boolean;
  theme?: "white" | "light";
}

export function SpaceItem({
  title,
  highlight,
  description,
  imageSrc,
  imageAlt,
  includes,
  bestFor,
  pricing,
  reverse = false,
  theme = "white",
}: SpaceItemProps) {
  const getThemeClasses = () => {
    return theme === "light" 
      ? "bg-[#f8f9ff] py-16 md:py-24" 
      : "bg-white py-16 md:py-24";
  };

  return (
    <div className={`w-full ${getThemeClasses()}`}>
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center w-full max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8`}>
        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4B56D2]/20 to-purple-600/20 rounded-[32px] transform rotate-2 scale-[1.02] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[32px] overflow-hidden border border-slate-200 shadow-[0_20px_40px_rgba(75,86,210,0.08)]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              unoptimized
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-slate-900">
            {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#4B56D2] font-light italic pr-2 py-1">{highlight}</span>
          </h2>
          <p className="text-slate-600 text-lg mb-14 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 w-full mb-14">
            <div className="flex-1 flex flex-col gap-8">
              <h4 className="text-slate-900 font-bold text-lg flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#4B56D2] rounded-full inline-block" />
                Includes
              </h4>
              <ul className="flex flex-col gap-5">
                {includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-[#4B56D2] shrink-0 mt-0.5" />
                    <span className="text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex-1 flex flex-col gap-8">
              <h4 className="text-slate-900 font-bold text-lg flex items-center gap-2">
                <span className="w-1.5 h-6 bg-purple-500 rounded-full inline-block" />
                Best For
              </h4>
              <ul className="flex flex-col gap-5">
                {bestFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-[#4B56D2] shrink-0 mt-0.5" />
                    <span className="text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              {pricing && (
                <div className="mt-6">
                  <h4 className="text-slate-900 font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-[#4B56D2] rounded-full inline-block" />
                    Pricing
                  </h4>
                  <p className="text-slate-600 text-[15px]">{pricing}</p>
                </div>
              )}
            </div>
          </div>

          <Link 
            href="/#interview-section"
            className="btn-ripple mt-8 inline-flex items-center justify-center h-[56px] px-8 rounded-full text-white font-bold text-[16px] tracking-wider shadow-md hover:shadow-lg transition-shadow duration-300 select-none bg-[#4B56D2]"
          >
            BOOK A SPACE
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
