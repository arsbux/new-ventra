import React from 'react';

const Pricing: React.FC = () => {
    return (
        <section className="pricing-section" id="pricing">
            <div className="container pricing-container">
                <div className="pricing-intro">
                    <div className="pricing-label">
                        <span className="dot-prefix">●</span>
                        <span className="label">Offerings</span>
                    </div>
                    <div className="pricing-header-content">
                        <h2 className="pricing-main-title">Focused acquisition, transparent pricing</h2>
                        <p className="pricing-subtitle">Execution-first service with plans built for scaling high-ticket brands.</p>
                    </div>
                </div>

                <div className="pricing-grid">
                    {/* The Master List Card */}
                    <div className="pricing-card">
                        <div className="card-top-accent traditional-accent"></div>
                        <div className="card-body">
                            <h3 className="card-plan-title">The Master List</h3>
                            <p className="card-plan-subtitle">Ideal for early-stage founders</p>
                            <p className="card-plan-desc">Instant access to our full 5,000+ investor database with direct contact emails and thesis details.</p>

                            <div className="card-price-container">
                                <div className="price-label">One-time</div>
                                <div className="price-value-row">
                                    <span className="price-currency">$</span>
                                    <span className="price-amount">499</span>
                                    <span className="price-period">lifetime access</span>
                                </div>
                            </div>

                            <a href="#contact" className="btn-pricing-cta">Get Instant Access</a>
                        </div>
                    </div>

                    {/* Bespoke Sourcing Card */}
                    <div className="pricing-card featured-pricing-card">
                        <div className="card-top-accent paid-accent"></div>
                        <div className="card-body">
                            <div className="card-badge-minimal">Recommended</div>
                            <h3 className="card-plan-title">Bespoke Sourcing</h3>
                            <p className="card-plan-subtitle">Ideal for Series A+ rounds</p>
                            <p className="card-plan-desc">We hand-pick 200 perfect-fit investors for your specific round, vertical, and geography. Includes warm intro strategy.</p>

                            <div className="card-price-container">
                                <div className="price-label">Starting at</div>
                                <div className="price-value-row">
                                    <span className="price-currency">$</span>
                                    <span className="price-amount">1,499</span>
                                    <span className="price-period">per round</span>
                                </div>
                            </div>

                            <a href="#contact" className="btn-pricing-cta">Enquire Now</a>
                        </div>
                    </div>
                </div>

                <p className="pricing-fine-print">All plans include dedicated account management, multi-channel setup, and weekly optimization reports. Custom enterprise plans available upon request.</p>
            </div>
        </section>
    );
};

export default Pricing;
