import Logo from "./logo";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleProductsMenu = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  

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
              <span
                className="flex items-center cursor-pointer text-gray-800 hover:text-primary"
                onClick={toggleProductsMenu}
              >
                Products
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""
                    }`}
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
              <ul
                className={`absolute left-0 mt-2 min-w-[200px] max-w-xs sm:max-w-sm md:max-w-md bg-white text-gray-800 shadow-lg rounded transition-all duration-300 ${isProductsOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                  }`}
              >
                <li>
                  <Link
                    href="/itsm"
                    className="block px-4 py-2 hover:text-primary whitespace-nowrap"
                  >
                    IT Service Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ehs"
                    className="block px-4 py-2 hover:text-primary whitespace-nowrap"
                  >
                    EHS Incident Management
                  </Link>
                </li>
              </ul>
            </li>


            {/* About Us */}
            <li>
              <Link
                href="/services"
                className="text-gray-800 px-4 py-2 rounded hover:text-primary"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
