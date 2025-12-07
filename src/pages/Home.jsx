import React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/Hero";

export default function Home() {
    return (
        <div className="bg-gradient-to-b from-[#F8FAFB] to-white pt-20">

            {/* ================= HERO SECTION ================= */}
            <HeroSlider />

            <section className="bg-[#F8FAFB] py-8 animate-fade-in-up">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#1A73E8]">Welcome to Neat Nexus</h1>
                </div>
            </section>

            {/* ================= ABOUT PREVIEW ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
                <div className="order-2 md:order-1">
                    <div className="inline-block px-4 py-1 bg-[#1A73E8]/10 text-[#1A73E8] rounded-full text-sm font-semibold mb-4 animate-fade-in">
                        ABOUT US
                    </div>
                    <h2 className="text-3xl font-bold text-[#1A73E8] mb-4 animate-fade-in-up">Your Trusted Lifestyle Partner</h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Neat Nexus is your premier provider for comprehensive home and business management solutions.
                        We offer professional housekeeping, security services, event assistance, digital solutions, and
                        gardening expertise. Our mission is to create seamless, efficient, and beautiful environments
                        for our clients, allowing you to focus on what truly matters.
                    </p>

                    <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a
                            href="/about"
                            className="bg-[#1A73E8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1766CE] transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                            Learn More
                        </a>
                        <a
                            href="/contact"
                            className="border-2 border-[#1A73E8] text-[#1A73E8] px-6 py-3 rounded-lg font-semibold hover:bg-[#1A73E8] hover:text-white transition"
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
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#1A73E8] rounded-2xl shadow-lg flex items-center justify-center animate-float z-10">
                            <span className="text-white text-3xl font-bold">500+</span>
                        </div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#1A73E8] rounded-2xl shadow-lg flex items-center justify-center opacity-90 animate-float z-10" style={{ animationDelay: '1.5s' }}>
                            <span className="text-white text-lg font-semibold text-center px-2">Happy Clients</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="bg-white py-20 animate-fade-in-up">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                        <div className="inline-block px-4 py-1 bg-[#1A73E8]/10 text-[#1A73E8] rounded-full text-sm font-semibold mb-4">
                            OUR SERVICES
                        </div>
                        <h2 className="text-3xl font-bold text-[#1A73E8] mb-4">
                            Professional Services
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Tailored solutions designed to meet your specific needs with excellence and care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-10">
                        <ServiceBox
                            title="Housekeeping"
                            icon="🏠"
                            desc="Deep cleaning and daily maintenance to ensure your space is spotless and hygienic."
                        />

                        <ServiceBox
                            title="Security Services"
                            icon="🛡️"
                            desc="Comprehensive security personnel and systems to protect your assets and loved ones."
                        />

                        <ServiceBox
                            title="Event Assistance"
                            icon="🎉"
                            desc="Professional logistics and guest management support to make your events memorable."
                        />

                        <ServiceBox
                            title="Digital Solutions"
                            icon="💻"
                            desc="Modern IT support and digital management to streamline your business operations."
                        />

                        <ServiceBox
                            title="Gardening"
                            icon="🌻"
                            desc="Expert landscaping and lawn care to keep your outdoor spaces vibrant and healthy."
                        />

                        <ServiceBox
                            title="24/7 Support"
                            icon="📞"
                            desc="Round-the-clock assistance to ensure your peace of mind whenever you need us."
                        />
                    </div>

                    <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a
                            href="/services"
                            className="bg-[#1A73E8] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1557B0] transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                            View All Services
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="bg-gradient-to-br from-white to-[#F8FAFB] py-20 animate-fade-in-up">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                        <div className="inline-block px-4 py-1 bg-[#1A73E8]/10 text-[#1A73E8] rounded-full text-sm font-semibold mb-4">
                            WHY CHOOSE US
                        </div>
                        <h2 className="text-3xl font-bold text-[#1A73E8] mb-4">
                            Why Choose Neat Nexus?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We go above and beyond to provide fast, friendly, and reliable service tailored to you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-10">
                        <ServiceBox
                            title="Highly Trained Professionals"
                            icon="👨‍💼"
                            desc="Our team handles every project with the utmost care, respect, and professional expertise."
                        />

                        <ServiceBox
                            title="Customized Service Plans"
                            icon="📋"
                            desc="We understand that every client is unique, so we tailor our solutions to your specific requirements."
                        />

                        <ServiceBox
                            title="100% Satisfaction Guarantee"
                            icon="✅"
                            desc="We are committed to excellence and ensure you are completely satisfied with our work."
                        />
                    </div>

                    <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a
                            href="/contact"
                            className="bg-[#1A73E8] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1557B0] transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section className="bg-white py-20 animate-fade-in-up">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                        <div className="inline-block px-4 py-1 bg-[#1A73E8]/10 text-[#1A73E8] rounded-full text-sm font-semibold mb-4">
                            TESTIMONIALS
                        </div>
                        <h2 className="text-3xl font-bold text-[#1A73E8] mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-gray-600 text-lg">
                            See how we've helped households and businesses create better environments.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-10">
                        <TestimonialCard
                            name="Sarah Mitchell"
                            role="Homeowner"
                            content="Neat Nexus transformed our home! The housekeeping team is thorough, professional, and trustworthy. Highly recommended!"
                        />
                        <TestimonialCard
                            name="James Carter"
                            role="Office Manager"
                            content="Their security services are top-notch. We feel completely safe knowing their team is guarding our premises 24/7."
                        />
                        <TestimonialCard
                            name="Emily Chen"
                            role="Event Planner"
                            content="I hired them for event assistance, and they handled everything seamlessly. It made my job so much easier!"
                        />
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="bg-gradient-to-r from-[#1A73E8] to-[#1A73E8] py-20 text-center text-white animate-fade-in-up">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
                        We're Here to Elevate Your Lifestyle
                    </h2>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Contact our team today to discuss your needs and discover how we can provide the perfect solution for you.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a
                            href="/contact"
                            className="bg-white text-[#1A73E8] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                            Get in Touch
                        </a>
                        <a
                            href="tel:+919666877464"
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition transform hover:-translate-y-1"
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
function ServiceBox({ title, icon, desc }) {
    return (
        <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2 border border-gray-100 hover:border-[#1A73E8]/30 group animate-fade-in-up">
            <div className="w-16 h-16 bg-[#1A73E8]/10 rounded-xl flex items-center justify-center text-3xl text-[#1A73E8] mb-6 group-hover:bg-[#1A73E8] group-hover:text-white transition-all duration-300">
                {icon}
            </div>

            <h3 className="text-xl font-bold text-[#1A73E8] mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{desc}</p>

            <Link to="/services" className="mt-6 flex items-center text-[#1A73E8] font-semibold group-hover:text-[#1A73E8] transition-colors">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </Link>
        </div>
    );
}

function TestimonialCard({ name, role, content }) {
    return (
        <div className="p-8 bg-[#F8FAFB] rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 border border-gray-100 group animate-fade-in-up">
            <div className="flex flex-col h-full justify-between">
                <div>
                    <div className="mb-4 text-[#1A73E8]">
                        <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.896 14.353 15.908 15.025 15.036C15.698 14.164 16.591 13.728 17.703 13.728H19.231C19.231 12.677 18.914 11.677 18.281 10.728C17.648 9.778 16.815 9.077 15.783 8.625V5.127C17.688 5.672 19.349 6.786 20.767 8.469C22.184 10.152 22.893 12.164 22.893 14.504V21H14.017ZM5.016 21L5.016 18C5.016 16.896 5.352 15.908 6.024 15.036C6.697 14.164 7.59 13.728 8.702 13.728H10.23C10.23 12.677 9.913 11.677 9.28 10.728C8.647 9.778 7.814 9.077 6.781 8.625V5.127C8.687 5.672 10.348 6.786 11.766 8.469C13.183 10.152 13.892 12.164 13.892 14.504V21H5.016Z" />
                        </svg>
                    </div>
                    <p className="text-gray-600 italic mb-6">"{content}"</p>
                </div>
                <div>
                    <h4 className="font-bold text-[#1A73E8] text-lg">{name}</h4>
                    <span className="text-sm text-gray-500 font-medium">{role}</span>
                </div>
            </div>
        </div>
    );
}
