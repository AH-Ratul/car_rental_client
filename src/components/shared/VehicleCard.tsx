"use client";

import { vehicle } from "@/src/data/vehicle_data";
import Image from "next/image";

export default function VehicleCard({ v }: any) {
  return (
    <>
      <div
        key={v.id}
        className="relative bg-white shadow-lg w-70 p-6 flex flex-col justify-center items-center"
      >
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-sunset-orange text-white rounded-full p-4 h-24 w-24 flex flex-col justify-center items-center text-center">
          <span>from</span>
          <span>€</span>
          <span>{v.daily_rate}</span>
        </div>

        {/* Car Image */}
        <div className="mt-8 mb-4">
          <Image
            src={v.image}
            alt={v.name}
            width={256}
            height={176}
            className="w-64 h-44 object-contain"
          />
        </div>

        {/* Car Details */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-sunset-orange">
            {v.name}
          </h2>
          <p className="text-gray-400 text-sm">{v.transmission_type}</p>
          <p className="text-gray-500">{v.type}</p>
        </div>

        {/* Book Now Button */}
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-8 rounded mb-4">
          Book Now
        </button>

        {/* Features */}
        <div className="mt-4 mb-2">
          <p className="text-gray-500 text-sm mb-3 text-center">
            More information:
          </p>
          <div className="flex justify-center gap-3">
            <Image src={v.passengers} alt="passengers" width={33} height={33} />
            <Image src={v.luggage} alt="luggage" width={33} height={33} />
            <Image src={v.doors} alt="doors" width={33} height={33} />
            <Image
              src={v.transmission}
              alt="transmission"
              width={33}
              height={33}
            />
            <Image
              src={v.airCondition}
              alt="air condition"
              width={33}
              height={33}
            />
          </div>
        </div>
      </div>
    </>
  );
}
