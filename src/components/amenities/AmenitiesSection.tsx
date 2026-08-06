import React from "react";
import { LucideIcon } from "lucide-react";

interface AmenityItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AmenitiesSectionProps {
  titlePart1: string;
  titlePart2: string;
  subtitle: string;
  items: AmenityItem[];
  theme?: "white" | "light";
}

export function AmenitiesSection({ titlePart1, titlePart2, subtitle, items, theme = "white" }: AmenitiesSectionProps) {
  
  const getThemeClasses = () => {
    switch (theme) {
      case "light":
        return {
          section: "bg-[#f8f9ff] text-slate-900",
          heading: "text-slate-900",
          subtitle: "text-slate-600",
          card: "bg-white border border-slate-200/60 hover:border-[#4B56D2]/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(75,86,210,0.08)]",
          cardTitle: "text-slate-900",
          cardDesc: "text-slate-500",
          iconWrapper: "bg-[#4B56D2]/10 text-[#4B56D2]",
        };
      case "white":
      default:
        return {
          section: "bg-white text-slate-900",
          heading: "text-slate-900",
          subtitle: "text-slate-600",
          card: "bg-white border border-slate-200 hover:border-[#4B56D2]/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(75,86,210,0.08)]",
          cardTitle: "text-slate-900",
          cardDesc: "text-slate-500",
          iconWrapper: "bg-[#4B56D2]/10 text-[#4B56D2]",
        };
    }
  };

  const styles = getThemeClasses();

  return (
    <section className={`w-full py-24 px-4 sm:px-6 lg:px-8 relative z-10 mx-auto ${styles.section}`}>
      <div className="max-w-[1358px] mx-auto flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-6 transition-all duration-300 ${styles.heading}`}>
            {titlePart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#4B56D2]">{titlePart2}</span>
          </h2>
          <p className={`text-lg md:text-xl font-medium leading-relaxed mx-auto max-w-3xl ${styles.subtitle}`}>
            {subtitle}
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`rounded-[32px] p-8 flex flex-col items-start text-left transition-all duration-500 group ${styles.card}`}
              >
                <div className={`mb-8 w-20 h-20 rounded-[24px] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${styles.iconWrapper}`}>
                  <Icon className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h3 className={`text-xl font-bold mb-3 leading-snug ${styles.cardTitle}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed font-medium ${styles.cardDesc}`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
