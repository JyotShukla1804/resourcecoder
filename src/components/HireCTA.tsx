"use client";

import React from "react";
import Link from "next/link";

interface HireCTAProps {
  title?: string;
  subtitle?: string;
  btnText?: string;
  btnUrl?: string;
}

export const HireCTA: React.FC<HireCTAProps> = ({
  title,
  subtitle,
  btnText,
  btnUrl
}) => {
  const defaultTitle = "Top-Tier IT Geniuses at Krazio";
  const defaultSubtitle = `At Krazio, we bring together a team of elite software developers, UI/UX designers, QA experts, and product managers—all with exceptional skills and expertise. Whether you need independent developers or a fully managed team, we provide access to top-tier IT talent worldwide to drive your project's success.`;
  const defaultBtnText = "Start 15 Days Risk-Free Trial";

  return (
    <section className="w-full bg-[#FAFAFA] pb-16 px-4 md:px-8 flex justify-center items-center">
      <div 
        className="w-full max-w-[1358px] mx-auto flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-[128px] py-12 md:py-[100px] text-white shadow-[0_20px_50px_rgba(75,86,210,0.15)] rounded-[64px] min-h-[656px] gap-10 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4B56D2]"
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-tight max-w-4xl">
          {title || defaultTitle}
        </h2>

        {/* Subtitle */}
        <p 
          className="text-[#D1D5DC] font-normal text-xl leading-[32.5px] max-w-5xl min-h-[98px]"
        >
          {subtitle || defaultSubtitle}
        </p>

        {/* Button */}
        <Link 
          href={btnUrl || "#contact-form"}
          className="btn-ripple bg-white text-[#4B56D2] font-bold text-[16px] md:text-[18px] py-4 px-10 rounded-full transition-shadow duration-500 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] cursor-pointer inline-block text-center"
        >
          {btnText || defaultBtnText}
        </Link>
      </div>
    </section>
  );
};
