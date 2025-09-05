"use client";

import { Check, X, Minus } from "lucide-react";

const CompetitiveComparison = () => {
  const competitors = [
    {
      name: "SafetyCulture",
      logo: "SC",
      description: "Great forms, no compliance mapping",
      color: "from-orange-500 to-orange-600",
      features: [
        { name: "Dynamic Form Builder", has: true, partial: false },
        { name: "Mobile PWA Support", has: true, partial: false },
        { name: "Compliance Framework Mapping", has: false, partial: false },
        { name: "Control-to-Evidence Linking", has: false, partial: false },
        { name: "AI Gap Analysis", has: false, partial: false },
        { name: "Multi-Framework Support", has: false, partial: false },
        { name: "Advanced Reporting", has: false, partial: false }
      ]
    },
    {
      name: "LogicGate, Vanta",
      logo: "LV",
      description: "Compliance mapping, no investigator-friendly form capture",
      color: "from-blue-500 to-blue-600",
      features: [
        { name: "Dynamic Form Builder", has: false, partial: false },
        { name: "Mobile PWA Support", has: false, partial: false },
        { name: "Compliance Framework Mapping", has: true, partial: false },
        { name: "Control-to-Evidence Linking", has: true, partial: false },
        { name: "AI Gap Analysis", has: false, partial: false },
        { name: "Multi-Framework Support", has: true, partial: false },
        { name: "Advanced Reporting", has: true, partial: false }
      ]
    },
    {
      name: "Safify",
      logo: "S",
      description: "Both + AI gap analysis",
      color: "from-primary to-blue-600",
      features: [
        { name: "Dynamic Form Builder", has: true, partial: false },
        { name: "Mobile PWA Support", has: true, partial: false },
        { name: "Compliance Framework Mapping", has: true, partial: false },
        { name: "Control-to-Evidence Linking", has: true, partial: false },
        { name: "AI Gap Analysis", has: true, partial: false },
        { name: "Multi-Framework Support", has: true, partial: false },
        { name: "Advanced Reporting", has: true, partial: false }
      ],
      highlight: true
    }
  ];

  const getFeatureIcon = (has: boolean, partial: boolean) => {
    if (has) return <Check className="w-5 h-5 text-green-500" />;
    if (partial) return <Minus className="w-5 h-5 text-yellow-500" />;
    return <X className="w-5 h-5 text-red-500" />;
  };

  return (
    <section className="py-20 px-4 md:px-0 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-3">COMPETITIVE ADVANTAGE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Safify?
          </h2>
          <p className="text-gray-600 text-lg">
            While other solutions excel in specific areas, Safify is the only platform 
            that combines powerful form building with intelligent compliance management
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-4 gap-0">
            <div className="p-6 bg-gray-50 border-r border-gray-200">
              <h3 className="font-semibold text-gray-900 text-center">Features</h3>
            </div>
            {competitors.map((competitor, index) => (
              <div 
                key={index} 
                className={`p-6 text-center border-r border-gray-200 ${
                  index === competitors.length - 1 ? 'border-r-0' : ''
                } ${competitor.highlight ? 'bg-primary/5' : 'bg-gray-50'}`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${competitor.color} flex items-center justify-center mx-auto mb-3 ${
                  competitor.highlight ? 'ring-4 ring-primary/20' : ''
                }`}>
                  <span className="text-white text-xl font-bold">{competitor.logo}</span>
                </div>
                <h4 className={`font-bold text-lg mb-2 ${
                  competitor.highlight ? 'text-primary' : 'text-gray-900'
                }`}>
                  {competitor.name}
                </h4>
                <p className="text-sm text-gray-600">{competitor.description}</p>
                {competitor.highlight && (
                  <div className="mt-3 inline-block bg-primary text-white text-xs px-3 py-1 rounded-full font-medium">
                    Recommended
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {competitors[0].features.map((feature, featureIndex) => (
            <div key={featureIndex} className="grid grid-cols-4 gap-0 border-t border-gray-200">
              <div className="p-6 bg-white border-r border-gray-200 flex items-center">
                <h4 className="font-medium text-gray-900">{feature.name}</h4>
              </div>
              {competitors.map((competitor, compIndex) => (
                <div 
                  key={compIndex} 
                  className={`p-6 flex items-center justify-center border-r border-gray-200 ${
                    compIndex === competitors.length - 1 ? 'border-r-0' : ''
                  } ${competitor.highlight ? 'bg-primary/5' : 'bg-white'}`}
                >
                  {getFeatureIcon(
                    competitor.features[featureIndex].has,
                    competitor.features[featureIndex].partial
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Key Differentiators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Solution</h3>
            <p className="text-gray-600">
              Unlike competitors who excel in one area, Safify provides end-to-end 
              compliance management from data collection to AI-powered insights.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI-First Approach</h3>
            <p className="text-gray-600">
              Our Knowledge Graph technology and AI reasoning capabilities 
              provide intelligent compliance insights that no other platform offers.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">User Experience</h3>
            <p className="text-gray-600">
              Designed for both compliance professionals and field investigators, 
              Safify ensures high adoption rates across all user types.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Join organizations that have already transformed their compliance management 
              with Safify's comprehensive, AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 transition-colors">
                Book a Demo
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveComparison;

