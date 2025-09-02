"use client";
import Link from "next/link"
import { useState, useEffect } from 'react'
import { HiArrowRight, HiSparkles, HiShieldCheck, HiClock } from 'react-icons/hi2'
import { motion } from 'framer-motion'

const CTASection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })
  const [hoveredCard, setHoveredCard] = useState(null)

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const endOfYear = new Date(now.getFullYear(), 11, 31)
      const diff = endOfYear - now
      
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      })
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  const impactStats = [
    { number: "700K+", label: "Lives Lost Yearly", emphasis: "to AMR" },
    { number: "10M", label: "Projected Deaths", emphasis: "by 2050" },
    { number: "NOW", label: "Time to Act", emphasis: "is critical" }
  ]

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-main-900 via-main-800 to-main-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FFCC00]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-main-400/10 to-transparent rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFCC0008_1px,transparent_1px),linear-gradient(to_bottom,#FFCC0008_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Urgent Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#FFCC00]/20 to-yellow-500/20 
                          border border-[#FFCC00]/50 rounded-full backdrop-blur-md">
            <HiClock className="text-[#FFCC00] animate-pulse" />
            <span className="text-sm font-bold text-[#FFCC00]">
              {timeLeft.days} days left this year to make a difference
            </span>
          </div>
        </motion.div>

        {/* Main Hero CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-main-200 to-white bg-clip-text text-transparent">
              Every Second
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FFCC00] via-yellow-400 to-[#FFCC00] bg-clip-text text-transparent 
                           animate-pulse inline-block">
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 rounded-2xl 
                                border border-white/20 hover:border-[#FFCC00]/50 transition-all duration-300
                                hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FFCC00]/20">
                  <div className="text-4xl font-black text-[#FFCC00] mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                  <div className="text-xs text-main-400 mt-1">{stat.emphasis}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* Donate Button - Primary */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/donate"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#FFCC00] to-yellow-500 
                         hover:from-yellow-500 hover:to-[#FFCC00] text-main-900 font-black text-lg py-5 px-10 
                         rounded-full shadow-2xl hover:shadow-[#FFCC00]/50 transition-all duration-300
                         before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-0 
                         hover:before:opacity-20 before:transition-opacity overflow-hidden"
              >
                <span className="relative z-10">DONATE NOW</span>
                <HiArrowRight className="relative z-10 text-xl group-hover:translate-x-1 transition-transform" />
                
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-full">
                  <div className="absolute inset-0 rounded-full bg-[#FFCC00] animate-ping opacity-30"></div>
                </div>
              </Link>
            </motion.div>

            {/* Join Button - Secondary */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/join"
                className="group inline-flex items-center gap-3 bg-transparent border-2 border-white/50
                         hover:border-[#FFCC00] hover:bg-[#FFCC00]/10 text-white hover:text-[#FFCC00]
                         font-bold text-lg py-5 px-10 rounded-full transition-all duration-300"
              >
                <span>JOIN THE FIGHT</span>
                <HiShieldCheck className="text-xl group-hover:rotate-12 transition-transform" />
              </Link>
            </motion.div>
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
        </motion.div>

        {/* Bottom Action Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: "💰",
              title: "One-Time Gift",
              description: "Make an immediate impact",
              link: "/donate",
              color: "from-[#FFCC00]/20 to-yellow-500/10"
            },
            {
              icon: "🔄",
              title: "Monthly Support",
              description: "Sustain our mission",
              link: "/donate/monthly",
              color: "from-main-400/20 to-main-500/10"
            },
            {
              icon: "🤝",
              title: "Corporate Partnership",
              description: "Amplify your CSR impact",
              link: "/partnerships",
              color: "from-blue-400/20 to-blue-500/10"
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Link
                href={card.link}
                className={`block p-6 rounded-2xl bg-gradient-to-br ${card.color} backdrop-blur-md
                           border border-white/10 hover:border-[#FFCC00]/30 transition-all duration-300
                           hover:shadow-xl hover:shadow-main-400/20`}
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                <p className="text-sm text-gray-400">{card.description}</p>
                
                {hoveredCard === index && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className="h-0.5 bg-gradient-to-r from-[#FFCC00] to-yellow-500 mt-4"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Floating urgency message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-400">
            Questions? Email us at{" "}
            <a href="mailto:info@gsa.co.zw" className="text-[#FFCC00] hover:underline">
              info@gsa.co.zw
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
