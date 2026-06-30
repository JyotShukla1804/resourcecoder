import React from "react";
import Link from "next/link";

export function SpecializationSection() {
  const specializations = [
    {
      title: "Website Development",
      description:
        "Hire dedicated developers from India and craft dynamic and visually appealing websites that captivate your audience. We use the latest technologies and design trends to ensure a seamless user experience, responsive layouts, and optimized performance.",
    },
    {
      title: "Software Development",
      description:
        "With our team of skilled, dedicated developers for hire, we provide customized software solutions for your business needs. From ideation to deployment, we help create robust, scalable, and secure software apps that enhance your business processes.",
    },
    {
      title: "Web and Mobile App Development",
      description:
        "We specialize in developing feature-rich web and mobile applications to help your business reach a wider audience. Krazio's dedicated developers are proficient in utilizing front-end and back-end technologies to create intuitive, user-friendly apps.",
    },
    {
      title: "Full Stack Development",
      description:
        "Our dedicated full stack developers possess a complete understanding of front-end and back-end technologies. They are experts in building end-to-end solutions, ensuring seamless integration, optimal performance, and streamlined development processes.",
    },
    {
      title: "Support and Maintenance",
      description:
        "Beyond development, we offer reliable support and maintenance services to keep your apps running smoothly. Our dedicated developers can address issues, perform updates, and implement enhancements to ensure your software remains secure and up to date.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 text-left">
          <h2 
            className="w-full max-w-[384px] md:h-[120px] text-3xl sm:text-4xl md:text-[36px] font-[700] leading-tight md:leading-[40px] md:tracking-[0px] text-[#0f172a] transition-all duration-300"
            style={{ 
              fontFamily: "'Liberation Sans', Arial, sans-serif", 
              transform: "rotate(0deg)", 
              opacity: 1 
            }}
          >
            Our Dedicated Developers Specialize In Quality Services
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal">
            At Krazio, our team of skilled and dedicated developers is committed to delivering cost-efficient solutions with complete transparency and excellence. Whether you need web development, mobile apps, or custom software solutions, our expert developers bring your ideas to life with precision and innovation.
          </p>
          <div className="pt-4">
            <Link
              href="#interview-section"
              className="btn-ripple inline-flex items-center justify-center w-[230.88px] h-[44px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] rounded-full text-white font-bold text-xs tracking-wider transition-shadow duration-300 hover:shadow-lg select-none uppercase"
              style={{
                backgroundColor: "#4B56D2",
                transform: "rotate(0deg)",
                opacity: 1
              }}
            >
              TALK TO OUR EXPERT
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="bg-slate-50/60 border border-slate-100/80 hover:border-slate-200/60 hover:bg-slate-50 hover:shadow-xs transition-all duration-300 rounded-[24px] p-6 sm:p-8"
            >
              <h3 
                className="w-full max-w-[766px] md:h-[32px] text-xl md:text-[24px] font-[700] leading-tight md:leading-[32px] md:tracking-[0px] text-[#0f172a] mb-3 flex items-center transition-all duration-300"
                style={{ 
                  fontFamily: "'Liberation Sans', Arial, sans-serif", 
                  transform: "rotate(0deg)", 
                  opacity: 1 
                }}
              >
                {spec.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
