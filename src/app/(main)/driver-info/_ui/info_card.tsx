import { driverCardInfo } from "@/src/data/driver_card_data";
import Image from "next/image";

export default function InfoCard() {
  return (
    <div className="w-full px-4 -mt-12">
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6">
        {driverCardInfo.map((dc) => (
          <div
            key={dc.id}
            className="flex-1 w-48 bg-white rounded shadow-md p-5 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-3 lg:w-52">
              <Image src={dc.icon} alt="icon" />
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-l font-bold text-gray-900 wrap-break-word">
                  {dc.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-1">
                  {dc.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
