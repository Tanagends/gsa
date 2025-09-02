"use client";
import Link from "next/link"
import LinksToSocials from "../linksToSocials"
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  HiAcademicCap, HiUserGroup, HiLightBulb, HiGlobeAlt,
  HiSparkles, HiArrowRight, HiChartBar, HiBeaker,
  HiMegaphone, HiBookOpen, HiPuzzlePiece, HiShieldCheck
} from 'react-icons/hi2'

gsap.registerPlugin(ScrollTrigger)

const Programs = () => {
  const heroRef = useRef(null)
  const featuresRef = useRef([])
  const initiativesRef = useRef([])
  const visionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )

      // Features cards stagger animation
      gsap.fromTo(featuresRef.current,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current[0],
            start: "top 80%",
            once: true
          }
        }
      )

      // Initiatives animation
      gsap.fromTo(initiativesRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: initiativesRef.current[0],
            start: "top 85%",
            once: true
          }
        }
      )

      // Vision section animation
      ScrollTrigger.create({
        trigger: visionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.fromTo(visionRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
          )
        }
      })

      // Floating elements
      gsap.to('.float-element', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5
      })

      // Rotating animation for icons
      gsap.to('.rotate-slow', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      })
    })

    return () => ctx.revert()
  }, [])

  const coreFeatures = [
    {
      icon: HiBookOpen,
      title: "Cross-Disciplinary Learning",
      description: "Unite students from biology, medicine, veterinary science, agriculture, and public health",
      gradient: "from-[#FFCC00] to-yellow-500"
    },
    {
      icon: HiChartBar,
      title: "Data Sharing Hub",
      description: "Build comprehensive AMR knowledge through research and experience sharing",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: HiLightBulb,
      title: "Innovation Center",
      description: "Develop synergistic solutions through collaborative problem-solving",
      gradient: "from-green-400 to-green-600"
    }
  ]

  const initiatives = [
    {
      icon: HiBeaker,
      title: "Conduct Research",
      description: "Engage in AMR surveillance, resistance patterns, and alternative infection control approaches",
      color: "text-[#FFCC00]",
      bgColor: "bg-[#FFCC00]/10"
    },
    {
      icon: HiMegaphone,
      title: "Raise Awareness",
      description: "Lead public campaigns and social media initiatives for responsible antimicrobial use",
      color: "text-main-600",
      bgColor: "bg-main-100"
    },
    {
      icon: HiShieldCheck,
      title: "Advocate for Policy",
      description: "Drive policy changes for improved surveillance and stronger healthcare systems",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: HiUserGroup,
      title: "Build Movement",
      description: "Create a sustainable network of engaged youth across all educational levels",
      color: "text-green-600",
      bgColor: "bg-green-100"
    }
  ]

  return (
    <>
      {/* Spacer for navbar */}
      <div className="h-20"></div>

      {/* Programs Header with Enhanced Navigation */}
      <div className="bg-gradient-to-b from-main-50 to-white pt-10 pb-6">
        <h1 className="text-5xl md:text-6xl font-black text-center mb-10">
          <span className="bg-gradient-to-r from-main-400 via-main-600 to-main-800 bg-clip-text text-transparent">
            Our Programs
          </span>
        </h1>
        
        {/* Enhanced Program Navigation */}
        <section className="flex justify-center px-4">
          <div className="flex flex-wrap gap-3 p-3 bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl shadow-lg">
            <Link 
              href='/programs'
              className="group relative flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-gray-200 to-gray-300 
                       text-gray-700 font-bold rounded-xl hover:from-main-100 hover:to-main-200 hover:text-main-700
                       transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              <span className="flex items-center justify-center w-7 h-7 bg-white rounded-full text-sm font-black 
                           group-hover:bg-main-500 group-hover:text-white transition-all duration-300">
                1
              </span>
              <span className="hidden sm:inline">Overview</span>
            </Link>
            
            <Link 
              href='/programs/healthclubs'
              className="group relative flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-main-500 to-main-700 
                       text-white font-bold rounded-xl shadow-xl shadow-main-500/30
                       transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center w-7 h-7 bg-[#FFCC00] text-main-900 rounded-full text-sm font-black animate-pulse">
                2
              </span>
              <span className="hidden sm:inline">Health Clubs</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-main-500 to-main-700 opacity-20 animate-pulse"></div>
            </Link>
            
            <Link 
              href='/programs/twarawe'
              className="group relative flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-gray-200 to-gray-300 
                       text-gray-700 font-bold rounded-xl hover:from-main-100 hover:to-main-200 hover:text-main-700
                       transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              <span className="flex items-center justify-center w-7 h-7 bg-white rounded-full text-sm font-black 
                           group-hover:bg-main-500 group-hover:text-white transition-all duration-300">
                3
              </span>
              <span className="hidden sm:inline">TWARAWE</span>
            </Link>
            
            <Link 
              href='/programs/eyitfaar'
              className="group relative flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-gray-200 to-gray-300 
                       text-gray-700 font-bold rounded-xl hover:from-main-100 hover:to-main-200 hover:text-main-700
                       transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              <span className="flex items-center justify-center w-7 h-7 bg-white rounded-full text-sm font-black 
                           group-hover:bg-main-500 group-hover:text-white transition-all duration-300">
                4
              </span>
              <span className="hidden sm:inline">EYITFAAR</span>
            </Link>
          </div>
        </section>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 px-4 overflow-hidden">
        {/* Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-main-900 via-main-800 to-main-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23FFCC00%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        {/* Floating elements */}
        <div className="float-element absolute top-20 right-20 w-24 h-24 bg-[#FFCC00]/10 rounded-full blur-2xl"></div>
        <div className="float-element absolute bottom-20 left-20 w-32 h-32 bg-main-400/10 rounded-full blur-2xl"></div>
        
        {/* Decorative icons */}
        <HiAcademicCap className="rotate-slow absolute top-10 left-10 text-6xl text-white/5" />
        <HiPuzzlePiece className="rotate-slow absolute bottom-10 right-10 text-6xl text-[#FFCC00]/5" />

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6 backdrop-blur-sm">
            <HiUserGroup className="text-[#FFCC00]" />
            <span className="text-sm font-bold text-[#FFCC00]">Youth-Led Movement</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-main-200 bg-clip-text text-transparent">
              One Health Clubs
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FFCC00] via-yellow-400 to-[#FFCC00] bg-clip-text text-transparent">
              Uniting Youth Against AMR
            </span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Spearheading a transformative initiative to establish One Health Clubs across Zimbabwe's 
            primary, secondary, and tertiary schools - empowering young people from diverse disciplines 
            to become active agents in combating antimicrobial resistance.
          </p>

          <LinksToSocials />
        </div>
      </section>

      {/* The One Health Approach Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-main-100 rounded-full mb-4">
              <HiGlobeAlt className="text-main-600" />
              <span className="text-sm font-bold text-main-700">The One Health Imperative</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-main-800 mb-6">
              A Holistic Approach to Global Health
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              AMR is a complex challenge that cannot be tackled in isolation. By uniting youth passionate about 
              mental health, HIV/AIDS, pandemic preparedness, and neglected tropical diseases, we foster 
              collaboration and prevent duplication of effort.
            </p>
          </div>

          {/* Interconnected Health Visual */}
          <div className="relative max-w-2xl mx-auto mb-16">
            <div className="relative bg-gradient-to-br from-main-100 to-main-50 rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full 
                                flex items-center justify-center text-white text-2xl mb-2 shadow-lg">
                    🌍
                  </div>
                  <p className="text-sm font-bold text-gray-700">Environmental</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full 
                                flex items-center justify-center text-white text-2xl mb-2 shadow-lg">
                    👥
                  </div>
                  <p className="text-sm font-bold text-gray-700">Human</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#FFCC00] to-yellow-500 rounded-full 
                                flex items-center justify-center text-white text-2xl mb-2 shadow-lg">
                    🐾
                  </div>
                  <p className="text-sm font-bold text-gray-700">Animal</p>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-gradient-to-br from-main-500 to-main-700 rounded-full 
                              flex items-center justify-center text-white font-bold shadow-2xl">
                  ONE<br/>HEALTH
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-main-800 mb-12">
            Platforms for Collaboration & Innovation
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                ref={el => featuresRef.current[index] = el}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                         transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent rounded-full"></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl 
                              flex items-center justify-center text-white mb-6 group-hover:scale-110 
                              transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="text-2xl" />
                </div>
                
                <h4 className="text-xl font-bold text-main-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} 
                              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empowering Youth Initiatives */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-4">
              <HiSparkles className="text-[#FFCC00]" />
              <span className="text-sm font-bold text-[#FFCC00]">Empowering Youth</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-main-800">
              Youth as Agents of Change
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                ref={el => initiativesRef.current[index] = el}
                className={`group relative ${initiative.bgColor} rounded-2xl p-6 
                         hover:shadow-xl transition-all duration-300 transform hover:-translate-x-2
                         border-l-4 border-transparent hover:border-l-main-500`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center 
                                ${initiative.color} shadow-md group-hover:scale-110 transition-transform`}>
                    <initiative.icon className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-main-800 mb-2">{initiative.title}</h4>
                    <p className="text-gray-600">{initiative.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section ref={visionRef} className="py-20 px-4 bg-gradient-to-br from-main-900 via-main-800 to-main-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6 backdrop-blur-sm">
            <HiArrowRight className="text-[#FFCC00]" />
            <span className="text-sm font-bold text-[#FFCC00]">The GSA Vision</span>
          </div>
          
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">
            A Healthier Future for All
          </h3>
          
          <p className="text-xl text-gray-200 leading-relaxed mb-12">
            Through One Health Clubs, we're embedding a One Health perspective in future generations, 
            cultivating young people who are knowledgeable, passionate, and committed to tackling 
            the global challenge of antimicrobial resistance.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🎓", label: "Education", desc: "Knowledge-driven approach" },
              { icon: "🤝", label: "Collaboration", desc: "Multi-sectoral unity" },
              { icon: "🌍", label: "Sustainability", desc: "Long-term impact" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 
                                        hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-bold text-[#FFCC00] mb-1">{item.label}</h4>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/contactus" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FFCC00] to-yellow-500 
                           hover:from-yellow-500 hover:to-[#FFCC00] text-main-900 font-bold py-4 px-8 
                           rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#FFCC00]/30 
                           transform hover:scale-105 transition-all duration-300">
              <span>Join Our Movement</span>
              <HiArrowRight className="text-xl" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Programs
