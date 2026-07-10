import React from "react";
import { AboutStats } from "./AboutStats";
import { HeroBackground } from "@/components";

interface AboutHeroProps {
  data?: {
    blocks: Array<{
      type: string;
      data: {
        text?: string;
        level?: number;
      };
    }>;
  };
}

export function AboutHero({ data }: AboutHeroProps = {}) {
  // Extract all text blocks (header or paragraph) to map to Title & Description
  const textBlocks = data?.blocks?.filter((b: any) => b.type === "header" || b.type === "paragraph") || [];
  let dynamicTitle = undefined;
  let dynamicDesc = undefined;

  if (textBlocks.length > 0) {
    const headerBlock = textBlocks.find((b: any) => b.type === "header");
    if (headerBlock) {
      dynamicTitle = headerBlock.data?.text;
      const descBlock = textBlocks.find((b: any) => b.type === "paragraph");
      dynamicDesc = descBlock?.data?.text;
    } else {
      dynamicTitle = textBlocks[0]?.data?.text;
      if (textBlocks.length > 1) {
        dynamicDesc = textBlocks[1]?.data?.text;
      }
    }
  }

  return (
    <section className="w-full bg-[#f8f9ff] relative overflow-hidden">
        <HeroBackground />
      {/* Animated Mesh Gradient Background */}
      

      {/* Hero Section */}
      <div className="w-full max-w-[1358px] mx-auto text-center relative z-10 flex flex-col items-center space-y-8 pt-48 pb-24 px-4 sm:px-6 md:px-[55px]">
        {/* Floating Badge */}
        <div className="inline-flex items-center justify-center bg-[#EFF6FF] border border-[#DBEAFE] rounded-full px-6 py-2 text-[#4B56D2] font-extrabold text-xs tracking-[0.08em] uppercase shadow-[0_4px_12px_rgba(0,51,255,0.05)] animate-fade-in-up">
          WHO WE ARE
        </div>

        {/* Hero Headline */}
        {dynamicTitle ? (
          <h1
            className="text-4xl sm:text-5xl md:text-[62px] font-extrabold tracking-[-0.025em] leading-[1.12] text-[#0f172a] max-w-4xl mx-auto animate-fade-in-up delay-100"
            dangerouslySetInnerHTML={{ __html: dynamicTitle }}
          />
        ) : (
          <h1 className="text-4xl sm:text-5xl md:text-[62px] font-extrabold tracking-[-0.025em] leading-[1.12] text-[#0f172a] max-w-4xl mx-auto animate-fade-in-up delay-100">
            Driving digital<br className="hidden sm:block" />
            transformation with<br className="hidden sm:block" />
            <span className="text-[#4B56D2]">innovation</span> at the core
          </h1>
        )}

        {/* Hero Paragraph */}
        {dynamicDesc ? (
          <p
            className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal animate-fade-in-up delay-200"
            dangerouslySetInnerHTML={{ __html: dynamicDesc }}
          />
        ) : (
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal animate-fade-in-up delay-200">
            We empower organizations with custom digital solutions that drive growth, enhance efficiency, and provide competitive advantages in today's evolving landscape.
          </p>
        )}
      </div>
      
      {/* Integrated About Stats */}
      <AboutStats />
    </section>
  );
}
