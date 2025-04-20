
import { useState, useEffect } from "react";
import { 
  HardHat, 
  Building2, 
  Factory, 
  FlaskConical, 
  Truck, 
  Warehouse 
} from "lucide-react";

const IndustrySolutions = () => {
  const [activeTab, setActiveTab] = useState(0);
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

    const section = document.getElementById("industries");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const industries = [
    {
      icon: HardHat,
      name: "Construction",
      description: "Streamline safety inspections, equipment checks, and regulatory compliance for construction sites.",
      useCase: "Site Safety Audits, Equipment Inspection, Worker Certification Tracking",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Manage production safety protocols, machine inspections, and environmental compliance.",
      useCase: "Machine Safety Checklists, Quality Control Forms, Environmental Monitoring",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FlaskConical,
      name: "Chemical",
      description: "Ensure proper handling procedures, safety data sheet compliance, and hazard assessments.",
      useCase: "Hazardous Material Tracking, Safety Data Sheet Audits, Spill Response Protocols",
      image: "https://images.unsplash.com/photo-1616458964690-907deeb90c0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Building2,
      name: "Facilities",
      description: "Monitor building systems, track maintenance, and document safety compliance.",
      useCase: "Facility Audits, Maintenance Inspections, Fire Safety Compliance",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Truck,
      name: "Logistics",
      description: "Track vehicle inspections, monitor driver safety, and maintain DOT compliance.",
      useCase: "Vehicle Inspections, Driver Safety Checklists, Loading Dock Safety",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Warehouse,
      name: "Warehousing",
      description: "Optimize inventory management, safety protocols, and equipment inspections.",
      useCase: "Forklift Inspections, Warehouse Safety Audits, Loading Area Compliance",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Get the current industry's icon component
  const IconComponent = industries[activeTab].icon;

  return (
    <section id="industries" className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-safify-500 font-medium mb-3">INDUSTRY SOLUTIONS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tailored for Your Industry
          </h2>
          <p className="text-gray-600 text-lg">
            Safify Forms adapts to the unique compliance requirements across various sectors
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-12">
          {industries.map((industry, index) => {
            const TabIcon = industry.icon;
            return (
              <button
                key={index}
                className={`py-4 px-3 rounded-xl transition-all duration-300 text-center ${
                  activeTab === index ? "tab-selected" : "tab-default"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                onClick={() => setActiveTab(index)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <TabIcon className={`w-6 h-6 mx-auto mb-2 ${activeTab === index ? "text-white" : "text-safify-500"}`} />
                <span className="font-medium text-sm">{industry.name}</span>
              </button>
            );
          })}
        </div>

        {/* Industry Content */}
        <div 
          className={`glass-card p-0 overflow-hidden ${isVisible ? "opacity-100 animate-fade-in animate-delay-500" : "opacity-0"}`}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img
                src={industries[activeTab].image}
                alt={industries[activeTab].name}
                className="w-full h-full object-cover object-center"
                style={{ minHeight: "300px" }}
              />
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-safify-100">
                  <IconComponent className="w-6 h-6 text-safify-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{industries[activeTab].name}</h3>
              </div>
              <p className="text-gray-600 mb-6">{industries[activeTab].description}</p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Common Use Cases:</h4>
                <p className="text-gray-600">{industries[activeTab].useCase}</p>
                
                <div className="pt-4">
                  <a
                    href="#get-started"
                    className="px-6 py-2.5 rounded-lg bg-safify-500 text-white font-medium hover-scale shadow-blue inline-block"
                  >
                    Explore {industries[activeTab].name} Solutions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
