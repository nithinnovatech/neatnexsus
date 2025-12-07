import React from 'react';
import { Users, Target, Eye, Shield, Star, Lightbulb, Clock, CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const About = () => {
    const stats = [
        { label: "Happy Clients", value: "500+" },
        { label: "Projects Done", value: "1200+" },
        { label: "Team Members", value: "50+" },
        { label: "Years Experience", value: "10+" }
    ];

    const values = [
        {
            icon: <Shield size={32} />,
            title: "Integrity",
            desc: "We conduct our business with the highest standards of professional behavior and ethics."
        },
        {
            icon: <Star size={32} />,
            title: "Excellence",
            desc: "We deliver quality and value in every service, striving for perfection in the details."
        },
        {
            icon: <Lightbulb size={32} />,
            title: "Innovation",
            desc: "We constantly seek better and more efficient ways to serve our clients' evolving needs."
        },
        {
            icon: <Clock size={32} />,
            title: "Reliability",
            desc: "We are dependable and consistent, ensuring you can count on us whenever you need help."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <PageHeader
                title="About Us"
                description="Dedicated to improving standards of living and working through excellence."
                icon={Users}
            />

            {/* Our Story Section */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute top-4 left-4 w-full h-full border-2 border-[#1A73E8] rounded-2xl md:translate-x-4 md:translate-y-4 -z-10 hidden md:block"></div>
                        <img
                            src="/about.png"
                            alt="Our Team"
                            className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border-l-4 border-[#1A73E8]">
                            <p className="text-[#1A73E8] font-bold text-lg mb-1">"Service is our passion."</p>
                            <p className="text-gray-500 text-sm">- The Neat Nexus Team</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <span className="text-[#1A73E8] font-bold uppercase tracking-wider text-sm mb-2 block">Our Story</span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Building Trust Through Quality Service</h2>
                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                            Established with a vision to simplify lifestyle management, Neat Nexus has grown from a small passionate team into a comprehensive service provider.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We understand the complexities of modern life and business. That's why we've curated a suite of services - from housekeeping to security, and event management to digital solutions - all designed to give you back your time and peace of mind.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {['Professional Team', '24/7 Support', 'Custom Solutions', 'Affordable Rates'].map((item, i) => (
                                <div key={i} className="flex items-center text-gray-700 font-medium">
                                    <CheckCircle size={20} className="text-[#1A73E8] mr-2" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Cards - High Impact Design */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1A73E8] rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#1A73E8] font-bold uppercase tracking-wider text-sm mb-2 block">Our Purpose</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Driving Force Behind Our Success</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Mission Card */}
                        <div className="group bg-white rounded-2xl p-10 shadow-xl border border-gray-100 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-[#1A73E8]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1A73E8] transition-colors duration-300">
                                    <Target size={32} className="text-[#1A73E8] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    To empower individuals and businesses by providing top-tier management and support services. We aim to create environments that are safe, efficient, and inspiring, allowing our clients to thrive in their daily endeavors.
                                </p>
                            </div>
                        </div>

                        {/* Vision Card */}
                        <div className="group bg-white rounded-2xl p-10 shadow-xl border border-gray-100 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-[#1A73E8]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1A73E8] transition-colors duration-300">
                                    <Eye size={32} className="text-[#1A73E8] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    To be the globally recognized leader in integrated service solutions, setting the benchmark for quality, reliability, and innovation. We envision a future where Neat Nexus is synonymous with excellence in lifestyle management.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[#1A73E8] font-bold uppercase tracking-wider text-sm mb-2 block">Core Values</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Stand For</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((val, index) => (
                        <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6 text-[#1A73E8]">
                                {val.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {val.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Parallax Section */}
            <div
                className="relative py-24 bg-fixed bg-cover bg-center"
                style={{ backgroundImage: 'url("/security.jpg")' }} // Reusing an existing high-quality image
            >
                <div className="absolute inset-0 bg-[#1A73E8]/90"></div> {/* Blue overlay */}
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-white">
                                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                                <div className="text-blue-200 font-medium tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
