import React, { useState } from 'react';
import Searchbar from './Searchbar';
import Sidebar from './Sidebar';
import './Navbar.css';
import logo from '../assets/logo.png';

import { useWindowDimensions } from '../utils/windowUtils';

export default function Navbar() {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isBarOpen, setIsBarOpen] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <nav id='main-navbar'>
      {/* <div className='navbar-top-area'>
        20% OFF with code 'BLVCKVDAY20' at checkout.
      </div> */}
      {isSearchBarOpen ? (
        <Searchbar setIsSearchBarOpen={setIsSearchBarOpen} />
      ) : (
        <>
          <div className='navbar-mid-area'>
            <div className='navbar-icons'>
              {width > 576 ? (
                <>
                  <a
                    href='https://www.instagram.com/craftsmen_gdsc/'
                    className='navbar-icons-styling'
                  >
                    <i class='fab fa-instagram'></i>
                  </a>
                  <a
                    href='https://github.com/Craftsmen-GDSC/'
                    className='navbar-icons-styling'
                  >
                    <i class='fab fa-github'></i>
                  </a>

                  <a href='#!' className='navbar-icons-styling'>
                    <i class='fab fa-facebook-square'></i>
                  </a>

                  <a href='#!' className='navbar-icons-styling'>
                    <i class='fab fa-twitter'></i>
                  </a>
                </>
              ) : (
                <>
                  {isBarOpen ? (
                    <a
                      href='#!'
                      className='navbar-icons-styling'
                      onClick={() => setIsBarOpen(false)}
                    >
                      <i class='fas fa-times'></i>
                    </a>
                  ) : (
                    <a
                      href='#!'
                      className='navbar-icons-styling'
                      onClick={() => setIsBarOpen(true)}
                    >
                      <i class='fas fa-bars'></i>
                    </a>
                  )}

                  <a
                    href='#!'
                    className='navbar-icons-styling'
                    onClick={() => setIsSearchBarOpen(true)}
                  >
                    <i class='fas fa-search'></i>
                  </a>
                </>
              )}
            </div>
            <div>
              {/* <h5 className='navbar-mid-heading'>CRAFTSMEN</h5> */}
              <img style={{ width: '4rem' }} src={logo} alt='Craftsmen Logo' />
            </div>
            <div>
              <div className='navbar-icons'>
                <a href='#!' className='navbar-icons-styling'>
                  <i class='far fa-user'></i>
                </a>

                {width > 576 && (
                  <a
                    href='#!'
                    className='navbar-icons-styling'
                    onClick={() => setIsSearchBarOpen(true)}
                  >
                    <i class='fas fa-search'></i>
                  </a>
                )}

                <a href='#!' className='navbar-icons-styling'>
                  <i class='fas fa-shopping-cart'></i>
                </a>
              </div>
            </div>
          </div>
          {width > 576 && (
            <div className='navbar-bottom-area'>
              <div className='navbar-menu-item-container'>
                <div className='navbar-menu-items'>MEN</div>
              </div>
              <div className='navbar-menu-item-container'>
                <div className='navbar-menu-items'>WOMEN</div>
              </div>
              <div className='navbar-menu-item-container'>
                <div className='navbar-menu-items'>ACCESSORIES</div>
              </div>
              <div className='navbar-menu-item-container'>
                <div className='navbar-menu-items'>HOME</div>
              </div>
            </div>
          )}
          {isBarOpen ? <Sidebar setIsBarOpen={setIsBarOpen} /> : <></>}
        </>
      )}
    </nav>
  );
}
