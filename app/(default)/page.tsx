import IndustrySolutions from "@/components/form-builder/IndustrySolutions";
import MobilePWA from "@/components/form-builder/MobilePwa";
import HomeHero from "@/components/home/HomeHero";
import LatestNews from "@/components/home/LatestNews";

export const metadata = {
  title: "Safify — Industrial Safety & Compliance Platform",
  description:
    "Digitize inspections, audits, and compliance workflows across your industrial operations.",
};

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <LatestNews/>
      <IndustrySolutions />
      <MobilePWA />s
    </main>
  );
}
