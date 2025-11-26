'use client';

import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import styles from './ContactForm.module.css';
import content from '@/data/site-content.json';

export const ContactForm = () => {
    const { components } = content;
    const { contact } = components;

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>تواصل معنا</h2>
                        <p className={styles.desc}>نحن هنا للإجابة على استفساراتك ومساعدتك في بدء مشروعك.</p>

                        <div className={styles.contactDetails}>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>📍</span>
                                <div>
                                    <h3>العنوان</h3>
                                    <p>الرياض، المملكة العربية السعودية</p>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>📧</span>
                                <div>
                                    <h3>البريد الإلكتروني</h3>
                                    <p>info@smarto-tech.com</p>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>📱</span>
                                <div>
                                    <h3>الهاتف</h3>
                                    <p>+966 50 000 0000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className={styles.formCard}>
                        <form className={styles.form} onSubmit={(e) => {
                            e.preventDefault();
                            alert('شكراً لتواصلك معنا! سيتم الرد عليك قريباً.');
                        }}>
                            {contact.form_fields.map((field, index) => (
                                <div key={index} className={styles.fieldGroup}>
                                    <label className={styles.label}>{field}</label>
                                    {field.includes('نبذة') ? (
                                        <textarea className={styles.textarea} rows={4} required></textarea>
                                    ) : (
                                        <input type="text" className={styles.input} required />
                                    )}
                                </div>
                            ))}
                            <Button variant="primary" size="lg" className={styles.submitBtn} type="submit">
                                {contact.submit_text}
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
};
