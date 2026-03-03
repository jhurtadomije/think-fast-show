"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";

const steps = [
  {
    id: 1,
    title: "You Give the Ideas",
    description:
      "The audience suggests characters, locations or crazy situations. No scripts. No filters. Pure imagination.",
    image: "/assets/workflow1.jpg",
  },
  {
    id: 2,
    title: "We Create Live on Stage",
    description:
      "Our performers transform your suggestions into fast-paced, hilarious scenes in real time.",
    image: "/assets/workflow2.jpg",
  },
  {
    id: 3,
    title: "Every Show Is Unique",
    description:
      "No two performances are ever the same. Every night is a brand new experience driven by the audience.",
    image: "/assets/workflow3.jpg",
  },
];

export default function WorkflowSteps() {
  return (
    <section id="methodology" className="mt-40 px-6">
      <SectionTitle
        title="How It Works"
        description="Fast thinking. Instant creativity. A live experience shaped entirely by the audience."
      />

      <div className="mt-20">
        <div className="space-y-28">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0; // 0,2 => imagen izq / texto der
            const isFirst = index === 0;
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={step.id}
                className="grid grid-cols-1 md:grid-cols-[1fr_96px_1fr] items-center gap-8 md:gap-12"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 260,
                  damping: 55,
                }}
              >
                {/* LEFT */}
                <div className="order-2 md:order-1">
                  {isEven ? (
                    <div className="md:justify-self-end">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full md:w-[520px] rounded-3xl border border-white/10 object-cover"
                      />
                    </div>
                  ) : (
                    <div className="md:pr-10 md:text-right md:justify-self-end max-w-xl">
                      <h3 className="text-3xl font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mt-4">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* CENTER TIMELINE */}
                <div className="order-1 md:order-2 relative hidden md:flex flex-col items-center">
                  {/* line top */}
                  {!isFirst && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/25 to-[#E6007E]" />
                  )}

                  {/* circle */}
                  <div className="z-10 w-14 h-14 flex items-center justify-center rounded-full border border-[#E6007E] text-[#E6007E] font-bold bg-black">
                    0{step.id}
                  </div>

                  {/* line bottom */}
                  {!isLast && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1/2 w-[2px] bg-gradient-to-b from-[#E6007E] via-white/25 to-transparent" />
                  )}
                </div>

                {/* RIGHT */}
                <div className="order-3">
                  {isEven ? (
                    <div className="md:pl-10 md:justify-self-start max-w-xl">
                      <h3 className="text-3xl font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mt-4">
                        {step.description}
                      </p>
                    </div>
                  ) : (
                    <div className="md:justify-self-start">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full md:w-[520px] rounded-3xl border border-white/10 object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* MOBILE NUMBER (simple) */}
                <div className="md:hidden order-1 flex justify-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E6007E] text-[#E6007E] font-bold bg-black">
                    0{step.id}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}