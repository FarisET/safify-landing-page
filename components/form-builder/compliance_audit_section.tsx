"use client";

import React from "react";
import {
  Shield,
  Scale,
  Database,
  Search,
} from "lucide-react";

export default function ComplianceAuditSection() {
  const features = [
    {
      icon: Shield,
      title: "Policy Compliance",
    },
    {
      icon: Scale,
      title: "Regulatory Compliance",
    },
    {
      icon: Database,
      title: "Data Privacy",
    },
    {
      icon: Search,
      title: "Internal Audits",
    }
  ];

  return (
    <section id="compliance-and-audit" className="w-full min-h-[520px] py-30 grid place-items-center p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 relative">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 md:text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Compliance & Audit
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Drive sustainable growth and ensure your organization operates within legal
            and regulatory frameworks while meeting internal and industry standards.
          </p>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
          {features.slice(0, 4).map((feature, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md hover:bg-white/90 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-150 transition-colors duration-300 shadow-inner">
                <feature.icon
                  size={24}
                  className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300 sm:w-7 sm:h-7"
                />
              </div>

              {/* Feature title */}
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 group-hover:text-slate-900 transition-colors duration-300 leading-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle floating glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/6 to-purple-500/6 rounded-2xl blur-2xl -z-10"></div>
    </section>
  );
}