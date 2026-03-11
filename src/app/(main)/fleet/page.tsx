import VehicleCard from "@/src/components/shared/VehicleCard";
import { Button } from "@/src/components/ui/button";
import { vehicle } from "@/src/data/vehicle_data";

export default function Feet() {
  const category = [
    "All",
    "Mini",
    "Compact",
    "Standard",
    "Sedan",
    "Mid-SUV",
    "SUV",
    "Pickup (4x4)",
    "7-seater",
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full mb-10">
      <div className="bg-bermuda w-full text-center py-14">
        <h1 className="text-white text-4xl font-semibold text-shadow-lg">
          Our Fleet
        </h1>
      </div>
      <div className="max-w-6xl w-full mt-14 px-10">
        <div className="">
          <h2 className="text-bermuda text-2xl text-center font-semibold pb-4 border-b-4 border-b-bermuda">
            Car Fleet
          </h2>

          <div className="px-3 lg:px-10 my-5 flex flex-wrap justify-center items-center gap-5">
            {category.map((c) => (
              <Button
                key={c}
                className="bg-gray-200 hover:bg-bermuda m- w-32 py-5 text-lg text-bluewood font-normal rounded"
              >
                {c}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10 mt-16">
            {vehicle.map((v) => (
              <VehicleCard v={v} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 w-full mt-20 flex flex-col justify-center items-center gap-10 h-96">
        <h1 className="text-bluewood text-3xl">Are you looking for a long-term car rental solution?</h1>
        <Button className="bg-bermuda hover:bg-none font-normal text-white py-5 text-base rounded">
          Learn More
        </Button>
      </div>
    </div>
  );
}
