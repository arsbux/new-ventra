import React from 'react';
import { Check, Shield } from 'lucide-react';

const Pricing: React.FC = () => {
    return (
        <section className="pricing-section" id="pricing">
            <div className="container pricing-container">
                <div className="pricing-intro">
                    <div className="pricing-label">
                        <span className="dot-prefix">●</span>
                        <span className="label">Simple Pricing</span>
                    </div>
                    <div className="pricing-header-content">
                        <h2 className="pricing-main-title">One-time investment, infinite reach</h2>
                        <p className="pricing-subtitle">Get the complete 2253 investor database and all bonuses for one flat fee.</p>
                    </div>
                </div>

                <div className="pricing-grid single-pricing-grid">
                    {/* Master List Card */}
                    <div className="pricing-card featured-pricing-card">
                        <div className="card-top-accent pro-accent"></div>
                        <div className="card-body">
                            <div className="card-badge-minimal">Complete Package</div>
                            <h3 className="card-plan-title">The Master List</h3>
                            <p className="card-plan-subtitle">Everything you need to close your round</p>
                            <p className="card-plan-desc">One-time download of the full 2253 investor database, outreach templates, and fundraising guides.</p>

                            <div className="card-price-container">
                                <div className="price-label">One-time</div>
                                <div className="price-value-row">
                                    <span className="price-currency">$</span>
                                    <span className="price-amount">59.99</span>
                                </div>
                            </div>

                            <ul className="pricing-features">
                                <li><Check size={14} /> Full 2253 Entry CSV (US & UK)</li>
                                <li><Check size={14} /> Filterable Master Google Sheet</li>
                                <li><Check size={14} /> Verified Partner & Fund Emails</li>
                                <li><Check size={14} /> 3 Cold Email Pitch Templates</li>
                                <li><Check size={14} /> Pre-Outreach Checklist</li>
                                <li><Check size={14} /> Quartery Update Access (3 Months)</li>
                            </ul>

                            <a href="https://whop.com/checkout/plan_p5uSJHbKbfM41" className="btn-pricing-cta">Get Instant Access</a>
                        </div>
                    </div>
                </div>

                <div className="refund-policy-simple">
                    <Shield size={18} style={{ marginRight: 8, color: '#666' }} />
                    <p>7-day refund if file cannot be downloaded or is corrupt. No refunds after successful download.</p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
