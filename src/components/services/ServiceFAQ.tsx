'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './ServiceFAQ.module.css';

interface FAQItem {
    q: string;
    a: string;
}

interface ServiceFAQProps {
    faq: FAQItem[];
}

export const ServiceFAQ = ({ faq }: ServiceFAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>الأسئلة الشائعة</h2>
                <div className={styles.faqList}>
                    {faq.map((item, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                className={styles.faqButton}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={styles.faqQuestion}>{item.q}</span>
                                <ChevronDown
                                    className={`${styles.faqIcon} ${openIndex === index ? styles.open : ''}`}
                                    size={24}
                                />
                            </button>
                            {openIndex === index && (
                                <div className={styles.faqAnswer}>{item.a}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
