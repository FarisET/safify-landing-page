"use client";

import { useState } from "react";
import { CheckCircle, TrendingUp, Clock, Users, Star } from "lucide-react";

const CustomerProof = () => {
  const [isVisible, setIsVisible] = useState(false);

  const metrics = [
    {
      icon: Clock,
      value: "40-60%",
      label: "Audit Cycle Reduction",
      description: "Streamlined processes and automated workflows",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      value: "30-50%",
      label: "Control Reuse Efficiency",
      description: "Intelligent mapping across frameworks",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      value: "100%",
      label: "Team Adoption",
      description: "User-friendly interface drives engagement",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "User Satisfaction",
      description: "Based on pilot program feedback",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const testimonials = [
    {
      quote: "Safify transformed our compliance management from a reactive process to a proactive, intelligent system. The AI insights have been game-changing.",
      author: "Dr. Sarah Ahmed",
      role: "Chief Compliance Officer",
      organization: "Indus Hospital"
    },
    {
      quote: "The platform's ability to map controls across multiple frameworks saved us countless hours and significantly improved our audit readiness.",
      author: "Muhammad Hassan",
      role: "IT Security Manager",
      organization: "Indus Hospital"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-0 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-3">CUSTOMER SUCCESS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted in Real Audits
          </h2>
          <p className="text-gray-600 text-lg">
            See how leading healthcare organizations are transforming their compliance 
            management with Safify's AI-powered platform
          </p>
        </div>

        {/* Customer Logo & Overview */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Customer Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">IH</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Indus Hospital</h3>
                  <p className="text-gray-600">Leading Healthcare Network in Pakistan</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Pilot Program Results</h4>
                <p className="text-gray-600 leading-relaxed">
                  Indus Hospital implemented Safify across their compliance operations, 
                  covering HIPAA, ISO 27001, and local healthcare regulations. The results 
                  demonstrate significant improvements in efficiency and compliance readiness.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <p className="text-blue-800 text-sm">
                    <strong>Challenge:</strong> Manual compliance tracking across multiple frameworks 
                    was time-consuming and error-prone, leading to audit delays and compliance gaps.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Key Metrics */}
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-3`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm font-medium text-gray-700 mb-2">{metric.label}</div>
                    <p className="text-xs text-gray-500">{metric.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.organization}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Summary */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pilot Program Impact</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The successful implementation at Indus Hospital demonstrates Safify's ability 
              to deliver measurable improvements in compliance management efficiency and effectiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Improved Audit Readiness</h4>
              <p className="text-gray-600 text-sm">
                Real-time compliance status and automated gap analysis ensure 
                organizations are always prepared for audits.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Operational Efficiency</h4>
              <p className="text-gray-600 text-sm">
                Automated workflows and intelligent insights reduce manual effort 
                and improve team productivity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Risk Mitigation</h4>
              <p className="text-gray-600 text-sm">
                Proactive identification of compliance gaps and predictive insights 
                help prevent potential violations.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to achieve similar results?</p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors">
            Start Your Pilot Program
            <CheckCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerProof;

