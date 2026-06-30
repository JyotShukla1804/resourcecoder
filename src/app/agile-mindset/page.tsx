export default function AgileMindsetPage() {
  return (
    <div className="relative min-h-[60vh] flex flex-col justify-center items-center py-12">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-2xl text-center space-y-6">
        <span className="text-xs font-black uppercase tracking-widest text-[#4B56D2]">
          About Us
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Our Agile Mindset
        </h1>
        <p className="text-slate-450 text-slate-400 text-sm sm:text-base leading-relaxed">
          We operate as a frictionless extension of your internal team. Our developers are trained to adapt to your version control workflows, project timelines, and communication routines.
        </p>

        {/* Content details card */}
        <div className="bg-slate-900/50 border border-slate-900 p-8 rounded-3xl text-left mt-8">
          <h3 className="text-white font-bold mb-4">Core Principles</h3>
          <ul className="space-y-3 text-slate-450 text-slate-400 text-xs">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#4B56D2] rounded-full" />
              Direct access and communication (Slack, Jira, Teams)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#4B56D2] rounded-full" />
              Daily status check-ins and weekly demo sprints
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#4B56D2] rounded-full" />
              Full IP custody transfer with bilateral legal NDAs
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
