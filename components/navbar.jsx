"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { name: "Home", href: "/#top" },
    { name: "About Us", href: "/about" },
    { name: "Shows", href: "#services" },
    { name: "How It Works", href: "#methodology" },
    { name: "Reviews", href: "#validation" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between 
  px-6 md:px-16 transition-all duration-500
  ${
    isScrolled
      ? "py-3 bg-black/80 backdrop-blur-lg shadow-lg border-b border-white/10"
      : "py-6 bg-black/10 backdrop-blur-sm"
  }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 250, damping: 70 }}
      >
        {/* Logo */}
        <a href="#top" className="transition hover:opacity-90">
          <Image
            src="/assets/logo.svg"
            alt="Think Fast Show"
            width={220}
            height={100}
            className="h-52 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition hover:text-[#FF4DA6]"
            >
              {link.name}
            </Link>
          ))}

          <Link href="/book" className="btn-primary">
            Book a Show
          </Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(true)}
          className="transition active:scale-90 md:hidden"
        >
          <MenuIcon className="size-6" />
        </button>
      </motion.nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 text-lg font-medium bg-black/90 backdrop-blur-xl transition duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="hover:text-[#FF4DA6] transition"
          >
            {link.name}
          </Link>
        ))}

        <Link
          href="#contact"
          className="btn-primary"
          onClick={() => setIsOpen(false)}
        >
          Book a Show
        </Link>

        <button
          onClick={() => setIsOpen(false)}
          className="rounded-full p-3 border border-white/20"
        >
          <XIcon />
        </button>
      </div>
    </>
  );
}
