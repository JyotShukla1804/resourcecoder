const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://tqmbzpkbbnvfbxtqtnnm.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbWJ6cGtiYm52ZmJ4dHF0bm5tIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTUwNjA2NCwiZXhwIjoyMDk3MDgyMDY0fQ.55hk9-ia3DeyClr_VDfUQ3lkmNowPFCqLMkIkoju0Zo';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function run() {
  const { data: existing, error } = await supabase.from('pages').select('*').eq('slug', 'vue-js-developer').maybeSingle();
  if (error || !existing) {
    console.error("Not found or error:", error);
    return;
  }

  const content = existing.content;

  // Sec 01: HERO
  const heroBlock = content.blocks.find(b => b.type === 'hero');
  if (heroBlock) {
    heroBlock.subtitle = "Dedicated Vue.js developers, embedded in your sprint. Monthly billing, 40–60% cost savings, shortlisted in 48 hours.";
    heroBlock.description = "When you hire a Vue.js developer through ResourceCoder, you get an engineer experienced with the Composition API, Pinia, and Vue's reactivity system. Your developer works inside your sprint cycle and reports directly to your tech lead. Billing is monthly, with full IP ownership retained by you.";
    heroBlock.secondaryCta = ""; // Make sure this is removed
  }

  // Sec 02: BENEFITS ("Why Hire")
  const whyHireBlock = content.blocks.find(b => b.type === 'benefits' && b.title.includes('Why Hire'));
  if (whyHireBlock) {
    whyHireBlock.subtitle = "Skip the six-month hiring process. Get a production-ready Vue.js developer this month.";
    whyHireBlock.paragraph = "What You Get";
    whyHireBlock.items = [
      whyHireBlock.items[0], // Keep existing if needed
      {
        "label": "Dedicated Ownership, Not Shared Attention",
        "text": "Your developer is a full-time extension of your in-house engineering team. They work exclusively on your codebase and roadmap."
      },
      {
        "label": "Onboarding Within a Week",
        "text": "Skip the resume screening and technical panel rounds. We provide a shortlist of highly qualified, pre-vetted Vue.js developers within 48 hours, ready to start committing code within a week."
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
    servicesBlock.subtitle = "From SaaS dashboards to Nuxt-powered sites, built with Vue's reactivity model at the core.";
    servicesBlock.items = [
      {
        "icon": "react",
        "name": "SaaS dashboards with reactive data",
        "description": "Composition API + Pinia for clean state management."
      },
      {
        "icon": "seo",
        "name": "Nuxt-powered marketing and product sites",
        "description": "SSR/SSG alongside a fully interactive app."
      },
      {
        "icon": "react",
        "name": "Vue 2→3 migrations",
        "description": "Refactoring aging Vue 2 applications to Vue 3 with the Composition API for improved performance and maintainability."
      },
      {
        "icon": "react",
        "name": "Complex form workflows",
        "description": "Building dynamic, multi-step reactive forms with cross-field validation."
      },
      {
        "icon": "react",
        "name": "Design system implementation",
        "description": "Creating reusable, accessible component libraries tailored to your brand using Vue."
      },
      {
        "icon": "react",
        "name": "Real-time interfaces",
        "description": "Building performant real-time applications leveraging WebSockets and Vue's reactivity system."
      }
    ];
  }

  // Sec 04: EXPERTISE ("Skills & Tech Stack")
  const expertiseBlock = content.blocks.find(b => b.type === 'expertise');
  if (expertiseBlock) {
    expertiseBlock.subtitle = "The modern Vue ecosystem, from Composition API to deployment.";
    expertiseBlock.items = [
      { "title": "Core", "items": ["Vue 3 (Composition API)", "Vue 2 (Options API)", "TypeScript"] },
      { "title": "Meta-framework", "items": ["Nuxt 3"] },
      { "title": "State Management", "items": ["Pinia", "Vuex"] },
      { "title": "Forms & Validation", "items": ["Vuelidate", "VeeValidate"] },
      { "title": "Styling", "items": ["Tailwind CSS", "CSS Modules", "Styled Components"] },
      { "title": "Testing", "items": ["Vitest", "Cypress", "Vue Test Utils", "Playwright"] },
      { "title": "Build Tooling", "items": ["Vite", "Webpack"] },
      { "title": "API Integration", "items": ["Axios", "GraphQL (Apollo)", "REST APIs"] }
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
        "features": ["80 hours per month", "Advisory work", "Code review"]
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
        "features": ["Short, well scoped tasks", "Proof of concept", "Architecture audit"]
      }
    ];
  }

  // Sec 07: BENEFITS ("Why ResourceCoder")
  const whyResourceBlock = content.blocks.find(b => b.type === 'benefits' && b.title.includes('Why ResourceCoder'));
  if (whyResourceBlock) {
    whyResourceBlock.subtitle = "Built for teams that need real Vue depth, not general frontend familiarity mislabeled as Vue expertise.";
    whyResourceBlock.paragraph = "Our Guarantees"; 
    whyResourceBlock.items = [
      {
        "label": "Pre-Vetted for Vue Specifically",
        "text": "We screen for real Vue architecture experience, reactivity system knowledge, and state management, not just general frontend familiarity."
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
    faqsBlock.subtitle = "Answers to common questions about hiring a dedicated Vue.js developer through ResourceCoder.";
    faqsBlock.items = [
      {
        "question": "How much does it cost to hire a Vue.js developer through ResourceCoder?",
        "answer": "Costs run 40 to 60% below typical local market rates in the UK, UAE, US, and EU, with final pricing depending on seniority and engagement type (monthly, part-time, or hourly)."
      },
      {
        "question": "Is there a minimum contract or notice period?",
        "answer": "No long-term lock-in. Monthly engagements can be adjusted or ended with standard notice periods."
      },
      {
        "question": "What happens if the developer is not a good fit?",
        "answer": "We offer a strict replacement guarantee. We will replace them at no extra cost, with a new shortlist typically ready within 48 hours."
      },
      {
        "question": "Who owns the intellectual property and source code?",
        "answer": "You do, fully and exclusively. ResourceCoder retains no IP rights over any work product."
      },
      {
        "question": "Can the developer work in my time zone?",
        "answer": "Yes. We specifically match for working-hours overlap so your developer is available during your team's core hours, ensuring seamless real-time communication."
      }
    ];
  }

  const { error: updateError } = await supabase.from('pages').update({ content }).eq('id', existing.id);
  if (updateError) {
    console.error("Error updating:", updateError);
  } else {
    console.log("Successfully updated vue-js-developer page!");
  }
}
run();
