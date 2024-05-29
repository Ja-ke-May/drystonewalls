import React from 'react';
import HistoryMoments from './HistoryMoments';

const Timeline = () => {
  

  return (
    <div className="relative z-20 ">
      <section id="timeline" className="pl-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[75%]">
      <div className="text-xl flex items-center ml-5 md:ml-20 inset-x-0 mb-2">
        <h3 className='font-bold'>Present Day</h3>
        </div>
        <div className='h-10 menu-background w-2 ml-5 md:ml-20'>

        </div>
      
        <HistoryMoments />

       
      </section>
    </div>
  );
};

export default Timeline; 