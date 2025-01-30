export const metadata = {
  title: "EHS - Safify",
  description: "EHS - Incident Management",
};

import Hero from "@/components/hero-home";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import HeroEhs from "@/components/HeroEhs";
import FeaturesEhs from "@/components/FeaturesEhs";
import ProcessFlowEhs from "@/components/ProcessFlowEhs";

export default function Ehs() {
  return (
    <>
      <HeroEhs />
      <FeaturesEhs />
      <ProcessFlowEhs />
      <Cta />
    </>
  );
}
