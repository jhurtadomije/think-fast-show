"use client";
import SectionTitle from "@/components/section-title";
import { CheckIcon, SparklesIcon, UsersIcon, StarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function PricingPlans() {
  const ref = useRef([]);

  const data = [
    {
      icon: SparklesIcon,
      title: "Theatre Show",
      description:
        "A high-energy live improvised performance for theatres and live audiences.",
      buttonText: "Book This Show",
      features: [
        "Audience-driven scenes",
        "Fast-paced improvisation",
        "Live interactive format",
        "Suitable for all audiences",
      ],
    },
    {
      icon: UsersIcon,
      title: "Corporate Experience",
      mostPopular: true,
      description:
        "Interactive impro shows and workshops tailored for corporate events and team building.",
      buttonText: "Request Proposal",
      features: [
        "Team engagement",
        "Communication & creativity focus",
        "Customised content",
        "On-site or theatre venue",
      ],
    },
    {
      icon: StarIcon,
      title: "Workshops & Masterclasses",
      description:
        "Hands-on training sessions exploring confidence, spontaneity and storytelling.",
      buttonText: "Enquire Now",
      features: [
        "Practical exercises",
        "Confidence building",
        "Public speaking skills",
        "Creativity development",
      ],
    },
  ];

  return (
    <section id="validation" className="mt-40 px-6">
      <SectionTitle
        title="Show Packages"
        description="Flexible performance formats designed for theatres, events and organisations."
      />

      <div className="mt-16 flex flex-wrap items-center justify-center gap-10">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`group w-full max-w-sm p-8 rounded-3xl border ${
              item.mostPopular
                ? "border-[#E6007E] bg-black"
                : "border-white/10 bg-black"
            } hover:border-[#E6007E] transition-all duration-300`}
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2,
              type: "spring",
              stiffness: 280,
              damping: 60,
            }}
            ref={(el) => (ref.current[index] = el)}
          >
            {/* Badge */}
            <div className="flex items-center gap-2 text-[#E6007E] mb-6">
              <item.icon className="size-5" />
              <span className="uppercase tracking-wider text-sm font-semibold">
                {item.title}
              </span>
            </div>

            <p className="text-gray-400 mb-8 leading-relaxed">
              {item.description}
            </p>

            <button
              className={`w-full py-3 rounded-full font-medium transition ${
                item.mostPopular
                  ? "bg-[#E6007E] text-white hover:opacity-90"
                  : "border border-white/20 hover:border-[#E6007E]"
              }`}
            >
              {item.buttonText}
            </button>

            <div className="mt-8 space-y-3">
              {item.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckIcon
                    className="size-4 text-[#E6007E]"
                    strokeWidth={3}
                  />
                  <p className="text-gray-400">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}