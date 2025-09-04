"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Enhanced data structure with better content organization
const aboutContent = [
  {
    id: 'who-we-are',
    title: 'Who We Are',
    subtitle: 'Catalysts for Change',
    image: '/assets/images/bg-1.webp',
    shortText: "We are dedicated to fostering innovation and advocacy in health awareness campaigns, specifically focusing on Antimicrobial Resistance (AMR). Our primary goal is to promote stewardship among students and empower the next generation.",
    fullText: "We are dedicated to fostering innovation and advocacy in our health and awareness campaigns, specifically focusing on Antimicrobial Resistance (AMR). Our primary goal is to promote and empower stewardship among primary and secondary school students. By raising awareness and providing education, we aim to instil a sense of responsibility and understanding of AMR in the younger generation. We are inculcating a culture of social responsibility among young people to mitigate the threat of the spread of antimicrobial resistance in African communities using a One Health Approach.",
    highlights: [
      "Empowering young change-makers",
      "One Health Approach implementation",
      "Training & mentorship programs"
    ],
    stats: { number: "500+", label: "Students Reached" }
  },
  {
    id: 'mission',
    title: 'Our Mission',
    subtitle: 'Empowering Tomorrow\'s Leaders',
    image: '/assets/images/bg-1.webp',
    shortText: "We are committed to empowering the next generation as champions for responsible antimicrobial use. We cultivate student leaders dedicated to combating AMR through research, innovation, and social responsibility.",
    fullText: "We are committed to empowering the next generation as champions and advocates for responsible antimicrobial use. Our mission is to cultivate a community of student leaders dedicated to combating antimicrobial resistance (AMR) through research, innovation, and social responsibility. We provide a dynamic platform for learning and action through engaging educational programs, the creation of collaborative AMR clubs, and mentorship opportunities designed to nurture student ideas.",
    highlights: [
      "Student-led AMR solutions",
      "Collaborative research programs",
      "Stakeholder connections"
    ],
    stats: { number: "15+", label: "AMR Clubs Created" }
  },
  {
    id: 'vision',
    title: 'Our Vision',
    subtitle: 'A Resistant-Free Future',
    image: '/assets/images/bg-1.webp',
    shortText: "Our vision is to empower and educate young people to understand and tackle antimicrobial resistance by fostering innovative solutions for this critical global health threat.",
    fullText: "Our vision is to empower and educate young people to understand and tackle antimicrobial resistance (AMR) by fostering innovative solutions. We aim to engage and equip the next generation to actively contribute to global efforts in addressing this critical health threat.",
    highlights: [
      "Global AMR awareness",
      "Youth-driven innovation",
      "Sustainable health solutions"
    ],
    stats: { number: "10+", label: "Countries Impacted" }
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showFullText, setShowFullText] = useState(false);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Animate the whole section on scroll
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    // Animate stats
    gsap.fromTo(statsRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 90%',
        }
      }
    );
  }, []);

  useEffect(() => {
    // Reset expanded text when tab changes
    setShowFullText(false);
    
    // Animate the content and image when the tab changes
    const tl = gsap.timeline();
    tl.to(contentRef.current, { opacity: 0, y: 20, duration: 0.3, ease: 'power2.in' })
      .to(imageRef.current, { opacity: 0, scale: 0.95, rotation: -2, duration: 0.3, ease: 'power2.in' }, "-=0.3")
      .to(contentRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
      .to(imageRef.current, { opacity: 1, scale: 1, rotation: 0, duration: 0.4, ease: 'power2.out' }, "-=0.4");
  }, [activeTab]);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <section ref={sectionRef} className="relative py-5 lg:py-5 bg-gradient-to-br from-slate-50 via-white to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e2e8f0%22 fill-opacity=%220.3%22%3E%3Ccircle cx=%2220%22 cy=%2220%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>


      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-main2/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-main-200/20 rounded-full blur-2xl animate-pulse animation-delay-[-2s]"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 bg-main2 px-6 py-3 rounded-full mb-6">
            <div className="w-3 h-3 bg-main-600 rounded-full animate-pulse"></div>
            <span className="text-main-700 font-semibold text-sm uppercase tracking-wider">About GSA Global</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Pioneering the Fight Against
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-main-600 to-main2">
              Antimicrobial Resistance
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we're empowering the next generation to tackle one of the world's most pressing health challenges
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Mobile-First Stack Layout */}
          <div className="lg:hidden space-y-8">
            {aboutContent.map((item, index) => (
              <div key={item.id} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6 text-white">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {showFullText && activeTab === index ? item.fullText : item.shortText}
                  </p>
                  
                  {item.fullText !== item.shortText && (
                    <button
                      onClick={() => {
                        setActiveTab(index);
                        toggleText();
                      }}
                      className="text-main-600 font-semibold text-sm hover:text-main-700 transition-colors"
                    >
                      {showFullText && activeTab === index ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-main2 text-main-700 text-xs font-medium rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8">
            {/* Navigation Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="sticky top-8">
                <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-main-500 to-main2 rounded-full"></div>
                  Explore Our Story
                </h3>
                
                {aboutContent.map((item, index) => (
                  <div key={item.id} className="relative">
                    <button
                      onClick={() => setActiveTab(index)}
                      className={`group w-full p-6 rounded-2xl text-left transition-all duration-500 transform focus:outline-none ${
                        activeTab === index
                          ? 'bg-gradient-to-r from-main-600 to-main2 text-white shadow-2xl scale-105'
                          : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl hover:scale-102 border border-gray-100'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                          <p className={`text-sm ${activeTab === index ? 'text-white/80' : 'text-gray-500'}`}>
                            {item.subtitle}
                          </p>
                          
                          {activeTab === index && (
                            <div className="mt-4 flex items-center gap-2">
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              <span className="text-xs text-white/90">Currently viewing</span>
                            </div>
                          )}
                        </div>
                        
                        <div ref={activeTab === index ? statsRef : null} className={`text-center ${activeTab === index ? 'text-white' : 'text-main-600'}`}>
                          <div className="text-2xl font-black">{item.stats.number}</div>
                          <div className="text-xs font-medium">{item.stats.label}</div>
                        </div>
                      </div>
                    </button>
                    
                    {activeTab === index && (
                      <div className="absolute -inset-2 bg-gradient-to-r from-main-500/20 to-main2/20 rounded-2xl -z-10 blur-xl"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <div ref={imageRef} className="relative w-full h-full">
                    <Image
                      src={aboutContent[activeTab].image}
                      alt={aboutContent[activeTab].title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Floating Stats Badge */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl font-black text-main-600">{aboutContent[activeTab].stats.number}</div>
                      <div className="text-xs font-medium text-gray-600">{aboutContent[activeTab].stats.label}</div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8">
                  <div ref={contentRef}>
                    <div className="flex items-center gap-4 mb-6">
                      <h3 className="text-3xl font-black text-gray-900">{aboutContent[activeTab].title}</h3>
                      <div className="h-px bg-gradient-to-r from-main-500 to-transparent flex-1"></div>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {showFullText ? aboutContent[activeTab].fullText : aboutContent[activeTab].shortText}
                    </p>
                    
                    {aboutContent[activeTab].fullText !== aboutContent[activeTab].shortText && (
                      <button
                        onClick={toggleText}
                        className="inline-flex items-center gap-2 text-main-600 font-bold hover:text-main-700 transition-colors group"
                      >
                        <span>{showFullText ? 'Show Less' : 'Read Full Story'}</span>
                        <svg 
                          className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${showFullText ? 'rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                    
                    {/* Highlights */}
                    <div className="mt-8">
                      <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wider">Key Highlights</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {aboutContent[activeTab].highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 bg-gradient-to-r from-main-50 to-main2 rounded-xl border border-main-100/50"
                          >
                            <div className="w-2 h-2 bg-main-500 rounded-full flex-shrink-0"></div>
                            <span className="text-sm font-medium text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
