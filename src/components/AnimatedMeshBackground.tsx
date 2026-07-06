"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedMeshBackgroundProps {
  position?: "left" | "center";
}

export function AnimatedMeshBackground({ position = "left" }: AnimatedMeshBackgroundProps) {
  const isCenter = position === "center";

  return (
    <>
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute top-[0%] ${isCenter ? 'left-[20%]' : 'left-[-10%]'} w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] bg-[#4B56D2]/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70`}
        />
        <motion.div 
          animate={{ x: [0, -100, 50, 0], y: [0, 100, -50, 0], scale: [1, 0.9, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`absolute top-[10%] ${isCenter ? 'right-[20%]' : 'left-[10%]'} w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-indigo-400/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70`}
        />
        <motion.div 
          animate={{ x: [0, 50, -100, 0], y: [0, -50, 100, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className={`absolute bottom-[5%] ${isCenter ? 'left-[25%]' : 'left-[0%]'} w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-blue-400/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-70`}
        />
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[60px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
    </>
  );
}
