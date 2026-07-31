"use client";

import React from "react";
import Link from "next/link";
import { TrustedBy, HireFAQ, CTASection, HomeCostCalculator } from "@/components";
import { AnimatedNumber } from "@/components/AboutStats";
import { ShoppingBag, HeartPulse, Settings, MapPin, Wrench, Palette, Link as LinkIcon, Smartphone, Glasses, Monitor, Cpu, Box, Hexagon, Code2, Layers, Globe } from "lucide-react";

export default function AugmentedRealityDevelopmentPage() {
  const arServices = [
    {
      title: "AR App for Retail",
      desc: "Develop interactive AR applications that allow customers to visualize products in real-time, enhancing their shopping experience and boosting sales.",
      icon: <ShoppingBag className="w-7 h-7 text-blue-500" />
    },
    {
      title: "AR App for Healthcare",
      desc: "Revolutionize patient care and medical training with advanced AR applications designed to aid surgeries, diagnostics, and medical education.",
      icon: <HeartPulse className="w-7 h-7 text-blue-500" />
    },
    {
      title: "Custom AR App Development",
      desc: "Build highly customized AR solutions tailored to specific industry needs, delivering engaging experiences across iOS, Android, and wearable devices.",
      icon: <Settings className="w-7 h-7 text-blue-500" />
    },
    {
      title: "Location-based AR App Development",
      desc: "Create immersive AR experiences tied to real-world locations, perfect for navigation, tourism, real estate, and interactive marketing campaigns.",
      icon: <MapPin className="w-7 h-7 text-blue-500" />
    },
    {
      title: "AR App Support and Maintenance",
      desc: "Ensure the longevity and optimal performance of your AR applications with our comprehensive support, updates, and maintenance services.",
      icon: <Wrench className="w-7 h-7 text-blue-500" />
    },
    {
      title: "AR App UI/UX Design",
      desc: "Design intuitive and visually stunning user interfaces and experiences specifically crafted for the unique interactions of augmented reality.",
      icon: <Palette className="w-7 h-7 text-blue-500" />
    },
    {
      title: "AR Integration Services",
      desc: "Seamlessly integrate augmented reality capabilities into your existing enterprise systems, mobile apps, or web platforms for a unified digital ecosystem.",
      icon: <LinkIcon className="w-7 h-7 text-blue-500" />
    }
  ];

  const hardwareIntegrations = [
    { name: "Microsoft HoloLens", icon: <Glasses className="w-6 h-6 text-blue-500" />, desc: "Leading enterprise mixed reality headset for advanced spatial computing and professional applications." },
    { name: "Magic Leap", icon: <Glasses className="w-6 h-6 text-blue-500" />, desc: "Powerful AR glasses designed for enterprise productivity, collaboration, and immersive 3D experiences." },
    { name: "Meta Quest Pro", icon: <Monitor className="w-6 h-6 text-blue-500" />, desc: "High-end mixed reality headset bridging the gap between VR and AR with full-color passthrough." },
    { name: "Vuzix", icon: <Glasses className="w-6 h-6 text-blue-500" />, desc: "Smart glasses optimized for industrial, logistics, and medical remote support applications." },
    { name: "Smartphones (iOS/Android)", icon: <Smartphone className="w-6 h-6 text-blue-500" />, desc: "Widespread consumer AR using ARKit and ARCore for mass-market reach and accessibility." },
    { name: "RealWear", icon: <Cpu className="w-6 h-6 text-blue-500" />, desc: "Ruggedized head-mounted displays designed for frontline workers in harsh industrial environments." }
  ];

  const techStack = [
    { name: "Unity", icon: <Box className="w-8 h-8 text-blue-600" /> },
    { name: "Unreal Engine", icon: <Hexagon className="w-8 h-8 text-blue-600" /> },
    { name: "ARKit", icon: <Smartphone className="w-8 h-8 text-blue-600" /> },
    { name: "ARCore", icon: <Code2 className="w-8 h-8 text-blue-600" /> },
    { name: "Vuforia", icon: <Layers className="w-8 h-8 text-blue-600" /> },
    { name: "WebXR", icon: <Globe className="w-8 h-8 text-blue-600" /> }
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

  return (
    <div className="min-h-screen bg-white text-slate-600 selection:bg-blue-500/20 w-full overflow-hidden font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[800px] mx-auto pt-48 px-6 pb-40 flex flex-col justify-center items-center text-center z-10 transition-all duration-300 bg-[#f8f9ff] overflow-hidden">
        {/* Unique Home Page Hero Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Glowing Orbs */}
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
        </div>
        
        {/* Content Wrapper */}
        <div className="relative z-10 max-w-[1358px] mx-auto text-center w-full flex flex-col items-center space-y-8 px-4 sm:px-6">
          {/* Floating Badge */}
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white border border-slate-200 text-[#4B56D2] text-sm font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#4B56D2] animate-pulse mr-2" />
            Augmented Reality Experts
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.2] text-[#0f172a] max-w-4xl">
            Augmented Reality App <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-[#4B56D2] to-indigo-600 bg-clip-text text-transparent">
              Development Company
            </span>
          </h1>

          {/* Hero Paragraph */}
          <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
            Enhance the real world with innovative digital overlays. Our Augmented Reality solutions bridge the gap between physical and digital, offering immersive experiences that captivate users, streamline operations, and drive unmatched business growth.
          </p>

          {/* Benefits Checks */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4">
            {[
              "Agile Delivery",
              "Certified AR Developers",
              "End-to-End Solutions"
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-700 font-medium bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/50 shadow-sm">
                <svg className="w-5 h-5 text-[#4B56D2] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Let's Talk CTA Button */}
          <div className="pt-8 w-full flex justify-center gap-4">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event('open-contact-modal'));
              }}
              className="btn-ripple inline-flex items-center justify-center text-white font-bold text-[15px] tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 select-none w-auto h-[60px] py-4 px-10 rounded-full bg-[#4B56D2]"
            >
              Let's talk
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Trusted By */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <TrustedBy bgColor="bg-transparent" fadeColor="from-[#F8FAFC]" />
      </div>

      {/* 3. Services Grid */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Next Gen AR Development <br />
              <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="text-slate-600 text-lg">
              We provide state-of-the-art Augmented Reality development services across diverse industries, ensuring your application delivers a flawless and engaging mixed-reality experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {arServices.map((service, idx) => (
              <div key={idx} className={`p-8 rounded-[24px] bg-white border border-slate-200 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group ${idx === 6 ? 'lg:col-start-2' : ''}`}>
                <div className="w-16 h-16 rounded-[20px] bg-[#F4F6FC] flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Middle CTA Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto rounded-[32px] bg-gradient-to-br from-[#2A337E] to-[#4B56D2] overflow-hidden relative border border-[#4B56D2]/30 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Hire Augmented Reality Developers From Krazio</h3>
            <p className="text-blue-100">Top-tier AR talent ready to bring your visionary mixed-reality ideas to life.</p>
          </div>
          <Link 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event('open-contact-modal'));
            }}
            className="btn-ripple relative z-10 whitespace-nowrap px-8 py-4 bg-white text-[#4B56D2] rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1"
          >
            Let's Talk
          </Link>
        </div>
      </section>

      {/* 5. Hardware Integration */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1C] border-y border-slate-800 relative overflow-hidden">
        {/* Dark theme background glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Smart Solutions Integrate with <span className="text-blue-500">Smart Hardware</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Creating cutting-edge augmented reality experiences optimized for industry-leading AR glasses, headsets, and mobile platforms.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareIntegrations.map((hw, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-[#131B2C] border border-slate-800 hover:bg-[#1A2338] hover:shadow-lg hover:shadow-blue-900/20 hover:border-blue-500/30 transition-all cursor-default group">
                  <div className="w-14 h-14 rounded-2xl bg-[#1E293B] flex items-center justify-center shrink-0 border border-slate-700 group-hover:bg-[#253347] transition-colors">{hw.icon}</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{hw.name}</h4>
                    <p className="text-sm text-slate-400">{hw.desc}</p>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. Tech Stack Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Our AR App Development <span className="text-blue-600">Tech Stack</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-16">Leveraging industry-standard frameworks and engines to build robust, scalable, and high-fidelity augmented reality applications.</p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {techStack.map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 bg-slate-50 border border-slate-100 rounded-[24px] hover:shadow-xl hover:border-blue-200 transition-all min-w-[160px]">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
                  {tech.icon}
                </div>
                <h4 className="font-bold text-slate-900">{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-16">
            Adding Value to Businesses through <span className="text-blue-600">Augmented Reality</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="pt-8 md:pt-0">
              <div className="text-5xl lg:text-7xl font-black text-[#4B56D2] mb-2">
                <AnimatedNumber value="14+" />
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">Industry Experience</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl lg:text-7xl font-black text-[#4B56D2] mb-2">
                <AnimatedNumber value="450+" />
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">Creative Nerds</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl lg:text-7xl font-black text-[#4B56D2] mb-2">
                <AnimatedNumber value="6,000+" />
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Secondary CTA Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto rounded-[32px] bg-gradient-to-br from-[#2A337E] to-[#4B56D2] overflow-hidden relative border border-[#4B56D2]/30 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
          <div className="relative z-10 flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 lg:whitespace-nowrap">A smart and reliable AR/VR tech partner Krazio</h3>
            <p className="text-blue-100">Join industry leaders who trust us for cutting-edge immersive tech solutions.</p>
          </div>
          <Link 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event('open-contact-modal'));
            }}
            className="btn-ripple relative z-10 whitespace-nowrap px-8 py-4 bg-white text-[#4B56D2] rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1"
          >
            Partner With Us
          </Link>
        </div>
      </section>

      {/* Calculator Section */}
      <HomeCostCalculator />

      {/* 9. About AR Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-[32px] overflow-hidden aspect-[4/3] border border-slate-200 shadow-xl">
            {/* Team Placeholder Image */}
            <img 
               src="/image%202118.svg" 
               alt="AR Team" 
               className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              About Our <span className="text-blue-600">AR Team</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Our AR development experts specialize in blending the physical and digital worlds flawlessly. With deep expertise in spatial computing, computer vision, and interactive design, we turn complex augmented reality concepts into market-ready applications.
            </p>
            <ul className="space-y-4 pt-4">
              {['Proficient in ARKit, ARCore & Unity', 'Specialized in Computer Vision & SLAM', 'Agile Delivery with Rapid Prototyping'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                  <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <HireFAQ data={faqs} />

      {/* 11. Final CTA */}
      <CTASection
        title={<>Looking for the right tech partner? <br className="hidden md:block"/> Let's Build a Custom AR App</>}
        description=""
        buttonText="Get a Free Consultation"
        buttonHref="#interview-section"
      />

    </div>
  );
}
