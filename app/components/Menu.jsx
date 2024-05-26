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
className='fixed top-0 right-0 bg-black/80 text-white text-xl md:text-2xl p-4 pt-20 z-50'
>
        <Link href="/homepage" passHref>
      <button className="hover:text-green-600 text-lg block mt-2" title='home'>Home</button>
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
    </section>
 )}
</div>
<MenuIcon onMenuToggle={handleMenuClick} />
    </>
  );
};

export default Menu;
