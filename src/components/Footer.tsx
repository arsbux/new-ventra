import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="logo">ventra</div>
                        <p className="footer-tagline">
                            High-performance client acquisition for <br />
                            modern B2B brands and businesses.
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-label">Contact</div>
                        <div className="footer-emails">
                            <a href="mailto:hello@tryventra.com" className="footer-email-link">
                                <Mail size={16} />
                                hello@tryventra.com
                            </a>
                            <a href="mailto:keith@tryventra.com" className="footer-email-link">
                                <Mail size={16} />
                                keith@tryventra.com
                            </a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-label">Navigation</div>
                        <ul className="footer-nav">
                            <li><a href="#services">Services</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><Link to="/case-study">Case Study</Link></li>
                            <li><a href="#contact">Book a call</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        © {currentYear} Ventra. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
