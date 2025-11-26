import { Quote } from 'lucide-react';

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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">ماذا يقول عملاؤنا؟</h2>
                    <p className="text-gray-600">آراء حقيقية من عملاء سعداء</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-3xl relative">
                            <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed relative z-10">
                                "{testimonial.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
