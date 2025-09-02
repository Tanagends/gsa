"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    try {
      const response = await axios.post('/api/subscribe', { email, name });
      if (response.data.error) {
        setStatus('error');
        setMessage(response.data.error);
      } else {
        setStatus('success');
        setMessage('Successfully subscribed!');
        setEmail('');
        setName('');
      }
    } catch (error) {
      console.error('Form submission error:', error.response?.data);
      setStatus('error');
      setMessage(error.response?.data?.error || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="relative z-10 bg-white/5 backdrop-blur-sm p-8 rounded-3xl shadow-xl w-full h-auto border border-white/10 space-y-4">
      <h3 className="text-white font-extrabold text-xl text-center mb-2">Subscribe to our Newsletter</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 bg-white/10 text-white placeholder-gray-300 rounded-xl border border-white/10 focus:ring-4 focus:ring-main2/40 focus:outline-none"
        />

        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 bg-white/10 text-white placeholder-gray-300 rounded-xl border border-white/10 focus:ring-4 focus:ring-main2/40 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full p-3 bg-main2 text-main-800 font-bold rounded-xl hover:bg-main2/90 hover:shadow-md transition-all duration-300"
        >
          Subscribe
        </button>
      </form>

      {/* Status Messages */}
      {status === 'sending' && (
        <div className="flex items-center gap-2 px-4 py-3 bg-main3/20 text-main3 border border-main3/40 rounded-lg animate-[fade-in_0.3s_ease-out_forwards]">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="text-sm">Sending...</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 px-4 py-3 bg-red-600/20 text-red-300 border border-red-600/40 rounded-lg animate-[fade-in_0.3s_ease-out_forwards]">
          <XCircle className="w-5 h-5" />
          <span className="text-sm">{message}</span>
        </div>
      )}

      {status === 'success' && (
        <div className="flex items-center gap-2 px-4 py-3 bg-green-600/20 text-green-300 border border-green-600/40 rounded-lg animate-[fade-in_0.3s_ease-out_forwards]">
          <CheckCircle className="w-5 h-5" />
          <span className="text-sm">{message}</span>
        </div>
      )}

      {/* Local fade-in animation keyframes */}
      <style jsx global>{`
        @layer utilities {
          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateY(6px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;

