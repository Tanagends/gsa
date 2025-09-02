'use client';
import { PrismicNextImage } from '@prismicio/next';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Gallery = ({ images }) => {
  const galleryRef = useRef(null);
  const imagesRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for gallery items
      gsap.fromTo(imagesRef.current,
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
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            once: true
          }
        }
      );
    }, galleryRef);

    return () => ctx.revert();
  }, [images]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    gsap.to(imagesRef.current[index], {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    gsap.to(imagesRef.current[index], {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const openFullScreen = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        closeFullScreen();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage]);

  return (
    <>
      <section className="py-8 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Gallery Grid */}
          <div 
            ref={galleryRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {images.map((image, index) => (
              <div
                key={index}
                ref={el => imagesRef.current[index] = el}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 
                         rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                style={{ aspectRatio: '1/1' }}
                onClick={() => openFullScreen(image.data.image, index)}
              >
                {/* Image Container */}
                <div className="absolute inset-0">
                  <PrismicNextImage
                    field={image.data.image}
                    className="w-full h-full object-cover transition-transform duration-700 
                             group-hover:scale-110 group-hover:rotate-2"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-main-900/80 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 
                              transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 pointer-events-none">
                  
                  {/* Title/Description */}
                  <div className="mb-3">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {image.data.title || 'GSA Activity'}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-2">
                      {image.data.description || 'Capturing moments from our AMR advocacy'}
                    </p>
                  </div>

                  {/* View Button */}
                  <button 
                    className="pointer-events-auto group inline-flex items-center gap-2 bg-gradient-to-r from-[#FFCC00] to-yellow-500 
                             hover:from-yellow-500 hover:to-[#FFCC00] text-main-900 font-bold py-2 px-4 
                             rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 
                             transition-all duration-300 w-fit"
                    onClick={(e) => {
                      e.stopPropagation();
                      openFullScreen(image.data.image, index);
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span>Fullscreen</span>
                  </button>
                </div>

                {/* Corner Badge */}
                {hoveredIndex === index && (
                  <div className="absolute top-3 left-3 bg-[#FFCC00] text-main-900 px-3 py-1 
                                rounded-full text-xs font-bold animate-fadeIn pointer-events-none">
                    #{index + 1}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Modal - Rendered at root level */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-lg flex items-center justify-center animate-fadeIn"
          onClick={closeFullScreen}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeFullScreen();
            }}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-14 md:h-14 
                     bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center 
                     text-white hover:bg-white/30 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-90 transition-transform duration-300" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} 
                    d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Container */}
          <div 
            className="relative p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <PrismicNextImage
              field={selectedImage}
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              priority
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md 
                          px-6 py-2 rounded-full text-white text-sm font-semibold">
              Image #{selectedIndex + 1} of {images.length}
            </div>
          </div>

          {/* Hint text */}
          <div className="absolute bottom-4 right-4 text-white/50 text-xs md:text-sm">
            Press ESC or click anywhere to close
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: scale(0.9);
          }
          to { 
            opacity: 1; 
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Gallery;
