'use client'
import React from 'react';
import { Container } from "@/components"; 
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa'
import { ChevronRight } from 'lucide-react';

function Hero() {
  return (
    <div className="relative w-screen h-[55vh] lg:h-screen md:h-[100vh]"> {/* Full height on desktop, reduced on mobile */}
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 lg:w-full h-[90%] blur-sm w-100vw ">
        <Image
          src="/assets/xtream.jpg"
          alt="background image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 lg:bg-black/40 backdrop-blur-none bg-black/25"></div>

        {/* Top and Bottom Shadow Fading Effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-24 lg:h-80 bg-gradient-to-b from-black to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-80 bg-gradient-to-t from-black to-transparent z-10"></div>
        </div>
      </div>

      <Container className="flex flex-col items-center md:items-start justify-start px-5 md:px-20 text-center md:text-left mt-12"> {/* Flex alignment to the top */}
        
        {/* Left side: text content */}
        <div className="relative z-10 w-full h-auto"> {/* Adjusted container height */}
  
          {/* Address Section - Only visible on desktop */}
          <h2 className="text-red-500 text-lg font-semibold mb-5 hidden lg:flex">
    <div className="relative flex items-center justify-center md:justify-start mt-32">
      <Link
        href="https://www.google.com/maps/search/?api=1&query=Xtream+E-sport+Arena+Spelhall+Göteborg,+Kyrkvägen+19,+433+33+Partille"
        target="_blank" // Opens in a new tab
        className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-neutral-600/40 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none "
      >
        <p className="text-foreground lg:text-md text-xs text-center md:text-base font-medium pl-4 pr-4 lg:pr-0 flex items-center justify-center ">
          {/* SVG Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className="mr-2">
            <path
              fill="#a1a1aa"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
            />
          </svg>
          Kyrktorget 19, Partille 
        </p>

        <Button size="sm" className="rounded-full hidden lg:flex text-white bg-gradient-to-r  from-red-800 to-red-500  hover:from-red-900 hover:to-red-700">
          Hitta hit
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </Link>
    </div>
  </h2>

  <div className="flex lg:hidden items-center justify-center mt-8">
    <Link
      href="https://www.google.com/maps/search/?api=1&query=Xtream+E-sport+Arena+Spelhall+Göteborg,+Kyrkvägen+19,+433+33+Partille"
      target="_blank" // Opens in a new tab
    >
      <button className="group relative grid overflow-hidden rounded-full px-4 py-1 transition-colors duration-200"> {/* Updated bg-opacity */}
        <span>
          <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        </span>
        <span className="absolute inset-[1px] rounded-full bg-neutral-400/10 backdrop-blur-md transition-colors duration-200 group-hover:bg-neutral-700/20" /> {/* Increased transparency */}
        <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-transparent"></span>
        <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className="mr-2">
            <path
              fill="#a1a1aa"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
            />
          </svg>                
          Kyrktorget 19, Partille 
          <ChevronRight className="w-4 h-4" />
        </span>
      </button>
    </Link>
  </div>



          {/* Main Headline with custom font */}
          <h1 className="text-transparent font-extrabold bg-clip-text bg-gradient-to-b from-white to-gray-400 leading-tight text-center lg:text-left lg:mt-8 lg:mb-5 mt-5 text-3xl lg:text-8xl" 
            style={{ fontFamily: 'ethocentric' }}> 
            <span className="block">Göteborgs </span>
            <span className="block">gaming arena</span>
          </h1>

          {/* Subtext */}
          <p className="md:text-lg text-foreground/80 lg:mt-5 mt-3 text-sm lg:text-xl text-center lg:text-left lg:mb-1 mb-5">
          Spela i timmar, över 100+ roliga spel väntar! <br /> Njut av snacks och dryck från vår kiosk med brett sortiment            
          </p>

          {/* Action Button */}
          <div className="md:justify-start lg:text-left text-center">
  <a href="#features">
    <MagicButton
      title="Utforska mer"
      position="right"
      icon={<FaLocationArrow />}
      otherClasses="transition duration-200 transform hover:scale-105 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-900 hover:text-white
                   text-xs sm:text-sm md:text-base lg:text-lg
                   px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3
                   min-w-[100px] whitespace-nowrap"
    />
  </a>
</div>



        </div>
      </Container>

      {/* Inline Font Style */}
      <style jsx>{`
        @font-face {
          font-family: 'ethocentric';
          src: url('/assets/ethocentric.otf') format('opentype');  
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
    </div>
  );
}

export default Hero;
