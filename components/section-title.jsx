import { motion } from "framer-motion";

export default function SectionTitle({ title, description }) {
  return (
    <div className="text-center px-6">
      
      {/* Decorative accent line */}
      <motion.div
        className="w-16 h-1 bg-gradient-to-r from-[#E6007E] to-[#FF4DA6] mx-auto rounded-full"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />

      <motion.h2
        className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto mt-6 tracking-tight"
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="mt-6 text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 240, damping: 70 }}
      >
        {description}
      </motion.p>
    </div>
  );
}