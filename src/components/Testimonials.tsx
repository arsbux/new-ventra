import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        quote: "We were struggling to find the right VCs for our seed round. Ventra's list gave us 50 perfect matches in minutes. We closed in 3 weeks.",
        author: "Sarah J., Founder of Nexa AI",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format",
        position: 'center 10%',
        size: 'cover'
    },
    {
        id: 2,
        quote: "The manual research was killing our momentum. Having a vetted list of active angels with direct emails was a total game-changer for our Pre-Seed.",
        author: "Marcus T., CTO of Veridate",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format",
        position: 'center top',
        size: 'cover'
    },
    {
        id: 3,
        quote: "...it was crucial to keep getting clients and Ventra helped enabled a seamless partnership",
        author: "Nichole Wischoff, From Insight Evaluation Solutions",
        image: "/testimonials/nicole-wischoff.jpg",
        position: 'center 10%',
        size: 'cover'
    },
    {
        id: 4,
        quote: "...first month didn't go as planned but we made more than the retainer cost us.",
        author: "Lenny Rachitsky, Lenny's Newsletter",
        image: "/testimonials/Lenny.jpg",
        position: 'center'
    }
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0
    })
};

const Testimonials: React.FC = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [progress, setProgress] = useState(0);

    const index = Math.abs(page % testimonials.length);

    const paginate = useCallback((newDirection: number) => {
        setPage([page + newDirection, newDirection]);
        setProgress(0);
    }, [page]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    paginate(1);
                    return 0;
                }
                return prev + (100 / (7000 / 100));
            });
        }, 100);

        return () => clearInterval(interval);
    }, [paginate]);

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="slides-viewport" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.6 }
                        }}
                        className="testimonial-slide"
                    >
                        <div className="testimonial-bg" style={{
                            backgroundImage: `url(${testimonials[index].image})`,
                            backgroundPosition: (testimonials[index] as any).position || 'center',
                            backgroundSize: (testimonials[index] as any).size || 'cover'
                        }}>
                            <div className="testimonial-overlay" />
                        </div>

                        <div className="container testimonial-container">
                            <div className="testimonial-header">Testimonials</div>

                            <div className="testimonial-content">
                                <motion.h2
                                    className="testimonial-quote"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                >
                                    "{testimonials[index].quote}"
                                </motion.h2>
                                <motion.p
                                    className="testimonial-author"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                >
                                    {testimonials[index].author}
                                </motion.p>
                            </div>

                            <div className="testimonial-controls">
                                <button className="control-btn" onClick={() => paginate(-1)}>
                                    <ChevronLeft size={20} color="white" />
                                </button>
                                <button className="control-btn next-btn" onClick={() => paginate(1)}>
                                    <ChevronRight size={20} color="white" style={{ position: 'relative', zIndex: 10 }} />
                                    <svg className="progress-ring" width="60" height="60" viewBox="0 0 60 60">
                                        <circle
                                            className="progress-ring__circle"
                                            stroke="rgba(255,255,255,0.2)"
                                            strokeWidth="2"
                                            fill="transparent"
                                            r="26"
                                            cx="30"
                                            cy="30"
                                        />
                                        <motion.circle
                                            className="progress-ring__circle-progress"
                                            stroke="#ffffff"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            fill="transparent"
                                            r="26"
                                            cx="30"
                                            cy="30"
                                            style={{
                                                strokeDasharray: "163.36",
                                                strokeDashoffset: 163.36 - (163.36 * progress) / 100
                                            }}
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Testimonials;
