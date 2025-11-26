'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Clock, Briefcase } from 'lucide-react';
import styles from './careers.module.css';

export default function CareersPage() {
    const jobs = [
        {
            id: 1,
            title: 'مطور Full Stack',
            department: 'التطوير',
            location: 'القاهرة، مصر',
            type: 'دوام كامل',
            description: 'نبحث عن مطور Full Stack متمرس للانضمام إلى فريقنا. المرشح المثالي لديه خبرة في React وNode.js.'
        },
        {
            id: 2,
            title: 'مصمم UI/UX',
            department: 'التصميم',
            location: 'عن بُعد',
            type: 'دوام كامل',
            description: 'نبحث عن مصمم UI/UX مبدع لديه شغف بإنشاء تجارب مستخدم استثنائية.'
        },
        {
            id: 3,
            title: 'مدير مشاريع',
            department: 'الإدارة',
            location: 'الرياض، السعودية',
            type: 'دوام كامل',
            description: 'نحتاج إلى مدير مشاريع ذو خبرة لقيادة فريقنا وضمان تسليم المشاريع في الوقت المحدد.'
        },
        {
            id: 4,
            title: 'أخصائي تسويق رقمي',
            department: 'التسويق',
            location: 'دبي، الإمارات',
            type: 'دوام جزئي',
            description: 'نبحث عن أخصائي تسويق رقمي لديه خبرة في SEO والإعلانات المدفوعة.'
        }
    ];

    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title="انضم إلى فريقنا"
                    subtitle="كن جزءاً من رحلتنا لتحويل الأفكار إلى واقع رقمي"
                />

                {/* Why Join Us */}
                <section className={styles.section}>
                    <div className="container">
                        <div className={styles.header}>
                            <h2 className={styles.sectionTitle}>لماذا Smarto؟</h2>
                            <p className={styles.subtitle}>نوفر بيئة عمل محفزة تساعدك على النمو والتطور</p>
                        </div>
                        <div className={styles.benefitsGrid}>
                            <Card className={styles.benefitCard}>
                                <h3 className={styles.benefitTitle}>بيئة عمل مرنة</h3>
                                <p className={styles.benefitDesc}>نوفر خيارات العمل عن بُعد والمرونة في ساعات العمل</p>
                            </Card>
                            <Card className={styles.benefitCard}>
                                <h3 className={styles.benefitTitle}>فرص التطوير</h3>
                                <p className={styles.benefitDesc}>دورات تدريبية ومؤتمرات لتطوير مهاراتك باستمرار</p>
                            </Card>
                            <Card className={styles.benefitCard}>
                                <h3 className={styles.benefitTitle}>رواتب تنافسية</h3>
                                <p className={styles.benefitDesc}>نقدم رواتب ومزايا تنافسية تتناسب مع خبرتك</p>
                            </Card>
                            <Card className={styles.benefitCard}>
                                <h3 className={styles.benefitTitle}>فريق متميز</h3>
                                <p className={styles.benefitDesc}>اعمل مع فريق من المحترفين المتحمسين</p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section className={styles.sectionAlt}>
                    <div className="container">
                        <div className={styles.header}>
                            <h2 className={styles.sectionTitle}>الوظائف المتاحة</h2>
                            <p className={styles.subtitle}>اختر الوظيفة المناسبة لك وابدأ رحلتك معنا</p>
                        </div>
                        <div className={styles.jobsGrid}>
                            {jobs.map((job) => (
                                <Card key={job.id} className={styles.jobCard}>
                                    <div className={styles.jobHeader}>
                                        <h3 className={styles.jobTitle}>{job.title}</h3>
                                        <span className={styles.department}>{job.department}</span>
                                    </div>
                                    <p className={styles.jobDesc}>{job.description}</p>
                                    <div className={styles.jobMeta}>
                                        <div className={styles.metaItem}>
                                            <MapPin size={16} />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className={styles.metaItem}>
                                            <Clock size={16} />
                                            <span>{job.type}</span>
                                        </div>
                                    </div>
                                    <Button variant="outline" className={styles.applyBtn}>
                                        تقدم الآن
                                    </Button>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Application CTA */}
                <section className={styles.ctaSection}>
                    <div className="container">
                        <div className={styles.ctaContent}>
                            <h2 className={styles.ctaTitle}>لم تجد الوظيفة المناسبة؟</h2>
                            <p className={styles.ctaText}>
                                أرسل لنا سيرتك الذاتية وسنتواصل معك عند توفر فرصة مناسبة
                            </p>
                            <Button variant="primary" size="lg">
                                أرسل سيرتك الذاتية
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
