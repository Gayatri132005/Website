import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

// Gallery Image URLs
const GalleryImageUrls = [
  { 
    url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736739314/drone1_vf8zhm.webp",
    title: "Advanced Drone Technology",
    description: "Experience cutting-edge aerial solutions with our state-of-the-art drones."
  },
  { 
    url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736740115/repairing_uokl10.jpg",
    title: "Expert Maintenance",
    description: "Our skilled technicians ensure your drones are always in peak condition."
  },
  { 
    url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736748182/part_namiqw.webp",
    title: "Quality Parts & Accessories",
    description: "Enhance your drone's capabilities with our premium components."
  },
  { 
    url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736747168/teaching_xcpitk.webp",
    title: "Comprehensive Training",
    description: "Learn from industry experts and master drone piloting skills."
  },
  { 
    url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736740092/price_ms31pt.jpg",
    title: "Competitive Pricing",
    description: "High-quality drone services that fit your budget."
  },
];

function GalleryImages() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-baige relative">
      {/* Centered Title with adjusted top margin */}
      <h2 className="absolute top-12 left-1/2 transform -translate-x-1/2 text-xl font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-gray-800 text-center tracking-wide z-20 mb-12 sm:mb-16 md:mb-20">
        Explore Our Drone Services
      </h2>

      {/* Reduced margin to decrease distance from the title */}
      <Carousel className="w-full max-w-4xl relative overflow-hidden rounded-2xl shadow-lg bg-gray-100 mt-12">
        <CarouselContent className="flex space-x-0">
          {GalleryImageUrls.map((image, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-full h-[400px] sm:h-[500px] md:h-[600px] relative rounded-2xl overflow-hidden"
            >
              <Image
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">
                  {image.title}
                </h3>
                <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
                  {image.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Left Arrow */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-opacity-70 rounded-full hover:bg-opacity-90 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </CarouselPrevious>

        {/* Right Arrow */}
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full hover:bg-opacity-90 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </CarouselNext>
      </Carousel>
    </div>
  );
}

export default GalleryImages;
