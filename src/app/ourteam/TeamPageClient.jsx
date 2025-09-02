"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MemberCard from './MemberCard';
import { 
  HiUsers, HiSparkles, HiAcademicCap,
  HiGlobeAlt, HiShieldCheck, HiLightBulb,
  HiMagnifyingGlass
} from 'react-icons/hi2';

gsap.registerPlugin(ScrollTrigger);

export default function TeamPageClient({ teamMembers }) {
  const heroRef = useRef(null);
  const membersRef = useRef([]);
  const statsRef = useRef([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Stats animation
      statsRef.current.forEach((stat, index) => {
        gsap.fromTo(stat,
          { opacity: 0, scale: 0.8 },
          { 
            opacity: 1, 
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "back.out(1.7)"
          }
        );
      });

      // Members stagger animation
      if (membersRef.current.length > 0) {
        gsap.fromTo(membersRef.current,
          { 
            opacity: 0, 
            y: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: membersRef.current[0],
              start: "top 80%",
              once: true
            }
          }
        );
      }

      // Floating elements
      gsap.to('.float-element', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5
      });

      // Rotating icons
      gsap.to('.rotate-slow', {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none"
      });
    });

    return () => ctx.revert();
  }, [teamMembers]);

  // Departments for filtering
  const departments = [
    { id: 'all', label: 'All Team', icon: HiUsers },
    { id: 'leadership', label: 'Leadership', icon: HiShieldCheck },
    { id: 'research', label: 'Research', icon: HiAcademicCap },
    { id: 'advocacy', label: 'Advocacy', icon: HiGlobeAlt },
    { id: 'operations', label: 'Operations', icon: HiLightBulb }
  ];

  // Filter members based on search and department
  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = 
      member.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.surname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <>
      {/* Spacer for navbar */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-main-900 via-main-800 to-main-900">
        {/* Background Design */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23FFCC00%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        {/* Floating elements */}
        <div className="float-element absolute top-20 right-20 w-32 h-32 bg-[#FFCC00]/10 rounded-full blur-3xl"></div>
        <div className="float-element absolute bottom-20 left-20 w-40 h-40 bg-main-400/10 rounded-full blur-3xl"></div>

        {/* Decorative icons */}
        <HiUsers className="rotate-slow absolute top-10 left-10 text-6xl text-white/5" />
        <HiAcademicCap className="absolute bottom-10 right-10 text-6xl text-[#FFCC00]/5 rotate-12" />

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6 backdrop-blur-sm">
            <HiSparkles className="text-[#FFCC00]" />
            <span className="text-sm font-bold text-[#FFCC00]">Meet Our Experts</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-main-200 to-white bg-clip-text text-transparent">
              The Team Behind
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FFCC00] via-yellow-400 to-[#FFCC00] bg-clip-text text-transparent">
              GSA&apos;s Mission
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Passionate professionals and advocates united in the fight against antimicrobial resistance, 
            working together to secure a healthier future for generations to come
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: teamMembers.length, label: "Team Members", icon: HiUsers },
              { value: "10+", label: "Countries Represented", icon: HiGlobeAlt },
              { value: "50+", label: "Years Combined Experience", icon: HiAcademicCap },
              { value: "100%", label: "Dedicated to AMR", icon: HiShieldCheck }
            ].map((stat, index) => (
              <div 
                key={index}
                ref={el => statsRef.current[index] = el}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-main-100 to-main-200 
                              rounded-2xl mb-3 group-hover:from-[#FFCC00] group-hover:to-yellow-500 transition-all duration-300">
                  <stat.icon className="text-2xl text-main-700 group-hover:text-main-900" />
                </div>
                <div className="text-3xl font-black text-main-800">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search team members by name or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-14 rounded-2xl bg-white shadow-lg border border-gray-200 
                         focus:border-main-500 focus:outline-none focus:ring-2 focus:ring-main-500/20 
                         transition-all duration-300 text-gray-700"
              />
              <HiMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            </div>
          </div>

          {/* Department Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold 
                         transition-all duration-300 transform hover:scale-105
                  ${selectedDepartment === dept.id 
                    ? 'bg-gradient-to-r from-main-500 to-main-700 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-main-100 hover:text-main-700 shadow-md'
                  }`}
              >
                <dept.icon className="text-lg" />
                <span>{dept.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <div
                key={member.id}
                ref={el => membersRef.current[index] = el}
                className="transform hover:-translate-y-2 transition-all duration-300"
              >
                <MemberCard {...member} />
              </div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No team members found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-main-900 via-main-800 to-main-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6">
            <HiSparkles className="text-[#FFCC00]" />
            <span className="text-sm font-bold text-[#FFCC00]">Join Our Team</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Be Part of the Solution
          </h2>
          <p className="text-gray-200 mb-8">
            We&apos;re always looking for passionate individuals to join our mission against AMR
          </p>
          
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#FFCC00] to-yellow-500 
                           hover:from-yellow-500 hover:to-[#FFCC00] text-main-900 font-bold py-4 px-8 
                           rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 
                           transition-all duration-300">
            <span>View Open Positions</span>
            <HiSparkles className="text-xl group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </section>
    </>
  );
}
