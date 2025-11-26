import { Check } from 'lucide-react';

interface ServiceFeaturesProps {
    features: string[];
}

export const ServiceFeatures = ({ features }: ServiceFeaturesProps) => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">مميزات الخدمة</h2>
                    <p className="text-gray-600">ما الذي يميز خدماتنا عن غيرنا؟</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
                        >
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                <Check className="w-5 h-5" />
                            </div>
                            <span className="text-lg font-medium text-gray-800 pt-2">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
