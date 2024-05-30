"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Menu from "../components/menu/Menu";
import Link from "next/link";
import WhatIsDSW from "./components/WhatIsDSW";
import WhyDSW from "./components/WhyDSW";
import BuildingBasics from "./components/BuildingBasics";
import ToolsAndEquipment from "./components/ToolsAndEquipment";

export default function LearnTheBasics() {

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

  const handleScrollToBuildingBasics = () => {
    const buildingBasicsSection = document.getElementById('building-basics');
    buildingBasicsSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToWhatIsDSW = () => {
    const whatIsDSWSection = document.getElementById('what-is-dsw');
    whatIsDSWSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToWhyDSW = () => {
    const whyDSWSection = document.getElementById('why-dsw');
    whyDSWSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToToolsEquipment= () => {
    const toolsEquipmentSection = document.getElementById('tools-equipment');
    toolsEquipmentSection.scrollIntoView({ behavior: "smooth" });
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
            <span>Dry</span>
            <span>Stone</span>
            <span>Walls</span>
          </span>
         
          <span className={`md:text-xl text-black font-black`}>by Jacob May</span>
          <br />
          <span className={`text-black text-2xl md:text-3xl font-bold ${textColor}`}>Learn The Basics</span>
        </h1>

<div className="w-full bg-black/80 flex flex-col justify-center mt-10">
        <button className={`underline md:text-lg text-white hover:text-green-600 mt-5`} onClick={handleScrollToWhatIsDSW}>What is a dry stone wall?</button>
        <button className={`underline md:text-lg text-white hover:text-green-600 mt-2`} onClick={handleScrollToWhyDSW}>Why do we need dry stone walls?</button>
        <button className={`underline md:text-lg text-white hover:text-green-600 mt-2`} onClick={handleScrollToBuildingBasics}>Building basics</button>
        <button className={`underline md:text-lg text-white hover:text-green-600 mt-2 mb-5`} onClick={handleScrollToToolsEquipment}>Tools and equipment</button>
        </div>
        <WhatIsDSW />
        <WhyDSW />
        <BuildingBasics />
        <ToolsAndEquipment />

        <div className='w-full flex justify-center'>
      <div className="max-w-[50%] p-10 bg-black bg-opacity-80 text-center text-white text-xl mt-40">
        <p className='underline hover:text-green-600' onClick={handleHammerClick}><Link href="/history" passHref>Discover more about this ancient art</Link></p>
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
