import React from "react";
import Link from "next/link";
import { Monitor, Code2, Smartphone, Layers, Wrench } from "lucide-react";

export function SpecializationSection() {
  const specializations = [
    {
      title: "Website Development",
      description: "Hire dedicated developers from India and craft dynamic and visually appealing websites that captivate your audience. We use the latest technologies and design trends to ensure a seamless user experience, responsive layouts, and optimized performance.",
      icon: <Monitor className="w-6 h-6 text-[#4B56D2]" />,
    },
    {
      title: "Software Development",
      description: "With our team of skilled, dedicated developers for hire, we provide customized software solutions for your business needs. From ideation to deployment, we help create robust, scalable, and secure software apps that enhance your business processes.",
      icon: <Code2 className="w-6 h-6 text-[#4B56D2]" />,
    },
    {
      title: "Web and Mobile App Development",
      description: "We specialize in developing feature-rich web and mobile applications to help your business reach a wider audience. ResourceCoders' dedicated developers are proficient in utilizing front-end and back-end technologies to create intuitive, user-friendly apps.",
      icon: <Smartphone className="w-6 h-6 text-[#4B56D2]" />,
    },
    {
      title: "Full Stack Development",
      description: "Our dedicated full stack developers possess a complete understanding of front-end and back-end technologies. They are experts in building end-to-end solutions, ensuring seamless integration, optimal performance, and streamlined development processes.",
      icon: <Layers className="w-6 h-6 text-[#4B56D2]" />,
    },
    {
      title: "Support and Maintenance",
      description: "Beyond development, we offer reliable support and maintenance services to keep your apps running smoothly. Our dedicated developers can address issues, perform updates, and implement enhancements to ensure your software remains secure and up to date.",
      icon: <Wrench className="w-6 h-6 text-[#4B56D2]" />,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10 max-w-[1358px] mx-auto overflow-visible">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#4B56D2]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
        
        {/* Left Column (Sticky) */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-32 space-y-8 text-left h-fit pr-0 lg:pr-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100/50 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#4B56D2] animate-pulse" />
              <span className="text-[#4B56D2] font-extrabold text-[11px] tracking-widest uppercase">Premium Expertise</span>
            </div>
            
            <h2 className="w-full max-w-[460px] text-4xl sm:text-5xl lg:text-[46px] font-[800] leading-[1.15] text-slate-900 tracking-tight">
              Our Dedicated Developers Specialize In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-indigo-600">Quality Services</span>
            </h2>
            
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-normal">
              At ResourceCoders, our team of skilled and dedicated developers is committed to delivering cost-efficient solutions with complete transparency and excellence. Whether you need web development, mobile apps, or custom software solutions, our expert developers bring your ideas to life with precision and innovation.
            </p>
            
            <div className="pt-6">
              <Link
                href="#interview-section"
                className="btn-ripple group inline-flex items-center justify-center bg-[#4B56D2] rounded-full text-white font-bold text-[14px] tracking-wide px-10 py-5 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(75,86,210,0.3)] hover:-translate-y-1 select-none"
              >
                Let's Discuss Your Project
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column (Scrollable Cards) */}
        <div className="lg:col-span-7 space-y-8">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-200/60 hover:border-[#4B56D2]/30 rounded-[32px] p-8 sm:p-10 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(75,86,210,0.15)] hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4B56D2]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-[#4B56D2]/20 group-hover:shadow-md flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  {spec.icon}
                </div>
                
                <h3 className="text-2xl font-[800] leading-tight text-slate-900 mb-4 group-hover:text-[#4B56D2] transition-colors duration-300">
                  {spec.title}
                </h3>
                
                <p className="text-slate-500 text-sm sm:text-base leading-[1.8] font-normal">
                  {spec.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
