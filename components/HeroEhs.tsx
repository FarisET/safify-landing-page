import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Link from "next/link";
import SafifyITLogo from "@/public/images/safify_it_logo.png";
import SafifyLogo from "@/public/images/safify-logo.png";
import SafifyHeroImg from "@/public/images/Safify-hero-1.png"
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaCheckCircle } from 'react-icons/fa';
import FormHand from '@/public/images/report-form-hand.png'

export default function HeroEhs() {
  return (
    <>
      <section className="relative">
        <PageIllustration />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Section header */}
            <div className="pb-12 text-center md:pb-16">
              <h1
                className="mb-6 border-y text-2xl md:text-4xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >            EHS Incident Management System
              </h1>
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Streamline your environmental, health, and workplace safety with our mobile-first incident management system              </p>
              <div
                data-aos="zoom-y-out"
                data-aos-delay={450}

                className="flex flex-col px-6 sm:flex-row justify-center gap-4">

                <a href="mailto:sales@safify.tech" className="btn bg-primary text-white hover:bg-blue-700 px-8 py-3 text-lg">
                  Request Demo
                </a>
                <div
                  data-aos="zoom-y-out"
                  data-aos-delay={450}

                >
                  <p className="text-gray-500 text-sm mt-1">
                    <span className="flex items-center gap-2">
                      <FaEnvelope /> sales@safify.tech
                    </span>
                    <span className="flex items-center gap-2">
                      <FaEnvelope /> faris@safify.tech
                    </span>
                    <span className="flex items-center gap-2">
                      <FaPhone /> +966 56 176 3380
                    </span>

                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white">
        {/* The outer container is full-width, which is essential for the inner container to be centered correctly. */}
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          {/* 
          This is the grid container. `md:grid-cols-2` switches to two columns on medium screens.
          `items-center` vertically aligns the content of both columns.
        */}
          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">

            {/* Column 1: Benefits List */}
            <div data-aos="fade-right" className="flex justify-center">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-4xl">
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
                      <FaCheckCircle className="mt-1 flex-shrink-0 text-green-500" />
                      <p className="text-lg text-gray-600">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Image Section */}
            <div className="flex justify-end" data-aos="fade-left">
              <Image
                src={FormHand}
                alt="EHS Benefits"
                width={300}
                height={250}
                className="rounded-lg"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}