"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { 
  MousePointer,
  RefreshCw,
  FileText,
  LayoutDashboard,
  Smartphone,
  UserCheck
} from "lucide-react";

const MobileOfflineHero = "/images/offline mobile first hero.png";
const MobilePwa = "/images/form-builder-pwa-gray.png";
const ResponsePage = "/images/Responses-page.png";
const FormBuilder = "images/form-builder-hero.png";

const FeaturesFormBuilder = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // only trigger once when in view
  });

  const features = [
    {
      icon: Smartphone,
      title: "Mobile & Offline Support",
      description: "Access your forms on any device, even without internet connectivity. The mobile PWA ensures seamless data collection in any environment.",
      image: MobileOfflineHero

    },
    {
      icon: MousePointer,
      title: "Flexible & Dynamic Form Builder",
      description: "Effortlessly create custom forms with our intuitive builder, featuring a dynamic toolset for adding text fields, multiple-choice options, checkboxes, signatures, and more.",
      image: FormBuilder
    },
    {
      icon: FileText,
      title: "Response Tracking & Reporting",
      description: "Generate detailed reports instantly and track responses",
      image: ResponsePage
    },

    // {
    //   icon: FileText,
    //   title: "Reporting & Complaince Tracking",
    //   description: "Generate detailed reports instantly and track complaince",
    //   image: "/lovable-uploads/3bbbe888-3a21-4130-aa09-96c302972195.png"
    // },
    // {
    //   icon: LayoutDashboard,
    //   title: "Analytics Dashboard",
    //   description: "Visualize your compliance data with customizable dashboards. Identify trends, track improvements, and demonstrate regulatory adherence.",
    //   image: "/lovable-uploads/3c0765ed-7c35-4418-a329-c0610fda5e3c.png"
    // }
  ];

  return (
    <section id="features" className="py-20 px-4 md:px-0" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-3">POWERFUL CAPABILITIES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features Designed for EHS Excellence
          </h2>
          <p className="text-gray-600 text-lg">
            Our comprehensive toolset gives you everything needed to manage EHS compliance 
            efficiently and effectively.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3 space-y-3 w-full">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? "bg-primary text-white shadow-blue"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-subtle"
                } ${inView ? "opacity-100" : "opacity-0"}`}
                onClick={() => setActiveTab(index)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${activeTab === index ? "bg-white/20" : "bg-blue-100"}`}>
                    <feature.icon className={`w-5 h-5 ${activeTab === index ? "text-white" : "text-primary"}`} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className={`text-sm ${activeTab === index ? "text-white/80" : "text-gray-500"}`}>
                      {feature.description.split(".")[0]}.
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Feature image and description */}
          <div className={`lg:w-2/3 w-full ${inView ? "opacity-100 animate-fade-in animate-delay-300" : "opacity-0"}`}>
            <div className="glass-card p-4 shadow-card overflow-hidden">
              <img
                src={features[activeTab].image}
                alt={features[activeTab].title}
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <div className="mt-6 glass-card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{features[activeTab].title}</h3>
              <p className="text-gray-600">{features[activeTab].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesFormBuilder;
