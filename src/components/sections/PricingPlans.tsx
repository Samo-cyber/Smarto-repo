'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import styles from './PricingPlans.module.css';
import content from '@/data/site-content.json';

export const PricingPlans = () => {
    const { components } = content;
    const { pricing_plans } = components;

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {pricing_plans.plans.map((plan, index) => (
                        <Card key={index} className={`${styles.card} ${plan.recommended ? styles.recommended : ''}`}>
                            {plan.recommended && <div className={styles.badge}>الأكثر طلباً</div>}
                            <h3 className={styles.planName}>{plan.name}</h3>
                            <div className={styles.price}>{plan.price}</div>
                            <ul className={styles.features}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={styles.feature}>
                                        <span className={styles.check}>✓</span> {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" style={{ width: '100%', display: 'block' }}>
                                <Button
                                    variant={plan.recommended ? 'primary' : 'outline'}
                                    className={styles.cta}
                                >
                                    {pricing_plans.cta_text}
                                </Button>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
