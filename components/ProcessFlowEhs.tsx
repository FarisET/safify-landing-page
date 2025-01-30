// components/ehs-process-flow.jsx
import processFlowDiagram from "@/public/images/ehs-processFlow-diagram.png";

import { FaSearch, FaClipboardList, FaCheckDouble, FaChartBar } from 'react-icons/fa';
import Image from 'next/image';
export default function ProcessFlowEhs() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Incident Management Workflow
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <FaSearch />, title: "1. Identification", text: "Multiple reporting channels including mobile app and web portal" },
            { icon: <FaClipboardList />, title: "2. Documentation", text: "Structured forms with required fields and attachments" },
            { icon: <FaChartBar />, title: "3. Analysis", text: "Root cause analysis and impact assessment tools" },
            { icon: <FaCheckDouble />, title: "4. Resolution", text: "Automated corrective actions and verification" }
          ].map((step, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center items-center text-4xl mb-4 text-primary">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Image
            src={processFlowDiagram}
            alt="Workflow Diagram"
            className="mx-auto rounded-lg shadow-lg"
            width={800}
            height={450}
          />
        </div>
      </div>
    </section>
  );
}