"use client";
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  HiCalendar, HiUser, HiClock, HiBookOpen,
  HiShare, HiBookmark, HiArrowLeft, HiArrowRight,
  HiSparkles, HiHashtag, HiEye
} from 'react-icons/hi2';

gsap.registerPlugin(ScrollTrigger);

// Custom components for PrismicRichText - defined outside the component
const components = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold text-main-800 mb-6 mt-8">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-bold text-main-700 mb-4 mt-6">{children}</h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-2xl font-bold text-main-600 mb-3 mt-4">{children}</h3>
  ),
  heading4: ({ children }) => (
    <h4 className="text-xl font-bold text-main-600 mb-3 mt-4">{children}</h4>
  ),
  heading5: ({ children }) => (
    <h5 className="text-lg font-bold text-main-600 mb-2 mt-3">{children}</h5>
  ),
  heading6: ({ children }) => (
    <h6 className="text-base font-bold text-main-600 mb-2 mt-3">{children}</h6>
  ),
  paragraph: ({ children }) => (
    <p className="text-gray-700 leading-relaxed mb-4 text-lg">{children}</p>
  ),
  list: ({ children }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 ml-4">{children}</ul>
  ),
  oList: ({ children }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 ml-4">{children}</ol>
  ),
  listItem: ({ children }) => (
    <li className="ml-4 leading-relaxed">{children}</li>
  ),
  oListItem: ({ children }) => (
    <li className="ml-4 leading-relaxed">{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="bg-gray-100 rounded-lg p-4 mb-4 overflow-x-auto">
      <code className="text-sm font-mono">{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-main-700">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic">{children}</em>
  ),
  hyperlink: ({ children, data }) => (
    <a 
      href={data.url || data.link_type === 'Web' ? data.url : '#'} 
      target={data.target || '_blank'}
      rel="noopener noreferrer"
      className="text-[#FFCC00] hover:text-yellow-600 underline transition-colors font-semibold"
    >
      {children}
    </a>
  ),
  image: ({ node }) => (
    <div className="my-8 rounded-2xl overflow-hidden shadow-xl">
      <PrismicNextImage 
        field={node} 
        className="w-full h-auto"
        priority={false}
      />
      {node.alt && (
        <p className="text-center text-sm text-gray-500 mt-3 italic px-4">{node.alt}</p>
      )}
    </div>
  ),
  embed: ({ node }) => {
    // Handle different types of embeds
    if (node.oembed && node.oembed.html) {
      return (
        <div 
          className="my-8 relative rounded-2xl overflow-hidden shadow-xl embed-container"
          dangerouslySetInnerHTML={{ __html: node.oembed.html }}
        />
      );
    }
    
    // Fallback for video embeds
    if (node.oembed && node.oembed.embed_url) {
      return (
        <div className="my-8 relative pb-[56.25%] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src={node.oembed.embed_url}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
            title="Embedded content"
          />
        </div>
      );
    }
    
    return null;
  },
};

export default function ArticlePageClient({ page, dateMain, relatedArticles }) {
  const [readingTime, setReadingTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);
  const relatedRef = useRef([]);

  useEffect(() => {
    // Calculate reading time
    const text = page.data.story.map(block => block.text || '').join(' ');
    const wordsPerMinute = 200;
    const words = text.split(' ').length;
    setReadingTime(Math.ceil(words / wordsPerMinute));

    // Progress bar
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const currentProgress = (scrollPosition / totalHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Content animation
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          delay: 0.3,
          ease: "power3.out" 
        }
      );

      // Sidebar animation
      if (sidebarRef.current) {
        gsap.fromTo(sidebarRef.current,
          { opacity: 0, x: 50 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.8, 
            delay: 0.5,
            ease: "power3.out" 
          }
        );
      }

      // Related articles animation
      if (relatedRef.current.length > 0) {
        gsap.fromTo(relatedRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: relatedRef.current[0],
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, [page]);

  const handleShare = async (platform) => {
    const url = window.location.href;
    const title = page.data.title;
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      // You can add a toast notification here
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#FFCC00] to-yellow-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Back Button */}
      <div className="fixed top-24 left-4 z-40">
        <Link 
          href="/media/articles"
          className="group inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 
                   rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <HiArrowLeft className="text-main-600 group-hover:-translate-x-1 transition-transform" />
          <span className="text-main-700 font-semibold hidden sm:inline">Back to Articles</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] bg-gradient-to-br from-main-900 via-main-800 to-main-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23FFCC00%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        {/* Floating elements */}
        <div className="float-element absolute top-20 right-20 w-32 h-32 bg-[#FFCC00]/10 rounded-full blur-3xl"></div>
        <div className="float-element absolute bottom-20 left-20 w-40 h-40 bg-main-400/10 rounded-full blur-3xl"></div>

        {/* Hero Image */}
        <div className="absolute inset-0 opacity-30">
          <PrismicNextImage 
            field={page.data.story_image} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 py-24 text-center">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6 backdrop-blur-sm">
            <HiHashtag className="text-[#FFCC00]" />
            <span className="text-sm font-bold text-[#FFCC00]">
              {page.data.category || 'Article'}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-main-200 to-white bg-clip-text text-transparent">
              {page.data.title}
            </span>
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <HiUser className="text-[#FFCC00]" />
              <span className="font-semibold">{page.data.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <HiCalendar className="text-[#FFCC00]" />
              <time>{new Date(dateMain).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</time>
            </div>
            <div className="flex items-center gap-2">
              <HiClock className="text-[#FFCC00]" />
              <span>{readingTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <HiEye className="text-[#FFCC00]" />
              <span>1.2k views</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          
          {/* Article Content */}
          <article ref={contentRef} className="lg:col-span-2">
            {/* Featured Image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
              <PrismicNextImage 
                field={page.data.story_image} 
                className="w-full h-auto"
              />
            </div>

            {/* Article Body with Custom Components */}
            <div className="article-content">
              <PrismicRichText 
                field={page.data.story} 
                components={components}
              />
            </div>

            {/* Tags */}
            {page.tags && page.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <span className="text-gray-600 font-semibold">Tags:</span>
                  {page.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-main-100 text-main-700 rounded-full text-sm font-medium 
                               hover:bg-main-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
              <h3 className="text-lg font-bold text-main-800 mb-4">Share this article</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleShare('twitter')}
                  className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg 
                           hover:bg-sky-600 transition-colors"
                >
                  <i className="bi bi-twitter-x"></i>
                  <span>Twitter</span>
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg 
                           hover:bg-blue-700 transition-colors"
                >
                  <i className="bi bi-linkedin"></i>
                  <span>LinkedIn</span>
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-lg 
                           hover:bg-blue-900 transition-colors"
                >
                  <i className="bi bi-facebook"></i>
                  <span>Facebook</span>
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg 
                           hover:bg-gray-700 transition-colors"
                >
                  <HiShare />
                  <span>Copy Link</span>
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside ref={sidebarRef} className="lg:col-span-1 space-y-8">
            {/* Author Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-main-800 mb-4">About the Author</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-main-400 to-main-600 rounded-full 
                              flex items-center justify-center text-white text-xl font-bold">
                  {page.data.author?.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-main-800">{page.data.author}</p>
                  <p className="text-sm text-gray-600">GSA Team Member</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Contributing writer and advocate for antimicrobial resistance awareness and stewardship.
              </p>
              <Link 
                href="/ourteam"
                className="inline-flex items-center gap-2 mt-4 text-[#FFCC00] hover:text-yellow-600 
                         font-semibold transition-colors"
              >
                <span>View Profile</span>
                <HiArrowRight />
              </Link>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-[#FFCC00]/10 to-yellow-500/10 rounded-2xl p-6 
                          border-2 border-[#FFCC00]/30">
              <div className="flex items-center gap-2 mb-3">
                <HiSparkles className="text-[#FFCC00] text-xl" />
                <h3 className="text-lg font-bold text-main-800">Stay Updated</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Get the latest AMR insights delivered to your inbox.
              </p>
              <Link 
                href="/contactus"
                className="block w-full text-center bg-gradient-to-r from-[#FFCC00] to-yellow-500 
                         text-main-900 font-bold py-2 px-4 rounded-lg hover:from-yellow-500 
                         hover:to-[#FFCC00] transition-all duration-300"
              >
                Subscribe Now
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-main-100 rounded-full mb-4">
                <HiBookOpen className="text-main-600" />
                <span className="text-sm font-bold text-main-700">Keep Reading</span>
              </div>
              <h2 className="text-3xl font-bold text-main-800">Related Articles</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.slice(0, 3).map((article, index) => (
                <Link
                  key={article.uid}
                  href={`/blog/${article.uid}`}
                  ref={el => relatedRef.current[index] = el}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                           transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <PrismicNextImage 
                      field={article.data.story_image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-main-800 mb-2 line-clamp-2 
                                 group-hover:text-main-600 transition-colors">
                      {article.data.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{article.data.author}</span>
                      <span>•</span>
                      <time>{new Date(article.data.publishing_time).toLocaleDateString()}</time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Add custom styles for embeds */}
      <style jsx global>{`
        .embed-container iframe {
          max-width: 100%;
          margin: 0 auto;
        }
        
        .embed-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
        }
        
        .embed-container iframe,
        .embed-container object,
        .embed-container embed {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .article-content blockquote {
          border-left: 4px solid #FFCC00;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #4a5568;
        }
        
        .article-content hr {
          border: none;
          height: 1px;
          background: linear-gradient(to right, transparent, #e2e8f0, transparent);
          margin: 2rem 0;
        }
      `}</style>
    </main>
  );
}
