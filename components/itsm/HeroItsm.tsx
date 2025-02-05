import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Link from "next/link";
import TicketHeroImg from "@/public/images/SAFIFY ITSM Home Page-compressed-2.png";

import { FaEnvelope, FaPhone } from "react-icons/fa";
export default function HeroItsm() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-3xl md:text-4xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >            IT Service System
            </h1>
            <p
              className="mb-8 text-md md:text-lg text-gray-700"
              data-aos="zoom-y-out"
              data-aos-delay={300}
            >
              Manage your IT Assets and Systematically Assign and Resolve Issues in your Company

            </p>
            <div
              data-aos="zoom-y-out"
              data-aos-delay={450}

              className="flex flex-col px-6 sm:flex-row justify-center gap-4">

              <a href="mailto:ejaz@emergtechsolutions.sa.com" className="btn bg-primary text-white hover:bg-blue-700 px-8 py-3 text-lg">
                Request Demo
              </a>

              <div
                data-aos="zoom-y-out"
                data-aos-delay={450}

              >
                <p className="text-gray-500 text-sm mt-1">
                  <span className="flex items-center gap-2">
                    <FaEnvelope /> ejaz@emergtechsolutions.sa.com
                  </span>
                  <span className="flex items-center gap-2">
                    <FaPhone /> +966 56 176 3380
                  </span>

                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-y-out"
            data-aos-delay={500}

            className="mt-16 rounded-xl overflow-hidden shadow-xl">
            <Image
              src={TicketHeroImg}
              alt="ITSM Tickets Preview"
              className="w-full h-auto"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
}