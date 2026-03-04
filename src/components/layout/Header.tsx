"use client";

import Logo from "../../../public/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-2 flex justify-between items-center px-20 border-b border-b-black sticky top-0">
      <div className="flex items-center gap-20">
        <Logo size={80} />

        <nav className="uppercase flex items-center gap-10 text-bluewood">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/driver"}>Driver</Link>
          <Link href={"/fleet"}>Fleet</Link>
          <Link href={"/conditions"}>Conditions</Link>
          <Link href={"/faq"}>FAQ</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-bermuda rounded-full text-bluewood text-lg font-medium py-3 px-6 shadow-xl">
          Book Now
        </button>
        <button className="bg-sunset-orange py-3 px-5 text-white font-medium rounded-sm">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
