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
                            <h3 className="fund-title">Full Service Client Acquisition</h3>

                            <div className="service-items-wrapper">
                                <div className="service-item"><strong>Outbound</strong> — Targeted LinkedIn + cold email sequences, human qualification, calendar booking.</div>
                                <div className="service-item"><strong>Paid Ads</strong> — LinkedIn / Google / Meta / Tiktok, conversion tracking, lead-to-meeting booking.</div>
                                <div className="service-item"><strong>Transparency</strong> — Weekly activity logs, message copies, buyer intake answers, and meeting confirmations.</div>
                                <div className="service-item"><strong>Guarantee</strong> — If our 30-day pilot target isn't met, you get credit or continued service until we deliver.</div>
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
