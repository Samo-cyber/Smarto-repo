'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import styles from './PortfolioPreview.module.css';
import content from '../../data/site-content.json';

export const PortfolioPreview = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>أحدث أعمالنا</h2>
                    <Link href="/portfolio">
                        <Button variant="outline" size="md">شاهد كل الأعمال</Button>
                    </Link>
                </div>

                <div className={styles.grid}>
                    {content.components.portfolio.items.slice(0, 3).map((item) => (
                        <div key={item.id} className={styles.item}>
                            <div className={styles.imagePlaceholder} style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            <div className={styles.content}>
                                <h3 className={styles.projectTitle}>{item.title}</h3>
                                <p className={styles.projectCat}>{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
