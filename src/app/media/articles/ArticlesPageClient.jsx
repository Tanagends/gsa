"use client";
import Post from '@/components/latestPosts/Post';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  HiDocumentText, HiCalendar, HiUser, HiArrowRight,
  HiSparkles, HiBookOpen, HiPencilSquare, HiClock
} from 'react-icons/hi2';

gsap.registerPlugin(ScrollTrigger);

export default function ArticlesPageClient({ articles }) {
  const heroRef = useRef(null);
  const articlesRef = useRef([]);
  const [filter, setFilter] = useState('all');
  const [visibleArticles, setVisibleArticles] = useState(6);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Articles stagger animation
      if (articlesRef.current.length > 0) {
        gsap.fromTo(articlesRef.current,
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
              trigger: articlesRef.current[0],
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
    });

    return () => ctx.revert();
  }, [articles]);

  const categories = ['all', 'research', 'education', 'policy', 'community'];

  const loadMore = () => {
    setVisibleArticles(prev => prev + 6);
  };

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
        <HiBookOpen className="absolute top-10 left-10 text-6xl text-white/5 rotate-12" />
        <HiPencilSquare className="absolute bottom-10 right-10 text-6xl text-[#FFCC00]/5 -rotate-12" />

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6 backdrop-blur-sm">
            <HiDocumentText className="text-[#FFCC00]" />
            <span className="text-sm font-bold text-[#FFCC00]">Insights & Research</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-main-200 to-white bg-clip-text text-transparent">
              Articles &
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FFCC00] via-yellow-400 to-[#FFCC00] bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Expert perspectives and thought leadership from our team on antimicrobial resistance, 
            public health, and innovative solutions for a healthier future
          </p>
        </div>
      </section>

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
              className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-main-500 to-main-700 
                       text-white font-bold rounded-xl shadow-xl shadow-main-500/30
                       transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-xl">📝</span>
              <span>Articles</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-main-500 to-main-700 opacity-20 animate-pulse"></div>
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

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: HiDocumentText, value: articles.length, label: "Articles Published" },
              { icon: HiUser, value: "15+", label: "Contributing Authors" },
              { icon: HiBookOpen, value: "50K+", label: "Readers Reached" },
              { icon: HiSparkles, value: "100%", label: "Original Content" }
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
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105
                  ${filter === category 
                    ? 'bg-gradient-to-r from-main-500 to-main-700 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-main-100 hover:text-main-700 shadow-md'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, visibleArticles).map((article, index) => (
              <article
                key={`article-${index}`}
                ref={el => articlesRef.current[index] = el}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
                         transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Enhanced Post Card */}
                <div className="relative">
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-[#FFCC00] text-main-900 px-3 py-1 
                                rounded-full text-xs font-bold">
                    {article.data.category || 'Research'}
                  </div>
                  
                  {/* Post Component with custom wrapper */}
                  <div className="relative overflow-hidden">
                    <Post
                      image={article.data.story_image}
                      title={article.data.title}
                      content={article.data.story}
                      author={article.data.author}
                      date={article.data.publishing_time}
                      link={article.url}
                    />
                    
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-main-900/80 via-transparent to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                  
                  {/* Read More Link */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link href={article.url} 
                          className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-main-700 
                                   font-bold py-2 px-4 rounded-full hover:bg-white transition-colors">
                      <span>Read More</span>
                      <HiArrowRight className="text-lg" />
                    </Link>
                  </div>
                </div>

                {/* Article Meta */}
                <div className="p-6 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <HiUser className="text-main-500" />
                      <span>{article.data.author || 'GSA Team'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiClock className="text-main-500" />
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {visibleArticles < articles.length && (
            <div className="text-center mt-12">
              <button 
                onClick={loadMore}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-main-500 to-main-700 
                         hover:from-main-600 hover:to-main-800 text-white font-bold py-4 px-8 
                         rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 
                         transition-all duration-300"
              >
                <span>Load More Articles</span>
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

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-main-900 via-main-800 to-main-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6">
            <HiSparkles className="text-[#FFCC00]" />
            <span className="text-sm font-bold text-[#FFCC00]">Stay Informed</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Never Miss an Article
          </h2>
          <p className="text-gray-200 mb-8">
            Subscribe to get the latest insights and research delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 
                       text-white placeholder-gray-400 focus:outline-none focus:border-[#FFCC00] transition-colors"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-[#FFCC00] to-yellow-500 hover:from-yellow-500 
                             hover:to-[#FFCC00] text-main-900 font-bold rounded-full transition-all duration-300 
                             transform hover:scale-105 shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
