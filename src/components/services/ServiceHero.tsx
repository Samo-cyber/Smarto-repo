import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

interface ServiceHeroProps {
    headline: string;
    subheadline: string;
    ctaText: string;
    image: string;
}

export const ServiceHero = ({ headline, subheadline, ctaText, image }: ServiceHeroProps) => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-right order-2 lg:order-1">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                            {headline}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl ml-auto">
                            {subheadline}
                        </p>
                        <div className="flex flex-wrap gap-4 justify-end">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-all hover:shadow-lg hover:-translate-y-1"
                            >
                                {ctaText}
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative order-1 lg:order-2">
                        <div className="relative h-[400px] md:h-[500px] w-full animate-float">
                            <Image
                                src={image}
                                alt={headline}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};
