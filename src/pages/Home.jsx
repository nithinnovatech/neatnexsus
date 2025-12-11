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
        <div className="pt-16 sm:pt-20 md:pt-24 bg-home-dark min-h-screen">

            {/* ================= HERO SECTION ================= */}
            <HeroSlider />

            <section className="py-4 sm:py-6 animate-fade-in-up">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Welcome to Neat Nexus</h1>
                </div>
            </section>

            {/* ================= ABOUT PREVIEW ================= */}
            <section className="bg-home-dark-alt py-8 sm:py-10 md:py-12 animate-fade-in-up">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <div className="inline-block px-3 sm:px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 animate-fade-in">
                            ABOUT US
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 animate-fade-in-up">Your Trusted Lifestyle Partner</h2>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Neat Nexus is your premier provider for comprehensive home and business management solutions.
                            We offer professional housekeeping, security services, event assistance, digital solutions, and
                            gardening expertise.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <a
                                href="/about"
                                className="bg-[#1A73E8] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1766CE] transition transform hover:-translate-y-1 shadow-lg text-center text-sm"
                            >
                                Learn More
                            </a>
                            <a
                                href="/contact"
                                className="border-2 border-[#1A73E8] text-[#1A73E8] px-4 py-2 rounded-lg font-semibold hover:bg-[#1A73E8] hover:text-white transition text-center text-sm"
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
                                className="rounded-xl shadow-xl object-cover w-full h-auto max-h-64 md:max-h-80"
                            />
                            <div className="hidden md:flex absolute -bottom-3 -left-3 w-16 h-16 bg-[#1A73E8] rounded-xl shadow-lg items-center justify-center animate-float z-10">
                                <span className="text-white text-xl font-bold">500+</span>
                            </div>
                            <div className="hidden md:flex absolute -top-3 -right-3 w-20 h-20 bg-[#1A73E8] rounded-xl shadow-lg items-center justify-center opacity-90 animate-float z-10" style={{ animationDelay: '1.5s' }}>
                                <span className="text-white text-xs font-semibold text-center px-1">Happy Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="py-8 sm:py-10 md:py-12 animate-fade-in-up">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-in-up">
                        <div className="inline-block px-3 sm:px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-xs sm:text-sm font-semibold mb-3">
                            OUR SERVICES
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                            Professional Services
                        </h2>
                        <p className="text-gray-300 text-sm sm:text-base px-2">
                            Tailored solutions designed to meet your specific needs with excellence and care.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
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

                    <div className="text-center mt-6 sm:mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a
                            href="/services"
                            className="bg-[#1A73E8] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1557B0] transition transform hover:-translate-y-1 shadow-lg text-sm"
                        >
                            View All Services
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="bg-home-dark-alt py-8 sm:py-10 md:py-12 animate-fade-in-up">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-in-up">
                        <div className="inline-block px-3 sm:px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-xs sm:text-sm font-semibold mb-3">
                            WHY CHOOSE US
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                            Why Choose Neat Nexus?
                        </h2>
                        <p className="text-gray-300 text-sm sm:text-base px-2">
                            We go above and beyond to provide fast, friendly, and reliable service tailored to you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        <ServiceBox
                            title="Highly Trained Professionals"
                            icon="👨‍💼"
                            desc="Our team handles every project with care and expertise."
                            gradient="from-indigo-500 to-purple-500"
                        />

                        <ServiceBox
                            title="Customized Service Plans"
                            icon="📋"
                            desc="We tailor our solutions to your specific requirements."
                            gradient="from-cyan-500 to-blue-500"
                        />

                        <ServiceBox
                            title="100% Satisfaction Guarantee"
                            icon="✅"
                            desc="We ensure you are completely satisfied with our work."
                            gradient="from-emerald-500 to-green-500"
                        />
                    </div>

                    <div className="text-center mt-6 sm:mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a
                            href="/contact"
                            className="bg-[#1A73E8] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1557B0] transition transform hover:-translate-y-1 shadow-lg text-sm"
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section className="py-8 sm:py-10 md:py-12 animate-fade-in-up">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-in-up">
                        <div className="inline-block px-3 sm:px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-xs sm:text-sm font-semibold mb-3">
                            TESTIMONIALS
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                            What Our Clients Say
                        </h2>
                        <p className="text-gray-300 text-sm sm:text-base px-2">
                            See how we've helped households and businesses create better environments.
                        </p>
                    </div>

                    <div className="mt-4 sm:mt-6">
                        <TestimonialCarousel testimonials={testimonials} />
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="bg-gradient-to-r from-[#1A73E8] to-[#1557B0] py-8 sm:py-10 md:py-12 text-center text-white animate-fade-in-up">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 animate-fade-in-up">
                        We're Here to Elevate Your Lifestyle
                    </h2>
                    <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto mb-5 sm:mb-6 animate-fade-in-up px-2" style={{ animationDelay: '0.2s' }}>
                        Contact our team today to discuss your needs.
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a
                            href="/contact"
                            className="bg-white text-[#1A73E8] px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg text-sm"
                        >
                            Get in Touch
                        </a>
                        <a
                            href="tel:+919666877464"
                            className="bg-transparent border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-white/10 transition transform hover:-translate-y-1 text-sm"
                        >
                            Call: +91 9666877464
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

/* Reusable Service Preview Box */
function ServiceBox({ title, image, icon, desc, gradient = "from-blue-500 to-cyan-500" }) {
    const whatsappNumber = "919666877464";
    const whatsappMessage = encodeURIComponent(`Hi, I'm interested in your ${title} service. Please provide more details.`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm shadow-lg rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/10 hover:border-white/20 overflow-hidden animate-fade-in-up">
            {/* Image Section */}
            {image && (
                <div className="relative h-28 sm:h-32 md:h-36 overflow-hidden">
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
                <div className="pt-4 px-4">
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center text-2xl text-white mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {icon}
                    </div>
                </div>
            )}

            {/* Content Section */}
            <div className={`p-3 sm:p-4 ${image ? 'pt-2 sm:pt-3' : ''}`}>
                <h3 className="relative text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-white transition-colors line-clamp-1">{title}</h3>
                <p className="relative text-gray-300 leading-relaxed text-xs sm:text-sm group-hover:text-gray-200 transition-colors line-clamp-2">{desc}</p>

                {image ? (
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative mt-2 sm:mt-3 inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-1.5 rounded-md transition-all text-xs shadow-md hover:shadow-lg"
                    >
                        <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Book Now
                    </a>
                ) : (
                    <Link to="/contact" className="relative mt-2 sm:mt-3 flex items-center text-blue-400 font-semibold group-hover:text-white transition-colors text-xs">
                        <span>Learn more</span>
                        <svg className="w-3 h-3 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                )}
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
