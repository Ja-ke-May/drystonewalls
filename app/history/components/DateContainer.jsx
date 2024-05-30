import React from 'react';

const DateContainer = ({ historyMoment }) => {
  const { date, title, info, image, link, linkText } = historyMoment;

  return (
    <>
      <div className='flex'>
        <p className='md:ml-10 lg:ml-20 md:text-lg font-mono'>{date}</p>
      </div>

      <div className='menu-background w-2 pt-2 ml-2 md:ml-20 lg:ml-40'>
        <div className="flex flex-row">
          <div className='flex flex-col text-right pl-4'>
            <h3 className='text-2xl md:text-2xl text-green-600'>{title}</h3>
            <p className='md:text-lg mt-2'>{info}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className='underline text-green-600 mt-2 mb-2'>{linkText}</a>
            <img 
              src={image} 
              className='ml-10 md:ml-20 max-h-60 mt-2 mb-20 max-w-60 md:max-w-80 md:max-h-80 lg:max-h-96 lg:max-w-96' 
              alt='History Image' 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DateContainer;
