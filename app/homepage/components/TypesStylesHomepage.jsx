import React from 'react';
import Link from 'next/link';

const TypesStylesHomepage = () => {
 
  return (
    <div className="relative mt-20 z-20 max-w-[100%]">
      <div id="types-styles-container" className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[100%]">
        <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <h3 className='underline hover:text-green-600 font-bold'><Link href="/typesandstyles" passHref>Types and Styles</Link></h3>
        </div>
        <div className="text-lg">
          <p>
          Explore the variety of walls found throughout the UK.
          </p>
          <div className='flex w-full items-center justify-center'>
          <img
          src='../images/single-stack-gaps.jpg'
          className="m-4 max-h-60 max-w-60 lg:max-h-80 lg:max-w-80"
          alt='dry stone wall training walls'
          />
          </div>
          <p className='underline hover:text-green-600'><Link href="/typesandstyles" passHref>Take a Look</Link>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default TypesStylesHomepage;