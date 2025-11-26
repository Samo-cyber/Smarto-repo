import { CheckCircle } from 'lucide-react';
import styles from './ServiceFeatures.module.css';

interface ServiceFeaturesProps {
    features: string[];
}

export const ServiceFeatures = ({ features }: ServiceFeaturesProps) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>مميزات الخدمة</h2>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <CheckCircle size={28} />
                            </div>
                            <p className={styles.featureText}>{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
