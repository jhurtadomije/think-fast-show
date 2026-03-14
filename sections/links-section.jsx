"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";

const links = [
  {
    title: "Zoom",
    image: "/assets/qr-codeZoom.png",
    label: "Visit Zoom",
    url: "https://zoom.us",
  },
  {
    title: "Instagram",
    image: "/assets/qr-codeInsta.png",
    label: "Visit Instagram",
    url: "https://www.instagram.com",
  },
  {
    title: "Survey",
    image: "/assets/qr-codeForms.png",
    label: "Open Survey",
    url: "https://forms.google.com",
  },
];

export default function LinksSection() {
  return (
    <section className="mt-40 px-6 mb-40">
      <SectionTitle
        title="Quick Access"
        description="Scan the QR codes or click below to connect with us."
      />

      <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto text-center">
        {links.map((item) => (
          <motion.div
            key={item.title}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl transition hover:bg-white/10 hover:scale-[1.03]"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">
              {item.title}
            </h3>

            <img
              src={item.image}
              alt={`${item.title} QR code`}
              className="w-40 mx-auto mb-6 transition hover:scale-105"
            />

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#E6007E] hover:text-[#ff2aa3] transition font-medium"
            >
              {item.label}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}