'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import styles from './Footer.module.css';
import content from '@/data/site-content.json';

export const Footer = () => {
    const { identity, components } = content;
    const { footer } = components;

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Youtube, href: '#', label: 'YouTube' }
    ];

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                {/* Top Section */}
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Image
                            src="/assets/logo-white.png"
                            alt={identity.company_name}
                            width={180}
                            height={60}
                            className={styles.logo}
                        />
                        <p className={styles.tagline}>{identity.tagline}</p>
                        <div className={styles.social}>
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={styles.socialLink}
                                        aria-label={social.label}
                                    >
                                        <IconComponent size={20} strokeWidth={1.5} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4 className={styles.heading}>الشركة</h4>
                            <Link href="/about" className={styles.link}>من نحن</Link>
                            <Link href="/portfolio" className={styles.link}>أعمالنا</Link>
                        </div>
                        <div className={styles.column}>
                            <h4 className={styles.heading}>الخدمات</h4>
                            <Link href="/services" className={styles.link}>تطوير مواقع</Link>
                            <Link href="/services" className={styles.link}>تطبيقات موبايل</Link>
                            <Link href="/services" className={styles.link}>تصميم جرافيك</Link>
                            <Link href="/services" className={styles.link}>تسويق رقمي</Link>
                        </div>
                        <div className={styles.column}>
                            <h4 className={styles.heading}>الدعم</h4>
                            <Link href="/contact" className={styles.link}>اتصل بنا</Link>
                            <Link href="/pricing" className={styles.link}>الأسعار</Link>
                            <Link href="#" className={styles.link}>الأسئلة الشائعة</Link>
                            <Link href="#" className={styles.link}>سياسة الخصوصية</Link>
                        </div>
                        <div className={styles.column}>
                            <h4 className={styles.heading}>تواصل معنا</h4>
                            <div className={styles.contactInfo}>
                                <div className={styles.contactItem}>
                                    <Mail size={16} />
                                    <span>info@smarto.tech</span>
                                </div>
                                <div className={styles.contactItem}>
                                    <Phone size={16} />
                                    <span>+966 50 123 4567</span>
                                </div>
                                <div className={styles.contactItem}>
                                    <MapPin size={16} />
                                    <span>الرياض، السعودية</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        {footer.copyright.replace('اسم_الشركة_هنا', identity.company_name)}
                    </p>
                    <div className={styles.bottomLinks}>
                        <Link href="#" className={styles.bottomLink}>الشروط والأحكام</Link>
                        <span className={styles.separator}>•</span>
                        <Link href="#" className={styles.bottomLink}>سياسة الخصوصية</Link>
                        <span className={styles.separator}>•</span>
                        <Link href="#" className={styles.bottomLink}>سياسة الاسترجاع</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
