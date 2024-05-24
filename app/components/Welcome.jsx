import React, { useState } from 'react';
import Link from 'next/link';

const Welcome = () => {
  const [rotate, setRotate] = useState(false);

  const handleHammerClick = () => {
    setRotate(true);
    setTimeout(() => setRotate(false), 1000); 
  };

  return (
    <div className="relative mt-20 z-20">
      <div id="welcome-container" className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[100%]">
        <div className="text-2xl flex items-center justify-center inset-x-0 mb-4">
          Welcome to DryStoneWalls.UK
        </div>
        <div className="text-lg">
          <p>
            Hi, I'm Jake, a dry stone waller based in Huddersfield and I'm passionate about the art of dry stone walling. 
          </p>
          <p className="mt-4">
            Whether you need professional <span className='underline hover:text-green-600'><Link href="/wallingservices" passHref>walling services</Link></span>, or just want to learn more about dry stone walls, you've come to the right place.
          </p>
          <p className="mt-4">
          On this site, you can <span className='underline hover:text-green-600'><Link href="/learnthebasics" passHref>learn how</Link></span> to build dry stone walls, explore the <span className='underline hover:text-green-600'><Link href="/history" passHref>history</Link></span> of walling, discover different <span className='underline hover:text-green-600'><Link href="/walltypes" passHref>types of walls</Link></span> around the UK, and test your knowledge with the dry stone walling <span className='underline hover:text-green-600'><Link href="/quiz" passHref>quiz.</Link></span>
          </p>
          <p className="mt-4">
            Please feel free to <span className='underline hover:text-green-600'><Link href="/contact" passHref>contact</Link></span> me with any questions or to discuss your specific walling needs. I'm here to help you build strong, beautiful and enduring dry stone walls.
          </p>
          <p className="mt-4">
            Thanks for visiting!
          </p>
          <div className='flex w-full items-center justify-center'>
          <img
          src='/images/hammer-no-background.png'
          className={`mt-4 h-20 w-20 ${rotate ? 'rotate-animation' : ''}`} 
          alt='walling hammer'
          onClick={handleHammerClick}
          />
          </div>
        </div>
        <div className="mt-8 mb-4">
          <Link href="/homepage" passHref>
            <button className="menu-background hover:border-green-600 border-2 border-gray-600/0 text-white font-bold py-2 px-4">
              Enter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;