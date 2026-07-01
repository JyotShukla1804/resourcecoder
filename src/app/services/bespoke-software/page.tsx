"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { TrustedBy } from "@/components/TrustedBy";
import { HireInterview } from "@/components/HireInterview";

const CobeGlobe = dynamic(() => import("@/components/CobeGlobe").then(mod => mod.CobeGlobe), { ssr: false });


export default function BespokeSoftwarePage() {
  const [activeCapTab, setActiveCapTab] = useState(0);

  const capabilities = [
    {
      title: "AI & Machine Learning",
      desc: "Implement smart predictive analytics, natural language processing, and automated decision-making engines into your custom software.",
      features: [
        "Predictive Modeling & Forecasts",
        "Natural Language Processing (NLP)",
        "Computer Vision & Image Search",
        "Recommendation Engines"
      ],
      techs: ["TensorFlow", "PyTorch", "Python", "OpenCV", "OpenAI API"]
    },
    {
      title: "Mobile App Development",
      desc: "Build feature-rich, highly performant iOS and Android mobile apps customized to your user base and business requirements.",
      features: [
        "Native iOS & Android apps",
        "Cross-platform React Native apps",
        "Offline-first mobile architecture",
        "Biometric authentication & security"
      ],
      techs: ["React Native", "Swift", "Kotlin", "Flutter", "TypeScript"]
    },
    {
      title: "Web Development",
      desc: "Create scalable SaaS platforms, enterprise portals, and high-performance web applications built on modern frameworks.",
      features: [
        "Custom SaaS platforms",
        "Enterprise portals & dashboards",
        "Serverless web architectures",
        "API first development & integrations"
      ],
      techs: ["Next.js", "React", "Node.js", "GraphQL", "PostgreSQL"]
    },
    {
      title: "UI/UX Design",
      desc: "Create immersive user interfaces designed for conversion, ease of use, and maximum visual appeal matching modern standards.",
      features: [
        "Interactive wireframes & mockups",
        "User persona research & testing",
        "Consistent brand design systems",
        "Micro-animations & transitions"
      ],
      techs: ["Figma", "Adobe XD", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Cloud Solutions",
      desc: "Deploy, manage, and scale your software in secure cloud environments engineered for high availability and low latency.",
      features: [
        "AWS & Google Cloud setups",
        "Kubernetes & Docker containerization",
        "Continuous Deployment (CI/CD)",
        "Zero-downtime database scaling"
      ],
      techs: ["AWS", "Google Cloud", "Kubernetes", "Docker", "GitHub Actions"]
    },
    {
      title: "Software Testing",
      desc: "Deliver bug-free code with extensive manual and automated testing suites covering security, performance, and functionality.",
      features: [
        "Automated end-to-end testing",
        "Load & volume stress testing",
        "Security & vulnerability audits",
        "Continuous QA regression testing"
      ],
      techs: ["Cypress", "Jest", "Playwright", "Postman", "SonarQube"]
    }
  ];

  const outcomes = [
    {
      title: "Product Scalability",
      desc: "Our architectures are built to scale effortlessly from 1,000 to millions of active users without performance bottlenecks."
    },
    {
      title: "IP Ownership",
      desc: "You retain 100% intellectual property ownership. The source code, assets, and databases are completely yours from day one."
    },
    {
      title: "Predictable Delivery",
      desc: "Using agile sprints, we ensure deliverables are shipped on time, with transparent progress reports and constant communication."
    }
  ];

  const industries = [
    { name: "Retail & E-commerce", img: "/success_food.png", desc: "Custom digital marketplaces and checkout engines." },
    { name: "Manufacturing", img: "/team_collab_sticky.png", desc: "Automated workflow and factory resource management." },
    { name: "Education", img: "/why-krazio.jpg", desc: "Smart learning systems and student dashboards." },
    { name: "Healthcare", img: "/success_transport.png", desc: "HIPAA-compliant software and telemedicine tools." },
    { name: "Real Estate", img: "/vision-earth.png", desc: "Immersive property portals and booking platforms." },
    { name: "Finance & Banking", img: "/success_finance.png", desc: "Secure transaction channels and fintech portals." }
  ];

  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">

      {/* 1. Custom Hero Section with perspective grid and floating WebGL Globe */}
      <section className="relative w-full min-h-[95vh] flex items-center bg-white pt-32 pb-20 overflow-hidden">
        {/* Background perspective grid floor */}
        <div className="absolute bottom-0 left-0 right-0 h-[300px] w-full grid-floor pointer-events-none opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Content */}
            <div className="lg:col-span-6 text-left space-y-8 max-w-3xl">
              <div className="inline-flex items-center justify-center bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 text-[#4B56D2] font-semibold text-xs tracking-[0.1em] uppercase">
                Bespoke Engineering
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                We Build Software <br className="hidden sm:block" />
                <span>and Products </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-indigo-600">
                  That Accelerate Business Growth.
                </span>
              </h1>

              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                Turn your vision into premium, custom-engineered software. From strategy and design to deployment and scaling, we build robust solutions tailored specifically to your operational goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all bg-[#4B56D2] rounded-full hover:bg-[#3d46a8] hover:shadow-[0_0_20px_rgba(75,86,210,0.25)]"
                >
                  Get Started
                </Link>
                <Link
                  href="#about-section"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-slate-700 transition-all border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 gap-2"
                >
                  <svg className="w-4 h-4 text-[#4B56D2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Video
                </Link>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-12 border-t border-slate-100 mt-12">
                <div>
                  <div className="text-3xl font-extrabold text-[#4B56D2]">10+</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#4B56D2]">350+</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Projects Done</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#4B56D2]">150+</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Right Column: Globe */}
            <div className="lg:col-span-6 flex items-center justify-center w-full -mt-16">
              <div className="w-full" style={{ height: "520px" }}>
                <CobeGlobe />
              </div>
            </div>

          </div>
        </div>

        <style>{`
          .grid-floor {
            background-image: linear-gradient(rgba(75, 86, 210, 0.08) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(75, 86, 210, 0.08) 1px, transparent 1px);
            background-size: 32px 32px;
            transform: perspective(600px) rotateX(62deg);
            transform-origin: bottom;
          }
        `}</style>
      </section>

      {/* 2. Trusted By logo slider section */}
      <TrustedBy bgColor="bg-[#fafafa]" />

      {/* 3. Outcomes / Guarantees Section */}
      <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column */}
            <div className="space-y-6">
              <div className="text-[#4B56D2] font-semibold text-xs tracking-wider uppercase">Our Commitment</div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Krazio Cloud.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-indigo-600">We Guarantee Outcomes.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                We believe custom software should not be an uncertain investment. We structure our bespoke software engagements to deliver verified business value on predictable timelines.
              </p>
              <div className="pt-4">
                <Link href="#contact-form" className="text-sm font-bold text-[#4B56D2] hover:text-[#3d46a8] flex items-center gap-2 group transition-colors">
                  Learn about our outcomes framework
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column (Cards stack) */}
            <div className="grid grid-cols-1 gap-6">
              {outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:border-slate-300/50 transition-all flex gap-6 items-start"
                >
                  <div className="w-12 h-12 bg-indigo-50 border border-indigo-100/60 rounded-xl flex items-center justify-center flex-shrink-0 text-[#4B56D2]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{outcome.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{outcome.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Stats section: Numbers That Define Us */}
      <section className="w-full bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Numbers That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-indigo-600">Define Us</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto text-base">
            Behind every code execution are milestones of trust and engineering excellence built over the decade.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { metric: "98%", label: "Client Retention Rate", desc: "Long-term relationships founded on transparent, quality-driven software delivery." },
            { metric: "100+", label: "Engineers Ready", desc: "Talented specialists across UI/UX, Devops, Backend, Mobile, and QA automation." },
            { metric: "24/7", label: "Sync Support", desc: "Operations built around round-the-clock continuity and fast response windows." }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl transition-all text-center space-y-4">
              <div className="text-5xl font-extrabold text-[#4B56D2]">{stat.metric}</div>
              <h3 className="text-lg font-bold text-slate-900">{stat.label}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 70% Ideas Stall Banner */}
      <section className="w-full relative overflow-hidden bg-[#4B56D2] py-20 lg:py-24">
        {/* Abstract pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-pattern-bespoke" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid-pattern-bespoke)" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-cyan-400/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-indigo-900/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            70% of Ideas Stall. <br />
            Ours Scale Beyond Expectations.
          </h2>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Turn your software architecture roadmap into a running machine. We eliminate architectural debt and execution friction to ship high-quality custom software fast.
          </p>
          <div className="pt-2">
            <Link
              href="#contact-form"
              className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold text-[#4B56D2] bg-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* 6. About Team / Video Section */}
      <section id="about-section" className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left: Team image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3]">
                <img
                  src="/team_working_table.png"
                  alt="Krazio Engineering Team"
                  className="w-full h-full object-cover"
                />
                {/* Decorative border glow */}
                <div className="absolute inset-0 border border-white/20 rounded-2xl" />
              </div>
            </div>

            {/* Right: Text block */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-[#4B56D2] font-semibold text-xs tracking-wider uppercase">Who We Are</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Award-Winning End-to-End AI &amp; Innovative Technology Solutions Company
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  At Krazio, we bring together senior software developers, product managers, and cloud architects to engineer tailor-made software solutions that run, scale, and optimize operations.
                </p>
                <p>
                  Our agile engineering culture enables us to partner deeply with software-driven giants and fast-scaling innovators worldwide. We focus strictly on clean code, test coverage, and transparent milestone deliveries.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Interactive Capabilities tabs section */}
      <section className="w-full bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-indigo-600">Capabilities</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Comprehensive software development capabilities across the entire lifecycle, customized to your technical environment.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Sidebar Tabs */}
          <div className="w-full md:w-1/3 space-y-2">
            {capabilities.map((cap, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCapTab(idx)}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all font-semibold ${activeCapTab === idx
                    ? "bg-[#4B56D2] text-white shadow-lg shadow-[#4B56D2]/25"
                    : "bg-white text-slate-600 hover:bg-indigo-50/50 hover:text-[#4B56D2]"
                  }`}
              >
                {cap.title}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full md:w-2/3 bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 min-h-[360px] flex items-center relative overflow-hidden shadow-sm">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl pointer-events-none" />

            <div key={activeCapTab} className="animate-fade-in-up w-full z-10 space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">{capabilities[activeCapTab].title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {capabilities[activeCapTab].desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities[activeCapTab].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-700">
                    <svg className="w-5 h-5 text-[#4B56D2] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Technologies strip */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2 items-center">
                <span className="text-xs text-slate-400 font-bold uppercase mr-2">Tech Stack:</span>
                {capabilities[activeCapTab].techs.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Stay ahead with Krazio (Blogs Grid) */}
      <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Stay Ahead with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-indigo-600">Krazio</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto">
            Discover deep-dive research and implementation strategies directly from our engineering team.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Revolutionizing Retail: How AI is transforming sales funnel velocity",
              tag: "Artificial Intelligence",
              img: "/success_food.png",
              readTime: "5 min read"
            },
            {
              title: "Smart Logistics: The future of supply chain custom microservices",
              tag: "Cloud Solutions",
              img: "/success_transport.png",
              readTime: "7 min read"
            },
            {
              title: "Winning Team: How building the right tech culture speeds up delivery",
              tag: "Engineering Culture",
              img: "/team_collab_sticky.png",
              readTime: "6 min read"
            }
          ].map((blog, idx) => (
            <div key={idx} className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-slate-300 transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#4B56D2]">
                  {blog.tag}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#4B56D2] transition-colors leading-snug">
                  {blog.title}
                </h3>
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>{blog.readTime}</span>
                  <span className="font-bold text-[#4B56D2] group-hover:underline flex items-center gap-1">
                    Read More
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/insights"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-[#4B56D2] border border-[#4B56D2]/25 rounded-full hover:bg-indigo-50/50 transition-all"
          >
            View all blogs
          </Link>
        </div>
      </section>

      {/* 9. AI / Robot CTA Banner with pure CSS/SVG Robot Avatar */}
      <section className="w-full bg-[#0a0a0f] py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-950 relative overflow-hidden">
        {/* Geometric highlights */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your Competitors Aren't Just Using AI. <br className="hidden sm:block" />
              They're Profiting From It.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Integrate custom large language models, machine learning automations, and intelligent data scrapers built strictly into your native cloud operations.
            </p>
            <div className="pt-4">
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all bg-[#4B56D2] rounded-full hover:bg-[#3d46a8] hover:shadow-[0_0_20px_rgba(75,86,210,0.25)]"
              >
                Explore AI Capabilities
              </Link>
            </div>
          </div>

          {/* Right illustration: Cute animated robot in CSS/SVG */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="relative w-56 h-56 flex items-center justify-center bg-[#111116] border border-slate-800 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] group overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#4B56D2]/5 rounded-full blur-[40px] pointer-events-none" />

              {/* Cute SVG Robot */}
              <svg className="w-36 h-36 z-10 animate-[robot-bounce_4s_ease-in-out_infinite]" fill="none" viewBox="0 0 100 100">
                {/* Antennas */}
                <path d="M 50 15 L 50 30" stroke="#4B56D2" strokeWidth="3" strokeLinecap="round" />
                <circle cx="50" cy="12" r="5" fill="#4B56D2" className="animate-pulse" />

                {/* Ears */}
                <rect x="20" y="38" width="6" height="14" rx="3" fill="#3d46a8" />
                <rect x="74" y="38" width="6" height="14" rx="3" fill="#3d46a8" />

                {/* Robot Head */}
                <rect x="24" y="28" width="52" height="34" rx="14" fill="#1b1c24" stroke="#4B56D2" strokeWidth="2.5" />

                {/* Screen / Face */}
                <rect x="29" y="33" width="42" height="24" rx="9" fill="#08080a" />

                {/* Glowing Eyes */}
                <circle cx="41" cy="45" r="4.5" fill="#00C950" className="animate-ping opacity-60" />
                <circle cx="41" cy="45" r="3.5" fill="#00C950" />

                <circle cx="59" cy="45" r="4.5" fill="#00C950" className="animate-ping opacity-60" />
                <circle cx="59" cy="45" r="3.5" fill="#00C950" />

                {/* Cute smile */}
                <path d="M 45 52 Q 50 55 55 52" stroke="#00C950" strokeWidth="2" strokeLinecap="round" />

                {/* Neck */}
                <rect x="44" y="62" width="12" height="6" rx="2" fill="#2d2f3b" />

                {/* Body (partial) */}
                <path d="M 30 68 L 70 68 L 66 84 L 34 84 Z" fill="#1b1c24" stroke="#4B56D2" strokeWidth="2" />

                {/* Chest light */}
                <circle cx="50" cy="76" r="3" fill="#4B56D2" className="animate-pulse" />
              </svg>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes robot-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}</style>
      </section>

      {/* 10. Who We Serve (Industries Grid) */}
      <section className="w-full bg-[#fafafa] py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="bg-indigo-50 border border-indigo-100 text-[#4B56D2] font-semibold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full">
            Who We Serve
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-6">
            Bespoke Solutions Built for <span className="text-[#4B56D2]">Any Industry</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto">
            We adapt our engineering processes to the specific regulatory, functional, and security guidelines of your sector.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-72"
            >
              <div className="h-2/3 overflow-hidden relative">
                <img
                  src={ind.img}
                  alt={ind.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white tracking-wide">
                  {ind.name}
                </h3>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-slate-500 text-xs leading-relaxed">{ind.desc}</p>
                <Link href="#contact-form" className="text-xs font-bold text-[#4B56D2] group-hover:underline flex items-center gap-1.5 mt-2">
                  Explore Solutions
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Main Contact Form (HireInterview) */}
      <section className="bg-black">
        <div id="contact-form">
          {/* Reusing the beautiful contact form component */}
          {/* Note: In Next.js, importing HireInterview dynamically is not required as it handles SSR natively. */}
          {/* But to represent the inquiry section as requested, we render a custom instance wrapper */}
          <HireInterview />
        </div>
      </section>

    </div>
  );
}
