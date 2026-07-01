import React from "react";
import { AgileMindsetHero } from "@/components/agile-mindset/AgileMindsetHero";
import { AgilePrinciples } from "@/components/agile-mindset/AgilePrinciples";
import { AgileConsultancyBanner } from "@/components/agile-mindset/AgileConsultancyBanner";
import { AgileValuesCards } from "@/components/agile-mindset/AgileValuesCards";
import { AgileResources } from "@/components/agile-mindset/AgileResources";

export const metadata = {
  title: "Agile Mindset | Krazio Cloud",
  description: "Embracing an Agile Mindset for Success. Discover how Krazio Cloud integrates Agile into every facet of our development process.",
};

export default function AgileMindsetPage() {
  return (
    <main className="min-h-screen bg-white">
      <AgileMindsetHero />
      <AgilePrinciples />
      <AgileConsultancyBanner />
      <AgileValuesCards />
      <AgileResources />
    </main>
  );
}
