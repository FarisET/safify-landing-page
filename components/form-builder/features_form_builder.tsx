"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import ResponseTypesCard from "./response_type_card"; // for "10+ Data types"
import QuestionItemFB from "./question_item_FB";
import LogicRuleFB from "./logic_rule_FB";
import CalendarFB from "./calendar_FB";
import ComplianceTrackingCard from "./compliance_card_FB";
import MobilePreviewForm from "./mobile_preview_form";
import ComplianceAuditSection from "./compliance_audit_section";
import AnalyticsChart from "./analytics_chart";

const featureItems = [
  {
    title: "Design complex forms",
    description: "Easily create multi-step forms with drag & drop.",
    component: (
 
      <QuestionItemFB />
    ),
  },
  {
    title: "10+ Data types",
    description: "Collect responses with text, media, location & more.",
    component: <ResponseTypesCard />,
  },
  {
    title: "Logic Rules",
    description: "Show or hide fields dynamically with logic conditions.",
    component: (
      //   <Image
      //     src="/images/logic-rules.png"
      //     alt="Logic rules mockup"
      //     width={500}
      //     height={400}
      //     className="w-full h-auto object-cover"
      //   />
      <LogicRuleFB />
    ),
  },
  {
    title: "Scheduling",
    description: "Assign recurring audits and reminders seamlessly.",
    component: (
      <CalendarFB />
    ),
  },
  {
    title: "Compliance Tracking",
    description: "Link questions and answers with compliance clauses.",
    component: (
      // <Image
      //   src="/images/compliance.png"
      //   alt="Compliance mockup"
      //   width={500}
      //   height={400}
      //   className="w-full h-auto object-cover"
      // />
      <ComplianceTrackingCard />
    ),
  },
  {
    title: "Offline-First Mobile Form",
    description: "Fill out forms without internet, sync later.",
    component: <MobilePreviewForm />,
  },
  {
    title: "Analytics & Insights",
    description: "Real-time compliance analytics and audit insights.",
    component: <AnalyticsChart />,
  },

];

export default function FeaturesSectionFB() {
  const [active, setActive] = useState(0);

  return (
    <section id="features_form_builder" className="w-full py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-start">
        {/* Left Column: Feature Chips */}
        <div className="flex flex-col">
        <p className="text-sm md:text-lg text-primary font-medium mb-0">Features</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
            Form Builder
          </h2>
          <p className="text-base text-slate-600 mb-5 leading-relaxed">
          Create audits, inspections, and checklists. Share with your team and access offline.
          </p>

          <div className="flex flex-wrap gap-3">
            {featureItems.map((feat, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm transition-all ${active === i
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-blue-500/10 text-slate-800 border border-blue-500/20 hover:shadow-md"
                  }`}
              >
                <CheckCircle
                  size={14}
                  className={active === i ? "text-white" : "text-blue-600"}
                />
                <span className="text-xs font-medium whitespace-nowrap">
                  {feat.title}
                </span>
              </button>
            ))}
          </div>
        </div>
        {/* Right Column: Dynamic Component */}
        <div className="relative flex justify-start items-start w-full">
          <div className="rounded-2xl overflow-hidden bg-transparent max-w-full transform origin-top-left
                  scale-100 md:scale-90 sm:scale-75">
            {featureItems[active].component}
          </div>
        </div>
      </div>
    </section>
  );
}
