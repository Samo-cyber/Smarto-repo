import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import styles from './ServiceHero.module.css';

interface ServiceHeroProps {
    headline: string;
    subheadline: string;
    ctaText: string;
    image: string;
}

export const ServiceHero = ({ headline, subheadline, ctaText, image }: ServiceHeroProps) => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.textContent}>
                        <h1 className={styles.headline}>
                            {headline}
                        </h1>
                        <p className={styles.subheadline}>
                            {subheadline}
                        </p>
                        <Link href="/contact" className={styles.ctaButton}>
                            {ctaText}
                            <ArrowLeft size={20} />
                        </Link>
                    </div>
                    <div className={styles.imageWrapper}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={image}
                                alt={headline}
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>
                        <div className={styles.decorativeCircle1} />
                        <div className={styles.decorativeCircle2} />
                    </div>
                </div>
            </div>
        </section>
    );
};
