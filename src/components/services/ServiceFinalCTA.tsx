import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from './ServiceFinalCTA.module.css';

interface ServiceFinalCTAProps {
    title: string;
    buttonText: string;
}

export const ServiceFinalCTA = ({ title, buttonText }: ServiceFinalCTAProps) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <Link href="/contact">
                    <button className={styles.ctaButton}>
                        {buttonText}
                        <ArrowLeft size={20} />
                    </button>
                </Link>
            </div>
        </section>
    );
};
