"use client";

import { useState, useEffect } from "react";
import { 
  ClipboardList, 
  Target, 
  Brain, 
  ArrowRight,
  Database,
  Shield,
  BarChart3,
  MessageSquare
} from "lucide-react";

const PlatformOverview = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("platform-overview");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const modules = [
    {
      icon: ClipboardList,
      title: "Field Data Collection",
      subtitle: "Form Builder + Calendar Assignments",
      description: "Capture data on-site with dynamic forms, offline capabilities, and automated scheduling",
      features: ["Dynamic Form Builder", "Calendar Scheduling", "Offline Access", "Mobile PWA"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Compliance Tracking",
      subtitle: "Framework Mapping + Controls + Evidence",
      description: "Map your data to compliance frameworks and maintain evidence repository",
      features: ["Framework Subscriptions", "Control Mapping", "Evidence Repository", "GRC Tracking"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Brain,
      title: "AI & Analytics",
      subtitle: "Gap Analysis, Q&A, Advanced Reporting",
      description: "Leverage AI for intelligent compliance insights and predictive analytics",
      features: ["AI Gap Analysis", "Knowledge Graph", "Predictive Insights", "Custom Reports"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="platform-overview" className="py-20 px-4 md:px-0 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-3">PLATFORM ARCHITECTURE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Safify Works
          </h2>
          <p className="text-gray-600 text-lg">
            Our integrated platform connects data collection, compliance tracking, and AI intelligence 
            to create a seamless compliance management experience
          </p>
        </div>

        {/* Module Diagram */}
        <div className={`relative ${isVisible ? "opacity-100 animate-fade-in" : "opacity-0"}`}>
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transform -translate-y-1/2 z-0"></div>
          <div className="hidden lg:block absolute top-1/2 left-3/4 w-1/2 h-0.5 bg-gradient-to-r from-green-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
          
          {/* Arrow Labels */}
          <div className="hidden lg:block absolute top-1/2 left-1/3 transform -translate-y-1/2 z-10">
            <div className="bg-white px-3 py-1 rounded-full shadow-md border border-gray-200">
              <span className="text-sm font-medium text-gray-700">Collect</span>
            </div>
          </div>
          <div className="hidden lg:block absolute top-1/2 left-2/3 transform -translate-y-1/2 z-10">
            <div className="bg-white px-3 py-1 rounded-full shadow-md border border-gray-200">
              <span className="text-sm font-medium text-gray-700">Map</span>
            </div>
          </div>
          <div className="hidden lg:block absolute top-1/2 left-5/6 transform -translate-y-1/2 z-10">
            <div className="bg-white px-3 py-1 rounded-full shadow-md border border-gray-200">
              <span className="text-sm font-medium text-gray-700">Analyze</span>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {modules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Module Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-6 mx-auto`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Module Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{module.title}</h3>
                    <p className="text-primary font-medium mb-3">{module.subtitle}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{module.description}</p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {module.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center gap-2 text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Flow Indicator */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">Complete Flow:</span>
              <span className="text-primary font-semibold">Collect → Map → Analyze → Report</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;

