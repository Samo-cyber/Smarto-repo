import Image from 'next/image';
import styles from './ServicePortfolio.module.css';

interface PortfolioItem {
    image: string;
    title: string;
}

interface ServicePortfolioProps {
    items: PortfolioItem[];
}

export const ServicePortfolio = ({ items }: ServicePortfolioProps) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>أمثلة من أعمالنا</h2>
                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.portfolioItem}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className={styles.overlay}>
                                <h3 className={styles.portfolioTitle}>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
