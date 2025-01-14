import React, { useState, useEffect } from "react";

function DronebuddyCenters() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.querySelector(".section-138");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-around min-h-screen p-6 section-138">
      {/* Drone Animation - Multiple Drones */}
      

      {/* Content Section */}
      <div className="md:w-[50%] flex flex-col items-start justify-center text-center md:text-left px-4">
        <h2 className="font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] mb-4 relative z-10">
          DroneBuddy Centers - Find Our Locations
        </h2>
        <p className="text-gray-600 text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem]">
          Discover our centers and explore our innovative drone solutions.
        </p>
      </div>

      {/* Map Section */}
      <div className="md:w-[50%] flex items-center justify-center mt-8 md:mt-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.7285018071602!2d75.35213771154433!3d19.89368298140945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba355e9d6b639%3A0x3e7043dc842aa942!2sMama%20Drones!5e0!3m2!1sen!2sin!4v1732448051711!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] md:w-[600px]"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Custom CSS Styling */}
      <style jsx>{`
        @keyframes droneFly1 {
          0% {
            transform: translateY(-200px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(200px);
            opacity: 1;
          }
        }

        .drone-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }

        .animate-drone-1 {
          animation: droneFly1 4s ease-in-out forwards;
        }

        /* Responsive Typography */
        html {
          font-size: 16px; /* Default for desktop */
        }

        @media (max-width: 1200px) {
          html {
            font-size: 15px;
          }
        }

        @media (max-width: 992px) {
          html {
            font-size: 14px;
          }
        }

        @media (max-width: 768px) {
          html {
            font-size: 13px;
          }
        }

        @media (max-width: 576px) {
          html {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}

export default DronebuddyCenters;
