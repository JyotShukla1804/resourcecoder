"use client";

import React from "react";
import Link from "next/link";
import { TrustedBy, HireFAQ, CTASection } from "@/components";
import { AnimatedNumber } from "@/components/AboutStats";
import { 
  Gamepad2, Glasses, Smartphone, Palette, CheckCircle, RefreshCcw, 
  Box, Zap, Shield, TestTube, Expand, Activity,
  Swords, Coffee, BookOpen, Puzzle, Skull, Car, Trophy, Brain
} from "lucide-react";

export default function GameDevelopment3DPage() {
  const services = [
    {
      title: "Custom 3D Game Development",
      desc: "Our skilled developers specialize in building unique and tailored 3D games for mobile, console, and PC, ensuring high engagement and performance.",
      icon: <Gamepad2 className="w-7 h-7 text-blue-500" />
    },
    {
      title: "AR/VR 3D Game Development Services",
      desc: "Crafting immersive mixed-reality experiences with state-of-the-art AR/VR technology, keeping players at the center of the gaming universe.",
      icon: <Glasses className="w-7 h-7 text-blue-500" />
    },
    {
      title: "Cross-Platform 3D Game Development",
      desc: "From concept to launch, we develop cross-platform games using Unity, ensuring your game reaches a broader audience without compromising quality.",
      icon: <Smartphone className="w-7 h-7 text-blue-500" />
    },
    {
      title: "App UI/UX Design & Prototyping Services",
      desc: "Engaging mechanics and interactive user interfaces are at the core of our development process. We create intuitive layouts that keep players hooked.",
      icon: <Palette className="w-7 h-7 text-blue-500" />
    },
    {
      title: "3D Game Testing & Quality Assurance",
      desc: "Rigorous testing guarantees a bug-free, seamless gaming experience. Our QA team ensures that your game performs exceptionally on all devices.",
      icon: <CheckCircle className="w-7 h-7 text-blue-500" />
    },
    {
      title: "3D Game Maintenance & Post-launch Support",
      desc: "We provide continuous support and maintenance updates to keep your game relevant, ensuring optimal performance and user satisfaction long after release.",
      icon: <RefreshCcw className="w-7 h-7 text-blue-500" />
    }
  ];

  const approach = [
    { title: "High-Fidelity 3D Assets", icon: <Box className="w-6 h-6 text-blue-500" />, desc: "We design high-quality characters, environments, and objects that bring your gaming worlds to life with unparalleled realism." },
    { title: "Focus on Performance", icon: <Zap className="w-6 h-6 text-blue-500" />, desc: "Optimizing frame rates and load times is our priority. We ensure smooth performance across devices without sacrificing graphics quality." },
    { title: "Secure Architecture for 3D Environments", icon: <Shield className="w-6 h-6 text-blue-500" />, desc: "Ensuring game security with advanced encryption and robust architecture for multiplayer environments, protecting user data and preventing cheating." },
    { title: "Continuous Testing Process", icon: <TestTube className="w-6 h-6 text-blue-500" />, desc: "Our agile development process involves continuous testing at every stage, allowing for rapid iterations and a polished final product." },
    { title: "Flexible & Scalable Solutions", icon: <Expand className="w-6 h-6 text-blue-500" />, desc: "From simple mobile games to complex MMORPGs, our scalable solutions adapt to your project's growing needs, ensuring seamless expansion." },
    { title: "Agile Methodology", icon: <Activity className="w-6 h-6 text-blue-500" />, desc: "We follow an agile development framework, allowing for flexible project management, regular updates, and continuous client involvement throughout the lifecycle." }
  ];

  const genres = [
    { name: "Action Games", icon: <Swords className="w-5 h-5 text-red-500" /> },
    { name: "Casual Games", icon: <Coffee className="w-5 h-5 text-orange-500" /> },
    { name: "Educational Games", icon: <BookOpen className="w-5 h-5 text-green-500" /> },
    { name: "Puzzle Games", icon: <Puzzle className="w-5 h-5 text-purple-500" /> },
    { name: "RPG Games", icon: <Skull className="w-5 h-5 text-slate-800" /> },
    { name: "Simulation Games", icon: <Car className="w-5 h-5 text-blue-600" /> },
    { name: "Sports Games", icon: <Trophy className="w-5 h-5 text-yellow-500" /> },
    { name: "Strategy Games", icon: <Brain className="w-5 h-5 text-indigo-500" /> },
    { name: "VR/AR Games", icon: <Glasses className="w-5 h-5 text-teal-500" /> }
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

  return (
    <div className="min-h-screen bg-white text-slate-600 selection:bg-blue-500/20 w-full overflow-hidden font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] mx-auto pt-40 px-6 pb-20 flex items-center justify-center z-10 transition-all duration-300 bg-[#f8f9ff] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
        </div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6">
          <div className="flex flex-col space-y-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.2] text-[#0f172a]">
              3D Game Development <br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-[#4B56D2] to-indigo-600 bg-clip-text text-transparent">
                Company
              </span>
            </h1>

            <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              Transforming visionary ideas into stunning 3D realities. We specialize in high-quality 3D game development for multiple platforms, ensuring immersive experiences that engage and captivate your players.
            </p>

            <div className="pt-4 w-full flex justify-center md:justify-start gap-4">
              <Link
                href="/#contact-form"
                className="inline-flex items-center justify-center text-white font-bold text-[15px] tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 select-none w-auto h-[60px] py-4 px-10 rounded-full bg-[#4B56D2]"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
          
          <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden flex items-center justify-center">
            {/* Visual placeholder for the 3D game controller image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2A337E] via-[#4B56D2] to-indigo-900 rounded-[40px] shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay rounded-[40px]" />
              <div className="absolute w-[150%] h-[150%] bg-white/10 blur-[60px] rounded-full animate-pulse" />
              <Gamepad2 className="w-48 h-48 text-white/90 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] relative z-10" strokeWidth={1} />
              
              {/* Floating elements */}
              <div className="absolute top-10 left-10 w-8 h-8 bg-indigo-400 rounded-full blur-[10px] animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="absolute bottom-10 right-10 w-12 h-12 bg-blue-300 rounded-full blur-[15px] animate-bounce" style={{ animationDelay: '1.5s' }} />
              <div className="absolute top-1/4 right-10 w-4 h-4 bg-white/50 rotate-45 animate-pulse" />
              <div className="absolute bottom-1/4 left-10 w-6 h-6 bg-white/30 rounded-sm animate-spin-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trusted By */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <TrustedBy bgColor="bg-transparent" fadeColor="from-[#F8FAFC]" />
      </div>

      {/* 3. Services Grid */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Explore Top-notch Unity 3D Game Development <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Deliver unmatchable gaming solutions with Krazio. Enhance user engagement with robust game architectures, visually stunning environments, and fluid gameplay tailored for any platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className={`p-8 rounded-[24px] bg-slate-50 border border-slate-200 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group`}>
                <div className="w-16 h-16 rounded-[20px] bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto rounded-[32px] bg-gradient-to-br from-[#2A337E] to-[#4B56D2] overflow-hidden relative p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Join the 3D Revolution - Your Game Awaits!</h3>
            <p className="text-blue-100 max-w-xl text-lg">Accelerate your gaming project with top-tier 3D developers. Let’s build something extraordinary together.</p>
          </div>
          <Link href="/#contact-form" className="relative z-10 whitespace-nowrap px-8 py-4 bg-white text-[#4B56D2] rounded-full font-bold hover:bg-slate-50 transition-all shadow-md hover:-translate-y-1">
            Let's Talk
          </Link>
        </div>
      </section>

      {/* 5. Approach */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 max-w-4xl mx-auto">
              Crafting Unique Gaming Experiences: Our Approach to 3D Game App Development
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {approach.map((item, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-slate-900 font-bold text-xl mb-3">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. Genres */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1C] border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Our 3D game development <span className="text-blue-500">Genres</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12">We create immersive and engaging experiences across a wide variety of gaming categories to suit your target audience.</p>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            {genres.map((genre, idx) => (
              <div key={idx} className="flex items-center gap-3 px-6 py-4 bg-[#131B2C] border border-slate-800 rounded-full hover:border-blue-500/50 hover:bg-[#1A2338] hover:shadow-lg hover:shadow-blue-900/20 transition-all cursor-default">
                {genre.icon}
                <span className="font-bold text-slate-200">{genre.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 max-w-4xl mx-auto">
            Solutions Helping Your Organization to Become <span className="text-blue-600">Smarter</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-16">Empower your business with cutting-edge 3D game development solutions. Drive engagement, boost revenue, and achieve sustainable growth with Krazio.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="pt-8 md:pt-0">
              <div className="text-5xl lg:text-7xl font-black text-slate-900 mb-2">
                <AnimatedNumber value="10" />+
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">Years Experience</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl lg:text-7xl font-black text-slate-900 mb-2">
                <AnimatedNumber value="232" />+
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">Projects Delivered</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl lg:text-7xl font-black text-slate-900 mb-2">
                <AnimatedNumber value="100" />+
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">Global Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Secondary CTA Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto rounded-[32px] bg-gradient-to-br from-[#2A337E] to-[#4B56D2] overflow-hidden relative p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Transform Pixels into 3D Perfection!</h3>
            <p className="text-blue-100 max-w-xl text-lg">Bring your visionary game ideas to life with our expert 3D development team.</p>
          </div>
          <Link href="/#contact-form" className="relative z-10 whitespace-nowrap px-8 py-4 bg-white text-[#4B56D2] rounded-full font-bold hover:bg-slate-50 transition-all shadow-md hover:-translate-y-1">
            Partner With Us
          </Link>
        </div>
      </section>

      {/* 9. Why Choose */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-[32px] overflow-hidden aspect-[16/9] lg:aspect-[4/3] border border-slate-200 shadow-xl">
            <img 
               src="/mission-team.png" 
               alt="3D Game Development Team" 
               className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Why Choose Krazio for <span className="text-blue-600">3D Game Development</span> Services?
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              With years of expertise in game development, our team delivers captivating 3D experiences tailored to your vision. We blend creativity with technical excellence to produce games that stand out in a competitive market.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                'Proficient in Unity & Unreal Engine', 
                'Specialized in Multiplayer & AR/VR', 
                'Dedicated QA & Post-launch Support',
                'Agile & Collaborative Process'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle className="w-6 h-6 text-blue-600 shrink-0" />
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
        title={<>Looking for a game dev team? <br className="hidden md:block"/> Start a Conversation</>}
        description=""
        buttonText="Let's Talk"
        buttonHref="/#contact-form"
      />

    </div>
  );
}
