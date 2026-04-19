"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const HomeHero = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    // Stagger-in the text children
    const children = el.querySelectorAll("[data-reveal]");
    children.forEach((child, i) => {
      (child as HTMLElement).style.animationDelay = `${i * 150}ms`;
      (child as HTMLElement).style.animationFillMode = "both";
    });
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/factory.png"
        alt="Industrial facility"
        fill
        priority
        className="object-cover object-center"
        quality={90}
      />

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Content */}
      <div
        ref={videoRef}
        className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 max-w-[1400px] mx-auto"
      >
        {/* Eyebrow label */}
        <div
          data-reveal
          className="animate-fade-up mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
            Industrial Safety & Compliance Solutions
          </span>
        </div>

        {/* Headline */}
        <h1
          data-reveal
          className="animate-fade-up max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Safety Compliance,{" "}
          <br className="hidden sm:block" />
          <span
            style={{
              background: "linear-gradient(90deg, #38bdf8 0%, #1893f8 50%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Without the Paperwork.
          </span>
        </h1>

        {/* Tagline */}
        <p
          data-reveal
          className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl"
        >
          Digitize inspections, audits, and compliance workflows across your
          industrial operations — from factory floor to field site.
        </p>

        {/* CTAs */}
        <div
          data-reveal
          className="animate-fade-up mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/compliance-and-audit-management"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 group"
          >
            Explore Platform
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#latest-news"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:scale-105"
          >
            See Products
          </Link>
        </div>

        {/* Stats row */}
        {/* <div
          data-reveal
          className="animate-fade-up mt-14 flex flex-wrap gap-x-10 gap-y-4"
        >
          {[
            { value: "6+", label: "Industries Covered" },
            { value: "ISO 45001", label: "Compliance Ready" },
            { value: "100%", label: "Offline Capable" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-2xl font-extrabold text-white">
                {stat.value}
              </span>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div> */}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[5]" />

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </section>
  );
};

export default HomeHero;
