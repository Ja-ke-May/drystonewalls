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
        <h2 className='underline hover:text-green-600 font-bold'><Link href="/wallingservices" passHref>Walling Services</Link></h2>
        </div>
        <div className="text-lg">
          <p>
          Located in Huddersfield, I offer field walling/gapping services starting at £40 per meter. 
          <br />
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
          I'm also available for work throughout the UK; <span className='underline hover:text-green-600'><Link href="/contact" passHref>contact</Link></span> me to discuss your needs.
          </p>
        </div>
      </div>
      </div>

<div className="relative mt-20 z-20 max-w-[100%]">
      <div className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white">
        <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <h3 className='underline font-bold'>Previous Work</h3>
        </div>
        <div className="text-lg">
          <p>
           Use the grey arrow buttons to scroll through the images. Click or tap an image to hide/show text. Full screen button top left.
           </p>
           <br />
           <PreviousWork />
        </div>
      </div>
      <div className='w-full flex justify-center'>
      <div className="max-w-[50%] p-10 bg-black bg-opacity-80 text-center text-white text-xl mt-20">
        <p><span className='underline hover:text-green-600'><Link href="/contact" passHref>Contact</Link></span> me for a quote.</p>
        <div className='flex items-center justify-center'>
          <img
          src='/images/hammer-no-background.png'
          className={`mt-4 h-20 w-20 ${rotate ? 'rotate-animation' : ''}`} 
          alt='walling hammer'
          onClick={handleHammerClick}
          />
          </div>
      </div>
      </div>
    </div>
    </>
  );};

export default WallingServicesContent;