import Link from 'next/link';
import styles from './ServicePricing.module.css';

interface PricingPlan {
    name: string;
    desc: string;
    price: string;
}

interface ServicePricingProps {
    plans: PricingPlan[];
}

export const ServicePricing = ({ plans }: ServicePricingProps) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>الباقات والأسعار</h2>
                <div className={styles.grid}>
                    {plans.map((plan, index) => (
                        <div key={index} className={`${styles.pricingCard} ${index === 1 ? styles.recommended : ''}`}>
                            {index === 1 && <span className={styles.badge}>الأكثر طلباً</span>}
                            <h3 className={styles.planName}>{plan.name}</h3>
                            <p className={styles.planDesc}>{plan.desc}</p>
                            <div className={styles.planPrice}>{plan.price}</div>
                            <Link href="/contact">
                                <button className={styles.ctaButton}>اطلب عرض سعر</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
