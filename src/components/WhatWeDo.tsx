import React from 'react';
import { Check } from 'lucide-react';

const WhatWeDo: React.FC = () => {
    return (
        <section className="what-we-do-section" id="services">
            <div className="container">
                <h2 className="what-we-do-main-header">Stop manual research</h2>
                {/* Part 1: Minimalist Offers Grid */}
                <div className="offers-grid">
                    {/* Offer 1 */}
                    <div className="offer-card-minimal">
                        <div className="offer-content-main">
                            <div className="offer-tag-minimal">Instant Access</div>
                            <h2 className="offer-title-minimal">The Master Investor List</h2>
                            <p className="offer-desc-minimal">Lifetime access to our full database of 2,200+ active investors across all sectors and stages.</p>
                            <a href="#pricing" className="btn-get-started-minimal">Get access</a>
                        </div>
                        <div className="offer-details-minimal">
                            <div className="details-group">
                                <h4 className="details-label-minimal">What this includes</h4>
                                <ul className="minimal-list">
                                    <li><Check size={14} /> 2,200+ VCs & Angels</li>
                                    <li><Check size={14} /> Verified Partner Emails</li>
                                    <li><Check size={14} /> Sector & Stage Focus</li>
                                    <li><Check size={14} /> Full Portfolio History</li>
                                    <li><Check size={14} /> Direct LinkedIn/Twitter</li>
                                    <li><Check size={14} /> Lifetime free updates</li>
                                </ul>

                                <div className="data-fields-display">
                                    <h4 className="details-label-minimal" style={{ marginTop: '32px' }}>Database Columns</h4>
                                    <div className="data-fields-grid">
                                        {[
                                            "Investor Name", "Fund Type", "Fund Stage", "Website",
                                            "Fund Focus (Sectors)", "Partner Name", "Partner Email",
                                            "Portfolio Companies", "Location", "Twitter Link", "LinkedIn Link"
                                        ].map((field) => (
                                            <span key={field} className="data-field-tag">{field}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Offer 2 */}
                    <div className="offer-card-minimal">
                        <div className="offer-content-main">
                            <div className="offer-tag-minimal">Full Concierge</div>
                            <h2 className="offer-title-minimal">Bespoke Round Prospecting</h2>
                            <p className="offer-desc-minimal">We build a hand-picked list of 100 perfect-fit investors for your specific round and vertical.</p>
                            <a href="#pricing" className="btn-get-started-minimal">Enquire</a>
                        </div>
                        <div className="offer-details-minimal">
                            <div className="details-group">
                                <h4 className="details-label-minimal">What this includes</h4>
                                <ul className="minimal-list">
                                    <li><Check size={14} /> Deep-dive ICP analysis</li>
                                    <li><Check size={14} /> 100 high-intent prospects</li>
                                    <li><Check size={14} /> Warm intro strategy</li>
                                    <li><Check size={14} /> Outreach template review</li>
                                    <li><Check size={14} /> Weekly refinement calls</li>
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
                                How we curate <br />
                                high-quality <br />
                                investor data
                            </h3>
                            <p className="methodology-desc">
                                A rigorous verification process to ensure you never waste an email.
                            </p>
                        </div>
                    </div>

                    <div className="methodology-right">
                        <div className="step-card-minimal">
                            <div className="step-num-minimal">01</div>
                            <h4 className="step-title-minimal">Multi-Source Scraping</h4>
                            <p className="step-text-minimal">
                                We aggregate data from 20+ premium sources including Pitchbook, Crunchbase, and proprietary internal databases.
                            </p>
                        </div>

                        <div className="step-card-minimal">
                            <div className="step-num-minimal">02</div>
                            <h4 className="step-title-minimal">Human Verification</h4>
                            <p className="step-text-minimal">
                                Our data team manually verifies every contact email and investment thesis to ensure 99% deliverability.
                            </p>
                        </div>

                        <div className="step-card-minimal">
                            <div className="step-num-minimal">03</div>
                            <h4 className="step-title-minimal">Contextual Enrichment</h4>
                            <p className="step-text-minimal">
                                Every entry is enriched with 11+ key data points: Investor Name, Fund Type, Stage, Website, Sector Focus, Partner Name, Verified Email, Portfolio, Location, and Social Links.
                            </p>
                        </div>

                        <div className="step-card-minimal">
                            <div className="step-num-minimal">04</div>
                            <h4 className="step-title-minimal">Continuous Updates</h4>
                            <p className="step-text-minimal">
                                The VC landscape changes fast. We update our database every 30 days so you always have fresh leads.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
