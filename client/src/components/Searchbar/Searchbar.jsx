import React from 'react';
import './Searchbar.css';
export default function Searchbar({ setIsSearchBarOpen }) {
  return (
    <div className='navbar-searchbar'>
      <a href='#!' className='navbar-icons-styling'>
        <i className='fas fa-search'></i>
      </a>
      <input type='text' placeholder='Search' />
      <a
        href='#!'
        className='navbar-icons-styling'
        onClick={() => setIsSearchBarOpen(false)}
      >
        <i className='fas fa-times'></i>
      </a>
    </div>
  );
}
