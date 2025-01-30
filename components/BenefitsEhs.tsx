// components/ehs-benefits.jsx
import { FaCheckCircle } from 'react-icons/fa';
import Image from "next/image"; // If using Next.js
import FormHand from '@/public/images/report-form-hand.png'
export default function BenefitsEhs() {
  return (
<section className="py-20 bg-white">
  <div className="mx-auto max-w-6xl px-4 sm:px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Benefits List */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Benefits of Safify EHS
        </h2>
        <div className="space-y-4">
          {[
            "Reduced incident response time by 40%",
            "Automated compliance reporting",
            "Centralized incident documentation",
            "Real-time safety performance monitoring",
            "Mobile-first reporting capabilities",
            "Integrated corrective action tracking"
          ].map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              <p className="text-gray-600 text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center space-y-4">
        <Image
          src={FormHand} // Replace with actual image path
          alt="EHS Benefits"
          width={300}
          height={250}
        />
      </div>
      
    </div>
  </div>
</section>  );
}