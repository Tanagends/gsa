import { createClient } from '@/prismicio';
import Link from 'next/link';
import Gallery from './Gallery';
import { revalidateTag } from "next/cache";

export const metadata = {
  title: 'Generational Stewards for Antimicrobials | Media and Activity Gallery',
  keywords: [
    "antimicrobial resistance",
    "AMR advocacy",
    "global health activities",
    "media gallery",
    "non-profit Zimbabwe",
    "AMR education",
    "health initiatives Zimbabwe",
    "Generational Stewards for Antimicrobials media",
    "community outreach",
    "health innovation",
    "Zimbabwe health programs",
    "AMR awareness events",
  ],
  url: "https://www.gsaglobal.co.zw/media",
  canonical: "https://www.gsaglobal.co.zw/media",
};

async function Media() {
  const client = createClient();
  const images = await client.getAllByType('image_gallery');
  revalidateTag("prismic");

  return (
    <>
      {/* Spacer for navbar */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-main-900 via-main-800 to-main-900">
        {/* Background Design */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23FFCC00%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#FFCC00]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-main-400/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-sm font-bold text-[#FFCC00]">📸 Capturing Our Impact</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-main-200 to-white bg-clip-text text-transparent">
              Media
            </span>
            <span className="bg-gradient-to-r from-[#FFCC00] via-yellow-400 to-[#FFCC00] bg-clip-text text-transparent">
              {" "}Hub
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our journey through images, events, news, and articles documenting our fight against antimicrobial resistance
          </p>
        </div>
      </section>

      {/* Media Type Navigation - Not Sticky Anymore */}
      <section className="py-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 p-3 bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl shadow-lg">
            <Link 
              href="/media"
              className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-main-500 to-main-700 
                       text-white font-bold rounded-xl shadow-xl shadow-main-500/30
                       transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-xl">🖼️</span>
              <span>Gallery</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-main-500 to-main-700 opacity-20 animate-pulse"></div>
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

      {/* Gallery Section Header */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-main-800 mb-4">
            Photo Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visual stories from our programs, events, and community engagements across Zimbabwe
          </p>
        </div>
      </section>

      {/* Gallery Component */}
      <Gallery images={images} />
    </>
  );
}

export default Media;
