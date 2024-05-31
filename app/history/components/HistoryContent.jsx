import React from 'react';
import HistoryIntro from './HistoryIntro';
import Timeline from './Timeline';

const HistoryContent = () => {
  return (
    <div className="relative mt-10 z-20">
      <section id="history-content">

       <HistoryIntro />
       
       <Timeline />
       
       <div className='flex w-full items-center justify-center bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[75%] pb-10'>
          <img
          src='../images/Göbekli-Tepe-2.jpg'
          className="max-h-60 max-w-60 lg:max-h-80 lg:max-w-80"
          alt='Göbekli Tepe'
          />
          </div>

      </section>
    </div>
  );
};

export default HistoryContent;
