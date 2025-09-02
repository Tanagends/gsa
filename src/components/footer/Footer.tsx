"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import ContactForm from './ContactForm';


/*const ContactForm = () => (
    <div className="bg-main-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl h-full relative overflow-hidden border border-main-600/50">
        <h3 className="font-extrabold text-white text-2xl mb-4">Subscribe Now</h3>
        <p className="text-gray-300 text-base mb-6">Stay in the loop with our latest programs and impact stories.</p>
        <form className="space-y-4">
            <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full p-3 border border-main-500/30 bg-main-700 text-white placeholder-gray-300 rounded-xl focus:ring-4 focus:ring-main-400/40 focus:border-main-400 transition-all"
            />
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-main-600 to-main-500 hover:from-main-500 hover:to-main-400 text-white font-bold py-3 px-4 rounded-xl transition-all transform hover:-translate-y-1 hover:shadow-xl"
            >
                Join the Movement
            </button>
        </form>
    </div>
);*/

const Footer = () => {
    const socialLinks = [
        { name: 'LinkedIn', icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/company/generational-stewards-for-antimicrobials-gsa/' },
        { name: 'Twitter', icon: <Twitter size={24} />, href: 'https://twitter.com/Preservefutures' },
        { name: 'Facebook', icon: <Facebook size={24} />, href: 'https://www.facebook.com/profile.php?id=100093674206378' },
    ];

    return (
        <footer className="relative bg-gradient-to-b from-main-800 to-main-700 text-white pt-24 pb-12 overflow-hidden">
            {/* Radial Background for Depth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.4)_0%,_transparent_80%)] opacity-70 z-0 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.05),_transparent_70%)] z-0 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Logo */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="w-16 h-16 bg-white rounded-full p-1.5 shadow-2xl group-hover:scale-110 transition-transform">
                                <Image
                                    src="/assets/images/logo.jpg"
                                    alt="GSA Global Logo"
                                    width={64}
                                    height={64}
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <span className="text-3xl font-extrabold tracking-tight text-white group-hover:text-main2 transition-colors">
                                GSA Global
                            </span>
                        </Link>
                        <p className="text-gray-300 text-base leading-relaxed max-w-xs">
                            Empowering Africa's next generation of female leaders to transform global health.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-main2 font-extrabold text-xl mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Programs", href: "/programs" },
                                { name: "Media", href: "/media" },
                                { name: "Toolkit", href: "/toolkit" },
                                { name: "Our Team", href: "/ourteam" },
                                { name: "Contact Us", href: "/contactus" },
                            ].map(link => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-200 hover:text-main2 transition duration-300 hover:underline underline-offset-4"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-main2 font-extrabold text-xl mb-6">Get In Touch</h4>
                        <ul className="space-y-5">
                            <li className="flex items-center gap-4">
                                <Phone size={24} className="text-main2" />
                                <a href="tel:+263772916923" className="text-gray-200 hover:text-main2 transition-colors">+263 772 916 923</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={24} className="text-main2" />
                                <a href="mailto:gsateamglobal@gmail.com" className="text-gray-200 hover:text-main2 transition-colors">gsateamglobal@gmail.com</a>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h4 className="text-main2 font-extrabold text-xl mb-4">Follow Us</h4>
                            <div className="flex gap-6">
                                {socialLinks.map(link => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-200 hover:text-main2 transition-all transform hover:scale-125"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-white/20 pt-8 mt-10 text-sm text-center md:flex md:justify-between text-gray-400">
                    <p>© {new Date().getFullYear()} GSA Global. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">Crafted with ♥ by <a href="https://wa.me/263771975597" target="_blank" rel="noopener noreferrer" className="text-main2 hover:underline">PixelCrafte</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

