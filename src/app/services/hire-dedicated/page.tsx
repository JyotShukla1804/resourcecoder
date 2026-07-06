import React from "react";
import Image from "next/image";
import { HireHero } from "@/components/HireHero";
import { HireInterview } from "@/components/HireInterview";
import { HirePricing } from "@/components/HirePricing";
import { HireProcess } from "@/components/HireProcess";
import { HiringModels } from "@/components/HiringModels";
import { HireFAQ } from "@/components/HireFAQ";
import { HireBenefits } from "@/components/HireBenefits";

export default function HireDedicatedPage() {
  const heroData = {
    blocks: [
      {
        type: "header",
        data: {
          text: "Hire Dedicated IT <br/><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-indigo-600\">Developers</span>"
        }
      },
      {
        type: "paragraph",
        data: {
          text: "Scale your engineering capacity instantly by hiring our top 1% dedicated developers. We provide highly vetted, experienced professionals who seamlessly integrate with your existing team to build custom solutions precisely tailored to your requirements."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">
      {/* Hero Section */}
      <HireHero
        data={heroData}
        btn1Text="Hire Developers"
        btn1Url="#contact-form"
      >
        {/* Integrated Badges Banner */}
        <div className="w-full text-gray-900 py-6 relative z-20">
          <div className="max-w-[1358px] mx-auto px-6 flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-24">
            <div className="flex items-center space-x-3">
              <span className="text-[#4B56D2] font-bold text-2xl">50+</span>
              <span className="text-sm text-gray-800 font-medium leading-tight">Software<br/>Experts</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-400/50"></div>
            <div className="flex items-center space-x-3">
              <span className="text-[#4B56D2] font-bold text-2xl">97%</span>
              <span className="text-sm text-gray-800 font-medium leading-tight">Client<br/>Retention</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-400/50"></div>
            <div className="flex items-center space-x-3">
              <span className="text-[#4B56D2] font-bold text-2xl">4.9/5</span>
              <span className="text-sm text-gray-800 font-medium leading-tight">Average<br/>Rating</span>
            </div>
          </div>
        </div>
      </HireHero>

      {/* Tech Stack Banner */}
      <div className="py-12 bg-gray-50 flex flex-col items-center justify-center space-y-8 px-4">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 text-center">Hire Exclusive Developers for Diverse Technology Requirements</h3>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {["Node.js", "React", "Next.js", "Go", "TypeScript", "AWS", "GCP"].map((tech, idx) => (
            <div key={idx} className="flex items-center justify-center px-8 py-4 bg-white rounded-full shadow-sm border border-gray-200 text-base font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer">
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Expertise Section */}
      <div className="py-16 md:py-24 bg-white max-w-[1358px] mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Hire Exclusive Developers for Diverse Technology<br />Requirements</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { title: "Front-End", desc: "Build responsive, dynamic, and intuitive user interfaces." },
            { title: "Back-End", desc: "Robust server-side architecture and API integrations." },
            { title: "Full Stack", desc: "End-to-end development covering client and server." },
            { title: "Mobile App", desc: "Native and cross-platform mobile solutions." },
            { title: "QA & Testing", desc: "Ensure flawless performance and security." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border-t-4 border-[#4B56D2] rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-[#4B56D2]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Advantages Section */}
      <div className="py-16 md:py-24 bg-[#FAFAFA] w-full">
        <div className="max-w-[1358px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">User-Centric Advantages to<br />Upskill with High-Quality Services</h2>
            <p className="text-gray-500 text-base leading-relaxed">
              We focus on delivering high-quality, scalable solutions tailored exactly to your user requirements and business goals, ensuring every line of code adds tangible value.
            </p>
            <a href="#contact-form" className="btn-ripple inline-flex justify-center items-center px-8 py-3 bg-[#4B56D2] text-white font-bold rounded-full hover:bg-blue-700 transition-colors">
              HIRE DEVELOPERS
            </a>
          </div>
          <div className="space-y-4">
            {[
              "Global Top 1% Tech Talent",
              "Comprehensive Skill Set Match",
              "Agile Development Process",
              "Seamless Communication"
            ].map((adv, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center">
                <span className="font-bold text-gray-800">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Remote IT Staff Models */}
      <div className="py-16 md:py-24 bg-white max-w-[1358px] mx-auto px-6 w-full text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Build Your Dedicated Remote IT Staff<br />With the Scope Of Your Project Needs</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">Flexible hiring engagements designed to give you the exact talent resources you require, precisely when you need them.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "HOURLY", icon: "🕒" },
            { title: "PART TIME", icon: "💼" },
            { title: "DEDICATED", icon: "🚀" }
          ].map((model, idx) => (
            <div key={idx} className="bg-[#4B56D2] text-white rounded-[24px] p-8 flex flex-col items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer group shadow-lg">
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{model.icon}</span>
              <h3 className="font-bold text-xl tracking-wider">{model.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-[#F8F9FE] py-16">
        <HirePricing />
      </div>

      {/* Interview Form */}
      <HireInterview
        heading="Create your team with our matchless IT hiring Staff.<br/>Start Today! 🚀"
      />

      {/* Hiring Process */}
      <div className="bg-white">
        <HireProcess />
      </div>

      {/* Benefits */}
      <div className="bg-[#FAFAFA]">
        <HireBenefits
          title="Why hiring Dedicated IT Developers in India is A Smart Decision?"
          description="Leverage cost advantages without compromising on engineering quality. Access a vast pool of top-tier talent ready to scale your product."
          benefitsTitle="Key Advantages"
          benefitsList={[
            { label: "Cost Effectiveness", text: "Save up to 60% on development costs." },
            { label: "Top-Tier Talent", text: "Access highly vetted, world-class engineers." },
            { label: "Time Zone Overlap", text: "Seamless collaboration across global time zones." },
            { label: "Scalability", text: "Quickly scale your team up or down as needed." }
          ]}
        />
      </div>

      {/* Models */}
      <div className="bg-white">
        <HiringModels />
      </div>

      {/* FAQ */}
      <div className="bg-[#FAFAFA]">
        <HireFAQ />
      </div>

    </div>
  );
}
