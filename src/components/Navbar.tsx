"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [pages, setPages] = useState<any[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150);
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
    { name: "About us", href: "/about", hasChevron: true },
    { name: "Services", href: "/services", hasChevron: true },
    { name: "Hire Team", href: "/hire-team", hasChevron: true },
    { name: "Industries", href: "/industries", hasChevron: false },
    { name: "Company", href: "/partner-with-us", hasChevron: false },
  ];

  // Exclude main landing page 'hire-team' and 'home' if present from dropdown
  const dropdownPages = pages.filter(
    (p: any) => p.slug !== "hire-team" && p.slug !== "home"
  );

  return (
    <div className="absolute top-[22px] left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 flex justify-center pointer-events-none">
      <div
        className="w-full max-w-[1358px] transition-all duration-300 pointer-events-auto"
        style={{ opacity: 1 }}
      >
      <nav
        className="relative bg-black border border-slate-900 rounded-[1000px] h-[72px] pt-[6px] pr-[6px] pb-[6px] pl-[20px] flex items-center justify-between transition-all duration-300"
      >
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="group flex items-center gap-2 text-base font-black tracking-tight text-white select-none">
            <img src="/K.svg?v=2" alt="K" className="h-8 w-auto object-contain flex-shrink-0" />
            <img src="/Frame 65 (1).svg" alt="Res.coders" className="h-8 w-auto object-contain flex-shrink-0" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            const isHireTeam = link.name === "Hire Team";
            const isServices = link.name === "Services";

            return (
              <div key={link.name} className="flex items-center">
                <div
                  className="relative flex items-center h-[72px]"
                  onMouseEnter={() => {
                    if (isHireTeam) setIsDropdownOpen(true);
                    if (isServices) handleServicesEnter();
                  }}
                  onMouseLeave={() => {
                    if (isHireTeam) setIsDropdownOpen(false);
                    if (isServices) handleServicesLeave();
                  }}
                >
                  {isHireTeam || isServices ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (isHireTeam) setIsDropdownOpen(!isDropdownOpen);
                        if (isServices) setIsServicesDropdownOpen(!isServicesDropdownOpen);
                      }}
                      className={`text-[16px] font-semibold transition-colors flex items-center py-1 px-1.5 cursor-pointer select-none ${isActive || (isDropdownOpen && isHireTeam) || (isServicesDropdownOpen && isServices) ? "text-white" : "text-slate-400 hover:text-white"
                        }`}
                    >
                      <span>{link.name}</span>
                      {link.hasChevron && (
                        <svg
                          className={`w-2.5 h-2.5 text-slate-500 ml-1 mt-0.5 transition-transform duration-200 ${(isDropdownOpen && isHireTeam) || (isServicesDropdownOpen && isServices) ? "rotate-180 text-white" : "group-hover:text-slate-300"
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

                  {isHireTeam && (
                    <div
                      className={`absolute top-[60px] left-1/2 -translate-x-1/2 w-64 rounded-2xl bg-black/95 backdrop-blur-md border border-slate-900 shadow-2xl p-2 transition-all duration-200 origin-top z-50 ${isDropdownOpen
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                        }`}
                    >
                      {dropdownPages.length > 0 ? (
                        dropdownPages.map((page: any) => {
                          const isSubActive = pathname === `/hire-team/${page.slug}`;
                          return (
                            <Link
                              key={page.slug}
                              href={`/hire-team/${page.slug}`}
                              className={`block px-4 py-2.5 rounded-xl text-[16px] font-semibold text-left transition-all ${isSubActive
                                ? "text-white bg-slate-900"
                                : "text-slate-400 hover:text-white hover:bg-slate-900/50"
                                }`}
                            >
                              {page.title}
                            </Link>
                          );
                        })
                      ) : (
                        <div className="px-4 py-3 text-[16px] text-slate-500 text-center">
                          No sub-pages available
                        </div>
                      )}
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

        {/* Services Full-Width Mega Menu */}
        <div
          onMouseEnter={handleServicesEnter}
          onMouseLeave={handleServicesLeave}
          className={`absolute top-[88px] left-0 right-0 w-full rounded-[24px] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300 origin-top z-40 ${
            isServicesDropdownOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="p-10 px-12">
            <h3 className="text-black font-extrabold text-[20px] mb-8 tracking-tight">Engagement Models</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/services/offshore-development" onClick={() => setIsServicesDropdownOpen(false)} className="flex items-start gap-5 p-5 rounded-[20px] hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                <div className="w-[52px] h-[52px] rounded-[16px] bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🌍</span>
                </div>
                <div>
                  <h4 className="text-black font-bold text-[16px] mb-1.5">Offshore Development Center in India</h4>
                  <p className="text-[#5e6b7e] text-[14px] leading-[1.6]">Hire developers dedicatedly working for your project</p>
                </div>
              </Link>
              <Link href="/services/hire-dedicated" onClick={() => setIsServicesDropdownOpen(false)} className="flex items-start gap-5 p-5 rounded-[20px] hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                <div className="w-[52px] h-[52px] rounded-[16px] bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <div>
                  <h4 className="text-black font-bold text-[16px] mb-1.5">Hire Dedicated Developers</h4>
                  <p className="text-[#5e6b7e] text-[14px] leading-[1.6]">Get custom solution built as per your requirement.</p>
                </div>
              </Link>
              <Link href="/services/bespoke-software" onClick={() => setIsServicesDropdownOpen(false)} className="flex items-start gap-5 p-5 rounded-[20px] hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                <div className="w-[52px] h-[52px] rounded-[16px] bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <h4 className="text-black font-bold text-[16px] mb-1.5">Bespoke Software Development</h4>
                  <p className="text-[#5e6b7e] text-[14px] leading-[1.6]">We are also happy to develop software from scratch.</p>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="bg-[#f8f9fc] py-6 px-12 border-t border-slate-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e6ebff] flex items-center justify-center flex-shrink-0">
                  <svg className="w-[18px] h-[18px] text-[#4B56D2]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#4B56D2] uppercase tracking-wider mb-0.5">UNITED STATES</div>
                  <div className="text-black font-extrabold text-[15px]">+1 (623) 887-5363</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e6ebff] flex items-center justify-center flex-shrink-0">
                  <svg className="w-[18px] h-[18px] text-[#4B56D2]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#4B56D2] uppercase tracking-wider mb-0.5">EMAIL ADDRESS</div>
                  <div className="text-black font-extrabold text-[15px]">sales@kraziocloud.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e6ebff] flex items-center justify-center flex-shrink-0">
                  <svg className="w-[18px] h-[18px] text-[#4B56D2]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#4B56D2] uppercase tracking-wider mb-0.5">LINKEDIN</div>
                  <div className="text-black font-extrabold text-[15px]">krazio</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e6ebff] flex items-center justify-center flex-shrink-0">
                  <svg className="w-[18px] h-[18px] text-[#4B56D2]" fill="currentColor" viewBox="0 0 24 24"><path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.2m2.5-9.1C18 3.7 16.4 3 14.7 3H14v-.2c-3.1 0-5.6 2.5-5.6 5.6 0 .9.2 1.8.6 2.6L7 15l4.2-1.1c.8.4 1.7.6 2.6.6h.1c3.1 0 5.6-2.5 5.6-5.6 0-1.7-.7-3.3-1.9-4.5z"/></svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#4B56D2] uppercase tracking-wider mb-0.5">WHATSAPP</div>
                  <div className="text-black font-extrabold text-[15px]">+91 7202002034</div>
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

              if (isHireTeam || isServices) {
                const isMobileOpen = isHireTeam ? isMobileDropdownOpen : isMobileServicesDropdownOpen;
                const toggleMobileOpen = isHireTeam ? () => setIsMobileDropdownOpen(!isMobileDropdownOpen) : () => setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen);
                
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
                          dropdownPages.length > 0 ? (
                            dropdownPages.map((page: any) => {
                              const isSubActive = pathname === `/hire-team/${page.slug}`;
                              return (
                                <Link
                                  key={page.slug}
                                  href={`/hire-team/${page.slug}`}
                                  onClick={() => setIsOpen(false)}
                                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors ${isSubActive
                                    ? "text-white bg-slate-900"
                                    : "text-slate-400 hover:text-white hover:bg-slate-900/50"
                                    }`}
                                >
                                  <span>📄</span>
                                  <span>{page.title}</span>
                                </Link>
                              );
                            })
                          ) : (
                            <div className="px-4 py-2 text-xs text-slate-500">
                              No sub-pages available
                            </div>
                          )
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
