'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMdMenu, IoMdClose } from 'react-icons/io'; // Icons for the hamburger menu

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      // Define a threshold for hiding the navbar (e.g., 50px to avoid flickering)
      if (currentScrollPosition > scrollPosition && currentScrollPosition > 50) {
        setNavbarVisible(false); // Scrolling down, hide navbar
      } else if (currentScrollPosition < scrollPosition || currentScrollPosition <= 50) {
        setNavbarVisible(true); // Scrolling up or at top, show navbar
      }

      setScrollPosition(currentScrollPosition); // Update scroll position
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]); // Re-run effect when scrollPosition changes

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle mobile menu open/close state
  };

  return (
    <header
      className={`px-4 h-16 sticky top-0 inset-x-0 w-full bg-black/40 backdrop-blur-lg z-50 transition-transform duration-300 ${
        navbarVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="./assets/logo.png"
              alt="logo"
              className="w-32 h-auto sm:w-36 md:w-48 px-2" // Adjusted for mobile
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center justify-center gap-8">
            <Link href="#" className="hover:text-foreground/80 text-md">
              Om oss
            </Link>
            <Link href="#" className="hover:text-foreground/80 text-md">
              Öppettider
            </Link>
            <Link href="#" className="hover:text-foreground/80 text-md">
              Priser
            </Link>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          {/* Hamburger icon (to open/close the menu) */}
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <IoMdClose className="w-8 h-8" /> : <IoMdMenu className="w-8 h-8" />}
          </button>
        </div>

        {/* "Kontakta oss" Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="ml-4 px-4 py-2 text-white bg-gradient-to-r from-red-800 to-red-500 text-md rounded-md"
          >
            Kontakta oss
          </Link>
        </div>

        {/* Mobile Menu (Slide-in) */}
        <div
          className={`fixed top-0 right-0 h-screen w-[65vw] bg-black text-white z-40 transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end p-6">
            <button onClick={toggleMenu} className="text-white text-3xl">
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 mt-10">
            <Link href="#" className="text-lg" onClick={toggleMenu}>
              Om oss
            </Link>
            <Link href="#" className="text-lg" onClick={toggleMenu}>
              Öppettider
            </Link>
            <Link href="#" className="text-lg" onClick={toggleMenu}>
              Priser
            </Link>
            <Link
              href="/contact"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700"
              onClick={toggleMenu}
            >
              Kontakta oss
            </Link>
          </div>
        </div>

        {/* Blurred background effect when menu is open */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-lg z-30"
            onClick={toggleMenu} // Clicking outside closes the menu
          ></div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
