'use client'

import React from 'react';
import { Container, Wrapper } from "@/components";
import SectionBadge from "@/components/ui/section-badge";
import { features } from "@/constants";

function Features() {
  return (
    <div className="w-full mt-20 py-10 bg-transparent mb-20">

      {/* Main Wrapper */}
      <Wrapper className="flex flex-col items-center justify-center relative">
        {/* Background Circles */}
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-red-600 rounded-full blur-[10rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-red-600 rounded-full blur-[10rem] -z-10"></div>

        {/* Content */}
        <Container>
          <div className="max-w-md mx-auto text-left md:text-center">
            <SectionBadge title="Om oss" />
            <h2 className="text-2xl break-words lg:break-normal lg:text-4xl font-semibold mt-6 text-left md:text-center "
              style={{ fontFamily: 'ethocentric' }}
            >
              Vi Förbättar Spelupplevelsen
            </h2>
            <p className="text-muted-foreground mt-6 text-left md:text-center">
              Oavsett om du är nybörjare eller expert, har vi funktionerna för att förbättra din upplevelse.
            </p>
          </div>
        </Container>

        {/* Features Grid */}
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-start px-4 md:px-6 lg:px-8 py-6">
                  {/* Feature Icon */}
                  <div className="flex items-center justify-start">
                    <feature.icon className="w-8 h-8" />
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-lg font-medium mt-4 text-left md:text-center">{feature.title}</h3>

                  {/* Feature Description */}
                  <p className="text-muted-foreground mt-2 text-left lg:text-start">
                    {feature.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Font Styling */}
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

export default Features;
