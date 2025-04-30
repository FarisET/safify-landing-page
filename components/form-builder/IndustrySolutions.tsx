"use client";

import { useState, useEffect } from "react";
import {
  HardHat,
  Building2,
  Factory,
  FlaskConical,
  Truck,
  Warehouse,
  ClipboardCheck,
  Shield,
  CarFront
} from "lucide-react";

const ManufacturingForm = "images/Manufacturing Equipment Inspection.png";
const VehicleForm = "images/Heavy Vehicle Inspection.png";
const IncidentReport = "images/Incident Report ISO45001.png";




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
      description: "Safety inspections, equipment checks, and regulatory compliance for construction sites.",
      useCase: "Incident Report, Site Safety Audits, Equipment, Worker Certification Tracking",
      image: "images/Incident Report ISO45001.png",
      compliance: [
        {
          standard: "ISO 45001",
          body: "International Organization for Standardization",
          example: "Safety management system audits to maintain certification and demonstrate commitment to workplace safety"
        },
        {
          standard: "OSHA 1926",
          body: "Occupational Safety and Health Administration",
          example: "Fall protection inspection checklists to ensure compliance with OSHA 1926.501 height safety requirements"
        }

      ]
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Production safety protocols, machine inspections, and environmental compliance.",
      useCase: "Machine Safety Checklists, Quality Control Forms, Environmental Monitoring",
      image: "images/Manufacturing Equipment Inspection.png",
      compliance: [
        {
          standard: "ISO 9001",
          body: "International Organization for Standardization",
          example: "Quality management process documentation and audit forms for maintaining certification"
        },
        {
          standard: "EPA Regulations",
          body: "Environmental Protection Agency",
          example: "Emissions monitoring forms and environmental compliance records required for reporting"
        }
      ]
    },
    // {
    //   icon: FlaskConical,
    //   name: "Chemical",
    //   description: "Ensure proper handling procedures, safety data sheet compliance, and hazard assessments.",
    //   useCase: "Hazardous Material Tracking, Safety Data Sheet Audits, Spill Response Protocols",
    //   image: "/api/placeholder/800/500",
    //   compliance: [
    //     {
    //       standard: "REACH",
    //       body: "European Chemicals Agency",
    //       example: "Chemical inventory forms and substance registration documentation for EU market access"
    //     },
    //     {
    //       standard: "HAZCOM 2012",
    //       body: "OSHA",
    //       example: "GHS-compliant labeling verification and safety data sheet management forms"
    //     }
    //   ]
    // },
    // {
    //   icon: Building2,
    //   name: "Facilities",
    //   description: "Monitor building systems, track maintenance, and document safety compliance.",
    //   useCase: "Facility Audits, Maintenance Inspections, Fire Safety Compliance",
    //   image: "/api/placeholder/800/500",
    //   compliance: [
    //     {
    //       standard: "NFPA 101",
    //       body: "National Fire Protection Association",
    //       example: "Life Safety Code compliance checklists for emergency lighting and evacuation route inspection"
    //     },
    //     {
    //       standard: "ADA",
    //       body: "Americans with Disabilities Act",
    //       example: "Accessibility compliance audit forms to ensure facilities meet required standards"
    //     }
    //   ]
    // },
    {
      icon: Truck,
      name: "Logistics",
      description: "Vehicle inspections, monitor driver safety, and maintain DOT compliance.",
      useCase: "Vehicle Inspections, Driver Safety Checklists, Loading Dock Safety",
      image: "images/Heavy Vehicle Inspection.png",
      compliance: [
        {
          standard: "FMCSA Regulations",
          body: "Federal Motor Carrier Safety Administration",
          example: "Driver Vehicle Inspection Reports (DVIR) to maintain DOT compliance and vehicle safety"
        },
        {
          standard: "Hours of Service",
          body: "Department of Transportation",
          example: "Driver log forms that meet electronic logging device (ELD) backup requirements"
        }
      ]
    },
    {
      icon: CarFront,
      name: "Automobiles",
      description: "Ensure vehicle quality, safety compliance, and manufacturing process control throughout production lifecycle.",
      useCase: "Vehicle Quality Inspections, Component Testing, Production Line Audits, Safety Compliance Documentation",
      image: "images/Automobiles QC Form.png",
      compliance: [
        {
          standard: "IATF 16949:2016",
          body: "International Automotive Task Force",
          example: "Final vehicle inspection checklists with critical safety systems verification and non-conformance documentation"
        },
        {
          standard: "FMVSS",
          body: "Department of Transportation",
          example: "Federal Motor Vehicle Safety Standards compliance forms documenting crashworthiness and crash avoidance systems"
        }
      ]
    }
    // {
    //   icon: Warehouse,
    //   name: "Warehousing",
    //   description: "Optimize inventory management, safety protocols, and equipment inspections.",
    //   useCase: "Forklift Inspections, Warehouse Safety Audits, Loading Area Compliance",
    //   image: "/api/placeholder/800/500",
    //   compliance: [
    //     {
    //       standard: "OSHA 1910.178",
    //       body: "Occupational Safety and Health Administration",
    //       example: "Powered industrial truck (forklift) pre-operation inspection forms required before each shift"
    //     },
    //     {
    //       standard: "NFPA 13",
    //       body: "National Fire Protection Association",
    //       example: "Fire sprinkler system inspection forms for maintaining warehouse fire protection compliance"
    //     }
    //   ]
    // }
  ];

  // Get the current industry's icon component
  const IconComponent = industries[activeTab].icon;

  return (
    <section id="industries" className="py-20 px-4 md:px-0">
      <div className="px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-3">INDUSTRY SOLUTIONS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tailored for Your Industry
          </h2>
          <p className="text-gray-600 text-lg">
            Safify Forms adapts to the unique compliance requirements across various sectors
          </p>
          <p className="text-sm italic text-gray-500 mt-2">
            <b>Disclaimer</b>: Safify does not provide certified compliance forms from regulatory bodies. Our platform enables you to build forms for data collection aligned with compliance standards.
          </p>
        </div>


        {/* Industry Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-12">
          {industries.map((industry, index) => {
            const TabIcon = industry.icon;
            return (
              <button
                key={index}
                className={`py-4 px-3 rounded-xl transition-all duration-300 text-center ${activeTab === index ? "tab-selected" : "tab-default"
                  } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                onClick={() => setActiveTab(index)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <TabIcon className={`w-6 h-6 mx-auto mb-2 ${activeTab === index ? "text-black" : "text-primary"}`} />
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
            <div className="lg:w-2/3">
              <img
                src={industries[activeTab].image}
                alt={industries[activeTab].name}
                className="w-full h-full object-contain object-left-top"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  minHeight: "300px",
                  display: "block" // prevents extra space below image
                }}
              />
            </div>
            <div className="lg:w-1/2 md:px-8 px-6 flex flex-col items-start justify-start">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-100">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{industries[activeTab].name}</h3>
              </div>

              <p className="text-gray-600 mb-4 text-sm">{industries[activeTab].description}</p>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Common Use Cases:</h4>
                <p className="text-gray-600">{industries[activeTab].useCase}</p>

                {/* Compliance Standards Section */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-primary" />
                    Compliance Standards
                  </h4>

                  <div className="space-y-4">
                    {industries[activeTab].compliance.map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-blue-100">
                            <ClipboardCheck className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900">{item.standard}</h5>
                            <p className="text-sm text-gray-500">{item.body}</p>
                            <p className="text-sm text-gray-600 mt-2">{item.example}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="pt-4">
                  <a
                    href="#get-started"
                    className="px-6 py-2.5 rounded-lg bg-primary text-white font-medium hover-scale shadow-blue inline-block"
                  >
                    Explore {industries[activeTab].name} Solutions
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;