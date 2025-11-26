'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    q: string;
    a: string;
}

interface ServiceFAQProps {
    faq: FAQItem[];
}

export const ServiceFAQ = ({ faq }: ServiceFAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">الأسئلة الشائعة</h2>
                    <p className="text-gray-600">إجابات على أكثر الأسئلة تكراراً</p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faq.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-right"
                            >
                                <span className="font-bold text-lg text-gray-900">{item.q}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
