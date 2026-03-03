"use client";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="mt-40 px-6">
      <motion.div
        className="relative max-w-5xl mx-auto text-center py-20 px-8 rounded-3xl bg-gradient-to-r from-[#0f0f1a] via-[#140b1f] to-[#0f0f1a] border border-white/10 overflow-hidden"
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 60 }}
      >
        {/* Glow decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(230,0,126,0.15),_transparent_60%)]" />

        <motion.p
          className="uppercase tracking-widest text-sm text-[#E6007E] mb-6 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Live Experience · Limited Seats
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-white relative z-10"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Ready for a Night of
          <br />
          Unscripted Comedy?
        </motion.h2>

        <motion.p
          className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg relative z-10"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Join us live in Dublin and become part of the show.
          Every performance is shaped by the audience — and that means you.
        </motion.p>

        <motion.a
          href="/book"
          className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full bg-[#E6007E] text-white font-medium hover:scale-105 transition relative z-10"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Book Your Show
          <ArrowRightIcon className="size-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}