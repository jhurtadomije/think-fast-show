"use client";
import SectionTitle from '@/components/section-title';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function FaqSection() {

  const [isOpen, setIsOpen] = useState(null);

  const data = [
    {
      question: 'Is the show really improvised?',
      answer:
        "Yes. Every performance is completely unscripted. The audience provides the ideas and our performers create the scenes live on stage.",
    },
    {
      question: 'Is it suitable for corporate events?',
      answer:
        "Absolutely. We regularly perform at corporate events and offer tailored experiences for team building and company celebrations.",
    },
    {
      question: 'How long does a performance last?',
      answer:
        "A standard theatre show runs between 60 and 90 minutes. Corporate events can be adapted depending on your needs.",
    },
    {
      question: 'Can the show be customised?',
      answer:
        "Yes. For private events and organisations, we can adapt the format, themes and structure to suit your audience.",
    },
    {
      question: 'Do you perform outside Dublin?',
      answer:
        "Yes. While we are based in Dublin, we are available for performances across Ireland and internationally.",
    },
  ];

  return (
    <section className='mt-40 px-6'>
      <SectionTitle
        title="Frequently Asked Questions"
        description="Everything you need to know before booking the show."
      />

      <div className='mx-auto mt-16 space-y-6 w-full max-w-3xl'>
        {data.map((item, index) => (
          <motion.div
            key={index}
            className='flex flex-col rounded-2xl border border-white/10 bg-black hover:border-[#E6007E] transition-all duration-300'
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 280,
              damping: 60,
            }}
          >
            <h3
              className='flex cursor-pointer items-center justify-between gap-4 p-6 font-medium text-white'
              onClick={() => setIsOpen(isOpen === index ? null : index)}
            >
              {item.question}
              <ChevronDownIcon
                className={`size-5 transition-transform duration-300 ${
                  isOpen === index ? 'rotate-180 text-[#E6007E]' : ''
                }`}
              />
            </h3>

            <p
              className={`px-6 text-gray-400 leading-relaxed transition-all duration-300 overflow-hidden ${
                isOpen === index ? 'pb-6 max-h-96' : 'max-h-0'
              }`}
            >
              {item.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}