import Link from "next/link";

const Logo = ({ size = 100 }) => {
  // Scaling factors based on a base size of 100
  const iconSize = size * 0.4;
  const titleFontSize = size * 0.22;
  const subtitleFontSize = size * 0.22;
  const sloganFontSize = size * 0.09;
  const gap = size * 0.1;

  return (
    <Link
    href={"/"}
      className="flex items-center font-sans select-none"
      style={{ gap: `${gap}px` }}
    >
      {/* Dynamic Geometric Icon */}
      <div
        className="relative bg-bluewood transform rotate-45 flex items-center justify-center shrink-0"
        style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
      >
        {/* Visual representation of the logo mark */}
        <div
          className="absolute bg-white rounded-full"
          style={{
            width: "35%",
            height: "35%",
            top: "15%",
            left: "15%",
          }}
        ></div>
        <div
          className="absolute border-r-2 border-b-2 border-white"
          style={{
            width: "30%",
            height: "45%",
            bottom: "15%",
            right: "15%",
          }}
        ></div>
      </div>

      {/* Text Container */}
      <div className="flex flex-col leading-none">
        <div className="flex flex-col">
          <h1
            className="tracking-wider text-gray-500 font-light uppercase"
            style={{ fontSize: `${titleFontSize}px` }}
          >
            Dhaka
          </h1>
          <h2
            className="tracking-tighter text-bluewood font-black uppercase"
            style={{
              fontSize: `${subtitleFontSize}px`,
              marginTop: `-${size * 0.02}px`,
            }}
          >
            Car Rental
          </h2>
        </div>

        {/* Slogan */}
        <p
          className="font-bold text-[#ff6b6b] uppercase tracking-widest"
          style={{
            fontSize: `${sloganFontSize}px`,
            marginTop: `${size * 0.05}px`,
          }}
        >
          Your Journey, We Care
        </p>
      </div>
    </Link>
  );
};

export default Logo;
