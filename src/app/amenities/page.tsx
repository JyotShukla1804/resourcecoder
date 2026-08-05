import React from "react";
import { Metadata } from "next";
import { AmenitiesHero } from "@/components/amenities/AmenitiesHero";
import { AmenitiesGallery } from "@/components/amenities/AmenitiesGallery";
import { AmenitiesSection } from "@/components/amenities/AmenitiesSection";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import {
  Wifi,
  Zap,
  Clock,
  Server,
  Phone,
  Monitor,
  Plug,
  Briefcase,
  Coffee,
  Users,
  Video,
  UserCheck,
  Mic,
  Network,
  Sparkles,
  PhoneCall,
  Lock,
  ShieldCheck,
  Utensils,
  Heart
} from "lucide-react";

export const metadata: Metadata = {
  title: "Amenities | ResourceCoders",
  description: "Discover the state-of-the-art amenities and infrastructure offered by ResourceCoders for our dedicated developers.",
};

export default function AmenitiesPage() {
  return (
    <main className="min-h-screen bg-black">
      <AmenitiesHero />
      <AmenitiesGallery />

      <div className="w-full flex flex-col">
        {/* Infrastructure & Connectivity */}
        <AmenitiesSection
          theme="white"
          titlePart1="Infrastructure &"
          titlePart2="Connectivity"
          subtitle="A robust backbone built for uninterrupted workflows and high-speed global connectivity."
          items={[
            { icon: Wifi, title: "High-speed internet connectivity", description: "Enterprise-grade fiber internet for seamless global collaboration." },
            { icon: Zap, title: "Power backup", description: "Uninterrupted power supply to ensure zero downtime." },
            { icon: Clock, title: "24/7 operations readiness", description: "Facilities designed for round-the-clock operations and global timezones." },
            { icon: Server, title: "Server & IT support room", description: "Dedicated IT support and secure server rooms." },
            { icon: Phone, title: "VoIP / Telecom readiness", description: "Advanced telecom infrastructure for crystal clear communication." }
          ]}
        />

        {/* Workspace & Interior Design */}
        <AmenitiesSection
          theme="light"
          titlePart1="Workspace &"
          titlePart2="Interior Design"
          subtitle="Thoughtfully designed workspaces that balance productivity, aesthetics, and comfort."
          items={[
            { icon: Monitor, title: "Fully furnished workstations", description: "Ergonomic seating and premium desks for maximum comfort." },
            { icon: Plug, title: "Plug and play setup", description: "Instant workstation readiness to start working immediately." },
            { icon: Briefcase, title: "Manager cabins", description: "Private executive cabins for leadership and focus." },
            { icon: Coffee, title: "Breakout areas", description: "Relaxing zones to unwind and recharge during breaks." },
            { icon: Users, title: "Collaboration zones", description: "Open spaces designed for team discussions and brainstorming." }
          ]}
        />

        {/* Meeting & Specialized Rooms */}
        <AmenitiesSection
          theme="white"
          titlePart1="Meeting &"
          titlePart2="Specialized Rooms"
          subtitle="Professional environments tailored for specific corporate functions and engaging client meetings."
          items={[
            { icon: Users, title: "Conference & Meeting rooms", description: "Fully equipped rooms for team or client meetings." },
            { icon: Video, title: "Video conferencing facilities", description: "High-definition AV setups for seamless virtual interactions." },
            { icon: UserCheck, title: "Interview rooms", description: "Private and professional spaces for recruitment processes." },
            { icon: Mic, title: "Training rooms", description: "Large rooms dedicated to workshops and skill development." }
          ]}
        />

        {/* Managed Services & Operations */}
        <AmenitiesSection
          theme="light"
          titlePart1="Managed Services &"
          titlePart2="Operations"
          subtitle="End-to-end facility management allowing teams to focus on their core functions."
          items={[
            { icon: Network, title: "Managed IT infrastructure", description: "Proactive IT maintenance and network management." },
            { icon: PhoneCall, title: "Front desk / reception", description: "Professional welcoming and visitor management." },
            { icon: Sparkles, title: "Housekeeping & maintenance", description: "Daily cleaning and pristine facility upkeep." },
            { icon: Coffee, title: "Pantry & Cafeteria Management", description: "Fully managed food and beverage services." }
          ]}
        />

        {/* Security & Safety */}
        <AmenitiesSection
          theme="white"
          titlePart1="Security &"
          titlePart2="Safety"
          subtitle="Comprehensive protection measures ensuring the safety of personnel and data."
          items={[
            { icon: Lock, title: "Access control", description: "Secure biometric and keycard entry systems." },
            { icon: ShieldCheck, title: "Secure facility management", description: "24/7 surveillance and professional security personnel." }
          ]}
        />

        {/* Lifestyle & Employee Wellness */}
        <AmenitiesSection
          theme="light"
          titlePart1="Lifestyle &"
          titlePart2="Employee Wellness"
          subtitle="Promoting physical and mental well-being through dedicated wellness spaces."
          items={[
            { icon: Utensils, title: "Cafeteria area", description: "Spacious dining areas with healthy food options." },
            { icon: Heart, title: "Wellness / Recreation room", description: "Facilities dedicated to relaxation and stress relief." }
          ]}
        />
      </div>

      <FloatingContact />
      <Footer />
    </main>
  );
}
