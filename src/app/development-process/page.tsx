import { 
  DevProcessHero,
  DevProcessScrum,
  DevProcessBanner,
  DevProcessSteps,
  DevProcessWhy,
  DevProcessFAQ,
} from "@/components";

export const metadata = {
  title: "Development Process | ResourceCoders",
  description: "Explore our Simple, Effective & Results-driven software development process. From onboarding and scoping to deployment and maintenance.",
};

export default function DevelopmentProcessPage() {
  return (
    <main className="min-h-screen bg-[#f8f9ff]">
      <DevProcessHero />
      <DevProcessScrum />
      <DevProcessBanner />
      <DevProcessSteps />
      <DevProcessWhy />
      <DevProcessFAQ />
    </main>
  );
}
