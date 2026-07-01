"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function AgileConsultancyBanner() {
  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side: Book/Resource Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-80 rounded-lg shadow-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Mastering the Art of Startup Consultancy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg leading-tight mb-2">Mastering the Art of Startup Consultancy Services</h3>
                <p className="text-slate-300 text-xs">by Krazio Cloud</p>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Achieve true Agility with our Startup Consultancy Services
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Krazio Cloud, our tailored consultancy services help you align your strategy, adopt Agile frameworks, and navigate the complexities of product development. Let our experts guide your startup towards sustainable, scalable success.
            </p>
            <div className="pt-2">
              <Link 
                href="/services/startup-consulting" 
                className="inline-flex items-center px-6 py-3 border-2 border-[#4B56D2] text-[#4B56D2] font-semibold rounded-full hover:bg-[#4B56D2] hover:text-white transition-colors duration-300"
              >
                Discover More
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
