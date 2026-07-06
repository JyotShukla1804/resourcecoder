import React from "react";
import Link from "next/link";

export function SuccessStoriesSection() {
  const stories = [
    {
      category: "TRANSPORTATION",
      title: "Global Shipping and Logistics",
      tech: "Core Technology: Angular JS | Nodejs | .Net",
      description:
        "Our client, an international shipping and logistics company, approached us to build a hassle-free, efficient CMS system and maximize revenue. We integrated a flawless payment gateway and database control system for a smooth user experience and bulk ordering.",
      image: "/Global Shipping.svg",
      imageLeft: true,
    },
    {
      category: "FOOD DELIVERY",
      title: "Swiggy CRM",
      tech: "Core Technology: React Js | Ruby on Rails | Java| Golang",
      description:
        "Krazio designed a chat and voice platform that helps Swiggy customers satisfy their queries fully by selecting agents based on the location and language of the customer. Also, We solved the technical problem in one service, which acts as middleware.",
      image: "/Global Shipping.svg",
      imageLeft: false,
    },
    {
      category: "FINANCE",
      title: "Cetera AdviceWorks",
      tech: "Core Technology: Angular JS | Springboot",
      description:
        "We deliver the best software development services to the Cetera Financial Group, helping them maintain 365-degree relationships with their clients. Our solution enables centralizing account information, linking third-party accounts via SSO, and proper financial planning.",
      image: "/Global Shipping.svg",
      imageLeft: true,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 max-w-[1400px] mx-auto bg-white text-left">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] mb-6 leading-[1.2]">
          Our Customer Success Stories<br />That Wow!
        </h2>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
          Discover how Krazio's expert web developers have helped accredited organizations and startups overcome technology hurdles and achieve success. From scalable web solutions to cutting-edge innovations, our projects speak for themselves!
        </p>
      </div>

      {/* Stories List */}
      <div className="space-y-16 md:space-y-24">
        {stories.map((story, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Image side */}
            <div
              className={`lg:col-span-6 flex justify-center ${story.imageLeft ? "lg:justify-start" : "lg:justify-end lg:order-last"
                }`}
            >
              <div className="relative w-full max-w-xl aspect-[16/10] rounded-[24px] overflow-hidden border border-slate-100 bg-slate-50/30 shadow-sm group">
                {story.image ? (
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : null}
              </div>
            </div>

            {/* Text side */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-black tracking-widest text-[#4B56D2] uppercase block">
                {story.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight">
                {story.title}
              </h3>
              <span className="text-xs sm:text-sm text-slate-400 font-semibold block">
                {story.tech}
              </span>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal pb-4">
                {story.description}
              </p>
              <div>
                <Link
                  href="#interview-section"
                  className="btn-ripple inline-flex items-center justify-center bg-black text-white font-bold text-xs tracking-widest py-4 px-10 rounded-full transition-shadow duration-300 uppercase shadow-md hover:shadow-lg"
                >
                  Request A Quote
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
