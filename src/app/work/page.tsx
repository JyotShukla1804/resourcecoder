export default function WorkPage() {
  const projects = [
    { title: "Smart Shopping Cart System", desc: "Custom IoT weight scanner integration syncing inventory databases in under 200ms.", metric: "60% Reduction in Checkout Delay" },
    { title: "AI-Powered CRM Platform", desc: "Centralized lead scoring tool utilizing LLM fine-tuning and retrieval-augmented generation pipelines.", metric: "40% Sales Operations Efficiency Gain" },
    { title: "Headless E-commerce Portal", desc: "Migrated a legacy monolith into a headless React configuration handling 20k concurrent users.", metric: "85% Mobile Page Speed Increase" }
  ];

  return (
    <div className="relative min-h-[60vh] flex flex-col justify-center items-center py-12">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl text-center space-y-6">
        <span className="text-xs font-black uppercase tracking-widest text-[#4B56D2]">
          Portfolio
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Our Work
        </h1>
        <p className="text-slate-455 text-slate-400 text-sm sm:text-base leading-relaxed">
          Case studies of secure, low-latency, and high-concurrency systems built by our offshore teams.
        </p>

        {/* Portfolio Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-900 p-6 rounded-2xl flex flex-col justify-between h-48">
              <div>
                <span className="text-[10px] font-bold text-[#4B56D2] block mb-2 uppercase tracking-wide">
                  {proj.metric}
                </span>
                <h4 className="text-white font-bold text-sm mb-2">{proj.title}</h4>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
