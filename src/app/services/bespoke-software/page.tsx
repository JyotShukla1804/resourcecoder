import { HireHero } from "@/components/HireHero";
import { TechSection } from "@/components/TechSection";
import { HireInterview } from "@/components/HireInterview";

export default function BespokeSoftwarePage() {
  const heroData = {
    blocks: [
      {
        type: "header",
        data: {
          text: "Bespoke <br/><span class='bg-gradient-to-r from-[#4B56D2] to-[#4B56D2] bg-clip-text text-transparent'>Software Development</span>"
        }
      },
      {
        type: "paragraph",
        data: {
          text: "Turn your vision into reality with our end-to-end bespoke software development services. From conceptualization and architecture design to development, deployment, and ongoing maintenance, we build scalable and secure software from scratch."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">
      <HireHero
        data={heroData}
        btn1Text="Start Your Project"
        btn1Url="#contact-form"
        btn2Text="Our Expertise"
        btn2Url="#expertise"
      />

      <div id="expertise">
        <TechSection />
      </div>

      <HireInterview />
    </div>
  );
}
