"use client";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { CalendarDays, Navigation, Pin } from "lucide-react";

export default function SearchForm() {
  const { control } = useForm({
    defaultValues: {
      pickupAddress: "",
      dropoffAddress: "",
      pickupDate: "06/03/2026",
      pickupTime: "04:30",
      returnDate: "09/03/2026",
      returnTime: "07:00",
      driverAge: "30-69",
    },
  });

  const [showPickupCalendar, setShowPickupCalendar] = useState(false);
  const [showReturnCalendar, setShowReturnCalendar] = useState(false);

  return (
    <form className="p-4 md:p-6 bg-white rounded shadow-2xl">
      {/* Pickup and Dropoff Addresses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
        <div>
          <label className="flex items-center gap-1 text-s font-semibold text-gray-700 mb-2">
            <Navigation size={20} className="text-sunset-orange" /> Pickup
            address{" "}
            <span className="text-gray-500 text-xs">
              (Choose airport or hotel)
            </span>
          </label>
          <Controller
            name="pickupAddress"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Enter pickup city, location, address, pincode.."
                className="w-full px-3 md:px-4 py-2 border border-bluewood rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base"
              />
            )}
          />
        </div>
        <div>
          <label className="flex items-center gap-1 text- font-semibold text-gray-700 mb-2">
            <Pin size={20} className="text-sunset-orange" /> Drop-off address{" "}
            <span className="text-gray-500 text-xs">
              (Choose airport or hotel)
            </span>
          </label>
          <Controller
            name="dropoffAddress"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Enter dropoff city, location, address, pincode.."
                className="w-full px-3 md:px-4 py-2 border border-bluewood rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base"
              />
            )}
          />
        </div>
      </div>

      {/* Pickup Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
        <div>
          <label className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
            <CalendarDays size={20} className="text-sunset-orange" /> Pickup
            Date & time
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Controller
              name="pickupDate"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="DD/MM/YYYY"
                  onFocus={() => setShowPickupCalendar(true)}
                  onBlur={() => setShowPickupCalendar(false)}
                  className="px-3 md:px-4 py-2 border border-bluewood rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base"
                />
              )}
            />
            <Controller
              name="pickupTime"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="time"
                  className="px-3 md:px-4 py-2 border border-bluewood rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base"
                />
              )}
            />
          </div>
        </div>

        {/* Return Date & Time */}
        <div>
          <label className="flex items-center gap-2 text-base font-semibold text-gray-700 mb-2">
            <CalendarDays size={20} className="text-sunset-orange" /> Return
            Date & time
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Controller
              name="returnDate"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="DD/MM/YYYY"
                  onFocus={() => setShowReturnCalendar(true)}
                  onBlur={() => setShowReturnCalendar(false)}
                  className="px-3 md:px-4 py-2 border border-bluewood rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base"
                />
              )}
            />
            <Controller
              name="returnTime"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="time"
                  className="px-3 md:px-4 py-2 border border-bluewood rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base"
                />
              )}
            />
          </div>
        </div>
      </div>

      {/* Driver's Age & Payment */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-10 w-full">
          <label className="block font-semibold text-gray-700 text-lg">
            Driver's age
          </label>
          <Controller
            name="driverAge"
            control={control}
            render={({ field }) => (
              <div className="flex flex-wrap gap-4 md:gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="18-29"
                    checked={field.value === "18-29"}
                    onChange={() => field.onChange("18-29")}
                    className="mr-2"
                  />{" "}
                  <span className="text-sm md:text-base">18-29</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="30-69"
                    checked={field.value === "30-69"}
                    onChange={() => field.onChange("30-69")}
                    className="mr-2"
                  />{" "}
                  <span className="text-sm md:text-base">30-69</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="70+"
                    checked={field.value === "70+"}
                    onChange={() => field.onChange("70+")}
                    className="mr-2"
                  />{" "}
                  <span className="text-sm md:text-base">70+</span>
                </label>
              </div>
            )}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between w-full items-center gap-3 sm:gap-4">
          <div className="text-base md:text-lg text-sunset-orange font-semibold whitespace-nowrap">
            DEBIT & CREDIT
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 md:px-8 py-4 bg-teal-500 text-white text-sm md:text-base font-semibold rounded-md hover:bg-teal-600 transition"
          >
            Search My Car Now
          </button>
        </div>
      </div>
    </form>
  );
}
