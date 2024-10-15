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

            {/*Features*/}
                <Features/>

            <Wrapper className="flex flex-col items-center justify-center  relative">
                <div className="max-w-md mx-auto text-start md:text-center  ">
                    <SectionBadge title="Öppettider" />

                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6 "
                            style={{ fontFamily: 'ethocentric' }}>
                                Öppet alla dagar           
                         </h2>

                <p className="text-muted-foreground mt-6">
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

            {/* testimonials */}
            {/* <Wrapper className="flex flex-col items-center justify-center py-12 relative ">
                <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-red-500 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Our Customers" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            What people are saying
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            See how Astra empowers businesses of all sizes. Here&apos;s what real people are saying on Twitter
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="py-10 md:py-20 w-full">
                        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
                            <Marquee pauseOnHover className="[--duration:20s] select-none">
                                {firstRow.map((review) => (
                                    <figure
                                        key={review.name}
                                        className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-black over:bg-zinc-50/[.15]",
                                        )}
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserIcon className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <Marquee reverse pauseOnHover className="[--duration:20s] select-none">
                                {secondRow.map((review) => (
                                    <figure
                                        key={review.name}
                                        className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-black over:bg-zinc-50/[.15]",
                                        )}
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserIcon className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                        </div>
                    </div>
                </Container>
            </Wrapper> */}

            {/* newsletter */}
                <Container>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="text-4xl lg:text-4xl xl:text-6xl lg:!leading-snug font-semibold mt-8"
                              style={{ fontFamily: 'ethocentric' }}
                            >
                              Besök oss  <br />  Idag
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Build stunning websites with Astra&apos;s intuitive drag-and-drop builder and powerful AI assistant
                            </p>
                            {/* <Button variant="white" className="mt-6" asChild>
                                <Link href="/sign-in">
                                    Get started for free
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button> */}
                        </div>
                    </LampContainer>
                    
                </Container>
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
