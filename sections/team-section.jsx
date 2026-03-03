"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";

export default function TeamSection() {
  return (
    <section className="mt-40 px-6">
      <SectionTitle
        title="Meet the Performers"
        description="The creative minds behind Think Fast. Fast thinking, fearless energy, unforgettable nights."
      />

      <motion.div
        className="mt-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Imagen principal */}
        <div className="flex-1 flex justify-center">
          <img
            src="/assets/team-main.jpeg"
            alt="Think Fast Performers"
            className="w-full max-w-md rounded-full border border-white/10"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left max-w-xl">
          <h3 className="text-3xl font-semibold text-white">
            Energy. Wit. Connection.
          </h3>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Our performers bring years of experience in theatre and live
            improvisation. Every show is built in the moment — shaped by the
            audience, driven by instinct, and powered by fearless creativity.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            No scripts. No safety net. Just pure live performance.
          </p>
        </div>
      </motion.div>
    </section>
  );
}