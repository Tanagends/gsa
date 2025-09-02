"use client";
import Link from "next/link"
import LinksToSocials from "../linksToSocials"
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  HiMicrophone, HiGlobeAlt, HiSparkles, HiArrowRight,
  HiUserGroup, HiCalendarDays, HiChatBubbleLeftRight,
  HiBookOpen, HiRocketLaunch, HiLightBulb, HiChartBar,
  HiPlay, HiUsers, HiAcademicCap, HiSpeakerWave
} from 'react-icons/hi2'

gsap.registerPlugin(ScrollTrigger)

const Programs = () => {
  const heroRef = useRef(null)
  const statsRef = useRef([])
  const activitiesRef = useRef([])
  const impactRef = useRef([])
  const futureRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )

      // Stats animation
      statsRef.current.forEach((stat, index) => {
        ScrollTrigger.create({
          trigger: stat,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.fromTo(stat,
              { opacity: 0, scale: 0.8, y: 20 },
              { 
                opacity: 1, 
                scale: 1, 
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: "back.out(1.7)"
              }
            )
          }
        })
      })

      // Activities cards animation
      gsap.fromTo(activitiesRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: activitiesRef.current[0],
            start: "top 80%",
            once: true
          }
        }
      )

      // Impact items animation
      gsap.fromTo(impactRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: impactRef.current[0],
            start: "top 85%",
            once: true
          }
        }
      )

      // Future section animation
      ScrollTrigger.create({
        trigger: futureRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.fromTo(futureRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
          )
        }
      })

      // Floating animation
      gsap.to('.float-element', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5
      })

      // Pulse animation for live indicator
      gsap.to('.pulse-live', {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power2.out"
      })

      // Wave animation
      gsap.to('.wave-animation', {
        x: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      })
    })

    return () => ctx.revert()
  }, [])

  const projectStats = [
    { icon: HiCalendarDays, value: "Bi-weekly", label: "Sessions", color: "from-[#FFCC00] to-yellow-500" },
    { icon: HiGlobeAlt, value: "Global", label: "Reach", color: "from-blue-400 to-blue-600" },
    { icon: HiUsers, value: "Multi-Gen", label: "Participants", color: "from-main-400 to-main-600" },
    { icon: HiMicrophone, value: "Live", label: "Discussions", color: "from-green-400 to-green-600" }
  ]

  const keyActivities = [
    {
      icon: HiCalendarDays,
      title: "Session Planning",
      items: [
        "Identifying relevant topics and speakers based on current AMR trends",
        "Collaborating with panelists for engaging discussion points",
        "Promoting sessions through social media channels"
      ],
      color: "bg-[#FFCC00]/10",
      borderColor: "border-[#FFCC00]"
    },
    {
      icon: HiSpeakerWave,
      title: "X Space Discussion Series",
      items: [
        "Hosting bi-weekly live sessions on X Space platform",
        "Moderating discussions for inclusive participation",
        "Capturing key takeaways and action points"
      ],
      color: "bg-main-100",
      borderColor: "border-main-500"
    },
    {
      icon: HiRocketLaunch,
      title: "Post-Session Engagement",
      items: [
        "Sharing recordings and resources across platforms",
        "Facilitating ongoing dialogue through online forums",
        "Connecting participants with AMR organizations"
      ],
      color: "bg-blue-50",
      borderColor: "border-blue-500"
    }
  ]

  const impactPoints = [
    { icon: HiLightBulb, text: "Raising AMR awareness among youth and broader audiences" },
    { icon: HiAcademicCap, text: "Equipping young people with knowledge and skills" },
    { icon: HiUserGroup, text: "Fostering intergenerational dialogue and collaboration" },
    { icon: HiRocketLaunch, text: "Identifying and supporting emerging AMR solutions" }
  ]

  const futureDirections = [
    { icon: "🌍", title: "Global Expansion", desc: "Engage more youth worldwide" },
    { icon: "📚", title: "Resource Library", desc: "Comprehensive AMR information hub" },
    { icon: "🤝", title: "Mentorship Programs", desc: "Support young AMR leaders" },
    { icon: "🔗", title: "Collaborations", desc: "Amplify project impact" }
  ]

  return (
    <main>
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
              className="group relative flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-gray-200 to-gray-300 
                       text-gray-700 font-bold rounded-xl hover:from-main-100 hover:to-main-200 hover:text-main-700
                       transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              <span className="flex items-center justify-center w-7 h-7 bg-white rounded-full text-sm font-black 
                           group-hover:bg-main-500 group-hover:text-white transition-all duration-300">
                2
              </span>
              <span className="hidden sm:inline">Health Clubs</span>
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
              className="group relative flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-main-500 to-main-700 
                       text-white font-bold rounded-xl shadow-xl shadow-main-500/30
                       transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center w-7 h-7 bg-[#FFCC00] text-main-900 rounded-full text-sm font-black animate-pulse">
                4
              </span>
              <span className="hidden sm:inline">EYITFAAR</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-main-500 to-main-700 opacity-20 animate-pulse"></div>
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
        
        {/* Sound wave decorations */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <div className="wave-animation flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-20 bg-white/5 rounded-full"></div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <div className="wave-animation flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-20 bg-[#FFCC00]/10 rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Live indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full mb-6 backdrop-blur-sm">
            <div className="relative">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="pulse-live absolute inset-0 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <span className="text-sm font-bold text-red-400">LIVE DISCUSSIONS</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-main-200 bg-clip-text text-transparent">
              Engaging Youths in the
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FFCC00] via-yellow-400 to-[#FFCC00] bg-clip-text text-transparent">
              Fight Against AMR
            </span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            A Global X Space Discussion Series adopting a One Health approach to equip young people 
            with knowledge about AMR and foster collaboration between generations.
          </p>

          <LinksToSocials />
        </div>
      </section>

      {/* Project Overview Stats */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => (
              <div
                key={index}
                ref={el => statsRef.current[index] = el}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                         transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 rounded-2xl 
                              group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative text-center">
                  <stat.icon className={`text-3xl mx-auto mb-3 bg-gradient-to-r ${stat.color} 
                                      bg-clip-text text-transparent`} />
                  <div className="text-2xl font-black text-main-800">{stat.value}</div>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-main-50 to-main-100 rounded-3xl p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <HiUserGroup className="text-3xl text-main-600 mx-auto" />
                <p className="text-sm text-gray-600">Project Organizer</p>
                <p className="font-bold text-main-800">Generational Stewards for Antimicrobials</p>
              </div>
              <div className="space-y-2">
                <HiCalendarDays className="text-3xl text-[#FFCC00] mx-auto" />
                <p className="text-sm text-gray-600">Format</p>
                <p className="font-bold text-main-800">Bi-weekly X Space Series</p>
              </div>
              <div className="space-y-2">
                <HiGlobeAlt className="text-3xl text-blue-500 mx-auto" />
                <p className="text-sm text-gray-600">Focus</p>
                <p className="font-bold text-main-800">One Health Approach</p>
              </div>
            </div>
          </div>

          {/* Ongoing Activity Summary */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-main-100 rounded-full mb-6">
              <HiChatBubbleLeftRight className="text-main-600" />
              <span className="text-sm font-bold text-main-700">Ongoing Activity</span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              The Generational Stewards for Antimicrobials host bi-weekly X Space discussions featuring 
              diverse panels of experts from various sectors including researchers, practitioners, advocates, 
              and policy-makers. Each session includes a mix of young participants and experienced professionals 
              to encourage knowledge sharing, mentorship, and the development of innovative AMR solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Activities */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-main-800 mb-12">
            Key Activities
          </h3>
          
          <div className="space-y-8">
            {keyActivities.map((activity, index) => (
              <div
                key={index}
                ref={el => activitiesRef.current[index] = el}
                className={`${activity.color} rounded-2xl p-8 border-l-4 ${activity.borderColor} 
                         hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center 
                                text-main-600 shadow-md flex-shrink-0">
                    <activity.icon className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-main-800 mb-4">{activity.title}</h4>
                    <ul className="space-y-2">
                      {activity.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-main-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Impact */}
      <section className="py-16 px-4 bg-gradient-to-br from-main-900 via-main-800 to-main-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-4">
              <HiChartBar className="text-[#FFCC00]" />
              <span className="text-sm font-bold text-[#FFCC00]">Project Impact</span>
            </div>
            <h3 className="text-3xl font-bold text-white">
              Creating Lasting Change
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {impactPoints.map((impact, index) => (
              <div
                key={index}
                ref={el => impactRef.current[index] = el}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 
                         hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFCC00] rounded-lg flex items-center justify-center 
                                text-main-900 flex-shrink-0">
                    <impact.icon className="text-xl" />
                  </div>
                  <p className="text-gray-200">{impact.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Directions */}
      <section ref={futureRef} className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-4">
              <HiArrowRight className="text-[#FFCC00]" />
              <span className="text-sm font-bold text-[#FFCC00]">Future Directions</span>
            </div>
            <h3 className="text-3xl font-bold text-main-800">
              Expanding Our Reach
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {futureDirections.map((direction, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 
                                        shadow-lg hover:shadow-xl transition-all duration-300 
                                        transform hover:-translate-y-2 text-center">
                <div className="text-3xl mb-3">{direction.icon}</div>
                <h4 className="text-lg font-bold text-main-800 mb-2">{direction.title}</h4>
                <p className="text-sm text-gray-600">{direction.desc}</p>
              </div>
            ))}
          </div>

          {/* Commitment Statement */}
          <div className="bg-gradient-to-r from-[#FFCC00]/10 to-yellow-500/10 rounded-3xl p-8 
                        border-2 border-[#FFCC00]/30 text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This ongoing activity exemplifies the Generational Stewards for Antimicrobials' commitment to 
              engaging youth in the fight against AMR, building a global community of action, and ensuring 
              a healthier future for all.
            </p>
            <Link href="/contactus" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FFCC00] to-yellow-500 
                           hover:from-yellow-500 hover:to-[#FFCC00] text-main-900 font-bold py-4 px-8 
                           rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#FFCC00]/30 
                           transform hover:scale-105 transition-all duration-300">
              <span>Join the Discussion</span>
              <HiMicrophone className="text-xl" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Programs
