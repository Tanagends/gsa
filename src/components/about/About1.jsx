"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Data for the About section - keep this in your component or import it
const aboutContent = [
  {
    id: 'who-we-are',
    title: 'Who We Are',
    image: '/assets/images/bg-1.webp', // Add a relevant, vibrant image
    text: "We are dedicated to fostering innovation and advocacy in our health and awareness campaigns, specifically focusing on Antimicrobial Resistance (AMR). Our primary goal is to promote and empower stewardship among primary and secondary school students. By raising awareness and providing education, we aim to instil a sense of responsibility and understanding of AMR in the younger generation. We are inculcating a culture of social responsibility among young people to mitigate the threat of the spread of antimicrobial resistance in African communities using a One Health Approach. We are a catalyst organization and we achieve this by empowering young people, especially tertiary level students, and recent graduates by designing relevant programs that can trigger their interests and equip them with appropriate skills that mould them to be the next change-makers, opinion leaders, and hopefully pursue a career in the AMR sector. This is achieved through regular training and mentorship programs.",
  },
  {
    id: 'mission',
    title: 'Our Mission',
    image: '/assets/images/bg-1.webp', // Add a relevant, vibrant image
    text: "We are committed to empowering the next generation as champions and advocates for responsible antimicrobial use. Our mission is to cultivate a community of student leaders dedicated to combating antimicrobial resistance (AMR) through research, innovation, and social responsibility. We provide a dynamic platform for learning and action through engaging educational programs, the creation of collaborative AMR clubs, and mentorship opportunities designed to nurture student ideas. By connecting these future leaders with relevant stakeholders, we aim to facilitate impactful collaborations and pave the way for student-led solutions to flourish and create lasting change in the fight against AMR.",
  },
  {
    id: 'vision',
    title: 'Our Vision',
    image: '/assets/images/bg-1.webp', // Add a relevant, vibrant image
    text: "Our vision is to empower and educate young people to understand and tackle antimicrobial resistance (AMR) by fostering innovative solutions. We aim to engage and equip the next generation to actively contribute to global efforts in addressing this critical health threat.",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animate the whole section on scroll
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  useEffect(() => {
    // Animate the content and image when the tab changes
    const tl = gsap.timeline();
    tl.to(contentRef.current, { opacity: 0, y: 20, duration: 0.3, ease: 'power2.in' })
      .to(imageRef.current, { opacity: 0, scale: 0.95, duration: 0.3, ease: 'power2.in' }, "-=0.3")
      .call(() => {
        // The content update happens here, mid-animation
      })
      .to(contentRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
      .to(imageRef.current, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }, "-=0.4");

  }, [activeTab]);


  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Get to Know GSA Global</h2>
          <p className="text-lg text-gray-500 mt-2">Discover our purpose, mission, and vision for a better future.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Navigation Tabs */}
          <div className="lg:col-span-1 flex flex-col justify-center space-y-4">
            {aboutContent.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`p-6 rounded-lg text-left transition-all duration-300 transform focus:outline-none ${
                  activeTab === index
                    ? 'bg-main-700 text-white shadow-2xl -translate-x-2'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-lg'
                }`}
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                {activeTab === index && <p className="mt-2 text-sm text-white/80">Currently viewing</p>}
              </button>
            ))}
          </div>

          {/* Right Column: Content & Image */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-5 gap-8 bg-white p-8 rounded-lg shadow-xl">
             <div className="md:col-span-3">
              <div ref={contentRef}>
                <h3 className="text-2xl font-bold text-main-700 mb-4">{aboutContent[activeTab].title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {aboutContent[activeTab].text}
                </p>
              </div>
            </div>
             <div className="md:col-span-2 flex items-center">
              <div ref={imageRef} className="relative w-full h-64 md:h-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={aboutContent[activeTab].image}
                  alt={aboutContent[activeTab].title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
