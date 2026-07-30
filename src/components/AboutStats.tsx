"use client";

import React, { useEffect, useState, useRef } from "react";

export function AnimatedNumber({ value, duration = 1500 }: { value: string; duration?: number }) {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const isPlus = value.includes("+");
  const isPercent = value.includes("%");
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setHasStarted(true), 0);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = numericValue;
    if (start === end) return;

    const totalMilliseconds = duration;
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(totalMilliseconds / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(end * (1 - Math.pow(1 - progress, 2))); // easeOutQuad
      
      setCount(currentCount);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [hasStarted, numericValue, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {isPlus ? "+" : ""}
      {isPercent ? "%" : ""}
    </span>
  );
}

export function AboutStats() {
  return (
    <section className="w-full bg-transparent mt-6 mb-16 relative z-20">
      <div className="w-full max-w-[1358px] mx-auto py-8 sm:py-12 px-4 md:px-[55px] animate-fade-in-up delay-300">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 text-center relative">
        
        {/* Stat Item 1 */}
        <div className="flex flex-col items-center justify-center relative">
          <span className="text-4xl md:text-[48px] font-extrabold text-[#4B56D2] tracking-tight mb-2 leading-none">
            <AnimatedNumber value="10+" />
          </span>
          <span className="text-xs md:text-sm font-semibold text-slate-700">Years Experience</span>
          {/* Divider (desktop) */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-400/50" />
          {/* Divider (mobile) */}
          <div className="block md:hidden absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-slate-400/50" />
        </div>

        {/* Stat Item 2 */}
        <div className="flex flex-col items-center justify-center relative">
          <span className="text-4xl md:text-[48px] font-extrabold text-[#4B56D2] tracking-tight mb-2 leading-none">
            <AnimatedNumber value="232+" />
          </span>
          <span className="text-xs md:text-sm font-semibold text-slate-700">Projects Delivered</span>
          {/* Divider (desktop) */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-400/50" />
        </div>

        {/* Stat Item 3 */}
        <div className="flex flex-col items-center justify-center relative">
          <span className="text-4xl md:text-[48px] font-extrabold text-[#4B56D2] tracking-tight mb-2 leading-none">
            <AnimatedNumber value="100+" />
          </span>
          <span className="text-xs md:text-sm font-semibold text-slate-700">Global Clients</span>
          {/* Divider (desktop) */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-400/50" />
          {/* Divider (mobile) */}
          <div className="block md:hidden absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-slate-400/50" />
        </div>

        {/* Stat Item 4 */}
        <div className="flex flex-col items-center justify-center relative">
          <span className="text-4xl md:text-[48px] font-extrabold text-[#4B56D2] tracking-tight mb-2 leading-none">
            <AnimatedNumber value="100+" />
          </span>
          <span className="text-xs md:text-sm font-semibold text-slate-700">Experienced Developers<br/>under Management</span>
        </div>

      </div>
      </div>
    </section>
  );
}
