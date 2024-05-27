import React, { useState } from 'react';
import Link from 'next/link';
import PreviousWork from './PreviousWork';

const WallingServicesContent = () => {
  const [rotate, setRotate] = useState(false);

  const handleHammerClick = () => {
    setRotate(true);
    setTimeout(() => setRotate(false), 1000); 
  };
 
  return (
    <>
    <div className="relative mt-20 z-20 max-w-[100%]">
      <div id="walling-services-opening" className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[100%]">
        <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <h2 className='font-bold'>Walling Services</h2>
        </div>
        <div className="text-lg">
          <p>
          Located in Huddersfield, I offer field walling/gapping services starting at £40 per metre. 
          <br />
          My focus is on repairing fallen walls using only the original stones. I'm also happy to take on projects requiring extra stone. 
          
          Every job is unique, so please <span className='underline hover:text-green-600'><Link href="/contact" passHref>reach out</Link></span> for a personalised quote. 
          </p>
        
  
          <div className='flex w-full items-center justify-center'>
          <img
          src='../images/me-walling-level1.jpg'
          className="m-4 max-h-60 max-w-60 lg:max-h-80 lg:max-w-80"
          alt='man building dry stone wall'
          />
          </div>

          <p>
          I'm available for work throughout the UK; <span className='underline hover:text-green-600'><Link href="/contact" passHref>contact</Link></span> me to discuss your needs.
          </p>
        </div>
      </div>
      </div>

<div className="relative mt-20 z-20 max-w-[100%]">
      <div className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white">
        <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <h3 className='font-bold'>Previous Work</h3>
        </div>
        <div className="text-lg">
          <p>
           Click or tap an image to hide/show text. Full screen button top left.
           </p>
           <br />
           <PreviousWork />
        </div>
      </div>
      <div className='w-full flex justify-center'>
      <div className="max-w-[50%] p-10 bg-black bg-opacity-80 text-center text-white text-xl mt-20">
        <p className='underline hover:text-green-600' onClick={handleHammerClick}><Link href="/contact" passHref>Contact me for a quote.</Link></p>
        
      </div>
      
      </div>
      <div className='flex items-center justify-center'>
          <img
          src='/images/hammer-no-background.png'
          className={`mt-40 h-40 w-40 ${rotate ? 'rotate-animation' : ''}`} 
          alt='walling hammer'
          onClick={handleHammerClick}
          />
          </div>
    </div>
    </>
  );};

export default WallingServicesContent;