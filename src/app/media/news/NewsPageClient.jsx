"use client";
import Post from '@/components/latestPosts/Post';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  HiNewspaper, HiBell, HiClock,
  HiSparkles, HiMegaphone, HiArrowTrendingUp,
  HiGlobeAlt, HiBolt
} from 'react-icons/hi2';

gsap.registerPlugin(ScrollTrigger);

export default function NewsPageClient({ news }) {
  const heroRef = useRef(null);
  const newsRef = useRef([]);
  const tickerRef = useRef(null);
  const [filter, setFilter] = useState('latest');
  const [visibleNews, setVisibleNews] = useState(6);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // News cards stagger animation
      if (newsRef.current.length > 0) {
        gsap.fromTo(newsRef.current,
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
              trigger: newsRef.current[0],
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

      // News ticker animation
      if (tickerRef.current) {
        gsap.to(tickerRef.current, {
          x: "-100%",
          duration: 30,
          repeat: -1,
          ease: "none"
        });
      }

      // Pulse animation for live indicator
      gsap.to('.pulse-live', {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power2.out"
      });
    });

    return () => ctx.revert();
  }, [news]);

  const filters = ['latest', 'breaking', 'research', 'policy', 'global'];

  const loadMore = () => {
    setVisibleNews(prev => prev + 6);
  };

  // Get latest 3 news for ticker
  const tickerNews = news.slice(0, 3);

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
        <HiNewspaper className="absolute top-10 left-10 text-6xl text-white/5 rotate-12" />
        <HiMegaphone className="absolute bottom-10 right-10 text-6xl text-[#FFCC00]/5 -rotate-12" />

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Live Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full mb-6 backdrop-blur-sm">
            <div className="relative">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="pulse-live absolute inset-0 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <span className="text-sm font-bold text-red-400">LATEST UPDATES</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-main-200 to-white bg-clip-text text-transparent">
              Breaking
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FFCC00] via-yellow-400 to-[#FFCC00] bg-clip-text text-transparent">
              News
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay informed with the latest developments, breakthroughs, and updates in the fight against 
            antimicrobial resistance from around the globe
          </p>
        </div>
      </section>

      {/* News Ticker */}
      {tickerNews.length > 0 && (
        <section className="bg-gradient-to-r from-[#FFCC00] to-yellow-500 py-3 overflow-hidden">
          <div className="flex items-center">
            <div className="flex-shrink-0 px-4 bg-main-900 text-white py-2 rounded-r-full mr-4 z-10 shadow-lg">
              <span className="font-bold flex items-center gap-2">
                <HiBolt className="text-[#FFCC00]" />
                TRENDING
              </span>
            </div>
            <div className="flex animate-scroll" ref={tickerRef}>
              {[...tickerNews, ...tickerNews].map((item, index) => (
                <div key={index} className="flex items-center mx-8 whitespace-nowrap">
                  <span className="text-main-900 font-semibold">
                    {item.data.title}
                  </span>
                  <span className="mx-4 text-main-700">•</span>
                </div>
              ))}
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
              className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-300 
                       text-gray-700 font-bold rounded-xl hover:from-main-100 hover:to-main-200 hover:text-main-700
                       transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              <span className="text-xl">📅</span>
              <span>Events</span>
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
              className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-main-500 to-main-700 
                       text-white font-bold rounded-xl shadow-xl shadow-main-500/30
                       transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-xl">📰</span>
              <span>News</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-main-500 to-main-700 opacity-20 animate-pulse"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section 
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: HiNewspaper, value: news.length, label: "News Stories" },
              { icon: HiGlobeAlt, value: "20+", label: "Countries Covered" },
              { icon: HiArrowTrendingUp, value: "100K+", label: "Readers Monthly" },
              { icon: HiBell, value: "24/7", label: "News Updates" }
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

      {/* Filter Section */}
      <section className="py-8 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
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

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.slice(0, visibleNews).map((item, index) => (
              <div
                key={`news-${index}`}
                ref={el => newsRef.current[index] = el}
                className="relative group transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Breaking Badge for first 3 items */}
                {index < 3 && (
                  <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-3 py-1 
                                rounded-full text-xs font-bold shadow-lg animate-pulse">
                    BREAKING
                  </div>
                )}
                
                {/* Time Badge */}
                <div className="absolute top-4 right-4 z-10 bg-main-900/80 text-white px-3 py-1 
                              rounded-full text-xs font-bold backdrop-blur-sm flex items-center gap-1">
                  <HiClock className="text-[#FFCC00]" />
                  {new Date(item.data.publishing_time).toLocaleDateString()}
                </div>
                
                {/* Post Component */}
                <Post
                  image={item.data.story_image}
                  title={item.data.title}
                  content={item.data.story}
                  author={item.data.author}
                  date={item.data.publishing_time}
                  link={item.url}
                />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleNews < news.length && (
            <div className="text-center mt-12">
              <button 
                onClick={loadMore}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-main-500 to-main-700 
                         hover:from-main-600 hover:to-main-800 text-white font-bold py-4 px-8 
                         rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 
                         transition-all duration-300"
              >
                <span>Load More News</span>
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

      {/* Subscribe Alert Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-main-900 via-main-800 to-main-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6">
            <HiBell className="text-[#FFCC00] animate-pulse" />
            <span className="text-sm font-bold text-[#FFCC00]">News Alerts</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Never Miss Breaking News
          </h2>
          <p className="text-gray-200 mb-8">
            Get instant notifications when we publish important AMR news and updates
          </p>
          
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#FFCC00] to-yellow-500 
                           hover:from-yellow-500 hover:to-[#FFCC00] text-main-900 font-bold py-4 px-8 
                           rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 
                           transition-all duration-300">
            <HiBell className="text-xl group-hover:animate-pulse" />
            <span>Enable Notifications</span>
          </button>
        </div>
      </section>
    </>
  );
}
