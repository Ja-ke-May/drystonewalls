import React from 'react';

const DateContainer = ({ historyMoment }) => {
  const { date, title, info, image } = historyMoment;

  return (
    <>
      <div className='h-full flex'>
        <p className='md:ml-6 md:text-lg font-mono'>{date}</p>
      </div>

      <div className='h-[100%] menu-background w-2 pt-2 ml-5 md:ml-20'>
        <div className="flex flex-row">
          <div className='flex flex-col text-right'>
            <h3 className='text-2xl md:text-2xl text-green-600'>{title}</h3>
            <p className='md:text-lg'>{info}</p>
            <img 
              src={image} 
              className='ml-10 max-h-60 mt-2 mb-20 max-w-60 md:max-w-80 md:max-h-80 lg:max-h-96 lg:max-w-96' 
              alt='History Image' 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DateContainer;
