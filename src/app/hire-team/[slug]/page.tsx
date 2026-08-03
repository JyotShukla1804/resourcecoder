"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { AboutStats } from "@/components/AboutStats";
import {
  HireHero,
  TrustedBy,
  HireBenefits,
  HireServices,
  HomeCostCalculator,
  HireInterview,
  HireStories,
  HireExpertise,
  HireAugmentation,
  HireFAQ,
  HireCTA,
  ScrollToHash
} from "@/components";
import { DEFAULT_PAGE_CONTENT } from "@/lib/constants";

export default function DynamicHirePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;

    async function loadPageData() {
      try {
        // Fetch page content by slug via the public pages API
        const res = await fetch(`/api/pages?slug=${encodeURIComponent(slug)}`, { cache: "no-store" });
        if (!res.ok) {
          setError("Page not found in database.");
          setLoading(false);
          return;
        }

        const page = await res.json();

        // Deep string replacement to remove -- and em-dashes from the entire page content
        const removeHyphens = (obj: any): any => {
          if (typeof obj === 'string') {
            return obj.replace(/--/g, '').replace(/—/g, '').replace(/–/g, '').replace(/ - /g, ' ');
          }
          if (Array.isArray(obj)) {
            return obj.map(removeHyphens);
          }
          if (obj !== null && typeof obj === 'object') {
            const newObj: any = {};
            for (const key in obj) {
              newObj[key] = removeHyphens(obj[key]);
            }
            return newObj;
          }
          return obj;
        };

        setContent(removeHyphens(page.content || {}));
      } catch (err) {
        setError("An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    }

    loadPageData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-slate-800 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 text-blue-500 border-2 border-t-transparent border-blue-500 rounded-full" />
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen bg-white text-slate-800 flex items-center justify-center">
        <p className="text-zinc-500 font-semibold">{error || "No content configured for this page."}</p>
      </div>
    );
  }

  // Extract blocks using dynamic helper to support both new and old schemas
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
  ].filter((b: any) => b.type);

  return (
    <div className="relative min-h-screen flex flex-col items-center animate-fade-in-up bg-white w-full">
      {/* Page Animation Styling */}


      {blocks.map((block: any, idx: number) => {
        switch (block.type) {
          case "hero":
            const heroContentBlocks = {
              blocks: [
                { type: "header", data: { text: block.title, level: 2 } },
                { type: "paragraph", data: { text: block.subtitle } },
                { type: "paragraph", data: { text: block.description } }
              ]
            };
            return (
              <React.Fragment key={idx}>
                <HireHero
                  btn1Text={block.primaryCta}
                  btn1Url={block.primaryCtaUrl}
                  btn2Text={block.secondaryCta}
                  btn2Url={block.secondaryCtaUrl}
                  image={block.image}
                  data={heroContentBlocks}
                >
                  <AboutStats />
                </HireHero>
                <TrustedBy bgColor="bg-[#F9FAFB]" fadeColor="from-[#F9FAFB]" />
              </React.Fragment>
            );
          case "benefits":
            return (
              <HireBenefits
                key={idx}
                title={block.title}
                description={block.subtitle}
                benefitsTitle={block.paragraph}
                benefitsList={block.items || []}
                btnText={block.btnText}
                btnUrl={block.btnUrl}
              />
            );
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
            return (
              <HireServices
                key={idx}
                heading={block.title}
                description={block.subtitle}
                servicesList={servicesList}
                data={servicesContentBlocks}
              />
            );
          case "pricing":
            return (
              <HomeCostCalculator key={idx} />
            );
          case "interview":
            return (
              <HireInterview
                key={idx}
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
            return (
              <HireStories
                key={idx}
                heading={block.title}
                subheading={block.subtitle}
                data={storiesList}
              />
            );
          case "expertise":
            return (
              <HireExpertise
                key={idx}
                heading={block.title}
                description={block.subtitle}
                expertiseList={block.items || []}
              />
            );
          case "augmentation":
            return (
              <HireAugmentation
                key={idx}
                row1Title={block.row1Title}
                row1P1={block.row1P1}
                row1P2={block.row1P2}
                row1Btn={block.row1Btn}
                row1BtnUrl={block.row1BtnUrl}
                row1Image={block.row1Image}
                row2Title={block.row2Title}
                row2P1={block.row2P1}
                row2P2={block.row2P2}
                row2Btn={block.row2Btn}
                row2BtnUrl={block.row2BtnUrl}
                row2Image={block.row2Image}
              />
            );
          case "faqs":
            return (
              <HireFAQ
                key={idx}
                data={block.items || []}
              />
            );
          case "cta":
            return (
              <HireCTA
                key={idx}
                title={block.title}
                subtitle={block.subtitle}
                btnText={block.buttonText || block.btnText}
                btnUrl={block.buttonUrl || block.btnUrl}
              />
            );
          default:
            return null;
        }
      })}
      <ScrollToHash />
    </div>
  );
}
