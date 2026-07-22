import React from "react";

export function CoreValues() {
  const valuesData = [
    {
      title: "Innovation with Purpose",
      description: "We embrace emerging technologies such as AI, AR/VR/XR, Machine Learning, and enterprise software to build intelligent, future-ready solutions that solve real business challenges and create lasting value.",
      icon: (
        <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      )
    },
    {
      title: "Excellence in Every Delivery",
      description: "Quality is the foundation of everything we do. From strategy and design to development and deployment, we deliver secure, scalable, and high-performing digital solutions that exceed expectations.",
      icon: (
        <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Client Success First",
      description: "We believe successful partnerships are built on trust, transparency, and collaboration. By understanding every client's unique goals, we deliver tailored technology solutions that accelerate growth and create measurable business impact.",
      icon: (
        <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Integrity & Transparency",
      description: "We build long-term relationships through honest communication, ethical business practices, and complete transparency at every stage of the project lifecycle.",
      icon: (
        <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    },
    {
      title: "Continuous Growth",
      description: "Technology never stands still—and neither do we. We continuously learn, innovate, and evolve to help our clients stay ahead in an ever-changing digital landscape.",
      icon: (
        <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      )
    },
    {
      title: "Collaborative Innovation",
      description: "Great ideas emerge through teamwork. We foster a culture of collaboration where our experts and clients work together to transform ambitious ideas into impactful digital products.",
      icon: (
        <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full self-stretch bg-transparent pt-32 pb-32 px-6 sm:px-12 md:px-20 relative z-10">
      <div className="max-w-[1358px] mx-auto text-center space-y-16">
        {/* Section Header */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2
            className="text-4xl sm:text-5xl md:text-[56px] font-extrabold text-slate-900 tracking-tight"
          >
            Our Core Values
          </h2>
          <p 
            className="text-base md:text-[18px]"
          >
            The values that inspire every solution we build, every partnership we nurture, and every innovation we deliver. At Krazio Cloud, we are committed to creating technology that drives meaningful business transformation with integrity, excellence, and a customer-first mindset.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {valuesData.map((val, idx) => (
            <div key={idx} className="bg-white rounded-[32px] border-0 p-10 text-left shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] hover:shadow-[0_30px_60px_rgba(8,_112,_184,_0.12)] transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-12 h-12 rounded-[14px] bg-[#EEF2FF] flex items-center justify-center text-[#4B56D2] mb-6">
                {val.icon}
              </div>
              <h3 className="text-slate-900 font-extrabold text-xl mb-3 leading-snug">
                {val.title}
              </h3>
              <p className="text-sm leading-relaxed font-normal text-[#545454]">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
