"use client";
// LatestPosts.jsx
import Post from '@/components/latestPosts/Post';
//import { createClient } from '@/prismicio';
import { HiSparkles, HiNewspaper, HiArrowTrendingUp as HiTrendingUp } from 'react-icons/hi2';
import { GiMicrochip as GiMicrobe } from 'react-icons/gi';

export default function LatestPosts({ articles_arr }) {
 
  return (
    <section className="relative py-5 lg:py-5 bg-gradient-to-br from-slate-900 via-main-900 to-main2 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-main2-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-main-500/10 rounded-full blur-2xl animate-pulse animation-delay-[-2s]"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-main2-400/10 rounded-full blur-xl animate-pulse animation-delay-[-1s]"></div>
      </div>

      {/* DNA Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 stroke=%22%23ffffff%22 stroke-width=%221%22 stroke-opacity=%220.05%22%3E%3Cpath d=%22M10,10 Q40,30 70,10 Q40,50 10,70 Q40,50 70,70%22/%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>


      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-main2/30 px-6 py-3 rounded-full">
                <HiTrendingUp className="text-2xl text-main2 animate-pulse" />
                <span className="text-main2 font-bold text-sm uppercase tracking-wider">Latest Updates</span>
                <div className="w-2 h-2 bg-main2-400 rounded-full animate-ping"></div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-main2/20 to-main-500/20 rounded-full blur-lg -z-10"></div>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-main2 to-main-200 tracking-tight leading-tight mb-6">
            Research Frontlines
            <span className="block text-3xl md:text-4xl mt-2 font-bold text-main2">
              Our Insights
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our most recent breakthroughs, research findings, and 
            <span className="text-main2 font-semibold"> community impact stories</span>
          </p>

          {/* Activity Indicator */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live Updates</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <GiMicrobe className="text-main2-400 animate-spin-slow" />
              <span>{articles_arr.length} Fresh Articles</span>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="relative max-w-7xl mx-auto">
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto gap-6 pb-6 px-4 scrollbar-hide">
              {articles_arr.map((article, index) => (
                <Post
                  key={`post-latest-${index}`}
                  image={article.data.story_image}
                  title={article.data.title}
                  content={article.data.story}
                  author={article.data.author}
                  date={article.data.publishing_time}
                  link={article.url}
                  type={article.type}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {articles_arr.map((article, index) => (
              <Post
                key={`post-latest-${index}`}
                image={article.data.story_image}
                title={article.data.title}
                content={article.data.story}
                author={article.data.author}
                date={article.data.publishing_time}
                link={article.url}
                type={article.type}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-slate-400 text-lg">
              Want to explore more research insights?
            </p>
            <a
              href="/articles"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-main-600 to-main2 text-white font-bold py-4 px-8 rounded-2xl 
                         hover:from-main2 hover:to-main-500 hover:shadow-2xl hover:shadow-main2-500/25
                         transition-all duration-500 transform hover:-translate-y-2 hover:scale-105
                         border border-main-400/30 hover:border-main2/60"
            >
              <HiNewspaper className="text-2xl group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-lg">View All Articles</span>
              <HiSparkles className="text-xl group-hover:scale-110 transition-transform duration-300" />
              
              {/* Button Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-main-600 to-main2 rounded-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-500 blur-xl -z-10"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </section>
  );
}
