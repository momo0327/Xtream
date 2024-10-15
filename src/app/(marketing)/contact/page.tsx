// src/app/(marketing)/contact/page.tsx
'use client'
import React from 'react';
import { Phone } from 'lucide-react'; // Import phone icon from lucide-react
import { Container } from '@/components';

const ContactPage = () => {
  return (
    <Container className="min-h-screen flex flex-col justify-center items-center px-4 md:px-20">
      {/* Kontakta Oss Heading with Ethnocentric font */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-transparent   bg-clip-text bg-gradient-to-b from-white to-gray-400"
    style={{ fontFamily: 'ethocentric' }}> 
        Kontakta Oss
      </h1>

      <p className="text-center text-md mb-10 text-foreground/70">
        Har du några frågor? Fyll i formuläret nedan, så hör vi av oss så snart som möjligt!
      </p>

      {/* Phone number section */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <Phone className="w-6 h-6  text-gray-400" />
        <p className="text-lg text-gray-700">
         Vill du boka? Ring gärna oss på <strong>072-336-43 84</strong>
        </p>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-lg bg-black text-white p-8 rounded-lg shadow-lg space-y-6">
        <div>
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
            Namn
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-neutral-400 bg-black text-white placeholder-gray-400"
            placeholder="Ditt namn"
          />
        </div>

        <div>
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
            E-post
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-neutral-400 bg-black text-white placeholder-gray-400"
            placeholder="Din e-postadress"
          />
        </div>

        <div>
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
            Meddelande
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-neutral-400 bg-black text-white placeholder-gray-400"
            placeholder="Skriv ditt meddelande här"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4text-white bg-gradient-to-r from-red-800 to-red-500 font-bold rounded-lg transition duration-200 ease-in-out"
        >
          Skicka Meddelande
        </button>
      </form>
      <style jsx>{`
        @font-face {
          font-family: 'ethocentric';
          src: url('/assets/ethocentric.otf') format('opentype');  
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
    </Container>
  );
};

export default ContactPage;
