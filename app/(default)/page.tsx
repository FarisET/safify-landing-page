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

export default function Home() {
  return (
    <>
      <HeroHome />
      <FeaturesPlanet />

      {/* <div className="hidden sm:block">      
        <BusinessCategories />
      </div> */}
      <div className="sm:hidden">
        <BusinessCategoriesMobile />
      </div>
      <Cta />
    </>

  );
}
