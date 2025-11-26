'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Globe, Smartphone, Palette, TrendingUp, BarChart, CheckSquare } from 'lucide-react';
import content from '@/data/site-content.json';
import styles from './portfolio.module.css';

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState('الكل');
    const { components } = content;
    const { portfolio } = components;

    const iconMap: { [key: string]: React.ElementType } = {
        'تطوير ويب': Globe,
        'تطبيقات موبايل': Smartphone,
        'تصميم جرافيك': Palette,
        'تسويق': TrendingUp,
        'أتمتة': BarChart,
        'default': CheckSquare
    };

    const gradients = [
        'linear-gradient(135deg, #0F5CBA 0%, #1DBF8A 100%)',
        'linear-gradient(135deg, #1DBF8A 0%, #8A3DD9 100%)',
        'linear-gradient(135deg, #8A3DD9 0%, #0F5CBA 100%)',
        'linear-gradient(135deg, #0F5CBA 0%, #8A3DD9 100%)',
        'linear-gradient(135deg, #1DBF8A 0%, #0F5CBA 100%)',
        'linear-gradient(135deg, #8A3DD9 0%, #1DBF8A 100%)'
    ];

    const categories = ['الكل', ...new Set(portfolio.items.map(item => item.category))];

    const filteredProjects = activeFilter === 'الكل'
        ? portfolio.items
        : portfolio.items.filter(item => item.category === activeFilter);

    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title="أعمالنا"
                    subtitle="معرض لأبرز المشاريع التي قمنا بتنفيذها لعملائنا"
                />

                {/* Filters */}
                <section className={styles.filtersSection}>
                    <div className="container">
                        <div className={styles.filters}>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`${styles.filterBtn} ${activeFilter === category ? styles.active : ''}`}
                                    onClick={() => setActiveFilter(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Portfolio Grid */}
                <section className={styles.section}>
                    <div className="container">
                        <div className={styles.grid}>
                            {filteredProjects.map((project, index) => {
                                const IconComponent = iconMap[project.category] || iconMap.default;
                                const gradient = gradients[index % gradients.length];

                                return (
                                    <Card key={project.id} className={styles.projectCard}>
                                        <div className={styles.projectIcon} style={{ background: gradient }}>
                                            <IconComponent size={48} strokeWidth={1.5} />
                                        </div>
                                        <div className={styles.projectContent}>
                                            <span className={styles.category}>{project.category}</span>
                                            <h3 className={styles.projectTitle}>{project.title}</h3>
                                            <p className={styles.projectDesc}>{project.description}</p>
                                            <a href="#" className={styles.viewProject}>
                                                عرض المشروع →
                                            </a>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className="container">
                        <div className={styles.ctaContent}>
                            <h2 className={styles.ctaTitle}>هل لديك مشروع في ذهنك؟</h2>
                            <p className={styles.ctaText}>
                                دعنا نساعدك في تحويله إلى واقع ملموس
                            </p>
                            <a href="/contact" className={styles.ctaBtn}>
                                ابدأ مشروعك الآن
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
