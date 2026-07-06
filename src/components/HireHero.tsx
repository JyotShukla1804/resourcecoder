"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { AnimatedMeshBackground } from "./AnimatedMeshBackground";

interface HireHeroProps {
  btn1Text?: string;
  btn1Url?: string;
  btn2Text?: string;
  btn2Url?: string;
  image?: string;
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

export function HireHero({ btn1Text, btn1Url, btn2Text, btn2Url, image, data }: HireHeroProps = {}) {
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
    
    if (dynamicTitle) {
      dynamicTitle = dynamicTitle.replace(/(Web|AR\/VR|ReactJS)/gi, '<span class="text-[#4B56D2]">$1</span>');
    }
  }

  return (
    <section
      className="relative w-full overflow-hidden flex items-center min-h-[auto] md:min-h-[727px] bg-[#f8f9ff]"
    >
      <AnimatedMeshBackground position="left" />

      {/* Container Grid */}
      <div className="relative z-10 w-full max-w-[1358px] mx-auto py-16 md:pt-48 md:pb-24 px-6 md:px-[55px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Column - Content */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start text-left">

          {/* Badge Row */}
          <div className="flex flex-wrap gap-2.5 mb-6">
            <span
              className="inline-flex items-center justify-center whitespace-nowrap px-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-100 font-bold text-xs tracking-wide uppercase text-zinc-700 h-[30px]"
            >
              Plan & Pricing
            </span>
            <span
              className="inline-flex items-center justify-center whitespace-nowrap px-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-100 font-bold text-xs tracking-wide uppercase text-zinc-700 h-[30px]"
            >
              React Case Study
            </span>
            <span
              className="inline-flex items-center justify-center whitespace-nowrap px-4 py-1.5 rounded-full border border-[#4B56D2]/20 bg-[#4B56D2]/10 font-bold text-xs tracking-wide uppercase text-[#4B56D2] h-[30px]"
            >
              15 Days Risk Free Trial
            </span>
          </div>

          {/* Heading */}
          {dynamicTitle ? (
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6"
              dangerouslySetInnerHTML={{ __html: dynamicTitle }}
            />
          ) : (
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Hire <br />
              <span
                className="bg-gradient-to-r from-[#4B56D2] to-[#4B56D2] bg-clip-text text-transparent"
              >
                ReactJS Developer
              </span>
            </h1>
          )}

          {/* Paragraph description */}
          {dynamicDesc ? (
            <p
              className="max-w-[620px] mb-10 text-xl leading-[32.5px] text-[#52525C]"
              dangerouslySetInnerHTML={{ __html: dynamicDesc }}
            />
          ) : (
            <p
              className="max-w-[620px] mb-10 text-xl leading-[32.5px] text-[#52525C]"
            >
              Looking to hire dedicated ReactJS developers? Get access to a<br className="hidden md:block" />
              skilled, experienced, and cost-effective team to build cutting-<br className="hidden md:block" />
              edge software solutions tailored to your business needs.
            </p>
          )}

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full sm:w-auto">

            {/* Hire Now button */}
            <Link
              href={btn1Url || "#contact-form"}
              className="btn-ripple inline-flex items-center justify-center text-white shadow-[0_4px_20px_rgba(21,93,252,0.35)] hover:shadow-lg transition-shadow duration-300 bg-[#4B56D2] w-full sm:w-auto min-w-[185px] h-[64px] px-10 rounded-full font-bold text-lg whitespace-nowrap flex-shrink-0"
            >
              <span>{btn1Text || "Hire Now"}</span>
              <svg
                className="w-4 h-4 ml-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {/* Schedule Meeting button */}
            <Link
              href={btn2Url || "#contact-form"}
              className="btn-ripple inline-flex items-center justify-center text-white shadow-md hover:shadow-lg transition-shadow duration-300 bg-black w-full sm:w-auto min-w-[200px] h-[64px] px-10 rounded-full font-bold text-base uppercase whitespace-nowrap flex-shrink-0"
            >
              <span>{btn2Text || "Schedule A Call"}</span>
            </Link>
          </div>

        </div>

        {/* Right Column - Image */}
        <div className="lg:col-span-5 flex justify-center items-center relative w-full mt-10 lg:mt-0">
          {!image || image === "/react_developer_hero.png" ? (
            <img
              src="/react_developer_hero.png"
              alt="React Developer Workspace"
              className="w-full max-w-[580px] h-auto object-contain"
            />
          ) : (
            <div className="relative w-full max-w-[580px] aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden border border-slate-100 shadow-xl bg-slate-50 flex items-center justify-center">
              <img
                src={image}
                alt="React Developer Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
