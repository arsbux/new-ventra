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
                    {/* B2B Outbound Card */}
                    <div className="pricing-card">
                        <div className="card-top-accent traditional-accent"></div>
                        <div className="card-body">
                            <h3 className="card-plan-title">B2B Outbound</h3>
                            <p className="card-plan-subtitle">Ideal for sales-led B2B organizations</p>
                            <p className="card-plan-desc">Fully managed outreach targeting decision makers at your dream accounts with precision and human qualification.</p>

                            <div className="card-price-container">
                                <div className="price-label">Initial</div>
                                <div className="price-value-row">
                                    <span className="price-currency">$</span>
                                    <span className="price-amount">1,500</span>
                                    <span className="price-period">for first month</span>
                                </div>
                            </div>

                            <a href="#contact" className="btn-pricing-cta">Talk to an expert</a>
                        </div>
                    </div>

                    {/* Paid Ads Card */}
                    <div className="pricing-card featured-pricing-card">
                        <div className="card-top-accent paid-accent"></div>
                        <div className="card-body">
                            <div className="card-badge-minimal">Popular choice</div>
                            <h3 className="card-plan-title">Paid Ads</h3>
                            <p className="card-plan-subtitle">Ideal for non-B2B businesses & B2C</p>
                            <p className="card-plan-desc">High-conversion performance campaigns across Meta, Google, and TikTok to drive consistent volume and scale.</p>

                            <div className="card-price-container">
                                <div className="price-label">Monthly</div>
                                <div className="price-value-row">
                                    <span className="price-currency">$</span>
                                    <span className="price-amount">2,000</span>
                                    <span className="price-period">/ month</span>
                                </div>
                            </div>

                            <a href="#contact" className="btn-pricing-cta">Talk to an expert</a>
                        </div>
                    </div>
                </div>

                <p className="pricing-fine-print">All plans include dedicated account management, multi-channel setup, and weekly optimization reports. Custom enterprise plans available upon request.</p>
            </div>
        </section>
    );
};

export default Pricing;
