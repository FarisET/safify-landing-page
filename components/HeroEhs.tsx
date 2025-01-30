import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Link from "next/link";
import SafifyITLogo from "@/public/images/safify_it_logo.png";
import SafifyLogo from "@/public/images/safify-logo.png";
import SafifyHeroImg from "@/public/images/Safify-hero-1.png"
export default function HeroEhs() {
    return (
        <section className="relative bg-gradient-to-b from-blue-50 to-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                EHS Incident Management System
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Streamline environmental, health, and safety incident management with automated workflows, 
                regulatory compliance tools, and real-time analytics.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/demo" className="btn bg-primary text-white hover:bg-blue-700 px-8 py-3 text-lg">
                  Request Demo
                </Link>
                <Link href="/contact" className="btn border-2 border-primary text-primary hover:bg-blue-50 px-8 py-3 text-lg">
                  Contact Sales
                </Link>
              </div>
            </div>
            
            <div className="mt-16 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src={SafifyHeroImg} 
                alt="EHS Dashboard Preview" 
                className="w-full h-auto"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </section>
      );
    }