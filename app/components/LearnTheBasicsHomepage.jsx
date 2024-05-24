import React from 'react';
import Link from 'next/link';

const LearnTheBasicsHomepge = () => {
 
  return (
    <div className="relative mt-20 z-20">
      <div id="welcome-container" className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[100%]">
        <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <span className='underline hover:text-green-600'><Link href="/learnthebasics" passHref>Learn the basics</Link></span>
        </div>
        <div className="text-lg">
          <p>
            Want to learn how to build dry stone walls? 
          </p>
          <div className='flex w-full items-center justify-center'>
          <img
          src='../images/dry-stone-wall-stripped.jpg'
          className="m-4 max-h-60 max-w-60"
          alt='dry stone wall stripped and 1st lift'
          />
          </div>
          <p>
            Click <span className='underline hover:text-green-600'><Link href="/learnthebasics" passHref>here</Link></span> for more info.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default LearnTheBasicsHomepge;