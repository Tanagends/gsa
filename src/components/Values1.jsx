"use client";
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Values = () => {
  const values = [
    "Dedication", "Empathy", "Industriousness",
    "Teamwork", "Grassroot Engagement", "Empowerment",
  ];
  const valuesRef = useRef(null);

  useEffect(() => {
    const el = valuesRef.current;
    // SEO-friendly stagger animation for the value cards
    gsap.fromTo(el.querySelectorAll('.value-card'),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: { trigger: el.querySelector('.values-grid'), start: 'top 85%' }
      }
    );
    // SEO-friendly animation for the image
    gsap.fromTo(el.querySelector('.values-image'),
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: el.querySelector('.values-image'), start: 'top 85%' }
      }
    );
  }, []);

  return (
    <section ref={valuesRef} className="w-full py-20 lg:py-32 bg-main-700 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 lg:mb-16">
             The Principles We Stand For
            </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="values-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value}
                className="value-card bg-white/10 backdrop-blur-sm p-5 rounded-lg border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center">
                  <FaCheckCircle className="h-6 w-6 text-main2 mr-4 flex-shrink-0" />
                  <p className="font-semibold text-lg">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="values-image flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/bg-1.jpeg" // Replace with a powerful, humane image
                alt="Our team embodying our core values"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
