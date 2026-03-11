import VehicleCard from "@/src/components/shared/VehicleCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { vehicle } from "@/src/data/vehicle_data";

export default function ExploreCarSetion() {
  return (
    <div className="w-full text-center mb-10 px-4 sm:px-6 lg:px-8">
      <h3 className="text-bluewood uppercase text-sm sm:text-base tracking-widest">
        What We Offer
      </h3>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-bluewood mt-3">
        <span className="text-sunset-orange">Explore</span> our best renting
        cars
      </h1>

      <div className="w-full max-w-6xl mx-auto mt-8 sm:mt-10 lg:mt-12 px-0">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-3 lg:-ml-4">
            {vehicle.map((v: any) => (
              <CarouselItem
                key={v.id}
                className="pl-2 sm:pl-3 lg:pl-4 basis-ful sm:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full">
                  <VehicleCard v={v} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-10 lg:-left-12" />
          <CarouselNext className="hidden sm:flex -right-10 lg:-right-12" />
        </Carousel>
      </div>
    </div>
  );
}
