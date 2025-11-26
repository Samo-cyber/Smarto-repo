import Link from 'next/link';
import { Check } from 'lucide-react';

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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">باقات الأسعار</h2>
                    <p className="text-gray-600">اختر الباقة المناسبة لميزانيتك واحتياجاتك</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-3xl border ${index === 1
                                    ? 'border-primary bg-primary/5 shadow-xl scale-105 z-10'
                                    : 'border-gray-100 bg-white hover:shadow-lg transition-shadow'
                                }`}
                        >
                            {index === 1 && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                                    الأكثر طلباً
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>
                                <div className="text-4xl font-bold text-primary">
                                    {plan.price}
                                </div>
                            </div>

                            <div className="border-t border-gray-100 my-8" />

                            <Link
                                href="/contact"
                                className={`block w-full py-4 rounded-xl text-center font-bold transition-colors ${index === 1
                                        ? 'bg-primary text-white hover:bg-primary-dark'
                                        : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                اطلب الباقة
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
