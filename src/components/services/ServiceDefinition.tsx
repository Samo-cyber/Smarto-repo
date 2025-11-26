import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

interface ServiceDefinitionProps {
    description: string;
    problemPoints: string[];
}

export const ServiceDefinition = ({ description, problemPoints }: ServiceDefinitionProps) => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6">لماذا تحتاج هذه الخدمة؟</h2>
                        <p className="text-xl leading-relaxed text-gray-600">
                            {description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {problemPoints.map((point, index) => (
                            <div
                                key={index}
                                className="bg-red-50/50 p-6 rounded-2xl border border-red-100 hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
                                    <XCircle className="w-6 h-6" />
                                </div>
                                <p className="text-gray-800 font-medium leading-relaxed">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
