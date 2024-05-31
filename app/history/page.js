"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Menu from "../components/menu/Menu";
import HistoryContent from "./components/HistoryContent";
import Link from "next/link";

export default function History() {

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
          <span className={`text-black text-2xl md:text-3xl font-bold ${textColor}`}>History</span>
        </h1>

       <HistoryContent />

       

      <div className='w-full flex justify-center'>
      <div className="p-10 bg-black bg-opacity-80 text-center text-white text-lg md:text-xl mt-20">
        <p className='mt-4'>If you know any historic moments to add to the timeline, <span className='underline hover:text-green-600' onClick={handleHammerClick}><Link href="/contact" passHref>let me know</Link></span>
      </p>
        <div className='menu-background h-2 mt-10 mb-5'></div>
        <p className='underline hover:text-green-600 mt-10' onClick={handleHammerClick}><Link href="/stylesandtypes" passHref>Discover the UK's diverse range of wall styles and types</Link></p> 
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
