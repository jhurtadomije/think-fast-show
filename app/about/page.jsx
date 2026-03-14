"use client";

import { motion } from "framer-motion";
import { Zap, Users, Sparkles, Rocket } from "lucide-react";
import Link from "next/link";

const values = [
  {
    title: "Spontaneity",
    text: "We thrive on the unexpected. Opportunities arise from uncertainty, and every action happens in the moment.",
    icon: Zap,
  },
  {
    title: "Connection",
    text: "We believe theatre is a shared experience. We encourage genuine interaction between artists and audiences, whether in person or virtually.",
    icon: Users,
  },
  {
    title: "Creativity",
    text: "Our driving force is imagination. We turn simple ideas into memorable and dynamic stories.",
    icon: Sparkles,
  },
  {
    title: "Innovation",
    text: "We utilise event technologies and live streaming formats to expand the boundaries of live entertainment.",
    icon: Rocket,
  },
];

const team = [
  {
    name: "Carlota Tenas",
    role: "Actress (Marketing and communication)",
    image: "/assets/team/carlota.png",
    position: "center 10%",
    zoom: "scale-[1.3]",
  },
  {
    name: "Marta Torres Moreno",
    role: "Actress (Human resources and administration)",
    image: "/assets/team/marta.png",
    position: "center 20%",
    zoom: "scale-[1.3]",
  },
  {
    name: "Mireia Casco",
    role: "Actress (Executive production)",
    image: "/assets/team/mireia.png",
    position: "center 18%",
    zoom: "scale-[1.3]",
  },
  {
    name: "Natalia Salmerón",
    role: "Actress (General management)",
    image: "/assets/team/nata.png",
    position: "center 18%",
    zoom: "scale-[1.3]",
  },
];

export default function AboutPage() {
  return (
    <section className="relative min-h-screen px-6 py-32 bg-black text-white overflow-hidden">
      {/* Fondo teatral suave */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-stage.jpeg"
          alt=""
          className="w-full h-full object-cover blur-2xl opacity-20 scale-110"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-32">
        {/* HERO */}
        <motion.div
          className="text-center"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <p className="uppercase tracking-widest text-sm text-[#E6007E] mb-4">
            Our Story
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold">
            Built on spontaneity.
          </h1>
        </motion.div>

        {/* INTRO SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>
              <strong className="text-white">THINK FAST SHOW</strong> is a new
              live entertainment concept in Dublin that focuses on spontaneity,
              intimacy and pure talent.
            </p>

            <p>
              We are a team of actors specialising in improvisation who make
              every performance a unique experience.
            </p>

            <p className="text-[#E6007E] font-semibold text-xl">
              Here, anything can happen… and it happens fast.
            </p>
          </motion.div>

          <motion.img
            src="/assets/about-intro.png"
            alt="Improvisation on stage"
            className="rounded-3xl border border-white/10"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          />
        </div>

        {/* MISSION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.img
            src="/assets/about-mission.png"
            alt="Audience interaction"
            className="rounded-3xl border border-white/10 order-2 md:order-1"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          />

          <motion.div
            className="space-y-6 order-1 md:order-2"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              To create memorable improvisational theatre experiences, live or
              via streaming, celebrating connection, talent and spontaneity.
            </p>
          </motion.div>
        </div>

        {/* VISION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              To redefine live entertainment in the digital age, where theatre
              transcends physical space and technology enhances connection.
            </p>
          </motion.div>

          <motion.img
            src="/assets/about-vision.png"
            alt="Streaming live performance"
            className="rounded-3xl border border-white/10"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          />
        </div>

        {/* VALUES */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-16">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="text-[#E6007E] mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* OUR TEAM */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-center mb-16">Our Team</h2>

          <div className="grid md:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl text-center transition hover:bg-white/10 hover:scale-[1.03]"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.04 }}
              >
                <div className="relative w-36 h-36 mx-auto mb-6">
                  {/* glow teatral */}
                  <div className="absolute inset-0 rounded-full bg-[#E6007E]/10 blur-2xl"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ objectPosition: member.position }}
                    className={`relative w-full h-full object-cover rounded-full ring-2 ring-white/20 ${member.zoom}`}
                  />
                  
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {member.name}
                </h3>

                <p className="text-gray-400 text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="mt-24 text-center">
          <Link
            href="/#top"
            className="inline-block px-8 py-4 rounded-full bg-[#E6007E] hover:bg-[#ff2aa3] transition text-white font-medium"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
