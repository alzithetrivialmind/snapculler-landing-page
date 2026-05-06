import React, { type ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a');
            if (!target) return;

            const href = target.getAttribute('href');
            if (href?.startsWith('#')) {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    lenis.scrollTo(element as HTMLElement, { offset: 0 });
                }
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            lenis.destroy();
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-foreground overflow-x-hidden">
            <Navbar />

            <main className="relative z-10 pt-20 md:pt-24 overflow-x-hidden">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
