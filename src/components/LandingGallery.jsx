"use client";

import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GiMicrochip as GiMicrobe, GiMicroscope, GiDna2 } from "react-icons/gi";
import { HiSparkles } from "react-icons/hi2";

/* Type definition for Prismic image documents
type ImageDoc = {
    id: string;
    data: {
        image: any;
        title?: string;
        description?: string;
    };
};*/

const LandingGallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const client = createClient();
                const imageData = await client.getAllByType("image_gallery", { limit: 6 });
                setImages(imageData);
            } catch (error) {
                console.error("Failed to fetch Prismic images:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    // Enhanced positioning for a more dynamic layout
    const galleryItems = [
        { 
            position: 'md:top-[5%] md:left-[8%]', 
            size: 'w-52 h-52 md:w-60 md:h-60', 
            delay: 'animation-delay-0',
            zIndex: 'z-20',
            scale: 'hover:scale-105'
        },
        { 
            position: 'md:top-[40%] md:left-[2%]', 
            size: 'w-44 h-44 md:w-48 md:h-48', 
            delay: 'animation-delay-[-1.5s]',
            zIndex: 'z-10',
            scale: 'hover:scale-110'
        },
        { 
            position: 'md:top-[8%] md:right-[15%]', 
            size: 'w-48 h-48 md:w-56 md:h-56', 
            delay: 'animation-delay-[-0.8s]',
            zIndex: 'z-30',
            scale: 'hover:scale-108'
        },
        { 
            position: 'md:top-[50%] md:right-[25%]', 
            size: 'w-40 h-40 md:w-44 md:h-44', 
            delay: 'animation-delay-[-2.2s]',
            zIndex: 'z-15',
            scale: 'hover:scale-112'
        },
        { 
            position: 'md:top-[65%] md:right-[5%]', 
            size: 'w-36 h-36 md:w-40 md:h-40', 
            delay: 'animation-delay-[-3.1s]',
            zIndex: 'z-25',
            scale: 'hover:scale-115'
        },
        { 
            position: 'md:top-[25%] md:left-[35%]', 
            size: 'w-32 h-32 md:w-36 md:h-36', 
            delay: 'animation-delay-[-4.5s]',
            zIndex: 'z-5',
            scale: 'hover:scale-120'
        }
    ];

    if (loading) {
        return (
            <section className="relative py-5 bg-gradient-to-br from-slate-900 via-main-900 to-main2 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="relative">
                        <GiMicroscope className="text-6xl text-main2 animate-pulse" />
                        <div className="absolute -inset-2 bg-main2-400/30 rounded-full blur-lg animate-ping"></div>
                    </div>
                    <p className="text-main2-200 text-lg font-medium">Analyzing Visual Evidence...</p>
                    <div className="flex gap-2 mt-2">
                        <div className="w-2 h-2 bg-main2 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-main2 rounded-full animate-bounce animation-delay-[0.2s]"></div>
                        <div className="w-2 h-2 bg-main2 rounded-full animate-bounce animation-delay-[0.4s]"></div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-main-900 to-main2 py-5 sm:py-5 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-main2/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 bg-main-500/10 rounded-full blur-3xl animate-pulse animation-delay-[-2s]"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-main2/10 rounded-full blur-2xl animate-pulse animation-delay-[-1s]"></div>
            </div>

            {/* DNA Helix Pattern Overlay */}

            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 stroke=%22%23ffffff%22 stroke-width=%221%22 stroke-opacity=%220.05%22%3E%3Cpath d=%22M20,20 Q50,60 80,20 Q50,80 20,80%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <GiDna2 className="text-5xl text-main2 animate-spin-slow" />
                            <HiSparkles className="absolute -top-2 -right-2 text-xl text-main-400 animate-pulse" />
                        </div>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-main2 via-white to-main-200 tracking-tight leading-tight">
                        Visual Evidence
                        <span className="block text-3xl md:text-4xl mt-2 font-bold text-main2">
                            From the Front Lines
                        </span>
                    </h2>
                    
                    <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Witness the microscopic battle against antimicrobial resistance through our 
                        <span className="text-main2-300 font-semibold"> vigilant gallery</span>
                    </p>
                    
                    {/* Stats Bar */}
                    <div className="flex justify-center gap-8 mt-8 text-sm">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-main2">{images.length}+</div>
                            <div className="text-slate-400">Studies</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-main-300">100+</div>
                            <div className="text-slate-400">Samples</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-main2">24/7</div>
                            <div className="text-slate-400">Research</div>
                        </div>
                    </div>
                </div>

                {/* Gallery Container */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Mobile: Elegant Grid */}
                    <div className="md:hidden grid grid-cols-2 gap-4 px-4">
                        {images.slice(0, 4).map((image, index) => (
                            <div
                                key={image.id}
                                className="group relative aspect-square"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-main2/25 transition-all duration-500">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-main-500 to-main2 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                                    <div className="relative bg-slate-800 rounded-2xl overflow-hidden h-full">
                                        <PrismicNextImage
                                            field={image.data.image}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            alt={image.data.image.alt || 'AMR Research Image'}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <GiMicrobe className="text-3xl text-main2-300 animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop: Floating Petri Dish Layout */}
                    <div className="hidden md:block relative h-[600px]">
                        {images.map((image, index) => {
                            const item = galleryItems[index] || galleryItems[0];
                            return (
                                <div
                                    key={image.id}
                                    className={`group absolute animate-float ${item.position} ${item.size} ${item.delay} ${item.zIndex}`}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    {/* Petri Dish with Advanced Effects */}
                                    <div className={`relative w-full h-full transition-all duration-500 ease-out cursor-pointer ${item.scale}`}>
                                        {/* Outer Glow Ring */}
                                        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-main-500/30 via-main2/30 to-main-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                                        
                                        {/* Zone of Inhibition Ring */}
                                        <div className="absolute -inset-3 rounded-full border-2 border-transparent group-hover:border-main2/60 transition-all duration-500"></div>
                                        
                                        {/* Main Petri Dish */}
                                        <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl group-hover:shadow-main2/40 transition-all duration-500 border-4 border-slate-700 group-hover:border-main2/80">
                                            <div className="absolute -inset-1 bg-gradient-to-br from-main-500/20 to-main2-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                                            
                                            <div className="relative w-full h-full bg-slate-800 rounded-full overflow-hidden">
                                                <PrismicNextImage
                                                    field={image.data.image}
                                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                                                    alt={image.data.image.alt || 'AMR Research Image'}
                                                />
                                                
                                                {/* Overlay with Microbe Icon */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <GiMicrobe className="text-4xl text-main2 animate-pulse" />
                                                </div>
                                                
                                                {/* Hover Info Badge */}
                                                {hoveredIndex === index && (
                                                    <div className="absolute bottom-2 left-2 right-2 bg-slate-900/90 backdrop-blur-sm rounded-lg p-2 transform translate-y-0 transition-transform duration-300">
                                                        <p className="text-xs text-main2 font-medium">Sample #{index + 1}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        {/* Floating Particles Effect */}
                                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-main2 rounded-full animate-ping"></div>
                                            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-main-400 rounded-full animate-ping animation-delay-[0.5s]"></div>
                                            <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-main2 rounded-full animate-ping animation-delay-[1s]"></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <Link
                        href="/media"
                        className="group relative inline-flex items-center gap-4 bg-main2 text-black font-bold py-4 px-10 rounded-2xl
                               hover:bg-neutral-200 hover:shadow-2xl hover:shadow-main2/25
                               transition-all duration-500 transform hover:-translate-y-2 hover:scale-105
                               border border-main2-500 hover:border-main2"
                >
                        <GiMicroscope className="text-2xl group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-lg">View Full Gallery</span>
                        <HiSparkles className="text-xl group-hover:scale-110 transition-transform duration-300" />

                        {/* Button Glow Effect */}
                        <div className="absolute -inset-1 bg-main2 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-xl -z-10"></div>
                    </Link>

                    {/*
                    <div className="max-w-lg mx-auto mb-8">
                        <p className="text-slate-300 text-lg">
                            Ready to dive deeper into our research findings?
                        </p>
                    </div>
                    
                    
                    <Link
                        href="/gallery"
                        className="group inline-flex items-center gap-4 bg-gradient-to-r from-main-600 to-main2-600 text-white font-bold py-4 px-10 rounded-2xl 
                                   hover:from-main2-500 hover:to-main-500 hover:shadow-2xl hover:shadow-main2-500/25
                                   transition-all duration-500 transform hover:-translate-y-2 hover:scale-105
                                   border border-main-400/30 hover:border-main2-300/60"
                    >
                        <GiMicroscope className="text-2xl group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-lg">View Full Gallery</span>
                        <HiSparkles className="text-xl group-hover:scale-110 transition-transform duration-300" />*/}
                        
                        {/* Button Glow Effect 
                        <div className="absolute -inset-1 bg-gradient-to-r from-main-600 to-main2-600 rounded-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-500 blur-xl -z-10"></div>
                    </Link>*/}
        {/*
                    <p className="mt-4 text-sm text-slate-400">
                        Join us in the fight against antimicrobial resistance
                    </p>
        */}
                </div>
            </div>
        </section>
    );
};

export default LandingGallery;
