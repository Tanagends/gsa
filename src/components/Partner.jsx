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

// --- Our Partners Component (Polished with Brand Colors) ---

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
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: el.querySelector('.partners-grid'),
          start: 'top 85%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#062f36] to-[#084550] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFCC00] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#13d4f7] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16 section-title">
          <span className="inline-block px-4 py-1 bg-[#FFCC00] text-[#062f36] text-sm font-semibold rounded-full mb-4">
            Our Network
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Our Valued Partners
          </h2>
          <p className="text-lg text-[#13d4f7] max-w-2xl mx-auto">
            Collaborating with leading organizations to create lasting impact and drive meaningful change across Africa.
          </p>
        </div>
        
        <div className="partners-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {partnersData.map((partner, index) => (
            <div 
              key={partner.name} 
              className="partner-card group bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-[#13d4f7]/20"
            >
              {/* Card Header with Accent */}
              <div className="h-1 bg-gradient-to-r from-[#13d4f7] via-[#FFCC00] to-[#13d4f7]"></div>
              
              {/* Logo Container */}
              <div className="p-8 flex-grow flex flex-col items-center bg-white">
                <div className="relative w-full h-24 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Image 
                    src={partner.image} 
                    alt={`${partner.name} logo`}
                    layout="fill"
                    objectFit="contain"
                    className="filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                
                {/* Partner Name */}
                <h3 className="text-lg font-bold text-[#062f36] text-center mb-3 line-clamp-2">
                  {partner.name}
                </h3>
                
                {/* Partner Description */}
                <p className="text-sm text-[#084550]/80 text-center line-clamp-3 flex-grow">
                  {partner.description}
                </p>
              </div>
              
              {/* CTA Button */}
              <a 
                href={partner.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFCC00] to-[#FFCC00]/90 text-[#062f36] font-bold py-4 px-6 transition-all duration-300 hover:from-[#13d4f7] hover:to-[#14b8d4] hover:text-white"
              >
                <span>Visit Partner</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
        
        {/* Bottom Accent */}
        <div className="mt-16 text-center">
          <p className="text-[#13d4f7] text-sm font-medium">
            Building stronger communities through strategic partnerships
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
