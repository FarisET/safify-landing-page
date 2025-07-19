import PageIllustration from "@/components/page-illustration";

import { FaEnvelope, FaPhone } from "react-icons/fa";
export default function HeroServices() {
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
            >            Services
            </h1>
            <p
              className="mb-8 text-md md:text-lg text-gray-700"
              data-aos="zoom-y-out"
              data-aos-delay={300}
            >
              We provide a comprehensive suite of services to ensure your business gets the most out of our software solutions.
            </p>
            <div
              data-aos="zoom-y-out"
              data-aos-delay={450}

              className="flex px-6 sm:flex-row justify-center gap-4">
              <div
                data-aos="zoom-y-out"
                data-aos-delay={450}

              >
                <p className="flex flex-col sm:flex-row gap-4 text-gray-500 text-sm mt-1">
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
  );
}