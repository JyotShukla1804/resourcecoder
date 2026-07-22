import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Building2 } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import { CTASection } from '@/components/CTASection';

export default async function CaseStudyDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const study = caseStudies.find(s => s.id === parseInt(resolvedParams.id));

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white flex flex-col pt-[88px] relative z-10 font-sans selection:bg-[#4B56D2]/20">
      
      {/* Top Banner / Hero area */}
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <Link 
          href="/case-studies" 
          className="inline-flex items-center text-[#4B56D2] hover:text-blue-700 transition-colors mb-8 font-semibold text-sm uppercase tracking-wider group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          {study.tags.map((tag, i) => (
            <span key={i} className="inline-flex items-center justify-center px-3 py-1 rounded bg-[#4B56D2]/5 text-[#4B56D2] font-bold text-[10px] tracking-widest uppercase border border-[#4B56D2]/10">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1] max-w-4xl">
          {study.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-slate-500 font-medium text-sm">
          <div className="flex items-center">
            <Building2 className="w-4 h-4 mr-2 text-slate-400" />
            {study.company}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-slate-400" />
            {study.date}
          </div>
        </div>
      </div>

      {/* Stats/Highlights Box */}
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-wrap gap-8 justify-between items-center shadow-sm">
          <div className="flex flex-col">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Client</span>
            <span className="text-slate-900 font-semibold text-lg">{study.company}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Timeline</span>
            <span className="text-slate-900 font-semibold text-lg">6 Months</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Platform</span>
            <span className="text-slate-900 font-semibold text-lg">Web & Mobile</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Role</span>
            <span className="text-slate-900 font-semibold text-lg">Full-Stack ODC</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8 pb-32">
        <div className="max-w-[900px]">
          
          {/* Article Body */}
          <div className="flex flex-col gap-12 text-left">
            
            <section>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 pb-4 border-b border-slate-100 tracking-tight">
                Project Overview
              </h2>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                {study.content.overview}
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 pb-4 border-b border-slate-100 tracking-tight">
                The Challenge
              </h2>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                {study.content.challenge}
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 pb-4 border-b border-slate-100 tracking-tight">
                Our Solution
              </h2>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                {study.content.solution}
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 pb-4 border-b border-slate-100 tracking-tight">
                Measurable Impact
              </h2>
              <ul className="list-disc pl-6 space-y-4 marker:text-[#4B56D2]">
                {study.content.results.map((result, idx) => (
                  <li key={idx} className="text-lg md:text-xl text-slate-700 leading-relaxed pl-2">
                    {result}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
