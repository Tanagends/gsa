'use client'

import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios';

export default function ContactPage() {
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  const [subscribeName, setSubscribeName] = useState('')
  const [subscribeEmail, setSubscribeEmail] = useState('')
  const [contactStatus, setContactStatus] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState('')

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    // Handle contact form submission
    console.log('Contact form submitted', { contactName, contactEmail, contactMessage })
    const formData = { name:contactName, email:contactEmail , message:contactMessage }
    setContactStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Message sent successfully!');
        setContactName('')
        setContactEmail('')
        setContactMessage('')
      } else {
        setContactStatus('Failed to send message.');
      }
    } catch (error) {
        setContactStatus('cannot reach api.');
    }
  }

  const handleSubscribeSubmit = async (e) => {
    e.preventDefault()
    console.log('Newsletter subscription', { subscribeName, subscribeEmail })
    setSubscribeStatus('sending');
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name:subscribeName, email:subscribeEmail}),
      });
      if (response.ok) {
        setSubscribeStatus('Subscribed!');
      } else {
        setSubscribeStatus('Failed to Subscribe');
      }
    } catch (error) {
      console.error('Form submission error');
      setSubscribeStatus('An error occurred. Please try again.');
    }
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="relative h-64 bg-gradient-to-r from-main-500 to-main-200">
        <Image
          src="/assets/images/pcBg.jpeg"
          alt="Contact us header image"
          layout="fill"
          objectFit="cover"
          className="mix-blend-overlay"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl font-bold text-white">
          Contact Us
        </h1>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleContactSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-main-400 text-white font-bold py-2 px-4 rounded-md hover:bg-main-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
              {contactStatus && <p className="text-sm text-green-500 pt-8">{contactStatus}</p>}
          </section>

          <section className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Subscribe to Our Newsletter</h2>
              <form onSubmit={handleSubscribeSubmit}>
                <div className="mb-4">
                  <label htmlFor="subscribe-name" className="block text-gray-700 font-bold mb-2">Name</label>
                  <input
                    type="text"
                    id="subscribe-name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={subscribeName}
                    onChange={(e) => setSubscribeName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subscribe-email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input
                    type="email"
                    id="subscribe-email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type=""
                  className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                >
                  Subscribe
                </button>
                {subscribeStatus && <div className='text-center text-main-500 pt-2'>{subscribeStatus}</div>}
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <a href="tel:+263772916923" className="text-blue-500 hover:underline">+263 772 916 923</a>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a href="mailto:gsateamglobal@gmail.com" className="text-blue-500 hover:underline">gsateamglobal@gmail.com</a>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/company/generational-stewards-for-antimicrobials-gsa/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="https://twitter.com/Preservefutures" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=1000093674206378&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-gradient-to-r from-main-900 to-main-300 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Your support can save lives. We welcome any gifts, donations, and sponsorships to support our work. 
            Together, we can make a lasting impact on antimicrobial stewardship.
          </p>
          <a
            href="mailto:gsateamglobal@gmail.com"
            className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300"
          >
            Donate Now
          </a>
        </div>
      </section>
    </main>
  )
}