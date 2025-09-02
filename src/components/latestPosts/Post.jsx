"use client";
// Post.jsx
import Link from "next/link";
import { PrismicNextImage } from '@prismicio/next';
import * as prismic from '@prismicio/client';
import { HiArrowRight, HiClock, HiUser, HiEye } from 'react-icons/hi2';
import { GiMicrochip as GiMicrobe, GiNewspaper, GiBookmark } from 'react-icons/gi';
import { useState } from 'react';

const Post = ({ image, title, content, author, date, link, type, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const contentArray = prismic.asText(content).split(/\s+/);
  const summary = contentArray.slice(0, 20);

  // Brand-consistent type configuration with your custom colors
  const typeConfig = {
    article: {
      icon: GiBookmark,
      label: 'Research Article',
      gradient: 'from-main-400 to-main-600',
      bgGradient: 'from-main-100/20 to-main-200/20',
      textColor: 'text-main-700',
      borderColor: 'border-main-200',
      hoverShadow: 'group-hover:shadow-main-400/25'
    },
    news: {
      icon: GiNewspaper,
      label: 'Latest News',
      gradient: 'from-main-300 to-main-500',
      bgGradient: 'from-main-100/30 to-main-300/20',
      textColor: 'text-main-800',
      borderColor: 'border-main-300',
      hoverShadow: 'group-hover:shadow-main-300/25'
    },
    event: {
      icon: GiMicrobe,
      label: 'Event Update',
      gradient: 'from-main-500 to-main-700',
      bgGradient: 'from-main-200/20 to-main-400/20',
      textColor: 'text-main-900',
      borderColor: 'border-main-400',
      hoverShadow: 'group-hover:shadow-main-500/25'
    }
  };

  const config = typeConfig[type] || typeConfig.article;
  const IconComponent = config.icon;

  // Animation delay based on index
  const animationDelay = `animation-delay-[${index * 100}ms]`;

  return (
    <article
      className={`group relative w-full max-w-sm mx-auto md:max-w-none bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl ${config.hoverShadow} 
                  transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 
                  border ${config.borderColor} animate-fade-in-up ${animationDelay}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
        
        {/* Type Badge */}
        <div className={`absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full border ${config.borderColor}`}>
          <IconComponent className={`text-sm ${config.textColor}`} />
          <span className={`text-xs font-bold ${config.textColor} uppercase tracking-wider`}>
            {config.label}
          </span>
        </div>

        {/* Reading Time Badge */}
        <div className="absolute top-4 right-4 z-20 bg-main-800/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <HiClock className="text-xs" />
          <span>{Math.max(1, Math.ceil(contentArray.length / 200))} min read</span>
        </div>

        <PrismicNextImage
          field={image}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          alt={title || 'Article image'}
        />

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-5`}></div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative">
        {/* Title */}
        <h3 className="font-black text-xl text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-main-700 transition-colors duration-300">
          {title}
        </h3>

        {/* Summary */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {summary.join(" ")}...
        </p>

        {/* Author & Date */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-6 h-6 bg-gradient-to-br ${config.gradient} rounded-full flex items-center justify-center`}>
              <HiUser className="text-white text-xs" />
            </div>
            <span className="font-medium">{author}</span>
          </div>
          
          <time
            className="flex items-center gap-1 font-medium text-main-600"
            dateTime={prismic.asDate(date)?.toISOString()}
          >
            <HiClock className="text-xs" />
            {prismic.asDate(date)?.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </time>
        </div>

        {/* Read More Button */}
        <Link
          href={link}
          className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-main-400 to-main-600 hover:from-main-500 hover:to-main-700 
                     text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm w-full justify-center"
        >
          <span>Read Full Article</span>
          <HiArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Link>

        {/* Engagement Indicator */}
        <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1 text-main-500">
            <HiEye className="text-xs" />
            <span className="text-xs font-medium">Featured Article</span>
          </div>
          {isHovered && (
            <div className="flex items-center gap-1 animate-fade-in" style={{ color: '#FFCC00' }}>
              <div className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: '#FFCC00' }}></div>
              <span className="text-xs font-medium">Click to explore</span>
            </div>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-main-400 to-main-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl -z-10"></div>
      
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-main-300 to-main-500 opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>

      {/* Yellow Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#FFCC00' }}></div>
    </article>
  );
};

export default Post;
