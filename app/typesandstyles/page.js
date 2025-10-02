"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Menu from "../components/menu/Menu";
import WallStyles from "./components/WallStyles";
import WallTypes from "./components/WallTypes";
import Link from "next/link";

export default function TypesandStyles() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-GNWE08Q87B';
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-GNWE08Q87B');

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [rotate, setRotate] = useState(false);
  const [textColor, setTextColor] = useState("text-white");

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
        setTextColor("text-black");
      } else {
        imageElement.src = 'images/malham-cove-night.jpg';
        setTextColor("text-white");
      }
    }
  }, []);

  const handleScrollToWallTypes = () => {
    const walltypesSection = document.getElementById('wall-types');
    walltypesSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToWallStyles = () => {
    const wallstylesSection = document.getElementById('wall-styles');
    wallstylesSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToType = (typeId) => {
    const section = document.getElementById(typeId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <>  
      <img
        id="image-background"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        alt="Background"
      />
      <main className="relative flex flex-col items-center">
      <h1 className="text-center flex flex-col justify-center items-center">
          <span className="text-image-fill font-black flex flex-col text-4xl md:text-5xl text-left">
          <span>Dry </span>
            <span>Stone </span>
            <span>Walls </span>
          </span>
         
          <br />
          <span className={`text-black text-2xl md:text-3xl font-bold ${textColor}`}>Types and Styles</span>
        </h1>


        <div className="w-full bg-black/80 flex flex-col md:flex-row justify-center mt-10 pb-5">
        <div className='hidden md:block w-[100%] md:w-[25%] menu-background h-2 mt-5'></div>
          <div className="flex flex-col">
        <button className={`underline md:text-lg text-white hover:text-green-600 mt-5`} onClick={handleScrollToWallTypes}>Types</button>
        <button className={`underline text-white hover:text-green-600 mt-2`} onClick={() => handleScrollToType('single-wall')}>Single Wall (Single Dyke)</button>
      <button className={`underline text-white hover:text-green-600 mt-2`} onClick={() => handleScrollToType('double-wall')}>Double Wall (Double Dyke)</button>
      <button className={`underline text-white hover:text-green-600 mt-2`} onClick={() => handleScrollToType('galloway-dyke')}>Galloway Dyke</button>
      <button className={`underline text-white hover:text-green-600 mt-2`} onClick={() => handleScrollToType('cornish-hedge')}>Cornish Hedge</button>
      <button className={`underline text-white hover:text-green-600 mt-2`} onClick={() => handleScrollToType('ha-ha')}>Ha-ha</button>
      <button className={`underline text-white hover:text-green-600 mt-2`} onClick={() => handleScrollToType('field-wall')}>Field Wall</button>
      <button className={`underline text-white hover:text-green-600 mt-2`} onClick={() => handleScrollToType('retaining-wall')}>Retaining Wall</button>
      </div>
      <div className='w-[100%] md:w-[25%] menu-background h-2 mt-5'></div>
      <div className="flex flex-col">
        <button className={`underline md:text-lg text-white hover:text-green-600 mt-5`} onClick={handleScrollToWallStyles}>Styles</button>
        <button className={`underline text-white hover:text-green-600 mt-2`} onClick={() => handleScrollToType('scotland')}>Scotland</button>
      <button className={`underline text-white hover:text-green-600 mt-2`} onClick={() => handleScrollToType('ireland')}>Ireland</button>
      <button className={`underline text-white hover:text-green-600 mt-2`} onClick={() => handleScrollToType('the-pennines')}>The Pennines</button>
      <button className={`underline text-white hover:text-green-600 mt-2`} onClick={() => handleScrollToType('wales')}>Wales</button>
      <button className={`underline text-white hover:text-green-600 mt-2`} onClick={() => handleScrollToType('lake-district')}>The Lake District</button>
      <button className={`underline text-white hover:text-green-600 mt-2`} onClick={() => handleScrollToType('southern-central')}>Southern/Central England</button>
      <button className={`underline text-white hover:text-green-600 mt-2`} onClick={() => handleScrollToType('south-west')}>South West</button>
      </div>
      <div className='hidden md:block w-[100%] md:w-[25%] menu-background h-2 mt-5'></div>
        </div>
        <WallTypes />
        <WallStyles />
        
        <div className='w-full flex justify-center'>
      <div className="max-w-[50%] p-10 bg-black bg-opacity-80 text-center text-white text-xl mt-40">
        <p className='underline hover:text-green-600' onClick={handleHammerClick}><Link href="/quiz" passHref>How will you do in the dry stone walling quiz?</Link></p>
      </div>
      </div>

        <div className='flex w-full items-center justify-center'>
          <img
          src='/images/hammer-no-background.png'
          className={`mt-40 max-h-40 max-w-40 ${rotate ? 'rotate-animation' : ''}`} 
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
