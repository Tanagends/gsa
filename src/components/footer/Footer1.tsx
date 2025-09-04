"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const ContactForm = () => (
    <div className="bg-white p-8 rounded-2xl shadow-xl h-full transform transition-all hover:shadow-2xl">
        <h3 className="font-extrabold text-gray-800 text-xl mb-4 tracking-tight">Join Our Newsletter</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">Stay updated with our latest programs and impact stories.</p>
        <form className="space-y-4">
            <input 
                type="email" 
                placeholder="your.email@example.com" 
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-main-600 focus:border-transparent transition-all duration-300" 
            />
            <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-main-700 to-main-600 text-white font-bold py-3 px-4 rounded-lg hover:from-main-600 hover:to-main-500 transition-all duration-300 transform hover:-translate-y-1"
            >
                Subscribe Now
            </button>
        </form>
    </div>
);

const Footer = () => {
    const socialLinks = [
        { name: 'LinkedIn', icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/company/generational-stewards-for-antimicrobials-gsa/' },
        { name: 'Twitter', icon: <Twitter size={24} />, href: 'https://twitter.com/Preservefutures' },
        { name: 'Facebook', icon: <Facebook size={24} />, href: 'https://www.facebook.com/profile.php?id=100093674206378' },
    ];

    return (
        <footer className="bg-gradient-to-br from-main-700 to-main-600 text-white pt-20 pb-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/images/footer-pattern.webp')] opacity-10"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="w-16 h-16 bg-white rounded-full p-1.5 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                                <Image 
                                    src="/assets/images/logo.webp" 
                                    alt="GSA Global Logo" 
                                    width={64} 
                                    height={64} 
                                    className="rounded-full object-cover" 
                                />
                            </div>
                            <span className="font-extrabold text-3xl text-white tracking-tight group-hover:text-main2 transition-colors">GSA Global</span>
                        </Link>
                        <p className="text-gray-100 text-base leading-relaxed max-w-xs">
                            Empowering Africa's next generation of female leaders to conquer global health challenges.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-main2 font-extrabold text-xl mb-6 tracking-tight">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Programs", href: "/programs" },
                                { name: "Media", href: "/media" },
                                { name: "Toolkit", href: "/toolkit" },
                                { name: "Our Team", href: "/ourteam" },
                                { name: "Contact Us", href: "/contactus" },
                            ].map(link => (
                                <li key={`footer-${link.name}`}>
                                    <Link 
                                        href={link.href} 
                                        className="text-gray-200 hover:text-main2 transition-colors duration-200 hover:underline underline-offset-4"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-main2 font-extrabold text-xl mb-6 tracking-tight">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 group">
                                <Phone size={22} className="text-main2 group-hover:scale-110 transition-transform duration-200"/>
                                <a href="tel:+263772916923" className="text-gray-200 hover:text-main2 transition-colors duration-200">+263 772 916 923</a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <Mail size={22} className="text-main2 group-hover:scale-110 transition-transform duration-200"/>
                                <a href="mailto:gsateamglobal@gmail.com" className="text-gray-200 hover:text-main2 transition-colors duration-200">gsateamglobal@gmail.com</a>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <h4 className="text-main2 font-extrabold text-xl mb-6 tracking-tight">Follow Us</h4>
                            <div className="flex gap-6">
                                {socialLinks.map(link => (
                                    <a 
                                        key={link.name} 
                                        href={link.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-gray-200 hover:text-main2 transition-colors duration-200 transform hover:scale-110"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <ContactForm />
                    </div>
                </div>

                <div className="border-t border-white/30 pt-8 mt-12 text-center md:flex md:justify-between text-sm text-gray-300">
                    <p>© {new Date().getFullYear()} GSA Global. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">Crafted with ♥ by <a href="https://wa.me/263771975597" target="_blank" rel="noopener noreferrer" className="text-main2 hover:underline underline-offset-4">PixelCrafte</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
