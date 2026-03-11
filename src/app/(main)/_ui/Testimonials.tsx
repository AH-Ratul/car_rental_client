export default function Testimonials() {
  return (
    <div className="bg-bermuda flex flex-col justify-center items-center px-16 lg:px-10 py-20 shadow-sm">
      <h1 className="text-4xl text-bluewood font-medium">
        What our <span className="text-sunset-orange">clients</span> say..
      </h1>

      <div className="bg-white flex flex-col justify-center items-center p-14 mt-10 w-full lg:w-1/2">
        <span className="uppercase text-sunset-orange text-sm">
          Testimonials
        </span>

        <p className="text-center text-bluewood font-semibold my-7">
          ANOOP and PRADEEP delivered the car tomour hotel. Everythign worked
          smoothly. Very friendly and good service. Would rent again here!
        </p>

        <h3 className="uppercase text-sunset-orange text-xl font-semibold">
          ALEXANDER
        </h3>
      </div>
    </div>
  );
}
