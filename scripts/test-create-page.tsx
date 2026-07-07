const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const envContent = fs.readFileSync(path.join(__dirname, '..', '.env'), 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let val = match[2] || '';
    if (val.startsWith('"') && val.endsWith('"')) {
      val = val.substring(1, val.length - 1);
    }
    env[match[1]] = val.trim();
  }
});

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function runTest() {
  const defaultBlocks = [
    { type: "hero", title: "Expert ReactJS Developers", subtitle: "Build fast, scalable web apps with Krazio", description: "Hire dedicated programmers.", primaryCta: "Hire React Developer", primaryCtaUrl: "#contact-form", secondaryCta: "View Portfolio", secondaryCtaUrl: "#contact-form" },
    { type: "benefits", title: "Why Hire Developers From Us", subtitle: "Trusted by top enterprises", paragraph: "Key Benefits", items: [{ label: "Front-end Mastery", text: "Clean and scalable front-end code architectures." }], btnText: "Consult Our Process", btnUrl: "/our-development-process" },
    { type: "services", title: "Development Services", subtitle: "We build modern interfaces.", items: [{ name: "Product Development", icon: "react", description: "Bug-free application development." }] },
    { type: "pricing", title: "Flexible Engagement Models", subtitle: "Choose the pricing model", plans: [{ name: "Hourly", price: "20", unit: "hour", badge: "Pay As You Go", description: "NDA secured contracts", cta_text: "Get Started", cta_url: "#contact-form", is_featured: false, features: ["Flexible terms"] }], bottomCtaText: "Schedule Interview", bottomCtaUrl: "#contact-form" },
    { type: "interview", badge: "Available Now", title: "Schedule a Developer Interview", subtitle: "Onboard industry experts.", stat1Val: "48hrs", stat1Lbl: "Onboarding time", stat2Val: "98%", stat2Lbl: "Success rate", formTitle: "Describe your project" },
    { type: "cta", title: "Ready to Start?", subtitle: "Get a free technical consultation today.", buttonText: "Schedule Call", buttonUrl: "#contact-form" }
  ];

  console.log("Testing insert into 'pages' with default blocks payload...");
  const { data, error } = await supabase
    .from('pages')
    .insert({
      title: "Test Page Insert with Blocks",
      slug: "test-page-insert-blocks-slug",
      content: { blocks: defaultBlocks }
    })
    .select();

  if (error) {
    console.error("Supabase Error Details:", error);
  } else {
    console.log("Successfully inserted page:", data);
    
    // Clean it up
    await supabase.from('pages').delete().eq('slug', 'test-page-insert-blocks-slug');
    console.log("Cleaned up test page.");
  }
}

runTest();
