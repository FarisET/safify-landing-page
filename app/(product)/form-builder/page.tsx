export const metadata = {
  title: "Form Builder - Safify",
  description: "Ensure workplace safety and streamline incident management with Safify",
};


import FeaturesEhs from "@/components/FeaturesEhs";
import CtaEhs from "@/components/CtaEhs";
import ProcessFlowEhs from "@/components/ProcessFlowEhs";
import HeroEhs from "@/components/HeroEhs";
import BenefitsEhs from "@/components/BenefitsEhs";
import UseCasesEhs from "@/components/UseCasesEhs";
import HeroItsm from "@/components/itsm/HeroItsm";
import InterfaceItsm from "@/components/itsm/InterfaceItsm";
import FeaturesItsm from "@/components/itsm/FeaturesItsm";
import HeroFormBuilder from "@/components/form-builder/HeroFormBuilder"
import FeaturesFormBuilder from "@/components/form-builder/FeaturesFormBuilder";
import BenefitsFormBuilder from "@/components/form-builder/BenefitsFormBuilder";
import HowItWorksFB from "@/components/form-builder/HowItWorksFB";
import IndustrySolutions from "@/components/form-builder/IndustrySolutions";
import MobilePWA from "@/components/form-builder/MobilePwa";
import TriadicHealthcareDiagram from "@/components/triadic_link_diagram";
import FAQFormBuilder from "@/components/form-builder/FAQFormBuilder";
import AuditModuleSection from "@/components/form-builder/audit_module_section";
import FeaturesSectionFB from "@/components/form-builder/features_form_builder";
import ComplianceAuditSection from "@/components/form-builder/compliance_audit_section";

export default function Home() {
  return (
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
