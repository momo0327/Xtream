
// Also install this npm i --save-dev @types/react-lottie

import { cn } from "@/lib/utils";
import Image from 'next/image';
import { BorderBeam } from "./border-beam";
// import { BackgroundGradientAnimation } from "./GradientBg";
// import GridGlobe from "./GridGlobe";
// import animationData from "@/data/confetti.json";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
 

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-sm group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    > 
      {/* Image with dark overlay */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>

        <div className="w-full h-full absolute">

          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
              layout="fill"
              objectFit="cover" // Ensures image covers the container
            />
            
          )}

          {/* Dark overlay for text visibility */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

        </div>

        {/* Optional spare image */}
        {spareImg && (
          <div className="absolute right-0 -bottom-5 w-full opacity-80">
            <Image
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
              width={500}
              height={500}
            />
          </div>
        )}

        {/* Text content */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative z-10 md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* Description */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          {/* Title */}
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>

          {/* Example of additional content */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
               
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
