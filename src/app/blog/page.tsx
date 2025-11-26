'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Calendar, User, ArrowLeft, Code, Palette, TrendingUp, Cpu, Shield, Zap } from 'lucide-react';
import styles from './blog.module.css';

export default function BlogPage() {
    const iconMap: { [key: string]: React.ElementType } = {
        'تطوير': Code,
        'تصميم': Palette,
        'تسويق': TrendingUp,
        'تقنية': Cpu,
        'أمان': Shield
    };

    const posts = [
        {
            id: 1,
            title: 'كيف تختار التقنية المناسبة لمشروعك؟',
            excerpt: 'دليل شامل لمساعدتك في اختيار التقنيات والأدوات المناسبة لمشروعك الرقمي القادم.',
            category: 'تطوير',
            author: 'أحمد محمد',
            date: '15 يناير 2025',
            readTime: '5 دقائق'
        },
        {
            id: 2,
            title: 'أهمية تجربة المستخدم في نجاح التطبيقات',
            excerpt: 'تعرف على كيفية تحسين تجربة المستخدم لزيادة معدلات التحويل والاحتفاظ بالمستخدمين.',
            category: 'تصميم',
            author: 'سارة أحمد',
            date: '12 يناير 2025',
            readTime: '7 دقائق'
        },
        {
            id: 3,
            title: 'استراتيجيات التسويق الرقمي الفعالة',
            excerpt: 'أفضل الممارسات والاستراتيجيات لتحقيق نتائج ملموسة من حملاتك التسويقية.',
            category: 'تسويق',
            author: 'محمد علي',
            date: '10 يناير 2025',
            readTime: '6 دقائق'
        },
        {
            id: 4,
            title: 'مستقبل الذكاء الاصطناعي في التطبيقات',
            excerpt: 'نظرة على كيفية تغيير الذكاء الاصطناعي لطريقة بناء وتطوير التطبيقات.',
            category: 'تقنية',
            author: 'فاطمة حسن',
            date: '8 يناير 2025',
            readTime: '8 دقائق'
        },
        {
            id: 5,
            title: 'أمان التطبيقات: أفضل الممارسات',
            excerpt: 'كيف تحمي تطبيقك وبيانات مستخدميك من التهديدات الأمنية الشائعة.',
            category: 'أمان',
            author: 'خالد عمر',
            date: '5 يناير 2025',
            readTime: '10 دقائق'
        },
        {
            id: 6,
            title: 'تحسين أداء المواقع الإلكترونية',
            excerpt: 'نصائح وتقنيات لتحسين سرعة وأداء موقعك الإلكتروني.',
            category: 'تطوير',
            author: 'ليلى سعيد',
            date: '3 يناير 2025',
            readTime: '5 دقائق'
        }
    ];

    const categories = ['الكل', 'تطوير', 'تصميم', 'تسويق', 'تقنية', 'أمان'];

    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title="المدونة"
                    subtitle="آخر المقالات والنصائح في عالم التكنولوجيا والتطوير"
                />

                {/* Categories */}
                <section className={styles.categoriesSection}>
                    <div className="container">
                        <div className={styles.categories}>
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`${styles.categoryBtn} ${index === 0 ? styles.active : ''}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blog Posts */}
                <section className={styles.section}>
                    <div className="container">
                        <div className={styles.postsGrid}>
                            {posts.map((post) => {
                                const IconComponent = iconMap[post.category] || Code;
                                return (
                                    <Card key={post.id} className={styles.postCard}>
                                        <div className={styles.postIconWrapper}>
                                            <IconComponent size={64} strokeWidth={1.5} />
                                        </div>
                                        <div className={styles.postContent}>
                                            <span className={styles.category}>{post.category}</span>
                                            <h3 className={styles.postTitle}>{post.title}</h3>
                                            <p className={styles.postExcerpt}>{post.excerpt}</p>
                                            <div className={styles.postMeta}>
                                                <div className={styles.metaItem}>
                                                    <User size={16} />
                                                    <span>{post.author}</span>
                                                </div>
                                                <div className={styles.metaItem}>
                                                    <Calendar size={16} />
                                                    <span>{post.date}</span>
                                                </div>
                                                <div className={styles.metaItem}>
                                                    <Zap size={16} />
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </div>
                                            <a href="#" className={styles.readMore}>
                                                اقرأ المزيد
                                                <ArrowLeft size={16} />
                                            </a>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className={styles.newsletterSection}>
                    <div className="container">
                        <div className={styles.newsletterContent}>
                            <h2 className={styles.newsletterTitle}>اشترك في نشرتنا البريدية</h2>
                            <p className={styles.newsletterText}>
                                احصل على آخر المقالات والنصائح مباشرة في بريدك الإلكتروني
                            </p>
                            <form className={styles.newsletterForm}>
                                <input
                                    type="email"
                                    placeholder="بريدك الإلكتروني"
                                    className={styles.emailInput}
                                />
                                <button type="submit" className={styles.submitBtn}>
                                    اشترك الآن
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
