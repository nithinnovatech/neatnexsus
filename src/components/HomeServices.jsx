import React from 'react';
import { Home, Shield, Users, Monitor, Flower } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeServices = () => {
    const services = [
        {
            id: 1,
            icon: <Home size={40} className="text-blue-600" />,
            title: "Housekeeping",
            description: "Immaculate cleaning services for homes and offices."
        },
        {
            id: 2,
            icon: <Shield size={40} className="text-blue-600" />,
            title: "Security Services",
            description: "Professional security personnel for your safety."
        },
        {
            id: 3,
            icon: <Users size={40} className="text-blue-600" />,
            title: "Event Assistance",
            description: "Reliable support staff for your special events."
        },
        {
            id: 4,
            icon: <Monitor size={40} className="text-blue-600" />,
            title: "Digital Solutions",
            description: "Tech support and digital management services."
        },
        {
            id: 5,
            icon: <Flower size={40} className="text-blue-600" />,
            title: "Gardening",
            description: "Expert landscape maintenance and design."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="w-full px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive solutions designed to meet all your needs under one roof.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="mb-6 p-4 bg-blue-50 rounded-full">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                            <Link to="/services" className="mt-auto text-blue-600 font-semibold hover:text-blue-800 text-sm">
                                Learn More &rarr;
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/services" className="inline-block border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors">
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
