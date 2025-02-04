export const metadata = {
  title: "EHS - Safify",
  description: "Ensure workplace safety and streamline incident management with Safify",
};


import FeaturesEhs from "@/components/FeaturesEhs";
import CtaEhs from "@/components/CtaEhs";
import ProcessFlowEhs from "@/components/ProcessFlowEhs";
import HeroEhs from "@/components/HeroEhs";
import BenefitsEhs from "@/components/BenefitsEhs";
import UseCasesEhs from "@/components/UseCasesEhs";

export default function Home() {
  return (
    <>
      <HeroEhs />
      <FeaturesEhs id="featuresEhs" />
      <ProcessFlowEhs id="processFlowEhs" />
      <BenefitsEhs />
      <UseCasesEhs />
      <CtaEhs />
    </>
  );
}
