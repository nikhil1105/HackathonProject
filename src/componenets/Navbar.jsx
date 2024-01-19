import React, { useState } from 'react';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/" className='ml-4 font-bold text-blue-700'>
          Logo
        </a>
        <div className={`lg:flex flex justify-center items-center gap-16 mr-20 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div>
            <a
              href="/"
              className='font-montserrat leading-normal text-lg text-blue-600 font-bold hover:text-white'
            >
              Home
            </a>
          </div>
          <div>
            <a
              href="/"
              className='font-montserrat leading-normal text-lg text-blue-600 font-bold hover:text-white' 
            >
              About
            </a>
          </div>
          <div>
            <a
              href="/"
              className='font-montserrat leading-normal text-lg text-blue-600 font-bold hover:text-white'
            >
              Contact
            </a>
          </div>
        </div>
        <div className='lg:hidden'>
          <img
            src="./assets/hamburger.svg"
            alt="Hamburger"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={toggleMobileMenu}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
