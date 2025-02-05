// components/ehs-key-features.jsx
import { FaRegCheckCircle, FaChartLine, FaRegClock, FaShieldAlt } from 'react-icons/fa';
type FeaturesEhsProps = {
  id?: string; // Allow `id` to be an optional prop
};
const FeaturesEhs: React.FC<FeaturesEhsProps> = ({ id }) => {
  return (
    <section id={id} className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features of EHS Incident Management
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <FaRegCheckCircle className="text-primary" />, title: "Compliance Management", text: "Automated regulatory compliance tracking and reporting" },
            { icon: <FaChartLine className="text-primary" />, title: "Real-time Analytics", text: "Interactive dashboards with key safety metrics" },
            { icon: <FaRegClock className="text-primary" />, title: "Quick Resolution", text: "Automated workflows for faster incident resolution" },
            { icon: <FaShieldAlt className="text-primary" />, title: "Risk Prevention", text: "Predictive analytics to identify potential risks" }
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl md:text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesEhs