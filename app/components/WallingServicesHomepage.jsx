import React from 'react';
import Link from 'next/link';

const WallingServicesHomepage = () => {
 
  return (
    <div className="relative mt-20 z-20 max-w-[100%]">
      <div id="welcome-container" className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[100%]">
        <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <h3 className='underline hover:text-green-600 font-bold'><Link href="/wallingservices" passHref>Walling Services</Link></h3>
        </div>
        <div className="text-lg">
          <p>
            I'm available for work around the West Yorkshire area. 
          </p>
          <p>
          Field walling from £40 per metre. 
          </p>
          <p>
            Please <span className='underline hover:text-green-600'><Link href="/contact" passHref>contact</Link></span> me for a quote.
          </p>
  
          <div className='flex w-full items-center justify-center'>
          <img
          src='../images/me-with-big-stone.jpg'
          className="m-4 max-h-60 max-w-60 lg:max-h-80 lg:max-w-80"
          alt='man smiling with big stone'
          />
          </div>
          <p>
            Click <span className='underline hover:text-green-600'><Link href="/wallingservices" passHref>here</Link></span> for more info and to view my previous work.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default WallingServicesHomepage;