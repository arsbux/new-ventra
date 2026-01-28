import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Partners from './Partners';
import Testimonials from './Testimonials';
import WhatWeDo from './WhatWeDo';
import Pricing from './Pricing';
import Contact from './Contact';
import Footer from './Footer';

const Home: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const handleScroll = () => {
            const partnersPanel = document.querySelector('.partners-slide-panel');
            const testimonialsSection = document.querySelector('.testimonials-section');
            const whatWeDoSection = document.querySelector('.what-we-do-section');

            let currentTheme: 'light' | 'dark' = 'dark';

            if (partnersPanel) {
                const rect = partnersPanel.getBoundingClientRect();
                if (rect.top <= 80 && rect.bottom >= 80) {
                    currentTheme = 'light';
                }
            }

            if (testimonialsSection) {
                const rect = testimonialsSection.getBoundingClientRect();
                if (rect.top <= 80 && rect.bottom >= 80) {
                    currentTheme = 'dark';
                }
            }

            if (whatWeDoSection) {
                const rect = whatWeDoSection.getBoundingClientRect();
                if (rect.top <= 80 && rect.bottom >= 80) {
                    currentTheme = 'light';
                }
            }

            const pricingSection = document.querySelector('.pricing-section');
            if (pricingSection) {
                const rect = pricingSection.getBoundingClientRect();
                if (rect.top <= 80 && rect.bottom >= 80) {
                    currentTheme = 'dark';
                }
            }

            const contactSection = document.querySelector('.contact-section');
            if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                if (rect.top <= 80 && rect.bottom >= 80) {
                    currentTheme = 'light';
                }
            }

            const footerSection = document.querySelector('.site-footer');
            if (footerSection) {
                const rect = footerSection.getBoundingClientRect();
                if (rect.top <= 80) {
                    currentTheme = 'dark';
                }
            }

            setTheme(currentTheme);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`app-container ${theme}-theme`}>
            <Navbar theme={theme} />
            <main>
                <Hero />
                <Partners />
                <Testimonials />
                <WhatWeDo />
                <Pricing />
                <Contact />
            </main>
            <Footer />

            <div className="bg-texture" />

            <style dangerouslySetInnerHTML={{
                __html: `
        .app-container {
          position: relative;
          min-height: 100vh;
          background-color: rgb(0, 29, 33);
        }

        .bg-texture {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3000;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}} />
        </div>
    );
};

export default Home;
