import styles from './ServiceSteps.module.css';

interface ServiceStepsProps {
    steps: string[];
}

export const ServiceSteps = ({ steps }: ServiceStepsProps) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>خطوات العمل</h2>
                <div className={styles.stepsWrapper}>
                    <div className={styles.stepsList}>
                        {steps.map((step, index) => (
                            <div key={index} className={styles.stepItem}>
                                <div className={styles.stepNumber}>{index + 1}</div>
                                <p className={styles.stepText}>{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
