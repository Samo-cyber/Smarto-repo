'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import styles from './Hero.module.css';
import content from '@/data/site-content.json';

export const Hero = () => {
    const { components } = content;
    const { hero } = components;

    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.headline}>
                        {hero.headline.split(':')[0]}
                        <span className="text-gradient block">{hero.headline.split(':')[1]}</span>
                    </h1>
                    <p className={styles.subheadline}>{hero.subheadline}</p>
                    <div className={styles.actions}>
                        <Link href="/contact">
                            <Button variant="primary" size="lg">
                                {hero.primary_cta.text}
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="ghost" size="lg">
                                {hero.secondary_cta.text}
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/assets/hero.png"
                        alt="Smarto Team"
                        width={600}
                        height={500}
                        className={styles.image}
                        priority
                    />
                </div>
            </div>
            <div className={styles.background}></div>
        </section>
    );
};
