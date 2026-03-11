import passport from "../../../../../public/images/icons/passport-ic.svg";
import license from "../../../../../public/images/icons/licence-ic.svg";
import voucher from "../../../../../public/images/icons/booking-voucher-ic.svg";
import driver_info from "../../../../../public/images/icons/driver-info.png";
import Image from "next/image";

export default function DriverRequirements() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl text-gray-900 mb-8">Driver Requirements</h1>

        <div className="rounded shadow-lg mb-8 pb-5">
          <h2 className="text-white text-lg mb-6 py-4 px-6 bg-bermuda rounded-t">
            Driver Requirements
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6">
            <div className="lg:col-span-2">
              <ul className="space-y-4">
                <li className="flex items-center ">
                  <span className="text-green-400 mr-3 text-lg">✓</span>
                  <span>Minimum driver age: 21 years</span>
                </li>
                <li className="flex items-center ">
                  <span className="text-green-400 mr-3 text-lg">✓</span>
                  <span>
                    Maximum driver age: 75+{" "}
                    <span className="text-sm">
                      (upon request, subject to review)
                    </span>
                  </span>
                </li>
                <li className="flex items-center ">
                  <span className="text-green-400 mr-3 text-lg">✓</span>
                  <span>Minimum licence holding period: 1 year</span>
                </li>
                <li className="flex items-center ">
                  <span className="text-green-400 mr-3 text-lg">✓</span>
                  <span>Licence must be valid during rental</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-center lg:justify-end -mt-20">
              <Image
                src={driver_info}
                alt="Driver with licence"
                width={200}
                height={200}
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain"
              />
            </div>
          </div>

          <div className="bg-sunset-orange rounded px-4 py-2 mb-8 mx-6 mt-5">
            <p className="text-white font-medium text-sm">
              Digital or photocopied licences are accepted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mx-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start">
                <Image
                  src={passport}
                  alt="Passport"
                  width={48}
                  height={48}
                  className="w-10 h-10 mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Passport
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Valid passport required at pickup
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start">
                <Image
                  src={license}
                  alt="Driving Licence"
                  width={48}
                  height={48}
                  className="w-10 h-10 mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Original Driving Licence
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Physical licence
                    <br />
                    Digital copies accepted
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start">
                <Image
                  src={voucher}
                  alt="Booking Voucher"
                  width={48}
                  height={48}
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Booking Voucher{" "}
                    <span className="text-sm font-normal text-gray-500">
                      (Optional)
                    </span>
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Printed or shown on your phone
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-sunset-orange rounded px-4 py-2 mx-6">
            <div className="flex items-start">
              <span className="text-white text-sm mr-3">ℹ️</span>
              <p className="text-white font-medium text-sm">
                Please ensure all required documents are available at pickup to
                avoid delays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
