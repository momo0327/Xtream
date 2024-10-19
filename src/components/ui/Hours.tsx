import React from 'react';
import Container from '../global/container';
import SectionBadge from './section-badge';

function Hours() {
  return (
    
    <div className="w-full mt-20 bg-transparent mb-20 ">
    
      {/* Flex container for two smaller side-by-side containers */}
      
      <div className="flex flex-col md:flex-row justify-center gap-6">
  
        {/* Container 1 */}
        <div className="w-full h-[30vh] md:w-1/3 p-6 bg-neutral-950/60 rounded-lg flex items-center justify-center border border-white/10">
          <ul className="space-y-4 text-center">
            <li className="text-lg font-semibold bg-gradient-to-r from-red-700 to-red-200 text-transparent bg-clip-text">
              Söndag - Torsdag:
            </li>
            <li className=" text-4xl lg:text-4xl md:text-2xl font-bold bg-clip-text bg-gradient-to-b from-white to-gray-400 text-transparent">
              Kl 12:00 - 00:00 
            </li>
          </ul>
        </div>

        {/* Container 2 */}
        <div className="w-full h-[30vh] md:w-1/3 p-6 bg-neutral-950/60 flex items-center justify-center border border-white/10 rounded-lg">
          <ul className="space-y-4 text-center">
            <li className="text-lg font-semibold bg-gradient-to-r from-red-700 to-red-200 text-transparent bg-clip-text">
              Fredag - Lördag:
            </li>
            <li className=" text-4xl lg:text-4xl md:text-2xl font-bold  bg-clip-text bg-gradient-to-b from-white to-gray-400 text-transparent">
              Kl 12:00 - 06:00 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hours;
