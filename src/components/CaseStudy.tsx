import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const CaseStudy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        // Initialize Cal.com embed for case study
        (function (C: any, A: any, L: any) {
            let p = function (a: any, ar: any) {
                a.q.push(ar);
            };
            let d = C.document;
            C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                }
                if (ar[0] === L) {
                    const api = function () {
                        p(api, arguments);
                    };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        return;
                    }
                    p(cal, ar);
                    return;
                }
                p(cal, ar);
            };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        (window as any).Cal("init", "discoverycall", { origin: "https://cal.com" });
        (window as any).Cal("inline", {
            elementOrSelector: "#my-cal-inline-casestudy",
            calLink: "tryventra/discoverycall",
            layout: "month_view"
        });
        (window as any).Cal("ui", {
            theme: "light",
            styles: { branding: { brandColor: "#000000" } },
            hideEventTypeDetails: false,
            layout: "month_view"
        });
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
                                How Ventra turned inconsistent client flow into repeatable meetings and real revenue
                            </h1>
                            <div className="article-meta">
                                <div className="meta-block">
                                    <span className="meta-label">Client</span>
                                    <span className="meta-value">Insight Evaluation Solutions</span>
                                </div>
                                <div className="meta-block">
                                    <span className="meta-label">Focus</span>
                                    <span className="meta-value">Outbound Growth</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="featured-image-wrapper">
                    <img src="/testimonials/nicole-wischoff.jpg" alt="Insight Evaluation Solutions Case Study" className="featured-image" />
                </div>

                <div className="article-content">
                    <div className="container container-content">
                        <section className="article-section">
                            <p className="lead-text">
                                Insight Evaluation Solutions is a Business consultant Company in the United States, they needed a steady stream of paying clients, not just leads.
                                The Ventra team ran a focused 30-day pilot that combined targeted outreach, human qualification, and calendar booking.
                            </p>
                            <div className="result-highlight-card">
                                <h3>The Outcome</h3>
                                <p>We managed to book in <strong>nine appointments within week two</strong>, and two of which converted into ongoing engagements totaling <strong>~$18k in contracted work</strong> this quarter.</p>
                            </div>
                        </section>

                        <section className="article-section">
                            <h2>The Challenge</h2>
                            <p>Insight Evaluation Solutions had a proven service and past sales, but inconsistent new client flow. They had limited internal bandwidth to run high-quality outbound at scale and were skeptical about agency pilots after being burned by vague "lead" offers in the past.</p>
                            <p>They needed a predictable pipeline of qualified, buyer-side meetings with decision-makers that fit their price band and buying timeline.</p>
                        </section>

                        <section className="article-section">
                            <h2>Ventra's Approach</h2>
                            <p>We designed a short, measurable experiment focused on outcome and transparency. This mix put the work on Ventra (execution) while giving Insight complete visibility and control.</p>
                            <div className="methodology-steps">
                                <div className="m-step">
                                    <span className="m-num">01</span>
                                    <div className="m-text">
                                        <strong>Defined the target buyer</strong> — Companies / Businesses that are between 10-50 employees and less than 3 years.
                                    </div>
                                </div>
                                <div className="m-step">
                                    <span className="m-num">02</span>
                                    <div className="m-text">
                                        <strong>Messaging</strong> — Result-focused, with specific timeframe, and benefits.
                                    </div>
                                </div>
                                <div className="m-step">
                                    <span className="m-num">03</span>
                                    <div className="m-text">
                                        <strong>Where to find them + Outreach</strong> — LinkedIn, Instagram. Mainly email for outreach.
                                    </div>
                                </div>
                                <div className="m-step">
                                    <span className="m-num">04</span>
                                    <div className="m-text">
                                        <strong>Human qualification</strong> — SDR screened every positive reply via a 3-minute intake for budget and authority.
                                    </div>
                                </div>
                                <div className="m-step">
                                    <span className="m-num">05</span>
                                    <div className="m-text">
                                        <strong>Book the meeting</strong> — Meetings placed directly into the client's calendar with provided intake notes.
                                    </div>
                                </div>
                                <div className="m-step">
                                    <span className="m-num">06</span>
                                    <div className="m-text">
                                        <strong>Transparency</strong> — Monday and Thursday reports with full outreach copies, reply excerpts, and confirmations.
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="article-section">
                            <blockquote className="blog-blockquote">
                                "I signed up for the pilot more to test the process than because I expected miracles — in 30 days Ventra booked 8 qualified meetings for us. Two turned into clients worth about $18k in recurring work this quarter. No black box — just results."
                                <cite>— Nichole W., Insight Evaluation Solutions</cite>
                            </blockquote>
                        </section>
                    </div>
                </div>

                {/* Full-width booking section */}
                <section className="cs-booking-section">
                    <div className="container">
                        <h2>Want a repeatable client-acquisition engine?</h2>
                        <p>Ventra can run a short pilot and show you the pipeline within 30 days. Book a discovery call to see how we can scale your client acquisition.</p>
                        <div className="cal-embed-wrapper-cs">
                            <div style={{ width: '100%', height: '100%', overflow: 'scroll' }} id="my-cal-inline-casestudy"></div>
                        </div>
                    </div>
                </section>
            </article>

            <Footer />
        </div>
    );
};

export default CaseStudy;
