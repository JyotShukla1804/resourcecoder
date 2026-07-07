"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [pages, setPages] = useState<any[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isHireTeamDropdownOpen, setIsHireTeamDropdownOpen] = useState(false);
  const [isMobileHireTeamDropdownOpen, setIsMobileHireTeamDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);
  const [isMobileIndustriesDropdownOpen, setIsMobileIndustriesDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isMobileCompanyDropdownOpen, setIsMobileCompanyDropdownOpen] = useState(false);
  const pathname = usePathname();
  const hireTeamTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleHireTeamEnter = () => {
    if (hireTeamTimeoutRef.current) clearTimeout(hireTeamTimeoutRef.current);
    setIsHireTeamDropdownOpen(true);
  };

  const handleHireTeamLeave = () => {
    hireTeamTimeoutRef.current = setTimeout(() => {
      setIsHireTeamDropdownOpen(false);
    }, 150);
  };

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150);
  };

  const handleIndustriesEnter = () => {
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    setIsIndustriesDropdownOpen(true);
  };

  const handleIndustriesLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIsIndustriesDropdownOpen(false);
    }, 150);
  };

  const industries = [
    { name: "Banking & Finance", desc: "Reliable fintech solutions that ensure security & enhanced user experience.", icon: "🏦", href: "https://kraziocloud.com/industries/banking-finance/" },
    { name: "Manufacturing", desc: "IoT-enabled product monitoring.", icon: "🏭", href: "https://kraziocloud.com/industries/manufacturing" },
    { name: "Travel", desc: "AI-Powered travel recommendations.", icon: "✈️", href: "https://kraziocloud.com/industries/travel" },
    { name: "Healthcare", desc: "Secure, scalable healthcare platforms to enhance patient care and operations.", icon: "🏥", href: "https://kraziocloud.com/industries/healthcare" },
    { name: "Real Estate", desc: "Innovative digital solutions for property management and client engagement.", icon: "🏠", href: "https://kraziocloud.com/industries/real-estate" },
    { name: "Restaurant", desc: "Smart POS System.", icon: "🍽️", href: "https://kraziocloud.com/industries/restaurant" },
    { name: "Education", desc: "Virtual Learning Environments.", icon: "🎓", href: "https://kraziocloud.com/industries/education" },
    { name: "Logistics", desc: "Efficient logistics solutions for real-time tracking and supply chain management.", icon: "🚚", href: "https://kraziocloud.com/industries/logistics" },
    { name: "Entertainment", desc: "Immersive AR/VR content.", icon: "🎬", href: "https://kraziocloud.com/industries/entertainment" },
    { name: "E-commerce", desc: "AI-powered product recommendations.", icon: "🛒", href: "https://kraziocloud.com/industries/ecommerce" },
    { name: "Transportation", desc: "Fleet Management Solutions.", icon: "🚌", href: "https://kraziocloud.com/industries/transportation" },
    { name: "Oil & Gas", desc: "IoT-based equipment monitoring.", icon: "⛽", href: "https://kraziocloud.com/industries/oil-gas" },
  ];

  const hireTeamCategories = [
    {
      title: "Frontend",
      roles: ["React.js Developer", "Next.js Developer", "Angular Developer", "Vue.js Developer", "Frontend Developer", "UI/UX Designer"]
    },
    {
      title: "Backend",
      roles: ["Node.js Developer", "Python Developer", "Java Developer", ".NET Developer", "PHP / Laravel Developer", "Golang Developer"]
    },
    {
      title: "Full-Stack",
      roles: ["Full-Stack Developer", "MERN Stack Developer", "MEAN Stack Developer", "JavaScript Developer", "TypeScript Developer"]
    },
    {
      title: "Mobile",
      roles: ["React Native Developer", "Flutter Developer", "iOS Developer", "Android Developer"]
    },
    {
      title: "AI, Data & Cloud",
      roles: ["AI/ML Engineer", "Generative AI / LLM Developer", "AI Integration Developer", "Data Engineer", "Data Scientist", "DevOps Engineer", "Cloud Engineer (AWS / Azure / GCP)"]
    },
    {
      title: "CMS, E-commerce & QA",
      roles: ["WordPress Developer", "Shopify Developer", "WooCommerce Developer", "QA / Automation Engineer", "Cybersecurity / DevSecOps Engineer", "Blockchain Developer"]
    }
  ];

  const generateRoleSlug = (role: string) => {
    return role.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  useEffect(() => {
    async function fetchPages() {
      try {
        const res = await fetch("/api/pages", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            setPages(data);
          }
        }
      } catch (err) {
        console.error("Failed to fetch pages for navbar:", err);
      }
    }
    fetchPages();
  }, []);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const navLinks = [
    { name: "About us", href: "/about", hasChevron: false },
    { name: "Services", href: "/services", hasChevron: true },
    { name: "Hire Team", href: "/hire-team", hasChevron: true },
    { name: "Industries", href: "/industries", hasChevron: true },
    { name: "Company", href: "/partner-with-us", hasChevron: true },
  ];

  // Exclude main landing page 'hire-team' and 'home' if present from dropdown
  const dropdownPages = pages.filter(
    (p: any) => p.slug !== "hire-team" && p.slug !== "home"
  );

  return (
    <div className="absolute top-[22px] left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 flex justify-center pointer-events-none">
      <div
        className="w-full max-w-[1358px] transition-all duration-300 pointer-events-auto opacity-100"
      >
        <nav
          className="relative bg-black border border-slate-900 rounded-[1000px] h-[72px] pt-[6px] pr-[6px] pb-[6px] pl-[20px] flex items-center justify-between transition-all duration-300"
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group flex items-center gap-2 text-base font-black tracking-tight text-white select-none">
              <img src="/Frame 66 (2).svg" alt="Resource Coders Logo" className="h-8 w-auto object-contain flex-shrink-0" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              const isHireTeam = link.name === "Hire Team";
              const isServices = link.name === "Services";
              const isIndustries = link.name === "Industries";
              const isCompany = link.name === "Company";

              return (
                <div key={link.name} className="flex items-center">
                  <div
                    className="relative flex items-center h-[72px]"
                    onMouseEnter={() => {
                      if (isHireTeam) handleHireTeamEnter();
                      if (isServices) handleServicesEnter();
                      if (isIndustries) handleIndustriesEnter();
                      if (isCompany) setIsCompanyDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (isHireTeam) handleHireTeamLeave();
                      if (isServices) handleServicesLeave();
                      if (isIndustries) handleIndustriesLeave();
                      if (isCompany) setIsCompanyDropdownOpen(false);
                    }}
                  >
                    {isHireTeam || isServices || isIndustries || isCompany ? (
                      <button
                        type="button"
                        onClick={() => {
                          if (isHireTeam) setIsHireTeamDropdownOpen(!isHireTeamDropdownOpen);
                          if (isServices) setIsServicesDropdownOpen(!isServicesDropdownOpen);
                          if (isIndustries) setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);
                          if (isCompany) setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
                        }}
                        className={`text-[16px] font-semibold transition-colors flex items-center py-1 px-1.5 cursor-pointer select-none ${isActive || (isHireTeamDropdownOpen && isHireTeam) || (isServicesDropdownOpen && isServices) || (isIndustriesDropdownOpen && isIndustries) || (isCompanyDropdownOpen && isCompany) ? "text-white" : "text-slate-400 hover:text-white"
                          }`}
                      >
                        <span>{link.name}</span>
                        {link.hasChevron && (
                          <svg
                            className={`w-2.5 h-2.5 text-slate-500 ml-1 mt-0.5 transition-transform duration-200 ${(isHireTeamDropdownOpen && isHireTeam) || (isServicesDropdownOpen && isServices) || (isIndustriesDropdownOpen && isIndustries) || (isCompanyDropdownOpen && isCompany) ? "rotate-180 text-white" : "group-hover:text-slate-300"
                              }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className={`text-[16px] font-semibold transition-colors flex items-center py-1 px-1.5 ${isActive ? "text-white" : "text-slate-400 hover:text-white"
                          }`}
                      >
                        <span>{link.name}</span>
                        {link.hasChevron && (
                          <svg
                            className="w-2.5 h-2.5 text-slate-500 ml-1 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </Link>
                    )}

                    {/* Rendered below, handled via Mega Menu for Hire Team */}

                    {isCompany && (
                      <div
                        className={`absolute top-[70px] left-1/2 -translate-x-1/2 w-[300px] rounded-[24px] bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] p-3 transition-all duration-300 origin-top z-50 ${isCompanyDropdownOpen
                          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                          : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                          }`}
                      >
                        {[
                          { title: "Development Process", slug: "development-process" },
                          { title: "Partner with Us", slug: "partner-with-us" },
                          { title: "Agile Mindset", slug: "agile-mindset" },
                          { title: "Awards & Recognition", slug: "awards" },
                          { title: "1:1 Startup Consulting", slug: "startup-consulting" },
                        ].map((page) => {
                          const isSubActive = pathname === `/${page.slug}`;
                          return (
                            <Link
                              key={page.slug}
                              href={`/${page.slug}`}
                              onClick={() => setIsCompanyDropdownOpen(false)}
                              className={`group flex items-center justify-between px-4 py-3.5 rounded-[16px] text-[15px] font-semibold text-left transition-all duration-300 ${isSubActive
                                ? "text-white bg-white/10 shadow-inner"
                                : "text-slate-400 hover:text-white hover:bg-white/5"
                                }`}
                            >
                              <span>{page.title}</span>
                              <svg
                                className={`w-4 h-4 transition-transform duration-300 ${isSubActive ? "text-blue-500 translate-x-0 opacity-100" : "text-slate-500 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-blue-400"}`}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  {idx < navLinks.length - 1 && (
                    <span className="text-slate-600 font-light select-none text-[16px] mx-3">/</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#interview-section"
              className="btn-ripple inline-flex items-center justify-center w-[184px] h-[60px] rounded-full text-white font-bold text-[16px] tracking-wider shadow-md hover:shadow-lg transition-shadow duration-300 select-none bg-[#4B56D2]"
            >
              Inquiry Now
            </Link>
          </div>

          {/* Hire Team Full-Width Mega Menu */}
          <div
            onMouseEnter={handleHireTeamEnter}
            onMouseLeave={handleHireTeamLeave}
            className={`absolute top-[88px] left-0 right-0 w-full rounded-[24px] bg-black/95 backdrop-blur-md border border-slate-900 shadow-2xl overflow-hidden transition-all duration-300 origin-top z-40 ${isHireTeamDropdownOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
          >
            <div className="p-8 px-12">
              <div className="flex justify-between items-end mb-6">
                <h3 className="text-white font-extrabold text-[20px] tracking-tight">Hire Team</h3>
                <Link href="/hire-team" onClick={() => setIsHireTeamDropdownOpen(false)} className="text-[#4B56D2] font-semibold text-[14px] hover:underline flex items-center gap-1">
                  View All Roles
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-6 gap-x-6 gap-y-8">
                {hireTeamCategories.map((category) => (
                  <div key={category.title}>
                    <h4 className="text-slate-200 font-bold text-[14px] mb-3 uppercase tracking-wider">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.roles.map((role) => {
                        const slug = generateRoleSlug(role.replace(/^Hire /, ''));
                        return (
                          <li key={role}>
                            <Link 
                              href={`/hire-team/${slug}`} 
                              onClick={() => setIsHireTeamDropdownOpen(false)}
                              className="text-slate-400 hover:text-white hover:underline text-[13px] font-medium transition-colors block"
                            >
                              {role}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900/30 py-4 px-12 border-t border-slate-900">
              <div className="flex items-center justify-between">
                <div className="text-slate-400 text-sm font-medium">Looking for a role not listed here?</div>
                <Link href="/contact" onClick={() => setIsHireTeamDropdownOpen(false)} className="text-white font-bold text-sm bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Services Full-Width Mega Menu */}
          <div
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
            className={`absolute top-[88px] left-0 right-0 w-full rounded-[24px] bg-black/95 backdrop-blur-md border border-slate-900 shadow-2xl overflow-hidden transition-all duration-300 origin-top z-40 ${isServicesDropdownOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
          >
            <div className="p-10 px-12">
              <h3 className="text-white font-extrabold text-[20px] mb-8 tracking-tight">Engagement Models</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Link href="/services/offshore-development" onClick={() => setIsServicesDropdownOpen(false)} className="flex items-start gap-5 p-5 rounded-[20px] hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800 group">
                  <div className="w-[52px] h-[52px] rounded-[16px] bg-slate-900 shadow-sm border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[16px] mb-1.5">Offshore Development Center in India</h4>
                    <p className="text-slate-400 text-[14px] leading-[1.6]">Hire developers dedicatedly working for your project</p>
                  </div>
                </Link>
                <Link href="/services/hire-dedicated" onClick={() => setIsServicesDropdownOpen(false)} className="flex items-start gap-5 p-5 rounded-[20px] hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800 group">
                  <div className="w-[52px] h-[52px] rounded-[16px] bg-slate-900 shadow-sm border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[16px] mb-1.5">Hire Dedicated Developers</h4>
                    <p className="text-slate-400 text-[14px] leading-[1.6]">Get custom solution built as per your requirement.</p>
                  </div>
                </Link>
                <Link href="/services/bespoke-software" onClick={() => setIsServicesDropdownOpen(false)} className="flex items-start gap-5 p-5 rounded-[20px] hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800 group">
                  <div className="w-[52px] h-[52px] rounded-[16px] bg-slate-900 shadow-sm border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[16px] mb-1.5">Bespoke Software Development</h4>
                    <p className="text-slate-400 text-[14px] leading-[1.6]">We are also happy to develop software from scratch.</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="bg-slate-900/30 py-6 px-12 border-t border-slate-900">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4B56D2]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-[18px] h-[18px] text-[#4B56D2]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#4B56D2] uppercase tracking-wider mb-0.5">UNITED STATES</div>
                    <div className="text-white font-extrabold text-[15px]">+1 (623) 887-5363</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4B56D2]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-[18px] h-[18px] text-[#4B56D2]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#4B56D2] uppercase tracking-wider mb-0.5">EMAIL ADDRESS</div>
                    <div className="text-white font-extrabold text-[15px]">sales@kraziocloud.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4B56D2]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-[18px] h-[18px] text-[#4B56D2]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#4B56D2] uppercase tracking-wider mb-0.5">LINKEDIN</div>
                    <div className="text-white font-extrabold text-[15px]">krazio</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4B56D2]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-[18px] h-[18px] text-[#4B56D2]" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16.003 2.667C8.639 2.667 2.667 8.638 2.667 16c0 2.347.634 4.638 1.837 6.643L2.667 29.333l6.875-1.802A13.265 13.265 0 0 0 16.003 29.333c7.363 0 13.33-5.97 13.33-13.333 0-7.362-5.967-13.333-13.33-13.333zm0 24.267a11.04 11.04 0 0 1-5.635-1.545l-.404-.24-4.08 1.07 1.09-3.978-.263-.41A10.972 10.972 0 0 1 5.04 16c0-6.044 4.92-10.96 10.963-10.96C22.044 5.04 26.96 9.956 26.96 16c0 6.044-4.916 10.934-10.957 10.934zm6.01-8.196c-.33-.165-1.95-.962-2.252-1.072-.302-.11-.521-.165-.74.165-.22.33-.851 1.072-1.043 1.292-.192.22-.384.247-.714.082-.33-.165-1.394-.514-2.655-1.638-.982-.875-1.645-1.955-1.838-2.285-.192-.33-.02-.508.145-.672.149-.148.33-.385.494-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.74-1.785-1.014-2.443-.267-.64-.538-.553-.74-.563l-.63-.011c-.22 0-.577.083-.88.413-.302.33-1.153 1.127-1.153 2.747 0 1.62 1.18 3.187 1.344 3.407.165.22 2.322 3.547 5.627 4.973.787.34 1.4.543 1.879.694.789.252 1.508.217 2.077.132.634-.095 1.95-.797 2.225-1.567.275-.77.275-1.43.192-1.567-.082-.138-.302-.22-.632-.385z"/></svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#4B56D2] uppercase tracking-wider mb-0.5">WHATSAPP</div>
                    <div className="text-white font-extrabold text-[15px]">+91 7202002034</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industries Full-Width Mega Menu (Compact Height) */}
          <div
            onMouseEnter={handleIndustriesEnter}
            onMouseLeave={handleIndustriesLeave}
            className={`absolute top-[88px] left-0 right-0 w-full rounded-[24px] bg-black/95 backdrop-blur-md border border-slate-900 shadow-2xl overflow-hidden transition-all duration-300 origin-top z-40 ${isIndustriesDropdownOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
          >
            <div className="p-6 px-12">
              <h3 className="text-white font-extrabold text-[18px] mb-6 tracking-tight">Industries We Serve</h3>
              <div className="grid grid-cols-4 gap-x-8 gap-y-4">
                {industries.map((industry) => (
                  <a
                    key={industry.name}
                    href={industry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsIndustriesDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-[16px] hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800 group"
                  >
                    <div className="w-[42px] h-[42px] rounded-[12px] bg-slate-900 shadow-sm border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl">{industry.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-[#4B56D2] font-bold text-[14px] mb-0.5 group-hover:underline">{industry.name}</h4>
                      <p className="text-slate-400 text-[12px] leading-[1.4] line-clamp-2">{industry.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/30 py-6 px-12 border-t border-slate-900">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4B56D2]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-[18px] h-[18px] text-[#4B56D2]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#4B56D2] uppercase tracking-wider mb-0.5">UNITED STATES</div>
                    <div className="text-white font-extrabold text-[15px]">+1 (623) 887-5363</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4B56D2]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-[18px] h-[18px] text-[#4B56D2]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#4B56D2] uppercase tracking-wider mb-0.5">EMAIL ADDRESS</div>
                    <div className="text-white font-extrabold text-[15px]">sales@kraziocloud.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4B56D2]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-[18px] h-[18px] text-[#4B56D2]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#4B56D2] uppercase tracking-wider mb-0.5">LINKEDIN</div>
                    <div className="text-white font-extrabold text-[15px]">krazio</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4B56D2]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-[18px] h-[18px] text-[#4B56D2]" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16.003 2.667C8.639 2.667 2.667 8.638 2.667 16c0 2.347.634 4.638 1.837 6.643L2.667 29.333l6.875-1.802A13.265 13.265 0 0 0 16.003 29.333c7.363 0 13.33-5.97 13.33-13.333 0-7.362-5.967-13.333-13.33-13.333zm0 24.267a11.04 11.04 0 0 1-5.635-1.545l-.404-.24-4.08 1.07 1.09-3.978-.263-.41A10.972 10.972 0 0 1 5.04 16c0-6.044 4.92-10.96 10.963-10.96C22.044 5.04 26.96 9.956 26.96 16c0 6.044-4.916 10.934-10.957 10.934zm6.01-8.196c-.33-.165-1.95-.962-2.252-1.072-.302-.11-.521-.165-.74.165-.22.33-.851 1.072-1.043 1.292-.192.22-.384.247-.714.082-.33-.165-1.394-.514-2.655-1.638-.982-.875-1.645-1.955-1.838-2.285-.192-.33-.02-.508.145-.672.149-.148.33-.385.494-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.74-1.785-1.014-2.443-.267-.64-.538-.553-.74-.563l-.63-.011c-.22 0-.577.083-.88.413-.302.33-1.153 1.127-1.153 2.747 0 1.62 1.18 3.187 1.344 3.407.165.22 2.322 3.547 5.627 4.973.787.34 1.4.543 1.879.694.789.252 1.508.217 2.077.132.634-.095 1.95-.797 2.225-1.567.275-.77.275-1.43.192-1.567-.082-.138-.302-.22-.632-.385z"/></svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#4B56D2] uppercase tracking-wider mb-0.5">WHATSAPP</div>
                    <div className="text-white font-extrabold text-[15px]">+91 7202002034</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none transition-colors border border-slate-900"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                // X icon
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu icon
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown Panel */}
          <div
            className={`absolute top-full left-0 right-0 mt-3 md:hidden overflow-hidden transition-all duration-300 ease-in-out border border-slate-900 bg-black/98 backdrop-blur-lg rounded-3xl shadow-2xl p-4 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
          >
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const isHireTeam = link.name === "Hire Team";
                const isServices = link.name === "Services";

                const isIndustriesMobile = link.name === "Industries";
                const isCompanyMobile = link.name === "Company";
                if (isHireTeam || isServices || isIndustriesMobile || isCompanyMobile) {
                  const isMobileOpen = isHireTeam ? isMobileHireTeamDropdownOpen : isIndustriesMobile ? isMobileIndustriesDropdownOpen : isCompanyMobile ? isMobileCompanyDropdownOpen : isMobileServicesDropdownOpen;
                  const toggleMobileOpen = isHireTeam ? () => setIsMobileHireTeamDropdownOpen(!isMobileHireTeamDropdownOpen) : isIndustriesMobile ? () => setIsMobileIndustriesDropdownOpen(!isMobileIndustriesDropdownOpen) : isCompanyMobile ? () => setIsMobileCompanyDropdownOpen(!isMobileCompanyDropdownOpen) : () => setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen);

                  return (
                    <div key={link.name} className="space-y-1">
                      <button
                        onClick={toggleMobileOpen}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-colors text-left text-slate-300 hover:text-white hover:bg-slate-900 cursor-pointer"
                      >
                        <span>{link.name}</span>
                        <svg
                          className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${isMobileOpen ? "rotate-180 text-white" : ""
                            }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isMobileOpen && (
                        <div className="pl-6 pr-2 py-1 space-y-1 border-l border-slate-900/60 ml-4">
                          {isHireTeam ? (
                            <>
                              <div className="max-h-[300px] overflow-y-auto custom-scrollbar pr-2 space-y-4">
                                {hireTeamCategories.map((category) => (
                                  <div key={category.title}>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{category.title}</div>
                                    <div className="space-y-1">
                                      {category.roles.map((role) => {
                                        const slug = generateRoleSlug(role.replace(/^Hire /, ''));
                                        return (
                                          <Link
                                            key={role}
                                            href={`/hire-team/${slug}`}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-3 py-1.5 rounded-lg text-[13px] font-medium text-slate-400 hover:text-white hover:bg-slate-900/50 transition-colors"
                                          >
                                            {role}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          ) : isIndustriesMobile ? (
                            <>
                              {industries.map((industry) => (
                                <a
                                  key={industry.name}
                                  href={industry.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors text-slate-400 hover:text-white hover:bg-slate-900/50"
                                >
                                  <span>{industry.icon}</span>
                                  <span>{industry.name}</span>
                                </a>
                              ))}
                            </>
                          ) : isCompanyMobile ? (
                            <>
                              {[
                                { title: "Development Process", slug: "development-process" },
                                { title: "Partner with Us", slug: "partner-with-us" },
                                { title: "Agile Mindset", slug: "agile-mindset" },
                                { title: "Awards & Recognition", slug: "awards" },
                                { title: "1:1 Startup Consulting", slug: "startup-consulting" },
                              ].map((page) => (
                                <Link
                                  key={page.slug}
                                  href={`/${page.slug}`}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors text-slate-400 hover:text-white hover:bg-slate-900/50"
                                >
                                  <span>{page.title}</span>
                                </Link>
                              ))}
                            </>
                          ) : (
                            <>
                              <Link href="/services/offshore-development" onClick={() => setIsOpen(false)} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors text-slate-400 hover:text-white hover:bg-slate-900/50`}>
                                <span>🌍</span>
                                <span>Offshore Development</span>
                              </Link>
                              <Link href="/services/hire-dedicated" onClick={() => setIsOpen(false)} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors text-slate-400 hover:text-white hover:bg-slate-900/50`}>
                                <span>👨‍💻</span>
                                <span>Hire Dedicated Developers</span>
                              </Link>
                              <Link href="/services/bespoke-software" onClick={() => setIsOpen(false)} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors text-slate-400 hover:text-white hover:bg-slate-900/50`}>
                                <span>⚙️</span>
                                <span>Bespoke Software Development</span>
                              </Link>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${isActive ? "text-white bg-slate-900" : "text-slate-300 hover:text-white hover:bg-slate-900"
                      }`}
                  >
                    <span>{link.name}</span>
                    {link.hasChevron && (
                      <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                );
              })}
              <div className="pt-3 px-2 flex justify-center">
                <Link
                  href="/#interview-section"
                  onClick={() => setIsOpen(false)}
                  className="btn-ripple flex items-center justify-center w-[184px] h-[60px] mx-auto rounded-full text-white font-bold text-center text-[16px] tracking-wider shadow-md bg-[#4B56D2]"
                >
                  Inquiry Now
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
