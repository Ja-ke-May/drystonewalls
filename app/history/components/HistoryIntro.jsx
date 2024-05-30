import React from 'react';
import Link from 'next/link';

const HistoryIntro = () => {
  

  return (
    <div className="relative z-20 mb-20 ">
      <section id="history-intro" className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[75%]">
      <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <h3 className='font-bold'>Welcome to the Dry Stone Wall Timeline</h3>
        </div>
      <p className='md:text-lg mb-4'>
      Scroll down to explore the history of dry stone walling, from the present day to over 5,000 years ago!</p>
      <div className='w-full flex justify-center mt-2 mb-2'>
      <img 
      src='../images/wall-river.jpg' 
      alt='dry stone wall next to stream'
      className='max-h-60 max-w-60 md:max-w-80 md:max-h-80 lg:max-h-96 lg:max-w-96'
       />
      </div>
      <p className='mt-4 md:text-lg '>If you know an interesting moment in the history of dry stone walling that you think should be added to the timeline, <span className='underline hover:text-green-600'><Link href="/contact" passHref>let me know</Link></span>
      </p>
      </section>
    </div>
  );
};

export default HistoryIntro;