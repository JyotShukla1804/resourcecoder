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

export default function AugmentedRealityDevelopmentPage() {
  const arServices = [
    {
      title: "AR App for Retail",
      desc: "Develop interactive AR applications that allow customers to visualize products in real-time, enhancing their shopping experience and boosting sales.",
      icon: "shoppingBag"
    },
    {
      title: "AR App for Healthcare",
      desc: "Revolutionize patient care and medical training with advanced AR applications designed to aid surgeries, diagnostics, and medical education.",
      icon: "heartPulse"
    },
    {
      title: "Custom AR App Development",
      desc: "Build highly customized AR solutions tailored to specific industry needs, delivering engaging experiences across iOS, Android, and wearable devices.",
      icon: "settings"
    },
    {
      title: "Location-based AR App Development",
      desc: "Create immersive AR experiences tied to real-world locations, perfect for navigation, tourism, real estate, and interactive marketing campaigns.",
      icon: "mapPin"
    },
    {
      title: "AR App Support and Maintenance",
      desc: "Ensure the longevity and optimal performance of your AR applications with our comprehensive support, updates, and maintenance services.",
      icon: "wrench"
    },
    {
      title: "AR App UI/UX Design",
      desc: "Design intuitive and visually stunning user interfaces and experiences specifically crafted for the unique interactions of augmented reality.",
      icon: "palette"
    },
    {
      title: "AR Integration Services",
      desc: "Seamlessly integrate augmented reality capabilities into your existing enterprise systems, mobile apps, or web platforms for a unified digital ecosystem.",
      icon: "link"
    }
  ];

  const techStack = [
    "Unity", "Unreal Engine", "ARKit", "ARCore", "Vuforia", "WebXR"
  ];

  const hardwareIntegrations = [
    "Microsoft HoloLens", "Magic Leap", "Meta Quest Pro", "Vuzix", "Smartphones (iOS/Android)", "RealWear"
  ];

  const faqs = [
    {
      question: "What is Augmented Reality (AR) App Development?",
      answer: "AR app development is the process of creating applications that overlay digital information, such as 3D models, text, and interactive elements, onto the user's view of the real world. This is achieved using the device's camera and sensors, often utilizing frameworks like ARKit, ARCore, Unity, or specialized wearable hardware."
    },
    {
      question: "How is AR different from VR?",
      answer: "While Virtual Reality (VR) completely immerses the user in a simulated digital environment, Augmented Reality (AR) enhances the real world by projecting digital elements into the user's physical surroundings. AR allows users to remain aware of and interact with their actual environment."
    },
    {
      question: "Which industries can benefit from AR development?",
      answer: "AR is highly versatile and benefits numerous industries including Retail (virtual try-ons, product visualization), Healthcare (surgical assistance, medical training), Manufacturing (remote assistance, assembly guidance), Education (interactive learning), Real Estate (virtual staging), and Marketing (immersive campaigns)."
    },
    {
      question: "How much does it cost to develop an AR application?",
      answer: "The cost of developing an AR app depends heavily on the project's complexity, the platforms targeted (iOS, Android, wearables), the level of 3D modeling required, and the chosen technology stack (e.g., marker-based vs. markerless AR). We provide custom quotes after a detailed analysis of your specific requirements."
    }
  ];

  const heroContentBlocks = {
    blocks: [
      { type: "header", data: { text: "Augmented Reality App Development Company", level: 2 } },
      { type: "paragraph", data: { text: "Enhance the real world with innovative digital overlays." } },
      { type: "paragraph", data: { text: "Our Augmented Reality solutions bridge the gap between physical and digital, offering immersive experiences that captivate users, streamline operations, and drive unmatched business growth." } }
    ]
  };

  const servicesContentBlocks = {
    blocks: [
      { type: "header", data: { text: "Next Gen AR Development Solutions", level: 2 } },
      { type: "paragraph", data: { text: "We provide state-of-the-art Augmented Reality development services across diverse industries, ensuring your application delivers a flawless and engaging mixed-reality experience." } }
    ]
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center animate-fade-in-up bg-white w-full">
      <HireHero
        btn1Text="Let's talk"
        btn1Url="/#contact-form"
        image="/image%202118.svg"
        data={heroContentBlocks}
      >
        <AboutStats />
      </HireHero>
      
      <TrustedBy bgColor="bg-[#F9FAFB]" fadeColor="from-[#F9FAFB]" />

      <HireBenefits
        title="About Our AR Team"
        description="Our AR development experts specialize in blending the physical and digital worlds flawlessly. With deep expertise in spatial computing, computer vision, and interactive design, we turn complex augmented reality concepts into market-ready applications."
        benefitsTitle="Why Choose Us?"
        benefitsList={[
          'Proficient in ARKit, ARCore & Unity', 
          'Specialized in Computer Vision & SLAM', 
          'Agile Delivery with Rapid Prototyping'
        ]}
        btnText="Talk to our experts"
        btnUrl="/#contact-form"
      />

      <HireServices
        heading="Next Gen AR Development Solutions"
        description="We provide state-of-the-art Augmented Reality development services."
        servicesList={arServices}
        data={servicesContentBlocks}
      />

      <HireExpertise
        heading="Our AR App Development Tech Stack"
        description="Leveraging industry-standard frameworks and engines to build robust, scalable, and high-fidelity augmented reality applications."
        expertiseList={[
          { title: "Hardware", items: hardwareIntegrations },
          { title: "Game Engines", items: ["Unity", "Unreal Engine"] },
          { title: "AR Frameworks", items: ["ARKit", "ARCore", "Vuforia", "WebXR"] }
        ]}
      />

      <HomeCostCalculator />

      <HireInterview
        badge="EXPERIENCE"
        heading="Adding Value to Businesses through Augmented Reality"
        description="A smart and reliable AR/VR tech partner Krazio."
        stat1Val="14+"
        stat1Lbl="Industry Experience"
        stat2Val="450+"
        stat2Lbl="Creative Nerds"
        formTitle="Ready to build?"
      />

      <HireFAQ data={faqs} />

      <HireCTA
        title="Looking for the right tech partner? Let's Build a Custom AR App"
        subtitle="Join industry leaders who trust us for cutting-edge immersive tech solutions."
        btnText="Get a Free Consultation"
        btnUrl="/#contact-form"
      />
      
      <ScrollToHash />
    </div>
  );
}
