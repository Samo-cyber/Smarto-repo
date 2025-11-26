'use client';

import React from 'react';
import { Card } from '../ui/Card';
import styles from './PortfolioGrid.module.css';
import content from '@/data/site-content.json';

export const PortfolioGrid = () => {
    const { components } = content;
    const { portfolio } = components;

    return (
        <section className={styles.section}>
            <div className="container">
                {/* Filter buttons could go here */}

                <div className={styles.grid}>
                    {portfolio.items.map((project) => (
                        <Card key={project.id} className={styles.card} hoverEffect={false}>
                            <div className={styles.imageWrapper}>
                                {/* Using hero image as placeholder since generation quota is exceeded */}
                                <div className={styles.placeholder} style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                <div className={styles.overlay}>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <p className={styles.category}>{project.category}</p>
                                    <p className={styles.description}>{project.description}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
