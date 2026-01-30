import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    theme?: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ theme = 'dark' }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isLight = theme === 'light';

    return (
        <nav className={`navbar ${isLight ? 'navbar-light' : ''}`}>
            <div className="container navbar-container">
                <div className="logo">Ventra</div>

                <div className="nav-actions-desktop">
                </div>

                {/* Mobile Menu Icon */}
                <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <AnimatePresence mode="wait">
                        {isMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="mobile-menu-inner">
                            <motion.div
                                className="mobile-nav-links"
                                initial="closed"
                                animate="open"
                                variants={{
                                    open: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
                                    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                                }}
                            />

                            <motion.div
                                className="mobile-actions"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <a href="#pricing" className="btn-contact-mobile" onClick={() => setIsMenuOpen(false)}>Get Access</a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
