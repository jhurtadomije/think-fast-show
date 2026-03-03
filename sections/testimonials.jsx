"use client";
import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {

  const ref = useRef([]);

  const data = [
    {
      review:
        "I haven't laughed this much in years. The audience suggestions made every scene completely unpredictable and hilarious.",
      name: "Emma O'Connor",
      about: "Audience Member · Dublin",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      review:
        "We booked Think Fast Show for our company event and the team is still talking about it. Engaging, clever and incredibly fast-paced.",
      name: "James Murphy",
      about: "HR Manager · Corporate Client",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      review:
        "The performers are insanely talented. The way they build entire stories from one random word is just mind-blowing.",
      name: "Sarah Walsh",
      about: "Theatre Attendee",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    },
    {
      review:
        "Our team workshop was energetic, interactive and surprisingly insightful. A brilliant mix of fun and learning.",
      name: "Michael Byrne",
      about: "Event Organiser",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section id="validation" className="mt-40 flex flex-col items-center px-6">
      <SectionTitle
        title="What People Are Saying"
        description="Real reactions from audiences, companies and workshop participants."
      />

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="w-full space-y-6 rounded-2xl bg-black border border-white/10 p-8 hover:border-[#E6007E] transition-all duration-300"
            initial={{ y: 120, opacity: 0 }}
            ref={(el) => (ref.current[index] = el)}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2,
              type: "spring",
              stiffness: 280,
              damping: 60,
            }}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">{item.about}</p>
              <img
                className="size-12 rounded-full border border-white/20"
                src={item.image}
                alt={item.name}
              />
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              “{item.review}”
            </p>

            <p className="text-[#E6007E] font-medium">
              — {item.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}