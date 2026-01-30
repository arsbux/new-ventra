import React from 'react';

const Partners: React.FC = () => {
    return (
        <section className="partners-outer-wrapper">
            <div className="partners-slide-panel">
                <div className="container partners-container">
                    <h2 className="partners-title">
                        Better together. Ventra partners with industry leaders.
                    </h2>



                    <div className="fund-management-card">
                        <div className="fund-content">
                            <h3 className="fund-title">Full Service Fundraising Support</h3>

                            <div className="service-items-wrapper">
                                <div className="service-item"><strong>Tailored Lists</strong> — We filter our 5,000+ database into a high-intent list of 100+ investors perfectly matched to your round.</div>
                                <div className="service-item"><strong>Direct Contacts</strong> — No gatekeepers. Get verified direct emails of partners and principals with a 99% deliverability rate.</div>
                                <div className="service-item"><strong>Thesis Enrichment</strong> — Go beyond the name. We provide recent investment history and the specific thesis of every investor.</div>
                                <div className="service-item"><strong>Pitch Support</strong> — Get access to our library of winning pitch decks and outreach templates that have raised $500M+.</div>
                            </div>
                        </div>
                        <div className="fund-image-composite">
                            <img src="/full-service.png" alt="Full service client acquisition" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
