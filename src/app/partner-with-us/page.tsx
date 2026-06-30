export default function PartnerWithUsPage() {
  return (
    <div className="relative min-h-[60vh] flex flex-col justify-center items-center py-12">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-2xl text-center space-y-6">
        <span className="text-xs font-black uppercase tracking-widest text-[#4B56D2]">
          Partner
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Partner With Us
        </h1>
        <p className="text-slate-455 text-slate-400 text-sm sm:text-base leading-relaxed">
          Transparent cooperation plans built around flat hourly or dedicated monthly structures with zero hidden overheads.
        </p>

        {/* Contact form mockup container */}
        <div id="contact" className="bg-slate-900/50 border border-slate-900 p-8 rounded-3xl text-left mt-8 space-y-4">
          <h3 className="text-white font-bold mb-2">Inquiry Form</h3>
          <p className="text-slate-500 text-xs">Complete this checklist to get in touch with our tech advisors and schedule standard developer interviews.</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-10 bg-slate-950 border border-slate-800 rounded-lg px-3 flex items-center text-xs text-slate-500">Name</div>
            <div className="h-10 bg-slate-950 border border-slate-800 rounded-lg px-3 flex items-center text-xs text-slate-500">Email</div>
          </div>
          <div className="h-20 bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-500">Describe your project requirements...</div>
          <button className="w-full bg-[#4B56D2] hover:bg-[#0022cc] text-white text-xs font-bold py-3 rounded-lg transition-colors">
            Submit Inquiry
          </button>
        </div>
      </div>
    </div>
  );
}
