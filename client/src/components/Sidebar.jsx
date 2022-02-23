import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sliding-part'>
        <div className='top-section-sidebar'>
          <div className='top-section-sidebar-item'>
            <div>MEN</div>
            <a href='#!' className='sidebar-icons-styling'>
              <i class='fas fa-angle-right'></i>
            </a>
          </div>
          <div className='top-section-sidebar-item'>
            <div>WOMEN</div>
            <a href='#!' className='sidebar-icons-styling'>
              <i class='fas fa-angle-right'></i>
            </a>
          </div>
          <div className='top-section-sidebar-item'>
            <div>ACSESSORIES</div>
            <a href='#!' className='sidebar-icons-styling'>
              <i class='fas fa-angle-right'></i>
            </a>
          </div>
          <div className='top-section-sidebar-item'>
            <div>HOME</div>
            <a href='#!' className='sidebar-icons-styling'>
              <i class='fas fa-angle-right'></i>
            </a>
          </div>
        </div>
        <div className='bottom-section-sidebar'>
          <div>BLOG</div>
          <div>CONTACT</div>
          <div>RETURNS</div>
          <div>SHIPPING</div>
        </div>
      </div>
      <div className='fixed-section-sidebar'>
        <div className='sidebar-icons'>
          <a
            href='https://www.instagram.com/craftsmen_gdsc/'
            className='sidebar-icons-styling'
          >
            <i class='fab fa-instagram'></i>
          </a>
          <a
            href='https://github.com/Craftsmen-GDSC/'
            className='sidebar-icons-styling'
          >
            <i class='fab fa-github'></i>
          </a>
          <a
            href='https://www.facebook.com/craftsmen.gdsc.iem/'
            className='sidebar-icons-styling'
          >
            <i class='fab fa-facebook-square'></i>
          </a>

          <a
            href='https://twitter.com/CraftsmanO/'
            className='sidebar-icons-styling'
          >
            <i class='fab fa-twitter'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
