"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="mt-40 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-widest text-sm text-[#E6007E] mb-4">
          Our Story
        </p>

        <h3 className="text-4xl md:text-5xl font-semibold text-white">
          Built on spontaneity.
        </h3>

        <p className="text-gray-400 mt-8 leading-relaxed text-lg">
          Think Fast was born from a shared love of live theatre and the thrill
          of improvisation. What started as small experimental shows quickly
          became an electric live experience shaped entirely by the audience.
        </p>

        <p className="text-gray-400 mt-4 leading-relaxed text-lg">
          Every performance is unpredictable. That’s what makes it magic.
        </p>
      </motion.div>

      {/* Imagen debajo */}
      <motion.div
        className="mt-16 max-w-5xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/assets/team-story.jpeg"
          alt="Think Fast performers"
          className="w-full rounded-3xl border border-white/10"
        />
      </motion.div>
    </section>
  );
}