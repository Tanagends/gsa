'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  HiEnvelope, HiPhone, HiMapPin, HiPaperAirplane,
  HiSparkles, HiGlobeAlt, HiUsers, HiHeart,
  HiClock, HiBell
} from 'react-icons/hi2'

gsap.registerPlugin(ScrollTrigger)

export default function ContactPage() {
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  const [subscribeName, setSubscribeName] = useState('')
  const [subscribeEmail, setSubscribeEmail] = useState('')
  const [contactStatus, setContactStatus] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState('')
  
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )

      // Form animation
      gsap.fromTo(formRef.current,
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          delay: 0.3,
          ease: "power3.out" 
        }
      )

      // Info cards animation
      gsap.fromTo(infoRef.current,
        { opacity: 0, x: 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          delay: 0.3,
          ease: "power3.out" 
        }
      )

      // CTA animation
      ScrollTrigger.create({
        trigger: ctaRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.fromTo(ctaRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
          )
        }
      })

      // Floating elements
      gsap.to('.float-element', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5
      })

      // Pulse animation
      gsap.to('.pulse-dot', {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power2.out"
      })
    })

    return () => ctx.revert()
  }, [])

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    const formData = { name: contactName, email: contactEmail, message: contactMessage }
    setContactStatus('Sending...')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setContactStatus('Message sent successfully!')
        setContactName('')
        setContactEmail('')
        setContactMessage('')
        setTimeout(() => setContactStatus(''), 3000)
      } else {
        setContactStatus('Failed to send message.')
      }
    } catch (error) {
      setContactStatus('Cannot reach API.')
    }
  }

  const handleSubscribeSubmit = async (e) => {
    e.preventDefault()
    setSubscribeStatus('Sending...')
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: subscribeName, email: subscribeEmail }),
      })
      if (response.ok) {
        setSubscribeStatus('Successfully subscribed!')
        setSubscribeName('')
        setSubscribeEmail('')
        setTimeout(() => setSubscribeStatus(''), 3000)
      } else {
        setSubscribeStatus('Failed to subscribe')
      }
    } catch (error) {
      console.error('Form submission error')
      setSubscribeStatus('An error occurred. Please try again.')
    }
  }

  const contactInfo = [
    {
      icon: HiPhone,
      title: "Call Us",
      details: "+263 772 916 923",
      link: "tel:+263772916923",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: HiEnvelope,
      title: "Email Us",
      details: "gsateamglobal@gmail.com",
      link: "mailto:gsateamglobal@gmail.com",
      color: "from-green-400 to-green-600"
    },
    {
      icon: HiMapPin,
      title: "Visit Us",
      details: "Harare, Zimbabwe",
      link: "#",
      color: "from-purple-400 to-purple-600"
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/generational-stewards-for-antimicrobials-gsa/',
      icon: 'bi-linkedin',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/Preservefutures',
      icon: 'bi-twitter-x',
      color: 'hover:text-sky-500'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100093674206378&mibextid=LQQJ4d',
      icon: 'bi-facebook',
      color: 'hover:text-blue-700'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/263778473160',
      icon: 'bi-whatsapp',
      color: 'hover:text-green-600'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-main-900 via-main-800 to-main-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23FFCC00%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        {/* Floating elements */}
        <div className="float-element absolute top-20 right-20 w-32 h-32 bg-[#FFCC00]/10 rounded-full blur-3xl"></div>
        <div className="float-element absolute bottom-20 left-20 w-40 h-40 bg-main-400/10 rounded-full blur-3xl"></div>

        {/* Hero Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/images/pcBg.webp"
            alt="Contact us header image"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
          />
        </div>

        <div ref={heroRef} className="relative max-w-6xl mx-auto px-4 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6 backdrop-blur-sm">
            <HiSparkles className="text-[#FFCC00]" />
            <span className="text-sm font-bold text-[#FFCC00]">Get In Touch</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-main-200 to-white bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FFCC00] via-yellow-400 to-[#FFCC00] bg-clip-text text-transparent">
              & Collaborate
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join us in the fight against antimicrobial resistance. Whether you have questions, 
            want to partner, or support our mission, we&apos;d love to hear from you.
          </p>

          {/* Quick Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 
                         transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br 
                              ${info.color} rounded-xl mb-3 group-hover:scale-110 transition-transform`}>
                  <info.icon className="text-white text-xl" />
                </div>
                <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                <p className="text-gray-300 text-sm">{info.details}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div ref={formRef}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-main-500 to-main-700 rounded-xl 
                                flex items-center justify-center">
                    <HiEnvelope className="text-white text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-main-800">Send Us a Message</h2>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none 
                               focus:border-main-500 focus:ring-2 focus:ring-main-500/20 transition-all"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none 
                               focus:border-main-500 focus:ring-2 focus:ring-main-500/20 transition-all"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none 
                               focus:border-main-500 focus:ring-2 focus:ring-main-500/20 transition-all resize-none"
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Tell us how we can help..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-main-500 to-main-700 text-white font-bold 
                             py-4 px-6 rounded-xl hover:from-main-600 hover:to-main-800 
                             transition-all duration-300 transform hover:scale-[1.02] shadow-lg 
                             hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <HiPaperAirplane className="text-lg" />
                  </button>
                </form>

                {contactStatus && (
                  <div className={`mt-4 p-3 rounded-lg text-center font-semibold animate-fadeIn
                    ${contactStatus.includes('successfully') 
                      ? 'bg-green-100 text-green-700' 
                      : contactStatus.includes('Sending') 
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-red-100 text-red-700'}`}>
                    {contactStatus}
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Newsletter & Social */}
            <div ref={infoRef} className="space-y-8">
              {/* Newsletter Subscription */}
              <div className="bg-gradient-to-br from-[#FFCC00]/10 to-yellow-500/10 rounded-3xl p-8 border-2 border-[#FFCC00]/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFCC00] to-yellow-500 rounded-xl 
                                flex items-center justify-center">
                    <HiBell className="text-main-900 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-main-800">Stay Updated</h2>
                </div>

                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter for the latest updates on AMR initiatives and events.
                </p>

                <form onSubmit={handleSubscribeSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border-2 border-[#FFCC00]/30 rounded-xl focus:outline-none 
                             focus:border-[#FFCC00] focus:ring-2 focus:ring-[#FFCC00]/20 transition-all bg-white"
                    value={subscribeName}
                    onChange={(e) => setSubscribeName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border-2 border-[#FFCC00]/30 rounded-xl focus:outline-none 
                             focus:border-[#FFCC00] focus:ring-2 focus:ring-[#FFCC00]/20 transition-all bg-white"
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FFCC00] to-yellow-500 text-main-900 
                             font-bold py-3 px-6 rounded-xl hover:from-yellow-500 hover:to-[#FFCC00] 
                             transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                  >
                    Subscribe Now
                  </button>
                </form>

                {subscribeStatus && (
                  <div className={`mt-4 p-3 rounded-lg text-center font-semibold animate-fadeIn
                    ${subscribeStatus.includes('Successfully') 
                      ? 'bg-green-100 text-green-700' 
                      : subscribeStatus.includes('Sending') 
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-red-100 text-red-700'}`}>
                    {subscribeStatus}
                  </div>
                )}
              </div>

              {/* Social Media Links */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-main-500 to-main-700 rounded-xl 
                                flex items-center justify-center">
                    <HiGlobeAlt className="text-white text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-main-800">Connect on Social</h2>
                </div>

                <p className="text-gray-600 mb-6">
                  Follow us for daily updates and join our community in the fight against AMR.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 
                               transition-all duration-300 transform hover:scale-105 group"
                    >
                      <i className={`${social.icon} text-xl text-gray-600 ${social.color} transition-colors`}></i>
                      <span className="font-semibold text-gray-700 group-hover:text-main-700">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Office Hours */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <HiClock className="text-main-500" />
                    <span className="font-semibold">Office Hours</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Monday - Friday: 8:00 AM - 5:00 PM (CAT)<br />
                    Saturday - Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 px-4 bg-gradient-to-br from-main-900 via-main-800 to-main-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/20 rounded-full mb-6">
            <HiHeart className="text-[#FFCC00]" />
            <span className="text-sm font-bold text-[#FFCC00]">Support Our Mission</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Your support can save lives. We welcome any gifts, donations, and sponsorships 
            to support our work. Together, we can make a lasting impact on antimicrobial stewardship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:gsateamglobal@gmail.com"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#FFCC00] to-yellow-500 
                       hover:from-yellow-500 hover:to-[#FFCC00] text-main-900 font-bold py-4 px-8 
                       rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 
                       transition-all duration-300"
            >
              <HiHeart className="text-xl group-hover:animate-pulse" />
              <span>Donate Now</span>
            </a>
            <a
              href="/programs"
              className="inline-flex items-center gap-3 bg-transparent border-2 border-white 
                       hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full 
                       transition-all duration-300"
            >
              <HiUsers className="text-xl" />
              <span>View Our Programs</span>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </main>
  )
}
