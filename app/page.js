"use client";

import { useEffect } from "react";
import Homepage from "./homepage/homepage";
import Footer from "./components/Footer";
import Menu from "./components/menu/Menu";

export default function Home() {

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
     
        <Homepage />
        <Footer />
        <Menu className='z-20' />
      </main>
    </>
  );
}
