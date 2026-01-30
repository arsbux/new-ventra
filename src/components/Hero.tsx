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
                <div className="hero-content-wrapper">
                    <div className="hero-left">
                        {/* Badge */}
                        <motion.a
                            href="#pricing"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="hero-badge"
                            style={{ cursor: 'pointer', textDecoration: 'none' }}
                        >
                            Fundraising season is here <ArrowRight size={14} style={{ marginLeft: 6 }} />
                        </motion.a>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="hero-heading"
                        >
                            <DynamicGradientWrapper colors={[color1, color2, color3, color4]}>
                                Skip the research. Find your lead investor.
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
                            A well-curated database of 2,200+ active VCs, Angels, and PE firms with direct contact emails and investment thesis.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <a href="#pricing" className="btn-cta">Get Instant Access</a>
                        </motion.div>
                    </div>

                    <div className="hero-right">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="hero-image-container"
                        >
                            <img src="/vc-table.png" alt="Investor Database Table" className="hero-table-image" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper to pass motion values to GradientText
const DynamicGradientWrapper = ({ colors, children }: { colors: any[], children: React.ReactNode }) => {
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

export default Hero;
