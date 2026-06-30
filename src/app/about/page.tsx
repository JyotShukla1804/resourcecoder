export const dynamic = "force-dynamic";

import React from "react";
import { AboutHero, AboutStats, VisionMission, CoreValues, OurWorkspace, AboutBenefits, AboutHearFromUs, AboutBeyondWork, AboutGlobalPresence, CTASection } from "@/components";
import { supabase } from "@/lib/supabase";

export default async function AboutPage() {
  // Fetch dynamic page and sections data from Supabase (case-insensitive slug match)
  const { data: page } = await supabase
    .from("pages")
    .select("id")
    .ilike("slug", "about")
    .maybeSingle();

  let dbSections: any[] = [];
  if (page) {
    const { data } = await supabase
      .from("sections")
      .select("*, section_content(*)")
      .eq("page_id", page.id)
      .order("order_no");
    if (data) {
      dbSections = data;
    }
  }

  const heroSection = dbSections.find(s => s.type === "hero");
  const heroContent = heroSection?.section_content?.[0]?.content;

  return (
    <div className="relative min-h-screen flex flex-col items-center animate-fade-in-up">
      {/* Global Page Keyframes for About Us */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>

      {/* About Hero Section */}
      <AboutHero data={heroContent} />

      {/* About Stats Section */}
      <AboutStats />

      {/* Vision & Mission Section */}
      <VisionMission />

      {/* Core Values Section */}
      <CoreValues />

      {/* Our Workspace Section */}
      <OurWorkspace />

      {/* Benefits Section */}
      <AboutBenefits />

      {/* Hear From Our Team Section */}
      <AboutHearFromUs />

      {/* Beyond Work Section */}
      <AboutBeyondWork />

      {/* Global Presence Section */}
      <AboutGlobalPresence />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
