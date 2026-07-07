const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Parse .env manually from the project root
const envPath = path.join(__dirname, '..', '.env');
if (!fs.existsSync(envPath)) {
  console.error("Error: .env file not found at project root.");
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    const key = match[1];
    let value = match[2] || '';
    if (value.length > 0 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
      value = value.replace(/^"|"/g, '');
    }
    env[key] = value.trim();
  }
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Error: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be configured in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log("Starting migration to JSON content...");

  // 1. Fetch Option B tables
  const [textsRes, faqsRes, pricingRes] = await Promise.all([
    supabase.from("texts").select("*"),
    supabase.from("faqs").select("*").order("position"),
    supabase.from("pricing").select("*").order("position")
  ]);

  const texts = {};
  if (textsRes.data) {
    textsRes.data.forEach((row) => {
      texts[row.name] = row.value;
    });
  }

  const faqs = faqsRes.data || [];
  const pricing = pricingRes.data || [];

  // Parse structured JSON arrays
  let benefitsList = [];
  if (texts.benefits_list) {
    try { benefitsList = JSON.parse(texts.benefits_list); } catch (e) {}
  }
  let storiesList = [];
  if (texts.stories_list) {
    try { storiesList = JSON.parse(texts.stories_list); } catch (e) {}
  }
  let servicesList = [];
  if (texts.services_list) {
    try { servicesList = JSON.parse(texts.services_list); } catch (e) {}
  }
  let expertiseList = [];
  if (texts.expertise_list) {
    try { expertiseList = JSON.parse(texts.expertise_list); } catch (e) {}
  }
  let pricingUrls = {};
  if (texts.pricing_urls) {
    try { pricingUrls = JSON.parse(texts.pricing_urls); } catch (e) {}
  }

  // Construct pricing plans
  const pricingPlans = pricing.map(plan => ({
    id: plan.id,
    name: plan.name,
    price: plan.price,
    unit: plan.unit,
    badge: plan.badge || "",
    description: plan.description || "",
    cta_text: plan.cta_text || "Get Started",
    cta_url: pricingUrls[plan.name] || pricingUrls[plan.id] || "",
    is_featured: plan.is_featured || false,
    features: plan.features || []
  }));

  // Construct the unified JSON content structure
  const pageContent = {
    hero: {
      title: texts.hero_heading || "Hire ReactJS Developer",
      subtitle: texts.hero_subheading || "",
      description: texts.about_paragraph || "",
      primaryCta: texts.hero_btn1_text || "Hire Now",
      primaryCtaUrl: texts.hero_btn1_url || "#contact-form",
      secondaryCta: texts.hero_btn2_text || "Schedule a Call",
      secondaryCtaUrl: texts.hero_btn2_url || "#contact-form"
    },
    intro: {
      title: texts.benefits_heading || "Why Hire ReactJS Developers From Us",
      subtitle: texts.benefits_desc || "",
      paragraph: texts.benefits_list_title || "",
      items: benefitsList,
      btnText: texts.benefits_btn_text || "Discover Our Process",
      btnUrl: texts.benefits_btn_url || "/our-development-process"
    },
    technologies: {
      title: texts.services_heading || "ReactJS Development Services",
      subtitle: texts.services_desc || "",
      items: servicesList.map(item => ({
        name: item.title,
        icon: "react",
        description: item.desc
      }))
    },
    frameworkDetails: {
      title: texts.expertise_heading || "Technical Expertise of Our React Developers",
      subtitle: texts.expertise_desc || "",
      items: expertiseList
    },
    useCases: {
      title: texts.stories_heading || "Our Amazing Customer Success Stories With ReactJS",
      subtitle: texts.stories_subtitle || "",
      items: storiesList
    },
    process: {
      badge: texts.interview_badge || "Available Now",
      title: texts.interview_heading || "",
      subtitle: texts.interview_desc || "",
      stat1Val: texts.interview_stat1_val || "48hrs",
      stat1Lbl: texts.interview_stat1_lbl || "Average onboarding time",
      stat2Val: texts.interview_stat2_val || "98%",
      stat2Lbl: texts.interview_stat2_lbl || "Client retention rate",
      formTitle: texts.interview_form_title || "Tell us about your project"
    },
    augmentation: {
      row1Title: texts.aug_row1_title || "Why Hire React JS Developers From Krazio?",
      row1P1: texts.aug_row1_p1 || "",
      row1P2: texts.aug_row1_p2 || "",
      row1Btn: texts.aug_row1_btn || "Consult an Expert",
      row1BtnUrl: texts.aug_row1_btn_url || "#contact-form",
      row2Title: texts.aug_row2_title || "ReactJS Team Augmentation",
      row2P1: texts.aug_row2_p1 || "",
      row2P2: texts.aug_row2_p2 || "",
      row2Btn: texts.aug_row2_btn || "Scale Your Team",
      row2BtnUrl: texts.aug_row2_btn_url || "#contact-form"
    },
    pricing: {
      title: "Flexible Engagement Models",
      subtitle: "Flexible pricing plans designed to scale with your project",
      plans: pricingPlans,
      bottomCtaText: texts.pricing_bottom_cta_text || "Schedule a Developer Interview",
      bottomCtaUrl: texts.pricing_bottom_cta_url || "#contact-form"
    },
    faqs: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know",
      items: faqs.map(item => ({
        question: item.question,
        answer: item.answer
      }))
    },
    cta: {
      title: texts.cta_title || "Ready to Build With React?",
      subtitle: texts.cta_subtitle || "",
      buttonText: texts.cta_btn_text || "Get a Free Consultation",
      buttonUrl: texts.cta_btn_url || "#contact-form"
    }
  };

  const pagesToSeed = [
    { slug: "hire-reactjs-developer", title: "Hire ReactJS Developer" },
    { slug: "hire-team", title: "Hire Team" }
  ];

  for (const pageInfo of pagesToSeed) {
    console.log(`Migrating page: ${pageInfo.title} (${pageInfo.slug})...`);
    const { data: page, error: checkErr } = await supabase
      .from("pages")
      .select("id")
      .eq("slug", pageInfo.slug)
      .maybeSingle();

    if (page) {
      const { error: updateErr } = await supabase
        .from("pages")
        .update({ content: pageContent })
        .eq("id", page.id);
      if (updateErr) {
        console.error(`Error updating ${pageInfo.slug}:`, updateErr.message);
      } else {
        console.log(`Successfully updated ${pageInfo.slug} content!`);
      }
    } else {
      const { error: insertErr } = await supabase
        .from("pages")
        .insert({
          title: pageInfo.title,
          slug: pageInfo.slug,
          content: pageContent
        });
      if (insertErr) {
        console.error(`Error inserting ${pageInfo.slug}:`, insertErr.message);
      } else {
        console.log(`Successfully created and populated ${pageInfo.slug}!`);
      }
    }
  }

  console.log("Migration complete!");
}

run();
