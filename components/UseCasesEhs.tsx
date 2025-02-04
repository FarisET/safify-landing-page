// components/use-cases.jsx
import { FaExclamationTriangle, FaHardHat, FaTrafficLight } from 'react-icons/fa';
import tapLeak1 from '@/public/images/tap leak.jpg';
import tapLeak2 from '@/public/images/tap leak.jpg';
import tapLeak3 from '@/public/images/tap leak.jpg';
import Image from 'next/image';

export default function UseCasesEhs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Common Use Cases
        </h2>

        {/* Image Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Immediate Incident Reporting */}
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src={tapLeak1}
                alt="Immediate Incident Reporting"
                className="w-full h-auto"
                width={300}
                height={300}
              />
            </div>
            <div className="mt-4 space-y-3">
              <FaExclamationTriangle className="text-blue-600 text-3xl mx-auto" />
              <h3 className="text-xl font-semibold">Immediate Incident Reporting</h3>
              <p className="text-gray-600 text-sm">
                See a pipe leaking? Quickly report and assign a worker. 
                Instant notifications ensure swift response to critical issues.
              </p>
            </div>
          </div>

          {/* Hazard Prevention */}
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src={tapLeak2}
                alt="Hazard Prevention"
                className="w-full h-auto"
                width={400}
                height={300}
              />
            </div>
            <div className="mt-4 space-y-3">
              <FaTrafficLight className="text-blue-600 text-3xl mx-auto" />
              <h3 className="text-xl font-semibold">Hazard Prevention</h3>
              <p className="text-gray-600 text-sm">
                Report near misses, blockages, and hazards to avoid incidents.
                Proactive reporting helps prevent potential accidents.
              </p>
            </div>
          </div>

          {/* Safety Compliance */}
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src={tapLeak3}
                alt="Safety Compliance"
                className="w-full h-auto"
                width={400}
                height={300}
              />
            </div>
            <div className="mt-4 space-y-3">
              <FaHardHat className="text-blue-600 text-3xl mx-auto" />
              <h3 className="text-xl font-semibold">Safety Compliance</h3>
              <p className="text-gray-600 text-sm">
                Report PPE violations to ensure worker safety. 
                Maintain compliance with safety regulations through documented reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
