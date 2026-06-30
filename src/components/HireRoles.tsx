"use client";

import React from "react";

export function HireRoles() {
  const roles = [
    {
      title: "ReactJS / Frontend Developer",
      desc: "Experts in building highly responsive, pixel-perfect user interfaces using React, Next.js, Redux, and modern CSS frameworks.",
      stack: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "NodeJS / Backend Developer",
      desc: "Specialists in designing secure, scalable APIs, microservices, databases, and server-side business logic using Node, Express, and databases.",
      stack: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 012-2h10a2 2 0 012 2M5 12a2 2 0 002 2h10a2 2 0 002-2m-7 4h.01M12 8h.01" />
        </svg>
      )
    },
    {
      title: "Full Stack Engineer",
      desc: "Versatile developers skilled in both client-side interfaces and complex server architectures to deliver complete end-to-end features.",
      stack: ["MERN Stack", "Next.js", "PostgreSQL", "AWS", "Docker"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      )
    },
    {
      title: "Mobile App Developer",
      desc: "Developers focused on building fluid, native-like mobile applications for iOS and Android using React Native and Flutter.",
      stack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18.75h9" />
        </svg>
      )
    },
    {
      title: "QA / Automation Engineer",
      desc: "Quality assurance specialists ensuring bug-free software releases using manual testing and automated testing frameworks.",
      stack: ["Selenium", "Playwright", "Cypress", "Jest", "CI/CD Pipelines"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      title: "UI/UX Designer",
      desc: "Creative designers building modern, intuitive user interfaces and user flows that optimize conversion and engagement rates.",
      stack: ["Figma", "Adobe XD", "Prototyping", "Design Systems", "User Research"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-3.078 0L3.72 17.653a3 3 0 000 5.196l2.733 1.53a3 3 0 003.078 0l2.733-1.53a3 3 0 000-5.196l-2.733-1.53z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 2.122a3 3 0 00-3.078 0L3.72 3.653a3 3 0 000 5.196l2.733 1.53a3 3 0 003.078 0l2.733-1.53a3 3 0 000-5.196l-2.733-1.53z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.03 9.122a3 3 0 00-3.078 0l-2.733 1.53a3 3 0 000 5.196l2.733 1.53a3 3 0 003.078 0l2.733-1.53a3 3 0 000-5.196l-2.733-1.53z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full max-w-[1440px] mx-auto py-20 px-6 md:px-[80px] bg-slate-50 border-t border-slate-100">
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="badge-primary mb-4">OUR EXPERTISE</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight mb-6">
            Hire Specialists for Every Phase of Your Product
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            Choose from a wide variety of dedicated experts to fill roles on demand. Our team functions seamlessly with your local team and workflows.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {roles.map((role, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-100 hover:border-[#4B56D2]/40 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-350 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#4B56D2] flex items-center justify-center mb-6 group-hover:bg-[#4B56D2] group-hover:text-white transition-all duration-300">
                  {role.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0f172a] mb-3 group-hover:text-[#4B56D2] transition-colors duration-300">
                  {role.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {role.desc}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-50">
                  {role.stack.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-slate-600 bg-slate-50 rounded-lg border border-slate-100/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
