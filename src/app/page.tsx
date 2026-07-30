export const dynamic = "force-dynamic";

import Link from "next/link";
import { TrustedBy, TechSection, HiringModels, HiringProcessSection, InterviewForm, HomeProcess, HomeComparison, HomeComparisonTable, HomeCostCalculator, StatsCards, HomeITRecruitment, HomeEOR } from "@/components";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  // Fetch dynamic page and sections data from Supabase (case-insensitive slug match)
  const { data: page } = await supabase
    .from("pages")
    .select("id, content")
    .ilike("slug", "home")
    .maybeSingle();

  let dbSections: any[] = [];
  if (page) {
    const { data } = await supabase
      .from("sections")
      .select("*, section_content(*)")
      .eq("page_id", page.id)
      .order("order_no");
    if (data) {
      dbSections = data;
    }
  }

  const homeBlocks = (page?.content as any)?.blocks || [];

  const heroSection = dbSections.find(s => s.type === "hero");
  const heroContent = heroSection?.section_content?.[0]?.content;

  // Extract all text blocks (header or paragraph) to map to Title & Description
  const textBlocks = heroContent?.blocks?.filter((b: any) => b.type === "header" || b.type === "paragraph") || [];
  let dynamicTitle = undefined;
  let dynamicDesc = undefined;

  if (textBlocks.length > 0) {
    const headerBlock = textBlocks.find((b: any) => b.type === "header");
    if (headerBlock) {
      dynamicTitle = headerBlock.data?.text;
      const descBlock = textBlocks.find((b: any) => b.type === "paragraph");
      dynamicDesc = descBlock?.data?.text;
    } else {
      dynamicTitle = textBlocks[0]?.data?.text;
      if (textBlocks.length > 1) {
        dynamicDesc = textBlocks[1]?.data?.text;
      }
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-white flex flex-col items-center">
      {/* Hero Section Container with exact specs */}
      <section
        className="relative w-full min-h-[600px] md:min-h-[861px] mx-auto pt-48 px-6 pb-40 flex flex-col justify-center items-center text-center z-10 transition-all duration-300 bg-[#f8f9ff] overflow-hidden"
      >
        {/* Unique Home Page Hero Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Glowing Orbs */}
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
        </div>
        
        {/* Content Wrapper */}
        <div className="relative z-10 max-w-[1358px] mx-auto text-center w-full flex flex-col items-center space-y-8 px-4 sm:px-6">
          {/* Floating Badge */}
          <div className="badge-primary">
            Hire Dedicated IT Developers
          </div>

          {/* Hero Headline */}
          {dynamicTitle ? (
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.2] text-[#0f172a] max-w-3xl"
              dangerouslySetInnerHTML={{ __html: dynamicTitle }}
            />
          ) : (
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.2] text-[#0f172a] max-w-3xl">
              Hire Dedicated Developers<br className="hidden md:inline" />
              from India &{" "}
              <span
                className="bg-gradient-to-r from-[#4B56D2] to-[#4B56D2] bg-clip-text text-transparent"
                
              >
                Save 40%
              </span>{" "}
              on<br className="hidden md:inline" />
              Development Cost
            </h1>
          )}

          {/* Hero Paragraph */}
          {dynamicDesc ? (
            <p
              className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal"
              dangerouslySetInnerHTML={{ __html: dynamicDesc }}
            />
          ) : (
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              Looking to hire dedicated developers in India? Get access to a skilled, experienced, and cost-effective team to build cutting-edge software solutions tailored to your business needs. Whether you need web development, mobile apps, AI solutions, or enterprise software, our developers are ready to deliver excellence.
            </p>
          )}

          {/* Benefits Checks */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4">
            {[
              "05 Days Risk Free Trial",
              "24/7 Technical Support",
              "61+ Developers Team"
            ].map((benefit, idx) => (
              <div key={idx} className="benefit-item">
                <svg className="w-4 h-4 text-[#4B56D2] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Let's Talk CTA Button */}
          <div className="pt-6 w-full flex justify-center">
            <Link
              href="#interview-section"
              className="btn-ripple inline-flex items-center justify-center text-white font-bold text-[13px] tracking-wider transition-shadow duration-300 shadow-md hover:shadow-lg select-none w-auto sm:w-[157px] h-[60px] py-4 px-10 rounded-full bg-[#4B56D2]"
            >
              Let's talk
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Cards Overlapping Section */}
      <StatsCards />

      {/* Trusted By Banner */}
      <TrustedBy />

      {/* IT Recruitment Section */}
      <HomeITRecruitment />

      {/* Employer of Record (EOR) Section */}
      <HomeEOR />

      {/* Hiring Process Section */}
      <HiringProcessSection />

      {/* Home Comparison Section */}
      <HomeComparison />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* How We Compare Section */}
      <HomeComparisonTable />

      {/* Cost Calculator Section */}
      <HomeCostCalculator />

      {/* Tech Section */}
      <TechSection />



      {/* Hiring Models Section */}
      <HiringModels />


      {/* Interview Form Section */}
      <InterviewForm />

      {/* Home Process Section */}
      <HomeProcess />



      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
