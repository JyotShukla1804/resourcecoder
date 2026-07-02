"use client";

import React from "react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Senior Frontend Developer",
    quote: "Joining ResourceCoders was a turning point in my career. The focus on modern tech stacks and the supportive culture allows me to continuously grow while working on impactful global projects.",
    avatar: "/avatar-sarah.png",
  },
  {
    name: "David Chen",
    role: "Tech Lead",
    quote: "The level of autonomy and trust here is unmatched. We are encouraged to innovate and propose new architectural solutions, making every project an exciting challenge.",
    avatar: "/avatar-david.png",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager",
    quote: "What I love most is the cross-functional collaboration. The synergy between design, engineering, and management ensures we always deliver products that exceed client expectations.",
    avatar: "/avatar-priya.png",
  },
];

// Duplicate the list to create a seamless infinite loop
const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials];

export function AboutHearFromUs() {
  return (
    <section
      className="w-full relative z-10 flex flex-col items-center overflow-hidden border-t border-slate-950 bg-[#0A0A0A]"
    >
      {/* Custom styles for the infinite scrolling marquee */}
      

      <div className="w-full max-w-[1358px] min-h-[638px] flex flex-col justify-between py-24 relative text-white">

        {/* Section Header */}
        <div className="space-y-4 max-w-4xl mx-auto text-center px-6 md:px-[55px] mb-8">
          <h2
            className="text-3xl sm:text-4xl md:text-[48px] font-bold leading-[48px] text-center"
          >
            Hear From Our Team
          </h2>
          <p
            className="text-base md:text-[18px] text-slate-400 font-normal leading-7 text-center"
          >
            Real stories from real people who are building their careers with us.
          </p>
        </div>

        {/* Testimonials Auto-Scrolling Marquee Track */}
        <div className="relative w-full overflow-hidden py-4 z-10">

          {/* Edge Fading Gradients (Desktop) */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-20 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="animate-marquee-slow px-6 md:px-[55px]">
            {marqueeTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="w-[320px] sm:w-[400px] md:w-[450px] flex-shrink-0 bg-white/5 border border-white/10 backdrop-blur-sm rounded-[24px] p-8 text-left relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.15)] flex flex-col justify-start h-[270px] hover:border-white/20 transition-colors duration-300"
              >
                {/* Top User Info Row */}
                <div className="flex gap-4 items-center">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/25 bg-slate-800 flex-shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-white text-lg font-bold"
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-blue-500 text-sm font-semibold tracking-wide mt-0.5"
                    >
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Bottom Quote Text */}
                <p
                  className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal italic mt-6"
                >
                  "{item.quote}"
                </p>

              </div>
            ))}
          </div>

        </div>

        {/* Small spacing element for bottom padding layout balance */}
        <div className="h-4" />

      </div>
    </section>
  );
}
