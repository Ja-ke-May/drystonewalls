import React from 'react';
import Link from 'next/link';

const LearnTheBasicsHomepge = () => {
 
  return (
    <div className="relative mt-20 z-20 max-w-[100%]">
      <div id="learn-the-basics-homepage-container" className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[100%]">
        <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <h3 className='underline hover:text-green-600 font-bold'><Link href="/learnthebasics" passHref>Learn The Basics</Link></h3>
        </div>
        <div className="text-lg">
          <p>
          Interested in building dry stone walls?
          </p>
          <div className='flex w-full items-center justify-center'>
          <img
          src='../images/dry-stone-wall-stripped.jpg'
          className="m-4 max-h-60 max-w-60 lg:max-h-80 lg:max-w-80"
          alt='dry stone wall stripped and 1st lift'
          />
          </div>
          <p>
          <span className='underline hover:text-green-600'><Link href="/learnthebasics" passHref>Start Your Journey Here</Link></span>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default LearnTheBasicsHomepge;