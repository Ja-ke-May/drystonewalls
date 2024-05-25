import React from 'react';
import Link from 'next/link';

const QuizHomepage = () => {
 
  return (
    <div className="relative mt-20 z-20">
      <div id="welcome-container" className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[100%]">
        <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <h3 className='underline hover:text-green-600'><Link href="/quiz" passHref>Test your knowledge</Link></h3>
        </div>
        <div className="text-lg">
          <p>
          How will you do in the dry stone walling quiz? 
          </p>
          <div className='flex w-full items-center justify-center'>
          <img
          src='../images/tree-dry-stone-wall.jpg'
          className="m-4 max-h-60 max-w-60 lg:max-h-80 lg:max-w-80"
          alt='Dry stone wall leading to tree'
          />
          </div>
          <p className='underline hover:text-green-600'><Link href="/quiz" passHref>Lets go!</Link>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default QuizHomepage;