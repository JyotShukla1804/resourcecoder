import { HireHero } from "@/components/HireHero";
import { TechSection } from "@/components/TechSection";
import { HireInterview } from "@/components/HireInterview";
import { TrustedBy } from "@/components/TrustedBy";

export default function ServicesPage() {
  const heroData = {
    blocks: [
      {
        type: "header",
        data: {
          text: "Premium <br/><span class='bg-gradient-to-r from-[#4B56D2] to-[#4B56D2] bg-clip-text text-transparent'>Software Services</span>"
        }
      },
      {
        type: "paragraph",
        data: {
          text: "We provide world-class engineering solutions. Whether you need an offshore development center, dedicated experts, or a bespoke software solution built from scratch, our team delivers excellence tailored to your business goals."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full bg-white">
      <HireHero
        data={heroData}
        btn1Text="View Engagement Models"
        btn1Url="#models"
        btn2Text="Talk to an Expert"
        btn2Url="#contact-form"
      />

      <TrustedBy />

      <section id="models" className="py-24 bg-[#f8f9fc]">
        <div className="max-w-[1358px] mx-auto px-6 md:px-[55px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Our Engagement Models</h2>
            <p className="text-[#5e6b7e] text-lg max-w-3xl mx-auto leading-relaxed">Choose the collaboration model that best fits your project requirements, budget, and timeline. We offer flexible options designed to scale with your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/services/offshore-development" className="bg-white p-10 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_60px_rgba(75,86,210,0.12)] hover:border-[#4B56D2]/30 transition-all duration-300 group flex flex-col h-full">
              <div className="w-20 h-20 rounded-[24px] bg-[#f0f2ff] text-[#4B56D2] flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:bg-[#4B56D2] group-hover:text-white transition-all duration-300 shadow-sm">🌍</div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[#4B56D2] transition-colors">Offshore Development Center</h3>
              <p className="text-[#5e6b7e] leading-relaxed text-base flex-grow">Establish a dedicated offshore team in India working exclusively on your projects. Gain full operational control, access a massive talent pool, and significantly reduce overhead costs.</p>
              <div className="mt-8 flex items-center text-[#4B56D2] font-semibold text-sm tracking-wide uppercase group-hover:translate-x-2 transition-transform">
                Explore Model <span className="ml-2">→</span>
              </div>
            </a>
            
            <a href="/services/hire-dedicated" className="bg-white p-10 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_60px_rgba(75,86,210,0.12)] hover:border-[#4B56D2]/30 transition-all duration-300 group flex flex-col h-full">
              <div className="w-20 h-20 rounded-[24px] bg-[#f0f2ff] text-[#4B56D2] flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:bg-[#4B56D2] group-hover:text-white transition-all duration-300 shadow-sm">👨‍💻</div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[#4B56D2] transition-colors">Hire Dedicated Developers</h3>
              <p className="text-[#5e6b7e] leading-relaxed text-base flex-grow">Augment your existing team with top 1% talent. Hire pre-vetted experts who integrate seamlessly into your workflow and get custom solutions built precisely as per your requirements.</p>
              <div className="mt-8 flex items-center text-[#4B56D2] font-semibold text-sm tracking-wide uppercase group-hover:translate-x-2 transition-transform">
                Explore Model <span className="ml-2">→</span>
              </div>
            </a>
            
            <a href="/services/bespoke-software" className="bg-white p-10 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_60px_rgba(75,86,210,0.12)] hover:border-[#4B56D2]/30 transition-all duration-300 group flex flex-col h-full">
              <div className="w-20 h-20 rounded-[24px] bg-[#f0f2ff] text-[#4B56D2] flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:bg-[#4B56D2] group-hover:text-white transition-all duration-300 shadow-sm">⚙️</div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[#4B56D2] transition-colors">Bespoke Software Development</h3>
              <p className="text-[#5e6b7e] leading-relaxed text-base flex-grow">End-to-end custom software development. We handle everything from concept, UI/UX design, and architecture to deployment, maintenance, and scale.</p>
              <div className="mt-8 flex items-center text-[#4B56D2] font-semibold text-sm tracking-wide uppercase group-hover:translate-x-2 transition-transform">
                Explore Model <span className="ml-2">→</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <TechSection />
      <HireInterview />
    </div>
  );
}
