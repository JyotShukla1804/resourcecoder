import React from "react";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Glowing Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
    </div>
  );
}
