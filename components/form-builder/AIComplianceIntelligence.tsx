"use client";

import { useState } from "react";
import { Brain, MessageSquare, Zap, Target, Shield, ArrowRight } from "lucide-react";

const AIComplianceIntelligence = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const aiFeatures = [
    {
      icon: Brain,
      title: "Knowledge Graph Technology",
      description: "Advanced graph database that maps relationships between controls, frameworks, and evidence",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Queries",
      description: "Ask complex compliance questions in plain English and get intelligent responses",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Automated Gap Analysis",
      description: "AI identifies compliance gaps and provides actionable remediation recommendations",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Predictive Insights",
      description: "Machine learning algorithms predict potential compliance risks before they occur",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const exampleQueries = [
    "Show me coverage for patient data security across HIPAA, ISO 27001, and SHCC",
    "What controls are missing for SOC 2 Type II certification?",
    "Identify gaps in our incident response procedures",
    "Generate a compliance report for our next audit"
  ];

  return (
    <section className="py-20 px-4 md:px-0 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center py-2 px-4 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
                <Brain className="w-4 h-4 mr-2" />
                <span>AI-Powered Intelligence</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                AI-Powered Compliance Intelligence
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Leverage our advanced Knowledge Graph and AI reasoning to transform how you approach compliance. 
                Ask complex questions and get intelligent, contextual answers that connect controls across frameworks.
              </p>
            </div>

            {/* Example Query */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Example Query
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <p className="text-gray-700 font-medium">
                  "Show me coverage for patient data security across HIPAA, ISO 27001, and SHCC"
                </p>
              </div>
              <p className="text-sm text-gray-600">
                Safify responds with linked controls, attached evidence, and identifies gaps automatically.
              </p>
            </div>

            {/* AI Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors">
                Try AI Assistant
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Content - AI Interface Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Safify AI Assistant</h3>
                    <p className="text-white/80 text-sm">Powered by Knowledge Graph & AI</p>
                  </div>
                </div>
              </div>

              {/* Chat Interface */}
              <div className="p-6 space-y-4">
                {/* User Query */}
                <div className="flex justify-end">
                  <div className="bg-blue-100 text-blue-900 px-4 py-3 rounded-2xl rounded-br-md max-w-xs">
                    <p className="text-sm">
                      Show me coverage for patient data security across HIPAA, ISO 27001, and SHCC
                    </p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-2xl rounded-bl-md max-w-xs">
                    <div className="space-y-3">
                      <p className="text-sm font-medium">Here's your compliance coverage analysis:</p>
                      
                      {/* Framework Coverage */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium">HIPAA: 85% covered</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium">ISO 27001: 72% covered</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-orange-600" />
                          <span className="text-sm font-medium">SHCC: 68% covered</span>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 rounded">
                        <p className="text-xs text-yellow-800">
                          ⚠️ Gap identified: Missing encryption controls for data at rest
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Bar */}
                <div className="flex gap-2 pt-4">
                  <input
                    type="text"
                    placeholder="Ask about compliance..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIComplianceIntelligence;

