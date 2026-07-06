"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function CobeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    
    if (!canvasRef.current) return;

    let currentWidth = 0;
    const onResize = () => {
      if (canvasRef.current) {
        currentWidth = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize, { passive: true });
    onResize();

    // Optimize DPR and samples for smooth 60fps even on mobile
    const dpr = Math.min(window.devicePixelRatio, 1.5); 

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: dpr,
      width: currentWidth * dpr,
      height: currentWidth * dpr,
      phi: 0,
      theta: 0,
      dark: 0, // Light mode globe
      diffuse: 1.2,
      mapSamples: 9000, // Reduced from 12000 for better performance
      mapBrightness: 6,
      baseColor: [0.85, 0.88, 0.95], // Light blue-gray dots
      markerColor: [75 / 255, 86 / 255, 210 / 255], // #4B56D2 Bright blue markers
      glowColor: [0.98, 0.98, 1], // Very subtle off-white glow edge
      markers: [
        { location: [40.7128, -74.0060], size: 0.1 }, // NY
        { location: [51.5074, -0.1278], size: 0.1 }, // UK
        { location: [-22.9068, -43.1729], size: 0.1 }, // Brazil
        { location: [37.7749, -122.4194], size: 0.1 }, // SF
        { location: [22.3193, 114.1694], size: 0.1 }, // HK
        { location: [23.0225, 72.5714], size: 0.1 }, // India
        { location: [25.2048, 55.2708], size: 0.1 }, // UAE
        { location: [-33.8688, 151.2093], size: 0.1 }, // Australia
        { location: [52.5200, 13.4050], size: 0.1 }, // Germany
      ],
      // @ts-ignore: onRender is required by cobe but missing in its typescript definitions
      onRender: (state) => {
        // Use cached width to prevent forced synchronous layout thrashing (60 times/sec)
        state.width = currentWidth * dpr;
        state.height = currentWidth * dpr;
        
        // Slowly rotate
        state.phi = phi;
        phi += 0.0035; // Slightly slower, more elegant rotation
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="w-full max-w-[400px] sm:max-w-[560px] aspect-square mx-auto relative z-10 flex items-center justify-center pointer-events-none">
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          opacity: 0,
          animation: "fade-in 1s ease forwards",
        }}
      />
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </div>
  );
}
