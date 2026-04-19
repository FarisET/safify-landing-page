'use client';

import React from "react";
import Logo from "./logo";
import { useState, ReactNode, useEffect } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from 'next/image';
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
  FaGooglePlay,
  FaUserShield,
  FaBuilding,
} from "react-icons/fa";
import { CheckCircle } from "react-feather";
import { CheckCheckIcon, Scale } from "lucide-react";

interface ProductItemProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  isActive?: boolean;
}

interface ServiceItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

interface MobileAccordionProps {
  title: string;
  children: ReactNode;
}

export default function Header() {
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentPath = usePathname();

  const handleAppsEnter = () => setIsAppsOpen(true);
  const handleAppsLeave = () => setIsAppsOpen(false);
  const handleSolutionsEnter = () => setIsSolutionsOpen(true);
  const handleSolutionsLeave = () => setIsSolutionsOpen(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isSidebarOpen]);

  const isProductActive =
    currentPath.startsWith('/it-service-management') ||
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

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:grow self-center">
            <ul className="flex grow flex-wrap items-center justify-end">

              {/* Apps Dropdown */}
              <li className="relative" onMouseEnter={handleAppsEnter} onMouseLeave={handleAppsLeave}>
                <span className={`flex cursor-pointer items-center px-4 py-2 ${isProductActive ? 'text-primary font-semibold' : 'text-gray-800 hover:text-primary'}`}>
                  Mobile Applications
                  <svg className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${isAppsOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <div
                  className={`absolute right-0 top-full origin-top-right transform rounded-lg bg-white text-gray-800 shadow-lg transition-all duration-300 ${isAppsOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
                  style={{ width: "520px" }}
                >
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <ProductItem
                      href="/#latest-news"
                      icon={<div className="flex items-center justify-center w-5 h-5"><img src="/images/safeInspect-logo.png" alt="Safe Inspect Logo" width={30} height={30} className="object-contain" /></div>}
                      title="Safe Inspect"
                      description="Convert existing excel checklists into mobile forms, perform inspections offline and make custom reports"
                      isActive={false}
                    />
                    <ProductItem
                      href="#"
                      icon={<div className="flex items-center justify-center w-5 h-5"><img src="/images/QuickSafe-Logo - resized.png" alt="Quick Safe Logo" width={40} height={35} className="object-contain" /></div>}
                      title="Quick Safe"
                      description="Offline EHS Incident Management for frontline workers"
                      isActive={currentPath.startsWith('/form-builder')}
                    />
                    <ProductItem
                      href="#"
                      icon={<div className="flex items-center justify-center w-5 h-5"><img src="/images/assembly-attendance-logo-resized.png" alt="Safe Point Logo" width={30} height={30} className="object-contain" /></div>}
                      title="Safe Point"
                      description="Bluetooth-based attendance tracking for fire safety drills and workforce management."
                      isActive={currentPath.startsWith('/it-service-management')}
                    />

                    {/* Google Play CTA — compact */}
                    <div className="flex flex-col justify-center pt-1 px-10">
                      <a
                        href="https://play.google.com/store/apps/developer?id=Safify"
                        className="inline-flex items-center gap-2.5 border border-gray-600 bg-gray-950 px-3 py-2 rounded-xl shadow-md hover:border-gray-400 hover:shadow-lg transition-all group active:scale-95 w-fit"
                      >
                        <FaGooglePlay className="text-white text-base group-hover:scale-105 transition-transform flex-shrink-0" />
                        <div className="text-left">
                          <p className="text-[9px] text-gray-400 font-medium uppercase tracking-wide leading-none">Get it on</p>
                          <p className="text-sm font-bold text-white leading-tight">Google Play</p>
                        </div>
                      </a>
                      <p className="text-gray-400 text-xs mt-2 ml-1">Free · No credit card needed</p>
                    </div>
                  </div>
                </div>
              </li>

              {/* Solutions Dropdown */}
              <li className="relative" onMouseEnter={handleSolutionsEnter} onMouseLeave={handleSolutionsLeave}>
                <span className="flex cursor-pointer items-center px-4 py-2 text-gray-800 hover:text-primary">
                  Solutions
                  <svg className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${isSolutionsOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <div
                  className={`absolute right-0 top-full origin-top-right transform rounded-lg bg-white text-gray-800 shadow-lg transition-all duration-300 ${isSolutionsOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
                  style={{ width: "720px" }}
                >
                  <div className="grid grid-cols-3 gap-4 p-4">
                    <ServiceItem icon={<Scale size={20} />} title="Audit & Compliance" description="Streamline site audits and automate data collection to ensure compliance adherence." href="/audit-and-compliance-management" />
                    <ServiceItem icon={<FaBolt size={20} />} title="IT Service Management" description="Streamline IT operations and support with structured service processes." href="/it-service-management" />
                    <ServiceItem icon={<FaShieldAlt size={20} />} title="EHS Incident Management" description="Ensure workplace safety and compliance with our mobile-first incident management." href="/ehs-incident-management" />
                    <div className="col-span-3 border-t border-gray-200 my-2"></div>
                    <ServiceItem icon={<Scale size={20} />} title="Regulatory Audit Automation" description="Digitize and automate audits, inspections, and compliance checks." href="/audit-and-compliance-management/#multi-framework-audit" />
                    <ServiceItem icon={<FaFileAlt size={20} />} title="Intelligent Form & Data Capture" description="Create dynamic forms with Safify Form Builder." href='/audit-and-compliance-management/#features_form_builder' />
                    <ServiceItem icon={<FaBuilding size={20} />} title="Industry-Specific Solutions" description="Tailored audit templates and checklists by sector." href="/#industries" />
                  </div>
                </div>
              </li>

              {/* Contact Us */}
              <li className="ml-4">
                <a
                  href="mailto:faris@safify.tech;sales@safify.tech"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  <FaEnvelope className="text-base" />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Hamburger */}
          <div className="flex items-center lg:hidden">
            <button onClick={toggleSidebar} className="text-gray-800 hover:text-primary focus:outline-none" aria-label="Open sidebar">
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleSidebar} />

        {/* Drawer */}
        <div className={`relative z-50 flex h-full w-4/5 max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>

          {/* Sidebar Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <Logo />
            <button onClick={toggleSidebar} className="flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none" aria-label="Close sidebar">
              <FaTimes size={18} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-grow overflow-y-auto px-4 py-5 space-y-1">

            {/* ── MOBILE APPS SECTION ── */}
            <MobileAccordion title="Mobile Applications">
              <div className="space-y-1 pt-1">
                <MobileProductItem
                  href="/#latest-news"
                  icon={<img src="/images/safeInspect-logo.png" alt="Safe Inspect" width={22} height={22} className="object-contain" />}
                  title="Safe Inspect"
                  description="Excel checklists → mobile forms. Offline inspections & custom reports."
                  isActive={false}
                />
                <MobileProductItem
                  href="#"
                  icon={<img src="/images/QuickSafe-Logo - resized.png" alt="Quick Safe" width={28} height={24} className="object-contain" />}
                  title="Quick Safe"
                  description="Offline EHS incident management for frontline workers."
                  isActive={currentPath.startsWith('/form-builder')}
                />
                <MobileProductItem
                  href="#"
                  icon={<img src="/images/assembly-attendance-logo-resized.png" alt="Safe Point" width={22} height={22} className="object-contain" />}
                  title="Safe Point"
                  description="Bluetooth attendance tracking for drills & workforce management."
                  isActive={currentPath.startsWith('/it-service-management')}
                />

                {/* Google Play — compact strip */}
                <div className="pt-3 pb-1 px-1">
                  <a
                    href="https://play.google.com/store/apps/developer?id=Safify"
                    className="inline-flex items-center gap-2.5 border border-gray-600 bg-gray-950 px-3 py-2 rounded-xl hover:border-gray-400 transition-all group active:scale-95"
                  >
                    <FaGooglePlay className="text-white text-sm group-hover:scale-105 transition-transform flex-shrink-0" />
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase tracking-wide leading-none">Get it on</p>
                      <p className="text-sm font-bold text-white leading-tight">Google Play</p>
                    </div>
                  </a>
                  <p className="text-gray-400 text-xs mt-1.5 ml-1">Free · No credit card needed</p>
                </div>
              </div>
            </MobileAccordion>

            {/* Divider */}
            <div className="border-t border-gray-100 my-2" />

            {/* ── SOLUTIONS SECTION ── */}
            <MobileAccordion title="Solutions">
              <div className="space-y-1 pt-1">
                {/* Group label */}
                <p className="px-3 pt-1 pb-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Core Solutions</p>
                <MobileServiceItem icon={<Scale size={16} />} title="Audit & Compliance" description="Streamline site audits and ensure compliance adherence." href="/audit-and-compliance-management" />
                <MobileServiceItem icon={<FaBolt size={16} />} title="IT Service Management" description="Structured IT operations and support processes." href="/it-service-management" />
                <MobileServiceItem icon={<FaShieldAlt size={16} />} title="EHS Incident Management" description="Mobile-first workplace safety and compliance." href="/ehs-incident-management" />

                <p className="px-3 pt-3 pb-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Capabilities</p>
                <MobileServiceItem icon={<Scale size={16} />} title="Regulatory Audit Automation" description="Digitize and automate audits and compliance checks." href="/audit-and-compliance-management/#multi-framework-audit" />
                <MobileServiceItem icon={<FaFileAlt size={16} />} title="Intelligent Form & Data Capture" description="Dynamic forms with Safify Form Builder." href="/audit-and-compliance-management/#features_form_builder" />
                <MobileServiceItem icon={<FaBuilding size={16} />} title="Industry-Specific Solutions" description="Tailored templates and checklists by sector." href="/#industries" />
              </div>
            </MobileAccordion>
          </div>

          {/* Sidebar Footer — Contact CTA */}
          <div className="border-t border-gray-100 p-4">
            <a
              href="mailto:faris@safify.tech;sales@safify.tech"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
            >
              <FaEnvelope />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// ─── Desktop Components ───────────────────────────────────────────────────────

function ProductItem({ href, icon, title, description, isActive = false }: ProductItemProps) {
  const iconColor = isActive ? "text-white" : "text-primary";
  const clonedIcon = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<any>, { className: `${iconColor}` })
    : icon;

  return (
    <Link href={href} className={`flex w-full items-start rounded-lg p-3 transition-colors duration-200 ${isActive ? "bg-primary text-white" : "hover:bg-gray-100"}`}>
      <div className="mt-1 flex-shrink-0">{clonedIcon}</div>
      <div className="ml-4">
        <p className={`font-semibold ${isActive ? "text-white" : "text-gray-900"}`}>{title}</p>
        <p className={`text-sm ${isActive ? "text-gray-200" : "text-gray-600"}`}>{description}</p>
      </div>
    </Link>
  );
}

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

// ─── Mobile-specific Components ───────────────────────────────────────────────

interface MobileProductItemProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  isActive?: boolean;
}

function MobileProductItem({ href, icon, title, description, isActive = false }: MobileProductItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-start gap-3 px-3 py-2.5 rounded-xl transition-colors ${isActive ? "bg-primary/10 border border-primary/20" : "hover:bg-gray-50"}`}
    >
      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 mt-0.5">
        {icon}
      </div>
      <div className="min-w-0">
        <p className={`text-sm font-semibold leading-tight ${isActive ? "text-primary" : "text-gray-900"}`}>{title}</p>
        <p className="text-xs text-gray-500 mt-0.5 leading-snug">{description}</p>
      </div>
    </Link>
  );
}

interface MobileServiceItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

function MobileServiceItem({ icon, title, description, href }: MobileServiceItemProps) {
  return (
    <Link
      href={href}
      className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
    >
      <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-primary mt-0.5">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-gray-900 leading-tight">{title}</p>
        <p className="text-xs text-gray-500 mt-0.5 leading-snug">{description}</p>
      </div>
    </Link>
  );
}

// ─── Accordion ────────────────────────────────────────────────────────────────

function MobileAccordion({ title, children }: MobileAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-1 py-3 text-base font-semibold text-gray-800 hover:text-primary transition-colors"
      >
        {title}
        <svg
          className={`h-4 w-4 text-gray-400 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        {children}
      </div>
    </div>
  );
}