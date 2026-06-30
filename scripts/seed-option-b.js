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

async function seed() {
  console.log("Seeding Option B tables in Supabase...");

  // 1. Seed Texts
  console.log("Seeding 'texts' table...");
  const textsToSeed = [
    { name: "hero_heading", value: "Hire ReactJS Developer" },
    { name: "hero_subheading", value: "Looking to hire dedicated ReactJS developers? Get access to a skilled, experienced, and cost-effective team to build cutting-edge software solutions tailored to your business needs." },
    { name: "about_paragraph", value: "We build scalable, high-performance web applications using industry best practices and clean, maintainable code structures." },
    { name: "services_heading", value: "ReactJS Development Services <br /> Where Front-end Evolution Begins" },
    { name: "services_desc", value: "We are experts in building high-quality web applications with industry-vetted experience in extensive React JS development services. Hire React developers with hands-on expertise and skills that align with your business requirements." },
    { name: "services_list", value: JSON.stringify([
      { title: "ReactJS Product Development", desc: "Get bug-free and result-driven custom ReactJS product development services to build your next-generation apps that specify your business needs." },
      { title: "ReactJS Front-End Development", desc: "Leverage our React front end developer's skill to build effective SPAs, multiple architectures, and real-time data exchange applications." },
      { title: "React Native App Development", desc: "At Krazio, our top ReactJS developers are well-versed in building cross-platform native applications with 100% guaranteed satisfaction." },
      { title: "ReactJS Website Migration", desc: "Hire React developers with proven expertise in migrating or upgrading your existing web app to the ReactJS platform without losing your data." }
    ]) },
    { name: "expertise_heading", value: "Technical Expertise of Our React Developers" },
    { name: "expertise_desc", value: "Hire React developer from us who are well-versed in a vast set of best-in-class tools, state-of-the-art technologies, and modern approaches to scale your business application development." },
    { name: "expertise_list", value: JSON.stringify([
      { title: "Core & Languages", items: ["JavaScript (ES5/ES6)", "TypeScript", "React JS", "HTML5 / CSS3"] },
      { title: "Frameworks", items: ["Next.js", "Gatsby", "Remix", "Svelte"] },
      { title: "State Management", items: ["Redux / Toolkit", "Context API", "Zustand", "MobX / Recoil"] },
      { title: "Libraries & APIs", items: ["React Query", "Apollo Client", "REST / GraphQL", "Framer Motion"] },
      { title: "Testing Tools", items: ["Jest / Enzyme", "React Testing Library", "Cypress", "Mocha / Chai"] },
      { title: "UI Libraries", items: ["Tailwind CSS", "Material-UI", "Ant Design", "ShadCN"] },
      { title: "Cloud & Database", items: ["AWS / GCP / Azure", "Firebase / Firestore", "MongoDB / PostgreSQL", "MySQL / DynamoDB"] },
      { title: "DevOps & CI/CD", items: ["Docker / Kubernetes", "GitHub Actions", "Jenkins / CircleCI", "Vercel / Netlify"] }
    ]) },
    { name: "interview_badge", value: "Available Now" },
    { name: "interview_heading", value: "Schedule a Developer Interview & Get a <span class=\"bg-gradient-to-r from-[#0049FF] to-[#270BDE] bg-clip-text text-transparent\">05 Day Risk-Free Trial</span> 🚀" },
    { name: "interview_desc", value: "We make hiring seamless by matching you with the right developer based on your specific requirements. Interview our experts, assess their skills, and start risk-free for 05 days—no commitment, just results!" },
    { name: "interview_stat1_val", value: "48hrs" },
    { name: "interview_stat1_lbl", value: "Average onboarding time" },
    { name: "interview_stat2_val", value: "98%" },
    { name: "interview_stat2_lbl", value: "Client retention rate" },
    { name: "interview_form_title", value: "Tell us about your project" }
  ];

  for (const item of textsToSeed) {
    const { error } = await supabase.from("texts").upsert(item, { onConflict: "name" });
    if (error) {
      console.error(`Error seeding text '${item.name}':`, error.message);
    }
  }

  // 2. Seed FAQs
  console.log("Seeding 'faqs' table...");
  // First clear existing
  await supabase.from("faqs").delete().neq("question", "");
  
  const faqsToSeed = [
    {
      question: "How can I hire React developer for 15 days Risk free trial?",
      answer: "You can hire React developer from Krazio for a 15-day risk-free trial in 3 easy steps: connect with our experts, share your requirements, and get a vetted developer according to your specific needs. You can evaluate the work done by the hired resource, and after 15 days, if you are unsatisfied, you can cancel without any charges. No upfront commitment is required.",
      position: 1
    },
    {
      question: "How much does it cost to hire Reactjs developer?",
      answer: "We have simple and transparent pricing. We let you hire experienced React developers at a rate of per hour with an average experience of 3+ years. However, the cost may vary depending on your query and the expertise of our developer. If you want to hire a team of React developers, we have customized rates for you; please contact us to know more details.",
      position: 2
    },
    {
      question: "What are the hiring engagement options available at Krazio?",
      answer: "We provide three types of hiring engagement models: 1. Dedicated Developer (Monthly): 160 Hours a Month. 8 hours a day, 5 days a week. 2. Hourly Basis: We use time-tracking tools like time doctor and Hubstaff. 3. Fixed Based: Share your requirements, and we'll evaluate and provide a detailed estimation of time and cost.",
      position: 3
    },
    {
      question: "Do you provide support and maintenance services after deployment?",
      answer: "Yes, we do provide support and maintenance services after successful Reactjs project completion. Our after services include bug fixes, framework upgrade, continuous monitoring, and technical glitch resolution for the enhancements of your Reactjs product.",
      position: 4
    },
    {
      question: "What if I am not satisfied with the hired Reactjs developer's work and would like to exit?",
      answer: "We understand that every project requires different skills, so we can provide you with a free replacement to continue our business relationship, and even after that if you are not satisfied, we can terminate the contract with a 2-week notice. The termination invoice shall specify all unpaid work and the remaining work done until the termination date.",
      position: 5
    }
  ];

  const { error: faqErr } = await supabase.from("faqs").insert(faqsToSeed);
  if (faqErr) {
    console.error("Error seeding FAQs:", faqErr.message);
  }

  // 3. Seed Pricing
  console.log("Seeding 'pricing' table...");
  // First clear existing
  await supabase.from("pricing").delete().neq("name", "");

  const pricingToSeed = [
    {
      name: "Hourly",
      price: "$20",
      unit: "hour",
      position: 1,
      badge: "Pay As You Go",
      description: "Perfect for short-term projects or specific tasks. We'll provide a fully signed NDA for your Project's confidentiality.",
      cta_text: "Get Started Hourly",
      is_featured: false,
      features: ["Flexible hours", "Time tracking reports", "Direct communication"]
    },
    {
      name: "Dedicated ReactJS Developer",
      price: "$2880",
      unit: "month",
      position: 2,
      badge: "Most Popular",
      description: "When you seek a long-term partnership with a limited budget and in less time, hire our experienced developers monthly.",
      cta_text: "Hire Dedicated Team",
      is_featured: true,
      features: ["160 hours per month", "8 hours a day, 5 days a week", "Dedicated Project Manager", "Daily stand-ups & reporting"]
    },
    {
      name: "Fixed Cost Solution",
      price: "Custom",
      unit: "",
      position: 3,
      badge: "Project Based",
      description: "Got a clear scope and requirements? We'll provide a detailed estimation of your project along with time and cost.",
      cta_text: "Get a Quote",
      is_featured: false,
      features: ["Fixed timeline & budget", "Ensure Timely Delivery", "Milestone based payments"]
    }
  ];

  const { error: pricingErr } = await supabase.from("pricing").insert(pricingToSeed);
  if (pricingErr) {
    console.error("Error seeding pricing:", pricingErr.message);
  }

  console.log("Seeding script execution finished.");
}

seed();
