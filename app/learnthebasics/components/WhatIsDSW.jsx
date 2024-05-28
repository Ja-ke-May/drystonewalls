import React from 'react';

const WhatIsDSW = () => {
  

  return (
    <div className="relative mt-20 z-20">
      <section id="what-is-dsw" className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[75%]">
      <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <h3 className='font-bold'>What is a dry stone wall?</h3>
        </div>
      <p className='md:text-lg'>
        A dry stone wall is a type of wall constructed from stones without any mortar to bind them together. Built using carefully selected and skillfully placed stones, these walls are known for their durability and strength. They are a common sight in the UK countryside, particularly in areas like the Yorkshire Dales and the Cotswolds. Dry stone walls have been used for centuries to mark boundaries, enclose fields, and manage livestock, reflecting both the practical needs and the rich heritage of rural Britain.
      </p>
      <div className='w-full flex justify-center mt-2 mb-2'>
      <img 
      src='../images/wall-pattern-fields.jpg' 
      alt='wall pattern on fields'
      className='max-h-60 max-w-60 md:max-w-80 md:max-h-80 lg:max-h-96 lg:max-w-96'
       />
      </div>
      <p className='mt-2 md:text-lg '>
      <span className='text-green-600'>Interesting fact:</span> The total length of all the dry stone walls in the UK would wrap around the Earth's equator over 5 times!
      </p>
      </section>
    </div>
  );
};

export default WhatIsDSW;