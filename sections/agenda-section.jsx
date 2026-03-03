"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";

const schedule = [
  { time: "18:00", title: "Welcome & Introduction" },
  { time: "18:15", title: "Audience Warm-Up" },
  { time: "18:30", title: "Main Impro Show" },
  { time: "19:30", title: "Q&A + Closing" },
];

export default function AgendaSection() {
  return (
    <section className="mt-40 px-6">
      <SectionTitle
        title="Event Agenda"
        description="Here’s how the evening will unfold."
      />

      <div className="max-w-3xl mx-auto mt-16 space-y-8">
        {schedule.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="text-[#E6007E] font-semibold text-lg">
              {item.time}
            </span>
            <span className="text-gray-300">{item.title}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}