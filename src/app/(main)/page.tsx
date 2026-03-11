import HeroSection from "./_ui/HeroSection";
import BenefitSection from "./_ui/BenefitSection";
import VehicleCard from "@/src/components/shared/VehicleCard";
import ExploreCarSetion from "./_ui/ExploreCarSection";
import BenefitCard from "./_ui/BenefitCard";
import Testimonials from "./_ui/Testimonials";
import AboutUs from "./_ui/AboutUs";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <BenefitSection />

      <div className="flex justify-center items-center px-20  mt-20 w-full bg-gray-100 py-20">
        <ExploreCarSetion />
      </div>
        <BenefitCard />
        <Testimonials />
        <AboutUs />
    </div>
  );
}
