import React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/Hero";
import TestimonialCarousel from "../components/TestimonialCarousel";

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Homeowner",
        content: "Neat Nexus transformed our home! The housekeeping team is thorough, professional, and trustworthy. Highly recommended!"
    },
    {
        name: "James Carter",
        role: "Office Manager",
        content: "Their security services are top-notch. We feel completely safe knowing their team is guarding our premises 24/7."
    },
    {
        name: "Emily Chen",
        role: "Event Planner",
        content: "I hired them for event assistance, and they handled everything seamlessly. It made my job so much easier!"
    },
    {
        name: "David Wilson",
        role: "Hotel Manager",
        content: "The staff they provided were well-trained and professional. Neat Nexus is our go-to for manpower solutions."
    },
    {
        name: "Priya Patel",
        role: "Tech Startup CEO",
        content: "Their digital solutions team revamped our entire IT infrastructure. Efficient, modern, and very reliable service."
    }
];

export default function Home() {
    return (
        <div className="pt-20 sm:pt-24 md:pt-32 bg-home-dark min-h-screen">

            {/* ================= HERO SECTION ================= */}
            <HeroSlider />

            <section className="py-6 sm:py-8 animate-fade-in-up">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Welcome to Neat Nexus</h1>
                </div>
            </section>

            {/* ================= ABOUT PREVIEW ================= */}
            <section className="bg-home-dark-alt py-12 sm:py-16 md:py-20 animate-fade-in-up">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="inline-block px-4 sm:px-6 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm sm:text-lg font-semibold mb-4 sm:mb-6 animate-fade-in">
                            ABOUT US
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 animate-fade-in-up">Your Trusted Lifestyle Partner</h2>
                        <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-5 sm:mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Neat Nexus is your premier provider for comprehensive home and business management solutions.
                            We offer professional housekeeping, security services, event assistance, digital solutions, and
                            gardening expertise. Our mission is to create seamless, efficient, and beautiful environments
                            for our clients, allowing you to focus on what truly matters.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <a
                                href="/about"
                                className="bg-[#1A73E8] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#1766CE] transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-center text-sm sm:text-base"
                            >
                                Learn More
                            </a>
                            <a
                                href="/contact"
                                className="border-2 border-[#1A73E8] text-[#1A73E8] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#1A73E8] hover:text-white transition text-center text-sm sm:text-base"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="relative">
                            <img
                                src="/homeabout.png"
                                alt="Neat Nexus Team"
                                className="rounded-2xl shadow-xl object-cover w-full h-full"
                            />
                            <div className="hidden sm:flex absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 bg-[#1A73E8] rounded-2xl shadow-lg items-center justify-center animate-float z-10">
                                <span className="text-white text-2xl sm:text-3xl font-bold">500+</span>
                            </div>
                            <div className="hidden sm:flex absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-[#1A73E8] rounded-2xl shadow-lg items-center justify-center opacity-90 animate-float z-10" style={{ animationDelay: '1.5s' }}>
                                <span className="text-white text-sm sm:text-lg font-semibold text-center px-2">Happy Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="py-12 sm:py-16 md:py-20 animate-fade-in-up">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 animate-fade-in-up">
                        <div className="inline-block px-4 sm:px-6 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm sm:text-lg font-semibold mb-4 sm:mb-6">
                            OUR SERVICES
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                            Professional Services
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg px-2">
                            Tailored solutions designed to meet your specific needs with excellence and care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
                        <ServiceBox
                            title="Housekeeping"
                            image="/housekeeping.jpg"
                            desc="From deep cleaning to daily maintenance, our professionals ensure your space is spotless and hygienic using eco-friendly products."
                            gradient="from-blue-500 to-cyan-500"
                        />

                        <ServiceBox
                            title="Security Services"
                            image="/security.jpg"
                            desc="Protect your assets and loved ones with trained personnel and surveillance systems for round-the-clock protection."
                            gradient="from-purple-500 to-indigo-500"
                        />

                        <ServiceBox
                            title="Event Assistance"
                            image="/eventmanagement.jpg"
                            desc="Make your events memorable with professional support staff handling logistics, guest management, and coordination."
                            gradient="from-pink-500 to-rose-500"
                        />

                        <ServiceBox
                            title="Digital Solutions"
                            image="/digitalsolutions.png"
                            desc="Steer your business into the future with IT support, digital marketing, and software solutions tailored for you."
                            gradient="from-emerald-500 to-teal-500"
                        />

                        <ServiceBox
                            title="Gardening & Landscaping"
                            image="/gardening.jpg"
                            desc="Create your personal oasis with expert lawn care to landscape design, nurturing vibrant outdoor spaces."
                            gradient="from-green-500 to-lime-500"
                        />

                        <ServiceBox
                            title="Canteen & Kitchen Staff"
                            image="/kitchen.jpg"
                            desc="Experienced staff to manage your canteen operations efficiently, ensuring quality service and hygiene."
                            gradient="from-orange-500 to-amber-500"
                        />

                        <ServiceBox
                            title="Washroom Maintenance"
                            image="/washroomcleaning.jpg"
                            desc="Dedicated maintenance for washrooms ensuring high standards of sanitation and hygiene for all users."
                            gradient="from-sky-500 to-blue-500"
                        />

                        <ServiceBox
                            title="24/7 Support"
                            image="/support.png"
                            desc="Round-the-clock assistance to ensure your peace of mind whenever you need us, day or night."
                            gradient="from-violet-500 to-purple-500"
                        />
                    </div>

                    <div className="text-center mt-10 sm:mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a
                            href="/services"
                            className="bg-[#1A73E8] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#1557B0] transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base"
                        >
                            View All Services
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="bg-home-dark-alt py-12 sm:py-16 md:py-20 animate-fade-in-up">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 animate-fade-in-up">
                        <div className="inline-block px-4 sm:px-6 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm sm:text-lg font-semibold mb-4 sm:mb-6">
                            WHY CHOOSE US
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                            Why Choose Neat Nexus?
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg px-2">
                            We go above and beyond to provide fast, friendly, and reliable service tailored to you.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mt-8 sm:mt-10">
                        <ServiceBox
                            title="Highly Trained Professionals"
                            icon="👨‍💼"
                            desc="Our team handles every project with the utmost care, respect, and professional expertise."
                            gradient="from-indigo-500 to-purple-500"
                        />

                        <ServiceBox
                            title="Customized Service Plans"
                            icon="📋"
                            desc="We understand that every client is unique, so we tailor our solutions to your specific requirements."
                            gradient="from-cyan-500 to-blue-500"
                        />

                        <ServiceBox
                            title="100% Satisfaction Guarantee"
                            icon="✅"
                            desc="We are committed to excellence and ensure you are completely satisfied with our work."
                            gradient="from-emerald-500 to-green-500"
                        />
                    </div>

                    <div className="text-center mt-10 sm:mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a
                            href="/contact"
                            className="bg-[#1A73E8] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#1557B0] transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base"
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section className="py-12 sm:py-16 md:py-20 animate-fade-in-up">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 animate-fade-in-up">
                        <div className="inline-block px-4 sm:px-6 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm sm:text-lg font-semibold mb-4 sm:mb-6">
                            TESTIMONIALS
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg px-2">
                            See how we've helped households and businesses create better environments.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-10">
                        <TestimonialCarousel testimonials={testimonials} />
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="bg-gradient-to-r from-[#1A73E8] to-[#1557B0] py-12 sm:py-16 md:py-20 text-center text-white animate-fade-in-up">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
                        We're Here to Elevate Your Lifestyle
                    </h2>
                    <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in-up px-2" style={{ animationDelay: '0.2s' }}>
                        Contact our team today to discuss your needs and discover how we can provide the perfect solution for you.
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a
                            href="/contact"
                            className="bg-white text-[#1A73E8] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base"
                        >
                            Get in Touch
                        </a>
                        <a
                            href="tel:+919666877464"
                            className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition transform hover:-translate-y-1 text-sm sm:text-base"
                        >
                            Call Now: +91 9666877464
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

/* Reusable Service Preview Box */
function ServiceBox({ title, image, icon, desc, gradient = "from-blue-500 to-cyan-500" }) {
    return (
        <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/10 hover:border-white/20 overflow-hidden animate-fade-in-up">
            {/* Image Section */}
            {image && (
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-40 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
            )}

            {/* Icon fallback (for Why Choose Us section) */}
            {!image && icon && (
                <div className="pt-6 px-6">
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-3xl text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {icon}
                    </div>
                </div>
            )}

            {/* Content Section */}
            <div className={`p-6 ${image ? 'pt-4' : ''}`}>
                <h3 className="relative text-lg font-bold text-white mb-3 group-hover:text-white transition-colors">{title}</h3>
                <p className="relative text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors line-clamp-3">{desc}</p>

                <Link to="/services" className="relative mt-5 flex items-center text-blue-400 font-semibold group-hover:text-white transition-colors text-sm">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
}

function TestimonialCard({ name, role, content }) {
    return (
        <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 border border-white/10 group animate-fade-in-up">
            <div className="flex flex-col h-full justify-between">
                <div>
                    <div className="mb-4 text-blue-400">
                        <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.896 14.353 15.908 15.025 15.036C15.698 14.164 16.591 13.728 17.703 13.728H19.231C19.231 12.677 18.914 11.677 18.281 10.728C17.648 9.778 16.815 9.077 15.783 8.625V5.127C17.688 5.672 19.349 6.786 20.767 8.469C22.184 10.152 22.893 12.164 22.893 14.504V21H14.017ZM5.016 21L5.016 18C5.016 16.896 5.352 15.908 6.024 15.036C6.697 14.164 7.59 13.728 8.702 13.728H10.23C10.23 12.677 9.913 11.677 9.28 10.728C8.647 9.778 7.814 9.077 6.781 8.625V5.127C8.687 5.672 10.348 6.786 11.766 8.469C13.183 10.152 13.892 12.164 13.892 14.504V21H5.016Z" />
                        </svg>
                    </div>
                    <p className="text-gray-300 italic mb-6">"{content}"</p>
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg">{name}</h4>
                    <span className="text-sm text-gray-400 font-medium">{role}</span>
                </div>
            </div>
        </div>
    );
}
