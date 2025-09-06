'use client';

import React from "react";
import Logo from "./logo";
import { useState, ReactNode, useEffect } from "react";
import { usePathname } from 'next/navigation'; // CORRECTED IMPORT
import Link from "next/link";
import {
  FaBolt,
  FaShieldAlt,
  FaWrench,
  FaClipboardCheck,
  FaTasks,
  FaHandsHelping,
  FaCogs,
  FaFileAlt,
  FaBrain,
  FaLink,
  FaBars,
  FaTimes,
  FaUserCheck,
  FaCog,
  FaRegCheckCircle,
  FaEnvelope,
} from "react-icons/fa";
import { CheckCircle } from "react-feather";
import { CheckCheckIcon, Scale } from "lucide-react";

// Props for ProductItem
interface ProductItemProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  isActive?: boolean;
}

// Props for ServiceItem
interface ServiceItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;

}

// Props for MobileAccordion
interface MobileAccordionProps {
  title: string;
  children: ReactNode;
}

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Use the correct hook for the App Router
  const currentPath = usePathname();

  // Handlers for Desktop Dropdowns
  const handleProductsEnter = () => setIsProductsOpen(true);
  const handleProductsLeave = () => setIsProductsOpen(false);
  const handleServicesEnter = () => setIsServicesOpen(true);
  const handleServicesLeave = () => setIsServicesOpen(false);

  // Handler for Sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Close sidebar on window resize if screen is large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check if current path matches product paths
  const isProductActive = currentPath.startsWith('/it-service-management') ||
    currentPath.startsWith('/ehs-incident-management') ||
    currentPath.startsWith('/form-builder');

  return (
    <header className="fixed top-2 z-50 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation links (hidden on small screens) */}
          <nav className="hidden lg:flex lg:grow self-center">
            <ul className="flex grow flex-wrap items-center justify-end">
              {/* Products Dropdown */}
              <li
                className="relative" // Added padding to cover the gap
                onMouseEnter={handleProductsEnter}
                onMouseLeave={handleProductsLeave}
              >
                <span
                  className={`flex cursor-pointer items-center px-4 py-2 ${isProductActive
                    ? 'text-primary font-semibold' // Active state styling
                    : 'text-gray-800 hover:text-primary'
                    }`}
                >
                  Products
                  <svg
                    className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`}
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
                <div
                  className={`absolute right-0 top-full origin-top-right transform rounded-lg bg-white text-gray-800 shadow-lg transition-all duration-300 ${ // Removed mt-2, added top-full
                    isProductsOpen
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0 pointer-events-none"
                    }`}
                  style={{ width: "520px" }}
                >
                  <div className="grid grid-cols-2 gap-4 p-4">

                    <ProductItem
                      href="/#audit-and-compliance"
                      icon={<Scale size={20} />}
                      title="Audit & Compliance"
                      description="Streamline site audits and automate data collection to ensure compliance adherence."
                      isActive={false}
                    />
                    <ProductItem
                      href="/#features_form_builder"
                      icon={<FaWrench size={20} />}
                      title="Form Builder"
                      description="Create audits, inspections, and checklists. Share with your team and access offline."
                      isActive={currentPath.startsWith('/form-builder')}
                    />
                    <ProductItem
                      href="/it-service-management"
                      icon={<FaBolt size={20} />}
                      title="IT Service Management"
                      description="Streamline IT operations and support with structured service processes."
                      isActive={currentPath.startsWith('/it-service-management')}
                    />
                    <ProductItem
                      href="/ehs-incident-management"
                      icon={<FaShieldAlt size={20} />}
                      title="EHS Incident Managment"
                      description="Ensure workplace safety and compliance with our mobile-first incident management."
                      isActive={currentPath.startsWith('/ehs-incident-management')}
                    />

                  </div>
                </div>
              </li>

              {/* Services Dropdown */}
              <li
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <span className="flex cursor-pointer items-center px-4 py-2 text-gray-800 hover:text-primary">
                  Services
                  <svg
                    className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""
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
                <div
                  className={`absolute right-0 top-full origin-top-right transform rounded-lg bg-white text-gray-800 shadow-lg transition-all duration-300 ${isServicesOpen
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0 pointer-events-none"
                    }`}
                  style={{ width: "720px" }}
                >
                  <div className="grid grid-cols-3 gap-4 p-4">

                    {/* --- Compliance Automation --- */}
                    <div className="col-span-3 text-sm font-semibold text-gray-500 mb-2">
                      Compliance Automation
                    </div>
                    <ServiceItem
                      icon={<Scale size={20} />}
                      title="Regulatory Audit Automation"
                      description="Digitize and automate audits, inspections, and compliance checks."
                      href="#multi-framework-audit"
                    />
                    <ServiceItem
                      icon={<FaFileAlt size={20} />}
                      title="Intelligent Form & Data Capture"
                      description="Create dynamic forms with automated validation."
                      href='#features_form_builder'
                    />
                    <ServiceItem
                      icon={<FaShieldAlt size={20} />}
                      title="Industry-Specific Solutions"
                      description="Tailored audit templates and checklists by sector."
                      href="#industries"
                    />

                    {/* divider */}
                    <div className="col-span-3 border-t border-gray-200 my-2"></div>

                    {/* --- Workflow Automation --- */}
                    <div className="col-span-3 text-sm font-semibold text-gray-500 mb-2">
                      Workflow Automation
                    </div>
                    <ServiceItem
                      icon={<FaUserCheck size={20} />}
                      title="Automation Strategy"
                      description="We Analyze processes and build your AI & digital workflow roadmap."
                      href="#"
                    />
                    <ServiceItem
                      icon={<FaBrain size={20} />}
                      title="AI Workflows"
                      description="We Deploy intelligent agents to automate complex processes."
                      href="#"

                    />
                    <ServiceItem
                      icon={<FaLink size={20} />}
                      title="System Integration"
                      description="We ensure secure, privacy‑first integration across all systems and data sources."
                      href="#"

                    />
                  </div>
                </div>
              </li>

              {/* Contact Us Button */}
              <li className="ml-4">
                <a
                  href="mailto:faris@safify.tech"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  <FaEnvelope className="text-base" />
                  <span>Contact Us</span>
                </a>
              </li>

            </ul>
          </nav>
          {/* Hamburger Menu Button (visible on small screens) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleSidebar}
              className="text-gray-800 hover:text-primary focus:outline-none"
              aria-label="Open sidebar"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar and Overlay (for small screens) */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${isSidebarOpen ? "block" : "hidden"
          }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>

        {/* Sidebar */}
        <div
          className={`relative z-50 flex h-full w-4/5 max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between border-b p-4">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={toggleSidebar}
              className="text-gray-600 hover:text-primary focus:outline-none"
              aria-label="Close sidebar"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="flex-grow overflow-y-auto p-4">
            <ul className="flex flex-col space-y-2">
              <MobileAccordion title="Products">
                <ProductItem
                  href="/#audit-and-compliance"
                  icon={
                    <Scale size={20} />
                  }
                  title="Audit & Compliance"
                  description="Streamline site audits and data collection."
                  isActive={false}
                />
                <ProductItem
                  href="/#features_form_builder"
                  icon={<FaWrench size={20} />}
                  title="Form Builder"
                  description="Create audits, inspections, and checklists."
                  isActive={currentPath.startsWith('/form-builder')}
                />
                <ProductItem
                  href="/it-service-management"
                  icon={<FaBolt size={20} />}
                  title="IT Service Management"
                  description="Streamline IT operations and support."
                  isActive={currentPath.startsWith('/it-service-management')}
                />
                <ProductItem
                  href="/ehs-incident-management"
                  icon={<FaShieldAlt size={20} />}
                  title="EHS Incident Managment"
                  description="Ensure workplace safety and compliance."
                  isActive={currentPath.startsWith('/ehs-incident-management')}
                />

              </MobileAccordion>

              <MobileAccordion title="Services">
                <ServiceItem
                  icon={<FaTasks size={20} />}
                  title="Compliance & Audit Automation"
                  description="Digitize audits and compliance checks."
                  href="#"

                />
                <ServiceItem
                  icon={<FaHandsHelping size={20} />}
                  title="Consultation & Process Optimization"
                  description="We design a strategic roadmap for your enterprise."
                  href="#"

                />
                <ServiceItem
                  icon={<FaCogs size={20} />}
                  title="Custom Solutions"
                  description="Targeted digital solutions for automation challenges."
                  href="#"

                />
                <ServiceItem
                  icon={<FaFileAlt size={20} />}
                  title="Intelligent Form & Data Capture"
                  description="Simplify data collection and integration."
                  href="#"

                />
                <ServiceItem
                  icon={<FaBrain size={20} />}
                  title="AI-Powered Workflow Automation"
                  description="Automate complex enterprise processes."
                  href="#"

                />
                <ServiceItem
                  icon={<FaLink size={20} />}
                  title="System Integration & Support"
                  description="End-to-end support and seamless integration."
                  href="#"

                />
              </MobileAccordion>

              {/* Contact Us Button for Mobile */}
              <li className="pt-4">
                <a
                  href="mailto:faris@safify.tech"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md w-full justify-center"
                >
                  <FaEnvelope className="text-base" />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

// Reusable component for product items
function ProductItem({ href, icon, title, description, isActive = false }: ProductItemProps) {
  const iconColor = isActive ? "text-white" : "text-primary";
  const clonedIcon = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<any>, {
      className: `${iconColor} 'text-primary' || ''}`
    })
    : icon;

  return (
    <Link
      href={href}
      className={`flex w-full items-start rounded-lg p-3 transition-colors duration-200 ${isActive ? "bg-primary text-white" : "hover:bg-gray-100"
        }`}
    >
      <div className="mt-1 flex-shrink-0">
        {clonedIcon}
      </div>
      <div className="ml-4">
        <p className={`font-semibold ${isActive ? "text-white" : "text-gray-900"}`}>{title}</p>
        <p className={`text-sm ${isActive ? "text-gray-200" : "text-gray-600"}`}>{description}</p>
      </div>
    </Link>
  );
}

// Reusable component for service items
function ServiceItem({ icon, title, description, href }: ServiceItemProps) {
  return (
    <Link href={href} passHref>
      <div className="flex w-full cursor-pointer items-start rounded-lg p-3 hover:bg-gray-100 transition-colors">
        <div className="mt-1 flex-shrink-0 text-primary">{icon}</div>
        <div className="ml-4">
          <p className="font-semibold text-gray-900">{title}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}

// Accordion for mobile view
function MobileAccordion({ title, children }: MobileAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-2 text-lg font-semibold text-gray-800"
      >
        {title}
        <svg
          className={`h-5 w-5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
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
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"
          }`}
      >
        <div className="flex flex-col items-start space-y-2 pt-2 pl-2 border-l-2 border-gray-200">
          {children}
        </div>
      </div>
    </li>
  );
}