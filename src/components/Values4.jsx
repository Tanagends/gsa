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
      title: "Dedication",
      icon: Target,
      description: "Unwavering commitment to excellence and continuous improvement in every endeavor",
      gradient: "from-[#9A0000] via-[#b33333] to-[#cc6666]",
      bgGradient: "from-[#9A0000]/20 to-[#cc6666]/20",
      metrics: "99% Success Rate"
    },
    {
      title: "Empathy",
      icon: Heart,
      description: "Understanding and connecting with every individual we serve on a deeper level",
      gradient: "from-[#13d4f7] via-[#14b8d4] to-[#109eb8]",
      bgGradient: "from-[#13d4f7]/20 to-[#109eb8]/20",
      metrics: "10K+ Lives Touched"
    },
    {
      title: "Innovation",
      icon: Zap,
      description: "Relentless pursuit of groundbreaking solutions that transform industries",
      gradient: "from-[#FFCC00] via-[#ffd633] to-[#ffe066]",
      bgGradient: "from-[#FFCC00]/20 to-[#ffe066]/20",
      metrics: "50+ Innovations"
    },
    {
      title: "Collaboration",
      icon: Users,
      description: "Synergistic teamwork that amplifies our collective potential exponentially",
      gradient: "from-[#0b6b7c] via-[#0e8aa0] to-[#109eb8]",
      bgGradient: "from-[#0b6b7c]/20 to-[#109eb8]/20",
      metrics: "200+ Partners"
    },
    {
      title: "Community Focus",
      icon: Compass,
      description: "Building meaningful, lasting connections at every level of society",
      gradient: "from-[#9A0000] via-[#13d4f7] to-[#FFCC00]",
      bgGradient: "from-[#9A0000]/20 to-[#FFCC00]/20",
      metrics: "Global Reach"
    },
    {
      title: "Empowerment",
      icon: Award,
      description: "Enabling individuals and communities to achieve their absolute fullest potential",
      gradient: "from-[#13d4f7] via-[#FFCC00] to-[#9A0000]",
      bgGradient: "from-[#13d4f7]/20 to-[#9A0000]/20",
      metrics: "Unlimited Growth"
    }
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
    <section ref={valuesRef} className="relative w-full py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-[#063841] to-slate-900 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#13d4f7]/20 via-[#FFCC00]/20 to-[#9A0000]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-[#9A0000]/20 via-[#13d4f7]/20 to-[#FFCC00]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#0b6b7c]/10 via-[#FFCC00]/10 to-[#13d4f7]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i * 0.3)}s`
            }}
          >
            <div className={`w-4 h-4 bg-gradient-to-r ${values[i % values.length]?.gradient} rounded-full blur-sm`} />
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Enhanced Header */}
        <div className="text-center mb-20 lg:mb-28">
          <div className={`transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-[#0b6b7c]/20 via-[#FFCC00]/20 to-[#9A0000]/20 backdrop-blur-xl border border-white/20 rounded-full mb-8 shadow-2xl">
              <Star className="w-5 h-5 text-[#FFCC00] animate-spin" />
              <span className="text-white font-semibold text-sm uppercase tracking-widest">Core Foundation</span>
              <div className="w-2 h-2 bg-[#13d4f7] rounded-full animate-pulse" />
            </div>

            {/* Main Title */}
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-[#13d4f7] via-[#FFCC00] to-white bg-clip-text text-transparent animate-gradient-x">
                Values That
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#9A0000] via-[#FFCC00] to-[#13d4f7] bg-clip-text text-transparent animate-gradient-x">
                Define Us
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              More than principles—these are the <span className="text-[#13d4f7] font-semibold">living forces</span> that shape our culture, 
              drive our decisions, and fuel our mission to create extraordinary impact.
            </p>
          </div>
        </div>

        {/* Enhanced Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Enhanced Values Cards */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Stats Bar */}
            <div className={`flex justify-between items-center p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">6</div>
                <div className="text-sm text-gray-400">Core Values</div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#13d4f7]">∞</div>
                <div className="text-sm text-gray-400">Impact</div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFCC00]">100%</div>
                <div className="text-sm text-gray-400">Commitment</div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      <div className={`relative p-6 bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border transition-all duration-500 shadow-2xl h-full flex flex-col overflow-hidden ${
                        isActive ? 'border-white/40 scale-105 shadow-[#13d4f7]/25' : 'border-white/20 hover:scale-105 hover:border-white/40'
                      }`}>
                        
                        {/* Dynamic Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 transition-opacity duration-500 rounded-3xl ${
                          isActive || hoveredCard === index ? 'opacity-100' : 'group-hover:opacity-60'
                        }`}></div>
                        
                        {/* Enhanced Icon Container */}
                        <div className="relative mb-6 z-10">
                          <div className={`relative w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center transform transition-all duration-500 shadow-lg ${
                            isActive ? 'rotate-12 scale-110' : 'group-hover:rotate-12 group-hover:scale-110'
                          }`}>
                            <Icon className="w-8 h-8 text-white" />
                            
                            {/* Pulsing Ring */}
                            <div className={`absolute inset-0 rounded-2xl border-2 border-white/50 transition-all duration-500 ${
                              isActive ? 'opacity-100 scale-125 animate-ping' : 'opacity-0 scale-150'
                            }`}></div>
                          </div>
                          
                          {/* Floating Metric Badge */}
                          <div className={`absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r ${value.gradient} rounded-full text-xs font-bold text-white shadow-lg transition-all duration-500 ${
                            isActive || hoveredCard === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                          }`}>
                            {value.metrics}
                          </div>
                        </div>

                        {/* Enhanced Content */}
                        <div className="relative flex-1 flex flex-col z-10">
                          <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${
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
                          <div className="mt-6 relative">
                            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                              <div className={`h-full bg-gradient-to-r ${value.gradient} rounded-full transition-all duration-1000 ${
                                isActive ? 'w-full' : 'w-0 group-hover:w-full'
                              }`}></div>
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Floating Elements */}
                        <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${value.gradient} rounded-full transition-all duration-500 ${
                          isActive || hoveredCard === index ? 'opacity-100 animate-bounce' : 'opacity-0'
                        }`}></div>
                        <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-white/50 to-transparent rounded-full transition-all duration-500 delay-200 ${
                          isActive || hoveredCard === index ? 'opacity-100 animate-pulse' : 'opacity-0'
                        }`}></div>
                      </div>

                      {/* Enhanced Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 blur-2xl rounded-3xl transition-all duration-500 -z-10 ${
                        isActive ? 'opacity-30 scale-110' : 'group-hover:opacity-20 group-hover:scale-105'
                      }`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Revolutionary Visual Section */}
          <div className="order-1 lg:order-2">
            <div className={`transition-all duration-1200 delay-500 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'}`}>
              <div className="relative group">
                
                {/* Enhanced Visual Container */}
                <div className="relative w-full max-w-2xl mx-auto">
                  
                  {/* Dynamic Floating Elements */}
                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-[#9A0000]/30 to-[#13d4f7]/30 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#FFCC00]/30 to-[#9A0000]/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 -right-8 w-24 h-24 bg-gradient-to-br from-[#13d4f7]/40 to-[#0b6b7c]/40 rounded-full blur-xl animate-pulse delay-700"></div>
                  
                  {/* Revolutionary Visual Frame */}
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1">
                    
                    {/* Multi-layer Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#9A0000] via-[#FFCC00] via-[#13d4f7] to-[#9A0000] p-1 rounded-3xl animate-gradient-x">
                      <div className="absolute inset-1 bg-gradient-to-r from-[#0b6b7c] via-[#9A0000] to-[#FFCC00] rounded-3xl opacity-50 blur-sm"></div>
                      <div className="relative w-full h-full bg-slate-900 rounded-3xl overflow-hidden">
                        
                        {/* Ultra-Modern Visual Display */}
                        <div className="relative w-full h-96 lg:h-[600px] bg-gradient-to-br from-[#063841] via-[#084550] to-slate-900 flex items-center justify-center overflow-hidden">
                          
                          {/* Animated Background Pattern */}
                          <div className="absolute inset-0 opacity-30">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                            {[...Array(20)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle"
                                style={{
                                  left: `${Math.random() * 100}%`,
                                  top: `${Math.random() * 100}%`,
                                  animationDelay: `${Math.random() * 3}s`,
                                  animationDuration: `${2 + Math.random() * 3}s`
                                }}
                              />
                            ))}
                          </div>

                          {/* Central Content */}
                          <div className="relative z-10 text-center p-12 max-w-lg">
                            {/* Dynamic Icon Display */}
                            <div className="relative mb-8">
                              <div className={`w-32 h-32 mx-auto bg-gradient-to-br ${values[activeValue].gradient} rounded-full flex items-center justify-center shadow-2xl animate-spin-slow`}>
                                {React.createElement(values[activeValue].icon, { 
                                  className: "w-16 h-16 text-white" 
                                })}
                              </div>
                              <div className="absolute inset-0 w-32 h-32 mx-auto border-4 border-white/30 rounded-full animate-ping"></div>
                            </div>

                            {/* Dynamic Text Content */}
                            <h3 className="text-3xl font-bold text-white mb-4 transition-all duration-500">
                              {values[activeValue].title}
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                              Experience the power of our values in action through collaborative innovation and community impact.
                            </p>
                            
                            {/* Interactive Elements */}
                            <div className="flex justify-center gap-4 mb-6">
                              {values.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setActiveValue(index)}
                                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    activeValue === index 
                                      ? `bg-gradient-to-r ${values[index].gradient} scale-125` 
                                      : 'bg-white/30 hover:bg-white/50'
                                  }`}
                                />
                              ))}
                            </div>

                            {/* Stats Display */}
                            <div className="grid grid-cols-3 gap-4 text-center">
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                <div className="text-2xl font-bold text-[#13d4f7]">24/7</div>
                                <div className="text-xs text-gray-400">Dedication</div>
                              </div>
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                <div className="text-2xl font-bold text-[#FFCC00]">∞</div>
                                <div className="text-xs text-gray-400">Possibilities</div>
                              </div>
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                <div className="text-2xl font-bold text-[#9A0000]">1</div>
                                <div className="text-xs text-gray-400">Team</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Corner Decorations */}
                          <div className="absolute top-4 left-4">
                            <div className="w-8 h-8 border-l-2 border-t-2 border-[#13d4f7] rounded-tl-lg"></div>
                          </div>
                          <div className="absolute top-4 right-4">
                            <div className="w-8 h-8 border-r-2 border-t-2 border-[#FFCC00] rounded-tr-lg"></div>
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <div className="w-8 h-8 border-l-2 border-b-2 border-[#9A0000] rounded-bl-lg"></div>
                          </div>
                          <div className="absolute bottom-4 right-4">
                            <div className="w-8 h-8 border-r-2 border-b-2 border-[#13d4f7] rounded-br-lg"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Floating Info Cards */}
                    <div className="absolute top-8 left-8 z-20">
                      <div className="bg-white/20 backdrop-blur-2xl rounded-2xl px-6 py-3 border border-white/30 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-[#13d4f7] to-[#0b6b7c] rounded-full animate-pulse"></div>
                          <span className="text-white text-sm font-bold">Values in Motion</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-8 right-8 z-20">
                      <div className="bg-gradient-to-r from-[#9A0000]/20 to-[#FFCC00]/20 backdrop-blur-2xl rounded-2xl px-6 py-3 border border-white/30 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                        <div className="flex items-center gap-3">
                          <Shield className="w-4 h-4 text-[#FFCC00]" />
                          <span className="text-white text-sm font-bold">Excellence Guaranteed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Accent Lines */}
                  <div className="absolute top-1/2 -left-8 w-16 h-1 bg-gradient-to-r from-[#13d4f7] to-transparent transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  <div className="absolute top-1/2 -right-8 w-16 h-1 bg-gradient-to-l from-[#FFCC00] to-transparent transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  
                  {/* Vertical Accent Lines */}
                  <div className="absolute -top-8 left-1/2 w-1 h-16 bg-gradient-to-b from-[#9A0000] to-transparent transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  <div className="absolute -bottom-8 left-1/2 w-1 h-16 bg-gradient-to-t from-[#13d4f7] to-transparent transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                </div>

                {/* Revolutionary Achievement Badges */}
                <div className="absolute -top-8 right-12 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0 z-30">
                  <div className="bg-gradient-to-r from-[#FFCC00] to-[#9A0000] p-4 rounded-full shadow-2xl animate-bounce-slow">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="absolute -bottom-8 left-12 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 transform translate-y-8 group-hover:translate-y-0 z-30">
                  <div className="bg-gradient-to-r from-[#13d4f7] to-[#0b6b7c] p-4 rounded-full shadow-2xl animate-bounce-slow">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA
        <div className={`text-center mt-20 lg:mt-28 transition-all duration-1200 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#9A0000] via-[#FFCC00] to-[#13d4f7] rounded-full shadow-2xl hover:shadow-[#13d4f7]/25 transition-all duration-500 group cursor-pointer hover:scale-110 animate-gradient-x">
            <span className="text-white font-bold text-xl">Experience Our Values</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Enhanced Particle Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 6}s`
            }}
          >
            <div className={`w-1 h-1 bg-gradient-to-r ${values[i % values.length]?.gradient} rounded-full blur-sm`} />
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; background-size: 200% 200%; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-twinkle { animation: twinkle 2s infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }
      `}</style>
    </section>
  );
};

export default Values;
