'use client';

import Typewriter from 'typewriter-effect';
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import Link from "next/link";
import SafifyITLogo from "@/public/images/safify_it_logo.png";
import SafifyLogo from "@/public/images/safify-logo.png";


export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">

            <h1
              className="mb-2 border-y text-3xl md:text-4xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Automate Operations <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2em", color: "#6e6e6e" }}> & </span>
              Compliance
              <br className="max-lg:hidden" />
            </h1>
            <p className="mb-6 text-lg md:text-xl text-slate-600 leading-relaxed" data-aos="zoom-y-out" data-aos-delay={200}>
              <Typewriter
                options={{
                  delay: 40,
                  cursor: '|',
                  loop: true, // This will make the animation repeat
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Your <strong class="font-semibold text-slate-800">compliance</strong>, managed with confidence.')
                    .pauseFor(2000) // A longer pause so the user can read it
                    .deleteAll() // Deletes the first string
                    .typeString('Your <strong class="font-semibold text-slate-800">workflows</strong>, automated with precision.')
                    .pauseFor(2500) // A longer pause before the loop restarts
                    .start();
                }}
              />
            </p>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-md md:text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                {/* Our products create a seamless ecosystem that fosters continuous learning and maximizes efficiency. Equipped with AI-powered knowledge bases and advanced dashboards, they accelerate issue resolution and proactively prevent incidents by leveraging insights from past data.               */}
              </p>

              <div
                className="mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                {/* First Card */}
                <Link href="/it-service-management">
                  <div className="tile group w-64 h-52 bg-white text-gray-800 shadow hover:scale-105">
                    <div className="relative flex flex-col items-center justify-center p-4 text-center">
                      <div className="mb-2">
                        <Image src={SafifyITLogo} alt="Safify IT Logo" width={50} height={50} />
                      </div>
                      <span className="text-lg font-semibold">
                        Safify ITSM
                      </span>
                      <p className="text-sm text-gray-600 mt-1">
                        Streamline IT operations and support with structured service processes.
                      </p>
                      <span className="ml-1 mt-2 tracking-normal text-primary transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Second Card */}
                <Link href="/ehs-incident-management">
                  <div className="tile group w-64 h-52 bg-white text-gray-800 shadow hover:scale-105 flex flex-col justify-center p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <Image src={SafifyLogo} alt="Safify Logo" width={45} height={45} />
                    </div>
                    <span className="text-lg font-semibold">
                      Safify EHS
                    </span>
                    <p className="text-sm text-gray-600 mt-1">
                      Streamline your environmental, health, and workplace safety with our mobile-first incident management system
                    </p>
                    <span className="mt-2 tracking-normal text-primary transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </div>
                </Link>

                {/* 3rd Card */}
                <Link href="/form-builder">
                  <div className="tile group w-64 h-52 bg-white text-gray-800 shadow hover:scale-105 flex flex-col justify-center p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <Image src={SafifyLogo} alt="Safify Logo" width={45} height={45} />
                    </div>
                    <span className="text-lg font-semibold">
                      Safify SAuditor
                    </span>
                    <p className="text-sm text-gray-600 mt-1">
                      Streamline site audits and automate data collection to ensure compliance adherence.
                    </p>
                    <span className="mt-2 tracking-normal text-primary transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </div>
                </Link>

                {/* 4th Card */}
                <Link href="/form-builder">
                  <div className="tile group w-64 h-52 bg-white text-gray-800 shadow hover:scale-105 flex flex-col justify-center p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <Image src={SafifyLogo} alt="Safify Logo" width={45} height={45} />
                    </div>
                    <span className="text-lg font-semibold">
                      Safify FormBuilder
                    </span>
                    <p className="text-sm text-gray-600 mt-1">
                      Create audits, inspections, and checklists. Share with your team and access offline.
                    </p>
                    <span className="mt-2 tracking-normal text-primary transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </div>
                </Link>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
