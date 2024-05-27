"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Menu from "../components/menu/Menu";
import ComingSoon from "../components/ComingSoon";


export default function WallingServices() {
  const [rotate, setRotate] = useState(false);

  const handleHammerClick = () => {
    setRotate(true);
    setTimeout(() => setRotate(false), 1000); 
  };

  useEffect(() => {
    const imageElement = document.getElementById('image-background');
    const hour = new Date().getHours();

    if (imageElement) {
      if (hour >= 6 && hour < 21) {
        imageElement.src = 'images/malham-cove-day.jpg';
      } else {
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

        <div className='flex w-full items-center justify-center'>
          <img
          src='/images/hammer-no-background.png'
          className={`mt-40 h-40 w-40 ${rotate ? 'rotate-animation' : ''}`} 
          alt='walling hammer'
          onClick={handleHammerClick}
          />
          </div>

        <Footer />
        <Menu className='z-20' />
      </main>
    </>
  );
}
