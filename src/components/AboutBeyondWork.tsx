"use client";
import React from "react";
import Link from "next/link";

export function AboutBeyondWork() {
  return (
    <section
      className="w-full relative z-10 flex flex-col items-center overflow-hidden border-t border-slate-100 bg-[#FFFFFF]"
    >
      <div className="w-full max-w-[1358px] min-h-[566px] flex flex-col xl:flex-row justify-between items-center gap-8 py-24 px-6 md:px-[55px] text-slate-900">

        {/* Left Column: Text & CTA */}
        <div className="w-full xl:w-1/2 xl:max-w-[665px] flex flex-col justify-center text-left space-y-6">
          <h2
            className="text-[#0f172a] font-bold text-5xl leading-[48px] max-w-[665px]"
          >
            Beyond Work, We Build Connections
          </h2>
          <p
            className="text-[#545454] font-normal text-lg leading-[29.25px] max-w-[665px]"
          >
            At Krazio Cloud, we believe great teams are built through collaboration, continuous learning, and shared experiences. From celebrating milestones and team events to knowledge-sharing
          </p>
          <div className="!mt-3">
            <Link
              href="https://kraziocloud.com/careers/"
              target="_blank"
              className="btn-ripple inline-flex items-center justify-center text-white rounded-full px-8 py-3.5 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/45 transition-shadow duration-300 w-fit bg-[#4B56D2]"
            >
              <span
                className="font-bold text-lg leading-7 tracking-[0.9px] text-center uppercase whitespace-nowrap"
              >
                JOIN OUR TEAM
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: Double Images Grid */}
        <div className="w-full xl:w-1/2 xl:max-w-[665px] flex items-center justify-center xl:justify-end mt-12 xl:mt-0 flex-shrink-0">
          <div className="grid grid-cols-2 gap-[16px] w-full max-w-[665px] aspect-[665/256]">
            {/* Column 1: Coding Close Up */}
            <div className="relative w-full h-full rounded-[24px] overflow-hidden">
              <img
                src="/Event.svg"
                alt="Coding Close Up"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Column 2: Team Collaboration */}
            <div className="relative w-full h-full rounded-[24px] overflow-hidden">
              <img
                src="/image%20200.svg"
                alt="Team Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
