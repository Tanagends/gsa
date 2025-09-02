"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { X, Menu } from 'lucide-react';
import { DonateButton } from './DonateButton';

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Media", href: "/media" },
    { name: "Toolkit", href: "/toolkit" },
    { name: "Our Team", href: "/ourteam" },
    { name: "Contact Us", href: "/contactus" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const menu = document.getElementById('mobile-menu');
        if (isOpen) {
            gsap.to(menu, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: 'power3.out'
            });
        } else {
            gsap.to(menu, {
                opacity: 0,
                scale: 0.95,
                duration: 0.2,
                ease: 'power3.in'
            });
        }
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className={`w-full flex justify-center transition-all duration-300 ${isScrolled || isOpen ? 'bg-main-700 shadow-lg rounded-b-lg' : 'bg-main-700 shadow-lg rounded-b-lg'}`}>
              <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                <Link href="/" className="flex items-center gap-2 z-50">
                    <div className="w-12 h-12 bg-white rounded-full p-1 shadow-md">
                        <Image src="/assets/images/logo.jpg" alt="GSA Global Logo" width={48} height={48} className="rounded-full" />
                    </div>
                    <span className={`font-bold text-xl transition-colors text-white hover:text-main2`}>GSA Global</span>
                </Link>

                <ul className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} className={`font-semibold pb-1 border-b-2 transition-all duration-300 ${pathname === link.href ? 'text-main2 border-main2' : `text-white border-transparent hover:text-main2 hover:border-main2`}`}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:block">
                    <DonateButton />
                </div>

                <button onClick={toggleMenu} className="lg:hidden text-white z-50">
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
              </div>
            </nav>

            <div
                id="mobile-menu"
                className={`lg:hidden fixed inset-0 bg-main-700 bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
            >
                <ul className="text-center space-y-6">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} onClick={toggleMenu} className={`text-3xl font-bold transition-colors duration-300 ${pathname === link.href ? 'text-main2' : 'text-white hover:text-main2'}`}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="mt-8">
                    <DonateButton />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
