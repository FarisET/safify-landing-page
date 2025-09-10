"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import FormBuilderHero from "@/public/images/form-builder-hero.png";
import HeroForm from "@/public/images/hospital-industry.jpg";
import IncidentReportForm from "@/public/images/Incident Report ISO45001.png";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Link from "next/link";
import {
  MobileFormOverlay,
  AnalyticsOverlay,
  FeatureHighlightsOverlay,
  ComplianceStatusOverlay,
  AuditPieChart
} from "./hero_overlay_components";
import AnalyticsChartHero from "./analytics_chart_hero";

const HeroFormBuilder = () => {

  return (
    <section id="audit-and-compliance" className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Dark theme background with subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:20px_20px]"></div>

      {/* Ambient lighting effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left column - Hero text */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <div className="inline-flex items-center py-2 px-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 text-sm font-medium shadow-lg">
              <CheckCircle className="w-6 h-6 mr-2 text-blue-300" />
              <span>Evidence-based compliance tracking with on-field data collection</span>
            </div>

            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white relaxed"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Streamline Site Audits & Compliance with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Custom Forms
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
              data-aos="zoom-y-out"
              data-aos-delay={300}
            >
              Digitize audits, inspections, and compliance reports with ease.
              Eliminate paper-based processes with the convenience of filling forms offline.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              data-aos="zoom-y-out"
              data-aos-delay={400}
            >
              <a
                href="#industries"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-center hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group border border-blue-400/20"
              >
                Usecases
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#features_form_builder"
                className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-center hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                See Features
              </a>
            </div>
          </div>

          {/* Right column - Hero image with enhanced dark theme styling */}
          <div className="w-full lg:w-2/3 relative">
            <div className="relative">
              {/* Enhanced ambient effects */}
              <div className="absolute -top-16 -left-16 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-gradient-to-r from-purple-500/20 to-pink-500/15 rounded-full filter blur-3xl animate-pulse"></div>

              {/* Enhanced glass card with dark theme */}
              <div className="relative z-10 backdrop-blur-xl bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl shadow-black/50 overflow-hidden">
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl"></div>

                {/* Always reserve height */}
                <div className="relative z-10 h-[350px] sm:h-auto">
                  {/* Image only visible from sm and above */}
                  <div className="hidden sm:block h-full">
                    <Image
                      src={HeroForm}
                      alt="Custom Forms Interface"
                      className="w-full h-full object-cover rounded-xl shadow-lg ring-1 ring-white/10"
                    />
                  </div>
                </div>

                {/* Enhanced overlay components with better contrast */}
                <div className="absolute inset-0 rounded-xl z-20">
                  <AnalyticsOverlay />
                  <AuditPieChart />
                  {/* <AnalyticsChartHero /> */}
                </div>
              </div>

              {/* Enhanced floating notification */}
              <div className="absolute -bottom-6 right-2 sm:right-4 lg:right-6 z-20 py-2 px-3 sm:py-4 sm:px-5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-lg border border-blue-400/30 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl shadow-emerald-500/20 max-w-[90vw] sm:max-w-max animate-bounce-subtle">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                    <CheckCircle size={16} className="sm:size-20 text-blue-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs md:text-sm text-slate-200/80 md:text-slate-800/80 font-bold">
                      Regulatory Compliance
                    </p>
                    <p className="text-xs sm:text-md md:text-lg font-bold text-white">
                      Multi-framework compliance made simple
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFormBuilder;