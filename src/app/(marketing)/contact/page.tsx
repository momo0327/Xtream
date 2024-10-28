'use client'
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react'; // Import icons from lucide-react
import { Container } from '@/components';

const ContactPage = () => {
  return (
    <Container className="min-h-screen flex flex-col justify-center items-center px-4 md:px-20">
      {/* Kontakta Oss Heading with Ethnocentric font */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
        style={{ fontFamily: 'ethocentric' }}>
        Kontakta Oss
      </h1>

      <p className="text-center text-sm sm:text-md mb-10 text-foreground/70">
        Har du några frågor? Fyll i formuläret nedan, så hör vi av oss så snart som möjligt!
      </p>

      {/* Main Container: Flex on large screens, column on mobile */}
      <div className="w-full flex flex-col-reverse lg:flex-row gap-10 items-center justify-center"> {/* Centering added here */}
        
        {/* Left Side: Contact Form */}
        <form className="w-full lg:w-1/2 bg-black text-white p-8 rounded-lg shadow-lg space-y-6">
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
            className="w-full py-3 px-4 text-white bg-gradient-to-r from-red-800 to-red-500 font-bold rounded-lg transition duration-200 ease-in-out"
          >
            Skicka Meddelande
          </button>
        </form>

        {/* Right Side: Contact Info */}
        <div className="w-full lg:w-2/5 flex flex-col bg-neutral-800 p-8 rounded-lg shadow-lg space-y-4 items-start justify-center"> {/* Height reverted to original */}
          <h2 className="text-lg font-bold text-white mb-4">Kontaktinformation</h2>
          
          {/* Phone number section */}
          <div className="flex flex-col items-start">
            <p className="text-sm sm:text-lg text-gray-400">
              Vill du boka? Ring gärna oss på <br />
              <div className='flex flex-row gap-3 items-center mt-3'>
                <Phone className="w-6 h-6 text-gray-400" />
                <strong>031-23 02 22</strong>
              </div>
            </p>
          </div>

          {/* Email section */}
          <div className="flex flex-row gap-3 items-center">
            <Mail className="w-6 h-6 text-gray-400" />
            <strong className='text-gray-400'>info@xtreamgaming.se</strong>
          </div>

          {/* Address section */}
          <div className="flex flex-row gap-3 items-center">
            <MapPin className="w-6 h-6 text-gray-400" />
            <strong className='text-gray-400'>Kyrktorget 19, 433 33, Partille</strong>
          </div>
        </div>
      </div>

      {/* Correctly wrapped style tag */}
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
