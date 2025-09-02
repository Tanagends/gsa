'use client';
import { useState, useEffect } from 'react';
import { PrismicNextImage } from '@prismicio/next';
import { createPortal } from 'react-dom';

const ImageFull = ({ image, index }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const openFullScreen = (e) => {
    e.stopPropagation();
    setIsFullScreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
    document.body.style.overflow = 'auto';
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isFullScreen) {
        closeFullScreen();
      }
    };

    if (isFullScreen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isFullScreen]);

  // Modal content
  const modalContent = isFullScreen && (
    <div 
      className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={closeFullScreen}
    >
      {/* Container for centering */}
      <div className="w-full h-full flex items-center justify-center p-4">
        
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            closeFullScreen();
          }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-14 md:h-14 
                   bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center 
                   text-white hover:bg-white/20 transition-all duration-300 group"
          aria-label="Close fullscreen"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-90 transition-transform duration-300" 
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation Buttons (optional) */}
        <button className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 
                         bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center 
                         text-white hover:bg-white/20 transition-all duration-300 group">
          <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" 
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 
                         bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center 
                         text-white hover:bg-white/20 transition-all duration-300 group">
          <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" 
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Container */}
        <div 
          className="relative max-w-[90vw] max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <PrismicNextImage
            field={image}
            className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            priority
          />
          
          {/* Image Info Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent 
                        p-4 rounded-b-lg">
            <div className="flex items-center justify-between text-white">
              <span className="text-sm md:text-base font-semibold">
                Image #{index + 1}
              </span>
              <span className="text-xs md:text-sm opacity-75">
                Click outside or press ESC to close
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#FFCC00]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-main-400/10 rounded-full blur-3xl"></div>
    </div>
  );

  return (
    <>
      <button 
        onClick={openFullScreen} 
        className="relative group inline-flex items-center gap-2 bg-gradient-to-r from-[#FFCC00] to-yellow-500 
                 hover:from-yellow-500 hover:to-[#FFCC00] text-main-900 font-bold py-2 px-4 
                 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 
                 transition-all duration-300"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span>View</span>
      </button>

      {/* Portal to render modal at document root */}
      {mounted && isFullScreen && createPortal(modalContent, document.body)}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
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

export default ImageFull;
