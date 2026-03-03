"use client";
import SectionTitle from "@/components/section-title";
import { TheaterIcon, SparklesIcon, UsersIcon } from "lucide-react";
import { motion } from "framer-motion";
import { use, useRef } from "react";

export default function Features() {

  const refs = useRef([]);

  const featuresData = [
    {
      icon: SparklesIcon,
      title: "Live Improvised Theatre",
      description:
        "Every show is completely unscripted. The audience gives the ideas — we create the scenes live on stage.",
    },
    {
      icon: UsersIcon,
      title: "Corporate Events & Team Building",
      description:
        "Interactive performances and workshops designed to energise teams, improve communication and boost creativity.",
    },
    {
      icon: TheaterIcon,
      title: "Workshops & Masterclasses",
      description:
        "Hands-on sessions where participants explore spontaneity, confidence and storytelling through improvisation.",
    },
  ];

  return (
    <section id="services" className="mt-40 px-6">
      <SectionTitle
        title="Our Shows & Experiences"
        description="High-energy, audience-driven theatre experiences designed to entertain, inspire and connect."
      />

      <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className="group p-8 rounded-2xl bg-black border border-white/10 max-w-sm w-full hover:border-[#E6007E] transition-all duration-300"
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2,
              type: "spring",
              stiffness: 280,
              damping: 60,
            }}
          >
            <feature.icon className="size-10 text-[#E6007E] mb-6 group-hover:scale-110 transition-transform duration-300" />

            <h3 className="text-xl font-semibold text-white mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}