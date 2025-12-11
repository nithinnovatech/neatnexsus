import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create email content
        const subject = `Contact Form: Message from ${formData.firstName} ${formData.lastName}`;
        const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}
        `.trim();

        // Open default email client with pre-filled content
        const mailtoLink = `mailto:hello@neatnexus.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="min-h-screen bg-home-dark">
            {/* Hero Section */}
            <PageHeader
                title="Contact Us"
                description="We'd love to hear from you. Let's start a conversation."
                icon={Phone}
            />

            <section className="py-20">
                <div className="w-full px-4 sm:px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">

                        {/* Contact Information */}
                        <div className="w-full lg:w-1/3 bg-blue-900/50 backdrop-blur-md text-white p-6 sm:p-10 rounded-2xl shadow-xl h-fit border border-blue-500/30">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Get In Touch</h2>
                            <p className="text-blue-100 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
                                Fill out the form or reach out to us directly through phone or email. We are here to answer your questions and discuss your needs.
                            </p>

                            <div className="space-y-5 sm:space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="text-blue-400 mr-3 sm:mr-4 mt-1 flex-shrink-0" size={22} />
                                    <div>
                                        <h4 className="font-bold text-base sm:text-lg">Our Location</h4>
                                        <p className="text-blue-200 mt-1 text-sm sm:text-base">
                                            Plot No:27 Surya Nagar Near Saregudam<br />
                                            Gandimaisamma – Dundigal Hyderabad- 5000043
                                        </p>
                                    </div>
                                </div>
                                <a href="tel:+919666877464" className="flex items-start hover:opacity-80 transition-opacity">
                                    <Phone className="text-blue-400 mr-3 sm:mr-4 mt-1 flex-shrink-0" size={22} />
                                    <div>
                                        <h4 className="font-bold text-base sm:text-lg">Phone Number</h4>
                                        <p className="text-blue-200 mt-1 text-sm sm:text-base">+91 9666877464</p>
                                    </div>
                                </a>
                                <a href="mailto:hello@neatnexus.in" className="flex items-start hover:opacity-80 transition-opacity">
                                    <Mail className="text-blue-400 mr-3 sm:mr-4 mt-1 flex-shrink-0" size={22} />
                                    <div>
                                        <h4 className="font-bold text-base sm:text-lg">Email Address</h4>
                                        <p className="text-blue-200 mt-1 text-sm sm:text-base">hello@neatnexus.in</p>
                                    </div>
                                </a>
                            </div>

                            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-blue-800">
                                <h4 className="font-bold text-base sm:text-lg mb-4">Scan QR Code</h4>
                                <div className="bg-white p-2 rounded-lg inline-block">
                                    <img src="/qrcode.png" alt="Scan QR Code" className="w-28 h-28 sm:w-32 sm:h-32 object-contain" />
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="w-full lg:w-2/3 bg-white/5 backdrop-blur-sm p-6 sm:p-10 rounded-2xl shadow-xl border border-white/10">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Send Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                                    <div>
                                        <label className="block text-gray-300 font-medium mb-2 text-sm sm:text-base">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-white placeholder-gray-400 text-sm sm:text-base"
                                            placeholder="John"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 font-medium mb-2 text-sm sm:text-base">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-white placeholder-gray-400 text-sm sm:text-base"
                                            placeholder="Doe"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                                    <div>
                                        <label className="block text-gray-300 font-medium mb-2 text-sm sm:text-base">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-white placeholder-gray-400 text-sm sm:text-base"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 font-medium mb-2 text-sm sm:text-base">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-white placeholder-gray-400 text-sm sm:text-base"
                                            placeholder="+91 98765 00000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-300 font-medium mb-2 text-sm sm:text-base">Message</label>
                                    <textarea
                                        rows="5"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-white placeholder-gray-400 text-sm sm:text-base"
                                        placeholder="How can we help you?"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg w-full sm:w-auto text-sm sm:text-base"
                                >
                                    Send Message
                                    <Send className="ml-2" size={18} />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
