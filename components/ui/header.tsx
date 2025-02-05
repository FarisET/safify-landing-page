import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex items-center gap-6">
            {/* Products Dropdown */}
            <li className="relative group">
              <span className="flex items-center cursor-pointer text-gray-800 hover:text-primary">
                Products
                <svg
                  className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
              <ul className="absolute left-0 mt-2 min-w-[200px] max-w-xs sm:max-w-sm md:max-w-md bg-white text-gray-800 shadow-lg rounded opacity-0 transform scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                <li>
                  <Link href="/itsm" className="block px-4 py-2 hover:text-primary whitespace-nowrap">
                    IT Service Management
                  </Link>
                </li>
                <li>
                  <Link href="/ehs" className="block px-4 py-2 hover:text-primary whitespace-nowrap">
                    EHS Incident Management
                  </Link>
                </li>
              </ul>

            </li>

            {/* Services Dropdown */}
            {/* <li className="relative group">
              <button className="btn-sm bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
                Services
              </button>
              <ul className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-800 shadow-lg rounded">
                <li>
                  <Link
                    href="/services/customization"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Customization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/integration"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Integration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/sla"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    SLA
                  </Link>
                </li>
              </ul>
            </li> */}

            {/* About Us */}
            <li>
              <Link
                href="/about-us"
                className="text-gray-800 px-4 py-2 rounded hover:text-primary"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
