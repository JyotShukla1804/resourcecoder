import { Metadata } from "next";
import { 
  AwardsHero, 
  AwardsShowcase, 
  AwardsTeam 
} from "@/components/awards";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Awards & Recognition | ResourceCoders",
  description: "Celebrate the achievements of our people and teams. Explore the awards and recognitions earned by ResourceCoders for delivering top-tier software solutions.",
};

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <AwardsHero />
      
      {/* 2. Awards Showcase Slider */}
      <AwardsShowcase />
      
      {/* 3. Team Highlights */}
      <AwardsTeam />

      {/* 4. Let's Build Something Great */}
      <CTASection />
    </main>
  );
}
