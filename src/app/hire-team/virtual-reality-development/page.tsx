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

export default function VirtualRealityDevelopmentPage() {
  const vrServices = [
    {
      title: "VR Software Consulting Services",
      desc: "We analyze your business needs and offer strategic VR consulting to ensure your virtual reality project aligns perfectly with your goals and maximizes ROI.",
      icon: "lightbulb"
    },
    {
      title: "VR 3D Design & UI/UX",
      desc: "Our creative team builds intuitive and stunning 3D environments with immersive UI/UX that keep users engaged and deliver a seamless virtual experience.",
      icon: "palette"
    },
    {
      title: "Custom VR App Development",
      desc: "End-to-end development of custom VR applications tailored to your specific industry needs, ensuring high performance and platform compatibility.",
      icon: "settings"
    },
    {
      title: "VR Game Development",
      desc: "We create captivating and interactive VR games with realistic physics, compelling storylines, and multiplayer capabilities for ultimate entertainment.",
      icon: "gamepad"
    },
    {
      title: "VR Support & Maintenance",
      desc: "Continuous post-launch support and regular updates to ensure your VR application runs flawlessly and stays ahead of technological advancements.",
      icon: "wrench"
    },
    {
      title: "VR Integration Services",
      desc: "Seamlessly integrate VR solutions with your existing enterprise systems, IoT devices, and smart hardware for a unified digital ecosystem.",
      icon: "link"
    },
    {
      title: "AR/VR Prototyping",
      desc: "Rapid prototyping of your AR/VR ideas to validate concepts, test user interactions, and secure stakeholder buy-in before full-scale development.",
      icon: "flask"
    },
    {
      title: "WebVR Development",
      desc: "Browser-based VR experiences that require no app downloads, making immersive content easily accessible to a wider audience directly on the web.",
      icon: "globe"
    },
    {
      title: "Metaverse Development",
      desc: "Build interconnected virtual worlds and decentralized economies. We help you establish a strong presence in the rapidly growing Metaverse.",
      icon: "box"
    }
  ];

  const hardwareIntegrations = [
    "Oculus Rift", "HTC Vive", "PlayStation VR", "Samsung Gear VR", "Google Cardboard", "Microsoft HoloLens"
  ];

  const faqs = [
    {
      question: "What is Virtual Reality (VR) App Development?",
      answer: "VR app development is the process of creating software applications that immerse users in a simulated 3D environment. This involves 3D modeling, interactive UI/UX design, and specialized programming using game engines like Unity or Unreal Engine, targeting hardware like Oculus, HTC Vive, or mobile VR headsets."
    },
    {
      question: "Which industries benefit most from VR?",
      answer: "VR is transforming multiple sectors including Gaming & Entertainment, Healthcare (surgical training, therapy), Education (virtual classrooms), Real Estate (virtual tours), Manufacturing (prototyping, safety training), and Retail (virtual try-ons and showrooms)."
    },
    {
      question: "How long does it take to develop a custom VR app?",
      answer: "The timeline varies significantly based on complexity. A simple WebVR experience might take 1-2 months, while a complex multiplayer VR game or detailed enterprise training simulation can take 6-12 months or more. We provide accurate timelines during our initial consultation phase."
    },
    {
      question: "Do you develop for both standalone and PC-tethered VR headsets?",
      answer: "Yes. Our team has extensive experience developing optimized applications for standalone headsets like the Meta Quest series, as well as high-fidelity experiences for PC-tethered systems like the HTC Vive Pro and Valve Index."
    }
  ];

  const heroContentBlocks = {
    blocks: [
      { type: "header", data: { text: "Virtual Reality (VR) App Development Company", level: 2 } },
      { type: "paragraph", data: { text: "Transform your business with cutting-edge Virtual Reality solutions." } },
      { type: "paragraph", data: { text: "From immersive training modules and virtual showrooms to captivating games, our expert developers build scalable, high-performance VR applications that drive engagement and ROI." } }
    ]
  };

  const servicesContentBlocks = {
    blocks: [
      { type: "header", data: { text: "Next Gen VR App Development Services", level: 2 } },
      { type: "paragraph", data: { text: "We offer comprehensive VR development services covering every stage of the lifecycle, ensuring your vision is translated into a flawless immersive reality." } }
    ]
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center animate-fade-in-up bg-white w-full">
      <HireHero
        btn1Text="Let's talk"
        btn1Url="/#contact-form"
        image="/image 2266.svg"
        data={heroContentBlocks}
      >
        <AboutStats />
      </HireHero>

      <TrustedBy bgColor="bg-[#F9FAFB]" fadeColor="from-[#F9FAFB]" />

      <HireBenefits
        title="About Our VR Team"
        description="Our dedicated team of 3D artists, Unity/Unreal developers, and spatial computing experts are passionate about pushing the boundaries of what's possible. We don't just write code; we craft worlds."
        benefitsTitle="Why Choose Us?"
        benefitsList={[
          'Vetted Spatial Computing Experts',
          'Certified Unity & Unreal Engine Developers',
          'Agile Delivery with Rapid Prototyping'
        ]}
        btnText="Talk to our experts"
        btnUrl="/#contact-form"
      />

      <HireServices
        heading="Next Gen VR App Development Services"
        description="We offer comprehensive VR development services."
        servicesList={vrServices}
        data={servicesContentBlocks}
      />

      <HireExpertise
        heading="Smart Solutions Integrate with Smart Hardware"
        description="Our developers are proficient in building experiences for the industry's leading VR headsets and peripherals."
        expertiseList={[
          { title: "PC-Tethered VR", items: ["Oculus Rift", "HTC Vive"] },
          { title: "Standalone & Mobile", items: ["Samsung Gear VR", "Google Cardboard"] },
          { title: "Console & Mixed Reality", items: ["PlayStation VR", "Microsoft HoloLens"] }
        ]}
      />

      <HomeCostCalculator />

      <HireInterview
        badge="EXPERIENCE"
        heading="Custom AR/VR Apps Proven Industry Records"
        description="End-to-End VR App Development Company"
        stat1Val="14+"
        stat1Lbl="Years Experience"
        stat2Val="450+"
        stat2Lbl="Apps Delivered"
        formTitle="Ready to build?"
      />

      <HireFAQ data={faqs} />

      <HireCTA
        title="Looking for the right tech partner? Let's Build a Custom VR App"
        subtitle="Consultation, Design, Development, and Deployment under one roof."
        btnText="Get a Free Consultation"
        btnUrl="/#contact-form"
      />

      <ScrollToHash />
    </div>
  );
}
