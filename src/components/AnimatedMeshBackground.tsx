"use client";

import React from "react";

interface AnimatedMeshBackgroundProps {
  position?: "left" | "center";
}

export function AnimatedMeshBackground({ position = "left" }: AnimatedMeshBackgroundProps) {
  const isCenter = position === "center";

  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{ 
        WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', 
        maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' 
      }}
    >
      {/* Animated Mesh Gradient Background (Now Pure CSS for Performance!) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`animate-mesh-blob-1 absolute top-[0%] ${isCenter ? 'left-[20%]' : 'left-[-10%]'} w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] bg-[#4B56D2]/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70`}
        />
        <div 
          className={`animate-mesh-blob-2 absolute top-[10%] ${isCenter ? 'right-[20%]' : 'left-[10%]'} w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-indigo-400/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70`}
        />
        <div 
          className={`animate-mesh-blob-3 absolute bottom-[5%] ${isCenter ? 'left-[25%]' : 'left-[0%]'} w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-blue-400/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-70`}
        />
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[60px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
    </div>
  );
}
