"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
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
  children?: React.ReactNode;
}

export function HireHero({ btn1Text, btn1Url, btn2Text, btn2Url, image, data, children }: HireHeroProps = {}) {
  // Extract all text blocks (header or paragraph) to map to Title & Description
  const textBlocks = data?.blocks?.filter((b: any) => b.type === "header" || b.type === "paragraph") || [];
  let dynamicTitle = undefined;
  let dynamicDesc = undefined;
  let dynamicExtraDesc = undefined;

  if (textBlocks.length > 0) {
    const headerBlock = textBlocks.find((b: any) => b.type === "header");
    if (headerBlock) {
      dynamicTitle = headerBlock.data?.text;
      const paragraphBlocks = textBlocks.filter((b: any) => b.type === "paragraph");
      dynamicDesc = paragraphBlocks[0]?.data?.text;
      if (paragraphBlocks.length > 1) {
        dynamicExtraDesc = paragraphBlocks[1]?.data?.text;
      }
    } else {
      dynamicTitle = textBlocks[0]?.data?.text;
      if (textBlocks.length > 1) {
        dynamicDesc = textBlocks[1]?.data?.text;
      }
      if (textBlocks.length > 2) {
        dynamicExtraDesc = textBlocks[2]?.data?.text;
      }
    }

    if (dynamicTitle) {
      dynamicTitle = dynamicTitle.replace(/(AR\/VR|ReactJS)/gi, '<span class="text-[#4B56D2]">$1</span>');
    }
  }

  return (
    <section
      className="relative w-full overflow-hidden min-h-[auto] md:min-h-[727px] bg-[#f8f9ff]"
    >
      <HeroBackground />


      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1358px] mx-auto pt-16 md:pt-48 pb-10 md:pb-16 px-6 md:px-[55px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

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
              <>
                <p
                  className="max-w-[620px] mb-6 text-xl leading-[32.5px] text-[#52525C]"
                  dangerouslySetInnerHTML={{ __html: dynamicDesc }}
                />
                {dynamicExtraDesc && (
                  <p
                    className="max-w-[620px] mb-10 text-[17px] leading-[28px] text-[#6b7280]"
                    dangerouslySetInnerHTML={{ __html: dynamicExtraDesc }}
                  />
                )}
              </>
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
                className="btn-ripple inline-flex items-center justify-center text-white shadow-[0_4px_20px_rgba(21,93,252,0.35)] hover:shadow-lg transition-shadow duration-300 bg-[#4B56D2] w-full sm:w-auto min-w-[185px] h-[56px] px-8 rounded-full font-bold text-base whitespace-nowrap flex-shrink-0"
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

            </div>

          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-5 flex justify-center items-center relative w-full mt-10 lg:mt-0">
            <div className="relative w-full flex items-center justify-center">
              {(!image || image === "/ReactJS Developer.svg" || image === "/ReactJS%20Developer.svg" || (dynamicTitle && dynamicTitle.toLowerCase().includes("react"))) ? (
                <img
                  src="/ReactJS Developer.svg"
                  alt="React Developer Workspace"
                  className="max-w-full h-auto drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                />
              ) : (image === "/NextJS Developer.svg" || image === "/NextJS%20Developer.svg" || (dynamicTitle && dynamicTitle.toLowerCase().includes("next"))) ? (
                <img
                  src="/NextJS Developer.svg"
                  alt="NextJS Developer Workspace"
                  className="max-w-full h-auto drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                />
              ) : (image === "/AI Integration Developer.svg" || image === "/AI%20Integration%20Developer.svg" || (dynamicTitle && (dynamicTitle.toLowerCase().includes("ai") || dynamicTitle.toLowerCase().includes("llm")))) ? (
                <img
                  src="/AI%20Integration%20Developer.svg"
                  alt="AI/LLM Developer Workspace"
                  className="max-w-full h-auto drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                />
              ) : (image === "/Angular Developer.svg" || image === "/Angular%20Developer.svg" || (dynamicTitle && dynamicTitle.toLowerCase().includes("angular"))) ? (
                <img
                  src="/Angular Developer.svg"
                  alt="Angular Developer Workspace"
                  className="max-w-full h-auto drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                />
              ) : (image === "/Vue.JS Developer.svg" || image === "/Vue.JS%20Developer.svg" || (dynamicTitle && dynamicTitle.toLowerCase().includes("vue"))) ? (
                <img
                  src="/Vue.JS Developer.svg"
                  alt="Vue.JS Developer Workspace"
                  className="max-w-full h-auto drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                />
              ) : (image === "/Frontend Developer.svg" || image === "/Frontend%20Developer.svg" || (dynamicTitle && (dynamicTitle.toLowerCase().includes("frontend") || dynamicTitle.toLowerCase().includes("front-end")))) ? (
                <img
                  src="/Frontend Developer.svg"
                  alt="Frontend Developer Workspace"
                  className="max-w-full h-auto drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                />
              ) : (image === "/UX Designer.svg" || image === "/UX%20Designer.svg" || (dynamicTitle && (dynamicTitle.toLowerCase().includes("ui/ux") || dynamicTitle.toLowerCase().includes("ux/ui") || dynamicTitle.toLowerCase().includes("ux designer")))) ? (
                <img
                  src="/UX Designer.svg"
                  alt="UI/UX Designer Workspace"
                  className="max-w-full h-auto drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                />
              ) : (image === "/Full Stack Developer.svg" || image === "/Full%20Stack%20Developer.svg" || (dynamicTitle && (dynamicTitle.toLowerCase().includes("full stack") || dynamicTitle.toLowerCase().includes("fullstack")))) ? (
                <img
                  src="/Full Stack Developer.svg"
                  alt="Full Stack Developer Workspace"
                  className="max-w-full h-auto drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                />
              ) : (image === "/Mern Stack Developer.svg" || image === "/Mern%20Stack%20Developer.svg" || (dynamicTitle && dynamicTitle.toLowerCase().includes("mern"))) ? (
                <img
                  src="/mern_stack_developer.png"
                  alt="MERN Stack Developer Workspace"
                  className="max-w-full h-auto drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                />
              ) : (image === "/Mean Stack Developer.svg" || image === "/Mean%20Stack%20Developer.svg" || (dynamicTitle && dynamicTitle.toLowerCase().includes("mean"))) ? (
                <img
                  src="/Mern Stack Developer.svg"
                  alt="MEAN Stack Developer Workspace"
                  className="max-w-full h-auto drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                />
              ) : (image === "/JAVA Developer.svg" || image === "/JAVA%20Developer.svg" || (dynamicTitle && dynamicTitle.toLowerCase().includes("java") && !dynamicTitle.toLowerCase().includes("javascript"))) ? (
                <img
                  src="/JAVA Developer.svg"
                  alt="Java Developer Workspace"
                  className="w-full h-auto object-cover"
                />
              ) : (dynamicTitle && dynamicTitle.toLowerCase().includes("javascript")) ? (
                <img
                  src="/Javascript Developer.svg"
                  alt="Javascript Developer Workspace"
                  className="max-w-full h-auto drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                />
              ) : (image === "/Node.JS Developer.svg" || image === "/Node.JS%20Developer.svg" || (dynamicTitle && dynamicTitle.toLowerCase().includes("node"))) ? (
                <img
                  src="/Node.JS%20Developer.svg"
                  alt="Node.JS Developer Workspace"
                  className="max-w-full h-auto drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                />
              ) : (dynamicTitle && dynamicTitle.toLowerCase().includes("node")) ? (
                <img
                  src="/Node.JS Developer.svg"
                  alt="Node.JS Developer Workspace"
                  className="w-full h-auto object-cover"
                />
              ) : (dynamicTitle && dynamicTitle.toLowerCase().includes("python")) ? (
                <img
                  src="/Python Developer.svg"
                  alt="Python Developer Workspace"
                  className="w-full h-auto object-cover"
                />
              ) : (dynamicTitle && dynamicTitle.toLowerCase().includes(".net")) ? (
                <img
                  src="/net-developer.svg"
                  alt=".NET Developer Workspace"
                  className="w-full h-auto object-cover"
                />
              ) : (dynamicTitle && (dynamicTitle.toLowerCase().includes("golang") || dynamicTitle.toLowerCase().includes("go "))) ? (
                <img
                  src="/Golang Developer.svg"
                  alt="Golang Developer Workspace"
                  className="w-full h-auto object-cover"
                />
              ) : (dynamicTitle && dynamicTitle.toLowerCase().includes("typescript")) ? (
                <img
                  src="/Typescript Developer.svg"
                  alt="TypeScript Developer Workspace"
                  className="w-full h-auto object-cover"
                />
              ) : (dynamicTitle && (dynamicTitle.toLowerCase().includes("react native") || dynamicTitle.toLowerCase().includes("react-native"))) ? (
                <img
                  src="/React Native Developer.svg"
                  alt="React Native Developer Workspace"
                  className="w-full h-auto object-cover"
                />
              ) : (dynamicTitle && dynamicTitle.toLowerCase().includes("flutter")) ? (
                <img
                  src="/Flutter Developer.svg"
                  alt="Flutter Developer Workspace"
                  className="w-full h-auto object-cover"
                />
              ) : (dynamicTitle && dynamicTitle.toLowerCase().includes("ios")) ? (
                <img
                  src="/IOS Developer.svg"
                  alt="iOS Developer Workspace"
                  className="w-full h-auto object-cover"
                />
              ) : (dynamicTitle && dynamicTitle.toLowerCase().includes("android")) ? (
                <img
                  src="/Android Developer.svg"
                  alt="Android Developer Workspace"
                  className="w-full h-auto object-cover"
                />
              ) : (dynamicTitle && (dynamicTitle.toLowerCase().includes("ai/ml") || dynamicTitle.toLowerCase().includes("ai / ml") || dynamicTitle.toLowerCase().includes("machine learning") || dynamicTitle.toLowerCase().includes("artificial intelligence"))) ? (
                <img
                  src="/ai, data & cloud.svg"
                  alt="AI/ML Developer Workspace"
                  className="w-full h-auto object-cover"
                />
              ) : (dynamicTitle && (dynamicTitle.toLowerCase().includes("llm") || dynamicTitle.toLowerCase().includes("generative ai"))) ? (
                <img
                  src="/LLM Developer.svg"
                  alt="LLM Developer Workspace"
                  className="w-full h-auto object-cover"
                />
              ) : (dynamicTitle && dynamicTitle.toLowerCase().includes("data engineer")) ? (
                <img
                  src="/Data Engineer.svg"
                  alt="Data Engineer Workspace"
                  className="w-full h-auto object-cover"
                />
              ) : (
                <img
                  src={image ? (image.startsWith('/') ? encodeURI(image) : '/' + encodeURI(image)) : "/ReactJS%20Developer.svg"}
                  alt="Developer Workspace"
                  className="max-w-full h-auto drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                />
              )}
            </div>
          </div>

        </div>

        {/* Children (e.g. Stats / Badges) placed right below the grid */}
        {children && (
          <div className="mt-12 md:mt-16 w-full">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
