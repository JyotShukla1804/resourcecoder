const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://tqmbzpkbbnvfbxtqtnnm.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbWJ6cGtiYm52ZmJ4dHF0bm5tIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTUwNjA2NCwiZXhwIjoyMDk3MDgyMDY0fQ.55hk9-ia3DeyClr_VDfUQ3lkmNowPFCqLMkIkoju0Zo';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function run() {
  const { data: existing, error } = await supabase.from('pages').select('*').eq('slug', 'ui-ux-designer').maybeSingle();
  if (error || !existing) {
    console.error("Not found or error:", error);
    return;
  }

  const content = existing.content;

  // Sec 01: HERO
  const heroBlock = content.blocks.find(b => b.type === 'hero');
  if (heroBlock) {
    heroBlock.subtitle = "Dedicated UI/UX designers, embedded in your sprint. Monthly billing, 40–60% cost savings, shortlisted in 48 hours.";
    heroBlock.description = "When you hire a UI/UX designer through ResourceCoder, you get a dedicated product design partner who understands both user needs and technical constraints. Your designer works inside your sprint cycle, collaborating closely with your engineering and product teams to deliver beautiful, functional interfaces. Billing is monthly, with full ownership of all design files and assets retained by you.";
    heroBlock.secondaryCta = ""; // Ensure removed
  }

  // Sec 02: BENEFITS ("Why Hire")
  const whyHireBlock = content.blocks.find(b => b.type === 'benefits' && b.title.includes('Why Hire'));
  if (whyHireBlock) {
    whyHireBlock.subtitle = "Skip the six-month hiring process. Get a production-ready UI/UX designer this month.";
    whyHireBlock.paragraph = "What You Get";
    whyHireBlock.items = [
      whyHireBlock.items[0], // Keep existing if needed
      {
        "label": "Dedicated Ownership, Not Shared Attention",
        "text": "Your designer is a full-time extension of your in-house product team. They work exclusively on your product roadmap."
      },
      {
        "label": "Onboarding Within a Week",
        "text": "Skip the portfolio screening rounds. We provide a shortlist of highly qualified, pre-vetted UI/UX designers within 48 hours, ready to start designing within a week."
      },
      {
        "label": "Scale Monthly, Not by Contract Length",
        "text": "Add a second designer for a critical launch sprint, or scale back capacity after a major release. Our transparent monthly model means you adapt to changing roadmaps without long-term lock-ins."
      }
    ];
  }

  // Sec 03: SERVICES ("What Can Build")
  const servicesBlock = content.blocks.find(b => b.type === 'services');
  if (servicesBlock) {
    servicesBlock.items = [
      {
        "icon": "react",
        "name": "SaaS interfaces & dashboards",
        "description": "Complex data visualization and intuitive workflows for B2B/B2C products."
      },
      {
        "icon": "seo",
        "name": "Design systems & component libraries",
        "description": "Building scalable, consistent design languages in Figma for seamless developer handoff."
      },
      {
        "icon": "seo",
        "name": "User research & usability testing",
        "description": "Validating assumptions and iterating based on real user feedback."
      },
      {
        "icon": "react",
        "name": "Mobile app design",
        "description": "Native iOS/Android and cross-platform UX following Human Interface and Material Design guidelines."
      },
      {
        "icon": "seo",
        "name": "Conversion flow optimization",
        "description": "Redesigning onboarding and checkout flows to reduce friction and improve metrics."
      },
      {
        "icon": "react",
        "name": "Developer handoff & design QA",
        "description": "Detailed specs and collaborative QA to ensure the final build matches the design intent perfectly."
      }
    ];
  }

  // Sec 04: EXPERTISE ("Skills & Tech Stack")
  const expertiseBlock = content.blocks.find(b => b.type === 'expertise');
  if (expertiseBlock) {
    expertiseBlock.title = "Skills & Tools";
    expertiseBlock.items = [
      { "title": "Design Tools", "items": ["Figma", "Sketch", "Adobe XD"] },
      { "title": "Prototyping", "items": ["Protopie", "Principle", "Framer", "InVision"] },
      { "title": "Design Systems", "items": ["Atomic Design", "Design Tokens", "Figma Variables/Auto Layout"] },
      { "title": "User Research", "items": ["Maze", "Dovetail", "UserTesting", "Hotjar"] },
      { "title": "Handoff & Collaboration", "items": ["Zeplin", "Abstract", "Jira", "Confluence"] },
      { "title": "Visual & Brand", "items": ["Typography", "Color Theory", "Iconography", "Illustration"] },
      { "title": "Platform Guidelines", "items": ["Material Design (Android/Web)", "Human Interface Guidelines (iOS)"] },
      { "title": "Analytics-Informed Design", "items": ["Mixpanel", "Google Analytics", "Amplitude"] }
    ];
  }

  // Sec 05: PRICING ("Engagement Models")
  const pricingBlock = content.blocks.find(b => b.type === 'pricing');
  if (pricingBlock) {
    pricingBlock.subtitle = "Start with the model that fits your roadmap — scale up, down, or switch anytime.";
    pricingBlock.plans = [
      {
        "name": "Dedicated Monthly",
        "unit": "month",
        "badge": "Most Popular",
        "price": "Custom",
        "cta_url": "#contact-form",
        "cta_text": "Hire Dedicated Designer",
        "description": "Full-time designer, embedded in your sprint cycle and roadmap.",
        "is_featured": true,
        "features": ["160 hours per month", "Direct team integration", "Working hours overlap"]
      },
      {
        "name": "Part Time",
        "unit": "month",
        "badge": "Flexible",
        "price": "Custom",
        "cta_url": "#contact-form",
        "cta_text": "Hire Part Time",
        "description": "20 hours a week, ideal for advisory work, design review, or supporting an existing team.",
        "is_featured": false,
        "features": ["80 hours per month", "Advisory work", "Design review"]
      },
      {
        "name": "Hourly",
        "unit": "hour",
        "badge": "Pay As You Go",
        "price": "Custom",
        "cta_url": "#contact-form",
        "cta_text": "Start Hourly Work",
        "description": "For short, well scoped tasks, a specific UI flow, or a UX audit.",
        "is_featured": false,
        "features": ["Short, well scoped tasks", "UI/UX Audit", "Specific user flows"]
      }
    ];
  }

  // Sec 07: BENEFITS ("Why ResourceCoder")
  const whyResourceBlock = content.blocks.find(b => b.type === 'benefits' && b.title.includes('Why ResourceCoder'));
  if (whyResourceBlock) {
    whyResourceBlock.subtitle = "Built for teams that need real product design depth, not just visual polish.";
    whyResourceBlock.paragraph = "Our Guarantees"; 
    whyResourceBlock.items = [
      {
        "label": "Pre-Vetted for UI/UX Depth",
        "text": "We screen for deep UX research capabilities, interaction design, and design system creation, not just basic visual skills."
      },
      {
        "label": "Real Time-Zone Overlap",
        "text": "Our designers align their working hours with your core team, ensuring real-time collaboration, rapid iteration, and synchronized daily stand-ups."
      },
      {
        "label": "Replacement Guarantee",
        "text": "If a designer isn't the perfect fit for your workflow, we will replace them immediately at no additional cost to ensure your product stays on track."
      },
      {
        "label": "You Retain Full Ownership of All Files",
        "text": "From the first wireframe created, your company maintains full, exclusive ownership of all design files, prototypes, and brand assets."
      }
    ];
  }

  // Sec 08: FAQ
  const faqsBlock = content.blocks.find(b => b.type === 'faqs');
  if (faqsBlock) {
    faqsBlock.title = "Frequently Asked Questions";
    faqsBlock.subtitle = "Answers to common questions about hiring a dedicated UI/UX designer through ResourceCoder.";
    faqsBlock.items = [
      {
        "question": "How much does it cost to hire a UI/UX designer through ResourceCoder?",
        "answer": "Costs run 40 to 60% below typical local market rates in the UK, UAE, US, and EU, with final pricing depending on seniority and engagement type (monthly, part-time, or hourly)."
      },
      {
        "question": "Is there a minimum contract or notice period?",
        "answer": "No long-term lock-in. Monthly engagements can be adjusted or ended with standard notice periods."
      },
      {
        "question": "What happens if the designer is not a good fit?",
        "answer": "We offer a strict replacement guarantee. We will replace them at no extra cost, with a new shortlist typically ready within 48 hours."
      },
      {
        "question": "Who owns the design files and assets?",
        "answer": "You do, fully and exclusively. ResourceCoder retains no rights over any Figma files, prototypes, or brand assets."
      },
      {
        "question": "Can the designer work in my time zone?",
        "answer": "Yes. We specifically match for working-hours overlap so your designer is available during your team's core hours, ensuring seamless real-time collaboration with product and engineering teams."
      }
    ];
  }

  const { error: updateError } = await supabase.from('pages').update({ content }).eq('id', existing.id);
  if (updateError) {
    console.error("Error updating:", updateError);
  } else {
    console.log("Successfully updated ui-ux-designer page!");
  }
}
run();
