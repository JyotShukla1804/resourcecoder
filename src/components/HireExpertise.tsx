"use client";

import React from "react";

interface ExpertiseGroup {
  title: string;
  items: string[];
}

interface HireExpertiseProps {
  heading?: string;
  description?: string;
  expertiseList?: ExpertiseGroup[];
}

export function HireExpertise({ heading, description, expertiseList }: HireExpertiseProps = {}) {
  const defaultExpertiseGroups = [
    {
      title: "Core & Languages",
      items: ["JavaScript (ES5/ES6)", "TypeScript", "React JS", "HTML5 / CSS3"]
    },
    {
      title: "Frameworks",
      items: ["Next.js", "Gatsby", "Remix", "Svelte"]
    },
    {
      title: "State Management",
      items: ["Redux / Toolkit", "Context API", "Zustand", "MobX / Recoil"]
    },
    {
      title: "Libraries & APIs",
      items: ["React Query", "Apollo Client", "REST / GraphQL", "Framer Motion"]
    },
    {
      title: "Testing Tools",
      items: ["Jest / Enzyme", "React Testing Library", "Cypress", "Mocha / Chai"]
    },
    {
      title: "UI Libraries",
      items: ["Tailwind CSS", "Material-UI", "Ant Design", "ShadCN"]
    },
    {
      title: "Cloud & Database",
      items: ["AWS / GCP / Azure", "Firebase / Firestore", "MongoDB / PostgreSQL", "MySQL / DynamoDB"]
    },
    {
      title: "DevOps & CI/CD",
      items: ["Docker / Kubernetes", "GitHub Actions", "Jenkins / CircleCI", "Vercel / Netlify"]
    }
  ];

  const expertiseGroups = expertiseList && expertiseList.length > 0 ? expertiseList : defaultExpertiseGroups;

  return (
    <section 
      className="relative w-full bg-[#000000] flex items-center overflow-hidden border-t border-slate-950 min-h-[878px]"
    >
      {/* Background decoration glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1358px] mx-auto py-24 px-6 md:px-[55px] relative z-10 flex flex-col justify-center">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-[50px] leading-[1.15] tracking-tight mb-6">
            {heading || "Technical Expertise of Our React Developers"}
          </h2>
          <p className="text-slate-450 text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            {description || "Hire React developer from us who are well-versed in a vast set of best-in-class tools, state-of-the-art technologies, and modern approaches to scale your business application development."}
          </p>
        </div>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-12 w-full">
          {expertiseGroups.map((group, idx) => (
            <div key={idx} className="flex flex-col items-stretch text-left">
              
              {/* Category Title */}
              <h3 className="text-white font-extrabold text-base sm:text-lg mb-3 tracking-wide">
                {group.title}
              </h3>
              
              {/* Thin underline divider */}
              <div className="w-full border-t border-slate-900 mb-5" />

              {/* Items List */}
              <ul className="space-y-3.5">
                {group.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center text-slate-400 text-xs sm:text-sm font-normal">
                    {/* Blue chevron arrow symbol */}
                    <span className="text-[#4B56D2] font-bold text-xs mr-2 flex-shrink-0 select-none">
                      &gt;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
