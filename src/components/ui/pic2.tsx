import React from 'react';
import { BorderBeam } from './border-beam';
import SectionBadge from './section-badge';
import Container from '../global/container';
import MagicButton from './MagicButton';
import { ArrowRight } from 'lucide-react';

function Pic() {
  return (
    <div className="px-6 py-10 md:px-12 md:py-16 max-w-screen-xl mx-auto mb-20">
      <Container >
        <div  className="lg:mb-20 mb-10">
        <div className="max-w-md mx-auto text-left md:text-center">
          <SectionBadge title="Evenemang" />
          <h2
            className="text-2xl break-words lg:break-normal lg:text-4xl font-semibold mt-6 text-left md:text-center"
            style={{ fontFamily: 'ethocentric' }}
          >
            Aktiviteter hos oss
          </h2>
        </div>
        </div>
   

      {/* First Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Text Content */}
        <div className="w-full md:w-1/2 max-w-lg space-y-4 text-left">
          {/* Title */}
          <h1 className="lg:text-3xl text-xl font-bold">NATTGIB & DROP IN</h1>
          {/* Text */}
          <p className="lg:text-xl font-normal text-sm text-gray-400">
          Drop-in varje dag, och nattgibben börjar på fredag och håller på till lördag. Nattgibben startar kl. 22:00 och slutar 06:00 – perfekt för nattugglor som älskar att spela!

          </p>

          <a href="#pricing">
          <MagicButton
           icon= {<ArrowRight className="w-4 h-4 ml-1" />} 
           position='right' 
           title='Se Priser' 
           />
           </a>
        </div>

        {/* Image with BorderBeam */}
        <div className="w-full md:w-2/3 flex justify-center md:ml-10 rounded-sm">
          <div className="relative">
            {/* Image with BorderBeam */}
            <BorderBeam className="absolute inset-0 z-10 rounded-sm" />
            <img
              src="assets/nattgib.jpg" // Replace with your image URL
              alt="Placeholder Image"
              className="w-full h-auto rounded-lg shadow-lg relative z-0"
            />
          </div>
        </div>
      </div>

      {/* Second Content Section (New Arkaden Section) */}
      <div id='kalas' className="flex flex-col md:flex-row-reverse items-center justify-between space-y-6 md:space-y-0 mt-16">
        {/* Text Content */}
        <div className="w-full md:w-1/2 max-w-lg space-y-4 text-left">
          {/* Title */}
          <h1 className="lg:text-3xl text-xl font-bold">BARNKALAS</h1>
          {/* Text */}
          <p className="lg:text-xl font-normal text-sm text-gray-400">
          Fira ditt barnkalas hos oss! Barnen får 3 timmar speltid fylld med roliga aktiviteter och spännande spel. Varje gäst får dessutom en godispåse, snacks eller popcorn, samt korv med bröd och dricka. Det perfekta sättet att fira en oförglömlig dag med massor av skoj och skratt!


          </p>
          <a href="/contact">
          <MagicButton
           icon= {<ArrowRight className="w-4 h-4 ml-1" />} 
           position='right' 
           title='Boka' 
           />
           </a>
         

        </div>

        {/* Image with BorderBeam */}
{/* Image with BorderBeam */}
<div className="w-full md:w-2/3 flex justify-center md:mr-10 rounded-sm">
  <div className="relative">
    {/* Image with BorderBeam */}
    {/* <BorderBeam className="absolute inset-0 z-10 rounded-sm" /> */}

    <img
      src="assets/barnkalas.jpg" // Replace with your image URL
      alt="Arkaden Image"
      className="w-full h-auto  md:max-w-[75%] object-cover rounded-lg shadow-lg relative z-0"
    />
  </div>
</div>

      </div>

      {/* Third Content Section (New Image below Arkaden) */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 mt-16">
        {/* Text Content */}
        <div className="w-full md:w-1/2 max-w-lg space-y-4 text-left">
          {/* Title */}
          <h1 className="lg:text-3xl text-xl font-bold">ARKAD</h1>
          {/* Text */}
          <p className="lg:text-xl font-normal text-sm text-gray-400">
          Vår arkad är full av spännande spel och roliga aktiviteter. Kom och utmana dina vänner i nostalgiska arkadspel eller testa nya, coola maskiner. Perfekt för en paus från spelet eller en extra adrenalinkick!
          
          </p>
        </div>

        {/* Image with BorderBeam */}
        <div className="w-full md:w-2/3 flex justify-center md:ml-10 rounded-sm">
          <div className="relative">
            {/* Image with BorderBeam */}
            <BorderBeam className="absolute inset-0 z-10 rounded-sm" />
            <img
              src="assets/arkad.HEIC" // Replace with your image URL
              alt="New Experience Image"
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
