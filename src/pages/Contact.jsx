import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Since we don't have a backend functionality specified, just alert for now.
        alert("Thanks for contacting us! We'll get back to you soon.");
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
                <div className="w-full px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* Contact Information */}
                        <div className="w-full lg:w-1/3 bg-blue-900/50 backdrop-blur-md text-white p-10 rounded-2xl shadow-xl h-fit border border-blue-500/30">
                            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                            <p className="text-blue-100 mb-10 leading-relaxed">
                                Fill out the form or reach out to us directly through phone or email. We are here to answer your questions and discuss your needs.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="text-blue-400 mr-4 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-bold text-lg">Our Location</h4>
                                        <p className="text-blue-200 mt-1">
                                            Plot No:27 Surya Nagar Near Saregudam<br />
                                            Gandimaisamma – Dundigal Hyderabad- 5000043
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="text-blue-400 mr-4 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-bold text-lg">Phone Number</h4>
                                        <p className="text-blue-200 mt-1">+91 9666877464</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail className="text-blue-400 mr-4 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-bold text-lg">Email Address</h4>
                                        <p className="text-blue-200 mt-1">hello@neatnexus.in</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-blue-800">
                                <h4 className="font-bold text-lg mb-4">Scan QR Code</h4>
                                <div className="bg-white p-2 rounded-lg inline-block">
                                    <img src="/qrcode.png" alt="Scan QR Code" className="w-32 h-32 object-contain" />
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="w-full lg:w-2/3 bg-white/5 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/10">
                            <h2 className="text-3xl font-bold text-white mb-8">Send Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-300 font-medium mb-2">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-white placeholder-gray-400"
                                            placeholder="John"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 font-medium mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-white placeholder-gray-400"
                                            placeholder="Doe"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-300 font-medium mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-white placeholder-gray-400"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 font-medium mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-white placeholder-gray-400"
                                            placeholder="+91 98765 00000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-300 font-medium mb-2">Message</label>
                                    <textarea
                                        rows="5"
                                        className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-white placeholder-gray-400"
                                        placeholder="How can we help you?"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg w-full md:w-auto"
                                >
                                    Send Message
                                    <Send className="ml-2" size={20} />
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
