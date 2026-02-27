'use client';
import { LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {

    const links = [
        { name: 'About the Project', href: '#top' },
        { name: 'Services', href: '#services' },
        { name: 'Methodology', href: '#methodology' },
        { name: 'Market Validation', href: '#validation' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.footer
            id="contact"
            className="flex flex-col items-center px-4 md:px-16 lg:px-24 justify-center w-full pt-16 mt-40 glass border-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >

            {/* Logo 
            <a href="#top">
                <Image
                    src='/assets/logo.svg'
                    alt='Company logo'
                    className='h-8.5 w-auto'
                    width={205}
                    height={48}
                />
            </a>
            */}
            <h1 className="text-xl md:text-2xl font-semibold tracking-wider text-white">
  GLOBAL<span className="text-orange-500">STRATEGY</span>
</h1>

            {/* Navigation Links */}
            <div className="flex flex-wrap items-center justify-center gap-8 py-8">
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className='transition hover:text-gray-300'>
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-6 pb-6">
                <a href="#" className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300">
                    <LinkedinIcon />
                </a>
            </div>

            <hr className="w-full border-white/20 mt-6" />

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 py-4 text-sm text-gray-300">
                <p>International Business Strategy Project</p>
                <p>© 2025 Project Name. All rights reserved.</p>
            </div>

        </motion.footer>
    );
}