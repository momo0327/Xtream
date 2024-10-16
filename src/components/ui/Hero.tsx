'use client'
import React from 'react';
import { Container } from "@/components"; 
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa'

function Hero() {
  return (
    <div className="relative w-screen h-[55vh] lg:h-screen"> {/* Full height on desktop, reduced on mobile */}
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 lg:w-full h-[90%] blur-sm   w-100vw ">
        <Image
          src="/assets/xtream.jpg"
          alt="background image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 lg:bg-black/40 backdrop-blur-none 
        bg-black/25 
        "></div>

        {/* Top and Bottom Shadow Fading Effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-24 lg:h-80 bg-gradient-to-b from-black to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-80 bg-gradient-to-t from-black to-transparent z-10"></div>
        </div>
      </div>

      <Container className="flex flex-col items-center md:items-start justify-start px-5 md:px-20 text-center md:text-left mt-12"> {/* Flex alignment to the top */}
        
        {/* Left side: text content */}
        <div className="relative z-10 w-full h-auto"> {/* Adjusted container height */}

          {/* Address Section */}
          <h2 className="text-red-500 text-lg font-semibold mb-5 ">
            <div className="relative flex items-center justify-center md:justify-start mt-8 md:mt-40">
              <Link
                href="#"
                className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-neutral-600/40 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none"
              >
                <p className="text-foreground lg:text-md lg:text-md text-xs text-center md:text-base font-medium pl-4 pr-4 lg:pr-0 flex items-center justify-center ">
                  {/* SVG Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className="mr-2">
                    <path
                      fill="#a1a1aa"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
                    />
                  </svg>
                  Kyrktorget 19, Partille 
                </p>

                <Button variant={'red'} size="sm" className="rounded-full hidden lg:flex border border-foreground/20 text-white">
                  Hitta hit
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </h2>

          {/* Main Headline with custom font */}
          <h1 className="text-transparent font-extrabold bg-clip-text bg-gradient-to-b from-white to-gray-400 leading-tight text-center lg:text-left lg:mt-8 lg:mb-5 mt-5 text-3xl lg:text-8xl " 
            style={{ fontFamily: 'ethocentric' }}> 
            <span className="block">Göteborgs </span>
            <span className="block">gaming arena</span>
          </h1>

          {/* Subtext */}
          <p className="md:text-lg text-foreground/80 lg:mt-5 mt-3 text-sm lg:text-xl text-center lg:text-left lg:mb-1 mb-5  ">
            Spela i timmar, 100+ olika roliga spel mätta dig själv <br /> med snacks och dryck från våran kiosk med bred sortiment  
          </p>

          {/* Action Button */}
          <div className=" md:justify-start lg:text-left text-center">
            <MagicButton
              title='Utforska mer'
              position='right'
              icon={<FaLocationArrow/>}
            />
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
