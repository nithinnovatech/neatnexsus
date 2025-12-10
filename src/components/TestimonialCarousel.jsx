import React, { useState, useEffect } from 'react';

const TestimonialCarousel = ({ testimonials }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-advance
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="relative w-full max-w-4xl mx-auto px-4 md:px-12">
            {/* Carousel Content */}
            <div className="relative overflow-hidden min-h-[300px]">
                <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 flex items-center justify-center p-4"
                        >
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl max-w-2xl w-full text-center">
                                <div className="mb-6 text-blue-400 flex justify-center">
                                    <svg className="w-10 h-10 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21L14.017 18C14.017 16.896 14.353 15.908 15.025 15.036C15.698 14.164 16.591 13.728 17.703 13.728H19.231C19.231 12.677 18.914 11.677 18.281 10.728C17.648 9.778 16.815 9.077 15.783 8.625V5.127C17.688 5.672 19.349 6.786 20.767 8.469C22.184 10.152 22.893 12.164 22.893 14.504V21H14.017ZM5.016 21L5.016 18C5.016 16.896 5.352 15.908 6.024 15.036C6.697 14.164 7.59 13.728 8.702 13.728H10.23C10.23 12.677 9.913 11.677 9.28 10.728C8.647 9.778 7.814 9.077 6.781 8.625V5.127C8.687 5.672 10.348 6.786 11.766 8.469C13.183 10.152 13.892 12.164 13.892 14.504V21H5.016Z" />
                                    </svg>
                                </div>
                                <p className="text-gray-200 italic mb-8 text-xl md:text-2xl leading-relaxed">"{item.content}"</p>
                                <div>
                                    <h4 className="font-bold text-white text-xl mb-2">{item.name}</h4>
                                    <span className="text-sm text-blue-400 font-semibold tracking-wide uppercase">{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all shadow-lg border border-white/5 group"
                aria-label="Previous testimonial"
            >
                <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all shadow-lg border border-white/5 group"
                aria-label="Next testimonial"
            >
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-blue-500 w-8" : "bg-gray-600 hover:bg-gray-500"
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
