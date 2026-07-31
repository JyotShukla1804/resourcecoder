"use client";

import React from "react";
import { AboutStats } from "@/components/AboutStats";
import {
  HireHero,
  TrustedBy,
  HireBenefits,
  HireServices,
  HomeCostCalculator,
  HireInterview,
  HireExpertise,
  HireFAQ,
  HireCTA,
  ScrollToHash
} from "@/components";

export default function GameDevelopment3DPage() {
  const services = [
    {
      title: "Custom 3D Game Development",
      desc: "Our skilled developers specialize in building unique and tailored 3D games for mobile, console, and PC, ensuring high engagement and performance.",
      icon: "gamepad"
    },
    {
      title: "AR/VR 3D Game Development Services",
      desc: "Crafting immersive mixed-reality experiences with state-of-the-art AR/VR technology, keeping players at the center of the gaming universe.",
      icon: "vr"
    },
    {
      title: "Cross-Platform 3D Game Development",
      desc: "From concept to launch, we develop cross-platform games using Unity, ensuring your game reaches a broader audience without compromising quality.",
      icon: "smartphone"
    },
    {
      title: "App UI/UX Design & Prototyping Services",
      desc: "Engaging mechanics and interactive user interfaces are at the core of our development process. We create intuitive layouts that keep players hooked.",
      icon: "palette"
    },
    {
      title: "3D Game Testing & Quality Assurance",
      desc: "Rigorous testing guarantees a bug-free, seamless gaming experience. Our QA team ensures that your game performs exceptionally on all devices.",
      icon: "check"
    },
    {
      title: "3D Game Maintenance & Post-launch Support",
      desc: "We provide continuous support and maintenance updates to keep your game relevant, ensuring optimal performance and user satisfaction long after release.",
      icon: "refresh"
    }
  ];

  const genres = [
    "Action Games", "Casual Games", "Educational Games", "Puzzle Games", 
    "RPG Games", "Simulation Games", "Sports Games", "Strategy Games", "VR/AR Games"
  ];

  const faqs = [
    {
      question: "What is 3D Game Development?",
      answer: "3D game development is the process of creating video games with three-dimensional graphics and environments, allowing players to interact with a highly realistic and immersive digital world. This involves specialized software like Unity or Unreal Engine for modeling, animation, and coding."
    },
    {
      question: "How long does it take to develop a 3D game?",
      answer: "The timeline for developing a 3D game varies greatly depending on the game's complexity, features, and platform. A simple mobile 3D game might take a few months, while a complex console title could take several years."
    },
    {
      question: "Which platforms do you develop 3D games for?",
      answer: "We develop 3D games for a wide range of platforms, including PC, consoles (PlayStation, Xbox), mobile devices (iOS, Android), and emerging platforms like VR and AR headsets."
    },
    {
      question: "How much does 3D game development cost?",
      answer: "The cost of 3D game development depends on factors such as game scale, required graphics fidelity, multiplayer capabilities, and target platforms. We offer customized quotes based on a thorough analysis of your project requirements."
    },
    {
      question: "Do you provide game design services as well?",
      answer: "Yes, we offer comprehensive game design services, including concept art, level design, UI/UX design, and game mechanics planning, ensuring a cohesive and engaging player experience from start to finish."
    }
  ];

  const heroContentBlocks = {
    blocks: [
      { type: "header", data: { text: "3D Game Development Company", level: 2 } },
      { type: "paragraph", data: { text: "Transforming visionary ideas into stunning 3D realities." } },
      { type: "paragraph", data: { text: "We specialize in high-quality 3D game development for multiple platforms, ensuring immersive experiences that engage and captivate your players." } }
    ]
  };

  const servicesContentBlocks = {
    blocks: [
      { type: "header", data: { text: "Explore Top-notch Unity 3D Game Development Services", level: 2 } },
      { type: "paragraph", data: { text: "Deliver unmatchable gaming solutions with Krazio. Enhance user engagement with robust game architectures, visually stunning environments, and fluid gameplay tailored for any platform." } }
    ]
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center animate-fade-in-up bg-white w-full">
      <HireHero
        btn1Text="Schedule a Call"
        btn1Url="/#contact-form"
        image="/mission-team.png"
        data={heroContentBlocks}
      >
        <AboutStats />
      </HireHero>
      
      <TrustedBy bgColor="bg-[#F9FAFB]" fadeColor="from-[#F9FAFB]" />

      <HireBenefits
        title="Why Hire Krazio for 3D Game Development"
        description="With years of expertise in game development, our team delivers captivating 3D experiences tailored to your vision. We blend creativity with technical excellence to produce games that stand out in a competitive market."
        benefitsTitle="Why Choose Us?"
        benefitsList={[
          'Proficient in Unity & Unreal Engine', 
          'Specialized in Multiplayer & AR/VR', 
          'Dedicated QA & Post-launch Support',
          'Agile & Collaborative Process'
        ]}
        btnText="Talk to our experts"
        btnUrl="/#contact-form"
      />

      <HireServices
        heading="Explore Top-notch Unity 3D Game Development Services"
        description="Deliver unmatchable gaming solutions with Krazio."
        servicesList={services}
        data={servicesContentBlocks}
      />

      <HireExpertise
        heading="Game Genres We Cover"
        description="We create immersive and engaging experiences across a wide variety of gaming categories to suit your target audience."
        expertiseList={[
          { title: "Action & Combat", items: ["Action & Adventure", "First-Person Shooters (FPS)"] },
          { title: "Immersive & World-Building", items: ["Role-Playing Games (RPG)", "Multiplayer Online (MMO)"] },
          { title: "Tactical & Simulation", items: ["Simulation & Sports", "Strategy & Puzzle"] }
        ]}
      />

      <HomeCostCalculator />

      <HireInterview
        badge="ONBOARDING"
        heading="From Requirement to Onboarding"
        description="Empower your business with cutting-edge 3D game development solutions. Drive engagement, boost revenue, and achieve sustainable growth."
        stat1Val="10+"
        stat1Lbl="Years Experience"
        stat2Val="232+"
        stat2Lbl="Projects Delivered"
        formTitle="Ready to start?"
      />

      <HireFAQ data={faqs} />

      <HireCTA
        title="Looking for a game dev team? Start a Conversation"
        subtitle="Bring your visionary game ideas to life with our expert 3D development team."
        btnText="Let's Talk"
        btnUrl="/#contact-form"
      />
      
      <ScrollToHash />
    </div>
  );
}
