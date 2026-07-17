import React from "react";
import Link from "next/link";
import { CheckCircle2, UserCheck, FileSignature, CreditCard, Shield, HeartHandshake, Briefcase, ChevronRight } from "lucide-react";

export function HomeEOR() {
  const benefits = [
    {
      title: "We become the legal employer",
      desc: "zero entity registration needed in your remote hub",
    },
    {
      title: "Full payroll processing",
      desc: "tax deductions, bonuses, and on-time payment in local currency",
    },
    {
      title: "Compliance managed",
      desc: "local labor laws and statutory contributions handled with ease",
    },
    {
      title: "HR & employee lifecycle",
      desc: "onboarding, offboarding, leave management, and equipment",
    },
    {
      title: "Works alongside recruitment",
      desc: "we can recruit and employ under EOR in one seamless workflow",
    },
  ];

  const topIcons = [
    { icon: <UserCheck className="w-4 h-4 text-[#4B56D2]" />, label: "Recruitment" },
    { icon: <FileSignature className="w-4 h-4 text-[#4B56D2]" />, label: "Contracts" },
    { icon: <CreditCard className="w-4 h-4 text-[#4B56D2]" />, label: "Payroll" },
    { icon: <HeartHandshake className="w-4 h-4 text-[#4B56D2]" />, label: "Benefits" },
    { icon: <Shield className="w-4 h-4 text-[#4B56D2]" />, label: "Compliance" },
    { icon: <Briefcase className="w-4 h-4 text-[#4B56D2]" />, label: "HR Support" },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9ff] overflow-hidden relative z-10">
      <div className="max-w-[1358px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Left Graphic - Dashboard UI */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] flex justify-center items-center">
          
          {/* Main Dashboard Container */}
          <div className="relative w-full max-w-[500px] h-[500px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden flex flex-col">
            
            {/* Background Grid inside dashboard */}
            <div 
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(#4B56D2 1px, transparent 1px), linear-gradient(90deg, #4B56D2 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}
            />

            {/* Top Icons Bar */}
            <div className="w-full flex justify-between items-center p-6 border-b border-slate-50 relative z-10 bg-white/80 backdrop-blur-sm">
              {topIcons.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 group cursor-default">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider text-center max-w-[50px] leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Dashboard Content Grid */}
            <div className="flex-1 p-6 relative z-10 grid grid-cols-2 gap-6">
              
              {/* Left Column in Dashboard */}
              <div className="flex flex-col gap-6">
                
                {/* Main Employee Card */}
                <div className="bg-[#f2fcf5] rounded-2xl p-4 border border-[#e5f7eb] shadow-sm animate-float" style={{ animationDelay: '0.2s' }}>
                  <div className="w-full h-32 rounded-xl bg-slate-200 mb-4 overflow-hidden relative">
                    <img src="https://i.pravatar.cc/300?img=11" alt="Employee" className="w-full h-full object-cover" />
                    <div className="absolute bottom-2 right-2 bg-green-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> Active
                    </div>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Rahul Sharma</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Senior Fullstack Developer</p>
                </div>

                {/* Team Stats Card */}
                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm animate-float flex flex-col justify-center" style={{ animationDelay: '1.5s' }}>
                  <h3 className="text-2xl font-black text-[#4B56D2] tracking-tight">500+</h3>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1 mb-3">Employees Managed</p>
                  <div className="flex -space-x-2">
                    {[33, 44, 12, 5, 8].map((img, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-100">
                        <img src={`https://i.pravatar.cc/100?img=${img}`} alt="Team" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column in Dashboard - Timeline */}
              <div className="flex flex-col gap-4 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm animate-float" style={{ animationDelay: '0.8s' }}>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Our EOR Process</h4>
                
                {[
                  { title: "Initial Alignment", desc: "Define needs & legal requirements", active: true },
                  { title: "Contract Setup", desc: "Local contracts approved by team", active: true },
                  { title: "Employee Onboarding", desc: "Collect docs & welcome new hire", active: false },
                  { title: "Payroll & Support", desc: "Handle taxes, benefits seamlessly", active: false },
                ].map((step, i) => (
                  <div key={i} className="flex gap-3 relative">
                    {/* Vertical Line */}
                    {i !== 3 && (
                      <div className={`absolute left-2.5 top-6 bottom-[-16px] w-[2px] ${step.active ? 'bg-[#4B56D2]' : 'bg-slate-100'}`} />
                    )}
                    
                    {/* Icon */}
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 relative z-10 ${step.active ? 'bg-[#4B56D2] text-white shadow-md' : 'bg-slate-100 text-slate-400'}`}>
                      {step.active ? <CheckCircle2 className="w-3 h-3" /> : <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />}
                    </div>

                    {/* Text */}
                    <div className="pb-4">
                      <h5 className={`text-xs font-bold ${step.active ? 'text-slate-900' : 'text-slate-500'}`}>{step.title}</h5>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Floating Element outside dashboard */}
          <div className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#4B56D2]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">100% Compliant</h4>
              <p className="text-xs text-slate-500">Zero legal risks</p>
            </div>
          </div>
        </div>


        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f0f4ff] border border-[#d6e0ff] text-[#4B56D2] font-bold text-[11px] sm:text-xs tracking-widest uppercase mb-4">
            Employer of Record (EOR)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 leading-[1.15] mb-6">
            Manage Remote Employees Without a Local Entity
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            You found the right developer. Now you need a legal employer. We become the employer of record - handling payroll, social insurance, compliant contracts, and HR - so you can scale without the overhead of setting up a local entity.
          </p>

          <div className="flex flex-col gap-4 mb-10 w-full">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4B56D2] shrink-0 mt-0.5" />
                <div className="text-sm sm:text-[15px] text-slate-700 leading-snug">
                  <span className="font-bold text-slate-900">{benefit.title}</span> - {benefit.desc}
                </div>
              </div>
            ))}
          </div>

          <Link
            href="#interview-section"
            className="btn-ripple inline-flex items-center justify-center text-white font-bold text-xs tracking-widest py-4.5 px-8 rounded-full transition-shadow duration-300 uppercase shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.5)] bg-[#4B56D2]"
          >
            Get EOR Pricing
          </Link>
        </div>

      </div>
    </section>
  );
}
