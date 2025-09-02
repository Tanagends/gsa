"use client";
import Link from "next/link"
import LinksToSocials from './linksToSocials'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  HiAcademicCap, HiUserGroup, HiLightBulb, HiSparkles,
  HiBookOpen, HiRocketLaunch, HiPresentationChartBar,
  HiHeart, HiPuzzlePiece, HiBuildingLibrary, HiMegaphone,
  HiUsers, HiChartBar, HiShieldCheck, HiArrowRight
} from 'react-icons/hi2'

gsap.registerPlugin(ScrollTrigger)

const Programs = () => {
  const heroRef = useRef(null)
  const schoolsRef = useRef([])
  const elementsRef = useRef([])
  const activitiesRef = useRef([])
  const impactRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )

      // Schools cards animation
      gsap.fromTo(schoolsRef.current,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: schoolsRef.current[0],
            start: "top 80%",
            once: true
          }
        }
      )

      // Program elements animation
      gsap.fromTo(elementsRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elementsRef.current[0],
            start: "top 80%",
            once: true
          }
        }
      )

      // Activities animation
      gsap.fromTo(activitiesRef.current,
        { opacity: 0, y: 40, rotateX: -30 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: activitiesRef.current[0],
            start: "top 85%",
            once: true
          }
        }
      )

      // Impact section animation
      ScrollTrigger.create({
        trigger: impactRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.fromTo(impactRef.current,
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

      // Rotating icons
      gsap.to('.rotate-slow', {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none"
      })

      // Pulse animation
      gsap.to('.pulse-yellow', {
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })
    })

    return () => ctx.revert()
  }, [])

  const schools = [
    {
      name: "Alexander College",
      status: "Active",
      students: "200+",
      icon: "🎓",
      gradient: "from-[#FFCC00] to-yellow-500"
    },
    {
      name: "Kingdom Knowledge College",
      status: "Active",
      students: "150+",
      icon: "🏫",
      gradient: "from-main-500 to-main-700"
    }
  ]

  const programElements = [
    {
      icon: HiPresentationChartBar,
      title: "Interactive Workshops",
      items: [
        "Responsible antimicrobial use",
        "Dangers of antibiotic resistance",
        "Infection prevention strategies",
        "Hygiene and sanitation importance"
      ],
      color: "bg-[#FFCC00]/10",
      iconColor: "text-[#FFCC00]"
    },
    {
      icon: HiPuzzlePiece,
      title: "Creative Activities",
      description: "Role-playing, storytelling, and art projects to reinforce learning and make AMR concepts relatable and memorable",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: HiMegaphone,
      title: "Community Engagement",
      description: "Students lead awareness campaigns, educational presentations, and hygiene promotion initiatives in their communities",
      color: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: HiUsers,
      title: "Mentorship Program",
      description: "Experienced mentors from GSA provide guidance and support, fostering community and ongoing commitment",
      color: "bg-main-100",
      iconColor: "text-main-600"
    }
  ]

  const objectives = [
    { icon: "🎯", text: "Equip students with AMR knowledge and skills" },
    { icon: "💪", text: "Build confidence to become change agents" },
    { icon: "🌟", text: "Foster deep understanding of AMR implications" },
    { icon: "🤝", text: "Create a network of youth AMR champions" }
  ]

  const programStats = [
    { number: "2", label: "Active Schools", icon: HiBuildingLibrary },
    { number: "350", label: "Students Engaged", icon: HiUsers },
    { number: "15", label: "Workshops Conducted", icon: HiBookOpen },
    { number: "5", label: "Community Projects", icon: HiHeart }
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
              className="group relative flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-main-500 to-main-700 
                       text-white font-bold rounded-xl shadow-xl shadow-main-500/30
                       transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center w-7 h-7 bg-[#FFCC00] text-main-900 rounded-full text-sm font-black animate-pulse">
                1
              </span>
              <span className="hidden sm:inline">Overview</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-main-500 to-main-700 opacity-20 animate-pulse"></div>
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
        <HiAcademicCap className="rotate-slow absolute top-10 right-10 text-6xl text-white/5" />
        <HiLightBulb className="rotate-slow absolute bottom-10 left-10 text-6xl text-[#FFCC00]/5" />

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6 backdrop-blur-sm">
            <HiRocketLaunch className="text-[#FFCC00]" />
            <span className="text-sm font-bold text-[#FFCC00]">Empowering Future Leaders</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-main-200 bg-clip-text text-transparent">
              Leadership & Capacity
            </span>
            <br />
            <span className="pulse-yellow bg-gradient-to-r from-[#FFCC00] via-yellow-400 to-[#FFCC00] bg-clip-text text-transparent">
              Building Program
            </span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Implementing a comprehensive AMR education program in primary and secondary schools across Zimbabwe, 
            empowering young minds to become champions in the fight against antimicrobial resistance.
          </p>

          <LinksToSocials />
        </div>
      </section>

      {/* Program Stats */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {programStats.map((stat, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                                        transition-all duration-300 transform hover:-translate-y-2">
                <stat.icon className="text-3xl text-main-600 mb-3" />
                <div className="text-3xl font-black text-main-800">
                  {stat.number}+
                </div>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Schools */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-main-100 rounded-full mb-4">
              <HiBuildingLibrary className="text-main-600" />
              <span className="text-sm font-bold text-main-700">Pilot Schools</span>
            </div>
            <h3 className="text-3xl font-bold text-main-800">
              Leading Educational Institutions
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {schools.map((school, index) => (
              <div
                key={index}
                ref={el => schoolsRef.current[index] = el}
                className="relative group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 
                         shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2
                         border border-gray-100 hover:border-main-300"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${school.gradient} 
                              opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                
                <div className="relative">
                  <div className="text-5xl mb-4">{school.icon}</div>
                  <h4 className="text-2xl font-bold text-main-800 mb-2">{school.name}</h4>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 
                                   rounded-full font-semibold">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      {school.status}
                    </span>
                    <span className="text-gray-600 font-semibold">{school.students} Students</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-main-800 mb-4">
              Program Objectives
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Equipping students with the knowledge, skills, and confidence to become active agents 
              of change in their communities through a multifaceted approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {objectives.map((obj, index) => (
              <div key={index} className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-md 
                                        hover:shadow-lg transition-all duration-300">
                <div className="text-3xl">{obj.icon}</div>
                <p className="text-gray-700">{obj.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Elements */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-4">
              <HiSparkles className="text-[#FFCC00]" />
              <span className="text-sm font-bold text-[#FFCC00]">Engaging Young Minds</span>
            </div>
            <h3 className="text-3xl font-bold text-main-800">
              A Multifaceted Approach
            </h3>
          </div>

          <div className="space-y-6">
            {programElements.map((element, index) => (
              <div
                key={index}
                ref={el => elementsRef.current[index] = el}
                className={`${element.color} rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 bg-white rounded-xl flex items-center justify-center 
                                ${element.iconColor} shadow-md flex-shrink-0`}>
                    <element.icon className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-main-800 mb-3">{element.title}</h4>
                    {element.items ? (
                      <ul className="space-y-2">
                        {element.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-main-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600">{element.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section ref={impactRef} className="py-20 px-4 bg-gradient-to-br from-main-900 via-main-800 to-main-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6 backdrop-blur-sm">
            <HiChartBar className="text-[#FFCC00]" />
            <span className="text-sm font-bold text-[#FFCC00]">Building Future Leaders</span>
          </div>
          
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Creating Lasting Impact
          </h3>
          
          <p className="text-xl text-gray-200 leading-relaxed mb-12 max-w-4xl mx-auto">
            The successful launch at Alexander College and Kingdom Knowledge College marks a significant 
            milestone in GSA's commitment to empowering youth. These schools serve as model examples of 
            effective implementation, fostering responsibility and building a foundation for a healthier future.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: "🌱", label: "Foundation", desc: "Building knowledge base" },
              { icon: "🚀", label: "Empowerment", desc: "Creating change agents" },
              { icon: "🌍", label: "Sustainability", desc: "Long-term health impact" }
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
              <span>Join Our Program</span>
              <HiArrowRight className="text-xl" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Programs
