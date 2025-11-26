'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Globe, Smartphone, Palette, TrendingUp, Bot, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import styles from './services.module.css';

export default function ServicesPage() {
    const services = [
        {
            icon: Globe,
            title: 'تصميم وتطوير مواقع',
            description: 'نصمم ونطور مواقع إلكترونية احترافية متجاوبة مع جميع الأجهزة، سريعة الأداء ومتوافقة مع محركات البحث.',
            features: [
                'تصميم واجهات مستخدم حديثة',
                'تطوير متوافق مع SEO',
                'أداء عالي وسرعة تحميل',
                'لوحة تحكم سهلة الاستخدام'
            ],
            color: 'var(--brand-start)'
        },
        {
            icon: Smartphone,
            title: 'تطبيقات موبايل',
            description: 'نبني تطبيقات موبايل native و cross-platform لنظامي iOS و Android بأعلى معايير الجودة والأداء.',
            features: [
                'تطبيقات iOS و Android',
                'تجربة مستخدم سلسة',
                'تكامل مع APIs',
                'دعم فني مستمر'
            ],
            color: 'var(--brand-mid)'
        },
        {
            icon: Palette,
            title: 'تصميم جرافيك وهوية بصرية',
            description: 'نصمم هويات بصرية متكاملة تعبر عن علامتك التجارية وتميزك عن المنافسين.',
            features: [
                'تصميم الشعارات',
                'الهوية البصرية الكاملة',
                'تصميم المطبوعات',
                'تصميم واجهات UI/UX'
            ],
            color: 'var(--brand-end)'
        },
        {
            icon: TrendingUp,
            title: 'تسويق رقمي',
            description: 'نساعدك في الوصول لجمهورك المستهدف وزيادة مبيعاتك من خلال استراتيجيات تسويق رقمي فعالة.',
            features: [
                'إدارة حملات إعلانية',
                'تحسين محركات البحث SEO',
                'إدارة وسائل التواصل',
                'تحليل البيانات والتقارير'
            ],
            color: 'var(--brand-start)'
        },
        {
            icon: Bot,
            title: 'أتمتة وتكامل الأنظمة',
            description: 'نساعدك في أتمتة العمليات وتكامل الأنظمة المختلفة لتوفير الوقت وزيادة الكفاءة.',
            features: [
                'أتمتة سير العمل',
                'تكامل مع أنظمة CRM',
                'ربط بوابات الدفع',
                'تكامل APIs'
            ],
            color: 'var(--brand-mid)'
        }
    ];

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
                                const IconComponent = service.icon;
                                return (
                                    <Card key={index} className={styles.serviceCard}>
                                        <div className={styles.iconWrapper} style={{ background: service.color }}>
                                            <IconComponent size={32} strokeWidth={1.5} />
                                        </div>
                                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                                        <p className={styles.serviceDesc}>{service.description}</p>
                                        <ul className={styles.featuresList}>
                                            {service.features.map((feature, idx) => (
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
