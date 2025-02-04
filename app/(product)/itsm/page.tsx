export const metadata = {
  title: "ITSM - Safify",
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

export default function Home() {
  return (
    <>
      <HeroItsm />
      <InterfaceItsm/>
      <FeaturesItsm id="featuresItsm"/>
      {/* <ProcessFlowEhs id="processFlowEhs" />
      <BenefitsEhs /> */}
      <CtaEhs />
    </>
  );
}
