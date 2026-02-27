'use client';

import { MenuIcon, XIcon, DownloadIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '#top' },
    { name: 'Services', href: '#services' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Validation', href: '#validation' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <>
      <motion.nav
        className={`sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-16 lg:px-24 transition-colors ${
          isScrolled ? 'bg-white/15 backdrop-blur-lg' : ''
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        {/* Logo
        <a href="#top" className="transition hover:opacity-90">
          <Image src="/assets/logo.svg" alt="Company logo" className="h-8.5 w-auto" width={205} height={48} />
        </a>
 */
        }
        <h1 className="text-xl md:text-2xl font-semibold tracking-wider text-white">
  GLOBAL<span className="text-orange-500">STRATEGY</span>
</h1>
        {/* Desktop */}
        <div className="hidden items-center space-x-10 md:flex">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="transition hover:text-gray-300">
              {link.name}
            </Link>
          ))}

          <a href="#!" className="btn glass inline-flex items-center gap-2">
            <DownloadIcon className="size-4.5" />
            Download PDF
          </a>
        </div>

        {/* Mobile button */}
        <button onClick={() => setIsOpen(true)} className="transition active:scale-90 md:hidden">
          <MenuIcon className="size-6.5" />
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {links.map((link) => (
          <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
            {link.name}
          </Link>
        ))}

        <a href="#!" className="btn glass inline-flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <DownloadIcon className="size-4.5" />
          Download PDF
        </a>

        <button onClick={() => setIsOpen(false)} className="rounded-md p-2 glass">
          <XIcon />
        </button>
      </div>
    </>
  );
}