import Icons from "@/components/global/icons";
import { Heart } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center border-t border-neutral-800/90 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 relative">

            {/* Background Blurs */}
            <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-red-600 w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
            <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-red-600 w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

            {/* Centered Content Container */}
            <div className="flex flex-col lg:flex-row gap-20 w-full items-center lg:justify-center text-center lg:text-left">

                {/* Logo and Developer Info */}
                <div className="flex flex-col items-center lg:items-start md:max-w-[250px]">
                    <div className="flex items-center">
                        <img src="./assets/logo.png" alt="Xtream E-sport Arena Logo" />
                    </div>
                    <p className="text-muted-foreground mt-4 text-sm">
                        Developed by Zenit Digital Studios
                    </p>
                </div>

                {/* Links Section with Flex Layout */}
                <div className="flex gap-16 items-start justify-center w-full lg:w-auto text-left">
                    {/* Product Section */}
                    <div className="self-start">
                        <h3 className="text-base font-medium text-white">Länkar</h3>
                        <ul className="mt-4 text-sm text-muted-foreground">
                            <li className="mt-2">
                                <Link href="#features" className="hover:text-foreground transition-all duration-300">Om Oss</Link>
                            </li>
                            <li className="mt-2">
                                <Link href="#pricing" className="hover:text-foreground transition-all duration-300">Priser</Link>
                            </li>
                            <li className="mt-2">
                                <Link href="#hours" className="hover:text-foreground transition-all duration-300">Öppettider</Link>
                            </li>
                            <li className="mt-2">
                                <Link 
                                    href="https://www.google.com/maps/search/?api=1&query=Xtream+E-sport+Arena+Spelhall+Göteborg,+Kyrkvägen+19,+433+33+Partille" 
                                    target="_blank"
                                    className="hover:text-foreground transition-all duration-300"
                                >
                                    Hitta hit
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Integrations Section */}
                    <div className="self-start">
                        <h3 className="text-base font-medium text-white">Sociala media</h3>
                        <ul className="mt-4 text-sm text-muted-foreground">
                            <li>
                                <Link 
                                    href="https://www.facebook.com/xtreamesportarena/?locale=sv_SE" 
                                    className="hover:text-foreground transition-all duration-300" 
                                    target="_blank"
                                >
                                    Facebook
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="https://www.instagram.com/xtreamesportarena/" className="hover:text-foreground transition-all duration-300"
                                target="_blank"
                                >Instagram</Link>
                            </li>
                            <li className="mt-2">
                                <Link href="https://www.tiktok.com/@xtreamgamingarenagbg" className="hover:text-foreground transition-all duration-300"
                                target="_blank"
                                >TikTok</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 border-t border-border/40 pt-4 w-full text-center">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Xtream E-sport Arena. All rights reserved.
                </p>
            </div>
            
        </footer>
    );
};

export default Footer;
