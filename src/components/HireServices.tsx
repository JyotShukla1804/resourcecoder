"use client";

import React from "react";

interface ServiceItem {
  title: string;
  desc: string;
}

interface HireServicesProps {
  heading?: string;
  description?: string;
  servicesList?: ServiceItem[];
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

export function HireServices({ heading, description, servicesList, data }: HireServicesProps = {}) {
  const defaultServices = [
    {
      title: "ReactJS Product Development",
      desc: "Get bug-free and result-driven custom ReactJS product development services to build your next-generation apps that specify your business needs.",
      icon: (
        <img 
          src="/icon-product.png" 
          alt="ReactJS Product Development" 
          className="w-8 h-8 object-contain" 
        />
      )
    },
    {
      title: "ReactJS Front-End Development",
      desc: "Leverage our React front end developer's skill to build effective SPAs, multiple architectures, and real-time data exchange applications.",
      icon: (
        <img 
          src="/icon-frontend.png" 
          alt="ReactJS Front-End Development" 
          className="w-8 h-8 object-contain" 
        />
      )
    },
    {
      title: "React Native App Development",
      desc: "At Krazio, our top ReactJS developers are well-versed in building cross-platform native applications with 100% guaranteed satisfaction.",
      icon: (
        <img 
          src="/icon-native.png" 
          alt="React Native App Development" 
          className="w-8 h-8 object-contain" 
        />
      )
    },
    {
      title: "ReactJS Website Migration",
      desc: "Hire React developers with proven expertise in migrating or upgrading your existing web app to the ReactJS platform without losing your data.",
      icon: (
        <img 
          src="/icon-migration.png" 
          alt="ReactJS Website Migration" 
          className="w-8 h-8 object-contain" 
        />
      )
    }
  ];

  // Initialize values with defaults
  let sectionTitle = heading || "ReactJS Development Services <br /> Where Front-end Evolution Begins";
  let sectionDesc = description || "We are experts in building high-quality web applications with industry-vetted experience in extensive React JS development services. Hire React developers with hands-on expertise and skills that align with your business requirements.";
  
  const defaultIcons = [
    "/icon-product.png",
    "/icon-frontend.png",
    "/icon-native.png",
    "/icon-migration.png"
  ];
  const altNames = [
    "ReactJS Product Development",
    "ReactJS Front-End Development",
    "React Native App Development",
    "ReactJS Website Migration"
  ];

  let services: Array<{ title: string; desc: string; icon: React.ReactNode }> = servicesList && servicesList.length > 0
    ? servicesList.map((item, index) => ({
        title: item.title,
        desc: item.desc,
        icon: (
          <img 
            src={defaultIcons[index % defaultIcons.length]} 
            alt={altNames[index % altNames.length]} 
            className="w-8 h-8 object-contain" 
          />
        )
      }))
    : defaultServices;

  const textBlocks = data?.blocks?.filter((b: any) => b.type === "header" || b.type === "paragraph") || [];
  
  if (!heading && !description && !servicesList && textBlocks.length > 0) {
    // 1. Extract Section Title
    const headerBlock = textBlocks.find((b: any) => b.type === "header");
    if (headerBlock) {
      sectionTitle = headerBlock.data?.text || sectionTitle;
    } else {
      sectionTitle = textBlocks[0]?.data?.text || sectionTitle;
    }

    // 2. Extract Section Description
    const descBlock = textBlocks.find((b: any) => b.type === "paragraph" && b.data?.text !== sectionTitle);
    if (descBlock) {
      sectionDesc = descBlock.data?.text || sectionDesc;
    }

    // 3. Extract Card Items
    const cardBlocks = textBlocks.filter((b: any) => b.data?.text !== sectionTitle && b.data?.text !== sectionDesc);
    if (cardBlocks.length > 0) {
      const parsedServices: Array<{ title: string; desc: string; icon: React.ReactNode }> = [];

      for (let i = 0; i < cardBlocks.length; i += 2) {
        const titleText = cardBlocks[i]?.data?.text;
        const descText = cardBlocks[i + 1]?.data?.text || "";
        
        if (titleText) {
          const iconIndex = parsedServices.length % defaultIcons.length;
          parsedServices.push({
            title: titleText,
            desc: descText,
            icon: (
              <img 
                src={defaultIcons[iconIndex]} 
                alt={altNames[iconIndex]} 
                className="w-8 h-8 object-contain" 
              />
            )
          });
        }
      }

      if (parsedServices.length > 0) {
        services = parsedServices;
      }
    }
  }

  return (
    <section 
      className="relative w-full bg-[#000000] flex items-center overflow-hidden border-t border-slate-950 min-h-[1114px]"
    >
      {/* Background soft glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1358px] mx-auto py-24 px-6 md:px-[55px] relative z-10 flex flex-col justify-center">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <h2 
            className="text-white font-extrabold text-3xl sm:text-4xl md:text-[50px] leading-[1.15] tracking-tight mb-6"
            dangerouslySetInnerHTML={{ __html: sectionTitle }}
          />
          <p 
            className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal"
            dangerouslySetInnerHTML={{ __html: sectionDesc }}
          />
        </div>

        {/* Services Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1330px] mx-auto w-full">
          {services.map((svc, idx) => (
            <div 
              key={idx}
              className="relative overflow-hidden transition-all duration-300 hover:border-slate-700/80 hover:-translate-y-1 group flex flex-col justify-start bg-[#18181B] border border-[#27272A] w-full max-w-[649px] min-h-[304px] h-auto rounded-[32px] p-10 gap-4"
            >
              {/* Corner accent overlay */}
              <div 
                className="absolute pointer-events-none w-32 h-32 bg-[#4B56D2]/10 rounded-bl-full -top-16 -right-16" 
              />

              {/* Icon */}
              <div 
                className="flex items-center justify-center transition-all duration-300 shadow-md flex-shrink-0 w-16 h-16 bg-[#27272A] rounded-2xl"
              >
                {svc.icon}
              </div>

              {/* Title */}
              <h3 
                className="text-white group-hover:text-blue-400 transition-colors duration-300 font-bold text-2xl leading-8"
                dangerouslySetInnerHTML={{ __html: svc.title }}
              />

              {/* Description */}
              <p 
                className="text-[#9F9FA9] font-normal text-base leading-[26px]"
                dangerouslySetInnerHTML={{ __html: svc.desc }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
