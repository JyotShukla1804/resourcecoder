import React from "react";
import Image from "next/image";

export function AmenitiesGallery() {
  // Array of 15 images (excluding team8.webp)
  const images = Array.from({ length: 16 }, (_, i) => `/team${i + 1}.webp`).filter(img => img !== "/team8.webp");

  // Precision mapping to replicate the exact masonry layout from the user's screenshot
  // The grid is 20 columns wide and 24 rows tall.
  const layout = [
    { c: "3 / span 4", r: "6 / span 3" },   // 0. C1 Top
    { c: "1 / span 6", r: "9 / span 8" },   // 1. C1 Mid
    { c: "3 / span 2", r: "17 / span 6" },  // 2. C1 Bot L
    { c: "5 / span 2", r: "17 / span 6" },  // 3. C1 Bot R
    { c: "7 / span 4", r: "4 / span 5" },   // 4. C2 Top
    { c: "7 / span 4", r: "9 / span 8" },   // 5. C2 Mid
    { c: "7 / span 4", r: "17 / span 7" },  // 6. C2 Bot
    { c: "11 / span 4", r: "1 / span 11" }, // 7. C3 Top
    { c: "11 / span 4", r: "12 / span 5" }, // 8. C3 Mid
    { c: "11 / span 2", r: "17 / span 6" }, // 9. C3 Bot L
    { c: "13 / span 2", r: "17 / span 6" }, // 10. C3 Bot R
    { c: "15 / span 4", r: "3 / span 7" },  // 11. C4 Top
    { c: "15 / span 6", r: "10 / span 6" }, // 12. C4 Mid
    { c: "15 / span 2", r: "16 / span 5" }, // 13. C4 Bot L
    { c: "17 / span 2", r: "16 / span 5" }, // 14. C4 Bot R
  ];

  return (
    <section className="w-full py-24 bg-white relative z-10 mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-[1358px] mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#4B56D2]">Workspaces</span> & Teams
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Take a look inside our state-of-the-art facilities and vibrant culture. We provide the perfect environment for dedicated developers to thrive.
          </p>
        </div>

        {/* Custom Exact Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-[repeat(20,_1fr)] gap-2 md:gap-4 auto-rows-[200px] md:auto-rows-[34px]">
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className={`custom-masonry-item item-${idx} relative group hover:z-50 transition-all duration-300`}
            >
              {/* Default Grid View */}
              <div className="w-full h-full relative overflow-hidden rounded-md bg-slate-100 shadow-sm group-hover:opacity-0 transition-opacity duration-300">
                <Image
                  src={src}
                  alt={`ResourceCoders Workspace ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Full-View Popup (No Background/Borders) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-110 transition-all duration-300 pointer-events-none flex items-center justify-center">
                <img
                  src={src}
                  alt="Full Workspace"
                  className="rounded-2xl drop-shadow-2xl max-w-none w-auto h-auto max-h-[250px] md:max-h-[350px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-masonry-item {
          grid-column: span 1;
          grid-row: span 1;
        }
        @media (min-width: 768px) {
          ${layout.map((pos, i) => `
            .item-${i} {
              grid-column: ${pos.c};
              grid-row: ${pos.r};
            }
          `).join('')}
        }
      `}} />
    </section>
  );
}
