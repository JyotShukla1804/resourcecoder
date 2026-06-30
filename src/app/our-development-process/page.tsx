export default function OurDevelopmentProcessPage() {
  const steps = [
    { number: "01", title: "Scope Alignment", desc: "Define requirements, stack, and developer headcount constraints." },
    { number: "02", title: "Talent Selection", desc: "Review handpicked CVs of top 1% offshore tech specialists." },
    { number: "03", title: "Secure Onboarding", desc: "Establish bilateral NDAs and secure workstation portals." },
    { number: "04", title: "Agile Execution", desc: "Integrate into Slack/Jira channels with daily standup checks." },
    { number: "05", title: "Continuous QA Audits", desc: "Run daily testing regressions and automated pipelines." }
  ];

  return (
    <div className="relative min-h-[60vh] flex flex-col justify-center items-center py-12">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl text-center space-y-6">
        <span className="text-xs font-black uppercase tracking-widest text-[#4B56D2]">
          Workflow
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Our Development Process
        </h1>
        <p className="text-slate-455 text-slate-400 text-sm sm:text-base leading-relaxed">
          A highly structured onboarding framework designed to minimize latency and scale sprints smoothly.
        </p>

        {/* Timeline Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12 text-left">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-900 p-5 rounded-2xl flex flex-col justify-between h-40">
              <div className="text-xl font-black text-[#4B56D2] leading-none">{s.number}</div>
              <div>
                <h4 className="text-white font-bold text-xs mb-1">{s.title}</h4>
                <p className="text-slate-500 text-[10px] leading-tight">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
