interface ServiceStepsProps {
    steps: string[];
}

export const ServiceSteps = ({ steps }: ServiceStepsProps) => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">كيف نعمل؟</h2>
                    <p className="text-gray-600">خطوات مدروسة لضمان أفضل النتائج</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gray-100 -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative pt-8 text-center group">
                            <div className="w-16 h-16 mx-auto bg-white border-2 border-primary rounded-full flex items-center justify-center text-xl font-bold text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                {index + 1}
                            </div>
                            <h3 className="text-lg font-bold mb-2">الخطوة {index + 1}</h3>
                            <p className="text-gray-600">{step}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
