import { FaCogs, FaTools, FaLink, FaHeadset, FaChartLine, FaShieldAlt, FaMobileAlt } from "react-icons/fa";

export default function OurServices() {
  return (
    <section className="relative bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">


        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Flexible Plans */}
          <div
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <FaChartLine className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Flexible Plans</h3>
            <p className="text-gray-600">
              License-based custom pricing tailored to your company's scale. Get a quote that fits your needs.
            </p>
          </div>

          {/* Customizations */}
          <div
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            data-aos="zoom-y-out"
            data-aos-delay={300}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
              <FaCogs className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Customizations</h3>
            <p className="text-gray-600">
              Add on-demand features, custom email alerts, personalized messages, and approval workflows to fit your unique processes.
            </p>
          </div>

          {/* Integrations */}
          <div
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            data-aos="zoom-y-out"
            data-aos-delay={450}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <FaLink className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Integrations</h3>
            <p className="text-gray-600">
              Seamlessly connect with external systems like ERPs or user directories using APIs for enhanced functionality.
            </p>
          </div>

          {/* Support and Training */}
          <div
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
              <FaHeadset className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Support & Training</h3>
            <p className="text-gray-600">
              Dedicated support and comprehensive training to ensure your team is fully equipped to use our software effectively.
            </p>
          </div>

          {/* Security and Compliance */}
          <div
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            data-aos="zoom-y-out"
            data-aos-delay={300}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
              <FaShieldAlt className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
            <p className="text-gray-600">
              Ensure your data is secure and compliant with industry standards. We prioritize your safety and privacy.
            </p>
          </div>

          {/* Mobile Optimization */}
          <div
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            data-aos="zoom-y-out"
            data-aos-delay={450}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
              <FaMobileAlt className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Mobile Optimization</h3>
            <p className="text-gray-600">
              Access our software on the go with mobile-optimized solutions designed for convenience and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}