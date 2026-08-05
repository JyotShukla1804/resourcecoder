import React from 'react';

export function TechSection() { // Tech Section Component
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center">
      <section
        className="w-full max-w-[1358px] min-h-[auto] px-6 md:px-[55px] py-24 rounded-3xl md:rounded-[48px] bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4B56D2] border-0 text-white transition-all duration-300 shadow-[0_20px_50px_rgba(75,86,210,0.15)] relative overflow-hidden mx-auto"
      >
        <div className="max-w-[1018px] mx-auto text-center mb-16">
          <h2
            className="w-full max-w-[1018px] md:min-h-[110px] text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-[#FFFFFF] text-center flex flex-col justify-center items-center transition-all duration-300 mx-auto leading-tight"
          >
            <span>Hire Dedicated Developers for</span>
            <span>Diverse Technology Requirements</span>
          </h2>
          <p className="text-blue-200/80 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto mt-6">
            Hire dedicated developers in India within 48 Hours to enhance your software development<br className="hidden md:inline" />
            capabilities. Our skilled and experienced developers help you build cutting-edge solutions<br className="hidden md:inline" />
            tailored to your business needs. Whether you need AR, VR, XR, Game, web, mobile, AI, we have the right talent for you.
          </p>
        </div>

        <div className="max-w-[1358px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 group">
            <div className="mb-8">
              <img src="/logos/SVG.png" alt="Frontend Developers" className="w-8 h-8 object-contain brightness-0 invert" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Frontend Developers</h3>
            <p className="text-blue-200/70 text-sm">React.js, Vue.js, Angular, Next.js</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 group">
            <div className="mb-8">
              <img src="/logos/iconify-icon.png" alt="Backend Developers" className="w-8 h-8 object-contain brightness-0 invert" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Backend Developers</h3>
            <p className="text-blue-200/70 text-sm">Node.js, Python, Laravel, Java</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 group">
            <div className="mb-8">
              <img src="/logos/SVG (1).png" alt="Mobile App Developers" className="w-8 h-8 object-contain brightness-0 invert" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Mobile App Developers</h3>
            <p className="text-blue-200/70 text-sm">Flutter, React Native, iOS, Android</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 group">
            <div className="mb-8">
              <img src="/logos/SVG (2).png" alt="AI / ML Developers" className="w-8 h-8 object-contain brightness-0 invert" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">AI / ML Developers</h3>
            <p className="text-blue-200/70 text-sm">TensorFlow, PyTorch, OpenAI API</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 group">
            <div className="mb-8">
              <img src="/logos/SVG (3).png" alt="Software Developers" className="w-8 h-8 object-contain brightness-0 invert" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Software Developers</h3>
            <p className="text-blue-200/70 text-sm">C++, C#, .NET, GoLang</p>
          </div>

          {/* Card 6 */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 group">
            <div className="mb-8">
              <img src="/logos/SVG (4).png" alt="Immersive (AR/VR)" className="w-8 h-8 object-contain brightness-0 invert" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Immersive (AR/VR)</h3>
            <p className="text-blue-200/70 text-sm">Unity, Unreal Engine, WebXR</p>
          </div>

        </div>
      </section>
    </div>
  );
}
