import React, { useState } from 'react';
import './menu.css';

const MenuIcon = ( { onMenuToggle } ) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleContainerClick = () => {
    onMenuToggle();
    setIsClicked(prevState => !prevState); 
  };
  

  return (   
    
    <button id='menu-icon'
      className="items-center fixed top-0 right-4 mt-4 font-mono z-50"
      onClick={handleContainerClick}
    >
      <div 
        className={`w-[40px] md:w-[60px] h-2 menu-background m-2 ${isClicked ? 'top-animation' : 'top-animation-reverse'}`}
      >
        
      </div>
      <div className='w-[40px] md:w-[60px] h-2 menu-background m-2'>
        
        </div>
      <div 
        className={`w-[40px] md:w-[60px] h-2 menu-background m-2 ${isClicked ? 'bottom-animation' : 'bottom-animation-reverse'}`}
      >
        
      </div>
    </button>

  );
};

export default MenuIcon;
