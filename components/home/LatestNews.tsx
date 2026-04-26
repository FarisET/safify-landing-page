"use client";

import Image from 'next/image';
import { FaCheckCircle, FaGooglePlay } from 'react-icons/fa';

export default function SafifyLaunchCard() {
  return (
    <section id='latest-news' className="bg-white py-12 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* LATEST FROM SAFIFY label - Reduced margin-bottom */}
        <p className="text-gray-600 font-semibold mb-6 text-xl flex items-center gap-3">
          <span className="w-16 h-px bg-gray-300"></span>
          LATEST FROM SAFIFY
        </p>

        {/* Main Card Container - Reduced top padding to move content up */}
        <div className="relative overflow-hidden bg-[#1E293B] rounded-3xl p-8 md:pt-12 md:pb-16 md:px-16 lg:px-20 shadow-[0_30px_90px_rgba(0,0,0,0.5)] border border-[#2E3748]">

          {/* Background Glows and Texture */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full filter blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_1.5px,transparent_1.5px)] [background-size:32px_32px] pointer-events-none opacity-60"></div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20 relative z-10">

            {/* Left Column: Slanted Mobile Mockup */}
            <div className="relative flex justify-center md:justify-end pr-0 md:pr-10 lg:pr-16 z-10">
               <div className="relative group scale-100 hover:scale-[1.03] transition-transform duration-500">
                <div className="absolute -inset-16 bg-black/40 rounded-full blur-[100px] -rotate-[-14deg] -z-10 translate-x-8 translate-y-8"></div>
                <div className="relative w-[260px] sm:w-[280px] aspect-[1/2] rotate-[-14deg] rounded-[40px] bg-[#2E3748] shadow-[inset_0_4px_12px_rgba(255,255,255,0.06),0_15px_50px_rgba(0,0,0,0.7)] p-3 border border-[#1A1F2B]">
                  <div className="absolute inset-0.5 rounded-[38px] border-2 border-l-white/10 border-t-white/10 border-r-transparent border-b-transparent"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2E3748] rounded-b-xl z-20 flex items-center justify-center gap-2 p-1 border border-t-0 border-[#1A1F2B]">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <div className="flex-1 h-1 bg-black rounded"></div>
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                  </div>
                  <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-[#1A1F2B]">
                    <Image
                      src="/images/inpsection_screen_pic.png"
                      alt="SafeInspect Barcode Scanning Screen Content"
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text and CTA Content */}
            <div className="flex flex-col space-y-8">
              
              {/* Header Row: Title and Google Play in one line */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <img src="/images/safeInspect-logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      Safe Inspect
                    </h2>
                  </div>
                  <p className="text-gray-200 text-md font-medium">
                    <span className="text-emerald-500 font-bold">Excel</span> Inspection Checklist App
                  </p>
                  {/* Tagline moved here for better UX visibility */}
                  <p className="text-blue-400/80 text-xs font-semibold uppercase tracking-wider">
                    Free · No credit card needed
                  </p>
                </div>

                {/* Google Play CTA Button */}
                <a
                  href="https://play.google.com/store/apps/developer?id=Safify"
                  className="inline-flex items-center gap-3 border border-gray-600 bg-gray-950 px-5 py-2.5 rounded-xl shadow-xl hover:border-blue-500 transition-all group active:scale-95 self-start lg:self-center"
                >
                  <FaGooglePlay className="text-white text-xl group-hover:scale-105 transition-transform" />
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 font-medium uppercase leading-none">Get it on</p>
                    <p className="text-lg font-bold text-white leading-none">Google Play</p>
                  </div>
                </a>
              </div>

              {/* Divider for Visual Clarity */}
              <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent"></div>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Professional EHS & QC Checklist Inspection Tool
              </p>

              {/* Feature Checklist - Slightly tighter spacing */}
              <ul className="grid grid-cols-1 gap-4 text-gray-300 text-sm md:text-base">
                {[
                  { text: "100% offline: Upload existing ", highlight: "Excel", end: " checklists." },
                  { text: "10+ report customizations: PDF, Excel and Docx." },
                  { text: "Flexible response types: Text, Numeric, Signatures." },
                  { text: "Barcode scanning mode for easy item selection." }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                    <span>
                      {item.text}
                      {item.highlight && <span className="text-emerald-500 font-bold">{item.highlight}</span>}
                      {item.end}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}