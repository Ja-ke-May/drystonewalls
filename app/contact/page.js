"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Menu from "../components/menu/Menu";

import ContactContent from "./components/ContactContent";

export default function Contact() {

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

  
  const [textColor, setTextColor] = useState("text-white");

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
          <span>Dry </span>
            <span>Stone </span>
            <span>Walls </span>
          </span>
         
          
          <br />
          <span className={`text-black text-2xl md:text-3xl font-bold ${textColor}`}>Contact</span>
        </h1>
        <ContactContent />
        
        <Footer />
        <Menu className='z-20' />
      </main>
    </>
  );
}
