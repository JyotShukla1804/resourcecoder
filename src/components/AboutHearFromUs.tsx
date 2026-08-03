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
    <section className="py-2 sm:py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <a
          href="https://www.ambitionbox.com/overview/krazio-cloud-overview?utm_source=employer-dashboard&utm_campaign=krazio-cloud&utm_medium=badges"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Krazio Cloud rating on AmbitionBox"
        >
          <img
            src="https://employer.ambitionbox.com/api/badge/2088278?badge-type=ratings-detailed"
            alt="Krazio Cloud AmbitionBox rating badge"
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );
}
