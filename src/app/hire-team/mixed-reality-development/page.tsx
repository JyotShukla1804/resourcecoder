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

export default function MixedRealityDevelopmentPage() {
  const mrServices = [
    {
      title: "MR Strategy & Consulting Services",
      desc: "We analyze your business objectives and provide expert guidance on how to leverage mixed reality to achieve a competitive edge. Our strategic consulting ensures your MR investment yields maximum returns.",
      icon: "lightbulb"
    },
    {
      title: "MR Web & App Development",
      desc: "Through our expertise, we build robust and scalable mixed reality applications for web and mobile platforms, ensuring seamless performance across various devices and headsets.",
      icon: "smartphone"
    },
    {
      title: "MR UI/UX Applications",
      desc: "Our design team creates intuitive and visually stunning user interfaces and experiences tailored specifically for mixed reality environments, maximizing user engagement.",
      icon: "palette"
    },
    {
      title: "MR Hardware Game Development",
      desc: "We develop captivating and interactive mixed reality games with compelling narratives and realistic interactions that push the boundaries of entertainment.",
      icon: "gamepad"
    },
    {
      title: "Industry-Specific Custom MR Software",
      desc: "Our tailored mixed reality software solutions are designed to address the specific challenges and requirements of your industry, from healthcare and education to manufacturing and retail.",
      icon: "settings"
    },
    {
      title: "Support & Maintenance for MR Apps",
      desc: "We provide ongoing support and maintenance services to ensure your mixed reality applications remain up-to-date, secure, and functioning optimally long after launch.",
      icon: "wrench"
    }
  ];

  const mrFeatures = [
    "3D Objects", "Voice Commands and Speech to Text", "Incorporate Information on Screen", "Spatial Audio & Mapping", "Eye Tracking Technology", "Real Time Data Display"
  ];

  const faqs = [
    {
      question: "What is Mixed Reality (MR)?",
      answer: "Mixed reality (MR) merges real and virtual worlds to produce new environments and visualizations, where physical and digital objects co-exist and interact in real time. It goes beyond AR by allowing users to interact with digital objects as if they were real."
    },
    {
      question: "Do I need specific headsets for MR apps?",
      answer: "Yes, fully immersive Mixed Reality experiences typically require specialized headsets like Microsoft HoloLens, Magic Leap, or the Meta Quest Pro, which have advanced spatial mapping and pass-through capabilities."
    },
    {
      question: "How much time does it take to build an MR app?",
      answer: "The development timeline for an MR application depends on its complexity, features, and the required 3D assets. A basic prototype may take 2-3 months, while a fully-fledged enterprise solution could take 6-12 months."
    },
    {
      question: "Which industries benefit the most from MR?",
      answer: "MR is highly beneficial in industries such as Healthcare (surgical planning and training), Manufacturing (assembly guidance and maintenance), Architecture and Construction (design visualization), and Education (interactive learning experiences)."
    },
    {
      question: "Can you develop MR apps for mobile devices?",
      answer: "While true MR requires advanced headsets for full spatial awareness, we can develop sophisticated AR applications for modern mobile devices (using ARKit and ARCore) that offer a subset of MR capabilities, such as placing and interacting with 3D objects in the real world."
    }
  ];

  const heroContentBlocks = {
    blocks: [
      { type: "header", data: { text: "Mixed Reality (MR) Development Company", level: 2 } },
      { type: "paragraph", data: { text: "Unleash the power of Mixed Reality with our bespoke development services." } },
      { type: "paragraph", data: { text: "We create high-fidelity, interactive, and immersive experiences that seamlessly blend the digital and physical worlds. From groundbreaking enterprise applications to captivating games, our expert developers bring your MR vision to life with precision and creativity." } }
    ]
  };

  const servicesContentBlocks = {
    blocks: [
      { type: "header", data: { text: "Our Mixed Reality Development Services", level: 2 } },
      { type: "paragraph", data: { text: "We offer a comprehensive suite of mixed reality development services tailored to your unique needs. Our solutions are designed to deliver exceptional user experiences, streamline operations, and drive innovation across various sectors." } }
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
        title="A New Realm of Reality Transforming Businesses"
        description="Join forces with a team of seasoned professionals dedicated to pushing the boundaries of mixed reality. Our developers, designers, and strategists possess the expertise and passion required to deliver innovative MR solutions that redefine user experiences and drive business success."
        benefitsTitle="Tools and Technologies"
        benefitsList={[
          'VR/MR Headsets', 
          '3D Modeling Software', 
          'Game Engines (Unity, Unreal Engine)',
          'PC/Mac Computers',
          'AR/VR/MR Frameworks',
          'UI/UX Design Tools'
        ]}
        btnText="Talk to our experts"
        btnUrl="/#contact-form"
      />

      <HireServices
        heading="Our Mixed Reality Development Services"
        description="We offer a comprehensive suite of mixed reality development services."
        servicesList={mrServices}
        data={servicesContentBlocks}
      />

      <HireExpertise
        heading="Feature-Rich Mixed Reality"
        description="Our mixed reality developers build immersive applications that leverage a wide range of cutting-edge features."
        expertiseList={[
          { title: "Interaction & Input", items: ["Voice Commands and Speech to Text", "Eye Tracking Technology"] },
          { title: "Environment & Audio", items: ["3D Objects", "Spatial Audio & Mapping"] },
          { title: "Data & Display", items: ["Incorporate Information on Screen", "Real Time Data Display"] }
        ]}
      />

      <HomeCostCalculator />

      <HireInterview
        badge="EXPERIENCE"
        heading="True Immersive Experience Unlocked with 3D Touch Technology"
        description="Creating an impact is what we aim for. Our mixed reality solutions are designed to leave a lasting impression and drive measurable results for our clients. Here is what we have achieved with our mixed reality solutions so far."
        stat1Val="10+"
        stat1Lbl="Years Experience"
        stat2Val="232+"
        stat2Lbl="Projects Delivered"
        formTitle="Ready to build?"
      />

      <HireFAQ data={faqs} />

      <HireCTA
        title="Looking for the right tech partner? Let's Build a Custom MR App"
        subtitle="Accelerate your digital transformation with our expert mixed reality development team."
        btnText="Get a Free Consultation"
        btnUrl="/#contact-form"
      />
      
      <ScrollToHash />
    </div>
  );
}
