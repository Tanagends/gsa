"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Target, Heart, Zap, Users, Compass, Award } from 'lucide-react';

const Values = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(null);
  const valuesRef = useRef(null);

  const values = [
    {
      title: "Dedication",
      icon: Target,
      description: "Unwavering commitment to combating antimicrobial resistance through excellence and continuous improvement",
      color: "#9A0000",
      lightColor: "#FFCC00"
    },
    {
      title: "Empathy",
      icon: Heart,
      description: "Understanding and connecting with communities affected by AMR on a profound level",
      color: "#0b6b7c",
      lightColor: "#13d4f7"
    },
    {
      title: "Innovation",
      icon: Zap,
      description: "Pioneering groundbreaking solutions that transform AMR awareness and prevention",
      color: "#FFCC00",
      lightColor: "#ffe066"
    },
    {
      title: "Collaboration",
      icon: Users,
      description: "Building partnerships that amplify our collective impact against antimicrobial resistance",
      color: "#0b6b7c",
      lightColor: "#13d4f7"
    },
    {
      title: "Community Focus",
      icon: Compass,
      description: "Creating lasting connections to strengthen health systems at every level",
      color: "#9A0000",
      lightColor: "#FFCC00"
    },
    {
      title: "Empowerment",
      icon: Award,
      description: "Enabling individuals and communities to become AMR stewards for future generations",
      color: "#FFCC00",
      lightColor: "#13d4f7"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (valuesRef.current) {
      observer.observe(valuesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={valuesRef} className="relative w-full py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 20% 50%, ${values[0].color} 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, ${values[2].color} 0%, transparent 50%),
                                radial-gradient(circle at 40% 20%, ${values[1].color} 0%, transparent 50%)`,
             }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-main-50 border border-main-200 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#FFCC00] rounded-full animate-pulse" />
              <span className="text-main-700 font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              <span className="text-main-900">Values That</span>
              <span className="bg-gradient-to-r from-[#9A0000] via-[#FFCC00] to-main-600 bg-clip-text text-transparent"> Define Us</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Six core principles guide our mission to combat antimicrobial resistance 
              and create lasting impact in communities worldwide.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isHovered = hoveredCard === index;
            const isActive = activeValue === index;
            
            return (
              <div
                key={value.title}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => {
                  setHoveredCard(index);
                  setActiveValue(index);
                }}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  setActiveValue(null);
                }}
              >
                <div className="relative h-full group">
                  {/* Card */}
                  <div className={`relative h-full p-8 bg-white rounded-2xl border-2 transition-all duration-500 ${
                    isActive 
                      ? 'border-current shadow-2xl transform scale-[1.02]' 
                      : 'border-gray-100 shadow-lg hover:shadow-xl'
                  }`}
                  style={{ 
                    borderColor: isActive ? value.color : undefined,
                    boxShadow: isActive ? `0 20px 40px ${value.color}15` : undefined
                  }}>
                    
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isActive ? 'transform rotate-3 scale-110' : ''
                      }`}
                      style={{ 
                        background: isActive 
                          ? `linear-gradient(135deg, ${value.color}, ${value.lightColor})`
                          : `linear-gradient(135deg, ${value.color}20, ${value.lightColor}20)`
                      }}>
                        <Icon className={`w-7 h-7 transition-colors duration-500 ${
                          isActive ? 'text-white' : ''
                        }`}
                        style={{ color: isActive ? undefined : value.color }} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-gray-900 transition-colors duration-300"
                        style={{ color: isActive ? value.color : undefined }}>
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>

                    {/* Subtle Hover Indicator */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                            isActive ? 'animate-pulse' : ''
                          }`}
                          style={{ backgroundColor: value.color }} />
                          <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                            Core Value {index + 1}
                          </span>
                        </div>
                        <div className={`transition-all duration-500 ${
                          isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                        }`}>
                          <div className="w-6 h-0.5" 
                               style={{ backgroundColor: value.lightColor }} />
                        </div>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className={`absolute top-0 right-0 w-24 h-24 transition-all duration-700 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute top-0 right-0 w-full h-full rounded-bl-[40px] rounded-tr-2xl"
                           style={{ 
                             background: `linear-gradient(135deg, transparent 50%, ${value.lightColor}10 100%)`
                           }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex flex-col items-center">
            <p className="text-gray-600 mb-6">
              These values guide every decision we make and every action we take.
            </p>
            <div className="flex items-center gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeValue === index ? 'scale-150' : 'scale-100 opacity-60'
                  }`}
                  style={{ backgroundColor: value.color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${20 + (i * 12)}%`,
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <div className="w-2 h-2 rounded-full"
                 style={{ backgroundColor: values[i % values.length].color }} />
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default Values;
