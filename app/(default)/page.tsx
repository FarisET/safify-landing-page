export const metadata = {
  title: "Home - Safify",
  description: "Incident Management",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import CircularFlow from "@/components/CircularFlowDiagram";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <Cta />
    </>
  );
}
