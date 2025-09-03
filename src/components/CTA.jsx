"use client";
import Link from "next/link"
import { useState, useEffect, useRef } from 'react'
import { HiArrowRight, HiSparkles, HiShieldCheck, HiClock } from 'react-icons/hi2'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DonateButton } from './DonateButton'

gsap.registerPlugin(ScrollTrigger)

const CTASection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })
  const [hoveredCard, setHoveredCard] = useState(null)
  const sectionRef = useRef(null)
  const heroRef = useRef(null)
  const statsRef = useRef([])
  const cardsRef = useRef([])
  const bannerRef = useRef(null)

  // Countdown timer effect
  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()
      const endOfYear = new Date(now.getFullYear(), 11, 31)
      const diff = endOfYear - now
      
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      })
    }

    calculateTime()
    const timer = setInterval(calculateTime, 60000)
    return () => clearInterval(timer)
  }, [])

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Banner animation
      gsap.fromTo(bannerRef.current, 
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )

      // Hero text animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, scale: 0.95 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          delay: 0.2,
          ease: "power3.out" 
        }
      )

      // Stats animation with stagger
      gsap.fromTo(statsRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6,
          stagger: 0.1,
          delay: 0.4,
          ease: "power3.out"
        }
      )

      // Bottom cards animation
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6,
          stagger: 0.15,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 80%",
            once: true
          }
        }
      )

      // Continuous pulse animation for critical elements
      gsap.to(".pulse-yellow", {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })

      // Background blob animations
      gsap.to(".blob-1", {
        x: 50,
        y: -30,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })

      gsap.to(".blob-2", {
        x: -50,
        y: 30,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const impactStats = [
    { number: "700K+", label: "Lives Lost Yearly", emphasis: "to AMR" },
    { number: "10M", label: "Projected Deaths", emphasis: "by 2050" },
    { number: "NOW", label: "Time to Act", emphasis: "is critical" }
  ]

  const handleCardHover = (index) => {
    setHoveredCard(index)
    gsap.to(cardsRef.current[index], {
      y: -8,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleCardLeave = (index) => {
    setHoveredCard(null)
    gsap.to(cardsRef.current[index], {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  return (
    <section ref={sectionRef} className="relative py-24 px-4 bg-gradient-to-br from-main-900 via-main-800 to-main-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="blob-1 absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FFCC00]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="blob-2 absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-main-400/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFCC0008_1px,transparent_1px),linear-gradient(to_bottom,#FFCC0008_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Urgent Banner */}
        <div ref={bannerRef} className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#FFCC00]/20 to-yellow-500/20 
                          border border-[#FFCC00]/50 rounded-full backdrop-blur-md">
            <HiClock className="text-[#FFCC00] animate-pulse" />
            <span className="text-sm font-bold text-[#FFCC00]">
              {timeLeft.days} days left this year to make a difference
            </span>
          </div>
        </div>

        {/* Main Hero CTA */}
        <div ref={heroRef} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-main-200 to-white bg-clip-text text-transparent">
              Every Second
            </span>
            <br />
            <span className="pulse-yellow bg-gradient-to-r from-[#FFCC00] via-yellow-400 to-[#FFCC00] bg-clip-text text-transparent inline-block">
              Counts
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light">
            Antimicrobial resistance is humanity's silent pandemic.
            <span className="block mt-2 font-bold text-[#FFCC00]">
              Your action today saves lives tomorrow.
            </span>
          </p>

          {/* Impact Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                ref={el => statsRef.current[index] = el}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 rounded-2xl 
                                border border-white/20 hover:border-[#FFCC00]/50 transition-all duration-300
                                hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FFCC00]/20">
                  <div className="text-4xl font-black text-[#FFCC00] mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                  <div className="text-xs text-main-400 mt-1">{stat.emphasis}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* Donate Button - Using imported component */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <DonateButton />
            </div>

            {/* Join Button - Links to contact */}
            <Link 
              href="/contactus"
              className="group inline-flex items-center gap-3 bg-transparent border-2 border-white/50
                       hover:border-[#FFCC00] hover:bg-[#FFCC00]/10 text-white hover:text-[#FFCC00]
                       font-bold text-lg py-5 px-10 rounded-full transition-all duration-300
                       transform hover:scale-105"
            >
              <span>JOIN THE FIGHT</span>
              <HiShieldCheck className="text-xl group-hover:rotate-12 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>501(c)(3) Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <HiSparkles className="text-[#FFCC00]" />
              <span>100% Transparent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Global Impact</span>
            </div>
          </div>
        </div>

        {/* Bottom Action Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: "💊",
              title: "Support Research",
              description: "Fund critical AMR studies",
              color: "from-[#FFCC00]/20 to-yellow-500/10"
            },
            {
              icon: "🎓",
              title: "Education Programs",
              description: "Empower the next generation",
              color: "from-main-400/20 to-main-500/10"
            },
            {
              icon: "🤝",
              title: "Partner With Us",
              description: "Amplify your CSR impact",
              color: "from-blue-400/20 to-blue-500/10"
            }
          ].map((card, index) => (
            <Link
              key={index}
              href="/contactus"
              ref={el => cardsRef.current[index] = el}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardLeave(index)}
              className={`block p-6 rounded-2xl bg-gradient-to-br ${card.color} backdrop-blur-md
                         border border-white/10 hover:border-[#FFCC00]/30 transition-all duration-300
                         hover:shadow-xl hover:shadow-main-400/20 relative overflow-hidden`}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
              <p className="text-sm text-gray-400">{card.description}</p>
              
              {hoveredCard === index && (
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FFCC00] to-yellow-500 
                                animate-[slideIn_0.3s_ease-out_forwards]"
                     style={{
                       '@keyframes slideIn': {
                         '0%': { width: '0%' },
                         '100%': { width: '100%' }
                       }
                     }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Contact message */}
        <div className="mt-12 text-center opacity-0 animate-[fadeIn_1s_1s_forwards]">
          <p className="text-sm text-gray-400">
            Questions? Email us at{" "}
            <a href="mailto:info@gsa.co.zw" className="text-[#FFCC00] hover:underline">
              info@gsa.co.zw
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  )
}

export default CTASection
