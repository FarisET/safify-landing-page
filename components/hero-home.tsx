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
              className="mb-6 border-y text-3xl md:text-4xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Incident Management for <br className="max-lg:hidden" />
              Continual Process Improvement
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-md md:text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Our products ensure an ecosystem that offers continuous learning and ever-increasing efficiency. Our
                products come packed with integrated AI Powered knowledge bases and detailed dashboards to help resolve issues quicker and potentially prevent incidents by learning from past data.              </p>
              <div
                className="mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                {/* First Card */}
                <Link href="/itsm">
                  <div className="tile group w-full max-w-[260px] h-40 bg-white text-gray-800 shadow hover:scale-105">
                    <div className="relative flex flex-col items-center justify-center p-4">
                      <div className="mb-2">
                        <Image src={SafifyITLogo} alt="Safify IT Logo" width={50} height={50} />
                      </div>
                      <span className="text-lg font-semibold text-center">
                      &#8203; &#8203; &#8203; IT Service Management &#8203; &#8203; &#8203;
                      </span>
                      <span className="ml-1 mt-2 tracking-normal text-primary transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Second Card */}
                <Link href="/ehs">
                  <div className="tile group w-64 h-40 bg-white text-gray-800 shadow hover:scale-105 flex flex-col justify-center p-4">
                    <div className="mb-2 flex justify-center">
                      <Image src={SafifyLogo} alt="Safify Logo" width={45} height={45} />
                    </div>
                    <span className="text-lg font-semibold text-center break-words whitespace-normal">
                      EHS Incident Management
                    </span>
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
