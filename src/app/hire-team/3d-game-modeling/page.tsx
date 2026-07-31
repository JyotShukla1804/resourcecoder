"use client";

import React from "react";
import Link from "next/link";
import { TrustedBy, HireFAQ, CTASection } from "@/components";
import { AnimatedNumber } from "@/components/AboutStats";
import { 
  Gamepad2, Glasses, Monitor, Palette, CheckCircle, RefreshCcw, 
  Box, Zap, Shield, TestTube, Expand, Activity,
  Swords, Coffee, BookOpen, Puzzle, Skull, Car, Trophy, Brain,
  User, Settings, Paintbrush, Sun, Move, Gauge, TrendingUp, Hexagon, Layers, PenTool, Triangle, Cuboid
} from "lucide-react";

export default function GameModeling3DPage() {
  const services = [
    {
      title: "3D Modeling for Games",
      desc: "Create breathtaking 3D assets that serve as the foundation of your game. Our models are highly detailed and optimized for any engine.",
      icon: <Gamepad2 className="w-7 h-7 text-blue-500" />
    },
    {
      title: "3D Modeling for Console & PC Games",
      desc: "Delivering high-poly models tailored for advanced rendering capabilities of modern consoles and high-end gaming PCs.",
      icon: <Monitor className="w-7 h-7 text-blue-500" />
    },
    {
      title: "3D Modeling for Environmental & Industry",
      desc: "Design realistic and immersive environments, props, and architectural visualizations that set the perfect scene for your game.",
      icon: <Box className="w-7 h-7 text-blue-500" />
    },
    {
      title: "3D Modeling for Virtual Reality Games",
      desc: "Build highly optimized, low-latency 3D models specifically designed to maintain immersion in virtual reality experiences.",
      icon: <Glasses className="w-7 h-7 text-blue-500" />
    },
    {
      title: "3D Character Design & Animation",
      desc: "From concept art to fully rigged characters, we breathe life into heroes and creatures with precise modeling and fluid animation.",
      icon: <User className="w-7 h-7 text-blue-500" />
    },
    {
      title: "Custom 3D Modeling Services",
      desc: "Need something unique? We provide bespoke 3D modeling solutions tailored exactly to your game's unique artistic vision.",
      icon: <Settings className="w-7 h-7 text-blue-500" />
    }
  ];

  const features = [
    { title: "High Detail & Complexity", icon: <PenTool className="w-6 h-6 text-blue-500" />, desc: "We focus on the micro-details that make models look hyper-realistic, ensuring your game visually stuns your audience." },
    { title: "Texturing & Materials", icon: <Paintbrush className="w-6 h-6 text-blue-500" />, desc: "Applying advanced PBR (Physically Based Rendering) textures and materials to give surfaces a lifelike appearance." },
    { title: "Advanced Lighting", icon: <Sun className="w-6 h-6 text-blue-500" />, desc: "Ensuring models react perfectly to dynamic lighting, enhancing the depth, mood, and realism of your 3D environments." },
    { title: "Animation & Rigging", icon: <Move className="w-6 h-6 text-blue-500" />, desc: "Expert rigging techniques that allow for natural, seamless motion and complex character animations." },
    { title: "Optimization for Performance", icon: <Gauge className="w-6 h-6 text-blue-500" />, desc: "We carefully manage polygon counts to ensure optimal performance and high frame rates without sacrificing visual fidelity." },
    { title: "Continuous Improvement", icon: <TrendingUp className="w-6 h-6 text-blue-500" />, desc: "Iterative refinement based on feedback and performance testing to deliver the highest quality 3D assets." }
  ];

  const tools = [
    { name: "Autodesk Maya", icon: <Box className="w-5 h-5 text-red-500" /> },
    { name: "Blender", icon: <Hexagon className="w-5 h-5 text-orange-500" /> },
    { name: "ZBrush", icon: <Cuboid className="w-5 h-5 text-gray-400" /> },
    { name: "3ds Max", icon: <Box className="w-5 h-5 text-teal-500" /> },
    { name: "Substance Painter", icon: <Palette className="w-5 h-5 text-red-400" /> },
    { name: "Cinema 4D", icon: <Layers className="w-5 h-5 text-blue-500" /> },
    { name: "Unity", icon: <Box className="w-5 h-5 text-slate-800" /> },
    { name: "Unreal Engine", icon: <Hexagon className="w-5 h-5 text-blue-600" /> },
    { name: "Marvelous Designer", icon: <Triangle className="w-5 h-5 text-purple-500" /> }
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
              3D Modeling <br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-[#4B56D2] to-indigo-600 bg-clip-text text-transparent">
                For Games
              </span>
            </h1>

            <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              Transforming visionary concepts into stunning 3D realities. We specialize in high-quality 3D asset creation for multiple platforms, ensuring immersive and captivating visual experiences.
            </p>

            <div className="pt-4 w-full flex justify-center md:justify-start gap-4">
              <Link
                href="/#contact-form"
                className="inline-flex items-center justify-center text-white font-bold text-[15px] tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 select-none w-auto h-[60px] py-4 px-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
              >
                Let's Talk
              </Link>
            </div>
          </div>
          
          <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden flex items-center justify-center">
            {/* Visual placeholder for the 3D model wireframes */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1c29] via-[#0f172a] to-[#1e293b] rounded-[40px] shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay rounded-[40px]" />
              
              {/* Wireframe grids to mimic 3D models */}
              <div className="absolute w-[150%] h-[150%] bg-blue-500/10 blur-[60px] rounded-full animate-pulse" />
              
              <div className="relative z-10 grid grid-cols-2 gap-8 p-8">
                 <div className="w-24 h-24 border border-blue-400/30 rounded-xl flex items-center justify-center bg-blue-500/10 backdrop-blur-sm animate-pulse" style={{ animationDelay: '0.1s' }}>
                    <Box className="w-12 h-12 text-blue-400 opacity-80" strokeWidth={1} />
                 </div>
                 <div className="w-24 h-24 border border-indigo-400/30 rounded-full flex items-center justify-center bg-indigo-500/10 backdrop-blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <Cuboid className="w-12 h-12 text-indigo-400 opacity-80" strokeWidth={1} />
                 </div>
                 <div className="w-24 h-24 border border-purple-400/30 rounded-full flex items-center justify-center bg-purple-500/10 backdrop-blur-sm animate-pulse" style={{ animationDelay: '1.0s' }}>
                    <Hexagon className="w-12 h-12 text-purple-400 opacity-80" strokeWidth={1} />
                 </div>
                 <div className="w-24 h-24 border border-cyan-400/30 rounded-lg flex items-center justify-center bg-cyan-500/10 backdrop-blur-sm animate-pulse" style={{ animationDelay: '1.5s' }}>
                    <Layers className="w-12 h-12 text-cyan-400 opacity-80" strokeWidth={1} />
                 </div>
              </div>
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
              3D Modeling Services <span className="text-blue-600">For Games</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Push the boundaries of visual fidelity with our custom 3D modeling services. We craft highly detailed characters, environments, and props that perfectly match your game's art direction.
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
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Hire the Best at Krazio</h3>
            <p className="text-blue-100 max-w-xl text-lg">We Deliver Success. Accelerate your gaming project with top-tier 3D artists.</p>
          </div>
          <Link href="/#contact-form" className="relative z-10 whitespace-nowrap px-8 py-4 bg-white text-[#4B56D2] rounded-full font-bold hover:bg-slate-50 transition-all shadow-md hover:-translate-y-1">
            Let's Talk
          </Link>
        </div>
      </section>

      {/* 5. Approach (Feature-Rich) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 max-w-4xl mx-auto">
              Our Feature-Rich 3D Modeling Services For Games
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((item, idx) => (
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

      {/* 6. Tech Stack (Modern Art) - DARK THEME */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1C] border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            3D Modeling Touch of <span className="text-blue-500">Modern Art</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12">We use the most advanced modeling, sculpting, and texturing software to create state-of-the-art 3D assets that meet the high standards of modern gaming.</p>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            {tools.map((tool, idx) => (
              <div key={idx} className="flex items-center gap-3 px-6 py-4 bg-[#131B2C] border border-slate-800 rounded-full hover:border-blue-500/50 hover:bg-[#1A2338] hover:shadow-lg hover:shadow-blue-900/20 transition-all cursor-default">
                {tool.icon}
                <span className="font-bold text-slate-200">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 max-w-4xl mx-auto">
            Give Your Game Ideas An Artistic <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-16">Empower your business with cutting-edge 3D modeling solutions. Drive engagement, boost revenue, and achieve sustainable growth with Krazio.</p>
          
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
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto rounded-[32px] bg-gradient-to-br from-[#2A337E] to-[#4B56D2] overflow-hidden relative p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Looking for the Best 3D Game Modeling?</h3>
            <p className="text-blue-100 max-w-xl text-lg">Bring your visionary game ideas to life with our expert 3D artists.</p>
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
               alt="3D Game Modeling Team" 
               className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Why Choose Krazio for <span className="text-blue-600">3D Modeling</span> Services?
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              With years of expertise in game art, our team delivers captivating 3D models tailored to your vision. We blend creativity with technical excellence to produce assets that stand out in a competitive market.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                'Proficient in Top 3D Modeling Tools', 
                'Specialized in High/Low Poly Gaming Assets', 
                'Dedicated QA & Pipeline Integration',
                'Agile & Collaborative Art Process'
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
        title={<>Looking for an art team? <br className="hidden md:block"/> Start a Conversation</>}
        description=""
        buttonText="Let's Talk"
        buttonHref="/#contact-form"
      />

    </div>
  );
}
