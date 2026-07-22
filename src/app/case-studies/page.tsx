"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { CTASection } from '@/components/CTASection';

import { caseStudies } from '@/data/caseStudies';

export default function CaseStudiesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(caseStudies.length / itemsPerPage);

  const currentCaseStudies = caseStudies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-[88px] relative z-10">

      {/* Hero Banner */}
      <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5b67e6] via-[#4B56D2] to-[#3e48b8]" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Case Studies</h1>
          <p className="text-slate-200 text-[16px] md:text-lg max-w-2xl mx-auto">
            Discover how we have helped companies scale their teams and achieve success with top-tier tech talent.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1358px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col gap-16 relative z-10">

        {/* Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCaseStudies.map((study) => (
            <Link
              href={`/case-studies/${study.id}`}
              key={study.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src={study.image}
                  alt={study.company || "Case Study"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Meta Tags */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {/* Pills for categories */}
                  <div className="flex flex-wrap items-center gap-2">
                    {study.tags.map((tag, i) => (
                      <span key={i} className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#f0f4ff] border border-[#d6e0ff] text-[#4B56D2] font-bold text-[10px] tracking-wide uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Date */}
                  <div className="flex items-center text-slate-400 text-xs font-medium border border-slate-200 rounded-full px-3 py-1">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {study.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#4B56D2] transition-colors line-clamp-3">
                  {study.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }).map((_, idx) => {
                const page = idx + 1;
                return (
                  <button
                    key={page}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${currentPage === page ? 'bg-[#4B56D2] text-white shadow-md shadow-[#4B56D2]/30' : 'text-slate-600 hover:bg-slate-100'}`}
                    onClick={() => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

      </div>

      <CTASection />
    </div>
  );
}
