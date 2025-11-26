'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import styles from './contact.module.css';

export default function ContactPage() {
    const contactInfo = [
        {
            icon: Mail,
            title: 'البريد الإلكتروني',
            value: 'info@smarto.tech',
            link: 'mailto:info@smarto.tech'
        },
        {
            icon: Phone,
            title: 'الهاتف',
            value: '+966 50 123 4567',
            link: 'tel:+966501234567'
        },
        {
            icon: MapPin,
            title: 'العنوان',
            value: 'الرياض، المملكة العربية السعودية',
            link: null
        },
        {
            icon: Clock,
            title: 'ساعات العمل',
            value: 'الأحد - الخميس: 9 صباحاً - 6 مساءً',
            link: null
        }
    ];

    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title="اتصل بنا"
                    subtitle="نحن هنا لمساعدتك في تحقيق أهدافك الرقمية"
                />

                {/* Contact Info Cards */}
                <section className={styles.infoSection}>
                    <div className="container">
                        <div className={styles.infoGrid}>
                            {contactInfo.map((info, index) => {
                                const IconComponent = info.icon;
                                return (
                                    <Card key={index} className={styles.infoCard}>
                                        <div className={styles.iconWrapper}>
                                            <IconComponent size={28} strokeWidth={1.5} />
                                        </div>
                                        <h3 className={styles.infoTitle}>{info.title}</h3>
                                        {info.link ? (
                                            <a href={info.link} className={styles.infoValue}>
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className={styles.infoValue}>{info.value}</p>
                                        )}
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section className={styles.formSection}>
                    <div className="container">
                        <div className={styles.formWrapper}>
                            <div className={styles.formHeader}>
                                <h2 className={styles.formTitle}>أرسل لنا رسالة</h2>
                                <p className={styles.formSubtitle}>
                                    املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                                </p>
                            </div>
                            <form className={styles.form}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name" className={styles.label}>الاسم</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className={styles.input}
                                            placeholder="أدخل اسمك الكامل"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.label}>البريد الإلكتروني</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className={styles.input}
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone" className={styles.label}>رقم الهاتف</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className={styles.input}
                                            placeholder="+966 50 123 4567"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="subject" className={styles.label}>الموضوع</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className={styles.input}
                                            placeholder="موضوع الرسالة"
                                        />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>الرسالة</label>
                                    <textarea
                                        id="message"
                                        className={styles.textarea}
                                        rows={6}
                                        placeholder="اكتب رسالتك هنا..."
                                    ></textarea>
                                </div>
                                <Button variant="primary" size="lg" className={styles.submitBtn}>
                                    إرسال الرسالة
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
