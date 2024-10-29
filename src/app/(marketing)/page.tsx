'use client'

import { Container, Icons, Wrapper } from "@/components";
import Grid from "@/components/Grid";
import { Button } from "@/components/ui/button";

import { LampContainer } from "@/components/ui/lamp";
import SectionBadge from "@/components/ui/section-badge";
import { reviews } from "@/constants";

import { ArrowRight} from "lucide-react";
import Link from "next/link";
import Vid from "@/components/ui/Vid";
import Hours from "@/components/ui/Hours";
import ImageMarqueeSection from "@/components/ui/ImageMarque";
import Hero from "@/components/ui/Hero";
import SubHero from "@/components/ui/SubHero";
import Features from "@/components/ui/Features";
import Pricing from "@/components/ui/Pricing";
import Pic from "@/components/ui/Pic";
import Pic2 from "@/components/ui/pic2";
import LampText from "@/components/ui/LampText";


const HomePage = () => {
    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);

    return (
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8 ">

        {/* hero */}
            <Hero/>

                <div className="flex justify-center items-center w-[95%]"> 
                    <ImageMarqueeSection/>
                </div>
             

            {/* how it works */}
                <SubHero/>

            {/* Grid Bilder*/}
                <Grid/>


                <Pic2/>
            {/*Features*/}
                <Features/>
    

                <Pic/>

               

            <Wrapper className="flex flex-col items-center justify-center  relative">
                <div  id='hours'  className="max-w-md mx-auto text-start md:text-center  ">
                    <SectionBadge title="Öppettider" />

                        <h2 className="text-2xl lg:text-4xl font-semibold mt-6 "
                            style={{ fontFamily: 'ethocentric' }}>
                                Öppet alla dagar           
                         </h2>

                <p className="text-muted-foreground lg:mt-6 lg:text-md mt-2 text-sm ">
                Vi är öppna under hela veckan för att du ska kunna njuta av din spelupplevelse oavsett dag!

                </p>
            </div>
        </Wrapper>
            {/*Öppettider*/}
                <Hours/>

            {/* pricing */}
                <Pricing/>

            {/* Video */}
            <Vid/>
                

            {/* Lamp */}
  <Container className="max-w-4xl mx-auto md:mt-24">
    <LampContainer className="mb-8 lg:mb-12"> {/* Adds margin below lamp for spacing */}
      <div className="flex flex-col items-center justify-center w-full text-center space-y-6 sm:space-y-8 lg:space-y-10">
        
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight"
          style={{ fontFamily: 'ethocentric' }}
        >
          Besök oss <br /> idag
        </h2>

        {/* Description Paragraph */}
        <p className="text-muted-foreground max-w-md mx-auto text-base sm:text-lg lg:text-xl px-4 sm:px-0">
          Välkommen in för en upplevelse fylld av spel, spänning och gemenskap. Hos oss finns något för alla – vi ser fram emot ditt besök!
        </p>

        {/* Button */}
        <Button variant="white" className="mt-4 sm:mt-6 px-6 py-3 text-sm sm:text-base lg:text-lg" asChild>
          <Link href="https://www.google.com/maps/search/?api=1&query=Xtream+E-sport+Arena+Spelhall+Göteborg,+Kyrkvägen+19,+433+33+Partille"
      target="_blank" // Opens in a new tab
    >
            Hitta hit
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </LampContainer>
  </Container>



             

{/* <Container>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="text-4xl lg:text-4xl xl:text-6xl lg:!leading-snug font-semibold mt-8"
                              style={{ fontFamily: 'ethocentric' }}
                            >
                              Besök oss  <br />  Idag
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                            Välkommen in för en upplevelse fylld av spel, spänning och gemenskap. Hos oss finns något för alla – vi ser fram emot ditt besök!                            </p>
                            <Button variant="white" className="mt-6" asChild>
                                <Link href="https://www.google.com/maps/search/?api=1&query=Xtream+E-sport+Arena+Spelhall+Göteborg,+Kyrkvägen+19,+433+33+Partille"
                                  target="_blank"
                                >
                                Hitta hit                                    
                                <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </LampContainer>
                    
                </Container> */}
           

        <style jsx>{`
        @font-face {
          font-family: 'ethocentric';
          src: url('/assets/ethocentric.otf') format('opentype');  
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
        </section>
    )
};

export default HomePage
