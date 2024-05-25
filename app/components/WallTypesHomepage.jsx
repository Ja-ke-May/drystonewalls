import React from 'react';
import Link from 'next/link';

const WallTypesHomepage = () => {
 
  return (
    <div className="relative mt-20 z-20">
      <div id="welcome-container" className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[100%]">
        <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <span className='underline hover:text-green-600'><Link href="/walltypes" passHref>Types of wall around the UK</Link></span>
        </div>
        <div className="text-lg">
          <p>
          Explore the variety of wall types and stone found throughout the UK.
          </p>
          <div className='flex w-full items-center justify-center'>
          <img
          src='../images/different-wall-types.jpg'
          className="m-4 max-h-60 max-w-60 lg:max-h-80 lg:max-w-80"
          alt='dry stone wall training walls'
          />
          </div>
          <p className='underline hover:text-green-600'><Link href="/walltypes" passHref>Take a Look</Link>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default WallTypesHomepage;