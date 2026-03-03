"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative w-full h-[115vh] overflow-hidden"
    >
      {/* Imagen fondo */}
      <img
        src="/assets/hero-stage.jpeg"
        alt="Think Fast Show on stage"
        className="absolute inset-0 w-full h-full object-cover object-[center_37%]"
      />

      {/* Degradado inferior para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Contenido superpuesto abajo */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center px-6 max-w-4xl z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-widest text-sm text-[#E6007E] mb-6">
          Live Improvised Theatre
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          Fast Thinking. <br />
          Fearless Comedy. <br />
          Unscripted Moments.
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
          Every performance is completely improvised. The audience gives the
          ideas — we create the show live on stage.
        </p>
      </motion.div>
    </section>
  );
}