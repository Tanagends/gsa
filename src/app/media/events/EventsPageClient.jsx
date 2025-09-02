"use client";
import Post from '@/components/latestPosts/Post';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  HiCalendarDays, HiMapPin, HiUsers,
  HiSparkles, HiClock, HiTicket,
  HiGlobeAlt, HiVideoCamera, HiFlag
} from 'react-icons/hi2';

gsap.registerPlugin(ScrollTrigger);

export default function EventsPageClient({ events }) {
  const heroRef = useRef(null);
  const eventsRef = useRef([]);
  const upcomingRef = useRef(null);
  const [filter, setFilter] = useState('all');
  const [visibleEvents, setVisibleEvents] = useState(6);
  const [viewMode, setViewMode] = useState('grid'); // grid or timeline

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Events cards stagger animation
      if (eventsRef.current.length > 0) {
        gsap.fromTo(eventsRef.current,
          { 
            opacity: 0, 
            y: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: eventsRef.current[0],
              start: "top 80%",
              once: true
            }
          }
        );
      }

      // Floating elements animation
      gsap.to('.float-element', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5
      });

      // Calendar icon rotation
      gsap.to('.rotate-calendar', {
        rotation: 5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Pulse animation for live events
      gsap.to('.pulse-event', {
        scale: 1.1,
        opacity: 0.7,
        duration: 1.5,
        repeat: -1,
        ease: "power2.out"
      });
    });

    return () => ctx.revert();
  }, [events]);

  const filters = ['all', 'upcoming', 'past', 'conferences', 'workshops', 'webinars'];

  const loadMore = () => {
    setVisibleEvents(prev => prev + 6);
  };

  // Categorize events (mock data - adjust based on your actual data structure)
  const upcomingEvents = events.slice(0, 2); // Mock: first 2 as upcoming
  const pastEvents = events.slice(2); // Mock: rest as past

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
        <HiCalendarDays className="rotate-calendar absolute top-10 left-10 text-6xl text-white/5" />
        <HiTicket className="absolute bottom-10 right-10 text-6xl text-[#FFCC00]/5 -rotate-12" />

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Event Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6 backdrop-blur-sm">
            <HiFlag className="text-[#FFCC00]" />
            <span className="text-sm font-bold text-[#FFCC00]">Events &amp; Gatherings</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-main-200 to-white bg-clip-text text-transparent">
              Events &amp;
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FFCC00] via-yellow-400 to-[#FFCC00] bg-clip-text text-transparent">
              Highlights
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join us at conferences, workshops, and community gatherings as we unite stakeholders 
            in the fight against antimicrobial resistance
          </p>
        </div>
      </section>

      {/* Upcoming Events Banner */}
      {upcomingEvents.length > 0 && (
        <section className="bg-gradient-to-r from-[#FFCC00] to-yellow-500 py-4">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <HiCalendarDays className="text-3xl text-main-900" />
                  <div className="pulse-event absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-main-900 font-bold text-lg">Next Event</p>
                  <p className="text-main-800 text-sm">
                    {upcomingEvents[0]?.data.title || 'Stay tuned for upcoming events'}
                  </p>
                </div>
              </div>
              <button className="bg-main-900 text-white px-6 py-2 rounded-full font-bold hover:bg-main-800 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Media Type Navigation */}
      <section className="py-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 p-3 bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl shadow-lg">
            <Link 
              href="/media"
              className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-300 
                       text-gray-700 font-bold rounded-xl hover:from-main-100 hover:to-main-200 hover:text-main-700
                       transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              <span className="text-xl">🖼️</span>
              <span>Gallery</span>
            </Link>
            
            <Link 
              href="/media/events"
              className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-main-500 to-main-700 
                       text-white font-bold rounded-xl shadow-xl shadow-main-500/30
                       transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-xl">📅</span>
              <span>Events</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-main-500 to-main-700 opacity-20 animate-pulse"></div>
            </Link>
            
            <Link 
              href="/media/articles"
              className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-300 
                       text-gray-700 font-bold rounded-xl hover:from-main-100 hover:to-main-200 hover:text-main-700
                       transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              <span className="text-xl">📝</span>
              <span>Articles</span>
            </Link>
            
            <Link 
              href="/media/news"
              className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-300 
                       text-gray-700 font-bold rounded-xl hover:from-main-100 hover:to-main-200 hover:text-main-700
                       transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              <span className="text-xl">📰</span>
              <span>News</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section 
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: HiCalendarDays, value: events.length, label: "Total Events" },
              { icon: HiUsers, value: "5000+", label: "Participants" },
              { icon: HiGlobeAlt, value: "15+", label: "Cities Reached" },
              { icon: HiVideoCamera, value: "20+", label: "Virtual Sessions" }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
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
      </section>*/}

      {/* Filter and View Toggle Section */}
      <section className="py-8 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* View Mode Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                viewMode === 'grid' 
                  ? 'bg-main-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                viewMode === 'timeline' 
                  ? 'bg-main-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Timeline
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105
                  ${filter === filterType 
                    ? 'bg-gradient-to-r from-main-500 to-main-700 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-main-100 hover:text-main-700 shadow-md'
                  }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </button>
            ))}
          </div>

          {/* Events Display */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.slice(0, visibleEvents).map((event, index) => (
                <div
                  key={`event-${index}`}
                  ref={el => eventsRef.current[index] = el}
                  className="relative group transform hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Event Type Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-main-600 to-main-700 
                                text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {event.data.event_type || 'Conference'}
                  </div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-[#FFCC00] text-main-900 px-3 py-1 
                                rounded-lg text-xs font-bold shadow-lg flex items-center gap-1">
                    <HiClock />
                    {new Date(event.data.publishing_time).toLocaleDateString()}
                  </div>

                  {/* Location Badge */}
                  {event.data.location && (
                    <div className="absolute top-14 right-4 z-10 bg-white/90 backdrop-blur-sm text-main-700 
                                  px-3 py-1 rounded-lg text-xs font-bold shadow-lg flex items-center gap-1">
                      <HiMapPin />
                      {event.data.location}
                    </div>
                  )}
                  
                  {/* Post Component */}
                  <Post
                    image={event.data.story_image}
                    title={event.data.title}
                    content={event.data.story}
                    author={event.data.author}
                    date={event.data.publishing_time}
                    link={event.url}
                  />
                </div>
              ))}
            </div>
          ) : (
            /* Timeline View */
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-main-400 to-main-700"></div>
              {events.slice(0, visibleEvents).map((event, index) => (
                <div
                  key={`timeline-${index}`}
                  ref={el => eventsRef.current[index] = el}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                      <div className="flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}">
                        <HiCalendarDays className="text-main-600" />
                        <span className="text-sm font-bold text-main-600">
                          {new Date(event.data.publishing_time).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-main-800 mb-2">{event.data.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-3">{event.data.story[0]?.text}</p>
                      <Link href={event.url} className="inline-block mt-3 text-[#FFCC00] font-bold hover:underline">
                        View Details →
                      </Link>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FFCC00] rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {visibleEvents < events.length && (
            <div className="text-center mt-12">
              <button 
                onClick={loadMore}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-main-500 to-main-700 
                         hover:from-main-600 hover:to-main-800 text-white font-bold py-4 px-8 
                         rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 
                         transition-all duration-300"
              >
                <span>Load More Events</span>
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Join Event CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-main-900 via-main-800 to-main-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6">
            <HiSparkles className="text-[#FFCC00]" />
            <span className="text-sm font-bold text-[#FFCC00]">Be Part of Change</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Next Event
          </h2>
          <p className="text-gray-200 mb-8">
            Connect with health professionals, researchers, and advocates working together against AMR
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#FFCC00] to-yellow-500 
                             hover:from-yellow-500 hover:to-[#FFCC00] text-main-900 font-bold py-4 px-8 
                             rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 
                             transition-all duration-300">
              <HiCalendarDays className="text-xl" />
              <span>View Calendar</span>
            </button>
            <button className="inline-flex items-center gap-3 bg-transparent border-2 border-white 
                             hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full 
                             transition-all duration-300">
              <HiTicket className="text-xl" />
              <span>Get Tickets</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
