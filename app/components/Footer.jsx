"use client"; 

import React from 'react';
import Link from 'next/link';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id="footer" className="relative flex flex-col w-full bg-black/80 text-white text-center text-opacity-80 justify-center items-center mt-40 pt-5 pb-5 pr-1 pl-1">
      <img
          src='/images/main-logo.png'
          className='mt-2 h-20 max-w-40' 
          alt='walling hammer'
          />

      <Link href="/homepage" passHref>
      <button className="hover:text-green-600 text-lg block mt-2" title='homepage'>Home</button>
</Link>

<Link href="/wallingservices" passHref>
      <button className="hover:text-green-600 text-lg block" title='wallingservices'>Walling Services</button>
</Link>

<Link href="/learnthebasics" passHref>
      <button className="hover:text-green-600 text-lg block" title='learnthebasics'>Learn the basics</button>
</Link>

<Link href="/history" passHref>
      <button className="hover:text-green-600 text-lg block" title='history'>History</button>
</Link>

<Link href="/walltypes" passHref>
      <button className="hover:text-green-600 text-lg block" title='contact'>UK Wall Types</button>
</Link>

<Link href="/quiz" passHref>
      <button className="hover:text-green-600 text-lg block" title='contact'>Quiz</button>
</Link>

<Link href="/contact" passHref>
      <button className="hover:text-green-600 text-lg block" title='contact'>Contact</button>
</Link>

      <div className='w-[75%] md:w-[50%] menu-background h-2 m-4'></div>

      <a href="mailto:jacob.may@outlook.com" className="hover:text-green-600 text-xl block m-2" title='email'>Jacob.May@outlook.com</a>

      <a href="tel:07780685832" className="hover:text-green-600 text-xl block m-2" title='phone'>07780685832</a>

      <div className='w-[75%] md:w-[50%] menu-background h-2 m-4'></div>

     <a href="https://portfolio-tau-two-33.vercel.app/" className='hover:text-green-600 text-xl block m-2'>Jacob May - Web Developer Portfolio</a>

     <div className='w-[75%] md:w-[50%] menu-background h-2 m-4'></div>
     
      <a onClick={scrollToTop} className="hover:text-green-600 text-lg">Back to Top</a>
    </div>
  );
};

export default Footer;
