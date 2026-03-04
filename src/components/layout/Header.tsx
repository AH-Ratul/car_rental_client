"use client";

import Logo from "../../../public/Logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 border-b border-b-black px-2 py-3 sm:px-20">
      <div className="flex items-center justify-between">
        {/* Logo and Desktop Navigation */}
        <div className="flex items-center gap-20">
          <Logo size={80} />

          <nav className="hidden items-center gap-10 uppercase text-bluewood md:flex">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/driver", label: "Driver" },
              { href: "/fleet", label: "Fleet" },
              { href: "/conditions", label: "Conditions" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="rounded-full bg-bermuda px-6 py-3 font-medium text-lg text-bluewood shadow-xl hover:opacity-90 transition-opacity">
            Book Now
          </button>
          <button className="hidden rounded-sm bg-sunset-orange px-5 py-3 font-medium text-white hover:opacity-90 transition-opacity md:block">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          className="md:hidden h-12 w-14 rounded bg-white! px-0! cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          asChild
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="flex flex-col items-start gap-5 pl-5 uppercase text-bluewood md:hidden my-3">
          {[
            { href: "/", label: "Home", highlight: true },
            { href: "/about", label: "About" },
            { href: "/driver", label: "Driver" },
            { href: "/fleet", label: "Fleet" },
            { href: "/conditions", label: "Conditions" },
            { href: "/faq", label: "FAQ" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label, highlight }) => (
            <Link
              key={href}
              href={href}
              className={
                highlight ? "w-full border-b-4 border-sunset-orange py-2" : ""
              }
            >
              {label}
            </Link>
          ))}
          <button className="rounded-sm bg-sunset-orange px-7 py-3 font-medium text-white hover:opacity-90 transition-opacity">
            Sign In
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
