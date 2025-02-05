import HeroServices from "@/components/services/HeroServices";
import OurServices from "@/components/services/OurServices";

export const metadata = {
    title: "Services - Safify",
    description: "Ensure workplace safety and streamline incident management with Safify",
  };
  
  

  
  export default function Home() {
    return (
      <>
      <HeroServices/>
      <OurServices/>
      </>
    );
  }
  