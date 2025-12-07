import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, image, index }) => {
    return (
        <div
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                {/* Floating Icon */}
                <div className="absolute -bottom-6 right-6 bg-[#1A73E8] p-3 rounded-xl shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300 border-4 border-white">
                    {/* Clone icon to adjust size if needed, or render as is */}
                    {React.cloneElement(icon, { size: 28, className: "text-white" })}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 pt-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1A73E8] transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {description}
                </p>

                <Link to="/contact" className="inline-flex items-center font-bold text-[#1A73E8] hover:text-[#1557B0] transition-colors group/btn mt-auto">
                    Book Now
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
