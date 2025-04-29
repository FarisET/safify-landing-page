"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import FormBuilderHero from "@/public/images/form-builder-hero.png";
import IncidentReportForm from "@/public/images/Incident Report ISO45001.png";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Link from "next/link";

const HeroFormBuilder = () => {

  return <section id="homeFb" className="pt-24 md:pt-32 pb-16 md:pb-24 px-8 overflow-hidden">
    <div className="container mx-auto">

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left column - Hero text */}
        <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
          <div className={`inline-flex items-center py-1.5 px-3 bg-blue-100 rounded-full text-primary text-sm font-medium`}>
            <CheckCircle className="w-4 h-4 mr-2" />
            <span>EHS Compliance Made Simple</span>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight`}
            data-aos="zoom-y-out"
            data-aos-delay={150}>
            Streamline Your EHS Compliance with <span className="text-primary">Custom Forms</span> and Offline Access

          </h1>

          <p className={`text-lg md:text-xl text-gray-600 max-w-2xl`}
            data-aos="zoom-y-out"
            data-aos-delay={300} >
            Create custom forms to digitize audits, inspections, and compliance reports with ease, and eliminate paper-based processes, with the convenience of filling forms offline.            </p>

          {/* <div className={`flex flex-col sm:flex-row gap-4 mt-8`}
            data-aos="zoom-y-out"
            data-aos-delay={300}>
            <a href="#get-started" className="px-8 py-3.5 rounded-lg bg-primary text-white font-medium text-center hover-scale shadow-blue flex items-center justify-center gap-2 group"
            >
              Start For Free
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />

            </a>
            <a href="#features" className="px-8 py-3.5 rounded-lg bg-white border border-gray-200 text-gray-700 font-medium text-center hover-scale shadow-subtle"
            >
              See Features

            </a>
          </div> */}

        </div>

        {/* Right column - Hero image */}

        <div className={`w-full lg:w-2/3 relative`}>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-100 rounded-full filter blur-3xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-200 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>

            <div className="relative z-10 glass-card p-3 md:p-4 shadow-card overflow-hidden">
              <Image src={IncidentReportForm} alt="primary Forms Interface" className="w-full h-auto rounded-lg" />
            </div>

            <div className="absolute -bottom-4 left-2 sm:left-4 lg:left-6 z-20 py-3 px-4 animate-bounce-subtle bg-blue-500/15 backdrop-blur-md border border-blue-500/20 rounded-xl shadow-lg max-w-[90vw] sm:max-w-max">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                  <CheckCircle size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500">Works offline</p>
                  <p className="text-sm font-semibold">Data syncs when online</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>;
};
export default HeroFormBuilder;