import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GradientText from './GradientText';

const Hero: React.FC = () => {
    const { scrollYProgress } = useScroll();

    // Transform gradient colors to darker versions for light background
    // Initial colors: ["#CDCBFF", "#EFB5FF", "#BBD6FF", "#CDCBFF"]
    // Finale colors: ["#4B4696", "#9B46A6", "#4676B6", "#4B4696"]

    const color1 = useTransform(scrollYProgress, [0.4, 0.6], ["#CDCBFF", "#4B4696"]);
    const color2 = useTransform(scrollYProgress, [0.4, 0.6], ["#EFB5FF", "#9B46A6"]);
    const color3 = useTransform(scrollYProgress, [0.4, 0.6], ["#BBD6FF", "#4676B6"]);
    const color4 = useTransform(scrollYProgress, [0.4, 0.6], ["#CDCBFF", "#4B4696"]);

    return (
        <section className="hero-section" id="home">
            <div className="container hero-container">
                {/* Badge */}
                <motion.a
                    href="#contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-badge"
                    style={{ cursor: 'pointer', textDecoration: 'none' }}
                >
                    Book a free discovery call <ArrowRight size={14} style={{ marginLeft: 6 }} />
                </motion.a>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="hero-heading"
                >
                    <DynamicGradientWrapper colors={[color1, color2, color3, color4]}>
                        Do you need more clients?
                    </DynamicGradientWrapper>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-subheading"
                    style={{ color: 'var(--dynamic-text)', opacity: 0.7 }}
                >
                    For High-ticket B2B businesses, we bring in 15-50 clients every month.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <a href="#contact" className="btn-cta">Book a Call</a>
                </motion.div>

                {/* Features Grid */}
                <div className="features-grid">
                    <FeatureCard
                        title="Custom Outreach"
                        image="https://images.unsplash.com/photo-1664575198308-3959904fa430?q=80&w=2070&auto=format&fit=crop"
                        delay={0.4}
                    />
                    <FeatureCard
                        title="Paid Ads"
                        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                        delay={0.5}
                    />
                    <FeatureCard
                        title="Market Intelligence"
                        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
                        delay={0.6}
                    />
                    <FeatureCard
                        title="Campaign Success"
                        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
                        delay={0.7}
                    />
                </div>
            </div>
        </section>
    );
};

// Helper to pass motion values to GradientText
const DynamicGradientWrapper = ({ colors, children }: { colors: any[], children: React.ReactNode }) => {
    // We need to subscribe to the colors and force re-render or push them as template literals
    // But GradientText expects a string array.
    // Let's create a simpler version of GradientText that accepts motion values or just use CSS variables again.

    return (
        <GradientText
            colors={["var(--color-1)", "var(--color-2)", "var(--color-3)", "var(--color-4)"]}
            animationSpeed={8}
            showBorder={false}
        >
            <ColorUpdater colors={colors} />
            {children}
        </GradientText>
    );
};

const ColorUpdater = ({ colors }: { colors: any[] }) => {
    useEffect(() => {
        const unsubs = colors.map((c, i) =>
            c.on("change", (latest: string) => {
                document.documentElement.style.setProperty(`--color-${i + 1}`, latest);
            })
        );
        return () => unsubs.forEach(unsub => unsub());
    }, [colors]);
    return null;
};

import { useEffect } from 'react';

const FeatureCard = ({ title, image, delay }: { title: string, image: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -5 }}
        className="feature-card"
    >
        <div className="feature-card-title">{title}</div>
        <div className="feature-card-image-wrapper">
            <img src={image} alt={title} className="feature-card-image" />
            <div className="feature-card-overlay" />
        </div>
    </motion.div>
);

export default Hero;
