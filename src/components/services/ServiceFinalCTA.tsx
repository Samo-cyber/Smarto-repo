import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ServiceFinalCTAProps {
    title: string;
    buttonText: string;
}

export const ServiceFinalCTA = ({ title, buttonText }: ServiceFinalCTAProps) => {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                    {title}
                </h2>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:shadow-xl hover:-translate-y-1"
                >
                    {buttonText}
                    <ArrowLeft className="w-6 h-6" />
                </Link>
            </div>
        </section>
    );
};
