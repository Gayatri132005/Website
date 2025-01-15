import React, { useState } from "react";
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
    description: "Experience cutting-edge aerial solutions with our state-of-the-art drones.",
  },
  {
    url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736740115/repairing_uokl10.jpg",
    title: "Expert Maintenance",
    description: "Our skilled technicians ensure your drones are always in peak condition.",
  },
  {
    url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736748182/part_namiqw.webp",
    title: "Quality Parts & Accessories",
    description: "Enhance your drone's capabilities with our premium components.",
  },
  {
    url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736747168/teaching_xcpitk.webp",
    title: "Comprehensive Training",
    description: "Learn from industry experts and master drone piloting skills.",
  },
  // Added New Image
  {
    url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736740092/price_ms31pt.jpg",
    title: "Affordable Pricing",
    description: "Get the best value for top-tier drone services and products.",
  },
];

function GalleryImages() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? GalleryImageUrls.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === GalleryImageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#FBFBF3] relative">
      {/* Centered Title */}
      <h2 className="absolute top-12 text-3xl font-bold text-gray-800 text-center tracking-wide z-20">
        Explore Our Drone Services
      </h2>

      <Carousel className="w-full max-w-4xl relative overflow-hidden rounded-2xl shadow-lg bg-gray-100 mt-16">
        <CarouselContent
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
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
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-transparent">
                <h3 className="text-white text-lg md:text-2xl font-bold mb-2">
                  {image.title}
                </h3>
                <p className="text-white text-sm md:text-lg">
                  {image.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-700 bg-opacity-70 hover:bg-opacity-90 rounded-full shadow-lg"
        >
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
        <CarouselNext
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-700 bg-opacity-70 hover:bg-opacity-90 rounded-full shadow-lg"
        >
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

      {/* Dots for Navigation */}
      <div className="flex justify-center space-x-2 mt-6">
        {GalleryImageUrls.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === index ? "bg-gray-700" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default GalleryImages;
