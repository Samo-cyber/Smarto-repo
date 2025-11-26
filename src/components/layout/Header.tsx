'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import styles from './Header.module.css';
import content from '@/data/site-content.json';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { identity, components } = content;
    const { header } = components;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled || isMobileMenuOpen ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/assets/smarto-logo.png"
                        alt={identity.company_name}
                        width={160}
                        height={53}
                        className={styles.logoImage}
                    />
                </Link>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <Link href="/" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>الرئيسية</Link>
                    <Link href="/about" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>من نحن</Link>
                    <Link href="/services" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>خدماتنا</Link>
                    <Link href="/portfolio" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>أعمالنا</Link>
                    <Link href="/contact" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>اتصل بنا</Link>
                </nav>

                <div className={styles.actions}>
                    <Link href="/contact">
                        <Button variant="primary" size="sm" className={styles.ctaBtn}>
                            {header.cta_in_header}
                        </Button>
                    </Link>
                    <button
                        className={styles.mobileToggle}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={header.aria.menu_button_label}
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </div>
            </div>
        </header>
    );
};
