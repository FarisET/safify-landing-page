export const metadata = {
  title: "Home - Safify",
  description: "Incident Management",
};


import FeaturesEhs from "@/components/FeaturesEhs";
import CtaEhs from "@/components/CtaEhs";
import ProcessFlowEhs from "@/components/ProcessFlowEhs";
import HeroEhs from "@/components/HeroEhs";
import BenefitsEhs from "@/components/BenefitsEhs";

export default function Home() {
  return (
    <>
      <HeroEhs />
      <FeaturesEhs />
      <ProcessFlowEhs />
      <BenefitsEhs />
      <CtaEhs />
    </>
  );
}
