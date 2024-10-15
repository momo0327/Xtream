'use client';

import { useState, useEffect } from 'react'; // Import useEffect for scroll detection
import { Container } from '@/components'; // Assuming you are using Container from your components
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Import icons for Hamburger and Close buttons

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // Track the visibility of the navbar
    const [lastScrollPos, setLastScrollPos] = useState(0); // Track the last scroll position

    // Toggle function to open and close the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Scroll event handler to show/hide navbar based on scroll direction
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        // If user is scrolling down, hide the navbar. If scrolling up, show it.
        if (currentScrollPos > lastScrollPos && currentScrollPos > 100) {
            setIsVisible(false); // Hide navbar when scrolling down
        } else {
            setIsVisible(true); // Show navbar when scrolling up
        }

        setLastScrollPos(currentScrollPos); // Update the last scroll position
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
        };
    }, [lastScrollPos]); // Dependency on the last scroll position

    return (
        <header className={`px-4 h-16 sticky top-0 inset-x-0 w-full bg-black/40 backdrop-blur-lg z-50 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <Container reverse>
                <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
                    
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <img 
                                src="./assets/logo.png" 
                                alt="logo" 
                                className="w-28 h-auto md:w-48 px-2" 
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center justify-center gap-8">
                            <Link href="#" className="hover:text-foreground/80 text-md">About</Link>
                            <Link href="#" className="hover:text-foreground/80 text-md">Pricing</Link>
                            <Link href="#" className="hover:text-foreground/80 text-md">Features</Link>
                            <Link href="#" className="hover:text-foreground/80 text-md">Blog</Link>
                        </ul>
                    </nav>

                    {/* Mobile Hamburger Menu */}
                    <div className="flex md:hidden items-center">
                        {/* Hamburger Icon (toggle menu) */}
                        <button onClick={toggleMenu} className="text-white">
                            {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>

                    {/* "Kontakta oss" Button */}
                    <div className="hidden md:flex items-center">
                        <Link href="/contact" 
                        
                        className={buttonVariants({ className: "ml-4 px-4 py-2 text-white bg-gradient-to-r from-red-800 to-red-500 text-md " })}>
                            Kontakta oss
                        </Link>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    {menuOpen && (
                        <div className="absolute top-16 left-0 right-0 bg-black/90 text-white flex flex-col items-center gap-4 py-6 md:hidden">
                            <Link href="#" className="hover:text-gray-300 text-lg" onClick={toggleMenu}>Pricing</Link>
                            <Link href="#" className="hover:text-gray-300 text-lg" onClick={toggleMenu}>About</Link>
                            <Link href="#" className="hover:text-gray-300 text-lg" onClick={toggleMenu}>Features</Link>
                            <Link href="#" className="hover:text-gray-300 text-lg" onClick={toggleMenu}>Blog</Link>
                            <Link href="/contact" className="hover:text-gray-300 text-lg">Kontakta oss</Link> {/* Mobile button */}
                        </div>
                    )}
                </div>
            </Container>
        </header>
    );
};

export default Navbar;
