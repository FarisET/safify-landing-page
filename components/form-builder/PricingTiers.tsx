"use client";

import { useState } from "react";
import { Check, Star, Zap, Crown } from "lucide-react";

const PricingTiers = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const tiers = [
    {
      name: "Base Tier",
      subtitle: "On-field Data Collection",
      price: billingCycle === "monthly" ? "$29" : "$290",
      period: billingCycle === "monthly" ? "/month" : "/year",
      icon: Zap,
      color: "from-blue-500 to-blue-600",
      features: [
        "Dynamic Form Builder",
        "Custom controls & simple GRC tracking",
        "Calendar scheduling & assignments",
        "Mobile PWA support",
        "Basic reporting",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Compliance Tracking",
      subtitle: "Framework Management",
      price: billingCycle === "monthly" ? "$79" : "$790",
      period: billingCycle === "monthly" ? "/month" : "/year",
      icon: Star,
      color: "from-green-500 to-green-600",
      features: [
        "All Base Tier features",
        "Framework subscriptions (HIPAA, ISO 27001, SOC 2, SHCC)",
        "Clause-to-question/control linking",
        "Evidence repository",
        "Advanced GRC tracking",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Advanced Analytics & AI",
      subtitle: "Intelligence Platform",
      price: billingCycle === "monthly" ? "$149" : "$1490",
      period: billingCycle === "monthly" ? "/month" : "/year",
      icon: Crown,
      color: "from-purple-500 to-purple-600",
      features: [
        "All Compliance Tracking features",
        "Custom report builder",
        "AI-powered compliance intelligence (Graph-RAG)",
        "Predictive insights & remediation recommendations",
        "Advanced analytics dashboard",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 md:px-0 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-3">PRICING PLANS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Compliance Journey
          </h2>
          <p className="text-gray-600 text-lg">
            Start with data collection and scale up to AI-powered compliance intelligence
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 flex">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "yearly"
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly
              <span className="ml-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl ${
                  tier.popular
                    ? "border-primary scale-105"
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.subtitle}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-500">{tier.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    tier.popular
                      ? "bg-primary text-white hover:bg-primary/90 hover:scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            All plans include a 14-day free trial. No credit card required to start.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Need a custom plan? <span className="text-primary cursor-pointer hover:underline">Contact our sales team</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;

