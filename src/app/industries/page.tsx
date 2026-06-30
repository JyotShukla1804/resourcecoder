export default function IndustriesPage() {
  const industries = [
    { name: "Fintech & Finance", desc: "Secure transaction engines, analytics portals, and compliance gates." },
    { name: "Healthcare & Medtech", desc: "HIPAA-compliant client records, remote tracking apps, and medical portals." },
    { name: "Edtech & E-Learning", desc: "Interactive virtual spaces, online courses, and customized LMS portals." },
    { name: "E-Commerce & Retail", desc: "Headless shopping cards, checkout paths, and warehouse inventory syncing." },
    { name: "Logistics & Supply Chain", desc: "Real-time shipping maps, logistics tools, and fleet scheduling dashboards." },
    { name: "Real Estate & Proptech", desc: "3D home tour links, automated leasing checklists, and property records." }
  ];

  return (
    <div className="relative min-h-[60vh] flex flex-col justify-center items-center py-12">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl text-center space-y-6">
        <span className="text-xs font-black uppercase tracking-widest text-[#4B56D2]">
          Sectors
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Industries We Serve
        </h1>
        <p className="text-slate-455 text-slate-400 text-sm sm:text-base leading-relaxed">
          Deep engineering expertise across domains with custom compliance protocols for each sector.
        </p>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
          {industries.map((ind, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-900 p-6 rounded-2xl">
              <h4 className="text-white font-bold text-sm mb-2">{ind.name}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
