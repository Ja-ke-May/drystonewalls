import React from 'react';
import Link from 'next/link';

const HistoryHomepage = () => {
 
  return (
    <div className="relative mt-20 z-20 max-w-[100%]">
      <div id="welcome-container" className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[100%]">
        <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <h3 className='underline hover:text-green-600 font-bold'><Link href="/history" passHref>History of Dry Stone Walling</Link></h3>
        </div>
        <div className="text-lg">
          <p>
          Delve into the past and uncover the ancient art of dry stone walling...
          </p>
          <div className='flex w-full items-center justify-center'>
          <img
          src='../images/orkney-stones.jpg'
          className="m-4 max-h-60 max-w-60 lg:max-h-80 lg:max-w-80"
          alt='Orkney Stones of Stenness'
          />
          </div>
          <p className='underline hover:text-green-600'><Link href="/history" passHref>Discover more about this timeless craft</Link>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default HistoryHomepage;