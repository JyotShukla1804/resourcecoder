import React from "react";
import Link from "next/link";
import { CheckCircle2, Monitor, Cpu, ShieldCheck, Settings } from "lucide-react";

export function HomeITRecruitment() {
  const benefits = [
    {
      title: "Dedicated Development Teams",
      desc: "Experienced professionals aligned with your business goals.",
    },
    {
      title: "Flexible Engagement Models",
      desc: "Scale your team on demand with dedicated developers or an Offshore Development Center (ODC).",
    },
    {
      title: "Transparent Collaboration",
      desc: "Agile delivery, regular updates, and a dedicated point of contact throughout your project.",
    },
    {
      title: "Expertise Across Technologies",
      desc: "AI, Machine Learning, AR/VR/XR, Web, Mobile, Enterprise Software, Cloud, and Custom Development.",
    }
  ];

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative z-10">
      <div className="max-w-[1358px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f0f4ff] border border-[#d6e0ff] text-[#4B56D2] font-bold text-[11px] sm:text-xs tracking-widest uppercase mb-4">
            Why Choose Krazio Cloud?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 leading-[1.15] mb-6">
            Scale Your Business with Expert Technology Talent
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            Accelerate your digital transformation with Krazio Cloud's dedicated development teams. Gain access to experienced software developers, AI engineers, AR/VR/XR specialists, UI/UX designers, QA professionals, and technology consultants who seamlessly integrate with your team to build secure, scalable, and future ready digital solutions.
          </p>

          <div className="flex flex-col gap-4 mb-10 w-full">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4B56D2] shrink-0 mt-0.5" />
                <div className="text-sm sm:text-[15px] text-slate-700 leading-snug">
                  <span className="font-bold text-slate-900">{benefit.title}</span> {benefit.desc}
                </div>
              </div>
            ))}
          </div>

          <Link
            href="#interview-section"
            className="btn-ripple inline-flex items-center justify-center text-white font-bold text-xs tracking-widest py-4.5 px-8 rounded-full transition-shadow duration-300 uppercase shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.5)] bg-[#4B56D2]"
          >
            Start Hiring - Get a Shortlist in 48hrs
          </Link>
        </div>

        {/* Right Graphic - Orbiting Nodes */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[500px]">
          <div className="relative w-full max-w-[500px] aspect-square flex justify-center items-center">
            
            {/* Concentric Circles */}
            <div className="absolute inset-4 border-[1px] border-slate-100 rounded-full" />
            <div className="absolute inset-16 border-[1px] border-slate-100 rounded-full" />
            <div className="absolute inset-28 border-[1px] border-slate-100 rounded-full" />
            <div className="absolute inset-40 border-[1px] border-slate-100 rounded-full border-dashed" />

            {/* Center Logo/Badge */}
            <div className="relative z-20 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-2xl py-4 px-8 border border-slate-50 flex items-center justify-center animate-float">
              <span className="text-2xl font-black tracking-tight text-slate-900">
                Resource<span className="text-[#4B56D2]">Coders</span>
              </span>
            </div>

            {/* Orbiting Elements */}
            
            {/* Avatar 1 (Top Right) */}
            <div className="absolute top-[8%] right-[22%] z-10 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden bg-slate-100">
                <img src="https://i.pravatar.cc/150?img=11" alt="Developer" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Avatar 2 (Bottom Left) */}
            <div className="absolute bottom-[15%] left-[12%] z-10 animate-float" style={{ animationDelay: '1.2s' }}>
              <div className="w-14 h-14 rounded-full border-4 border-white shadow-lg overflow-hidden bg-slate-100">
                <img src="https://i.pravatar.cc/150?img=33" alt="Developer" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Avatar 3 (Right Middle) */}
            <div className="absolute top-[45%] -right-[2%] z-10 animate-float" style={{ animationDelay: '2.1s' }}>
              <div className="w-12 h-12 rounded-full border-[3px] border-white shadow-lg overflow-hidden bg-slate-100 ring-2 ring-purple-100">
                <img src="https://i.pravatar.cc/150?img=12" alt="Developer" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Avatar 4 (Top Left) */}
            <div className="absolute top-[25%] left-[5%] z-10 animate-float" style={{ animationDelay: '0.8s' }}>
              <div className="w-12 h-12 rounded-full border-[3px] border-white shadow-lg overflow-hidden bg-slate-100 ring-2 ring-blue-100">
                <img src="https://i.pravatar.cc/150?img=5" alt="Developer" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Badge 1: Software Development */}
            <div className="absolute top-[18%] left-[2%] z-20 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="bg-white rounded-full py-2 px-4 shadow-md border border-slate-50 flex items-center gap-2">
                <Monitor className="w-4 h-4 text-red-500" />
                <span className="text-[11px] font-bold text-slate-800">Software Development</span>
              </div>
            </div>

            {/* Badge 2: Cybersecurity */}
            <div className="absolute top-[25%] right-[2%] z-20 animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-full py-2 px-4 shadow-md border border-slate-50 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-yellow-500" />
                <span className="text-[11px] font-bold text-slate-800">Cybersecurity</span>
              </div>
            </div>

            {/* Badge 3: AI & ML */}
            <div className="absolute bottom-[28%] left-[0%] z-20 animate-float" style={{ animationDelay: '1.8s' }}>
              <div className="bg-white rounded-full py-2 px-4 shadow-md border border-slate-50 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-500" />
                <span className="text-[11px] font-bold text-slate-800">AI & ML</span>
              </div>
            </div>

            {/* Badge 4: Automation */}
            <div className="absolute bottom-[20%] right-[10%] z-20 animate-float" style={{ animationDelay: '0.9s' }}>
              <div className="bg-white rounded-full py-2 px-4 shadow-md border border-slate-50 flex items-center gap-2">
                <Settings className="w-4 h-4 text-green-500" />
                <span className="text-[11px] font-bold text-slate-800">Automation</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
