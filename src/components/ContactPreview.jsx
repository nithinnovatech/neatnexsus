import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ContactPreview = () => {
    return (
        <section className="py-20 bg-blue-600">
            <div className="w-full px-6 lg:px-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Elevate Your Lifestyle?
                </h2>
                <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                    Contact us today to discuss your specific needs and how we can provide the perfect solution for you.
                </p>
                <Link
                    to="/contact"
                    className="inline-flex items-center bg-white text-blue-600 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1"
                >
                    Get in Touch
                    <ArrowRight className="ml-2" size={20} />
                </Link>
            </div>
        </section>
    );
};

export default ContactPreview;
