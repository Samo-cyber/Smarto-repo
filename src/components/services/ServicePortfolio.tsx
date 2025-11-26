import Image from 'next/image';

interface PortfolioItem {
    image: string;
    title: string;
}

interface ServicePortfolioProps {
    items: PortfolioItem[];
}

export const ServicePortfolio = ({ items }: ServicePortfolioProps) => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">أعمالنا السابقة</h2>
                    <p className="text-gray-600">بعض من مشاريعنا التي نفخر بها</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md hover:shadow-xl transition-all"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
