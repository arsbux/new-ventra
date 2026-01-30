import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "How current is the data?",
        answer: "This is a curated snapshot at the time of delivery. Contact info is collected from public sources. Consider purchasing the Pro tier for quarterly updates if you need the most recent changes."
    },
    {
        question: "Are emails verified?",
        answer: "Emails are pulled from public listings; some may be generic or naturally go out of date as partners move firms. We update our master files regularly, but no deliverability guarantee is provided for specific individual entries."
    },
    {
        question: "Can I use this to contact investors?",
        answer: "Yes — but follow best practices for outreach and comply with spam laws (like CAN-SPAM and GDPR). Use the included templates and checklist to ensure your outreach is professional and targeted."
    },
    {
        question: "Do you offer refunds?",
        answer: "We offer a 7-day refund if the file cannot be downloaded or is corrupt. Due to the digital nature of the product, no refunds are provided after a successful download has occurred."
    },
    {
        question: "What files will I receive exactly?",
        answer: "You'll get an investor_2253.csv for easy CRM import, a filterable Google Sheet, a quickstart.md guide, outreach email templates (PDF), and a pitch checklist (PDF)."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="faq-section" id="faq">
            <div className="container faq-container">
                <div className="faq-grid-layout">
                    {/* Left side: FAQ Content */}
                    <div className="faq-main-content">
                        <div className="faq-header">
                            <HelpCircle size={32} className="faq-icon-top" />
                            <h2 className="faq-title">Frequently Asked Questions</h2>
                            <p className="faq-subtitle">Everything you need to know about the Master Investor List.</p>
                        </div>

                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item ${openIndex === index ? 'open' : ''}`}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <div className="faq-question">
                                        <span>{faq.question}</span>
                                        {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                    </div>
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
