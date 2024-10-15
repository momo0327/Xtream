import { cn } from "@/lib/utils";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";

// Array of image URLs (you can fetch this data from an API or use your own list of image paths)
const imageUrls = [
    "/assets/forre.png",
    "/assets/steam.png",
    "/assets/cs.png",
    "/assets/fifa.png", // Add more image URLs here
    "/assets/corsair.avif", // Add more image URLs here
    // "/assets/ps.png", // Add more image URLs here

];

const ImageMarqueeSection = () => {
    return (
        <div className="w-[90%]">
            <Marquee pauseOnHover className="[--duration:20s] select-none  mb-20">
                {imageUrls.map((imageUrl, index) => (
                    <figure
                        key={index}
                        className={cn(
                            "relative w-28 h-28 cursor-pointer overflow-hidden ","  hover:bg-zinc-50/[.15]",
                        )}
                    >
                        {/* Image Element */}
                        <Image
                            src={imageUrl}
                            alt={`Image ${index + 1}`}
                            layout="fill"
                            objectFit="contain" // Ensures the image covers the container
                            className="rounded-xl"
                        />
                    </figure>
                ))}
            </Marquee>
        </div>
    );
};

export default ImageMarqueeSection;
