'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import styles from './services.module.css';

import content from '@/data/site-content.json';
import Image from 'next/image';

export default function ServicesPage() {
    const { services } = content.components.services_section;

    const benefits = [
        'فريق محترف ذو خبرة',
        'جودة عالية في التنفيذ',
        'التزام بالمواعيد',
        'دعم فني مستمر',
        'أسعار تنافسية',
        'ضمان الجودة'
    ];

    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title="خدماتنا"
                    subtitle="نقدم حلولاً تقنية متكاملة تناسب احتياجاتك وتساعدك على النمو"
                />

                {/* Services Grid */}
                <section className={styles.section}>
                    <div className="container">
                        <div className={styles.servicesGrid}>
                            {services.map((service, index) => {
                                return (
                                    <Card key={service.id} className={styles.serviceCard}>
                                        <div className={styles.iconWrapper}>
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                width={64}
                                                height={64}
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </div>
                                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                                        <p className={styles.serviceDesc}>{service.desc}</p>
                                        <ul className={styles.featuresList}>
                                            {service.features && service.features.map((feature, idx) => (
                                                <li key={idx} className={styles.featureItem}>
                                                    <CheckCircle size={16} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link href="/contact" className={styles.serviceLink}>
                                            اطلب الخدمة
                                            <ArrowLeft size={16} />
                                        </Link>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className={styles.benefitsSection}>
                    <div className="container">
                        <div className={styles.benefitsContent}>
                            <h2 className={styles.benefitsTitle}>لماذا تختار Smarto؟</h2>
                            <div className={styles.benefitsGrid}>
                                {benefits.map((benefit, index) => (
                                    <div key={index} className={styles.benefitItem}>
                                        <CheckCircle size={20} />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className="container">
                        <div className={styles.ctaContent}>
                            <h2 className={styles.ctaTitle}>جاهز لبدء مشروعك؟</h2>
                            <p className={styles.ctaText}>
                                دعنا نساعدك في تحويل فكرتك إلى واقع رقمي متميز
                            </p>
                            <Link href="/contact">
                                <Button variant="primary" size="lg">
                                    اطلب عرض سعر الآن
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
