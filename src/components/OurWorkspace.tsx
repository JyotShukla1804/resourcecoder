import React from "react";

export function OurWorkspace() {
  return (
    <div className="w-full self-stretch bg-[#fafafa] pt-24 pb-24 px-6 md:px-[55px] relative z-10 border-t border-slate-100">
      <div className="max-w-[1358px] mx-auto text-center flex flex-col gap-20">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-[48px] font-extrabold text-slate-900 tracking-tight"
            
          >
            Our Workspace
          </h2>
          <p 
            className="text-base md:text-[18px]"
            
          >
            A collaborative environment designed to inspire creativity and foster innovation among our talented teams.
          </p>
        </div>

        {/* Collage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          
          {/* Left Column (Hallway Image) */}
          <div className="relative w-full aspect-[657/596] lg:aspect-auto rounded-[24px] overflow-hidden border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
            <img 
              src="/workspace-hallway.png" 
              alt="Office Hallway" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column (Subgrid of 3 Images) */}
          <div className="grid grid-rows-2 gap-5">
            {/* Top Row: Two equal square-ish images */}
            <div className="grid grid-cols-2 gap-5">
              <div className="relative w-full h-full aspect-[322/290] lg:aspect-auto rounded-[24px] overflow-hidden border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
                <img 
                  src="/workspace-meeting.png" 
                  alt="Team Meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative w-full h-full aspect-[322/290] lg:aspect-auto rounded-[24px] overflow-hidden border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
                <img 
                  src="/workspace-working.png" 
                  alt="Workspace Working" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Bottom Row: Wide collaborating image */}
            <div className="relative w-full h-full aspect-[660/290] lg:aspect-auto rounded-[24px] overflow-hidden border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
              <img 
                src="/workspace-collaborating.png" 
                alt="Developers Collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
