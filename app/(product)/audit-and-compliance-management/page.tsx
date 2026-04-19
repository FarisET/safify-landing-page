export const metadata = {
  title: "Home - Safify",
  description: "Ensure workplace safety and streamline incident management with Safify",
};


import FeaturesEhs from "@/components/FeaturesEhs";
import CtaEhs from "@/components/CtaEhs";
import ProcessFlowEhs from "@/components/ProcessFlowEhs";
import HeroEhs from "@/components/HeroEhs";
import BenefitsEhs from "@/components/BenefitsEhs";
import FeaturesPlanet from "@/components/features-planet";
import BusinessCategories from "@/components/business-categories";
import Cta from "@/components/cta";
import HeroHome from "@/components/hero-home";
import BusinessCategoriesMobile from "@/components/business-categories-mobile";

import HeroFormBuilder from "@/components/form-builder/HeroFormBuilder"
import IndustrySolutions from "@/components/form-builder/IndustrySolutions";
import MobilePWA from "@/components/form-builder/MobilePwa";
import TriadicHealthcareDiagram from "@/components/triadic_link_diagram";
import FAQFormBuilder from "@/components/form-builder/FAQFormBuilder";
import AuditModuleSection from "@/components/form-builder/audit_module_section";
import FeaturesSectionFB from "@/components/form-builder/features_form_builder";
import ComplianceAuditSection from "@/components/form-builder/compliance_audit_section";

export default function Home() {
  return (
    // <>
    //   <HeroHome />
    //   <FeaturesPlanet />

    //   {/* <div className="hidden sm:block">      
    //     <BusinessCategories />
    //   </div> */}
    //   <div className="sm:hidden">
    //     <BusinessCategoriesMobile />
    //   </div>
    //   <Cta />
    // </>
    <>
      <HeroFormBuilder />
      <ComplianceAuditSection />
      <TriadicHealthcareDiagram />
      <AuditModuleSection />
      <FeaturesSectionFB />
      <IndustrySolutions />
      <MobilePWA />
      <FAQFormBuilder />
    </>

  );
}
