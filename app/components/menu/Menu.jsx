import React, { useState } from 'react';
import './menu.css';
import MenuIcon from './MenuIcon';
import Link from 'next/link';

const Menu = ( { } ) => {

    const [showMenuList, setShowMenuList] = useState(false);

  
    const handleMenuClick = () => {
        setShowMenuList(prevState => !prevState);
      };  

  return (   
    <>
    <div>


{showMenuList && (

<section 
id="menu-list" 
className='fixed top-0 right-0 md:pr-2 md:pt-2 bg-black/90 text-white text-xl md:text-2xl p-4 z-50'
>
        <Link href="/homepage" passHref>
      <button className="hover:text-green-600 text-lg block mt-10" title='home'>Home</button>
</Link>

<Link href="/wallingservices" passHref>
      <button className="hover:text-green-600 text-lg block" title='wallingservices'>Walling Services</button>
</Link>

<Link href="/learnthebasics" passHref>
      <button className="hover:text-green-600 text-lg block" title='learnthebasics'>Learn the Basics</button>
</Link>

<Link href="/history" passHref>
      <button className="hover:text-green-600 text-lg block" title='history'>History</button>
</Link>

<Link href="/typesandstyles" passHref>
      <button className="hover:text-green-600 text-lg block" title='contact'>Types and Styles</button>
</Link>

<Link href="/quiz" passHref>
      <button className="hover:text-green-600 text-lg block" title='contact'>Quiz</button>
</Link>

<Link href="/contact" passHref>
      <button className="hover:text-green-600 text-lg block" title='contact'>Contact</button>
</Link>
    </section>
 )}
</div>
<MenuIcon onMenuToggle={handleMenuClick} />
    </>
  );
};

export default Menu;
