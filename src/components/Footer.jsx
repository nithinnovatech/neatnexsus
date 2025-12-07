import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="w-full px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: Brand & About */}
                    <div>
                        <Link to="/" className="flex items-center mb-4 gap-3">
                            <img src="/logo.png" alt="Neat Nexus Logo" className="h-20 w-auto" />
                            <span className="text-2xl font-bold text-white">
                                Neat<span className="text-blue-500">Nexus</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Empowering your lifestyle with premium home and business services. From housekeeping to digital solutions, we handle it all with excellence.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Our Services */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Housekeeping</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Security Services</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Event Assistance</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Digital Solutions</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Gardening & Landscaping</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">About Us</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Services</Link>
                            </li>
                            <li>
                                <Link to="/blogs" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Latest Blogs</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin size={20} className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">
                                    Plot No:27 Surya Nagar Near Saregudam<br />
                                    Gandimaisamma – Dundigal Hyderabad- 5000043
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="text-blue-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">+91 9666877464</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={20} className="text-blue-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">hello@neatnexus.in</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center bg-gray-900 border-none">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Neat Nexus. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
