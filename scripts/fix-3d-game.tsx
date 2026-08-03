const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://tqmbzpkbbnvfbxtqtnnm.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbWJ6cGtiYm52ZmJ4dHF0bm5tIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTUwNjA2NCwiZXhwIjoyMDk3MDgyMDY0fQ.55hk9-ia3DeyClr_VDfUQ3lkmNowPFCqLMkIkoju0Zo';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function fix() {
  const content = {
    blocks: [
      {
        type: "hero",
        title: "3D Game Development Company",
        subtitle: "Turn your ideas into reality by hiring 3D game developers",
        description: "Start building your game with the top 1% of 3D game developers who are ready to turn your concept into reality.",
        primaryCta: "HIRE PROS >",
        primaryCtaUrl: "#contact-form",
        secondaryCta: "",
        secondaryCtaUrl: ""
      },
      {
        type: "benefits",
        title: "Why Hire Krazio for 3D Game Development",
        subtitle: "Lorem ipsum dolor sit amet consectetur. Enim dui sed feugiat consectetur sit at elit vitae. Ac arcu elit et eu mattis amet eu sem proin. Amet sit risus mauris vel.",
        paragraph: "Why Choose Us?",
        btnText: "Talk to our experts",
        btnUrl: "#contact-form",
        items: [
          { label: "Proficient in Unity & Unreal Engine" },
          { label: "Specialized in Multiplayer & AR/VR" },
          { label: "Dedicated QA & Post-launch Support" },
          { label: "Agile & Collaborative Process" }
        ]
      },
      {
        type: "services",
        title: "Explore Top-notch Unity 3D Game Development Services",
        subtitle: "Deliver unmatchable gaming solutions with Krazio.",
        items: [
          { name: "Custom 3D Game Development", description: "Our skilled developers specialize in building unique and tailored 3D games for mobile, console, and PC, ensuring high engagement and performance." },
          { name: "AR/VR 3D Game Development Services", description: "Crafting immersive mixed-reality experiences with state-of-the-art AR/VR technology, keeping players at the center of the gaming universe." },
          { name: "Cross-Platform 3D Game Development", description: "From concept to launch, we develop cross-platform games using Unity, ensuring your game reaches a broader audience without compromising quality." },
          { name: "App UI/UX Design & Prototyping Services", description: "Engaging mechanics and interactive user interfaces are at the core of our development process. We create intuitive layouts that keep players hooked." },
          { name: "3D Game Testing & Quality Assurance", description: "Rigorous testing guarantees a bug-free, seamless gaming experience. Our QA team ensures that your game performs exceptionally on all devices." },
          { name: "3D Game Maintenance & Post-launch Support", description: "We provide continuous support and maintenance updates to keep your game relevant, ensuring optimal performance and user satisfaction long after release." }
        ]
      },
      {
        type: "expertise",
        title: "Game Genres We Cover",
        subtitle: "We create immersive and engaging experiences across a wide variety of gaming categories to suit your target audience.",
        items: [
          { title: "Action & Combat", items: ["Action & Adventure", "First-Person Shooters (FPS)"] },
          { title: "Immersive & World-Building", items: ["Role-Playing Games (RPG)", "Multiplayer Online (MMO)"] },
          { title: "Tactical & Simulation", items: ["Simulation & Sports", "Strategy & Puzzle"] }
        ]
      },
      {
        type: "pricing",
        title: "Calculate Candidate Salary",
        subtitle: "",
        plans: []
      },
      {
        type: "interview",
        badge: "ONBOARDING",
        title: "From Requirement to Onboarding",
        subtitle: "Empower your business with cutting-edge 3D game development solutions. Drive engagement, boost revenue, and achieve sustainable growth.",
        stat1Val: "10+",
        stat1Lbl: "Years Experience",
        stat2Val: "232+",
        stat2Lbl: "Projects Delivered",
        formTitle: "Ready to start?"
      },
      {
        type: "faqs",
        items: [
          { question: "What is 3D Game Development?", answer: "3D game development is the process of creating video games with three-dimensional graphics and environments, allowing players to interact with a highly realistic and immersive digital world. This involves specialized software like Unity or Unreal Engine for modeling, animation, and coding." },
          { question: "How long does it take to develop a 3D game?", answer: "The timeline for developing a 3D game varies greatly depending on the game's complexity, features, and platform. A simple mobile 3D game might take a few months, while a complex console title could take several years." },
          { question: "Which platforms do you develop 3D games for?", answer: "We develop 3D games for a wide range of platforms, including PC, consoles (PlayStation, Xbox), mobile devices (iOS, Android), and emerging platforms like VR and AR headsets." },
          { question: "How much does 3D game development cost?", answer: "The cost of 3D game development depends on factors such as game scale, required graphics fidelity, multiplayer capabilities, and target platforms. We offer customized quotes based on a thorough analysis of your project requirements." },
          { question: "Do you provide game design services as well?", answer: "Yes, we offer comprehensive game design services, including concept art, level design, UI/UX design, and game mechanics planning, ensuring a cohesive and engaging player experience from start to finish." }
        ]
      },
      {
        type: "cta",
        title: "Looking for a game dev team? Start a Conversation",
        subtitle: "Bring your visionary game ideas to life with our expert 3D development team.",
        buttonText: "Let's Talk",
        buttonUrl: "#contact-form"
      }
    ]
  };

  const { data: existing } = await supabase.from('pages').select('id').eq('slug', '3d-game-development').maybeSingle();
  if (existing) {
    console.log("Updating 3D Game Development DB record...");
    await supabase.from('pages').update({ content }).eq('id', existing.id);
  } else {
    console.log("Record not found!");
  }

  // Delete the hardcoded directory so the dynamic route handles it
  const dirPath = './src/app/hire-team/3d-game-development';
  if (fs.existsSync(dirPath)) {
    console.log("Removing hardcoded directory:", dirPath);
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
}

fix().catch(console.error);
