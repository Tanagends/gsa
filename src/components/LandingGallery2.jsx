"use client";

import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
//import { GiMicrobe } from "react-icons/gi"; // A thematic icon
import { GiMicrochip as GiMicrobe } from 'react-icons/gi'; // ✅ exists

// Type definition for Prismic image documents
// It's good practice to type your state
/*type ImageDoc = {
    id: string;
    data: {
        image: any; // Use a more specific Prismic field type if available
    };
};*/

const LandingGallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const client = createClient();
                const imageData = await client.getAllByType("image_gallery", { limit: 5 });
                setImages(imageData);
            } catch (error) {
                console.error("Failed to fetch Prismic images:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    // Styles for positioning and sizing the "petri dishes" on desktop
    const dishStyles = [
        { position: 'md:top-0 md:left-[15%]', size: 'w-48 h-48', delay: 'animation-delay-0' },
        { position: 'md:top-[30%] md:left-0', size: 'w-40 h-40', delay: 'animation-delay-[-2s]' },
        { position: 'md:top-[10%] md:left-[60%]', size: 'w-56 h-56', delay: 'animation-delay-[-1s]' },
        { position: 'md:top-[50%] md:left-[45%]', size: 'w-44 h-44', delay: 'animation-delay-[-3s]' },
        { position: 'md:top-[45%] md:left-[80%]', size: 'w-36 h-36', delay: 'animation-delay-[-4s]' },
    ];

    if (loading) {
        return (
            <article className="relative py-24 bg-gray-50 text-center">
                <p className="text-main-700">Culturing Images...</p>
            </article>
        );
    }

    return (
        <article className="relative bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-xl mx-auto text-center mb-16 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-main-700 tracking-tight">
                        A Microscopic Look at Our Work
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Visual evidence from the front lines of the fight against antimicrobial resistance.
                    </p>
                </div>

                {/* Container for the "petri dishes" */}
                {/* It's a flex column on mobile and a relative block with fixed height on desktop */}
                <div className="relative flex flex-col items-center gap-8 md:block md:h-[450px] max-w-5xl mx-auto mt-12">
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            // Use absolute positioning on desktop, default (flex-item) on mobile
                            className={`group md:absolute animate-float ${dishStyles[index].position} ${dishStyles[index].size} ${dishStyles[index].delay}`}
                        >
                            {/* Petri Dish container with hover effect */}
                            <div className="relative rounded-full w-full h-full transition-all duration-300 ease-in-out cursor-pointer
                                            shadow-lg hover:shadow-2xl
                                            border-4 border-transparent group-hover:border-main-400" // "Zone of Inhibition" ring
                            >
                                {/* Glowing Aura using a pseudo-element */}
                                <div className="absolute -inset-2 rounded-full bg-main2-400 opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-300"></div>
                                
                                <PrismicNextImage
                                    field={image.data.image}
                                    className="w-full h-full object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-110"
                                    alt={image.data.image.alt || 'AMR Research Image'}
                                />
                                <div className="absolute inset-0 bg-black/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 md:mt-4">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-3 bg-main-700 text-white font-bold py-3 px-8 rounded-full 
                                   hover:bg-main2-500 hover:text-main-900 hover:shadow-xl
                                   transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <GiMicrobe size={20} />
                        Explore the Full Study
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default LandingGallery;
