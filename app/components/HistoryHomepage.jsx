import React from 'react';
import Link from 'next/link';

const HistoryHomepage = () => {
 
  return (
    <div className="relative mt-20 z-20">
      <div id="welcome-container" className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[100%]">
        <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <span className='underline hover:text-green-600'><Link href="/history" passHref>History of Dry Stone Walling</Link></span>
        </div>
        <div className="text-lg">
          <p>
          Delve into the past and uncover the ancient art of dry stone walling...
          </p>
          <div className='flex w-full items-center justify-center'>
          <img
          src='../images/stone-wall-windows.jpg'
          className="m-4 max-h-60 max-w-60"
          alt='dry stone wall windows'
          />
          </div>
          <p>
            Click <span className='underline hover:text-green-600'><Link href="/history" passHref>here</Link></span> for more info.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default HistoryHomepage;