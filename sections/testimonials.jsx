import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {

    const ref = useRef([]);

    const data = [
        {
            review: "The proposed market entry strategy demonstrates strong potential for sustainable growth within the targeted European regions.",
            name: "Industry Expert",
            about: "International Business Consultant",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
        },
        {
            review: "The competitive positioning analysis highlights clear differentiation and a realistic expansion framework.",
            name: "Market Analyst",
            about: "Strategic Research Specialist",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
        },
        {
            review: "Customer validation results indicate strong interest and a viable demand forecast within the identified segments.",
            name: "Target Customer Representative",
            about: "Survey Participant",
            image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
        },
        {
            review: "The structured methodology ensures a data-driven approach aligned with international market standards.",
            name: "Academic Reviewer",
            about: "Business Strategy Lecturer",
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
        },
    ];

    return (
        <section className="mt-32 flex flex-col items-center">
            <SectionTitle
                title="Market Validation & Research Insights"
                description="Key findings, expert evaluations and representative feedback supporting the project’s strategic direction."
            />

            <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2'>
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        className='w-full max-w-96 space-y-5 rounded-lg glass p-5 hover:-translate-y-1'
                        initial={{ y: 150, opacity: 0 }}
                        ref={(el) => (ref.current[index] = el)}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        }}
                        onAnimationComplete={() => {
                            const card = ref.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <div className='flex items-center justify-between'>
                            <p className="font-medium">{item.about}</p>
                            <img className='size-10 rounded-full' src={item.image} alt={item.name} />
                        </div>

                        <p className='line-clamp-3'>“{item.review}”</p>

                        <p className='text-gray-300'>
                            - {item.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}