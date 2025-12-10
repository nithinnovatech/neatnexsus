import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, image, index, colorTheme = "blue" }) => {

    const themeClasses = {
        blue: {
            bgLight: "bg-blue-500/10",
            text: "text-blue-600",
            hoverText: "group-hover:text-blue-600",
            buttonText: "text-blue-600",
            buttonHover: "hover:text-blue-700",
            iconColor: "text-blue-600"
        },
        red: {
            bgLight: "bg-red-500/10",
            text: "text-red-600",
            hoverText: "group-hover:text-red-600",
            buttonText: "text-red-600",
            buttonHover: "hover:text-red-700",
            iconColor: "text-red-600"
        },
        purple: {
            bgLight: "bg-purple-500/10",
            text: "text-purple-600",
            hoverText: "group-hover:text-purple-600",
            buttonText: "text-purple-600",
            buttonHover: "hover:text-purple-700",
            iconColor: "text-purple-600"
        },
        cyan: {
            bgLight: "bg-cyan-500/10",
            text: "text-cyan-600",
            hoverText: "group-hover:text-cyan-600",
            buttonText: "text-cyan-600",
            buttonHover: "hover:text-cyan-700",
            iconColor: "text-cyan-600"
        },
        green: {
            bgLight: "bg-green-500/10",
            text: "text-green-600",
            hoverText: "group-hover:text-green-600",
            buttonText: "text-green-600",
            buttonHover: "hover:text-green-700",
            iconColor: "text-green-600"
        },
        orange: {
            bgLight: "bg-orange-500/10",
            text: "text-orange-600",
            hoverText: "group-hover:text-orange-600",
            buttonText: "text-orange-600",
            buttonHover: "hover:text-orange-700",
            iconColor: "text-orange-600"
        }
    };

    const theme = themeClasses[colorTheme] || themeClasses.blue;

    return (
        <div
            className="group bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-white/10 flex flex-col h-full animate-fade-in-up"
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

                {/* Floating Icon - Removed */}
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow">
                <div className={`mb-4 ${theme.bgLight} w-14 h-14 rounded-lg flex items-center justify-center ${theme.iconColor}`}>
                    {React.cloneElement(icon, { size: 32, className: "currentColor" })}
                </div>

                <h3 className={`text-2xl font-bold text-white mb-3 ${theme.hoverText} transition-colors`}>
                    {title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {description}
                </p>

                <Link to="/contact" className={`inline-flex items-center font-bold ${theme.buttonText} ${theme.buttonHover} transition-colors group/btn mt-auto`}>
                    Book Now
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
