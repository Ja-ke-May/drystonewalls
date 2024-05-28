import React from 'react';

const ToolsAndEquipment = () => {
  return (
    <div className="relative mt-20 z-20">
      <div id="tools-equipment" className="p-6 bg-black bg-opacity-80 text-center text-white w-full">
        <div className="text-xl flex items-center justify-center mb-4">
          <h3 className='font-bold'>Tools and Equipment</h3>
        </div>
        <div className='w-full flex justify-center mt-4 mb-4'>
      <img 
      src='../images/walling-tools.jpg' 
      alt='dry stone wall tools and equipment'
      className='max-h-60 max-w-60 md:max-w-80 md:max-h-80 lg:max-h-96 lg:max-w-96'
       />
      </div> 
        <p className='md:text-lg'>
          Repairing dry stone walls demands a range of essential tools, tailored to the specific needs of each project. While the toolkit may vary, here are the fundamental items to consider:
          <ul>
            <li className="mt-2"><strong className='text-green-600'>Walling Hammer</strong>: Ideal for shaping and dressing stones to fit seamlessly.</li>
            <li className="mt-2"><strong className='text-green-600'>Shovel</strong>: Essential for excavating foundations and handling soil movement efficiently.</li>
            <li className="mt-2"><strong className='text-green-600'>Protective Gloves</strong>: Crucial for safeguarding hands against sharp edges and rough surfaces.</li>
            <li className="mt-2"><strong className='text-green-600'>Eye Protection</strong>: Necessary to shield eyes from potential debris during construction.</li>
            <li className="mt-2"><strong className='text-green-600'>Steel Toe-Cap Boots</strong>: Vital for safeguarding feet from the weight of heavy stones.</li>
            <li className="mt-2"><strong className='text-green-600'>Walling Lines</strong>: Indispensable for maintaining straight and level lines throughout the construction process.</li>
            <li className="mt-2"><strong className='text-green-600'>Pick or Mattock</strong>: Useful for breaking up stubborn ground and preparing the site.</li>
            <li className="mt-2"><strong className='text-green-600'>Crowbar</strong>: Essential for lifting and maneuvering heavy stones into place.</li>
            <li className="mt-2"><strong className='text-green-600'>Buckets</strong>: Practical for transporting smaller stones and tools around the worksite.</li>
            <li className="mt-2"><strong className='text-green-600'>Spirit Level</strong>: Crucial for ensuring the wall remains precisely level and true as it progresses.</li>
            <li className="mt-2"><strong className='text-green-600'>Tape Measure</strong>: Essential for accurately measuring required widths and heights, ensuring precision in the construction process.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default ToolsAndEquipment;
