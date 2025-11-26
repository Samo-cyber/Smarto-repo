'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Target, Users, Zap, Award, Rocket, Code, Lightbulb, Heart, Eye, Flag } from 'lucide-react';
import styles from './about.module.css';

export default function AboutPage() {
    const values = [
        {
            icon: Target,
            title: 'الجودة أولاً',
            description: 'نلتزم بتقديم حلول تقنية عالية الجودة تفوق توقعات عملائنا'
        },
        {
            icon: Users,
            title: 'العمل الجماعي',
            description: 'نؤمن بقوة التعاون والعمل كفريق واحد لتحقيق النجاح'
        },
        {
            icon: Zap,
            title: 'الابتكار المستمر',
            description: 'نسعى دائماً لاستخدام أحدث التقنيات والأساليب المبتكرة'
        },
        {
            icon: Award,
            title: 'التميز',
            description: 'نسعى للتميز في كل مشروع ونضع معايير عالية لأنفسنا'
        }
    ];

    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title="من نحن"
                    subtitle="تعرف على قصتنا ورؤيتنا لمستقبل التكنولوجيا"
                />

                {/* Our Story */}
                <section className={styles.section}>
                    <div className="container">
                        <div className={styles.storyGrid}>
                            <div className={styles.storyContent}>
                                <h2 className={styles.sectionTitle}>قصتنا</h2>
                                <p className={styles.paragraph}>
                                    بدأت Smarto كفكرة بسيطة: جعل التكنولوجيا في متناول الجميع. منذ تأسيسنا،
                                    ساعدنا العشرات من الشركات على التحول الرقمي وتحقيق أهدافها.
                                </p>
                                <p className={styles.paragraph}>
                                    نحن فريق من المبدعين والمطورين والمصممين الذين يشتركون في شغف واحد:
                                    بناء حلول رقمية تحدث فرقاً حقيقياً في حياة الناس وأعمالهم.
                                </p>
                            </div>
                            <div className={styles.storyImage}>
                                <div className={styles.iconGrid}>
                                    <div className={styles.iconItem}><Rocket size={48} strokeWidth={1.5} /></div>
                                    <div className={styles.iconItem}><Code size={48} strokeWidth={1.5} /></div>
                                    <div className={styles.iconItem}><Lightbulb size={48} strokeWidth={1.5} /></div>
                                    <div className={styles.iconItem}><Heart size={48} strokeWidth={1.5} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className={styles.sectionAlt}>
                    <div className="container">
                        <div className={styles.missionGrid}>
                            <Card className={styles.missionCard}>
                                <div className={styles.missionIcon}>
                                    <Eye size={40} strokeWidth={1.5} />
                                </div>
                                <h3 className={styles.cardTitle}>رؤيتنا</h3>
                                <p className={styles.cardText}>
                                    أن نكون الشريك التقني الأول للشركات في المنطقة، ونساهم في بناء
                                    مستقبل رقمي مزدهر يعتمد على الابتكار والتميز.
                                </p>
                            </Card>
                            <Card className={styles.missionCard}>
                                <div className={styles.missionIcon}>
                                    <Flag size={40} strokeWidth={1.5} />
                                </div>
                                <h3 className={styles.cardTitle}>رسالتنا</h3>
                                <p className={styles.cardText}>
                                    تمكين الشركات من النجاح في العصر الرقمي من خلال تقديم حلول تقنية
                                    مبتكرة وخدمات استشارية متخصصة تلبي احتياجاتهم الفريدة.
                                </p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className={styles.section}>
                    <div className="container">
                        <div className={styles.header}>
                            <h2 className={styles.sectionTitle}>قيمنا</h2>
                            <p className={styles.subtitle}>المبادئ التي توجه عملنا كل يوم</p>
                        </div>
                        <div className={styles.valuesGrid}>
                            {values.map((value, index) => {
                                const IconComponent = value.icon;
                                return (
                                    <Card key={index} className={styles.valueCard}>
                                        <div className={styles.iconWrapper}>
                                            <IconComponent size={32} strokeWidth={1.5} className={styles.icon} />
                                        </div>
                                        <h3 className={styles.valueTitle}>{value.title}</h3>
                                        <p className={styles.valueDesc}>{value.description}</p>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className={styles.statsSection}>
                    <div className="container">
                        <div className={styles.statsGrid}>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>50+</div>
                                <div className={styles.statLabel}>مشروع ناجح</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>30+</div>
                                <div className={styles.statLabel}>عميل سعيد</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>5+</div>
                                <div className={styles.statLabel}>سنوات خبرة</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>15+</div>
                                <div className={styles.statLabel}>خبير متخصص</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
