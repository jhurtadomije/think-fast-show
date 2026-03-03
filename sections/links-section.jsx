"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";

export default function LinksSection() {
  return (
    <section className="mt-40 px-6 mb-40">
      <SectionTitle
        title="Quick Access"
        description="Scan or click to connect with us."
      />

      <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto text-center">

        <motion.div
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Zoom</h3>
          <img
            src="/assets/qr-zoom.png"
            alt="Zoom QR"
            className="w-40 mx-auto mb-4"
          />
          <a
            href="#"
            className="text-[#E6007E] hover:underline"
          >
            Join via link
          </a>
        </motion.div>

        <motion.div
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Instagram</h3>
          <img
            src="/assets/qr-instagram.png"
            alt="Instagram QR"
            className="w-40 mx-auto mb-4"
          />
          <a
            href="#"
            className="text-[#E6007E] hover:underline"
          >
            Follow us
          </a>
        </motion.div>

        <motion.div
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Survey</h3>
          <img
            src="/assets/qr-survey.png"
            alt="Survey QR"
            className="w-40 mx-auto mb-4"
          />
          <a
            href="#"
            className="text-[#E6007E] hover:underline"
          >
            Leave feedback
          </a>
        </motion.div>

      </div>
    </section>
  );
}