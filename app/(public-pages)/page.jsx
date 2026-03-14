import HeroSection from "@/sections/hero-section";
import AboutSection from "@/sections/about-section";
import TeamSection from "@/sections/team-section";
import WorkflowSteps from "@/sections/workflow-steps";
import Features from "@/sections/features";
import Testimonials from "@/sections/testimonials";
import FaqSection from "@/sections/faq-section";
import CallToAction from "@/sections/call-to-action";
import AgendaSection from "@/sections/agenda-section";
import LinksSection from "@/sections/links-section";

export default function Home() {
  return (
    <>
    <div id="top"> </div>
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <WorkflowSteps />
      <Features />
      <AgendaSection />
      <LinksSection />
      <Testimonials />
      <FaqSection />
      <CallToAction />
    </>
  );
}