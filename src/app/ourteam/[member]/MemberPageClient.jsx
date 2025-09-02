"use client";
import Link from 'next/link';
import Image from 'next/image';
import Post from '@/components/latestPosts/Post';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  HiEnvelope, HiPhone, HiArrowLeft,
  HiSparkles, HiDocumentText, HiCalendar,
  HiAcademicCap, HiBriefcase, HiGlobeAlt
} from 'react-icons/hi2';

gsap.registerPlugin(ScrollTrigger);

export default function MemberPageClient({ member, articles }) {
  const { id, imageExtention, name, surname, title, bio, socials } = member;
  const [imageError, setImageError] = useState(false);
  const heroRef = useRef(null);
  const profileRef = useRef(null);
  const bioRef = useRef(null);
  const socialsRef = useRef([]);
  const articlesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Profile image animation
      gsap.fromTo(profileRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, delay: 0.2, ease: "back.out(1.7)" }
      );

      // Bio animation
      gsap.fromTo(bioRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: "power3.out" }
      );

      // Social icons animation
      gsap.fromTo(socialsRef.current,
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.5,
          stagger: 0.1,
          delay: 0.6,
          ease: "back.out(1.7)"
        }
      );

      // Articles animation
      if (articlesRef.current.length > 0) {
        gsap.fromTo(articlesRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
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

      // Floating elements
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
  }, []);

  // Calculate member stats
  const memberStats = [
    { icon: HiDocumentText, value: articles.length, label: "Articles Published" },
    { icon: HiCalendar, value: "2024", label: "Year Joined" },
    { icon: HiAcademicCap, value: title.includes('Officer') ? "Leadership" : "Team", label: "Role" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="absolute top-24 left-4 z-20">
        <Link href="/ourteam" 
              className="group inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 
                       rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <HiArrowLeft className="text-main-600 group-hover:-translate-x-1 transition-transform" />
          <span className="text-main-700 font-semibold">Back to Team</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] bg-gradient-to-br from-main-900 via-main-800 to-main-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23FFCC00%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        {/* Floating elements */}
        <div className="float-element absolute top-20 right-20 w-32 h-32 bg-[#FFCC00]/10 rounded-full blur-3xl"></div>
        <div className="float-element absolute bottom-20 left-20 w-40 h-40 bg-main-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image */}
            <div ref={profileRef} className="relative">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                {!imageError ? (
                  <Image 
                    src={`/assets/images/ourteam/${id}.${imageExtention}`} 
                    alt={`${name} ${surname}`}
                    width={300}
                    height={300}
                    className="rounded-full w-full h-full object-cover border-8 border-white shadow-2xl"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFCC00] to-yellow-500 
                                flex items-center justify-center text-main-900 text-7xl font-bold 
                                border-8 border-white shadow-2xl">
                    {name?.[0]}{surname?.[0]}
                  </div>
                )}
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-4 border-[#FFCC00]/30 animate-pulse"></div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-4 backdrop-blur-sm">
                <HiBriefcase className="text-[#FFCC00]" />
                <span className="text-sm font-bold text-[#FFCC00]">{title}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-white to-main-200 bg-clip-text text-transparent">
                  {name} {surname}
                </span>
              </h1>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8">
                {memberStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center gap-2 text-[#FFCC00]">
                      <stat.icon className="text-xl" />
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-main-100 rounded-full mb-4">
              <HiSparkles className="text-main-600" />
              <span className="text-sm font-bold text-main-700">About {name}</span>
            </div>
          </div>

          <div ref={bioRef} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {bio.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-main-800 mb-2">Connect with {name}</h2>
            <p className="text-gray-600">Get in touch through social media or email</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {socials.email && (
              <Link 
                href={`mailto:${socials.email}`}
                ref={el => socialsRef.current[0] = el}
                className="group flex items-center gap-3 bg-gradient-to-r from-gray-100 to-gray-200 
                         hover:from-main-100 hover:to-main-200 px-6 py-3 rounded-full transition-all duration-300 
                         hover:scale-105 hover:shadow-lg"
              >
                <HiEnvelope className="text-xl text-main-600" />
                <span className="font-semibold text-gray-700 group-hover:text-main-700">Email</span>
              </Link>
            )}
            
            {socials.phone && (
              <>
                <Link 
                  href={`https://wa.me/${socials.phone.substring(1)}`}
                  ref={el => socialsRef.current[1] = el}
                  className="group flex items-center gap-3 bg-gradient-to-r from-green-100 to-green-200 
                           hover:from-green-200 hover:to-green-300 px-6 py-3 rounded-full transition-all duration-300 
                           hover:scale-105 hover:shadow-lg"
                >
                  <i className="bi bi-whatsapp text-xl text-green-600"></i>
                  <span className="font-semibold text-gray-700">WhatsApp</span>
                </Link>
                <Link 
                  href={`tel:${socials.phone}`}
                  ref={el => socialsRef.current[2] = el}
                  className="group flex items-center gap-3 bg-gradient-to-r from-gray-100 to-gray-200 
                           hover:from-main-100 hover:to-main-200 px-6 py-3 rounded-full transition-all duration-300 
                           hover:scale-105 hover:shadow-lg"
                >
                  <HiPhone className="text-xl text-main-600" />
                  <span className="font-semibold text-gray-700 group-hover:text-main-700">Call</span>
                </Link>
              </>
            )}
            
            {socials.linkedin && (
              <Link 
                href={socials.linkedin}
                ref={el => socialsRef.current[3] = el}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-gradient-to-r from-blue-100 to-blue-200 
                         hover:from-blue-200 hover:to-blue-300 px-6 py-3 rounded-full transition-all duration-300 
                         hover:scale-105 hover:shadow-lg"
              >
                <i className="bi bi-linkedin text-xl text-blue-600"></i>
                <span className="font-semibold text-gray-700">LinkedIn</span>
              </Link>
            )}
            
            {socials.twitter && (
              <Link 
                href={socials.twitter}
                ref={el => socialsRef.current[4] = el}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-gradient-to-r from-sky-100 to-sky-200 
                         hover:from-sky-200 hover:to-sky-300 px-6 py-3 rounded-full transition-all duration-300 
                         hover:scale-105 hover:shadow-lg"
              >
                <i className="bi bi-twitter-x text-xl text-sky-600"></i>
                <span className="font-semibold text-gray-700">Twitter</span>
              </Link>
            )}
            
            {socials.facebook && (
              <Link 
                href={socials.facebook}
                ref={el => socialsRef.current[5] = el}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-gradient-to-r from-blue-100 to-blue-200 
                         hover:from-blue-200 hover:to-blue-300 px-6 py-3 rounded-full transition-all duration-300 
                         hover:scale-105 hover:shadow-lg"
              >
                <i className="bi bi-facebook text-xl text-blue-600"></i>
                <span className="font-semibold text-gray-700">Facebook</span>
              </Link>
            )}
            
            {socials.instagram && (
              <Link 
                href={socials.instagram}
                ref={el => socialsRef.current[6] = el}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-gradient-to-r from-pink-100 to-purple-200 
                         hover:from-pink-200 hover:to-purple-300 px-6 py-3 rounded-full transition-all duration-300 
                         hover:scale-105 hover:shadow-lg"
              >
                <i className="bi bi-instagram text-xl text-pink-600"></i>
                <span className="font-semibold text-gray-700">Instagram</span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      {articles.length > 0 && (
        <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-4">
                <HiDocumentText className="text-[#FFCC00]" />
                <span className="text-sm font-bold text-[#FFCC00]">Published Work</span>
              </div>
              <h2 className="text-3xl font-bold text-main-800">Articles by {name}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div
                  key={`article-${index}`}
                  ref={el => articlesRef.current[index] = el}
                  className="transform hover:-translate-y-2 transition-all duration-300"
                >
                  <Post
                    image={article.data.story_image}
                    title={article.data.title}
                    content={article.data.story}
                    author={article.data.author}
                    date={article.data.publishing_time}
                    link={article.url}
                    type={article.type}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Articles Message */}
      {articles.length === 0 && (
        <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <HiDocumentText className="text-3xl text-gray-400" />
            </div>
            <p className="text-gray-600">No articles published yet by {name}</p>
          </div>
        </section>
      )}
    </div>
  );
}
