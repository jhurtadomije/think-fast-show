"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="relative min-h-screen px-6 py-32 bg-black text-white overflow-hidden">
      {/* Fondo desenfocado */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-stage.jpeg"
          alt=""
          className="w-full h-full object-cover blur-2xl opacity-20 scale-110"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {!submitted ? (
          <>
            <motion.p
              className="uppercase tracking-widest text-sm text-[#E6007E] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Booking Request
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl font-semibold"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              Book a Live Show
            </motion.h1>

            <motion.p
              className="text-gray-400 mt-6 mb-12"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              Tell us about your event and we’ll get back to you within 24
              hours.
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 text-left bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#E6007E]"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#E6007E]"
              />

              <select
                required
                className="w-full bg-white/5 text-white border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#E6007E]"
              >
                <option value="" className="bg-black text-white">
                  Event Type
                </option>
                <option className="bg-black text-white">Corporate Event</option>
                <option className="bg-black text-white">Private Party</option>
                <option className="bg-black text-white">School</option>
                <option className="bg-black text-white">Theatre Venue</option>
              </select>

              <input
                type="date"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E6007E]"
              />

              <textarea
                rows="4"
                placeholder="Tell us about your event..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#E6007E]"
              />

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-[#E6007E] hover:scale-105 transition rounded-full py-4 font-medium flex items-center justify-center"
                >
                  {loading ? "Sending..." : "Submit Booking Request"}
                </button>

                <Link
                  href="/"
                  className="flex-1 border border-white/20 rounded-full py-4 text-center hover:bg-white/10 transition"
                >
                  Back to Home
                </Link>
              </div>
            </motion.form>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center bg-black/40 backdrop-blur-xl border border-white/10 p-12 rounded-3xl"
          >
            <h2 className="text-4xl font-semibold text-[#E6007E]">
              🎉 Request Sent!
            </h2>

            <p className="mt-6 text-gray-400">
              Thanks for reaching out. We’ll contact you shortly to confirm
              details.
            </p>

            <a
              href="/"
              className="inline-block mt-10 border border-white/20 px-8 py-3 rounded-full hover:bg-white/10 transition"
            >
              Back to Home
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
