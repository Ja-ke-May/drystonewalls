import React from 'react';
import HistoryMoments from './HistoryMoments';

const Timeline = () => {
  

  return (
    <div className="relative z-20 ">
      <section id="timeline" className="pl-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[75%]">
      <div className="text-xl flex items-center ml-2 md:ml-20 lg:ml-40 inset-x-0 mb-2">
        <h3 className='font-bold mt-4'>Present Day</h3>
        </div>
        <div className='h-10 menu-background w-2 ml-2 md:ml-20 lg:ml-40'>
        </div>
      
        <HistoryMoments />
        <div className="text-xl flex items-center ml-2 md:ml-20 lg:ml-40 inset-x-0 mb-2">
        <h3 className='font-bold mt-2'>Ancient History</h3>
        </div>

        <div className='h-2 menu-background w-full translate-x-[-11px] mt-10'>
        </div>
        <div className='w-full flex justify-center mt-5 pr-5 pb-10'>
        <p className='text-center text-lg md:max-w-[50vw] p-5'>As we delve into the depths of history, one truth emerges: dry stone walls have been integral to human construction since antiquity. While their exact origins may be shrouded in the mists of time, it's reasonable to assume that from the earliest days of mankind, when our ancestors first handled stones, the concept of stacking them for shelters and boundaries took root. Though specifics evade us, the lasting presence of dry stone walls attests to humanity's ingenuity and enduring connection to the land.</p>
        </div>
        </section>
    </div>
  );
};

export default Timeline; 