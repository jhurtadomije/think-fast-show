import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
    title: 'Think-Fast-Show - Live Improvised Theatre',
    description: 'Think Fast is a high-energy live improvised theatre show. Fast thinking, fearless comedy, and unforgettable unscripted moments. Every performance is completely improvised, driven by audience suggestions.',
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
