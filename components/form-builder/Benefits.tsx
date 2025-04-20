
import { useEffect, useState } from "react";
import { 
  LayoutGrid, 
  WifiOff, 
  Zap, 
  Shield, 
  LineChart, 
  PieChart,
  Clock
} from "lucide-react";

const benefitItems = [
  {
    icon: LayoutGrid,
    title: "Customizable Forms",
    description: "Tailor audits and inspections to your organization's unique EHS requirements."
  },
  {
    icon: WifiOff,
    title: "Offline Access",
    description: "Conduct assessments in remote locations without connectivity concerns."
  },
  {
    icon: Zap,
    title: "Quick Implementation",
    description: "Minimal setup and onboarding for immediate use across your organization."
  },
  {
    icon: Shield,
    title: "Enhanced Compliance",
    description: "Stay ahead of regulatory requirements with comprehensive reporting tools."
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description: "Transform collected data into actionable insights for better decision making."
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "Reduce documentation time by up to 75% compared to paper processes."
  }
];

const Benefits = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".benefit-item").forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="benefits" className="py-20 px-4 md:px-0 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-safify-500 font-medium mb-3">WHY CHOOSE SAFIFY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits that Enhance Your EHS Operations
          </h2>
          <p className="text-gray-600 text-lg">
            Experience seamless EHS management with tools designed for efficiency, 
            compliance, and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitItems.map((item, index) => (
            <div 
              key={index}
              className={`benefit-item glass-card p-8 transition-all duration-500
                ${visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              data-index={index}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-safify-100 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-safify-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block glass-card py-3 px-6">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-safify-500" />
                <span className="text-sm text-gray-700 font-medium">98% Compliance Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-safify-500" />
                <span className="text-sm text-gray-700 font-medium">75% Time Saved</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-safify-500" />
                <span className="text-sm text-gray-700 font-medium">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
