"use client";
import { motion } from "framer-motion";

export default function TrustedCompanies() {
  const logos = [
    "/assets/company-logo-1.svg",
    "/assets/company-logo-2.svg",
    "/assets/company-logo-3.svg",
    "/assets/company-logo-4.svg",
    "/assets/company-logo-5.svg",
  ];

  return (
    <motion.section
      className="mt-32 px-6"
      initial={{ y: 120, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 70 }}
    >
      <p className="text-center text-gray-400 uppercase tracking-wider text-sm mb-12">
        Previous Venues & Clients
      </p>

      <div className="flex flex-wrap justify-center gap-14 max-w-5xl mx-auto items-center">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Client Logo"
            className="h-10 w-auto opacity-60 hover:opacity-100 transition duration-300"
          />
        ))}
      </div>
    </motion.section>
  );
}