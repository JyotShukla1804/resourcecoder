"use client";

import React from "react";
import Link from "next/link";

interface BenefitItem {
  label: string;
  text: string;
}

interface HireBenefitsProps {
  title?: string;
  description?: string;
  benefitsTitle?: string;
  benefitsList?: (BenefitItem | string | any)[];
  btnText?: string;
  btnUrl?: string;
}

export function HireBenefits({
  title,
  description,
  benefitsTitle,
  benefitsList,
  btnText,
  btnUrl
}: HireBenefitsProps = {}) {
  const defaultTitle = `Hire React Developers To<br />Strategically Execute<br />Your Vision With Clarity`;
  const defaultDesc = `Our remote React developers are proficient in developing visually appealing UIs with high-end solutions. Whether you are looking to hire ReactJS developers to scale your development efficiency or aiming to onboard a dedicated React team, our extensive React developer have expertise in HTML, CSS, JSX, JS fundamentals, ES6, DOM manipulation, Redux, Node + NPM, and more that bring your vision into reality.`;
  const defaultBenefitsTitle = "Benefits of Hiring ReactJS Developers from Krazio";

  const defaultBenefits = [
    {
      label: "Front-end Mastery",
      text: "Skilled in front-end development with JS (ES5, ES6), ReactJS, HTML, and CSS."
    },
    {
      label: "Full-Stack Capability",
      text: "Proficient in NodeJS, ReactJS, Redux, RN, HTML, CSS3, JSON-API, REST Services."
    },
    {
      label: "Modern Tooling",
      text: "Experience with TS, Jest, Swagger, TypeORM, Node-cache."
    },
    {
      label: "Advanced Integrations",
      text: "Professional in Json-rules-engine, Elasticsearch, and Pdfkit."
    },
    {
      label: "Quality Assurance",
      text: "Knowledgeable in unit and integration testing with React Testing Library/Enzyme."
    },
    {
      label: "Database Architecture",
      text: "Experience with relational database (SQL Server) design and implementation."
    }
  ];

  const benefits = benefitsList && benefitsList.length > 0 ? benefitsList : defaultBenefits;

  return (
    <section 
      className="relative w-full bg-[#FAFAFA] flex items-center overflow-hidden border-t border-slate-100 min-h-[843px]"
    >
      

      <div className="w-full max-w-[1358px] mx-auto py-24 px-6 md:px-[55px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column - Content */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center text-left">
          <h2 
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-5xl font-bold leading-8 sm:leading-10 lg:leading-[48px] xl:leading-[60px] text-[#0f172a] mb-6 tracking-tight"
            dangerouslySetInnerHTML={{ __html: title || defaultTitle }}
          />
          <p 
            className="max-w-[530px] mb-8 text-[#52525C] font-normal text-lg leading-[29.25px]"
            dangerouslySetInnerHTML={{ __html: description || defaultDesc }}
          />
          <Link
            href={btnUrl || "/development-process"}
            className="btn-ripple inline-flex items-center justify-center bg-black text-white transition-shadow duration-300 shadow-md hover:shadow-lg px-9 py-4.5 rounded-full font-bold text-base leading-6 text-center"
          >
            {btnText || "Discover Our Process"}
          </Link>
        </div>

        {/* Right Column - Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end items-center">
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 w-full max-w-[580px]">
            
            <h3 className="text-[#0f172a] font-extrabold text-lg sm:text-xl md:text-[22px] leading-snug mb-8">
              {benefitsTitle || defaultBenefitsTitle}
            </h3>

            {/* Checklist */}
            <div className="space-y-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {/* Blue circular icon (Sparkles) */}
                  <div className="w-8 h-8 flex items-start justify-center flex-shrink-0 text-[#4B56D2] transform transition-transform hover:scale-110 pt-0.5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                  </div>
                  
                  {/* Text Description */}
                  <div 
                    className="text-xs sm:text-[14px] leading-relaxed text-[#3F3F46]"
                  >
                    {typeof benefit === 'string' ? (
                      <span className="text-[#0f172a] font-bold">{benefit}</span>
                    ) : (
                      <>
                        <strong className="text-[#0f172a] font-bold">
                          {benefit.label}:{" "}
                        </strong>
                        <span className="font-normal">{benefit.text}</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
