'use client'

import Link from 'next/link';
import Gallery from './Gallery';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Image, Video, FileText, Calendar, Newspaper, Users, Play, Eye, Heart } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function MediaContent({ images }) {
  const titleRef = useRef(null);
  const heroRef = useRef(null);
  const navigationRef = useRef(null);
  const galleryRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeTab, setActiveTab] = useState('gallery');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Advanced hero animations
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: -100,
          scale: 0.8,
          rotationX: -45,
          transformPerspective: 1000
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.8,
          ease: "elastic.out(1, 0.6)"
        }
      );

      // Hero content animation
      gsap.fromTo(heroRef.current?.children || [],
        {
          opacity: 0,
          y: 60,
          rotationY: 25,
          z: -200,
          transformPerspective: 1000
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          z: 0,
          duration: 1.2,
          stagger: 0.15,
          delay: 0.3,
          ease: "power3.out"
        }
      );

      // Navigation pills animation
      gsap.fromTo(navigationRef.current?.children || [],
        {
          opacity: 0,
          scale: 0.8,
          y: 30
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.8,
          ease: "back.out(1.7)"
        }
      );

      // Gallery section animation
      gsap.fromTo(galleryRef.current,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating background elements
      gsap.to(".floating-element", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });

      gsap.to(".floating-element", {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        scale: "random(0.9, 1.1)",
        duration: "random(4, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const mediaCategories = [
    {
      id: 'gallery',
      title: 'Gallery',
      icon: Image,
      description: 'Visual moments from our journey',
      color: 'main-400',
      gradient: 'from-main-400 to-main-600'
    },
    {
      id: 'events',
      title: 'Events',
      icon: Calendar,
      description: 'Upcoming and past events',
      color: 'main2',
      gradient: 'from-main2 to-yellow-500'
    },
    {
      id: 'articles',
      title: 'Articles',
      icon: FileText,
      description: 'Insights and research',
      color: 'main3',
      gradient: 'from-main3 to-red-600'
    },
    {
      id: 'news',
      title: 'News',
      icon: Newspaper,
      description: 'Latest updates and announcements',
      color: 'main-500',
      gradient: 'from-main-500 to-main-700'
    }
  ];

  const stats = [
    { icon: Eye, value: '50K+', label: 'Views' },
    { icon: Heart, value: '2.5K+', label: 'Engagements' },
    { icon: Users, value: '500+', label: 'Community' },
    { icon: Play, value: '150+', label: 'Stories Shared' }
  ];

  return (
    <main
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-main-900 to-slate-800"
    >
      {/* Enhanced cursor follower */}
      <div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300 ease-out"
        style={{
          left: mousePos.x - 12,
          top: mousePos.y - 12,
          backgroundColor: isHovering ? '#FFCC00' : '#13d4f7',
          transform: `scale(${isHovering ? 1.8 : 1})`,
          filter: 'blur(0.5px)'
        }}
      />

      {/* Advanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large morphing shapes */}
        <div className="floating-element absolute top-20 left-10 w-64 h-64 rounded-full opacity-10"
             style={{
               background: 'conic-gradient(from 0deg, #13d4f7, #FFCC00, #9A0000, #13d4f7)',
               filter: 'blur(40px) saturate(1.5)'
             }}
        />
        <div className="floating-element absolute top-1/3 right-20 w-80 h-80 rounded-full opacity-8"
             style={{
               background: 'radial-gradient(circle, #FFCC00, #13d4f7)',
               filter: 'blur(50px) hue-rotate(90deg)'
             }}
        />
        <div className="floating-element absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full opacity-12"
             style={{
               background: 'linear-gradient(45deg, #9A0000, #13d4f7)',
               filter: 'blur(30px) contrast(1.3)'
             }}
        />

        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"
               style={{
                 backgroundImage: `
                   radial-gradient(circle at 20% 20%, #13d4f7 2px, transparent 2px),
                   radial-gradient(circle at 80% 80%, #FFCC00 1.5px, transparent 1.5px)
                 `,
                 backgroundSize: '80px 80px, 60px 60px'
               }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Title */}
          <div ref={titleRef} className="mb-8">
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-main-300 via-main2 to-main3 mb-4">
              Media Hub
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-main-400 to-main2 mx-auto rounded-full"></div>
          </div>

          {/* Hero Content */}
          <div ref={heroRef} className="space-y-6">
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Explore our comprehensive collection of <span className="text-main2 font-semibold">visual stories</span>, 
              <span className="text-main-300 font-semibold"> impactful events</span>, and 
              <span className="text-main3 font-semibold"> groundbreaking research</span> in the fight against antimicrobial resistance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-main2/50 transition-all duration-500 hover:scale-105"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-main-400/20 to-main2/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 text-center">
                    <stat.icon className="w-8 h-8 text-main2 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Navigation */}
      <section className="relative z-10 px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div ref={navigationRef} className="flex flex-wrap gap-4 justify-center">
            {mediaCategories.map((category) => (
              <Link
                key={category.id}
                href={category.id === 'gallery' ? '#gallery' : `/media/${category.id}`}
                className={`group relative px-8 py-4 rounded-2xl border-2 transition-all duration-500 hover:scale-105 ${
                  activeTab === category.id
                    ? 'border-main2 bg-main2/20 text-white'
                    : 'border-white/20 bg-white/5 text-gray-300 hover:border-main2/50 hover:bg-main2/10'
                }`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => setActiveTab(category.id)}
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center gap-3">
                  <category.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="font-bold text-lg">{category.title}</div>
                    <div className="text-xs opacity-75">{category.description}</div>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-main-400 via-main2 to-main3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} id="gallery" className="relative z-10 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-main-300 to-main2 mb-4">
              Visual Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each image tells a story of hope, innovation, and the relentless pursuit of a world free from antimicrobial resistance.
            </p>
          </div>

          {/* Enhanced Gallery Component */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-main2/5 to-transparent rounded-3xl"></div>
            <Gallery images={images} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default MediaContent;
