"use client";

import React from "react";
import Link from "next/link";

interface HireAugmentationProps {
  row1Title?: string;
  row1P1?: string;
  row1P2?: string;
  row1Btn?: string;
  row1BtnUrl?: string;
  row1Image?: string;
  row2Title?: string;
  row2P1?: string;
  row2P2?: string;
  row2Btn?: string;
  row2BtnUrl?: string;
  row2Image?: string;
}

export function HireAugmentation({
  row1Title,
  row1P1,
  row1P2,
  row1Btn,
  row1BtnUrl,
  row1Image,
  row2Title,
  row2P1,
  row2P2,
  row2Btn,
  row2BtnUrl,
  row2Image
}: HireAugmentationProps = {}) {
  const defaultRow1Title = "Why Hire React JS <br />Developers From Krazio?";
  const defaultRow1P1 = "We are early adopters and now the veterans of this widely used front-end technology. At Krazio, our top ReactJS engineers are known for delivering projects with extreme proficiency that syncs utterly with your industry standard. From custom app development to ReactJS consultation.";
  const defaultRow1P2 = "Our ReactJS experts are well-versed at providing on-time effective solutions to all the shapes and sizes of businesses that include start-ups, SMEs, large-scale enterprises, independent CEOs, and CTOs. Outsource full-time ReactJS developers from us to develop lightweight and interactive applications, as our core competency lies in building interactive user interfaces with the help of powerful React libraries.";
  const defaultRow1Btn = "Consult an Expert";

  const defaultRow2Title = "ReactJS Team <br />Augmentation";
  const defaultRow2P1 = "Expand your current React development based on your project needs. Whether you wish to hire ReactJS developers or plan to set up a cross-functional yet flexible React team, our ReactJS Team Augmentation model helps you fill the resource gap and finish your project within the defined timeline and budget.";
  const defaultRow2P2 = "As a leading ReactJS Development Company, our flexible team augmentation model allows you to conduct multiple interviews before onboarding our ReactJS developers based on your required skill set. After the interview and selection, we assign you a dedicated React workforce to fill the talent gap. You can manage your hired resources conveniently, focusing on project development and results.";
  const defaultRow2Btn = "Scale Your Team";

  return (
    <section 
      className="relative w-full bg-[#FFFFFF] flex flex-col justify-center overflow-hidden border-t border-slate-100 min-h-[1494px]"
    >
      <div className="w-full max-w-[1358px] mx-auto py-24 px-6 md:px-[55px] relative z-10 flex flex-col justify-center gap-32">
        
        {/* Row 1 - Why Hire React JS Developers From Krazio? */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center text-left">
            <h2 
              className="text-[#0f172a] font-extrabold text-3xl sm:text-4xl md:text-[48px] leading-[1.15] mb-6 tracking-tight"
              dangerouslySetInnerHTML={{ __html: row1Title || defaultRow1Title }}
            />
            <div className="space-y-5 text-slate-500 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-[530px]">
              <p>{row1P1 || defaultRow1P1}</p>
              <p>{row1P2 || defaultRow1P2}</p>
            </div>
            <Link
              href={row1BtnUrl || "#contact-form"}
              className="btn-ripple inline-flex items-center justify-center text-white font-bold text-xs tracking-wider transition-shadow duration-300 shadow-lg hover:shadow-xl uppercase w-[202px] h-[56px] rounded-full bg-[#4B56D2]"
            >
              {row1Btn || defaultRow1Btn}
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center w-full">
            {!row1Image || row1Image === "/team_collab_sticky.png" ? (
              <img 
                src="/team_collab_sticky.png" 
                alt="Whiteboard Team Collaboration" 
                className="w-full max-w-[633px] h-auto object-contain"
              />
            ) : (
              <div className="relative w-full max-w-[633px] aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden border border-slate-100 shadow-xl bg-slate-50 flex items-center justify-center">
                <img 
                  src={row1Image} 
                  alt="Whiteboard Team Collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

        </div>

        {/* Row 2 - ReactJS Team Augmentation */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image (Appears first on desktop) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start items-center order-2 lg:order-1 w-full">
            {!row2Image || row2Image === "/team_working_table.png" ? (
              <img 
                src="/team_working_table.png" 
                alt="Laptops Team Meeting" 
                className="w-full max-w-[633px] h-auto object-contain"
              />
            ) : (
              <div className="relative w-full max-w-[633px] aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden border border-slate-100 shadow-xl bg-slate-50 flex items-center justify-center">
                <img 
                  src={row2Image} 
                  alt="Laptops Team Meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center text-left order-1 lg:order-2">
            <h2 
              className="text-[#0f172a] font-extrabold text-3xl sm:text-4xl md:text-[48px] leading-[1.15] mb-6 tracking-tight"
              dangerouslySetInnerHTML={{ __html: row2Title || defaultRow2Title }}
            />
            <div className="space-y-5 text-slate-500 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-[530px]">
              <p>{row2P1 || defaultRow2P1}</p>
              <p>{row2P2 || defaultRow2P2}</p>
            </div>
            <Link
              href={row2BtnUrl || "#contact-form"}
              className="btn-ripple inline-flex items-center justify-center text-white font-bold text-xs tracking-wider transition-shadow duration-300 shadow-lg hover:shadow-xl uppercase w-[191px] h-[56px] rounded-full bg-[#4B56D2]"
            >
              {row2Btn || defaultRow2Btn}
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
