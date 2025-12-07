import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const HeroSlider = ({ pageTitle }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const location = useLocation();

    // Define the slides with image paths
    const slides = [
        {
            image: "/hero1.png",
        },
        {
            image: "/hero2.png",
        },
        {
            image: "/hero3.png",
        }
    ];

    // Contact information
    const contactInfo = {
        phone: "+91 9666877464",
        email: "hello@neatnexus.in"
    };

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    // Determine if we should show the page title (not on home page)
    const showPageTitle = location.pathname !== "/" && pageTitle;

    return (
        <section className="relative overflow-hidden -mt-1">
            {/* Contact Info Overlay */}
            <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 md:p-4 animate-fade-in-down">
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center text-gray-800">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#1A73E8] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <span className="font-semibold text-sm md:text-base">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-800">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#1A73E8] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span className="font-semibold text-xs md:text-sm">{contactInfo.email}</span>
                    </div>
                </div>
            </div>

            {/* Page Title Overlay (except on home page) */}
            {showPageTitle && (
                <div className="absolute bottom-8 left-0 right-0 z-20 text-center animate-fade-in-up">
                    <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-6 py-3 bg-black/40 backdrop-blur-sm inline-block rounded-xl">
                        {pageTitle}
                    </h1>
                </div>
            )}

            {/* Slides Container */}
            <div className="relative w-full h-[300px] md:h-auto md:aspect-[1920/650]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentSlide
                            ? "opacity-100 scale-100"
                            : index === (currentSlide - 1 + slides.length) % slides.length
                                ? "opacity-0 scale-105"
                                : "opacity-0 scale-100"
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={`Hero Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
                    </div>
                ))}
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                            ? "bg-white w-6"
                            : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;
