'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '../ui/Card';
import styles from './Services.module.css';
import content from '@/data/site-content.json';

import Image from 'next/image';

export const Services = () => {
    const { components } = content;
    const { services_section } = components;

    return (
        <section className={styles.section} id="services">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>خدماتنا</h2>
                    <p className={styles.subtitle}>نقدم مجموعة متكاملة من الحلول الرقمية لتنمية أعمالك</p>
                </div>

                <div className={styles.grid}>
                    {services_section.services.map((service, index) => {
                        return (
                            <Card key={service.id} className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={80}
                                        height={80}
                                        className={styles.icon}
                                    />
                                </div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.desc}</p>
                                <Link href={`/services#${service.id}`} className={styles.link}>اعرف المزيد &larr;</Link>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
