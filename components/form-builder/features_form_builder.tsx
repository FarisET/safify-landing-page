"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import ResponseTypesCard from "./response_type_card"; // for "10+ Data types"
import QuestionItemFB from "./question_item_FB";
import LogicRuleFB from "./logic_rule_FB";
import CalendarFB from "./calendar_FB";

const featureItems = [
  {
    title: "Design complex forms",
    description: "Easily create multi-step forms with drag & drop.",
    component: (
    //   <Image
    //     src="/images/complex-forms.png"
    //     alt="Complex forms mockup"
    //     width={500}
    //     height={400}
    //     className="w-full h-auto object-cover"
    //   />
    <QuestionItemFB/>
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
    <LogicRuleFB/>
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
      <Image
        src="/images/compliance.png"
        alt="Compliance mockup"
        width={500}
        height={400}
        className="w-full h-auto object-cover"
      />
    ),
  },
  {
    title: "Offline-First Mobile Form",
    description: "Fill out forms without internet, sync later.",
    component: (
      <Image
        src="/images/offline-form.png"
        alt="Offline-first form mockup"
        width={500}
        height={400}
        className="w-full h-auto object-cover"
      />
    ),
  },
];

export default function FeaturesSectionFB() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-center">
        {/* Left Column: Feature Chips */}
        <div className="flex flex-wrap gap-3">
          {featureItems.map((feat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm transition-all ${
                active === i
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

        {/* Right Column: Dynamic Component */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden bg-transparent">
            {featureItems[active].component}
          </div>
          <p className="mt-3 text-sm text-slate-600 text-center">
            {featureItems[active].description}
          </p>
        </div>
      </div>
    </section>
  );
}
