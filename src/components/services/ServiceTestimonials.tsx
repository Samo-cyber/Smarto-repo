import { Quote } from 'lucide-react';
import styles from './ServiceTestimonials.module.css';

interface Testimonial {
    name: string;
    role: string;
    text: string;
}

interface ServiceTestimonialsProps {
    testimonials: Testimonial[];
}

export const ServiceTestimonials = ({ testimonials }: ServiceTestimonialsProps) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>آراء عملائنا</h2>
                <div className={styles.grid}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles.testimonialCard}>
                            <Quote className={styles.quoteIcon} size={40} />
                            <p className={styles.testimonialText}>{testimonial.text}</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className={styles.authorInfo}>
                                    <div className={styles.authorName}>{testimonial.name}</div>
                                    <div className={styles.authorRole}>{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
