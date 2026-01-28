import React, { useEffect } from 'react';

declare global {
    interface Window {
        Cal?: any;
    }
}

const Contact: React.FC = () => {
    useEffect(() => {
        (function (this: any, C: any, A: string, L: string) {
            const p = function (a: any, ar: any) {
                a.q.push(ar);
            };
            const d = C.document;
            C.Cal =
                C.Cal ||
                function (this: any) {
                    const cal = C.Cal;
                    const ar = arguments;
                    if (!cal.loaded) {
                        cal.ns = {};
                        cal.q = [] as any[];
                        const s = d.createElement('script');
                        s.src = A;
                        d.head.appendChild(s);
                        cal.loaded = true;
                    }
                    if (ar[0] === L) {
                        const api: any = function (this: any) {
                            p(api, arguments);
                        };
                        const namespace = ar[1];
                        api.q = [] as any[];
                        if (typeof namespace === 'string') {
                            cal.ns[namespace] = cal.ns[namespace] || api;
                            p(cal.ns[namespace], ar);
                            p(cal, ['initNamespace', namespace]);
                        } else p(cal, ar);
                        return;
                    }
                    p(cal, ar);
                };
        })(window as any, 'https://app.cal.com/embed/embed.js', 'init');

        const setupCal = () => {
            if (window.Cal) {
                window.Cal('init', 'discoverycall', { origin: 'https://app.cal.com' });
                window.Cal.ns.discoverycall('inline', {
                    elementOrSelector: '#my-cal-inline-discoverycall',
                    config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true', theme: 'light' },
                    calLink: 'tryventra/discoverycall',
                });
                window.Cal.ns.discoverycall('ui', { theme: 'light', hideEventTypeDetails: false, layout: 'month_view' });
            }
        };

        setupCal();
    }, []);

    return (
        <section className="contact-section" id="contact">
            <div className="container contact-container">
                <div className="contact-header">
                    <h2 className="contact-title">Speak to us today</h2>
                    <p className="contact-subtitle">Book a discovery call to see how we can scale your client acquisition.</p>
                </div>

                <div className="cal-embed-wrapper">
                    <div style={{ width: '100%', height: '100%', overflow: 'scroll' }} id="my-cal-inline-discoverycall"></div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
