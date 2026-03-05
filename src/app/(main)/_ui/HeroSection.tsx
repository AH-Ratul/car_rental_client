import { Globe } from "lucide-react";
import SearchForm from "../../../components/shared/SearchForm";

export default function HeroSection() {
  return (
    <div className="w-full">
      <section className="bg-bermuda py-4 w-full flex justify-center items-center">
        <p className="flex justify-center items-center gap-2 sm:gap-5 text-white text-sm sm:text-base px-3 text-wrap">
          <Globe className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" />
          Worldwide Local Licenses Accepted-No need of International Driving
          Licenses.
        </p>
      </section>

      <section className="min-h-150 bg-sunset-orange/10 flex flex-col justify-center items-center px-4 py-10 sm:py-0">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-bluewood font-medium text-center">
          Dhaka Car Rental
        </h1>
        <h3 className="mt-6 sm:mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-bluewood text-center text-wrap px-2">
          Reliable car rental Agency at HS Int. Airport, Dhaka
        </h3>

        <p className="mt-10 sm:mt-20 text-bluewood text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
          Book online in 60 seconds · Instant Confirmation
        </p>

        <div className="h-40 -mb-36 mt-20 lg:w-4xl xl:w-6xl p-3">
          <SearchForm />
        </div>
      </section>
    </div>
  );
}
