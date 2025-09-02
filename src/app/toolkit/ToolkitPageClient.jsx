"use client";
import { PrismicNextLink } from '@prismicio/next';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  HiDocumentText, HiArrowDownTray, HiBookOpen,
  HiSparkles, HiAcademicCap, HiFolder,
  HiMagnifyingGlass, HiDocumentArrowDown,
  HiShieldCheck, HiBeaker, HiChartBar,
  HiUser, HiCalendar, HiArrowRight
} from 'react-icons/hi2';

gsap.registerPlugin(ScrollTrigger);

export default function ToolkitPageClient({ toolkits }) {
  const heroRef = useRef(null);
  const documentsRef = useRef([]);
  const searchRef = useRef(null);
  const statsRef = useRef([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [visibleDocs, setVisibleDocs] = useState(6);
  const [downloadCounts, setDownloadCounts] = useState({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Search bar animation
      gsap.fromTo(searchRef.current,
        { opacity: 0, scale: 0.95 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          delay: 0.3,
          ease: "back.out(1.7)" 
        }
      );

      // Stats animation
      statsRef.current.forEach((stat, index) => {
        gsap.fromTo(stat,
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out"
          }
        );
      });

      // Documents stagger animation
      if (documentsRef.current.length > 0) {
        gsap.fromTo(documentsRef.current,
          { 
            opacity: 0, 
            y: 50,
            rotateX: -20
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: documentsRef.current[0],
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

      // PDF icon pulse
      gsap.to('.pdf-pulse', {
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    });

    return () => ctx.revert();
  }, [toolkits]);

  // Filter toolkits based on search
  const filteredToolkits = toolkits.filter(doc => {
    const matchesSearch = doc.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.author?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleDownload = (docId) => {
    setDownloadCounts(prev => ({
      ...prev,
      [docId]: (prev[docId] || 0) + 1
    }));
  };

  const loadMore = () => {
    setVisibleDocs(prev => prev + 6);
  };

  return (
    <main>
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
        <div className="pdf-pulse absolute top-10 left-10 text-6xl text-white/5">
          <i className="bi bi-file-earmark-pdf"></i>
        </div>
        <HiBookOpen className="absolute bottom-10 right-10 text-6xl text-[#FFCC00]/5 rotate-12" />

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6 backdrop-blur-sm">
            <HiDocumentArrowDown className="text-[#FFCC00]" />
            <span className="text-sm font-bold text-[#FFCC00]">Educational Resources</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-main-200 to-white bg-clip-text text-transparent">
              AMR Educational
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FFCC00] via-yellow-400 to-[#FFCC00] bg-clip-text text-transparent">
              Toolkit
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-4xl mx-auto">
            This toolkit is designed for educators and professionals committed to advancing knowledge on antimicrobials. 
            It offers comprehensive resources in the form of downloadable PDF files, enabling you to effectively 
            share and utilize the materials as needed.
          </p>
        </div>
      </section>

      {/* Stats Section 
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: HiDocumentText, value: toolkits.length, label: "PDF Resources" },
              { icon: HiAcademicCap, value: "50+", label: "Educators Using" },
              { icon: HiArrowDownTray, value: "10K+", label: "Downloads" },
              { icon: HiBookOpen, value: "15+", label: "Expert Authors" }
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
      </section> */}

      {/* Search Section */}
      <section className="py-8 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div ref={searchRef} className="relative">
            <input
              type="text"
              placeholder="Search for toolkits, topics, or authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-2xl bg-white shadow-lg border border-gray-200 
                       focus:border-main-500 focus:outline-none focus:ring-2 focus:ring-main-500/20 
                       transition-all duration-300 text-gray-700"
            />
            <HiMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 
                         transition-colors text-xl"
              >
                ✕
              </button>
            )}
          </div>
          
          {/* Results count */}
          {searchTerm && (
            <div className="text-center mt-4">
              <p className="text-gray-600">
                Found <span className="font-bold text-main-700">{filteredToolkits.length}</span> resources
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Toolkits Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredToolkits.slice(0, visibleDocs).map((toolkit, index) => (
              <article
                key={toolkit.id}
                ref={el => documentsRef.current[index] = el}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg 
                         hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 
                         overflow-hidden border border-main-200"
              >
                {/* PDF Header */}
                <div className="relative h-32 bg-gradient-to-br from-main-500 to-main-700 p-6">
                  <div className="absolute top-4 right-4 text-red-600 text-5xl opacity-20">
                    <i className="bi bi-file-earmark-pdf"></i>
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center 
                                  justify-center text-white">
                      <HiDocumentText className="text-3xl" />
                    </div>
                    <span className="bg-[#FFCC00] text-main-900 px-3 py-1 rounded-full text-xs font-bold 
                                   shadow-lg animate-pulse">
                      PDF
                    </span>
                  </div>
                </div>

                {/* Document Body */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-main-800 mb-3 line-clamp-2 group-hover:text-main-600 
                                transition-colors">
                    {toolkit.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {toolkit.description}
                  </p>

                  {/* Author and Date */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <HiUser className="text-main-500" />
                      <span>{toolkit.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <HiCalendar className="text-main-500" />
                      <time dateTime={toolkit.publishingTime}>
                        {new Date(toolkit.publishingTime).toLocaleDateString()}
                      </time>
                    </div>
                  </div>

                  {/* Download Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <HiArrowDownTray />
                      <span>{downloadCounts[toolkit.id] || 0} downloads</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xs ${i < 4 ? 'text-[#FFCC00]' : 'text-gray-300'}`}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Download Button */}
                  <PrismicNextLink 
                    field={toolkit.pdfLink}
                    className="group/btn flex items-center justify-center gap-3 bg-gradient-to-r from-[#FFCC00] to-yellow-500 
                             hover:from-yellow-500 hover:to-[#FFCC00] text-main-900 font-bold py-4 px-6 
                             rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg
                             hover:shadow-xl hover:shadow-[#FFCC00]/30"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleDownload(toolkit.id)}
                  >
                    <HiArrowDownTray className="w-5 h-5 group-hover/btn:animate-bounce" />
                    <span>Download PDF</span>
                  </PrismicNextLink>
                </div>

                {/* New Badge for recent items */}
                {index < 3 && (
                  <div className="absolute top-6 left-6 bg-red-500 text-white px-3 py-1 rounded-full 
                                text-xs font-bold shadow-lg flex items-center gap-1">
                    <HiSparkles />
                    NEW
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {visibleDocs < filteredToolkits.length && (
            <div className="text-center mt-12">
              <button 
                onClick={loadMore}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-main-500 to-main-700 
                         hover:from-main-600 hover:to-main-800 text-white font-bold py-4 px-8 
                         rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 
                         transition-all duration-300"
              >
                <span>Load More Resources</span>
                <HiArrowDownTray className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-main-900 via-main-800 to-main-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6">
            <HiSparkles className="text-[#FFCC00]" />
            <span className="text-sm font-bold text-[#FFCC00]">Share Your Knowledge</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contribute to Our Toolkit
          </h2>
          <p className="text-gray-200 mb-8">
            Are you an AMR expert? Share your educational materials and help build a comprehensive 
            resource library for educators worldwide
          </p>
          
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#FFCC00] to-yellow-500 
                           hover:from-yellow-500 hover:to-[#FFCC00] text-main-900 font-bold py-4 px-8 
                           rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 
                           transition-all duration-300">
            <HiDocumentArrowDown className="text-xl" />
            <span>Submit Your Resource</span>
            <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
}
