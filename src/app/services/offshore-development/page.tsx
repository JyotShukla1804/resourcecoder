import React from "react";
import { OffshoreHero, TrustedBy, OffshoreOutcomes, OffshoreCapabilities, OffshoreCTA } from "@/components";
import { HireInterview } from "@/components/HireInterview";

export default function OffshoreDevelopmentPage() {
  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">
      {/* 1. Custom animated Hero */}
      <OffshoreHero />

      {/* 2. Trusted By logo slider section */}
      <TrustedBy />

      {/* 3. Outcomes / Guarantees Section */}
      <OffshoreOutcomes />

      {/* 4. Experience Builds What Luck Never Can (Blue CTA) */}
      <OffshoreCTA />

      {/* 5. Custom Capabilities Tabs */}
      <OffshoreCapabilities />
      
      {/* Generic Interview section to represent Award Winning / Stay Ahead portions as required, reusing existing components below if needed */}
      <div className="bg-white">
        <HireInterview />
      </div>
    </div>
  );
}
