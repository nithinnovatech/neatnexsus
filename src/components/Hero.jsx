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

    // If we are on the home page, render the text-only version with increased height
    if (location.pathname === "/") {
        return (
            <section className="relative overflow-hidden -mt-1 min-h-[85vh] flex items-center justify-center">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <img src="/hero.png" alt="Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/75"></div>
                </div>

                {/* Animated Background Blobs */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>

                {/* Main Content */}
                <div className="w-full max-w-7xl px-6 relative z-10 text-center animate-fade-in-up">
                    <div className="py-10 mx-auto">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 leading-tight tracking-tight drop-shadow-md animate-fade-in-up">
                            Reliable Facility Management & <br className="hidden md:block" /> Manpower Solutions for Your Business
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
                            <span className="font-medium text-blue-400 block mb-4 text-xl md:text-2xl tracking-wide">Professional. Trained. Trusted.</span>
                            From housekeeping to security to staffing — we manage everything so you can focus on your core work.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <a
                                href="/contact"
                                className="bg-[#1A73E8] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#1557B0] transition-all transform hover:scale-105 shadow-xl flex items-center w-full md:w-auto justify-center"
                            >
                                Get a Free Quote Today
                            </a>
                            <a
                                href={`tel:${contactInfo.phone}`}
                                className="bg-white text-[#1A73E8] px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center w-full md:w-auto justify-center"
                            >
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                Call / WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative overflow-hidden -mt-1">


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
