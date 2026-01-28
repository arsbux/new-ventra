import React from 'react';
import { Check } from 'lucide-react';

const WhatWeDo: React.FC = () => {
    return (
        <section className="what-we-do-section" id="services">
            <div className="container">
                <h2 className="what-we-do-main-header">How we get results</h2>
                {/* Part 1: Minimalist Offers Grid */}
                <div className="offers-grid">
                    {/* Offer 1 */}
                    <div className="offer-card-minimal">
                        <div className="offer-content-main">
                            <div className="offer-tag-minimal">Offer 1</div>
                            <h2 className="offer-title-minimal">Outbound Client Acquisition</h2>
                            <p className="offer-desc-minimal">Qualified B2B buyer meetings booked on your calendar through high-intent multi-channel outreach.</p>
                            <a href="#contact" className="btn-get-started-minimal">Get started</a>
                        </div>
                        <div className="offer-details-minimal">
                            <div className="details-group">
                                <h4 className="details-label-minimal">What this includes</h4>
                                <ul className="minimal-list">
                                    <li><Check size={14} /> ICP definition</li>
                                    <li><Check size={14} /> Prospect sourcing</li>
                                    <li><Check size={14} /> Messaging & positioning</li>
                                    <li><Check size={14} /> Multi-channel outbound</li>
                                    <li><Check size={14} /> Human qualification</li>
                                    <li><Check size={14} /> Calendar booking</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Offer 2 */}
                    <div className="offer-card-minimal">
                        <div className="offer-content-main">
                            <div className="offer-tag-minimal">Offer 2</div>
                            <h2 className="offer-title-minimal">Paid Ads</h2>
                            <p className="offer-desc-minimal">High-performance campaigns across Facebook, Google, TikTok, and more, optimized for B2B buyer meetings.</p>
                            <a href="#contact" className="btn-get-started-minimal">Get started</a>
                        </div>
                        <div className="offer-details-minimal">
                            <div className="details-group">
                                <h4 className="details-label-minimal">What this includes</h4>
                                <ul className="minimal-list">
                                    <li><Check size={14} /> Funnel strategy</li>
                                    <li><Check size={14} /> Ad setup & management</li>
                                    <li><Check size={14} /> Conversion tracking</li>
                                    <li><Check size={14} /> Lead qualification</li>
                                    <li><Check size={14} /> Calendar booking</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Part 2: Sticky Scroll Methodology */}
                <div className="methodology-container">
                    <div className="methodology-left">
                        <div className="sticky-title">
                            <span className="dot-prefix">●</span>
                            <span className="label">Our Methodology</span>
                            <h3 className="methodology-main-title">
                                Our Outbound system <br />
                                to get you a steady <br />
                                flow of clients
                            </h3>
                            <p className="methodology-desc">
                                A battle-tested process designed to deliver ready-to-close meetings directly to your team.
                            </p>
                        </div>
                    </div>

                    <div className="methodology-right">
                        <div className="step-card-minimal">
                            <div className="step-num-minimal">01</div>
                            <h4 className="step-title-minimal">Nail the ICP</h4>
                            <p className="step-text-minimal">
                                We define exactly who they are, identify key industries, understand their current state,
                                find where they hang out, and determine the best outreach method.
                            </p>
                        </div>

                        <div className="step-card-minimal">
                            <div className="step-num-minimal">02</div>
                            <h4 className="step-title-minimal">Finding Prospects</h4>
                            <p className="step-text-minimal">
                                Advanced lead generation using premium data sources and proprietary tools
                                to build a list of high-intent decision makers.
                            </p>
                        </div>

                        <div className="step-card-minimal">
                            <div className="step-num-minimal">03</div>
                            <h4 className="step-title-minimal">Start Outreach One-by-One</h4>
                            <p className="step-text-minimal">
                                Personalized, value-driven outreach. We don't blast. We engage one-by-one,
                                primarily through cold email and LinkedIn.
                            </p>
                        </div>

                        <div className="step-card-minimal">
                            <div className="step-num-minimal">04</div>
                            <h4 className="step-title-minimal">Book Straight in Calendar</h4>
                            <p className="step-text-minimal">
                                No friction. We handle the qualification and the back-and-forth,
                                delivering ready-to-close meetings directly to your sales team.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
