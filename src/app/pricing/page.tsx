import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { PricingPlans } from "@/components/sections/PricingPlans";

export default function PricingPage() {
    return (
        <main>
            <Header />
            <PageHeader
                title="باقات الأسعار"
                subtitle="اختر الباقة المناسبة لميزانيتك واحتياجات مشروعك"
            />
            <PricingPlans />
            <Footer />
        </main>
    );
}
