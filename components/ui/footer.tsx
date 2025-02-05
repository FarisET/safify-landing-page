import Link from "next/link";
import Logo from "./logo";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              &copy; safify.ai - All rights reserved.
            </div>
            <div>
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

          {/* 2nd block
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Our method
                </Link>
              </li>
            </ul>
          </div> */}
          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-3">
            <a href="/itsm" className="text-sm font-medium text-gray-800 transition hover:text-gray-900">

              IT Service Management</a>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Integration
                </Link>
              </li>
            </ul>
          </div>


          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-3">
            <a href="/ehs" className="text-sm font-medium text-gray-800 transition hover:text-gray-900">
              EHS Incident Management
            </a>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#featuresEhs"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#processFlowEhs"
                >
                  Workflow
                </Link>
              </li>
              {/* <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Financial statements
                </Link>
              </li> */}
            </ul>
          </div>

          {/* 4th block
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Report a vulnerability
                </Link>
              </li>
            </ul>
          </div> */}

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-4 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-1">
              <li>
                <Link
                  className="flex items-center justify-center text-primary transition hover:text-blue-600"
                  href="https://www.linkedin.com/company/safifyed/posts/"
                  aria-label="Linkedin"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.732-.792-1.732-1.732 0-.966.792-1.732 1.732-1.732.966 0 1.732.792 1.732 1.732 0 .966-.792 1.732-1.732 1.732zm13.5 11.268h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.381c.732-1.019 1.981-1.681 3.5-1.681 2.481 0 4.5 2.019 4.5 4.5v6.5z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-primary transition hover:text-blue-600"
                  href="mailto:ejaz@emergtechsolutions.sa.com"
                  aria-label="Email"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 13.065l-11.713-7.065h23.426l-11.713 7.065zm-12-7.896v13.831l7.713-7.831-7.713-5.999zm15.713 6.103l-3.713 2.437-3.713-2.437-7.713 7.831h23.426l-7.713-7.831zm-3.713 3.228l7.713 7.831v-13.831l-7.713 5.999z" />
                  </svg>
                </Link>
              </li>
              {/* <li>
                <Link
                  className="flex items-center justify-center text-gray-300 transition hover:text-blue-600"
                  href="#0"
                  aria-label="Youtube"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.498 6.186a2.999 2.999 0 0 0-2.112-2.116c-1.868-.502-9.386-.502-9.386-.502s-7.519 0-9.386.502a3.002 3.002 0 0 0-2.112 2.116c-.507 1.867-.507 5.781-.507 5.781s0 3.915.507 5.782a2.999 2.999 0 0 0 2.112 2.115c1.868.502 9.386.502 9.386.502s7.519 0 9.386-.502a2.999 2.999 0 0 0 2.112-2.115c.507-1.867.507-5.782.507-5.782s0-3.914-.507-5.781zm-14.498 8.064v-6.5l6.5 3.25-6.5 3.25z" />
                  </svg>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Safify'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Safify'] after:[text-shadow:0_1px_0_white]"></div>
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
