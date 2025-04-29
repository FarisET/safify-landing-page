
"use client";

import { useState, useEffect } from "react";
import { 
  UserPlus, 
  PenTool, 
  Smartphone, 
  Database, 
  FileBarChart 
} from "lucide-react";

const HowItWorksFB = () => {
  const [visibleStep, setVisibleStep] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute("data-step") || "0");
            setVisibleStep((prev) => Math.max(prev, stepIndex));
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".step-item").forEach((step) => {
      observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up and Create Your account for Free",
      description: "Get started with a free account in minutes. No credit card required."
    },
    {
      icon: PenTool,
      title: "Create Custom Forms Using the Intuitive Form Builder",
      description: " elements to build forms that match your exact compliance requirements."
    },
    {
      icon: Smartphone,
      title: "Access Forms on Your Phone",
      description: "Install the Progressive Web App on your mobile devices for seamless form access."
    },
    {
      icon: Database,
      title: "Fill Out Forms Offline & Sync Later",
      description: "Work in remote locations without connectivity and automatically sync when connection is restored."
    },
    {
      icon: FileBarChart,
      title: "Analyze Reports & Ensure Compliance",
      description: "Generate comprehensive reports & track compliance"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 md:px-0 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-safify-500 font-medium mb-3">SIMPLE PROCESS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Safify Forms Works
          </h2>
          <p className="text-gray-600 text-lg">
            Follow these simple steps to transform your EHS compliance process
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 top-8 h-[calc(100%-64px)] w-1 bg-gray-200 rounded-full hidden md:block"></div>
          
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`step-item flex flex-col md:flex-row gap-8 items-start transition-all duration-500 ${
                  visibleStep >= index ? "opacity-100" : "opacity-0 translate-y-10"
                }`}
                data-step={index}
              >
                <div className="flex items-center justify-center">
                  <div className={`relative w-16 h-16 rounded-full z-10 flex items-center justify-center transition-all duration-500 ${
                    visibleStep >= index ? "bg-safify-500 text-white" : "bg-gray-200 text-gray-400"
                  }`}>
                    <step.icon size={24} />
                    <div className="absolute -right-1 -top-1 w-6 h-6 rounded-full bg-white text-safify-500 flex items-center justify-center font-bold text-sm border-2 border-safify-500">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <div className="glass-card p-6 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksFB;
