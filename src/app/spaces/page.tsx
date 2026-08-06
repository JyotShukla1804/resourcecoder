import React from "react";
import { Metadata } from "next";
import { SpacesHero } from "@/components/spaces/SpacesHero";
import { SpacesList } from "@/components/spaces/SpacesList";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Spaces | ResourceCoders",
  description: "Explore flexible workspaces, hot desks, private offices, and conference rooms designed for collaboration and productivity at ResourceCoders.",
};

export default function SpacesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <SpacesHero />
      <SpacesList />
      <CTASection 
        title="Not sure which space is right for you?"
        description="Talk to our team to find the perfect match."
        buttonText="Contact Us Today"
      />
    </main>
  );
}
