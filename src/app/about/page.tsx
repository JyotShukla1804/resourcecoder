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
