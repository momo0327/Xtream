import React from 'react';
import { BorderBeam } from './border-beam';
import SectionBadge from './section-badge';
import Container from '../global/container';

function Pic() {
  return (
    <div className="px-6 py-10 md:px-12 md:py-16 max-w-screen-xl mx-auto mb-20">
      <Container >
        <div className="lg:mb-20 mb-10">
        <div className="max-w-md mx-auto text-left md:text-center">
          <SectionBadge title="Kiosk" />
          <h2
            className="text-2xl break-words lg:break-normal lg:text-4xl font-semibold mt-6 text-left md:text-center"
            style={{ fontFamily: 'ethocentric' }}
          >
            Ladda upp med goda snacks
          </h2>
          </div>
        </div>
   

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Text Content */}
        <div className="w-full md:w-1/2 max-w-lg space-y-4 text-left">
          {/* Title */}
          <h1 className="lg:text-3xl text-xl font-bold">Bred Sortiment</h1>
          {/* Text */}
          <p className="lg:text-xl font-normal text-sm text-gray-400">
            Vår kiosk erbjuder ett brett sortiment av snacks och drycker för alla smaker – från chips och lösgodis till exotiska läckerheter. Oavsett vad du är sugen på, har vi något som gör din spelupplevelse ännu bättre!
          </p>
        </div>

        {/* Image with BorderBeam */}
        <div className="w-full md:w-2/3 flex justify-center md:ml-10 rounded-sm relative">
          <div className="absolute inset-0 bg-blue-500/20 opacity-30 rounded-lg z-10"></div> {/* Blue Overlay */}
          <div className="relative z-0">
            <BorderBeam className="absolute inset-0 z-10 rounded-sm" />
            <img
              src="assets/kiosk.HEIC" // Replace with your image URL
              alt="Placeholder Image"
              className="w-full h-auto rounded-lg shadow-lg relative z-0"
            />
          </div>
        </div>
      </div>
      </Container>
    </div>
  );
}

export default Pic;
