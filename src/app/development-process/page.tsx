import { 
  DevProcessHero,
  DevProcessScrum,
  DevProcessBanner,
  DevProcessSteps,
  DevProcessWhy,
  DevProcessFAQ,
  Footer,
  Navbar 
} from "@/components";

export const metadata = {
  title: "Development Process - Krazio Cloud",
  description: "Explore our Simple, Effective & Results-driven software development process. From onboarding and scoping to deployment and maintenance.",
};

export default function DevelopmentProcessPage() {
  return (
    <main className="min-h-screen bg-[#f8f9ff]">
      <Navbar />
      
      <div className="pt-20">
        <DevProcessHero />
        <DevProcessScrum />
        <DevProcessBanner />
        <DevProcessSteps />
        <DevProcessWhy />
        <DevProcessFAQ />
      </div>

      <Footer />
    </main>
  );
}
