import React from "react";
import Link from "next/link";

export function HiringProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Requirement Gathering",
      description:
        "We analyze your project needs and match you with the best-fit IT professionals from our talent pool.",
    },
    {
      number: 2,
      title: "Screening",
      description:
        "Evaluate the skills and expertise of our IT resources to ensure they align with your project requirements.",
    },
    {
      number: 3,
      title: "Shortlisting & Selecting",
      description:
        "Handpick candidates from screened profiles, conduct interviews, and finalize your team.",
    },
    {
      number: 4,
      title: "Terms & Conditions",
      description:
        "Define the project scope, timelines, and budget to ensure a transparent engagement.",
    },
    {
      number: 5,
      title: "Get Started",
      description:
        "Once everything is set, kickstart your project with complete control over your hired IT resources.",
    },
  ];

  return (
    <div className="w-full bg-white relative z-10 overflow-hidden border-t border-slate-100">
      <div className="w-full max-w-[1358px] mx-auto py-24 px-4 sm:px-6 md:px-[55px] relative min-h-[auto]">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] mb-6 leading-[1.2]">
          Hiring IT Resources A Simple &<br className="hidden sm:block" /> Streamlined Process
        </h2>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
          Some formalities are essential for business, but they shouldn't slow you down! That's why we've designed a quick and efficient IT resource hiring process, ensuring you get the right talent without delays.
        </p>
      </div>

      {/* Process Steps Timeline Container */}
      <div className="w-full relative mb-16">
        {/* Horizontal connecting line for Desktop */}
        <div className="hidden md:block absolute top-7 left-0 right-0 h-[2px] bg-blue-300 z-0" />

        {/* Vertical connecting line for Mobile */}
        <div className="block md:hidden absolute top-7 bottom-7 left-7 w-[2px] bg-blue-300 z-0" />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
          {steps.map((step) => (
            <div key={step.number} className="flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-0">
              
              {/* Badge Circular Number Indicator */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-extrabold text-lg flex items-center justify-center shadow-[0_6px_20px_rgba(75, 86, 210,0.3)] mb-4 relative z-10 select-none">
                {step.number}
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-extrabold text-[#0f172a]">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-center">
        <Link
          href="#interview-section"
          className="btn-ripple inline-flex items-center justify-center bg-black text-white font-bold text-xs tracking-widest transition-shadow duration-300 uppercase shadow-md hover:shadow-lg w-[252px] h-[60px] py-4 px-10 rounded-full"
        >
          Hire Developer
        </Link>
      </div>
      </div>
    </div>
  );
}
