import { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TrustedBy } from "@/components/TrustedBy";
import { PartnerHero } from "@/components/partner-with-us/PartnerHero";
import { PartnerTrustedLogos } from "@/components/partner-with-us/PartnerTrustedLogos";
import { PartnerCompaniesGrid } from "@/components/partner-with-us/PartnerCompaniesGrid";
import { PartnershipModels } from "@/components/partner-with-us/PartnershipModels";
import { PartnerBenefits } from "@/components/partner-with-us/PartnerBenefits";
import { PartnerCTA } from "@/components/partner-with-us/PartnerCTA";

export const metadata: Metadata = {
  title: "Partner With Us | ResourceCoders",
  description: "Explore strategic partnership models with ResourceCoders to scale your business, co-develop innovative solutions, and leverage top-tier engineering talent.",
};

export default function PartnerWithUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Form */}
      <div id="partner-form">
        <PartnerHero />
      </div>

      {/* Trusted Logos (Diversity/Global) */}
      <PartnerTrustedLogos />

      {/* Companies We Partner With Grid */}
      <PartnerCompaniesGrid />

      {/* Strategic Partnership Models */}
      <PartnershipModels />

      {/* Partner CTA Banner */}
      <PartnerCTA />

      {/* The ResourceCoders Edge / Benefits */}
      <PartnerBenefits />

      {/* Client Logos / Can't Wait to See Your Name Here */}
      <TrustedBy />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Let's Get in Touch / Final CTA */}
      <CTASection />
    </main>
  );
}
