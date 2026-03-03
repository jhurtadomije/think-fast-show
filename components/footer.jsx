'use client';
import { LinkedinIcon, InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {

  const links = [
    { name: 'Home', href: '#top' },
    { name: 'Shows', href: '#services' },
    { name: 'How It Works', href: '#methodology' },
    { name: 'Reviews', href: '#validation' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.footer
      id="contact"
      className="flex flex-col items-center px-6 md:px-16 justify-center w-full pt-20 mt-40 bg-black border-t border-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      {/* Logo */}
      <a href="#top" className="mb-8">
        <Image
          src="/assets/logo.svg"
          alt="Think Fast Show"
          width={220}
          height={100}
          className="h-54 w-auto object-contain"
        />
      </a>

      {/* Navigation Links */}
      <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="transition hover:text-[#E6007E]"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Social */}
      <div className="flex items-center gap-6 mb-8">
        <a
          href="#"
          className="text-gray-400 hover:text-[#E6007E] transition-all duration-300"
        >
          <InstagramIcon />
        </a>

        <a
          href="#"
          className="text-gray-400 hover:text-[#E6007E] transition-all duration-300"
        >
          <LinkedinIcon />
        </a>
      </div>

      <div className="w-full border-t border-white/10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>Improvised Theatre · Corporate Events · Live Shows</p>
        <p>© 2026 Think Fast Show. All rights reserved.</p>
      </div>

    </motion.footer>
  );
}