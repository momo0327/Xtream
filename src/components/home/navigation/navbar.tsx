'use client';

import { useState, useEffect } from 'react'; // Importera useEffect för att hantera scroll
import { Container } from '@/components'; // Antar att du använder Container från dina komponenter
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Importera ikoner för Hamburger och Stäng-knappar

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // Spåra synlighet för navigationsfältet
    const [lastScrollPos, setLastScrollPos] = useState(0); // Spåra sista scroll-positionen

    // Funktion för att öppna och stänga menyn
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Scroll-hanterare för att visa/dölja navbar baserat på scrollriktningen
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        // Om användaren scrollar ner, dölja navbar. Om de scrollar upp, visa den.
        if (currentScrollPos > lastScrollPos && currentScrollPos > 100) {
            setIsVisible(false); // Dölj navbar när man scrollar ner
        } else {
            setIsVisible(true); // Visa navbar när man scrollar upp
        }

        setLastScrollPos(currentScrollPos); // Uppdatera senaste scroll-positionen
    };

    // Lägg till scroll-händelselyssnare
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Rensa upp vid avmontering
        };
    }, [lastScrollPos]); // Beroende av senaste scroll-positionen

    return (
        <header className={`px-4 h-16 sticky top-0 inset-x-0 w-full bg-black/40 backdrop-blur-lg z-50 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <Container reverse>
                <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
                    
                    {/* Logosektion */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <img 
                                src="./assets/logo.png" 
                                alt="logo" 
                                className="w-32 h-auto sm:w-36 md:w-48 px-2"  // Adjusted for mobile: w-32 for smaller screens, sm:w-36 for small, md:w-48 for larger screens
                            />
                        </Link>
                    </div>

                    {/* Desktop-navigeringslänkar */}
                    <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center justify-center gap-8">
                            <Link href="#" className="hover:text-foreground/80 text-md">Om oss</Link>
                            <Link href="#" className="hover:text-foreground/80 text-md">Priser</Link>
                            <Link href="#" className="hover:text-foreground/80 text-md">Funktioner</Link>
                            <Link href="#" className="hover:text-foreground/80 text-md">Blogg</Link>
                        </ul>
                    </nav>

                    {/* Mobilmenyknapp */}
                    <div className="flex md:hidden items-center">
                        {/* Hamburger-ikon (för att öppna/stänga menyn) */}
                        <button onClick={toggleMenu} className="text-white">
                            {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>

                    {/* "Kontakta oss"-knapp */}
                    <div className="hidden md:flex items-center">
                        <Link href="/contact" 
                        
                        className={buttonVariants({ className: "ml-4 px-4 py-2 text-white bg-gradient-to-r from-red-800 to-red-500 text-md " })}>
                            Kontakta oss
                        </Link>
                    </div>

                    {/* Mobilmeny */}
                    {menuOpen && (
                        <div className="absolute top-16 left-0 right-0 bg-black/90 text-white flex flex-col items-center gap-4 py-6 md:hidden">
                            <Link href="#" className="hover:text-gray-300 text-lg" onClick={toggleMenu}>Priser</Link>
                            <Link href="#" className="hover:text-gray-300 text-lg" onClick={toggleMenu}>Om oss</Link>
                            <Link href="#" className="hover:text-gray-300 text-lg" onClick={toggleMenu}>Funktioner</Link>
                            <Link href="/contact" className="hover:text-gray-300 text-lg">Kontakta oss</Link> {/* Mobilknapp */}
                        </div>
                    )}
                </div>
            </Container>
        </header>
    );
};

export default Navbar;
