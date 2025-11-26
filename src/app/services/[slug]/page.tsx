import { notFound } from 'next/navigation';
import content from '@/data/site-content.json';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceDefinition } from '@/components/services/ServiceDefinition';
import { ServiceFeatures } from '@/components/services/ServiceFeatures';
import { ServicePricing } from '@/components/services/ServicePricing';
import { ServiceSteps } from '@/components/services/ServiceSteps';
import { ServicePortfolio } from '@/components/services/ServicePortfolio';
import { ServiceTestimonials } from '@/components/services/ServiceTestimonials';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { ServiceFinalCTA } from '@/components/services/ServiceFinalCTA';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export async function generateStaticParams() {
    return content.components.services_section.services.map((service) => ({
        slug: service.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = content.components.services_section.services.find(
        (s) => s.id === slug
    );

    if (!service) {
        return {
            title: '404 - الصفحة غير موجودة',
        };
    }

    return {
        title: `${service.title} | Smarto`,
        description: service.desc,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = content.components.services_section.services.find(
        (s) => s.id === slug
    );

    if (!service || !service.details) {
        notFound();
    }

    const { details } = service;

    return (
        <>
            <Header />
            <main className="min-h-screen">
                <ServiceHero
                    headline={details.hero.headline}
                    subheadline={details.hero.subheadline}
                    ctaText={details.hero.cta_text}
                    image={details.hero.image}
                />

                <ServiceDefinition
                    description={details.definition.description}
                    problemPoints={details.definition.problem_points}
                />

                <ServiceFeatures features={details.features} />

                <ServiceSteps steps={details.steps} />

                <ServicePricing plans={details.pricing} />

                <ServicePortfolio items={details.portfolio} />

                <ServiceTestimonials testimonials={details.testimonials} />

                <ServiceFAQ faq={details.faq} />

                <ServiceFinalCTA
                    title={details.final_cta.title}
                    buttonText={details.final_cta.button_text}
                />
            </main>
            <Footer />
        </>
    );
}
