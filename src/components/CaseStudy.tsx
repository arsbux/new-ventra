import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const CaseStudy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="case-study-blog-wrapper">
            <Navbar theme="light" />

            <article className="case-study-article">
                <header className="article-header">
                    <div className="container">
                        <div className="back-link-wrapper">
                            <Link to="/" className="back-to-home">
                                <ArrowLeft size={16} /> Back
                            </Link>
                        </div>
                        <div className="header-content-centered">
                            <div className="article-category">Case Study</div>
                            <h1 className="article-title">
                                How Nexa AI closed their Seed round in 3 weeks using Ventra's curated investor list
                            </h1>
                            <div className="article-meta">
                                <div className="meta-block">
                                    <span className="meta-label">Client</span>
                                    <span className="meta-value">Nexa AI</span>
                                </div>
                                <div className="meta-block">
                                    <span className="meta-label">Focus</span>
                                    <span className="meta-value">Seed Fundraising</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="featured-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop" alt="Nexa AI Case Study" className="featured-image" />
                </div>

                <div className="article-content">
                    <div className="container container-content">
                        <section className="article-section">
                            <p className="lead-text">
                                Nexa AI, a Silicon Valley-based startup, needed to find the right investors for their highly specialized Seed round.
                                They were wasting weeks on manual research and hitting dead ends with outdated spreadsheets.
                            </p>
                            <div className="result-highlight-card">
                                <h3>The Outcome</h3>
                                <p>Instead of months of research, Nexa used Ventra's curated list to identify <strong>50 perfect-fit VCs</strong> on day one. They secured 12 meetings in week one and closed their <strong>$2M Seed round</strong> within 21 days.</p>
                            </div>
                        </section>

                        <section className="article-section">
                            <h2>The Challenge</h2>
                            <p>Founders often spend 50% of their time just finding who to talk to. Nexa AI was no different. They had a great product but didn't have the network. Conventional databases were too expensive or filled with generic, outdated information that led to low response rates.</p>
                        </section>

                        <section className="article-section">
                            <h2>Ventra's Approach</h2>
                            <p>We provided Nexa with a bespoke slice of our master database, filtered specifically for AI-focused Seed investors with a track record of lead investments in 2024-2025.</p>
                            <div className="methodology-steps">
                                <div className="m-step">
                                    <span className="m-num">01</span>
                                    <div className="m-text">
                                        <strong>Targeted Filtering</strong> — We narrowed down 2253 investors to the top 100 based on Nexa's vertical and stage.
                                    </div>
                                </div>
                                <div className="m-step">
                                    <span className="m-num">02</span>
                                    <div className="m-text">
                                        <strong>Direct Access</strong> — Every contact came with a verified, direct email address, bypassing the generic "info@" inboxes.
                                    </div>
                                </div>
                                <div className="m-step">
                                    <span className="m-num">03</span>
                                    <div className="m-text">
                                        <strong>Thesis Insights</strong> — We provided the exact investment thesis for each partner, allowing Nexa to personalize every pitch.
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="article-section">
                            <blockquote className="blog-blockquote">
                                "The manual research was a black hole. Ventra's list was the shortcut we needed to get in front of the right people immediately. It paid for itself a thousand times over."
                                <cite>— Sarah J., Nexa AI</cite>
                            </blockquote>
                        </section>

                        <section className="article-section final-cta-section">
                            <div className="final-cta-card">
                                <h2>Ready to start your outreach?</h2>
                                <p>Get instant access to the same database used by Nexa AI and start closing your round today.</p>
                                <a href="https://whop.com/checkout/plan_p5uSJHbKbfM41" className="btn-final-cta">
                                    Get Instant Access <ArrowRight size={18} />
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default CaseStudy;
