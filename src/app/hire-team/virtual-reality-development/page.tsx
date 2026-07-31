"use client";

import React from "react";
import Link from "next/link";
import { TrustedBy, HireFAQ, CTASection, HomeCostCalculator } from "@/components";
import { AnimatedNumber } from "@/components/AboutStats";
import { Lightbulb, Palette, Settings, Gamepad2, Wrench, Link as LinkIcon, FlaskConical, Globe, Box, Monitor, Smartphone, Package, Glasses, Cpu } from "lucide-react";

export default function VirtualRealityDevelopmentPage() {
  const vrServices = [
    {
      title: "VR Software Consulting Services",
      desc: "We analyze your business needs and offer strategic VR consulting to ensure your virtual reality project aligns perfectly with your goals and maximizes ROI.",
      icon: <Lightbulb className="w-7 h-7 text-[#4B56D2]" />
    },
    {
      title: "VR 3D Design & UI/UX",
      desc: "Our creative team builds intuitive and stunning 3D environments with immersive UI/UX that keep users engaged and deliver a seamless virtual experience.",
      icon: <Palette className="w-7 h-7 text-[#4B56D2]" />
    },
    {
      title: "Custom VR App Development",
      desc: "End-to-end development of custom VR applications tailored to your specific industry needs, ensuring high performance and platform compatibility.",
      icon: <Settings className="w-7 h-7 text-[#4B56D2]" />
    },
    {
      title: "VR Game Development",
      desc: "We create captivating and interactive VR games with realistic physics, compelling storylines, and multiplayer capabilities for ultimate entertainment.",
      icon: <Gamepad2 className="w-7 h-7 text-[#4B56D2]" />
    },
    {
      title: "VR Support & Maintenance",
      desc: "Continuous post-launch support and regular updates to ensure your VR application runs flawlessly and stays ahead of technological advancements.",
      icon: <Wrench className="w-7 h-7 text-[#4B56D2]" />
    },
    {
      title: "VR Integration Services",
      desc: "Seamlessly integrate VR solutions with your existing enterprise systems, IoT devices, and smart hardware for a unified digital ecosystem.",
      icon: <LinkIcon className="w-7 h-7 text-[#4B56D2]" />
    },
    {
      title: "AR/VR Prototyping",
      desc: "Rapid prototyping of your AR/VR ideas to validate concepts, test user interactions, and secure stakeholder buy-in before full-scale development.",
      icon: <FlaskConical className="w-7 h-7 text-[#4B56D2]" />
    },
    {
      title: "WebVR Development",
      desc: "Browser-based VR experiences that require no app downloads, making immersive content easily accessible to a wider audience directly on the web.",
      icon: <Globe className="w-7 h-7 text-[#4B56D2]" />
    },
    {
      title: "Metaverse Development",
      desc: "Build interconnected virtual worlds and decentralized economies. We help you establish a strong presence in the rapidly growing Metaverse.",
      icon: <Box className="w-7 h-7 text-[#4B56D2]" />
    }
  ];

  const hardwareIntegrations = [
    { name: "Oculus Rift", icon: <Monitor className="w-6 h-6 text-blue-500" />, desc: "High-fidelity PC-powered VR experiences with precise tracking." },
    { name: "HTC Vive", icon: <Cpu className="w-6 h-6 text-blue-500" />, desc: "Room-scale VR with unparalleled immersion and realistic interactions." },
    { name: "PlayStation VR", icon: <Gamepad2 className="w-6 h-6 text-blue-500" />, desc: "Console-based VR development reaching a massive gaming audience." },
    { name: "Samsung Gear VR", icon: <Smartphone className="w-6 h-6 text-blue-500" />, desc: "Accessible mobile VR experiences powered by Oculus technology." },
    { name: "Google Cardboard", icon: <Package className="w-6 h-6 text-blue-500" />, desc: "Entry-level VR apps for widespread distribution on smartphones." },
    { name: "Microsoft HoloLens", icon: <Glasses className="w-6 h-6 text-blue-500" />, desc: "Mixed reality applications blending digital content with the real world." }
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
            Virtual Reality Experts
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.2] text-[#0f172a] max-w-4xl">
            Virtual Reality (VR) App <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-[#4B56D2] to-indigo-600 bg-clip-text text-transparent">
              Development Company
            </span>
          </h1>

          {/* Hero Paragraph */}
          <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
            Transform your business with cutting-edge Virtual Reality solutions. From immersive training modules and virtual showrooms to captivating games, our expert developers build scalable, high-performance VR applications that drive engagement and ROI.
          </p>

          {/* Benefits Checks */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4">
            {[
              "Agile Delivery",
              "Certified VR Developers",
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
              Next Gen VR App Development <br />
              <span className="text-blue-600">Services and Solutions</span>
            </h2>
            <p className="text-slate-600 text-lg">
              We offer comprehensive VR development services covering every stage of the lifecycle, ensuring your vision is translated into a flawless immersive reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vrServices.map((service, idx) => (
              <div key={idx} className="p-8 rounded-[24px] bg-white border border-slate-200 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group">
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
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">End-to-End VR App Development Company</h3>
            <p className="text-blue-100">Consultation, Design, Development, and Deployment under one roof.</p>
          </div>
          <Link 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event('open-contact-modal'));
            }}
            className="btn-ripple relative z-10 whitespace-nowrap px-8 py-4 bg-white text-[#4B56D2] rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1"
          >
            Hire VR Experts
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
              Robust Solutions & Integration with <span className="text-blue-500">Smart Hardware</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Our developers are proficient in building experiences for the industry's leading VR headsets and peripherals.</p>
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

      {/* 6. Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-16">
            Custom AR/VR Apps <span className="text-blue-600">Proven Industry Records</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="pt-8 md:pt-0">
              <div className="text-5xl lg:text-7xl font-black text-[#4B56D2] mb-2">
                <AnimatedNumber value="14+" />
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">Years Experience</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl lg:text-7xl font-black text-[#4B56D2] mb-2">
                <AnimatedNumber value="450+" />
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">Apps Delivered</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl lg:text-7xl font-black text-[#4B56D2] mb-2">
                <AnimatedNumber value="6,000+" />
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">Global Developers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <HomeCostCalculator />

      {/* 7. About VR Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-[32px] overflow-hidden aspect-[4/3] border border-slate-200 shadow-xl">
            {/* Team Placeholder Image */}
            <img 
               src="/image%202118.svg" 
               alt="VR Team" 
               className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              About Our <span className="text-blue-600">VR Team</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Our dedicated team of 3D artists, Unity/Unreal developers, and spatial computing experts are passionate about pushing the boundaries of what's possible. We don't just write code; we craft worlds.
            </p>
            <ul className="space-y-4 pt-4">
              {['Vetted Spatial Computing Experts', 'Certified Unity & Unreal Engine Developers', 'Agile Delivery with Rapid Prototyping'].map((item, i) => (
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

      {/* 8. FAQ Section */}
      <HireFAQ data={faqs} />

      {/* 9. Final CTA */}
      <CTASection
        title={<>Looking for the right tech partner? <br className="hidden md:block"/> Let's Build a Custom VR App</>}
        description=""
        buttonText="Get a Free Consultation"
        buttonHref="#interview-section"
      />

    </div>
  );
}
