const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://tqmbzpkbbnvfbxtqtnnm.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbWJ6cGtiYm52ZmJ4dHF0bm5tIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTUwNjA2NCwiZXhwIjoyMDk3MDgyMDY0fQ.55hk9-ia3DeyClr_VDfUQ3lkmNowPFCqLMkIkoju0Zo';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function run() {
  const { data: existing, error } = await supabase.from('pages').select('*').eq('slug', 'next-js-developer').maybeSingle();
  if (error || !existing) {
    console.error("Not found or error:", error);
    return;
  }

  const content = existing.content;

  // Sec 02: BENEFITS ("Why Hire")
  const whyHireBlock = content.blocks.find(b => b.type === 'benefits' && b.title.includes('Why Hire'));
  if (whyHireBlock) {
    whyHireBlock.subtitle = "Skip the six-month hiring process. Get a production-ready Next.js developer this month.";
    whyHireBlock.paragraph = "What You Get";
    whyHireBlock.items = [
      whyHireBlock.items[0], // Keep existing if needed, but the prompt says 4 items total.
      whyHireBlock.items[1],
      {
        "label": "Onboarding Within a Week",
        "text": "Skip the resume screening and technical panel rounds. We provide a shortlist of highly qualified, pre-vetted Next.js developers within 48 hours, ready to start committing code within a week."
      },
      {
        "label": "Scale Monthly, Not by Contract Length",
        "text": "Add a second developer for a critical launch sprint, or scale back capacity after a major release. Our transparent monthly model means you adapt to changing roadmaps without long-term lock-ins."
      }
    ];
  }

  // Sec 03: SERVICES ("What Can Build")
  const servicesBlock = content.blocks.find(b => b.type === 'services');
  if (servicesBlock) {
    servicesBlock.subtitle = "From SEO-critical marketing sites to full SaaS dashboards, built on the framework's rendering model, not around it.";
    servicesBlock.items = [
      {
        "icon": "seo",
        "name": "Server-rendered marketing sites with high SEO requirements",
        "description": "SSG/ISR pages that rank well and load fast, without sacrificing the interactivity of a full React app."
      },
      {
        "icon": "react",
        "name": "Hybrid SaaS applications",
        "description": "Public marketing pages rendered statically alongside authenticated, client-rendered dashboards, all in one codebase."
      },
      {
        "icon": "react",
        "name": "App Router migrations",
        "description": "Refactoring aging React single-page applications or monolithic architectures into modular, SEO-friendly Next.js applications with zero downtime."
      },
      {
        "icon": "react",
        "name": "API routes / BFF layers",
        "description": "Seamlessly connecting your Next.js frontend with headless architectures and robust backend APIs using Next.js API routes as a Backend-For-Frontend."
      },
      {
        "icon": "react",
        "name": "Lightning-fast e-commerce storefronts",
        "description": "Utilizing Next.js static site generation (SSG) and server-side rendering (SSR) to build exceptionally fast e-commerce frontends that maximize conversion rates."
      },
      {
        "icon": "react",
        "name": "Multi-tenant platforms",
        "description": "Architecting scalable, secure, multi-tenant dashboards capable of handling complex state management and real-time data processing."
      }
    ];
  }

  // Sec 04: EXPERTISE ("Skills & Tech Stack")
  const expertiseBlock = content.blocks.find(b => b.type === 'expertise');
  if (expertiseBlock) {
    expertiseBlock.subtitle = "The modern Next.js ecosystem, from rendering strategy to deployment.";
    expertiseBlock.items = [
      { "title": "Core", "items": ["Next.js 13/14+ (App Router & Pages Router)", "React 18+", "TypeScript"] },
      { "title": "Rendering Strategies", "items": ["SSR", "SSG", "ISR", "React Server Components", "Streaming"] },
      { "title": "State Management", "items": ["Redux Toolkit", "Zustand", "React Query", "Context API"] },
      { "title": "Styling", "items": ["Tailwind CSS", "CSS Modules", "Styled Components", "Radix UI", "Framer Motion"] },
      { "title": "Data & Backend Integration", "items": ["Node.js", "GraphQL", "REST APIs", "tRPC", "Prisma", "Supabase"] },
      { "title": "Auth", "items": ["NextAuth.js", "Clerk", "Supabase Auth", "Auth0"] },
      { "title": "Testing", "items": ["Jest", "Cypress", "React Testing Library", "Playwright"] },
      { "title": "Deployment & Infra", "items": ["Vercel", "AWS", "Docker", "CI/CD Pipelines (GitHub Actions)"] }
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
        "cta_text": "Hire Dedicated Developer",
        "description": "Full-time developer, embedded in your sprint cycle and roadmap.",
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
        "description": "20 hours a week, ideal for advisory work, code review, or supporting an existing team.",
        "is_featured": false,
        "features": ["20 hours a week", "Advisory work", "Code review"]
      },
      {
        "name": "Hourly",
        "unit": "hour",
        "badge": "Pay As You Go",
        "price": "Custom",
        "cta_url": "#contact-form",
        "cta_text": "Start Hourly Work",
        "description": "For short, well scoped tasks, a proof of concept, or an architecture audit.",
        "is_featured": false,
        "features": ["Short, well scoped tasks", "Proof of concept", "Prompt architecture audit"]
      }
    ];
  }

  // Sec 07: BENEFITS ("Why ResourceCoder")
  const whyResourceBlock = content.blocks.find(b => b.type === 'benefits' && b.title.includes('Why ResourceCoder'));
  if (whyResourceBlock) {
    whyResourceBlock.subtitle = "Built for teams that need real Next.js depth, not general React familiarity with a different label.";
    whyResourceBlock.paragraph = "Our Guarantees"; 
    whyResourceBlock.items = [
      {
        "label": "Pre-Vetted for Next.js Specifically",
        "text": "We screen for real Next.js architecture experience, rendering strategies, and app router knowledge, not just general React familiarity."
      },
      {
        "label": "Real Time-Zone Overlap",
        "text": "Our developers align their working hours with your core team, ensuring real-time collaboration, immediate unblocking, and synchronized daily stand-ups."
      },
      {
        "label": "Replacement Guarantee",
        "text": "If a developer isn't the perfect fit for your workflow, we will replace them immediately at no additional cost to ensure your project stays on track."
      },
      {
        "label": "You Retain Full IP Ownership",
        "text": "From the first line of code written, your company maintains full, exclusive intellectual property rights and code ownership."
      }
    ];
  }

  // Sec 08: FAQ
  const faqsBlock = content.blocks.find(b => b.type === 'faqs');
  if (faqsBlock) {
    faqsBlock.title = "Frequently Asked Questions";
    faqsBlock.subtitle = "Answers to common questions about hiring a dedicated Next.js developer through ResourceCoder.";
    faqsBlock.items = [
      {
        "question": "How much does it cost to hire a Next.js developer through ResourceCoder?",
        "answer": "Costs run 40 to 60% below typical local market rates in the UK, UAE, US, and EU, with final pricing depending on seniority and engagement type (monthly, part time, or hourly)."
      },
      {
        "question": "Is there a minimum contract or notice period?",
        "answer": "No long term lock in. Monthly engagements can be adjusted or ended with 2 weeks notice."
      },
      {
        "question": "What happens if the developer is not a good fit?",
        "answer": "We replace them at no extra cost, with a new shortlist typically ready within 48 hours."
      },
      {
        "question": "Who owns the code, models, and prompts my developer creates?",
        "answer": "You do, fully and exclusively. ResourceCoder retains no IP rights over any work product."
      },
      {
        "question": "Can the developer work in my time zone?",
        "answer": "Yes. We specifically match for working hours overlap so your developer is available during your team core hours, not just asynchronously."
      }
    ];
  }

  const { error: updateError } = await supabase.from('pages').update({ content }).eq('id', existing.id);
  if (updateError) {
    console.error("Error updating:", updateError);
  } else {
    console.log("Successfully updated next-js-developer page!");
  }
}
run();
