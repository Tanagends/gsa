"use client";

import { PrismicNextImage } from '@prismicio/next';
import Link from 'next/link';

/*interface LandingGalleryProps {
  images: Array<{ data: { image: any } }>;
}*/

const LandingGallery = ({ images }) => {
  return (
    <article className="relative py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden" id="images-container">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(0,0,0,0.1)_0%,_transparent_70%)] pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-main-700 text-center mb-8 sm:mb-12 tracking-tight">
          Our Impact in Action
        </h2>
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {images.map((image, index) => (
              <div
                key={"div-" + index}
                className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-2xl shadow-lg group transform transition-all duration-500 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:-translate-y-2 touch-none"
              >
                <PrismicNextImage
                  field={image.data.image}
                  key={`landing-image-${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-main-700/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/gallery"
            className="inline-block bg-gradient-to-r from-main-700 to-main-600 text-white font-bold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full hover:from-main-600 hover:to-main-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-sm sm:text-base"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </article>
  );
};

export default LandingGallery;
