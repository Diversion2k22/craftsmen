import React, { useState, useEffect } from 'react';
import { Badge } from '@material-ui/core';
import Searchbar from '../Searchbar/Searchbar';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo.png';

import { useWindowDimensions } from '../../utils/windowUtils';

export default function Navbar(props) {
  const quantity = useSelector((state) => state.cart.quantity);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isBarOpen, setIsBarOpen] = useState(false);
  // const value = props.val;
  // console.log(props.val);
  const [isScroll, setIsScroll] = useState(false);
  const { width } = useWindowDimensions();

  const navScroll = () => {
    var scroll = window.scrollY;
    if (scroll >= 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
      setIsScroll(props.val);
    }
  };

  useEffect(() => {
    navScroll();

    window.addEventListener('scroll', navScroll);

    return () => {
      window.removeEventListener('scroll', navScroll);
    };
  }, []);

  return (
    <nav id={isScroll ? 'main-navbar-solid' : 'main-navbar-transparent'}>
      {isSearchBarOpen ? (
        <Searchbar setIsSearchBarOpen={setIsSearchBarOpen} />
      ) : (
        <>
          <div
            className={
              isScroll ? 'navbar-mid-area-solid' : 'navbar-mid-area-transparent'
            }
          >
            <div className='navbar-icons'>
              {width > 576 ? (
                <>
                  <a
                    href='https://www.instagram.com/craftsmen_gdsc/'
                    className='navbar-icons-styling'
                  >
                    <i className='fab fa-instagram'></i>
                  </a>
                  <a
                    href='https://github.com/Craftsmen-GDSC/'
                    className='navbar-icons-styling'
                  >
                    <i className='fab fa-github'></i>
                  </a>

                  <a
                    href='https://www.facebook.com/craftsmen.gdsc.iem/'
                    className='navbar-icons-styling'
                  >
                    <i className='fab fa-facebook-square'></i>
                  </a>

                  <a
                    href='https://twitter.com/CraftsmanO/'
                    className='navbar-icons-styling'
                  >
                    <i className='fab fa-twitter'></i>
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
                      <i className='fas fa-times'></i>
                    </a>
                  ) : (
                    <a
                      href='#!'
                      className='navbar-icons-styling'
                      onClick={() => setIsBarOpen(true)}
                    >
                      <i className='fas fa-bars'></i>
                    </a>
                  )}

                  <a
                    href='#!'
                    className='navbar-icons-styling'
                    onClick={() => setIsSearchBarOpen(true)}
                  >
                    <i className='fas fa-search'></i>
                  </a>
                </>
              )}
            </div>
            <div>
              {/* <h5 className='navbar-mid-heading'>CRAFTSMEN</h5> */}
              <Link to='/'>
                <img
                  style={{ width: '3.5rem', filter: 'contrast(100%)' }}
                  src={logo}
                  alt='Craftsmen Logo'
                />
              </Link>
            </div>
            <div>
              <div className='navbar-icons'>
                <a href='/login' className='navbar-icons-styling'>
                  <i className='far fa-user'></i>
                </a>

                {width > 576 && (
                  <a
                    href='#!'
                    className='navbar-icons-styling'
                    onClick={() => setIsSearchBarOpen(true)}
                  >
                    <i className='fas fa-search'></i>
                  </a>
                )}

                <Link to='/cart' style={{ color: 'white' }}>
                  <Badge badgeContent={quantity} color='primary'>
                    <ShoppingCartOutlined />
                  </Badge>
                </Link>
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
