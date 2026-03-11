import img from "../../../../public/images/cars/car-bg.jpg";
import { Button } from "@/src/components/ui/button";

export default function AboutUs() {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="order-2 md:order-1">
            <img
              src={img.src}
              alt="Pingouin Car Rental"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2 space-y-6">
            <h1 className="text-4xl font-medium text-bluewood">About Us</h1>

            <p className="text-base text-bluewood leading-relaxed">
              We offer a wide range of cars and our competitive advantage is our
              great value-for-money as our customers is able to book directly
              and securely from us without no third-party online suppliers.
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              Our dedicated and passionate team is keen to make your car rental
              journey hassle-free and enjoyable and memorable.
            </p>

            <p className="text-lg md:text-xl font-medium text-sunset-orange italic">
              Make Pingouin Car Rental your preferred car rental agency in
              Mauritius.
            </p>

            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-9 py-5.5 font-medium">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
