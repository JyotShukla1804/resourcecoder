import { HireHero } from "@/components/HireHero";
import { PricingSection } from "@/components/PricingSection";
import { HireInterview } from "@/components/HireInterview";
import { TechSection } from "@/components/TechSection";

export default function HireDedicatedPage() {
  const heroData = {
    blocks: [
      {
        type: "header",
        data: {
          text: "Hire <br/><span class='bg-gradient-to-r from-[#4B56D2] to-[#4B56D2] bg-clip-text text-transparent'>Dedicated Developers</span>"
        }
      },
      {
        type: "paragraph",
        data: {
          text: "Scale your engineering capacity instantly by hiring our top 1% dedicated developers. We provide highly vetted, experienced professionals who seamlessly integrate with your existing team to build custom solutions precisely tailored to your requirements."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">
      <HireHero
        data={heroData}
        btn1Text="Hire Now"
        btn1Url="#contact-form"
        btn2Text="View Pricing"
        btn2Url="#pricing"
      />

      <div id="pricing">
        <PricingSection />
      </div>

      <TechSection />

      <HireInterview />
    </div>
  );
}
