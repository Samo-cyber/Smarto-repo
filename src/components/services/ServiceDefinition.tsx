import { AlertCircle } from 'lucide-react';
import styles from './ServiceDefinition.module.css';

interface ServiceDefinitionProps {
    description: string;
    problemPoints: string[];
}

export const ServiceDefinition = ({ description, problemPoints }: ServiceDefinitionProps) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.description}>{description}</p>

                    <h2 className={styles.problemsTitle}>هل تواجه هذه المشاكل؟</h2>
                    <div className={styles.problemsList}>
                        {problemPoints.map((point, index) => (
                            <div key={index} className={styles.problemItem}>
                                <AlertCircle className={styles.problemIcon} size={24} />
                                <p className={styles.problemText}>{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
