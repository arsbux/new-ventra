import React from 'react';
import { Check, FileText, Database, ShieldCheck, Zap, Mail } from 'lucide-react';

const WhatWeDo: React.FC = () => {
    return (
        <section className="what-we-do-section" id="services">
            <div className="container">
                {/* Overview Section */}
                <div className="overview-container">
                    <h2 className="section-title">Stop wasting weeks hunting for investors</h2>
                    <p className="section-description">
                        This curated rolodex gives you a launchpad for targeted outreach: 2253 funds and partners that actively fund early stage startups, organized and exportable so you can immediately build segmented outreach lists and start sending pitch decks.
                    </p>
                </div>

                {/* What's Included Section */}
                <div className="included-grid">
                    <div className="included-card">
                        <div className="icon-wrapper"><Database size={24} /></div>
                        <h3>investor_2253.csv</h3>
                        <p>Full dataset ready for import (2253 entries) into your CRM or email tool.</p>
                    </div>
                    <div className="included-card">
                        <div className="icon-wrapper"><Zap size={24} /></div>
                        <h3>Google Sheet</h3>
                        <p>Cleaned and filterable master file with tags for stage, sector, and location.</p>
                    </div>
                    <div className="included-card">
                        <div className="icon-wrapper"><FileText size={24} /></div>
                        <h3>Quickstart Guide</h3>
                        <p>Step-by-step on how to import, segment, and run a 50-email campaign.</p>
                    </div>
                    <div className="included-card">
                        <div className="icon-wrapper"><Mail size={24} /></div>
                        <h3>Outreach Templates</h3>
                        <p>3 proven cold email templates + follow up sequences and subject lines.</p>
                    </div>
                    <div className="included-card">
                        <div className="icon-wrapper"><ShieldCheck size={24} /></div>
                        <h3>Pitch Checklist</h3>
                        <p>Short pre-send checklist to increase your reply and response rates.</p>
                    </div>
                </div>

                {/* Database Fields Section */}
                <div className="fields-panel">
                    <h3 className="panel-subtitle">Every entry includes:</h3>
                    <div className="fields-flex">
                        {[
                            "Investor Name", "Fund Type", "Fund Stage", "Website",
                            "Fund Focus (Sectors)", "Partner Name", "Partner Email",
                            "Portfolio Companies", "Location", "Twitter Link", "LinkedIn Link"
                        ].map(field => (
                            <span key={field} className="field-pill">{field}</span>
                        ))}
                    </div>
                </div>

                <div className="benefits-how-to-grid">
                    {/* Why Founders Buy */}
                    <div className="benefit-column">
                        <h3 className="column-title">Why founders buy this</h3>
                        <ul className="benefit-list">
                            <li><Check size={18} /> Cuts investor research time from weeks to hours.</li>
                            <li><Check size={18} /> Enables hyper-targeted outreach by sector and stage.</li>
                            <li><Check size={18} /> Ready format for mail merges and CRM imports.</li>
                            <li><Check size={18} /> Consistent layout for shared team dashboards.</li>
                        </ul>
                    </div>

                    {/* How Buyers Use It */}
                    <div className="benefit-column">
                        <h3 className="column-title">How to use it</h3>
                        <ul className="usage-steps">
                            <li><strong>1. Filter</strong> by stage/sector to build a 50–100 prospect list.</li>
                            <li><strong>2. Personalize</strong> 1–2 lines referencing a portfolio company.</li>
                            <li><strong>3. Send</strong> a tailored cold email + one follow up using our templates.</li>
                            <li><strong>4. Segment</strong> by portfolio overlap to increase reply rates.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhatWeDo;
