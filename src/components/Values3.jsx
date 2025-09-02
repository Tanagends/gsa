"use client";
import { useRef, useEffect, useState } from 'react';
import { Check, Users, Heart, Zap, Target, Lightbulb } from 'lucide-react';
import Image from 'next/image';

const Values = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const valuesRef = useRef(null);
  const observerRef = useRef(null);

  const values = [
    {
      title: "Dedication",
      icon: Target,
      description: "Unwavering commitment to excellence and continuous improvement",
      gradient: "from-[#13d4f7] to-[#14b8d4]"
    },
    {
      title: "Empathy",
      icon: Heart,
      description: "Understanding and connecting with every individual we serve",
      gradient: "from-[#14b8d4] to-[#109eb8]"
    },
    {
      title: "Industriousness",
      icon: Zap,
      description: "Relentless pursuit of innovation and productive solutions",
      gradient: "from-[#109eb8] to-[#0e8aa0]"
    },
    {
      title: "Teamwork",
      icon: Users,
      description: "Collaborative spirit that amplifies collective potential",
      gradient: "from-[#0e8aa0] to-[#0b6b7c]"
    },
    {
      title: "Grassroot Engagement",
      icon: Lightbulb,
      description: "Building meaningful connections at the community level",
      gradient: "from-[#0b6b7c] to-[#095563]"
    },
    {
      title: "Empowerment",
      icon: Check,
      description: "Enabling individuals to achieve their fullest potential",
      gradient: "from-[#095563] to-[#084550]"
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

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section ref={valuesRef} className="relative w-full py-6 lg:py-6 bg-gradient-to-br from-[#084550] via-[#063841] to-[#062f36] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#13d4f7]/10 to-[#FFCC00]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-[#9A0000]/10 to-[#13d4f7]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-[#FFCC00]/5 to-[#14b8d4]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block p-1 bg-gradient-to-r from-[#13d4f7] to-[#FFCC00] rounded-full mb-6">
              <div className="bg-[#084550] px-6 py-2 rounded-full">
                <span className="text-[#FFCC00] font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
              </div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#13d4f7] to-white bg-clip-text text-transparent leading-tight">
              The Principles We Stand For
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These core values guide every decision, shape every interaction, and drive our mission forward
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Values Cards */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                const delay = index * 100;
                
                return (
                  <div
                    key={value.title}
                    className={`group transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${delay}ms` }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="relative h-full">
                      {/* Main Card */}
                      <div className="relative p-6 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl group-hover:border-white/40 h-full flex flex-col">
                        
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl`}></div>
                        
                        {/* Icon Container */}
                        <div className="relative mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          
                          {/* Animated Ring */}
                          <div className={`absolute inset-0 w-12 h-12 rounded-xl border-2 border-[#FFCC00] opacity-0 scale-150 transition-all duration-500 ${hoveredCard === index ? 'opacity-30 scale-100' : ''}`}></div>
                        </div>

                        {/* Content */}
                        <div className="relative flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#13d4f7] transition-colors duration-300">
                            {value.title}
                          </h3>
                          <p className="text-sm text-gray-300 leading-relaxed flex-1 transition-colors duration-300 group-hover:text-white">
                            {value.description}
                          </p>
                          
                          {/* Animated Underline */}
                          <div className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-[#FFCC00] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-[#FFCC00] to-[#13d4f7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce"></div>
                      </div>

                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500 -z-10`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'}`}>
              <div className="relative group">
                
                {/* Main Image Container */}
                <div className="relative w-full max-w-lg mx-auto">
                  
                  {/* Floating Decorative Elements */}
                  <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#13d4f7]/20 to-[#FFCC00]/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#9A0000]/20 to-[#13d4f7]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                  
                  {/* Image Frame */}
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#13d4f7] via-[#FFCC00] to-[#13d4f7] p-1 rounded-3xl">
                      <div className="w-full h-full bg-[#084550] rounded-3xl overflow-hidden relative">
                        
                        {/* Image Container with proper positioning for Next.js Image */}
                        <div className="relative w-full h-96 lg:h-[500px]">
                          {!imageError ? (
                            <Image
                              src="/assets/images/bg-1.jpeg" // Try this path first (public folder)
                              alt="Our team embodying our core values through collaboration and dedication"
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              onError={() => {
                                console.log('Image failed to load from /bg-1.jpeg');
                                setImageError(true);
                              }}
                              priority
                            />
                          ) : (
                            // Fallback content when image fails to load
                            <div className="w-full h-full bg-gradient-to-br from-[#13d4f7]/20 via-[#FFCC00]/20 to-[#9A0000]/20 flex items-center justify-center">
                              <div className="text-center p-8">
                                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#13d4f7] to-[#FFCC00] rounded-full flex items-center justify-center">
                                  <Users className="w-12 h-12 text-[#084550]" />
                                </div>
                                <h3 className="text-white text-xl font-bold mb-2">Our Values in Action</h3>
                                <p className="text-gray-300 text-sm">Building stronger communities together</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Floating Info Cards */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/20 backdrop-blur-xl rounded-xl px-4 py-2 border border-white/30 shadow-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#FFCC00] rounded-full animate-pulse"></div>
                          <span className="text-white text-sm font-semibold">Values in Action</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-6 right-6">
                      <div className="bg-gradient-to-r from-[#13d4f7]/20 to-[#FFCC00]/20 backdrop-blur-xl rounded-xl px-4 py-2 border border-white/30 shadow-lg">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-[#13d4f7]" />
                          <span className="text-white text-sm font-semibold">Together We Thrive</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Animated Accent Lines */}
                  <div className="absolute top-1/2 -left-4 w-8 h-0.5 bg-gradient-to-r from-[#FFCC00] to-transparent transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-l from-[#13d4f7] to-transparent transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Achievement Badges */}
                <div className="absolute -top-4 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-gradient-to-r from-[#FFCC00] to-[#13d4f7] p-3 rounded-full shadow-2xl animate-bounce">
                    <Heart className="w-6 h-6 text-[#084550]" />
                  </div>
                </div>
                
                <div className="absolute -bottom-4 left-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-gradient-to-r from-[#13d4f7] to-[#9A0000] p-3 rounded-full shadow-2xl animate-bounce">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

      {/* Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#13d4f7] rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Values;
