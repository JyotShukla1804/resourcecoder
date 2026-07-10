export const dynamic = "force-dynamic";

import React from "react";
import { HireHero, TrustedBy, HireBenefits, HireServices, HirePricing, HireInterview, HireStories, HireExpertise, HireAugmentation, HireFAQ, HireCTA, ScrollToHash } from "@/components";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { DEFAULT_PAGE_CONTENT } from "@/lib/constants";

export default async function HireTeamPage() {
  // Fetch dynamic page and sections data from Supabase
  const { data: page } = await supabaseAdmin
    .from("pages")
    .select("content")
    .ilike("slug", "hire-team")
    .maybeSingle();

  // Extract blocks using dynamic helper to support both new and old schemas
  const content = page?.content || DEFAULT_PAGE_CONTENT;
  const blocks = content.blocks || [
    { type: "hero", ...content.hero },
    { type: "benefits", ...content.intro },
    { type: "services", ...content.technologies },
    { type: "pricing", ...content.pricing },
    { type: "interview", ...content.process },
    { type: "stories", ...content.useCases },
    { type: "expertise", ...content.frameworkDetails },
    { type: "augmentation", ...content.augmentation },
    { type: "faqs", ...content.faqs },
    { type: "cta", ...content.cta }
  ].filter(b => b.type);

  return (
    <div className="relative min-h-screen flex flex-col items-center animate-fade-in-up bg-white w-full">
      {/* Page Animation Styling */}


      {blocks.map((block: any, idx: number) => {
        let component = null;
        switch (block.type) {
          case "hero":
            const heroContentBlocks = {
              blocks: [
                { type: "header", data: { text: block.title, level: 2 } },
                { type: "paragraph", data: { text: block.subtitle } },
                { type: "paragraph", data: { text: block.description } }
              ]
            };
            component = (
              <React.Fragment>
                <HireHero
                  btn1Text={block.primaryCta}
                  btn1Url={block.primaryCtaUrl}
                  btn2Text={block.secondaryCta}
                  btn2Url={block.secondaryCtaUrl}
                  data={heroContentBlocks}
                />
                <TrustedBy bgColor="bg-[#F9FAFB]" fadeColor="from-[#F9FAFB]" />
              </React.Fragment>
            );
            break;
          case "benefits":
            component = (
              <HireBenefits
                title={block.title}
                description={block.subtitle}
                benefitsTitle={block.paragraph}
                benefitsList={block.items || []}
                btnText={block.btnText}
                btnUrl={block.btnUrl}
              />
            );
            break;
          case "services":
            const servicesList = (block.items || []).map((item: any) => ({
              title: item.name || item.title || "",
              desc: item.description || item.desc || "",
              icon: item.icon || "react"
            }));
            const servicesContentBlocks = {
              blocks: [
                { type: "header", data: { text: block.title, level: 2 } },
                { type: "paragraph", data: { text: block.subtitle } }
              ]
            };
            component = (
              <HireServices
                heading={block.title}
                description={block.subtitle}
                servicesList={servicesList}
                data={servicesContentBlocks}
              />
            );
            break;
          case "pricing":
            const pricingPlans = (block.plans || []).map((plan: any) => ({
              name: plan.name,
              price: plan.price !== null ? (String(plan.price).startsWith("$") ? plan.price : `${plan.currency === 'USD' || !plan.currency ? '$' : ''}${plan.price}`) : "Custom",
              unit: plan.unit,
              badge: plan.badge || "",
              description: plan.description || "",
              cta_text: plan.cta_text || "Get Started",
              cta_url: plan.cta_url || "#contact-form",
              is_featured: plan.is_featured || plan.highlighted || false,
              features: plan.features || []
            }));
            component = (
              <HirePricing
                data={pricingPlans}
                bottomCtaText={block.bottomCtaText}
                bottomCtaUrl={block.bottomCtaUrl}
              />
            );
            break;
          case "interview":
            component = (
              <HireInterview
                badge={block.badge}
                heading={block.title}
                description={block.subtitle}
                stat1Val={block.stat1Val}
                stat1Lbl={block.stat1Lbl}
                stat2Val={block.stat2Val}
                stat2Lbl={block.stat2Lbl}
                formTitle={block.formTitle}
              />
            );
            break;
          case "stories":
            const storiesList = (block.items || []).map((item: any) => ({
              title: item.title || "",
              category: item.category || "",
              desc: item.desc || item.description || "",
              image: item.image || "",
              techs: item.techs || [],
              btnText: item.btnText || "Request a Quote",
              btnUrl: item.btnUrl || "#contact-form"
            }));
            component = (
              <HireStories
                heading={block.title}
                subheading={block.subtitle}
                data={storiesList}
              />
            );
            break;
          case "expertise":
            component = (
              <HireExpertise
                heading={block.title}
                description={block.subtitle}
                expertiseList={block.items || []}
              />
            );
            break;
          case "augmentation":
            component = (
              <HireAugmentation
                row1Title={block.row1Title}
                row1P1={block.row1P1}
                row1P2={block.row1P2}
                row1Btn={block.row1Btn}
                row1BtnUrl={block.row1BtnUrl}
                row2Title={block.row2Title}
                row2P1={block.row2P1}
                row2P2={block.row2P2}
                row2Btn={block.row2Btn}
                row2BtnUrl={block.row2BtnUrl}
              />
            );
            break;
          case "faqs":
            component = (
              <HireFAQ
                data={block.items || []}
              />
            );
            break;
          case "cta":
            component = (
              <HireCTA
                title={block.title}
                subtitle={block.subtitle}
                btnText={block.buttonText || block.btnText}
                btnUrl={block.buttonUrl || block.btnUrl}
              />
            );
            break;
          default:
            break;
        }

        if (!component) return null;
        return (
          <div key={idx} id={block.type} className="w-full scroll-mt-20">
            {component}
          </div>
        );
      })}
      <ScrollToHash />
    </div>
  );
}

