import React from "react";
import Link from "next/link";

export function TestimonialsSection() {
  const testimonials = [
    {
      text: '"Easy communication, high-quality project implementation, experienced tech experts, and meeting deadlines were amazing! With the help of the Krazio\'s team, the customer made a successful agreement with their end client for a long-term partnership."',
      author: "Markiyan Podlyashet",
      role: "COO",
    },
    {
      text: '"Krazio Cloud always looks for ways to make the relationship work for both sides. The client is satisfied with Krazio\'s communication skills, speed, and quality of work. They checked in with the client to ensure high-quality services."',
      author: "Syrne Hayrapetyan",
      role: "Relationship Manager",
    },
    {
      text: '"They contribute to the development of the client\'s business. Krazio did they work fast, and what is more important, well. This enabled the client to reach new heights in his business. Communication was nice and pleasant."',
      author: "Sarkis Symovyan",
      role: "CMO",
    },
    {
      text: '"Working with Krazio has been a game-changer for our product scaling. Their engineers integrated seamlessly with our in-house team, delivering top-notch code and architectural insights ahead of schedule. Highly recommended!"',
      author: "Elena Rostova",
      role: "VP of Engineering",
    },
    {
      text: '"Krazio\'s dedication to quality and communication is unmatched. They helped us rebuild our legacy platform into a modern cloud-native app, saving us significant operational costs. Their expertise in React and AWS was crucial."',
      author: "David Chen",
      role: "Founder & CTO",
    },
  ];

  // Duplicate the list to create a seamless infinite marquee effect
  const doubledTestimonials = [...testimonials, ...testimonials];

  const StarIcon = () => (
    <svg
      className="w-4 h-4 text-[#FACC15] fill-current"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.252.583 1.828l-3.97 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.888a1 1 0 00-1.176 0l-3.97 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.97-2.888c-.777-.576-.378-1.828.583-1.828h4.907a1 1 0 00.95-.69l1.519-4.674z"
      />
    </svg>
  );

  return (
    <section className="w-full self-stretch bg-black py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden border-t border-slate-950/80">
      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.2]">
            Words of Appreciation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            Discover how ResourceCoders' innovative solutions have transformed businesses and empowered our
            clients. Hear directly from those who trust us, choose us, and succeed with us—time and time
            again!
          </p>
        </div>

        {/* Testimonials Infinite Marquee */}
        <div className="relative w-full overflow-hidden mb-16 py-4">


          {/* Scrolling Track */}
          <div 
            className="animate-marquee flex gap-6"
          >
            {doubledTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[320px] md:w-[410px]"
              >
                <div 
                  className="w-full h-full min-h-[280px] bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col justify-between hover:border-white/20 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="space-y-6 relative z-10">
                    {/* 5 Filled Star Rating */}
                    <div className="flex gap-1.5">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                    {/* Review Text */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal italic group-hover:text-slate-100 transition-colors duration-350">
                      {t.text}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="relative z-10 mt-6">
                    <h3 className="text-white font-bold text-sm sm:text-base leading-tight group-hover:text-blue-400 transition-colors duration-350">
                      {t.author}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action Button */}
        <div className="flex justify-center">
          <Link
            href="#interview-section"
            className="btn-ripple inline-flex items-center justify-center text-white font-bold text-xs tracking-widest py-4.5 px-10 rounded-full transition-shadow duration-300 uppercase shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.5)] bg-[#4B56D2]"
          >
            Talk To Our Experts
          </Link>
        </div>
      </div>
    </section>
  );
}
