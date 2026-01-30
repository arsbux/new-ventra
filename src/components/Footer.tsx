import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="logo">ventra</div>
                        <p className="footer-tagline">
                            Stop wasting hours hunting for the right investors. <br />
                            A curated launchpad for targeted outreach.
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
