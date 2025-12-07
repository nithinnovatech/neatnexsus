import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="w-full px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/eventmanagement.jpg"
                                alt="Team Meeting"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-blue-600/10 hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        {/* Decoration */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-100 rounded-full -z-10"></div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">Who We Are</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Committed to Excellence in Every Detail.
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            At Neat Nexus, we are more than just a service provider; we are your partners in creating a seamless, efficient, and beautiful environment. Our team of dedicated professionals strives to deliver top-notch quality across all our diverse service offerings.
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-center text-gray-700">
                                <CheckCircle className="text-green-500 mr-3" size={24} />
                                <span className="font-medium">Highly Trained Professionals</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <CheckCircle className="text-green-500 mr-3" size={24} />
                                <span className="font-medium">Customized Service Plans</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <CheckCircle className="text-green-500 mr-3" size={24} />
                                <span className="font-medium">100% Satisfaction Guarantee</span>
                            </div>
                        </div>

                        <Link
                            to="/about"
                            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-colors"
                        >
                            Read More About Us
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
