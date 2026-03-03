import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
    title: 'Think-Fast-Show - Live Improvised Theatre',
    description: 'Design AI assistants that research, plan, and execute tasks — all powered by your prompts.',
    appleWebApp: {
        title: 'Think-Fast-Show',
    },
};

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
