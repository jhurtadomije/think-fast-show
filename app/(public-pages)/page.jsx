'use client';

import CallToAction from '@/sections/call-to-action';
import Features from '@/sections/features';
import HeroSection from '@/sections/hero-section';
import Testimonials from '@/sections/testimonials';
import WorkflowSteps from '@/sections/workflow-steps';

export default function Page() {
    return (
        <main className='px-4'>
            <HeroSection />
            <Features />
            <WorkflowSteps />
            <Testimonials />
            <CallToAction />
        </main>
    );
}
