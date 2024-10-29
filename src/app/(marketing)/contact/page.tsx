'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react'; // Import icons from lucide-react
import { Container } from '@/components';

// Define the shape of the form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState<string>('');

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage('');

    try {
      const response = await fetch('https://formspree.io/f/meoqebzq', { // Replace with your Formspree form ID
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Meddelandet skickades!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setStatusMessage('Fel: Meddelandet kunde inte skickas.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setStatusMessage('Fel: Meddelandet kunde inte skickas.');
    }
  };

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
      <div className="w-full flex flex-col-reverse lg:flex-row gap-10 items-center justify-center">
        
        {/* Left Side: Contact Form */}
        <form className="w-full lg:w-1/2 bg-black text-white p-8 rounded-lg shadow-lg space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
              Namn
            </label>
            <input
              type="text"
              id="name"
              name="name" // Added name attribute
              value={formData.name} // Controlled input
              onChange={handleChange} // Controlled input
              className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-neutral-400 bg-black text-white placeholder-gray-400"
              placeholder="Ditt namn"
              required // Added required validation
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
              E-post
            </label>
            <input
              type="email"
              id="email"
              name="email" // Added name attribute
              value={formData.email} // Controlled input
              onChange={handleChange} // Controlled input
              className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-neutral-400 bg-black text-white placeholder-gray-400"
              placeholder="Din e-postadress"
              required // Added required validation
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
              Meddelande
            </label>
            <textarea
              id="message"
              name="message" // Added name attribute
              rows={5}
              value={formData.message} // Controlled input
              onChange={handleChange} // Controlled input
              className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-neutral-400 bg-black text-white placeholder-gray-400"
              placeholder="Skriv ditt meddelande här"
              required // Added required validation
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 text-white bg-gradient-to-r from-red-800 to-red-500 font-bold rounded-lg transition duration-200 ease-in-out"
          >
            Skicka Meddelande
          </button>

          {statusMessage && <p className="text-center text-white">{statusMessage}</p>} {/* Show status message */}
        </form>

        {/* Right Side: Contact Info */}
        <div className="w-full lg:w-2/5 flex flex-col bg-neutral-800 p-8 rounded-lg shadow-lg space-y-4 items-start justify-center">
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
