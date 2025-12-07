import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Blogs", href: "/blogs" },
        { name: "Contact", href: "/contact" },
    ];

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-xl py-3" : "bg-white/90 backdrop-blur-md py-3"
            }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
                {/* Logo */}
                <Link to="/" className="flex items-center animate-fade-in-down">
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        NEAT <span className="text-[#1A73E8]">NEXUS</span>
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        link && (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${location.pathname === link.href
                                    ? "text-[#1A73E8] bg-[#1A73E8]/10"
                                    : "text-gray-700 hover:text-[#1A73E8] hover:bg-gray-100"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}

                    {/* CTA Button */}
                    <Link
                        to="/contact"
                        className="ml-4 bg-[#1A73E8] text-white px-5 py-2 rounded-lg hover:bg-[#1557B0] transition transform hover:scale-105 shadow-md hover:shadow-lg font-medium hidden md:inline-block"
                    >
                        Get in Touch
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 z-50 relative p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu (Accordion Style) */}
            <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === link.href
                                ? 'text-[#1A73E8] bg-blue-50'
                                : 'text-gray-700 hover:text-[#1A73E8] hover:bg-gray-50'
                                }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-2 mt-2 border-t border-gray-100">
                        <Link
                            to="/contact"
                            className="block w-full text-center bg-[#1A73E8] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1557B0] transition shadow-md mx-auto max-w-xs"
                            onClick={() => setMenuOpen(false)}
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
