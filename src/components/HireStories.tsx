"use client";

import React from "react";
import Link from "next/link";

interface StoryItem {
  title: string;
  category: string;
  desc: string;
  image: string;
  techs: string[];
  imageClass?: string;
  btnText?: string;
  btnUrl?: string;
}

interface HireStoriesProps {
  heading?: string;
  subheading?: string;
  data?: StoryItem[];
}

export function HireStories({ heading, subheading, data }: HireStoriesProps = {}) {
  const defaultHeading = "Our Amazing Customer Success Stories With ReactJS";
  const defaultSubheading = "Over 10+ years Our React experts solve the real life problems and overcome startup challenges through innovative React applications.";
  
  const defaultStories: StoryItem[] = [
    {
      title: "Cetera AdviceWorks Platform",
      category: "Finance",
      desc: "We delivered the best software development services to the Cetera Financial Group, helping them maintain 360-degree relationships with their clients. Our React solution enabled centralizing account information and linking third-party accounts via SSO.",
      image: "/success_finance.png",
      techs: ["React JS", "Springboot", "Redux"],
      imageClass: "scale-[1.15] -translate-x-[48px] origin-left"
    },
    {
      title: "Global Shipping & Logistics CMS",
      category: "Transportation",
      desc: "An international shipping company approached us to build a hassle-free CMS system. We built a React-based frontend integrated with a flawless payment gateway and database control system for bulk ordering.",
      image: "/success_transport.png",
      techs: ["React JS", "Nodejs", ".Net"],
      imageClass: "scale-[1.45] -translate-x-[150px] origin-left"
    },
    {
      title: "Swiggy CRM Integration",
      category: "Food Delivery",
      desc: "Krazio designed a React-based chat and voice platform that helps customers satisfy their queries by selecting agents based on location and language, acting as a highly responsive middleware service.",
      image: "/success_food.png",
      techs: ["React JS", "Ruby on Rails", "Golang"],
      imageClass: "scale-[1.45] -translate-x-[150px] origin-left"
    }
  ];

  const stories = data && data.length > 0 ? data : defaultStories;

  return (
    <section
      className="relative w-full bg-[#FFFFFF] flex items-center overflow-hidden border-t border-slate-100 min-h-[1144.5px]"
    >
      <div className="w-full max-w-[1358px] mx-auto py-24 px-6 md:px-[55px] relative z-10 flex flex-col justify-center">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-[#0f172a] font-extrabold text-3xl sm:text-4xl md:text-[50px] leading-[1.15] tracking-tight mb-6">
            {heading || defaultHeading}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            {subheading || defaultSubheading}
          </p>
        </div>

        {/* Stories Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full max-w-[1330px] min-h-[676.5px] gap-8"
        >
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 rounded-[32px] overflow-hidden flex flex-col justify-between shadow-[0_15px_45px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group"
            >
              {/* Image Banner */}
              <div className="h-[240px] w-full relative overflow-hidden bg-slate-50 flex items-center justify-center">
                {story.image ? (
                  <img
                    src={story.image}
                    alt={story.title}
                    className={`w-full h-full object-cover ${story.imageClass || ""}`}
                  />
                ) : (
                  <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-300">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.9 2.9m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                    </svg>
                  </div>
                )}
                
                {/* HTML Custom Styled Overlay Badge */}
                <div 
                  className="absolute top-4 left-4 inline-flex items-center justify-center rounded-full shadow-md bg-black/80 backdrop-blur-md border border-white/10 px-4 py-1.5 font-bold text-xs leading-4 tracking-wide text-white uppercase z-20"
                >
                  {story.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[#0f172a] font-extrabold text-xl sm:text-2xl leading-snug mb-4">
                    {story.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {story.desc}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="mb-6">
                    <span className="text-slate-400 text-[10px] font-bold tracking-wider block mb-2.5">
                      CORE TECHNOLOGY
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {story.techs.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-slate-600 bg-slate-50 rounded-lg border border-slate-100/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={story.btnUrl || "#contact-form"}
                    className="inline-flex items-center justify-center text-[#0f172a] font-bold text-xs tracking-wider hover:bg-black hover:text-white transition-all duration-300 uppercase text-center w-full max-w-[356px] h-[50px] py-3 rounded-full border border-black"
                  >
                    {story.btnText || "Request a Quote"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
