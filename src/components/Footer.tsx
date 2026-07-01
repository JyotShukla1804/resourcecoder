"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) {
    return null;
  }
  const socialIconClass =
    "w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-900 hover:border-slate-700 transition-all duration-300 group";

  return (
    <footer className="w-full bg-black border-t border-slate-900 py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12">
          {/* Logo and Tagline (Col span 4) */}
          <div className="md:col-span-4 space-y-6 text-left">
            <Link href="/" className="flex items-center gap-2 select-none">
              <img src="/K.svg?v=2" alt="K" className="h-8 w-auto object-contain flex-shrink-0" />
              <img src="/Frame 65 (1).svg" alt="Res.coders" className="h-8 w-auto object-contain flex-shrink-0" />
            </Link>

            <p className="text-slate-400 text-[15px] sm:text-[16px] leading-[1.7] max-w-[320px] font-normal">
              Engineering excellence for the modern digital landscape. Your trusted partner in dedicated IT resources.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3.5">
              {/* LinkedIn */}
              <Link href="https://linkedin.com" target="_blank" className={socialIconClass}>
                <svg
                  className="w-[18px] h-[18px] text-slate-400 group-hover:text-blue-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              {/* Twitter/X */}
              <Link href="https://twitter.com" target="_blank" className={socialIconClass}>
                <svg
                  className="w-[18px] h-[18px] text-slate-400 group-hover:text-blue-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                  />
                </svg>
              </Link>
              {/* GitHub */}
              <Link href="https://github.com" target="_blank" className={socialIconClass}>
                <svg
                  className="w-[18px] h-[18px] text-slate-400 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Columns (Services, Company, Contact) */}
          <div className="md:col-span-8 md:col-start-5 grid grid-cols-3 gap-8 md:gap-16">
            {/* Services */}
            <div className="space-y-6 text-left">
              <h3 className="text-white font-bold text-[17px] tracking-tight">
                Services
              </h3>
              <ul className="space-y-4">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "AI Solutions",
                  "Software Development",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="/services"
                      className="text-slate-400 hover:text-white text-[15px] font-normal transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6 text-left">
              <h3 className="text-white font-bold text-[17px] tracking-tight">
                Company
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "About Us", href: "/agile-mindset" },
                  { name: "How to Hire", href: "/development-process" },
                  { name: "Success Stories", href: "/work" },
                  { name: "Contact", href: "/#interview-section" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white text-[15px] font-normal transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6 text-left">
              <h3 className="text-white font-bold text-[17px] tracking-tight">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#4B56D2] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a
                    href="mailto:sales@kraziocloud.com"
                    className="text-slate-400 hover:text-white text-[15px] font-normal transition-colors duration-200 break-all"
                  >
                    sales@kraziocloud.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#4B56D2] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-slate-400 text-[15px] font-normal">
                    India & USA
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright section (no top-border/line, matching screenshot) */}
        <div className="pt-16 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[14px] font-normal text-center md:text-left">
            © 2026 ResourceCoders (Krazio Cloud). All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy-policy"
              className="text-slate-500 hover:text-white text-[14px] font-normal transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-slate-500 hover:text-white text-[14px] font-normal transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
