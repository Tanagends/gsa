"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Check, Users, Heart, Zap, Target, Lightbulb, Star, Award, Shield, Compass } from 'lucide-react';

const Values = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);
  const valuesRef = useRef(null);
  const observerRef = useRef(null);

  const values = [
    {
      title: "Commitment",
      icon: Target,
      description: "We are dedicated to the fight against antimicrobial resistance and improving public health.",
      gradient: "from-[#9A0000] via-[#b33333] to-[#cc6666]",
      bgGradient: "from-[#9A0000]/20 to-[#cc6666]/20",
      metrics: "99% Success Rate"
    },
    {
      title: "Collaboration",
      icon: Users,
      description: "We foster partnerships with diverse stakeholders to achieve common goals.",
      gradient: "from-[#0b6b7c] via-[#0e8aa0] to-[#109eb8]",
      bgGradient: "from-[#0b6b7c]/20 to-[#109eb8]/20",
      metrics: "200+ Partners"
    },
    {
      title: "Innovation",
      icon: Zap,
      description: "Encouraging creative solutions and new ideas to address AMR challenges.",
      gradient: "from-[#FFCC00] via-[#ffd633] to-[#ffe066]",
      bgGradient: "from-[#FFCC00]/20 to-[#ffe066]/20",
      metrics: "50+ Innovations"
    },
    {
      title: "Empowerment",
      icon: Award,
      description: "We equip young people with the skills and knowledge needed to lead initiatives.",
      gradient: "from-[#13d4f7] via-[#FFCC00] to-[#9A0000]",
      bgGradient: "from-[#13d4f7]/20 to-[#9A0000]/20",
      metrics: "Unlimited Growth"
    },
    {
      title: "Integrity",
      icon: Heart,
      description: "We hold ethical standards and transparency in all activities",
      gradient: "from-[#13d4f7] via-[#14b8d4] to-[#109eb8]",
      bgGradient: "from-[#13d4f7]/20 to-[#109eb8]/20",
      metrics: "10K+ Lives Touched"
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (valuesRef.current) {
      observerRef.current.observe(valuesRef.current);
    }

    // Auto-rotate active value
    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % values.length);
    }, 3000);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <section ref={valuesRef} className="relative w-full py-8 sm:py-8 lg:py-8 bg-gradient-to-br from-slate-900 via-[#063841] to-slate-900 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-[#13d4f7]/20 via-[#FFCC00]/20 to-[#9A0000]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-r from-[#9A0000]/20 via-[#13d4f7]/20 to-[#FFCC00]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-gradient-to-r from-[#0b6b7c]/10 via-[#FFCC00]/10 to-[#13d4f7]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20 hidden sm:block"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i * 0.3)}s`
            }}
          >
            <div className={`w-2 sm:w-4 h-2 sm:h-4 bg-gradient-to-r ${values[i % values.length]?.gradient} rounded-full blur-sm`} />
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-20 lg:mb-28">
          <div className={`transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#0b6b7c]/20 via-[#FFCC00]/20 to-[#9A0000]/20 backdrop-blur-xl border border-white/20 rounded-full mb-6 sm:mb-8 shadow-2xl">
              <Star className="w-4 sm:w-5 h-4 sm:h-5 text-[#FFCC00] animate-spin" />
              <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-widest">Core Foundation</span>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#13d4f7] rounded-full animate-pulse" />
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-[#13d4f7] via-[#FFCC00] to-white bg-clip-text text-transparent animate-gradient-x">
                Values That
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#9A0000] via-[#FFCC00] to-[#13d4f7] bg-clip-text text-transparent animate-gradient-x">
                Define Us
              </span>
            </h2>
            
            <p className="text-base sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-4">
              More than principles—these are the <span className="text-[#13d4f7] font-semibold">living forces</span> that shape our culture, 
              drive our decisions, and fuel our mission to create extraordinary impact.
            </p>
          </div>
        </div>

        {/* Enhanced Values Content */}
        <div className="w-full">
          {/* Stats Bar 
          <div className={`flex justify-between items-center p-4 sm:p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 mb-8 sm:mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center flex-1">
              <div className="text-xl sm:text-2xl font-bold text-white">6</div>
              <div className="text-xs sm:text-sm text-gray-400">Core Values</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-gray-600"></div>
            <div className="text-center flex-1">
              <div className="text-xl sm:text-2xl font-bold text-[#13d4f7]">∞</div>
              <div className="text-xs sm:text-sm text-gray-400">Impact</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-gray-600"></div>
            <div className="text-center flex-1">
              <div className="text-xl sm:text-2xl font-bold text-[#FFCC00]">100%</div>
              <div className="text-xs sm:text-sm text-gray-400">Commitment</div>
            </div>
          </div>*/}

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-20">
            {values.map((value, index) => {
              const Icon = value.icon;
              const delay = index * 150;
              const isActive = activeValue === index;
              
              return (
                <div
                  key={value.title}
                  className={`group transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}
                  onMouseEnter={() => {
                    setHoveredCard(index);
                    setActiveValue(index);
                  }}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-full">
                    {/* Enhanced Main Card */}
                    <div className={`relative p-4 sm:p-6 bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border transition-all duration-500 shadow-2xl h-full flex flex-col overflow-hidden ${
                      isActive ? 'border-white/40 scale-105 shadow-[#13d4f7]/25' : 'border-white/20 hover:scale-105 hover:border-white/40'
                    }`}>
                      
                      {/* Dynamic Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 transition-opacity duration-500 rounded-2xl sm:rounded-3xl ${
                        isActive || hoveredCard === index ? 'opacity-100' : 'group-hover:opacity-60'
                      }`}></div>
                      
                      {/* Enhanced Icon Container */}
                      <div className="relative mb-4 sm:mb-6 z-10">
                        <div className={`relative w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br ${value.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center transform transition-all duration-500 shadow-lg ${
                          isActive ? 'rotate-12 scale-110' : 'group-hover:rotate-12 group-hover:scale-110'
                        }`}>
                          <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                          
                          {/* Pulsing Ring */}
                          <div className={`absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-white/50 transition-all duration-500 ${
                            isActive ? 'opacity-100 scale-125 animate-ping' : 'opacity-0 scale-150'
                          }`}></div>
                        </div>
                        
                        {/* Floating Metric Badge */}
                        <div className={`absolute -top-1 sm:-top-2 -right-1 sm:-right-2 px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r ${value.gradient} rounded-full text-xs font-bold text-white shadow-lg transition-all duration-500 ${
                          isActive || hoveredCard === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                        }`}>
                          {value.metrics}
                        </div>
                      </div>

                      {/* Enhanced Content */}
                      <div className="relative flex-1 flex flex-col z-10">
                        <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 transition-all duration-300 ${
                          isActive ? 'text-white' : 'text-gray-100 group-hover:text-white'
                        }`}>
                          {value.title}
                        </h3>
                        <p className={`text-sm leading-relaxed flex-1 transition-all duration-300 ${
                          isActive ? 'text-gray-200' : 'text-gray-300 group-hover:text-gray-200'
                        }`}>
                          {value.description}
                        </p>
                        
                        {/* Enhanced Progress Bar */}
                        <div className="mt-4 sm:mt-6 relative">
                          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                            <div className={`h-full bg-gradient-to-r ${value.gradient} rounded-full transition-all duration-1000 ${
                              isActive ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}></div>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Floating Elements */}
                      <div className={`absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-r ${value.gradient} rounded-full transition-all duration-500 ${
                        isActive || hoveredCard === index ? 'opacity-100 animate-bounce' : 'opacity-0'
                      }`}></div>
                      <div className={`absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-r from-white/50 to-transparent rounded-full transition-all duration-500 delay-200 ${
                        isActive || hoveredCard === index ? 'opacity-100 animate-pulse' : 'opacity-0'
                      }`}></div>
                    </div>

                    {/* Enhanced Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 blur-2xl rounded-2xl sm:rounded-3xl transition-all duration-500 -z-10 ${
                      isActive ? 'opacity-30 scale-110' : 'group-hover:opacity-20 group-hover:scale-105'
                    }`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Control Dots */}
          <div className={`flex justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {values.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveValue(index)}
                className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full transition-all duration-300 ${
                  activeValue === index 
                    ? `bg-gradient-to-r ${values[index].gradient} scale-125` 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Active Value Display */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative inline-block">
              <div className={`w-20 sm:w-32 h-20 sm:h-32 mx-auto bg-gradient-to-br ${values[activeValue].gradient} rounded-full flex items-center justify-center shadow-2xl animate-spin-slow mb-6`}>
                {React.createElement(values[activeValue].icon, { 
                  className: "w-10 sm:w-16 h-10 sm:h-16 text-white" 
                })}
              </div>
              <div className="absolute inset-0 w-20 sm:w-32 h-20 sm:h-32 mx-auto border-4 border-white/30 rounded-full animate-ping"></div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 transition-all duration-500">
              {values[activeValue].title}
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-4">
              Experience the power of our values in action through collaborative innovation and community impact.
            </p>
          </div>
        </div>

        {/* Enhanced Bottom CTA 
        <div className={`text-center transition-all duration-1200 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-[#9A0000] via-[#FFCC00] to-[#13d4f7] rounded-full shadow-2xl hover:shadow-[#13d4f7]/25 transition-all duration-500 group cursor-pointer hover:scale-110 animate-gradient-x">
            <span className="text-white font-bold text-lg sm:text-xl">Experience Our Values</span>
            <div className="flex gap-1">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full animate-bounce"></div>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full animate-bounce delay-100"></div>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Enhanced Particle Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-40 hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 6}s`
            }}
          >
            <div className={`w-0.5 sm:w-1 h-0.5 sm:h-1 bg-gradient-to-r ${values[i % values.length]?.gradient} rounded-full blur-sm`} />
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; background-size: 200% 200%; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
    </section>
  );
};

export default Values;
