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

export default function GameModeling3DPage() {
  const services = [
    {
      title: "3D Modeling for Games",
      desc: "Create breathtaking 3D assets that serve as the foundation of your game. Our models are highly detailed and optimized for any engine.",
      icon: "gamepad"
    },
    {
      title: "3D Modeling for Console & PC Games",
      desc: "Delivering high-poly models tailored for advanced rendering capabilities of modern consoles and high-end gaming PCs.",
      icon: "monitor"
    },
    {
      title: "3D Modeling for Environmental & Industry",
      desc: "Design realistic and immersive environments, props, and architectural visualizations that set the perfect scene for your game.",
      icon: "box"
    },
    {
      title: "3D Modeling for Virtual Reality Games",
      desc: "Build highly optimized, low-latency 3D models specifically designed to maintain immersion in virtual reality experiences.",
      icon: "vr"
    },
    {
      title: "3D Character Design & Animation",
      desc: "From concept art to fully rigged characters, we breathe life into heroes and creatures with precise modeling and fluid animation.",
      icon: "user"
    },
    {
      title: "Custom 3D Modeling Services",
      desc: "Need something unique? We provide bespoke 3D modeling solutions tailored exactly to your game's unique artistic vision.",
      icon: "settings"
    }
  ];

  const tools = [
    "Autodesk Maya", "Blender", "ZBrush", "3ds Max", "Substance Painter", "Cinema 4D", "Unity", "Unreal Engine", "Marvelous Designer"
  ];

  const faqs = [
    {
      question: "What is 3D Modeling?",
      answer: "3D modeling is the process of creating a mathematical representation of any surface of an object in three dimensions using specialized software. The product is called a 3D model, which can be displayed as a two-dimensional image through a process called 3D rendering or used in a computer simulation of physical phenomena."
    },
    {
      question: "How long does it take to create a 3D model?",
      answer: "The time required to create a 3D model varies greatly depending on its complexity, detail, and intended use. A simple prop might take a few hours, while a highly detailed, fully rigged character can take several weeks."
    },
    {
      question: "What tools do you use for 3D modeling?",
      answer: "Our artists are proficient in industry-standard tools including Autodesk Maya, Blender, ZBrush, 3ds Max, Substance Painter, and Cinema 4D, depending on the specific requirements of the asset being created."
    },
    {
      question: "How much does 3D modeling cost?",
      answer: "The cost depends on the complexity of the models, the number of assets required, and the level of detail (low-poly vs. high-poly). We offer custom quotes after reviewing your project's concept art and requirements."
    },
    {
      question: "Do you offer rigging and animation?",
      answer: "Yes, we provide end-to-end 3D services. After modeling and texturing, our technical artists can provide a robust skeletal rig, followed by our animators bringing the asset to life with fluid motion."
    }
  ];

  const heroContentBlocks = {
    blocks: [
      { type: "header", data: { text: "3D Modeling For Games", level: 2 } },
      { type: "paragraph", data: { text: "Transforming visionary concepts into stunning 3D realities." } },
      { type: "paragraph", data: { text: "We specialize in high-quality 3D asset creation for multiple platforms, ensuring immersive and captivating visual experiences." } }
    ]
  };

  const servicesContentBlocks = {
    blocks: [
      { type: "header", data: { text: "3D Modeling Services For Games", level: 2 } },
      { type: "paragraph", data: { text: "Push the boundaries of visual fidelity with our custom 3D modeling services. We craft highly detailed characters, environments, and props that perfectly match your game's art direction." } }
    ]
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center animate-fade-in-up bg-white w-full">
      <HireHero
        btn1Text="Let's Talk"
        btn1Url="/#contact-form"
        image="/image 2269.svg"
        data={heroContentBlocks}
      >
        <AboutStats />
      </HireHero>
      
      <TrustedBy bgColor="bg-[#F9FAFB]" fadeColor="from-[#F9FAFB]" />

      <HireBenefits
        title="Why Choose Krazio for 3D Modeling Services?"
        description="With years of expertise in game art, our team delivers captivating 3D models tailored to your vision. We blend creativity with technical excellence to produce assets that stand out in a competitive market."
        benefitsTitle="Why Choose Us?"
        benefitsList={[
          'Proficient in Top 3D Modeling Tools', 
          'Specialized in High/Low Poly Gaming Assets', 
          'Dedicated QA & Pipeline Integration',
          'Agile & Collaborative Art Process'
        ]}
        btnText="Talk to our experts"
        btnUrl="/#contact-form"
      />

      <HireServices
        heading="3D Modeling Services For Games"
        description="Push the boundaries of visual fidelity with our custom 3D modeling services."
        servicesList={services}
        data={servicesContentBlocks}
      />

      <HireExpertise
        heading="3D Modeling Tools"
        description="We use the most advanced modeling, sculpting, and texturing software to create state-of-the-art 3D assets that meet the high standards of modern gaming."
        expertiseList={[
          { title: "Modeling & Sculpting", items: ["Autodesk Maya", "Blender", "ZBrush", "3ds Max"] },
          { title: "Texturing & Materials", items: ["Substance Painter", "Marvelous Designer"] },
          { title: "Engines & Rendering", items: ["Cinema 4D", "Unity", "Unreal Engine"] }
        ]}
      />

      <HomeCostCalculator />

      <HireInterview
        badge="ONBOARDING"
        heading="From Requirement to Onboarding"
        description="Give Your Game Ideas An Artistic Touch. Drive engagement, boost revenue, and achieve sustainable growth with Krazio."
        stat1Val="10+"
        stat1Lbl="Years Experience"
        stat2Val="232+"
        stat2Lbl="Projects Delivered"
        formTitle="Ready to start?"
      />

      <HireFAQ data={faqs} />

      <HireCTA
        title="Looking for an art team? Start a Conversation"
        subtitle="Bring your visionary game ideas to life with our expert 3D artists."
        btnText="Let's Talk"
        btnUrl="/#contact-form"
      />
      
      <ScrollToHash />
    </div>
  );
}
