import React from "react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 text-left hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 group flex flex-col gap-6">
      <div className="w-12 h-12 rounded-[14px] bg-white/10 flex items-center justify-center text-white">
        {icon}
      </div>
      <div className="space-y-3">
        <h3 className="text-white text-xl font-bold leading-7">
          {title}
        </h3>
        <p className="text-white/80 text-sm font-normal leading-[22px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export function AboutBenefits() {
  const benefitsData = [
    {
      title: "Innovation-Driven Culture",
      description: "Work on cutting-edge projects in AI, AR/VR/XR, enterprise software, and emerging technologies that shape the future.",
      icon: (
        <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      )
    },
    {
      title: "Continuous Learning",
      description: "Grow your expertise through hands-on experience, mentorship, skill development, and exposure to the latest technologies.",
      icon: (
        <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      )
    },
    {
      title: "Global Exposure",
      description: "Collaborate with clients and teams across multiple countries while building solutions for businesses worldwide.",
      icon: (
        <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: "Collaborative Workplace",
      description: "Be part of a supportive team that values innovation, transparency, teamwork, and continuous growth.",
      icon: (
        <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full relative z-10 flex flex-col items-center overflow-hidden border-t border-white/10 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4B56D2]">
      <div className="w-full max-w-[1358px] mx-auto min-h-[576px] flex flex-col justify-between py-24 px-6 md:px-[55px] text-white">

        {/* Section Header */}
        <div className="space-y-4 max-w-4xl mx-auto text-center mb-12 lg:mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-[56px] tracking-tighter font-bold leading-[48px] text-center">
            Why Join Krazio Cloud
          </h2>
          <p className="text-base md:text-[18px] text-white/90 font-normal leading-7 text-center">
            We empower our people with the opportunities, culture, and technology they need to innovate, grow, and make a global impact.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch">
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
