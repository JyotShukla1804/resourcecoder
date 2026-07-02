import React from "react";
import { Metadata } from "next";
import { StartupHero } from "@/components/startup-consulting/StartupHero";
import { WhyChooseConsulting } from "@/components/startup-consulting/WhyChooseConsulting";
import { StartupPotential } from "@/components/startup-consulting/StartupPotential";
import { StartupPackages } from "@/components/startup-consulting/StartupPackages";
import { StartupFAQ } from "@/components/startup-consulting/StartupFAQ";
import { StartupCTA } from "@/components/startup-consulting/StartupCTA";

export const metadata: Metadata = {
  title: "1:1 Startup Consulting | ResourceCoders",
  description: "Expert 1:1 Startup Consulting Services. Transform your brilliant idea into a market-leading product with our technical and strategic roadmap.",
};

export default function StartupConsultingPage() {
  return (
    <div className="relative min-h-screen w-full bg-white flex flex-col items-center overflow-x-hidden">
      {/* 1. Hero Section */}
      <StartupHero />

      {/* 2. Why Choose Us Section */}
      <WhyChooseConsulting />

      {/* 3. The Zig-Zag Process / Potential Section */}
      <StartupPotential />

      {/* 4. Pricing / Packages Section (Unique) */}
      <StartupPackages />

      {/* 5. FAQs Section */}
      <StartupFAQ />

      {/* 6. Custom CTA Section (Unique) */}
      <StartupCTA />
    </div>
  );
}
