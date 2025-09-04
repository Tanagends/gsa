"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Data for the components (Updated with descriptions) ---

const partnersData = [
  {
    name: "Zimbabwe Youth Council",
    description: "A key government body dedicated to empowering and developing the youth of Zimbabwe.",
    link: "https://www.linkedin.com/company/zim-youth-council/",
    image: '/assets/images/zyc.webp'
  },
  {
    name: "African Youth Antimicrobial Resistance Alliance",
    description: "A taskforce focused on mobilizing African youth to combat the threat of AMR.",
    link: "https://www.linkedin.com/company/ayara-tf/",
    image: '/assets/images/ayr.webp'
  },
  {
    name: "Stop Superbugs Network",
    description: "An initiative raising awareness and advocating for urgent action against superbugs.",
    link: "https://x.com/theurgentneed?s=11",
    image: '/assets/images/stop.webp'
  },
  {
    name: 'ReAct Africa',
    description: "Part of a global network dedicated to addressing antibiotic resistance in Africa.",
    link: 'https://www.reactgroup.org/about-us/a-global-network/react-africa/',
    image: '/assets/images/react.webp'
  }
];

const galleryImages = [
    { src: '/assets/images/gallery/gallery-1.webp', alt: 'A community health workshop in progress' },
    { src: '/assets/images/gallery/gallery-2.webp', alt: 'Empowered young women leaders' },
    { src: '/assets/images/gallery/gallery-3.webp', alt: 'Students engaged in a learning session' },
    { src: '/assets/images/gallery/gallery-4.webp', alt: 'A GSA Global team member speaking at an event' },
    { src: '/assets/images/gallery/gallery-5.webp', alt: 'Collaborative session with partners' },
];


// --- 1. Our Partners Component (V2 - Responsive Grid) ---

export const OurPartners = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    // SEO-friendly animation for the title
    gsap.fromTo(el.querySelector('.section-title'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } }
    );
    // Staggered animation for the partner cards
    gsap.fromTo(el.querySelectorAll('.partner-card'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: el.querySelector('.partners-grid'),
          start: 'top 85%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 section-title">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Valued Partners</h2>
          <p className="text-lg text-gray-500 mt-2">Collaborating for a greater impact.</p>
        </div>
        <div className="partners-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnersData.map((partner) => (
                <div key={partner.name} className="partner-card bg-white rounded-lg shadow-lg overflow-hidden flex flex-col text-center transition-transform duration-300 hover:-translate-y-2">
                    <div className="p-6 flex-grow flex flex-col items-center">
                        <div className="relative w-40 h-20 mb-4">
                             <Image
                                src={partner.image}
                                alt={`${partner.name} logo`}
                                layout="fill"
                                objectFit="contain"
                                className="transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{partner.name}</h3>
                    </div>
                    <a
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-main2 text-black font-semibold p-4 mt-auto hover:bg-white transition-colors duration-300"
                    >
                        Visit Partner
                    </a>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
