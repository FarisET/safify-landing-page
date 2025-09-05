"use client";

import { useState } from "react";
import { 
  MousePointer,
  Calendar,
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  CheckCircle,
  Brain,
  Shield,
  ArrowRight
} from "lucide-react";

const KeyFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  // AI Chat Interface Component
  const AIChatInterface = () => (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Brain className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Safify AI Assistant</h3>
            <p className="text-white/80 text-xs">Powered by Knowledge Graph & AI</p>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="p-4 space-y-3">
        {/* User Query */}
        <div className="flex justify-end">
          <div className="bg-blue-100 text-blue-900 px-3 py-2 rounded-2xl rounded-br-md max-w-xs">
            <p className="text-xs">
              Show me coverage for patient data security across HIPAA, ISO 27001, and SHCC
            </p>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex justify-start">
          <div className="bg-gray-100 text-gray-900 px-3 py-2 rounded-2xl rounded-bl-md max-w-xs">
            <div className="space-y-2">
              <p className="text-xs font-medium">Here's your compliance coverage analysis:</p>
              
              {/* Framework Coverage */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3 text-green-600" />
                  <span className="text-xs font-medium">HIPAA: 85% covered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3 text-blue-600" />
                  <span className="text-xs font-medium">ISO 27001: 72% covered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3 text-orange-600" />
                  <span className="text-xs font-medium">SHCC: 68% covered</span>
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
        <div className="flex gap-2 pt-2">
          <input
            type="text"
            placeholder="Ask about compliance..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-xs"
          />
          <button className="px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );

  const features = [
    {
      icon: MousePointer,
      title: "Dynamic Form Builder",
      description: "Create custom forms with drag-and-drop ease. Support for text, multiple choice, checkboxes, signatures, and more.",
      image: "/images/form-builder-hero.png",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calendar,
      title: "Audit Calendar",
      description: "Schedule and assign audits, inspections, and compliance tasks. Never miss a deadline with automated reminders.",
      image: "/images/Responses-page.png",
      color: "from-green-500 to-green-600"
    },
    {
      icon: LayoutDashboard,
      title: "Compliance Dashboard",
      description: "Real-time visibility into your compliance status across all frameworks. Track progress and identify areas of concern.",
      image: "/images/Responses-page.png",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageSquare,
      title: "AI Q&A Assistant",
      description: "Ask complex compliance questions in natural language. Get intelligent answers backed by your data and frameworks.",
      color: "from-orange-500 to-orange-600",
      isAIChat: true
    },
    {
      icon: BarChart3,
      title: "Custom Reporting",
      description: "Generate comprehensive reports for auditors and stakeholders. Customize dashboards and export data in multiple formats.",
      image: "/images/Responses-page.png",
      color: "from-red-500 to-red-600"
    },
    {
      icon: CheckCircle,
      title: "Evidence Repository",
      description: "Centralized storage for all compliance evidence. Link documents, forms, and data to specific controls and frameworks.",
      image: "/images/Responses-page.png",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-0 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-3">KEY FEATURES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Compliance Excellence
          </h2>
          <p className="text-gray-600 text-lg">
            Our comprehensive platform combines powerful tools with intelligent automation 
            to streamline your compliance management
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  activeFeature === index
                    ? "border-primary scale-105"
                    : "border-gray-100 hover:border-gray-200"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                {activeFeature === index && (
                  <div className="mt-4 flex items-center gap-2 text-primary font-medium">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Active</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Feature Showcase */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Feature Details */}
            <div className="space-y-6">
              <div className={`inline-flex items-center py-2 px-4 rounded-full text-sm font-medium ${
                activeFeature === 0 ? "bg-blue-100 text-blue-700" :
                activeFeature === 1 ? "bg-green-100 text-green-700" :
                activeFeature === 2 ? "bg-purple-100 text-purple-700" :
                activeFeature === 3 ? "bg-orange-100 text-orange-700" :
                activeFeature === 4 ? "bg-red-100 text-red-700" :
                "bg-indigo-100 text-indigo-700"
              }`}>
                {features[activeFeature].title}
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900">
                {features[activeFeature].title}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {features[activeFeature].description}
              </p>

              {/* Feature-specific benefits */}
              <div className="space-y-3">
                {activeFeature === 0 && (
                  <>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Drag & drop form builder</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">100+ field types supported</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Conditional logic & branching</span>
                    </div>
                  </>
                )}
                
                {activeFeature === 1 && (
                  <>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Automated scheduling & reminders</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Team assignment & notifications</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Integration with calendar apps</span>
                    </div>
                  </>
                )}

                {activeFeature === 2 && (
                  <>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Real-time compliance status</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Framework progress tracking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Risk assessment visualization</span>
                    </div>
                  </>
                )}

                {activeFeature === 3 && (
                  <>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Natural language queries</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Knowledge graph technology</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Contextual compliance answers</span>
                    </div>
                  </>
                )}

                {activeFeature === 4 && (
                  <>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Customizable report templates</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Multiple export formats</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Automated report generation</span>
                    </div>
                  </>
                )}

                {activeFeature === 5 && (
                  <>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Centralized document storage</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Control-to-evidence linking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Version control & audit trail</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right: Feature Screenshot */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gray-100 p-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-4">
                  {features[activeFeature].isAIChat ? (
                    <AIChatInterface />
                  ) : (
                    <img
                      src={features[activeFeature].image}
                      alt={features[activeFeature].title}
                      className="w-full h-auto rounded-lg shadow-sm"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E%3Ctspan x='50%25' dy='-0.5em'%3E%3C/tspan%3E%3Ctspan x='50%25' dy='1.2em'%3E%3C/tspan%3E%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
