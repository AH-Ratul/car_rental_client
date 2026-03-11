import DriverRequirements from "./_ui/driver_requirements";
import InfoCard from "./_ui/info_card";

export default function DriverInfo() {
  return (
    <div className="flex flex-col justify-center ">
      <div className="bg-[#2eceb6] w-full text-center text-white py-20">
        <h1 className=" text-4xl font-medium ">Driver Information</h1>
        <div className="flex flex-col my-3">
          <span>What your need to know before packup - </span>
          <span>documents, age rules, payment, and airport meeting point</span>
        </div>
        <button className="bg-sunset-orange py-2 px-8 mt-3 rounded">
          Watch Video
        </button>
      </div>
      <div className="px-24">
        <InfoCard />
        <DriverRequirements />
      </div>
    </div>
  );
}
