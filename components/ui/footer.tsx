import Link from "next/link";
import Logo from "./logo";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border
            ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]"
            : ""
            }`}
        >
          {/* 1st block */}
          <div className="space-y-4 text-sm text-gray-600 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>

            <div>© safify.tech – All rights reserved.</div>

            <div className="mt-2 space-y-2 text-gray-500">
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>faris@safify.tech</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>sales@safify.tech</span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <FaPhone />
                <span>+92 325 2865872</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <span>+92 300 8259934</span>
              </div>
            </div>
          </div>

          {/* 2rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-800">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  // className="text-gray-600 transition hover:text-gray-900"
                  // href="#workflow-automation"
                  className="text-gray-400 cursor-not-allowed pointer-events-none"
                  href="#"
                  aria-disabled="true"
                >
                  Workflow Automation
                </a>
              </li>
              <li>
                <a
                  // className="text-gray-600 transition hover:text-gray-900"
                  // href="#compliance-automation"
                  className="text-gray-400 cursor-not-allowed pointer-events-none"
                  href="#"
                  aria-disabled="true"
                >
                  Compliance Automation
                </a>
              </li>
              <li>
                <a
                  // className="text-gray-600 transition hover:text-gray-900"
                  // href="#flexible-deployment"
                  className="text-gray-400 cursor-not-allowed pointer-events-none"
                  href="#"
                  aria-disabled="true"
                >
                  Flexible Deployment
                </a>
              </li>
              <li>
                <a
                  // className="text-gray-600 transition hover:text-gray-900"
                  // href="#consultation"
                  className="text-gray-400 cursor-not-allowed pointer-events-none"
                  href="#"
                  aria-disabled="true"
                >
                  Consultation
                </a>
              </li>
              <li>
                <a
                  // className="text-gray-600 transition hover:text-gray-900"
                  className="text-gray-400 cursor-not-allowed pointer-events-none"
                  href="#"
                  aria-disabled="true"
                >
                  Support & Training
                </a>
              </li>
            </ul>
          </div>

          {/* 3nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-800">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/it-service-management"
                >
                  Safify ITSM
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/ehs-incident-management"
                >
                  Safify EHS
                </a>
              </li>
              <li>
                <a
                  // className="text-gray-600 transition hover:text-gray-900"
                  // href="/form-builder"
                  className="text-gray-400 cursor-not-allowed pointer-events-none"
                  href="#"
                  aria-disabled="true"
                >
                  Safify SAuditor
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/form-builder"
                >
                  Safify FormBuilder
                </a>
              </li>
            </ul>
          </div>



          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-800">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  // className="text-gray-600 transition hover:text-gray-900"
                  // href="/about"
                  className="text-gray-400 cursor-not-allowed pointer-events-none"
                  href="#"
                  aria-disabled="true"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  // className="text-gray-600 transition hover:text-gray-900"
                  // href="/contact"
                  className="text-gray-400 cursor-not-allowed pointer-events-none"
                  href="#"
                  aria-disabled="true"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  // className="text-gray-600 transition hover:text-gray-900"
                  // href="/blog"
                  className="text-gray-400 cursor-not-allowed pointer-events-none"
                  href="#"
                  aria-disabled="true"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="pointer-events-auto space-y-2 sm:col-span-6 md:col-span-4 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-2">
              <li>
                <a
                  className="inline-flex cursor-pointer items-center justify-center text-primary transition hover:text-blue-600"
                  href="https://www.linkedin.com/company/safify/posts/"
                  aria-label="Linkedin"
                >
                  <svg
                    className="h-8 w-7 cursor-pointer fill-current text-primary"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.732-.792-1.732-1.732 0-.966.792-1.732 1.732-1.732.966 0 1.732.792 1.732 1.732 0 .966-.792 1.732-1.732 1.732zm13.5 11.268h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.381c.732-1.019 1.981-1.681 3.5-1.681 2.481 0 4.5 2.019 4.5 4.5v6.5z" />
                  </svg>
                </a>
              </li>
              <li className="pointer-events-auto">
                <a
                  href="mailto:sales@safify.tech;faris@safify.tech"
                  className="inline-flex cursor-pointer items-center justify-center text-primary transition hover:text-blue-600"
                >
                  <FaEnvelope className="cursor-pointer text-2xl text-primary hover:text-blue-600" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[120px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Safify'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Safify'] after:[text-shadow:0_1px_0_white] sm:text-[200px] md:text-[348px]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}