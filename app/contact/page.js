"use client";

import { useEffect } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

import ComingSoon from "../components/ComingSoon";

export default function Contact() {

  useEffect(() => {
    const imageElement = document.getElementById('image-background');
    const hour = new Date().getHours();

    if (imageElement) {
      if (hour >= 6 && hour < 18) {
        // Daytime: 6 AM to 6 PM
        imageElement.src = 'images/malham-cove-day.jpg';
      } else {
        // Nighttime: 6 PM to 6 AM
        imageElement.src = 'images/malham-cove-night.jpg';
      }
    }
  }, []);

  return (
    <>  
      <img
        id="image-background"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        alt="Background"
      />
      <main className="relative flex flex-col items-center">
        <h1 className="text-image-fill">
          <span className="font-black flex flex-col text-4xl md:text-5xl">
            <span>Dry</span>
            <span>Stone</span>
            <span>Walls</span>
          </span>
          <span className="md:text-xl mt-2 md:ml-2">by Jacob May</span>
        </h1>

        <ComingSoon />
        
        <Footer />
        <Menu className='z-20' />
      </main>
    </>
  );
}
