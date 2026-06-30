import React from "react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 text-left hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 group flex flex-col gap-6">
      <div className="flex items-center justify-start">
        {icon}
      </div>
      <div className="space-y-3">
        <h3
          className="text-white text-xl font-bold leading-7"
        >
          {title}
        </h3>
        <p
          className="text-white/80 text-sm font-normal leading-[22px]"
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function AboutBenefits() {
  return (
    <section
      className="w-full relative z-10 flex flex-col items-center overflow-hidden border-t border-white/10 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4B56D2]"
    >
      <div className="w-full max-w-[1358px] mx-auto min-h-[576px] flex flex-col justify-between py-24 px-6 md:px-[55px] text-white">

        {/* Section Header */}
        <div className="space-y-4 max-w-4xl mx-auto text-center mb-12 lg:mb-8">
          <h2
            className="text-4xl sm:text-5xl md:text-[56px] tracking-tighter font-bold leading-[48px] text-center"
          >
            Benefits at ResourceCoders
          </h2>
          <p
            className="text-base md:text-[18px] text-white/90 font-normal leading-7 text-center"
          >
            We invest in our people so they can build the best products for our clients.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch">

          {/* Card 1: Health & Wellness */}
          <BenefitCard
            icon={
              <img
                src="/icon-heart.png"
                alt="Health & Wellness"
                className="w-[30px] h-[30px] mix-blend-screen opacity-100"
              />
            }
            title="Health & Wellness"
            description="Comprehensive medical coverage and wellness programs for you and your family."
          />

          {/* Card 2: Continuous Learning */}
          <BenefitCard
            icon={
              <img
                src="/icon-learning.png"
                alt="Continuous Learning"
                className="w-[30px] h-[30px] mix-blend-screen opacity-100"
              />
            }
            title="Continuous Learning"
            description="Dedicated budget for courses, certifications, and tech conferences."
          />

          {/* Card 3: Flexible Working */}
          <BenefitCard
            icon={
              <img
                src="/icon-working.png"
                alt="Flexible Working"
                className="w-[30px] h-[30px] mix-blend-screen opacity-100"
              />
            }
            title="Flexible Working"
            description="Hybrid work models and flexible hours to maintain a healthy work-life balance."
          />

          {/* Card 4: Global Opportunities */}
          <BenefitCard
            icon={
              <img
                src="/icon-plane.png"
                alt="Global Opportunities"
                className="w-[30px] h-[30px] mix-blend-screen opacity-100"
              />
            }
            title="Global Opportunities"
            description="Opportunities to work with international clients and travel to global offices."
          />

        </div>

      </div>
    </section>
  );
}
