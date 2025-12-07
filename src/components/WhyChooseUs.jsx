import React from 'react';
import { Clock, Award, DollarSign, Smile } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Clock size={48} className="text-white" />,
            title: "Timely Service",
            description: "We respect your time and ensure punctuality in every task.",
            color: "bg-blue-500"
        },
        {
            icon: <Award size={48} className="text-white" />,
            title: "Top Quality",
            description: "We use premium equipment and trained staff for the best results.",
            color: "bg-indigo-500"
        },
        {
            icon: <DollarSign size={48} className="text-white" />,
            title: "Affordable Rates",
            description: "Premium services at competitive market prices.",
            color: "bg-purple-500"
        },
        {
            icon: <Smile size={48} className="text-white" />,
            title: "Customer Support",
            description: "Friendly support team ready to assist you 24/7.",
            color: "bg-pink-500"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="w-full px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Neat Nexus?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We go above and beyond to ensure your complete satisfaction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className={`absolute top-0 right-0 w-24 h-24 ${feature.color} opacity-10 rounded-bl-full transition-all group-hover:scale-110`}></div>

                            <div className={`inline-flex items-center justify-center p-4 rounded-xl ${feature.color} mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
