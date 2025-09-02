"use client";
import Link from "next/link"
import LinksToSocials from "../linksToSocials"
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  HiCalendar, HiMicrophone, HiUserGroup, HiTrophy, 
  HiGlobeAlt, HiSparkles, HiArrowRight, HiPlay,
  HiUsers, HiChartBar, HiFlag
} from 'react-icons/hi2'

gsap.registerPlugin(ScrollTrigger)

const Programs = () => {
  const heroRef = useRef(null)
  const statsRef = useRef([])
  const activitiesRef = useRef([])
  const timelineRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )

      // Stats counter animation
      statsRef.current.forEach((stat, index) => {
        const target = stat.querySelector('.stat-number')
        const endValue = parseInt(target.textContent)
        
        ScrollTrigger.create({
          trigger: stat,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.fromTo(target,
              { textContent: 0 },
              {
                textContent: endValue,
                duration: 2,
                delay: index * 0.2,
                snap: { textContent: 1 },
                ease: "power2.out"
              }
            )
          }
        })
      })

      // Activities cards animation
      gsap.fromTo(activitiesRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: activitiesRef.current[0],
            start: "top 80%",
            once: true
          }
        }
      )

      // Timeline animation
      timelineRef.current.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              once: true
            }
          }
        )
      })

      // Floating animation for decorative elements
      gsap.to('.float-element', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5
      })
    })

    return () => ctx.revert()
  }, [])

  const stats = [
    { number: "500", label: "Youth Engaged", icon: HiUsers, color: "from-[#FFCC00] to-yellow-500" },
    { number: "10", label: "Schools Involved", icon: HiFlag, color: "from-main-400 to-main-600" },
    { number: "3", label: "Countries Connected", icon: HiGlobeAlt, color: "from-blue-400 to-blue-600" },
    { number: "2", label: "Years of Impact", icon: HiChartBar, color: "from-green-400 to-green-600" }
  ]

  const activities2022 = [
    {
      icon: HiMicrophone,
      title: "Radio Sensitization",
      description: "Coordinated AMR awareness spots on Star FM, reaching millions across Zimbabwe",
      impact: "1M+ listeners"
    },
    {
      icon: HiUserGroup,
      title: "AMR Seminar",
      description: "Organized informative seminars providing insights into AMR consequences and solutions",
      impact: "200+ attendees"
    },
    {
      icon: HiGlobeAlt,
      title: "Go Blue Campaign",
      description: "Participated in the global campaign, showcasing solidarity against AMR",
      impact: "Global reach"
    },
    {
      icon: HiPlay,
      title: "TikTok Contest",
      description: "Engaged tertiary schools in creative content creation for AMR awareness",
      impact: "50K+ views"
    }
  ]

  const activities2023 = [
    {
      icon: HiTrophy,
      title: "Soccer Tournament",
      description: "Top 10 secondary schools competed while learning about AMR",
      impact: "10 schools",
      highlight: true
    },
    {
      icon: HiUserGroup,
      title: "International Debate",
      description: "Youth from Zambia, Zimbabwe, and Senegal engaged in cross-border dialogue",
      impact: "3 countries",
      highlight: true
    },
    {
      icon: HiFlag,
      title: "Walkathon",
      description: "200+ youth marched through Harare CBD raising AMR awareness",
      impact: "200+ participants"
    }
  ]

  return (
    <>
      {/* Navigation Pills */}
      <section className="sticky top-0 z-40 bg-gradient-to-b from-white via-white to-transparent pt-4 pb-6">
        <div className="flex justify-center gap-2">
          {[
            { href: '/programs', num: '1', label: 'Overview' },
            { href: '/programs/healthclubs', num: '2', label: 'Health Clubs' },
            { href: '/programs/twarawe', num: '3', label: 'TWARAWE', active: true },
            { href: '/programs/eyitfaar', num: '4', label: 'EYITFAAR' }
          ].map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              className={`group relative px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105
                ${item.active 
                  ? 'bg-gradient-to-r from-main-500 to-main-700 text-white shadow-xl shadow-main-500/30' 
                  : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 hover:from-main-100 hover:to-main-200 hover:text-main-700'
                }`}
            >
              <span className="flex items-center gap-2">
                <span className={`text-sm ${item.active ? 'text-[#FFCC00]' : 'text-main-400'}`}>{item.num}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </span>
              {item.active && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-main-500 to-main-700 animate-pulse opacity-20"></div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 px-4 overflow-hidden">
        {/* Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-main-900 via-main-800 to-main-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23FFCC00%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        {/* Floating elements */}
        <div className="float-element absolute top-20 right-10 w-20 h-20 bg-[#FFCC00]/10 rounded-full blur-xl"></div>
        <div className="float-element absolute bottom-20 left-10 w-32 h-32 bg-main-400/10 rounded-full blur-xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6">
            <HiCalendar className="text-[#FFCC00]" />
            <span className="text-sm font-bold text-[#FFCC00]">World AMR Awareness Week</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-main-200 bg-clip-text text-transparent">
              The World Antimicrobial Resistance
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FFCC00] via-yellow-400 to-[#FFCC00] bg-clip-text text-transparent">
              Awareness Week Engagement
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Leading Youth Engagement in Zimbabwe's fight against AMR through innovative campaigns, 
            education, and community mobilization
          </p>

          <LinksToSocials />
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              ref={el => statsRef.current[index] = el}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity`}></div>
              <div className="relative">
                <stat.icon className={`text-3xl mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                <div className="stat-number text-3xl font-black text-main-800">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">+</div>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Introduction */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-main-800 mb-6">
              Mobilizing Youth for Global Health
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Generational Stewards for Antimicrobials (GSA) has taken a leading role in coordinating 
              youth engagement during World Antimicrobial Resistance Awareness Week (WAAW) in Zimbabwe, 
              successfully mobilizing young people to raise awareness and advocate for action against AMR.
            </p>
          </div>

          {/* 2022 Activities */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-main-400 to-main-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2022
              </div>
              <h3 className="text-3xl font-bold text-main-800">Foundation Year</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {activities2022.map((activity, index) => (
                <div
                  key={index}
                  ref={el => activitiesRef.current[index] = el}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 
                           hover:border-main-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FFCC00] to-yellow-500 rounded-xl 
                                  flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <activity.icon className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-main-800 mb-2">{activity.title}</h4>
                      <p className="text-gray-600 mb-3">{activity.description}</p>
                      <div className="inline-flex items-center gap-2 text-sm font-bold text-[#FFCC00]">
                        <HiSparkles />
                        <span>{activity.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2023 Activities */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFCC00] to-yellow-500 rounded-full flex items-center justify-center text-main-900 font-bold text-xl shadow-lg">
                2023
              </div>
              <h3 className="text-3xl font-bold text-main-800">Expansion & Collaboration</h3>
            </div>

            <p className="text-gray-600 mb-8 bg-main-50 p-4 rounded-xl border-l-4 border-main-400">
              Building on 2022's success, GSA expanded efforts and collaborated with the Government of Zimbabwe, 
              WOAH, WHO, FAO, and UNEP.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {activities2023.map((activity, index) => (
                <div
                  key={index}
                  ref={el => timelineRef.current[index] = el}
                  className={`group relative bg-white rounded-2xl p-6 
                           ${activity.highlight ? 'ring-2 ring-[#FFCC00] shadow-xl' : 'border border-gray-100'}
                           hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  {activity.highlight && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#FFCC00] to-yellow-500 
                                  text-main-900 text-xs font-bold px-3 py-1 rounded-full">
                      HIGHLIGHT
                    </div>
                  )}
                  <div className="w-14 h-14 bg-gradient-to-br from-main-500 to-main-700 rounded-xl 
                                flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <activity.icon className="text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-main-800 mb-2">{activity.title}</h4>
                  <p className="text-gray-600 mb-3">{activity.description}</p>
                  <div className="flex items-center gap-2 text-sm font-bold text-main-600">
                    <HiChartBar />
                    <span>{activity.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-gradient-to-br from-main-900 via-main-800 to-main-900 rounded-3xl p-8 md:p-12 text-white mb-16">
            <h3 className="text-3xl font-bold mb-6 text-[#FFCC00]">Impact & Significance</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-200 leading-relaxed mb-4">
                  Through these impactful activities, GSA has successfully mobilized young people in Zimbabwe, 
                  raising awareness about AMR, building partnerships, and fostering collaboration.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  These initiatives demonstrate GSA's commitment to empowering youth as active agents in the 
                  fight against antimicrobial resistance.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-[#FFCC00]">Key Achievements</h4>
                <ul className="space-y-3">
                  {['Youth Mobilization', 'Partnership Building', 'Cross-border Dialogue', 'Community Engagement'].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#FFCC00] rounded-full"></div>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Future Plans */}
          <div className="bg-gradient-to-r from-[#FFCC00]/10 to-yellow-500/10 rounded-3xl p-8 border-2 border-[#FFCC00]/30">
            <div className="flex items-center gap-3 mb-6">
              <HiArrowRight className="text-3xl text-[#FFCC00]" />
              <h3 className="text-3xl font-bold text-main-800">Future Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              GSA plans to continue leading youth engagement in future WAAW celebrations, expanding their reach, 
              and incorporating new initiatives to further amplify the fight against AMR.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {['Expand Reach', 'New Initiatives', 'Sustainable Movement'].map((goal, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <p className="font-bold text-main-800">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Programs
