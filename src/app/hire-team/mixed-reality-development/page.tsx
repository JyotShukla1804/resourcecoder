"use client";

import React from "react";
import Link from "next/link";
import { TrustedBy, HireFAQ, CTASection } from "@/components";
import { AnimatedNumber } from "@/components/AboutStats";
import { Lightbulb, Palette, Settings, Gamepad2, Wrench, Smartphone, Box, Mic, Monitor, Headphones, Eye, LineChart } from "lucide-react";

export default function MixedRealityDevelopmentPage() {
  const mrServices = [
    {
      title: "MR Strategy & Consulting Services",
      desc: "We analyze your business objectives and provide expert guidance on how to leverage mixed reality to achieve a competitive edge. Our strategic consulting ensures your MR investment yields maximum returns.",
      icon: <Lightbulb className="w-7 h-7 text-[#4B56D2]" />
    },
    {
      title: "MR Web & App Development",
      desc: "Through our expertise, we build robust and scalable mixed reality applications for web and mobile platforms, ensuring seamless performance across various devices and headsets.",
      icon: <Smartphone className="w-7 h-7 text-[#4B56D2]" />
    },
    {
      title: "MR UI/UX Applications",
      desc: "Our design team creates intuitive and visually stunning user interfaces and experiences tailored specifically for mixed reality environments, maximizing user engagement.",
      icon: <Palette className="w-7 h-7 text-[#4B56D2]" />
    },
    {
      title: "MR Hardware Game Development",
      desc: "We develop captivating and interactive mixed reality games with compelling narratives and realistic interactions that push the boundaries of entertainment.",
      icon: <Gamepad2 className="w-7 h-7 text-[#4B56D2]" />
    },
    {
      title: "Industry-Specific Custom MR Software",
      desc: "Our tailored mixed reality software solutions are designed to address the specific challenges and requirements of your industry, from healthcare and education to manufacturing and retail.",
      icon: <Settings className="w-7 h-7 text-[#4B56D2]" />
    },
    {
      title: "Support & Maintenance for MR Apps",
      desc: "We provide ongoing support and maintenance services to ensure your mixed reality applications remain up-to-date, secure, and functioning optimally long after launch.",
      icon: <Wrench className="w-7 h-7 text-[#4B56D2]" />
    }
  ];

  const mrFeatures = [
    { name: "3D Objects", icon: <Box className="w-6 h-6 text-blue-500" />, desc: "We create realistic and detailed 3D models that seamlessly integrate into the physical environment, enhancing realism and presence." },
    { name: "Voice Commands and Speech to Text", icon: <Mic className="w-6 h-6 text-blue-500" />, desc: "Implement voice recognition technology to allow users to navigate and interact with your MR application naturally and effortlessly." },
    { name: "Incorporate Information on Screen", icon: <Monitor className="w-6 h-6 text-blue-500" />, desc: "Seamlessly overlay contextual data, instructions, and interactive elements onto the user's real-world view for enhanced understanding." },
    { name: "Spatial Audio & Mapping", icon: <Headphones className="w-6 h-6 text-blue-500" />, desc: "Utilize spatial audio to create immersive soundscapes and advanced spatial mapping to ensure digital objects interact realistically with physical surfaces." },
    { name: "Eye Tracking Technology", icon: <Eye className="w-6 h-6 text-blue-500" />, desc: "Integrate eye tracking to enable intuitive interaction, optimize performance, and gain valuable insights into user behavior and engagement." },
    { name: "Real Time Data Display", icon: <LineChart className="w-6 h-6 text-blue-500" />, desc: "Display critical information and analytics in real-time within the MR environment, facilitating informed decision-making and operational efficiency." }
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

  return (
    <div className="min-h-screen bg-white text-slate-600 selection:bg-blue-500/20 w-full overflow-hidden font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[800px] mx-auto pt-48 px-6 pb-40 flex flex-col justify-center items-center text-center z-10 transition-all duration-300 bg-[#f8f9ff] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
        </div>
        
        <div className="relative z-10 max-w-[1358px] mx-auto text-center w-full flex flex-col items-center space-y-8 px-4 sm:px-6">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white border border-slate-200 text-[#4B56D2] text-sm font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#4B56D2] animate-pulse mr-2" />
            Mixed Reality Experts
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.2] text-[#0f172a] max-w-4xl">
            Mixed Reality (MR) <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-[#4B56D2] to-indigo-600 bg-clip-text text-transparent">
              Development Company
            </span>
          </h1>

          <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
            Unleash the power of Mixed Reality with our bespoke development services. We create high-fidelity, interactive, and immersive experiences that seamlessly blend the digital and physical worlds. From groundbreaking enterprise applications to captivating games, our expert developers bring your MR vision to life with precision and creativity.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4">
            {[
              "Agile Delivery",
              "Certified MR Developers",
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

          <div className="pt-8 w-full flex justify-center gap-4">
            <Link
              href="/#contact-form"
              className="inline-flex items-center justify-center text-white font-bold text-[15px] tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 select-none w-auto h-[60px] py-4 px-10 rounded-full bg-[#4B56D2]"
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
              Our Mixed Reality <br />
              <span className="text-blue-600">Development Services</span>
            </h2>
            <p className="text-slate-600 text-lg">
              We offer a comprehensive suite of mixed reality development services tailored to your unique needs. Our solutions are designed to deliver exceptional user experiences, streamline operations, and drive innovation across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mrServices.map((service, idx) => (
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
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Hire Mixed Reality Developers</h3>
            <p className="text-blue-100">Accelerate your digital transformation with our expert mixed reality development team.</p>
          </div>
          <Link href="/#contact-form" className="relative z-10 whitespace-nowrap px-8 py-4 bg-white text-[#4B56D2] rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1">
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* 5. Hardware Integration / Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1C] border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Feature-Rich <span className="text-blue-500">Mixed Reality</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our mixed reality developers build immersive applications that leverage a wide range of cutting-edge features. From advanced spatial mapping to intuitive gesture controls, we ensure your MR solution is equipped to deliver unparalleled user experiences and drive tangible business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mrFeatures.map((hw, idx) => (
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            True Immersive Experience Unlocked with <span className="text-blue-600">3D Touch Technology</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-16">
            Creating an impact is what we aim for. Our mixed reality solutions are designed to leave a lasting impression and drive measurable results for our clients. Here is what we have achieved with our mixed reality solutions so far.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="pt-8 md:pt-0">
              <div className="text-5xl lg:text-7xl font-black text-[#4B56D2] mb-2">
                <AnimatedNumber value="10" />+
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">Years Experience</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl lg:text-7xl font-black text-[#4B56D2] mb-2">
                <AnimatedNumber value="232" />+
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">Projects Delivered</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl lg:text-7xl font-black text-[#4B56D2] mb-2">
                <AnimatedNumber value="100" />+
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">Global Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. About MR Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-[32px] overflow-hidden aspect-[4/3] border border-slate-200 shadow-xl">
            {/* Team Placeholder Image */}
            <img 
               src="/image%202118.svg" 
               alt="MR Team" 
               className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              A New Realm of Reality <span className="text-blue-600">Transforming Businesses</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Join forces with a team of seasoned professionals dedicated to pushing the boundaries of mixed reality. Our developers, designers, and strategists possess the expertise and passion required to deliver innovative MR solutions that redefine user experiences and drive business success.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                'VR/MR Headsets', 
                '3D Modeling Software', 
                'Game Engines (Unity, Unreal Engine)',
                'PC/Mac Computers',
                'AR/VR/MR Frameworks',
                'UI/UX Design Tools'
              ].map((item, i) => (
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
        title={<>Looking for the right tech partner? <br className="hidden md:block"/> Let's Build a Custom MR App</>}
        description=""
        buttonText="Get a Free Consultation"
        buttonHref="/#contact-form"
      />

    </div>
  );
}
