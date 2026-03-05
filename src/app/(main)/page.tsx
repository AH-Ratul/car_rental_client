import Image from "next/image";
import HeroSection from "./_ui/HeroSection";
import BenefitSection from "./_ui/BenefitSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <BenefitSection />
      
    </div>
  );
}
