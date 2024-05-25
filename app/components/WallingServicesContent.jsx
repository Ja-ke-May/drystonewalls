import React from 'react';
import Link from 'next/link';
import ImageCarousel from './ImageCarousel';

const WallingServicesContent = () => {

    const NoviceCompImages = 
     [
        { url: '../images/lakes-walling-comp-group.png', description: 'Group photo' },
        { url: '../images/novice-trophy.jpg', description: 'First walling competition win!' },
        { url: '../images/novice-comp-wall-jack.jpg', description: 'The wall and Jack 🐾' },
        { url: '../images/novice-certificate.jpg', description: 'Certificate' },
      ];
 
  return (
    <>
    <div className="relative mt-20 z-20 max-w-[100%]">
      <div id="welcome-container" className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[100%]">
        <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <h2 className='underline hover:text-green-600'><Link href="/wallingservices" passHref>Walling Services</Link></h2>
        </div>
        <div className="text-lg">
          <p>
          Located in Huddersfield, I offer field walling/gapping services starting at £40 per meter. 
          <br />
          Every project is unique, so please <span className='underline hover:text-green-600'><Link href="/contact" passHref>reach out</Link></span> for a personalized quote. 
          </p>
        
  
          <div className='flex w-full items-center justify-center'>
          <img
          src='../images/me-walling-level1.jpg'
          className="m-4 max-h-60 max-w-60 lg:max-h-80 lg:max-w-80"
          alt='man building dry stone wall'
          />
          </div>

          <p>
          I'm also available for projects throughout the UK; <span className='underline hover:text-green-600'><Link href="/contact" passHref>contact</Link></span> me to discuss your needs.
          </p>
        </div>
      </div>
      </div>

<div className="relative mt-20 z-20 max-w-[100%]">
      <div className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white">
        <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <h3><u>Previous Work</u></h3>
        </div>
        <div className="text-lg">
          <p>
           Please view my previous work below. Click/tap the left or right buttons to view more.
           </p>
           <br />
           
          <ImageCarousel images={NoviceCompImages} mainTitle={'Friends of Lakes, Walling Comp 05/24'} />
          
        </div>
      </div>
    </div>
    </>
  );
};

export default WallingServicesContent;